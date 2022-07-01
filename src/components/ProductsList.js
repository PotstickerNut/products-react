import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  //   const { products } = props;
  return (
    <div>
      <h2>Products</h2>
      {/* Here we map over the array*/}
      {/* {props.products.map((item, idx) => (
        //item.name will usually be item.id
        <ProductItem product={item} key={idx} />
      ))} */}

      {/* {props.products.map((item, idx) =>
        item.inStock ? (
          <ProductItem product={item} key={idx} />
        ) : // <h3 key={idx}>{item.name} is out of stock!</h3>
        null
      )} */}

      {props.products.map(
        (item, idx) =>
          item.inStock && (
            <ProductItem product={item} key={idx} addToCart={props.addToCart} />
          )
      )}
    </div>
  );
};

export default ProductsList;
