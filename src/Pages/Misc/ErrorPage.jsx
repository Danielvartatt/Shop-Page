import { useParams } from "react-router-dom";
export function ErrorPage() {
  const URL = useParams();
  return (
    <>
      <div>
        <h2>ERROR</h2>
        <p>something went wrong ಠ╭╮ಠ</p>
      </div>
    </>
  );
}
