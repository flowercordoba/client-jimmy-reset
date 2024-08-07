/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { floor, random, some, findIndex, List } from 'lodash';
import millify from 'millify';
// import { clearNotification, addNotification } from '../reducers/notifications/notification.reducer';
import { addUser, clearUser } from '../reducers/user/user.reducer';
// import { avatarColors } from './static.data';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { APP_ENVIRONMENT } from '../services/axios';
// import { clearNotification, addNotification } from '../reducers/notifications/notification.reducer';
import { avatarColors } from './static.data';

export class Utils {

  // Método para obtener un color de avatar aleatorio
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)];
  }

  // Método para generar un avatar basado en texto
  static generateAvatar(text: string, backgroundColor: string | CanvasGradient | CanvasPattern, foregroundColor = 'white') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('No se pudo obtener el contexto del canvas');
    }

    canvas.width = 200;
    canvas.height = 200;

    // context.fillStyle = backgroundColor;
    // context.fillRect(0, 0, canvas.width, canvas.height);


    // Dibujar el texto en el avatar
    context.font = 'normal 80px sans-serif';
    context.fillStyle = foregroundColor;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL('image/png');
  }

  // Método para despachar y almacenar la información del usuario
  static dispatchUser(result: { data: { token: any; user: any; }; }, pageReload: (arg0: boolean) => void, dispatch: (arg0: { payload: any; type: "user/addUser"; }) => void, setUser: (arg0: any) => void) {
    pageReload(true);
    dispatch(addUser({ token: result.data.token, profile: result.data.user }));
    setUser(result.data.user);
  }


  // Método para limpiar la tienda (store) de la aplicación
  static clearStore({ dispatch, deleteStorageUsername, deleteSessionPageReload, setLoggedIn }: { dispatch: any; deleteStorageUsername: () => void; deleteSessionPageReload: () => void; setLoggedIn: (value: boolean) => void; }) {
    dispatch(clearUser());
    // dispatch(clearNotification());
    deleteStorageUsername();
    deleteSessionPageReload();
    setLoggedIn(false);
}


  // Método para despachar una notificación
  static dispatchNotification(message: any, type: string, dispatch: ThunkDispatch<unknown, unknown, AnyAction>) {
    // dispatch(addNotification({ message, type }));
  }

  // Método para limpiar las notificaciones
  static dispatchClearNotification(dispatch: (arg0: { payload: undefined; type: "notifications/clearNotification"; }) => void) {
    // dispatch(clearNotification());
  }

  // Método para obtener el entorno de la aplicación
  static appEnvironment() {
    if (APP_ENVIRONMENT === 'local') {
      return 'LOCAL';
    } else if (APP_ENVIRONMENT === 'development') {
      return 'DEV';
    } else if (APP_ENVIRONMENT === 'staging') {
      return 'STG';
    }
  }

  // Método para mapear los elementos del dropdown de configuraciones
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

  // Método para obtener la URL de una imagen en base a su versión e ID
  static appImageUrl(version: string, id: string) {
    if (typeof version === 'string' && typeof id === 'string') {
      version = version.replace(/['"]+/g, '');
      id = id.replace(/['"]+/g, '');
    }
    return `https://res.cloudinary.com/dzqpacupf/image/upload/v${version}/${id}`;
  }

  // Método para generar una cadena de texto aleatoria
  static generateString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // Método para verificar si un usuario está bloqueado
  static checkIfUserIsBlocked(blocked: any, userId: any) {
    return some(blocked, (id) => id === userId);
  }

  // Método para verificar si un usuario está siguiendo a otro
  static checkIfUserIsFollowed(userFollowers: any, postCreatorId: any, userId: any) {
    return some(userFollowers, (user) => user._id === postCreatorId || postCreatorId === userId);
  }

  // Método para verificar si un usuario está en línea
  static checkIfUserIsOnline(username: string, onlineUsers: any) {
    return some(onlineUsers, (user) => user === username?.toLowerCase());
  }

  // Método para poner en mayúscula la primera letra de una palabra
  static firstLetterUpperCase(word: string) {
    if (!word) return '';
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }

  // Método para formatear las reacciones
  static formattedReactions(reactions: ArrayLike<unknown> | { [s: string]: unknown }) {
    const postReactions = [];
    for (const [key, value] of Object.entries(reactions)) {
      if (typeof value === 'number' && value > 0) {
        const reactionObject = {
          type: key,
          value
        };
        postReactions.push(reactionObject);
      }
    }
    return postReactions;
}

  // Método para acortar números grandes
  static shortenLargeNumbers(data: number | undefined) {
    if (data === undefined) {
      return 0;
    } else {
      return millify(data);
    }
  }

  // Método para obtener la URL de una imagen
  static getImage(imageId: any, imageVersion: any) {
    return imageId && imageVersion ? this.appImageUrl(imageVersion, imageId) : '';
  }

  // Método para obtener la URL de un video
  static getVideo(videoId: any, videoVersion: any) {
    return videoId && videoVersion
      ? `https://res.cloudinary.com/dzqpacupf/video/upload/v${videoVersion}/${videoId}`
      : '';
  }


// Método para eliminar un usuario de una lista
static removeUserFromList(list: any[] | List<unknown> | null | undefined, userId: unknown) {
  if (Array.isArray(list)) {
      const index = findIndex(list, (id) => id === userId);
      if (index !== -1) {
          list.splice(index, 1);
      }
  }
  return list;
}

  // Método para verificar si una URL contiene una palabra específica
  static checkUrl(url: string | any[], word: any) {
    return url.includes(word);
  }

  // Método para renombrar un archivo
  static renameFile(element: { name: string; slice: (arg0: number, arg1: any, arg2: string) => any; size: any; }) {
    const fileName = element.name.split('.').slice(0, -1).join('.');
    const blob = element.slice(0, element.size, '/image/png');
    const newFile = new File([blob], `${fileName}.png`, { type: '/image/png' });
    return newFile;
  }
}