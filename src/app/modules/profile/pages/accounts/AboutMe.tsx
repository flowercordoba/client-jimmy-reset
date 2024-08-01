// import React from 'react';
// import { Link } from 'react-router-dom';

type Props = {
  name: string
}

const AboutMe = (props: Props) => {
  return (
    <div>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <h1 className="fw-bolder me-3">{ props.name }</h1>
          {/* <span className="badge bg-primary">364 amigos</span> */}
        </div>
        {/* <div>
          <button className="btn btn-primary me-2">+ Agregar a historia</button>
          <Link to="/profile/edit" className="btn btn-secondary">Editar perfil</Link>
        </div> */}
      </div>

      {/* Friends Section */}
      {/* <div className="d-flex">
        {['https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'].map((friend, index) => (
          <img
            key={index}
            src={friend}
            alt="Friend"
            className="rounded-circle border border-white me-1"
            style={{ width: '30px', height: '30px' }}
          />
        ))}
      </div> */}
    </div>
  );
};

export default AboutMe;
