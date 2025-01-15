import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className="container">
          <Card
            img={reactLogo}
            title="A React logo"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis cumque dignissimos beatae sapiente quisquam, voluptatem explicabo!"
          />
        </main>
      </div>
    </>
  );
}

export default App;
