import "./App.css";
import Info from "./Info";
import Button from "./Button";
import Gentlemen from "./Gentlemen";

function App() {
  const textTitle = "The pointing gentlemen";
  const text = "0 gentlemen pointing at you";
  const infoClass = "info";
  return (
    <>
      <Info text={textTitle} className={infoClass} textp={text} />
      <Button class="button button--select" text="Select All" />
      <Gentlemen />
    </>
  );
}

export default App;
