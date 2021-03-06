import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useUserContext } from '../App';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';

const RouteComponent = () => {
    const { loggedIn } = useUserContext();
    return (
    <BrowserRouter>  
      <Routes>
        {loggedIn ?
        [
          <Route path="survey" element={<LandingPage />} />,
          <Route path="home" element={<HomePage />} />,
          <Route path="*" element={<Navigate replace to="home" />} />
        ]
        :
        [  
          <Route path="login" element={<LoginPage />} />,
          <Route path="*" element={<Navigate replace to="login" />} />
        ]
        }
      </Routes>
    </BrowserRouter>
    );
};

export default RouteComponent;