import Index from "./Components/Index"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <Router>
      <Index />
      <Switch>
        <Route path="/" exact component={Home}/>
        
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/sign-up" exact component={SignUp}/>
         
      </Switch>
    </Router>
  );
}

export default App;
