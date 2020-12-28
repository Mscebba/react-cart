import React, { useEffect, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { auth, createDatabaseUser } from 'firebase/firebase.utils';
import { setCurrentUser } from 'redux/User/user-actions';
import { selectCurrentUser } from 'redux/User/user-selectors';

import { Spinner } from 'ui';
import Header from 'layout/Header/Header';
import Footer from 'layout/Footer/Footer';

import 'styles/main.scss';

const Products = lazy(() => import('_components/Products/Products'));
const ProductDetail = lazy(() =>
  import('_components/Products/ProductDetail/ProductDetail')
);
const Cart = lazy(() => import('_components/Cart/Cart'));
const SignIn = lazy(() => import('_components/SignIn/SignIn'));
const SignUp = lazy(() => import('_components/SignUp/SignUp'));

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
    <>
      <Header />
      <main>
        <Switch>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, { setCurrentUser })(App);
