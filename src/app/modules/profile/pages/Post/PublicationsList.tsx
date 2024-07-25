import React, { FC } from 'react';
import Publication from './Publication';

interface PublicationsListProps {
  publications: Array<{
    author: string;
    date: string;
    content: string;
    image: string;
    type: 'video' | 'image' | 'text';
  }>;
}

export const PublicationsList: FC<PublicationsListProps> = ({ publications }) => {
  return (
    <div>
      {publications.map((pub, index) => (
        <Publication
          key={index}
          author={pub.author}
          date={pub.date}
          content={pub.content}
          image={pub.image}
          type={pub.type}
        />
      ))}
    </div>
  );
};

export const PublicationsGrid: FC<PublicationsListProps> = ({ publications }) => {
  return (
    <div className='d-flex flex-wrap'>
      {publications.map((pub, index) => (
        <div key={index} className='p-2' style={{ flex: '0 1 calc(33.333% - 1rem)' }}>
          <Publication
            author={pub.author}
            date={pub.date}
            content={pub.content}
            image={pub.image}
            type={pub.type}
          />
        </div>
      ))}
    </div>
  );
};
