import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  //   const { products } = props;
  return (
    <div>
      <h2>Products</h2>
      {/* Here we map over the array*/}
      {props.products.map((item, idx) => (
        //item.name will usually be item.id
        <ProductItem product={item} key={item.idx} />
      ))}
    </div>
  );
};

export default ProductsList;
