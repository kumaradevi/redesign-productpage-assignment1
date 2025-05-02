import React from 'react';

interface PatientSignUpPopupProps {
  popupButtonStatus: boolean;
  hcfLogin: boolean;
  buttonChildren: React.ReactNode;
}

const PatientSignUpPopup: React.FC<PatientSignUpPopupProps> = ({
  popupButtonStatus,
  hcfLogin,
  buttonChildren,
}) => {
  return (
    <>
 
      {popupButtonStatus && (
        <div className="popup-overlay">
          <div className="popup-content">
            {/* Close Button */}
            <button className="popup-close">X</button>

            {/* Popup Content */}
            <div className="popup-body">
              <h2>{hcfLogin ? 'Login to Healthcare Facility' : 'Patient Sign Up'}</h2>

             
            </div>
          </div>
        </div>
      )}
       <div className="popup-body-content">
                {/* Button passed as children */}
                {buttonChildren}
              </div>
    </>
  );
};

export default PatientSignUpPopup;
