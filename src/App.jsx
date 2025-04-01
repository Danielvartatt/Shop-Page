import { Outlet } from "react-router-dom";
import Header from "./Header/Footer/Header";
import Footer from "./Header/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
