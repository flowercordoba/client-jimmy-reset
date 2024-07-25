import React from 'react';

interface ProfilePictureProps {
  src: string;
  name: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, name }) => {
  return (
    <div className="profile-picture">
      <img src={src} alt="Profile" className="profile-img" />
      <span className="profile-name">{name}</span>
    </div>
  );
};

export { ProfilePicture };
