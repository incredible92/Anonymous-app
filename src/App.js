import './App.scss';
import HomePage from './pages/Home';
import {Switch, Route} from 'react-router-dom'
import LoginPage from './pages/Login';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
