import { Outline } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outline />
      <Footer />
    </>
  );
}

export default App;
