// import { FC, useState, useEffect } from "react";

// import { Modal, Button } from 'react-bootstrap';
// import { getUserImages, uploadCoverImage } from "../../../shared/services/images.service";
// import { Content } from "../../../features/layout/components/content";
// import AboutMe from "../profile/pages/accounts/AboutMe";
// import { ItemsNavegation } from "../profile/pages/accounts/ItemsNavegation";
// import ProfileImage from "../profile/pages/accounts/ProfileImage";

// const AccountHeader: FC<{ userId: string }> = ({ userId }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [userImages, setUserImages] = useState<string[]>([]);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const handleClose = () => {
//     setShowModal(false);
//     setSelectedFile(null);
//     setSelectedImage(null);
//   };
//   const handleShow = () => setShowModal(true);

//   useEffect(() => {
//     const fetchUserImages = async () => {
//       try {
//         const images = await getUserImages(userId);
//         setUserImages(images);
//       } catch (error) {
//         console.error('Error al obtener las imágenes del usuario:', error);
//       }
//     };

//     fetchUserImages();
//   }, [userId]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setSelectedFile(e.target.files[0]);
//       setSelectedImage(null);
//     }
//   };

//   const handleImageSelect = (image: string) => {
//     setSelectedImage(image);
//     setSelectedFile(null);
//   };

//   const handleUpload = async () => {
//     if (selectedFile) {
//       try {
//         const response = await uploadCoverImage(selectedFile);
//         console.log('Imagen subida:', response);
//         handleClose();
//       } catch (error) {
//         console.error('Error al subir la imagen:', error);
//       }
//     } else if (selectedImage) {
//       // Aquí puedes manejar la selección de una imagen existente
//       console.log('Imagen seleccionada:', selectedImage);
//       handleClose();
//     }
//   };

//   return (
//     <>
//       <Content>
//         <div className="card mb-5 mb-xl-10">
//           <div className="card-body pt-9 pb-0">
//             {/* Portada */}
//             <div className="rounded w-100 mb-7" style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
//               <img 
//                 src="https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Portada"
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//               <div
//                 className="position-absolute"
//                 style={{
//                   bottom: "10px",
//                   right: "10px",
//                   backgroundColor: "white",
//                   borderRadius: "50%",
//                   padding: "10px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
//                   cursor: "pointer",
//                   zIndex: 1
//                 }}
//                 onClick={handleShow}
//               >
//                 <i className="fas fa-camera" style={{ fontSize: "16px", color: "black" }}></i>
//               </div>
//             </div>
//             <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
//               {/* Imagen de Perfil */}
//               <div className="me-7 mb-4" style={{ marginTop: '-80px' }}>
//                 <ProfileImage userId={userId} />
//               </div>
//               <AboutMe />
//             </div>
//             <ItemsNavegation />
//           </div>
//         </div>
//       </Content>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Elegir foto de portada</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="d-flex justify-content-between mb-3">
//             <Button variant="primary" onClick={() => document.getElementById('coverFileInput')?.click()}>+ Subir foto</Button>
//             <input type="file" id="coverFileInput" onChange={handleFileChange} style={{ display: 'none' }} />
//           </div>
//           <div className="mb-3">
//             <h5>Fotos sugeridas</h5>
//             <div className="d-flex flex-wrap">
//               {userImages.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt="Foto sugerida"
//                   className={`img-thumbnail m-1 ${selectedImage === image ? 'border-primary' : ''}`}
//                   onClick={() => handleImageSelect(image)}
//                   style={{ cursor: 'pointer', borderWidth: selectedImage === image ? '2px' : '1px' }}
//                 />
//               ))}
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cerrar
//           </Button>
//           <Button variant="primary" onClick={handleUpload}>
//             Guardar cambios
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export { AccountHeader };
