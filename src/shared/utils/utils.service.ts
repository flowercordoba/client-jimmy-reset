/* eslint-disable @typescript-eslint/no-explicit-any */
import { floor, random, some, findIndex, List } from 'lodash';
import millify from 'millify';
import { clearNotification, addNotification } from '../reducers/notifications/notification.reducer';
import { addUser, clearUser } from '../reducers/user/user.reducer';
import { avatarColors } from './static.data';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { APP_ENVIRONMENT } from '../services/axios';

export class Utils {
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)];
  }

  static generateAvatar(text: string, backgroundColor: string | CanvasGradient | CanvasPattern, foregroundColor = 'white') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 200;
    canvas.height = 200;

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = 'normal 80px sans-serif';
    context.fillStyle = foregroundColor;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL('image/png');
  }

  static dispatchUser(result: { data: { token: any; user: any; }; }, pageReload: (arg0: boolean) => void, dispatch: (arg0: { payload: any; type: "user/addUser"; }) => void, setUser: (arg0: any) => void) {
    pageReload(true);
    dispatch(addUser({ token: result.data.token, profile: result.data.user }));
    setUser(result.data.user);
  }

  static clearStore({ dispatch, deleteStorageUsername, deleteSessionPageReload, setLoggedIn }) {
    dispatch(clearUser());
    dispatch(clearNotification());
    deleteStorageUsername();
    deleteSessionPageReload();
    setLoggedIn(false);
  }

  static dispatchNotification(message: any, type: string, dispatch: ThunkDispatch<unknown, unknown, AnyAction>) {
    dispatch(addNotification({ message, type }));
  }

  static dispatchClearNotification(dispatch: (arg0: { payload: undefined; type: "notifications/clearNotification"; }) => void) {
    dispatch(clearNotification());
  }

  static appEnvironment() {
    if (APP_ENVIRONMENT === 'local') {
      return 'LOCAL';
    } else if (APP_ENVIRONMENT === 'development') {
      return 'DEV';
    } else if (APP_ENVIRONMENT === 'staging') {
      return 'STG';
    }
  }

  static mapSettingsDropdownItems(setSettings: (arg0: { topText: string; subText: string; }[]) => void) {
    const items = [];
    const item = {
      topText: 'My Profile',
      subText: 'View personal profile.'
    };
    items.push(item);
    setSettings(items);
    return items;
  }

  static appImageUrl(version: string, id: string) {
    if (typeof version === 'string' && typeof id === 'string') {
      version = version.replace(/['"]+/g, '');
      id = id.replace(/['"]+/g, '');
    }
    return `https://res.cloudinary.com/dzqpacupf/image/upload/v${version}/${id}`;
  }

  static generateString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static checkIfUserIsBlocked(blocked: any, userId: any) {
    return some(blocked, (id) => id === userId);
  }

  static checkIfUserIsFollowed(userFollowers: any, postCreatorId: any, userId: any) {
    return some(userFollowers, (user) => user._id === postCreatorId || postCreatorId === userId);
  }

  static checkIfUserIsOnline(username: string, onlineUsers: any) {
    return some(onlineUsers, (user) => user === username?.toLowerCase());
  }

  static firstLetterUpperCase(word: string) {
    if (!word) return '';
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }

  static formattedReactions(reactions: ArrayLike<unknown> | { [s: string]: unknown; }) {
    const postReactions = [];
    for (const [key, value] of Object.entries(reactions)) {
      if (value > 0) {
        const reactionObject = {
          type: key,
          value
        };
        postReactions.push(reactionObject);
      }
    }
    return postReactions;
  }

  static shortenLargeNumbers(data: number | undefined) {
    if (data === undefined) {
      return 0;
    } else {
      return millify(data);
    }
  }

  static getImage(imageId: any, imageVersion: any) {
    return imageId && imageVersion ? this.appImageUrl(imageVersion, imageId) : '';
  }

  static getVideo(videoId: any, videoVersion: any) {
    return videoId && videoVersion
      ? `https://res.cloudinary.com/dzqpacupf/video/upload/v${videoVersion}/${videoId}`
      : '';
  }

  static removeUserFromList(list: any[] | List<unknown> | null | undefined, userId: unknown) {
    const index = findIndex(list, (id) => id === userId);
    list.splice(index, 1);
    return list;
  }

  static checkUrl(url: string | any[], word: any) {
    return url.includes(word);
  }

  static renameFile(element: { name: string; slice: (arg0: number, arg1: any, arg2: string) => any; size: any; }) {
    const fileName = element.name.split('.').slice(0, -1).join('.');
    const blob = element.slice(0, element.size, '/image/png');
    const newFile = new File([blob], `${fileName}.png`, { type: '/image/png' });
    return newFile;
  }
}
