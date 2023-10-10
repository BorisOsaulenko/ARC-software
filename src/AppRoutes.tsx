import { Route, Routes } from "react-router-dom";
import Articles from "./containers/Articles";
import User from "./components/User";
import Home from "./containers/Home";
import Login from "./components/Login/Login";
import Trends from "./containers/Trends";

const AppRoutes = () => {
return (
    <Routes>
        <Route path='/articles' element={<Articles />} />
        <Route path='/users' element={<User id={1} />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/trends' element={<Trends name="jiosjois" />} />
    </Routes>
)
}

export default AppRoutes;