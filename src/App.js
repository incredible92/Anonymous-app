import './App.scss';
import HomePage from './pages/Home';
import {Switch, Route} from 'react-router-dom'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} exact/>
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
