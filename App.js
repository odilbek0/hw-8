import Home from "./pages/Tab1"
import Page1 from "./pages/Tab2"
import Page2 from "./pages/Tab3"
import "./style.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="lin" to={'/'}>Tab1</Link>
        <Link className="lin"  to={'/page1'}>Tab2</Link>
        <Link className="lin"  to={'/page2'}>Tab3</Link>

      </header>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
    

      </Routes>

    </BrowserRouter>
  );
}

export default App;
