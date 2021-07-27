import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import {BrowserRouter , Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import Forgot from './components/Forgot';
import Search from './components/Search';
import Pagenotfound from './components/Pagenotfound';
import Cakedetails from './components/Cakedetails';
import ToDos from './components/Todolist';


function App() {
 console.log("process .................." , process.env , process.env.REACT_APP_API_BASE_URL )
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/" exact  component={Home} />
      <Route path="/login" exact  component={Login} />
      <Route path="/todos" exact  component={ToDos} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/cart"  component={Cart} />
      <Route path="/cake/:cakeid" exact component={Cakedetails} />
      <Route path="/search/:searchquery" exact component={Search} />
      <Route path="/forgot" exact component={Forgot} />
      <Route path="**"  component={Pagenotfound} />
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

// attributes passsed to a component are known as props


