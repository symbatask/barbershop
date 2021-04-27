import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import {Container} from "react-bootstrap";


function App() {
    return (
        <Router>
            <Header/>
            <Container className="my-3">
                <Route exact path="/" component={Shop}/>
                <Route exact path="/favorites" component={Favorites}/>
                <Route exact path="/cart" component={Cart}/>
            </Container>

        </Router>
    )
}

export default App;
