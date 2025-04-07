import { Link } from "react-router-dom";

export default function DisplayCardLink({
  data: {
    items: { id },
  },
}) {
  const { linkname } = `${id}`;
  return (
    <>
      <div>
        <Link to={`/Iteminfo/${linkname}`}>more info</Link>
      </div>
    </>
  );
}
