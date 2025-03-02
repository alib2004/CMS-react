import AddProduct from "../addproduct/AddProduct";
import ErrorBox from "../errorbox/ErrorBox";
import ProductsTable from "../productsTable/ProductsTable";
const Products = () => {
  return (
    <>
      <ErrorBox msg="هیچ محصولی یافت نشد" />
      <AddProduct />
      <ProductsTable />
    </>
  );
};

export default Products;
