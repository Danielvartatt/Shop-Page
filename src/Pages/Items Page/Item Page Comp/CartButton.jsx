export default function CartButton({ data: { inStock } }) {
  if ({ inStock } > 0) {
    return (
      <div>
        <button>Add to Cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button>Out of stock</button>
      </div>
    );
  }
}
