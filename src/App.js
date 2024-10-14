import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Tasks />
        <Footer />
      </div>
    </>
  );
}

export default App;
