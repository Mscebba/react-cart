import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../../layout/Header/Header';
import Products from '../Products/Products';
import ProductDetail from '../Products/ProductDetail/ProductDetail';
import Footer from '../../layout/Footer/Footer';
import Cart from '../Cart/Cart';

import '../../styles/main.scss';
import SignIn from '../SignIn/sign-in';
import SignUp from '../SignUp/sign-up';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/product/:id' component={ProductDetail} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
