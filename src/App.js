import { BrowserRouter } from "react-router-dom";
import HeaderPage from "./Components/Header/Header";
import MainLink from "./Components/Links/Links";
import Animationshape from "./Components/Animationshape/Animationshape";
import FooterPage from "./Components/Footer/Footer";
import SocialLink from "./Components/Sociallink/Sociallink";
import { useEffect, useState } from "react";
// import Preloader from "./preLoader";
// import NavPage from "./Components/Navbar/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  console.log(isLoading);
  return (
    <>
      <BrowserRouter>
        <Animationshape />

        <HeaderPage />
        {/* <NavPage/> */}
        <SocialLink />

        <MainLink />
        <FooterPage />
      </BrowserRouter>
    </>
  );
}

export default App;
