import { useParams } from "react-router-dom";
import ItemDisplay from "../Items-Page/Item-Page-Comp/ItemDisplay";
export function MoreItemPage() {
  const { itemid } = "test";
  return (
    <>
      <MoreItemPage data={{ itemid }} />
    </>
  );
}
