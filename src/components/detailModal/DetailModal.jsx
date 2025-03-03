import { useEffect } from "react";
import "./DetailModal.css";
// eslint-disable-next-line react/prop-types
const DetailModal = ({onhide}) => {
    useEffect(()=>{
        const checkKey = (event)=>{
            if (event.keyCode === 27) {
                onhide() 
            }
        }
        window.addEventListener('keydown',checkKey)
        return () => window.removeEventListener('keydown',checkKey)
    })
  return (
    <div className=" modal-parent active">
      <div className="detail-modal">
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>لپ تاپ</td>
              <td>12,000,000</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailModal;
