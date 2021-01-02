import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';

function App() {

  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
