import { QandA } from "./Components/Q&A";
import ReturnComp from "./Components/RetunComp";
export function Retundata() {
  return (
    <>
      <div>
        {QandA.map((items, id) => {
          <ReturnComp key={id} data={items} />;
        })}
      </div>
    </>
  );
}
