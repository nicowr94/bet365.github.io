import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import LoginPage from "../pages/Login/Login";
import HomePage from "../pages/Home/Home";
import HomeDeportPage from "../pages/HomeDeport/HomeDeport";
import DirectoDeportPage from "../pages/DirectoDeport/DirectoDeport";
import BancoUserPage from "../pages/BancoUser/BancoUser";
import BancoMensajePage from "../pages/BancoMensaje/BancoMensaje";
import UserMiCuenta from "../pages/UserMiCuenta/UserMiCuenta";
import UserControles from "../pages/UserControles/UserControles";
import UserHistorial from "../pages/UserHistorial/UserHistorial";

import DasboardRoutes from "./DasboardRoutes";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import {UserContext} from '../../src/context/UserProvider';


export default function AppRouter() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <div>
        <Routes >
          <Route path="/login" Component={LoginPage} />
          <Route path="/" Component={HomePage} />
          <Route path="/deport" Component={HomeDeportPage} />
          <Route path="/directo" Component={DirectoDeportPage} />
          <Route path="/usuario/banco" Component={BancoUserPage} />
          <Route path="/usuario/mensaje" Component={BancoMensajePage} />
          <Route path="/usuario/miCuenta" Component={UserMiCuenta} />
          <Route path="/usuario/Controles" Component={UserControles} />
          <Route path="/usuario/Historial" Component={UserHistorial} />

          {/* <PrivateRoute
            path="/"
            Component={DasboardRoutes}
            isAuthenticated={user.logged}
          /> */}
        </Routes >
      </div>
    </Router>
  );
}
