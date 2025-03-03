import { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../deleteModal/DeleteModal";
import DetailModal from "../detailModal/DetailModal";
import EditModal from "../EditModal/EditModal";
import {AiOutlineDollarCircle} from 'react-icons/ai'
const ProductsTable = () => {
  const [isShowdeleteModal, setIsShowdeleteModal] = useState(false);
  const [isShowdetailModal, setIsShowdetailModal] = useState(false);
  const [isShoweditModal, setIsShoweditModal] = useState(false);
  const deletemodalCancel = () => {
    setIsShowdeleteModal(false);
  };
  const deletemodalSubmit = () => {
    setIsShowdeleteModal(false);
  };
  const closeDetailModal  = ()=>{
    setIsShowdetailModal(false)
  }
  const updateProductInfo = (e)=>{
    console.log('edited');
    e.preventDefault()
    
  }
  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr className="products-table-tr">
            <td>
              <img
                src="/img/oil.jpeg"
                alt="oil"
                className="products-table-img"
              />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>100،000 تومن</td>
            <td>90</td>
            <td>
              <button className="products-table-btn" onClick={()=>setIsShowdetailModal(true)}>جزئیات</button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowdeleteModal(true)}
              >
                حذف
              </button>
              <button className="products-table-btn" onClick={()=> setIsShoweditModal(true)}>ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowdeleteModal && (
        <DeleteModal cancel={deletemodalCancel} submit={deletemodalSubmit} />
      )}
      {isShowdetailModal && (
        <DetailModal onhide={closeDetailModal} />
      )}
      {isShoweditModal && (
        <EditModal onClose={()=> setIsShoweditModal(false)}  onSubmit={updateProductInfo}>
          <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle/>
          </span>
          <input type="text" placeholder="عنوان جدید را وارد کنید" className="edit-products-input"/>
          </div>
          <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle/>
          </span>
          <input type="text" placeholder="عنوان جدید را وارد کنید" className="edit-products-input"/>
          </div>
          <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle/>
          </span>
          <input type="text" placeholder="عنوان جدید را وارد کنید" className="edit-products-input"/>
          </div>
          <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle/>
          </span>
          <input type="text" placeholder="عنوان جدید را وارد کنید" className="edit-products-input"/>
          </div>
        </EditModal>
      )}
    </>
  );
};

export default ProductsTable;
