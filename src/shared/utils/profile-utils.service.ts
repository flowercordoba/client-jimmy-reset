/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSearchParams } from 'react-router-dom';

export class ProfileUtils {
  static navigateToProfile(data: { username: any; _id: any; uId: any; }, navigate: (arg0: string) => void) {
    const url = `/app/social/profile/${data?.username}?${createSearchParams({ id: data?._id, uId: data?.uId })}`;
    navigate(url);
  }
}
