import ReactDOM from "react-dom";
import "./DeleteModal.css";
const DeleteModal = ({cancel,submit}) => {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>آیا از حذف اطمینان دارید ؟</h1>
        <div className="del-modal-btns">
          <button className="del-modal-btn del-accept-btn" onClick={()=>submit()}>بله</button>
          <button className="del-modal-btn del-modal-btn" onClick={()=>cancel()}>خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
};

export default DeleteModal;
