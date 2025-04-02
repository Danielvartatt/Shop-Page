export default function Tax({ extratax }) {
  return (
    <>
      <h2>import tax?</h2>
      <p>
        {extratax
          ? "Yes, this item contains an import tax"
          : "No, this item doesn't contain an Import tax "}
      </p>
      <p>
        This infromation comes from the seller and NOT (company name), WE are
        not Resposneble if any import taxest that might apply,its important to
        check your local laws for import
      </p>
    </>
  );
}
