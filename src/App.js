import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Header, Details } from "./components";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/detail/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
