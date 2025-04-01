import { useParams } from "react-router-dom";

export default function AdminMainDisplay() {
  const { sellerid } = useParams();
  return (
    <>
      <h2>here will all the admins Components be </h2>
      <p>hello {sellerid}</p>
    </>
  );
}
