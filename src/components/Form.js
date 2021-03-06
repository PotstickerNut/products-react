const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="productName">Product Name</label>
      <input
        type="text"
        value={props.productName}
        onChange={props.handleChange}
        id="productName"
      />
      <br />
      <label htmlFor="productPrice">Product Price</label>
      <input
        type="number"
        value={props.productPrice}
        onChange={props.handleChange}
        id="productPrice"
      />
      <label htmlFor="productDescription">Product Description</label>
      <input
        type="text"
        value={props.productDescription}
        onChange={props.handleChange}
        id="productDescription"
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
