import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getUserImages, uploadProfileImage } from '../../../../../shared/services/images.service';
import { useAuth } from '../../../auth';
import { readAsBase64 } from '../../../../../shared/utils/image-utils.service';

const ProfileImage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [userImages, setUserImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { currentUser, refreshUser } = useAuth();

  const handleClose = () => {
    setShowModal(false);
    setSelectedFile(null);
    setSelectedImage(null);
  };
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    const fetchUserImages = async () => {
      try {
        const images = await getUserImages(currentUser?.user._id || '');
        setUserImages(images);
      } catch (error) {
        console.error('Error al obtener las imágenes del usuario:', error);
      }
    };

    fetchUserImages();
  }, [currentUser?.user._id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      setSelectedImage(null);
    }
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const image = await readAsBase64(selectedFile)
        await uploadProfileImage(image);
        refreshUser(currentUser?.token || '')
        handleClose();
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    } else if (selectedImage) {
      // Aquí puedes manejar la selección de una imagen existente
      console.log('Imagen seleccionada:', selectedImage);
      handleClose();
    }
  };

  return (
    <>
      <div
        className="m-0 symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={handleShow}
      >
        {/* aqui portada */}
        <img
          src={ 'https://images.unsplash.com/photo-1721804978753-6533263d89f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          // src={currentUser?.user.profilePicture || 'https://images.unsplash.com/photo-1721804978753-6533263d89f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          className="img-fluid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "10px",
            right: "10px",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
            zIndex: 1
          }}
        >
          <i className="fas fa-camera" style={{ fontSize: "16px", color: "black" }}></i>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Elegir foto del perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between mb-3">
            <Button variant="primary" onClick={() => document.getElementById('fileInput')?.click()}>+ Subir foto</Button>
            <input type="file" id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} />
          </div>
          <div className="mb-3">
            <h5>Fotos sugeridas</h5>
            <div className="d-flex flex-wrap">
              {userImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Foto sugerida"
                  className={`img-thumbnail m-1 ${selectedImage === image ? 'border-primary' : ''}`}
                  onClick={() => handleImageSelect(image)}
                  style={{ cursor: 'pointer', borderWidth: selectedImage === image ? '2px' : '1px' }}
                />
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileImage;
