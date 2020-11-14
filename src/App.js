import './App.scss';
import HomePage from './pages/Home';
import {Switch, Route} from 'react-router-dom'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ContactPage from './pages/Contact';
import MessagePage from './pages/message.jsx';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/contact"component={ContactPage} />
        <Route path="/message" component={MessagePage} />
        
      </Switch>
    </div>
  );
}

export default App;
