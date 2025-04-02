import { Catalogue } from "../../Items-Page/Item-Page-Comp/ItemCatalogue";
import DisplayCardLink from "../../Items-Page/Item-Page-Comp/DisplayCardLink";
export default function Displayitems() {
  return (
    <>
      <div>
        {Catalogue.map((items, index) => {
          return <DisplayCardLink key={index} data={items} />;
        })}
      </div>
    </>
  );
}

//Bruk DisplayCardLink (det er letter å bruke en eksistrende page)
