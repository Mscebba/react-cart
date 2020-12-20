import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { auth, createDatabaseUser } from 'firebase/firebase.utils';
import { setCurrentUser } from 'redux/User/user-actions';
import { selectCurrentUser } from 'redux/User/user-selectors';
import Header from 'layout/Header/Header';
import Products from '_components/Products/Products';
import ProductDetail from '_components/Products/ProductDetail/ProductDetail';
import Footer from 'layout/Footer/Footer';
import Cart from '_components/Cart/Cart';
import SignIn from '_components/SignIn/SignIn';
import SignUp from '_components/SignUp/SignUp';

import 'styles/main.scss';

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createDatabaseUser(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/product/:id' component={ProductDetail} />
          <Route exact path='/cart' component={Cart} />
          <Route
            path='/signin'
            render={() => (currentUser ? <Redirect to='/' /> : <SignIn />)}
          />
          <Route
            path='/signup'
            render={() => (currentUser ? <Redirect to='/' /> : <SignUp />)}
          />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, { setCurrentUser })(App);
