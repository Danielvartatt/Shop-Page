import { Catalogue } from "../../Items Page/Item Page Comp/ItemCatalogue";
import { Link } from "react-dom";
export default function Displayitems({ data: { name, price } }) {
  return (
    <>
      {Catalogue((items, Id) => {
        return (
          <div key={Id}>
            <div></div>
            <div></div>
          </div>
        );
      })}
    </>
  );
}
