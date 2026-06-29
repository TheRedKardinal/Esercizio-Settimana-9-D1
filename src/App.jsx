import "./App.css";
import CustomButton from "./assets/componets/CustomButton";
import CustomImage from "./assets/componets/customImage";

const App = function () {
  return (
    <>
      <CustomButton title="Il mio bottone" />
      <CustomImage src="https://m.media-amazon.com/images/M/MV5BNTU1NWI3MmUtN2QwNS00ZDdhLTkyNmQtZjFhZTU0Y2Y0NmE5XkEyXkFqcGc@._V1_.jpg" />
      <CustomImage src="https://m.media-amazon.com/images/M/MV5BNTU1NWI3MmUtN2QwNS00ZDdhLTkyNmQtZjFhZTU0Y2Y0NmE5XkEyXkFqcGc@._V1_.jpg" />
      <CustomButton title="My button" />
    </>
  );
};

export default App;
