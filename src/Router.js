import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/signup'  element={<SignUp />} />
    </Routes>
  );
}

export default Router;
