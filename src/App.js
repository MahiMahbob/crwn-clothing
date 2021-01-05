import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import { useContextValue } from './context/shopContext';
import Checkout from './pages/checkout/Checkout';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInSignUp from './pages/signInSignUp/SignInSignUp';

function App() {
  const { currentUser } = useContextValue()
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
      </Switch>
    </div>
  );
}

export default App;
