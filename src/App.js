import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup/Signup";
import Colleges from "./components/College/College";
import Compare from "./components/Compare/Compare";
import Library from "./components/Library/Library";
import Courses from "./components/Courses/Courses";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/college" element={<Colleges />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/login" element={<Signup />} ></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
