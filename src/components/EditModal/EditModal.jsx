import "./EditModal.css";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const EditModal = ({ children, onClose, onSubmit }) => {
    useEffect(()=>{
            const checkKey = (event)=>{
                if (event.keyCode === 27) {
                    onClose() 
                }
            }
            window.addEventListener('keydown',checkKey)
            return () => window.removeEventListener('keydown',checkKey)
        })
  return (
    <div className="modal-parent active">
      <form action="" className="edit-modal-form">
        <h1>اطلاعات جدید را وارد نمایید</h1>
        {children}
        <button className="edit-form-submit" onClick={onSubmit}>ثبت اطلاعات جدید</button>
      </form>
    </div>
  );
};

export default EditModal;
