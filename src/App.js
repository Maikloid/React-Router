import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Blog from "./Blog";

function App() {
return(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact/>} />
          <Route path='blog' element={<Blog/>}/>
          <Route path='*' element={<NoPage/>} />
        </Route>
    </Routes>
  </BrowserRouter>
)
}

export default App;
