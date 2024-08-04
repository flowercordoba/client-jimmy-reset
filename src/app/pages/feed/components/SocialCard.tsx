import React from 'react';
import { useAuth } from '../../../modules/auth';

const SocialCard: React.FC = () => {
    const { currentUser } = useAuth();
    // src={`${currentUser?.user.profilePicture}`}
  return (
    <div className="card card-flush mb-10">
    
      <div className="card-header justify-content-start align-items-center pt-4">
        {/* Photo */}
        <div className="symbol symbol-45px me-5">
          <img src={`${currentUser?.user.profilePicture}`}
             className="rounded-circle"
             style={{ width: "40px", height: "40px", objectFit: "cover" }}/>
        </div>
     
        <span className="text-gray-500 fw-semibold fs-6">En que piensas?, {`${currentUser?.user.username}`}?</span>
      </div>
 
      <div className="card-body pt-2 pb-0">
    
        <textarea 
          className="form-control bg-transparent border-0 px-0" 
          id="kt_social_feeds_post_input" 
          name="message" 
          data-kt-autosize="true" 
          rows={1} 
          placeholder="Type your message..."
        />
   
      </div>
     
      <div className="card-footer d-flex justify-content-end pt-0">
   
        <a  className="btn btn-sm btn-primary" id="kt_social_feeds_post_btn">
       
          <span className="indicator-label">Publicar</span>
         
          <span className="indicator-progress">Please wait... 
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
       
        </a>
       
      </div>
     
    </div>
  );
};

export default SocialCard;
