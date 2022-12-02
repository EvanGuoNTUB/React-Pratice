import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Download } from "./pages/download/download";
import { Home } from "./pages/home/home";
import { Ibank } from './pages/ibank/ibank';
// import { Ibank } from "./pages/ibank/ibank";
import { Login } from "./pages/login/login";


function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/download" element={<Download />}/>
          <Route path="/ibank" element={<Ibank />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
