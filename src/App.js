import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';

function App() {
  
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
