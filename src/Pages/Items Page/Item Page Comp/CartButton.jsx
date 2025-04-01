export default function CartButton({ inStock }) {
  const items = [{ inStock }];
  return <button>{inStock ? "in stock" : "out of stock"}</button>;
}
