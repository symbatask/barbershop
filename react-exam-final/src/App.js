import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";


function App() {
    return (
        <Router>
            <Header/>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/students" component={Students}/>
        </Router>

    );
}

export default App;
