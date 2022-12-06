import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Download } from "./pages/download/download";
import { Home } from "./pages/home/home";
import { Ibank } from './pages/ibank/ibank';
import { Login } from "./pages/login/login";
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}> 
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
    </Provider>
  );
}

export default App;
