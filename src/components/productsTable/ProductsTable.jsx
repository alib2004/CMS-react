import "./ProductsTable.css";

const ProductsTable = () => {
  return (
    <div className="products-table">
      <tr className="products-table-heading-tr">
        <th>عکس</th>
        <th>اسم</th>
        <th>قیمت</th>
        <th>موجودی</th>
      </tr>
      <tr>
        <td>
          <img src="/img/oil.jpeg" alt="oil" className="products-table-img"/>
        </td>
        <td>روغن سرخ کردنی</td>
        <td>100،000 تومن</td>
        <td>90</td>
        <td>
            <button className="products-table-btn">جزئیات</button>
            <button className="products-table-btn">حذف</button>
            <button className="products-table-btn">ویرایش</button>
        </td>
      </tr>
    </div>
  );
};

export default ProductsTable;
