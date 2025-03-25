import { Catalogue } from "./ItemCatalogue";
import ItemDisplay from "./ItemDisplay";
import DisplayCard from "./DisplayCard";

export default function MoreitemDisplay() {
  return (
    <>
      <div>
        {Catalogue.map((items, Id) => {
          return <DisplayCard key={Id} data={items} />;
        })}
      </div>
    </>
  );
}
