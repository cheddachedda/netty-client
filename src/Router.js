import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';

const Router = ({ loggedInStatus, handleLogin, handleLogout, user }) => {
  return (
    <Routes>

      <Route
        exact
        path='/'
        element={
          <Home
            loggedInStatus={ loggedInStatus }
            handleLogout={ handleLogout }
            user={ user }
          />
        }
      />

      <Route
        path='/login'
        element={
          <Login
            loggedInStatus={ loggedInStatus }
            handleLogin={ handleLogin }
          />
        }
      />

      <Route
        path='/signup'
        element={
          <SignUp
            loggedInStatus={ loggedInStatus }
            handleLogin={ handleLogin }
          />
        }
      />

    </Routes>
  );
}

export default Router;
