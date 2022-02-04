import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import Ajay from './Component/Ajay';
import AllEmployees from './Component/AllEmployee'
import AddEmployee from './Component/AddEmployee'
import EditEmployee from './Component/EditEmployee'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  './App.css'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Ajay} />
      <Route exact path="/all" component={AllEmployees} />
      <Route exact path="/add" component={AddEmployee} />
      <Route exact path="/edit/:id" component={EditEmployee} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
