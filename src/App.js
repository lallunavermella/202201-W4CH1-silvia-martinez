import "./App.css";
import Info from "./components/Info";
import Button from "./components/Button";
import Gentlemen from "./components/Gentlemen";
import gentlemen from "./gentlemenArray";

function App() {
  const text = "0 gentlemen pointing at you";
  const infoClass = "info";
  const classButton = "button button--select";
  const textButton = "Select All";

  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <Info className={infoClass} text={text} />
          <Button className={classButton} text={textButton} />
        </section>
        <main className="main">
          <ul className="gentlemen">{gentlemen.map(Gentlemen)}</ul>
        </main>
      </div>
    </>
  );
}

export default App;
