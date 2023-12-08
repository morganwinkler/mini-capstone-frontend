/* eslint-disable react/prop-types */

export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <div>
            {product.images.map((image) => (
              <div key={image.id}>
                <img src={image.url} />
              </div>
            ))}
          </div>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}
