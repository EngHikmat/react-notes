import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Note from "./pages/Note/Note";
import Create from "./pages/Create/create";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Note />} />
          <Route path="/add" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
