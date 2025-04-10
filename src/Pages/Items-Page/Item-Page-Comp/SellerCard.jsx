export default function SellerCard({
  data: {
    name,
    description,
    id,
    imageURL,
    inStock,
    sold,
    price,
    retailPrice,
    countryoforigin,
    placeofOrgin,
    inpack,
  },
}) {
  return (
    <>
      <div>
        <div>
          <img alt="image of the item" src={`${imageURL}`}></img>
        </div>
        <div>
          <div>
            <h2>Name: {name}</h2>
            <p>id:{id}</p>
            <p>{description}</p>
            <p>amount:{inpack}</p>
          </div>
          <div>
            <h3>Price data</h3>
            <p>production price: {price}$</p>
            <p>Retail price: {retailPrice}$</p>
          </div>
          <div>
            <h3>Place of Orign</h3>
            <p>{countryoforigin}</p>
            <p>{placeofOrgin}</p>
          </div>
          <div>
            <h2>backend information</h2>
            <p>Stock: {inStock}</p>
            <p>Sold: {sold}</p>
          </div>
        </div>
      </div>
    </>
  );
}
