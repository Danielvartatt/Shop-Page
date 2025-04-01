import { Link } from "react-router-dom";
export default function ReturnComp({
  data: { question, Answer, Link, LinkName },
}) {
  return (
    <>
      <div>
        <h2>{question}</h2>
        <p>{Answer}</p>
        <Link to={Link}>{LinkName}</Link>
      </div>
    </>
  );
}
