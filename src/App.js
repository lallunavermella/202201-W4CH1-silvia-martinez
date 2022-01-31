import "./App.css";
import Info from "./components/Info";
import Button from "./components/Button";
import Gentlemen from "./components/Gentlemen";

function App() {
  const text = "0 gentlemen pointing at you";
  const infoClass = "info";

  const classButton = "button button--select";
  const textButton = "Select All";

  const name = "El Fary";
  const job = "Influencer";
  return (
    <>
      <div class="container">
        <header class="main-header">
          <h1 class="main-title">The pointing gentlemen</h1>
        </header>
        <main class="main">
          <section class="controls">
            <Info className={infoClass} textp={text} />
            <Button class={classButton} text={textButton} />
          </section>
          <ul class="gentlemen">
            <li class="gentleman">
              <Gentlemen name={name} job={job} />
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
