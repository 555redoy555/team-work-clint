import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Shop from "./Pages/Shop/Shop";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Pay from "./Pages/Dashboard/Pay/Pay";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/shop">
                        <Shop />
                    </Route>
                    <Route exact path="/pay/:id">
                        <Pay />
                    </Route>
                    <PrivateRoute exact path="/purchase/:id">
                        <Purchase />
                    </PrivateRoute>
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
