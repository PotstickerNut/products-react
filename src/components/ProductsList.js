import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  return (
    <div>
      <h2>Products</h2>
      {/*   Here we map over the array*/}
      {props.products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
