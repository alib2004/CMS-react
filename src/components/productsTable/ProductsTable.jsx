import { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../deleteModal/DeleteModal";

const ProductsTable = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const deletemodalCancel = () => {
    setIsShowModal(false);
  };
  const deletemodalSubmit = () => {
    setIsShowModal(false);
  };
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
              <button className="products-table-btn">جزئیات</button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowModal(true)}
              >
                حذف
              </button>
              <button className="products-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowModal && (
        <DeleteModal cancel={deletemodalCancel} submit={deletemodalSubmit} />
      )}
    </>
  );
};

export default ProductsTable;
