import Header from "./sections/Header";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Cupcakes from "./pages/cupCakes";
import "../styles/styles.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/cupcakes"><Cupcakes/></Route>
            <Route path="/nosotros"><AboutUs/></Route>
            <Route path="/"><Home/></Route>
        </Switch>
    </Router>
)//App

export default App;