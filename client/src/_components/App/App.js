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

import ProductsAdmin from '_components/Admin/Products/Products';

import 'styles/main.scss';
import Admin from '_components/Admin/Admin';
import ProductsList from '_components/Admin/ProductsList/ProductsList';
import Category from '_components/Admin/Category/Category';
import Error404 from '_components/Error404/Error404';

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
    <Switch>
      <Route path='/admin/:path?' exact>
        <Admin>
          <Switch>
            <Route exact path='/admin/' component={ProductsList} />
            <Route exact path='/admin/product' component={ProductsAdmin} />
            <Route exact path='/admin/category' component={Category} />
            <Route component={Error404} />
          </Switch>
        </Admin>
      </Route>

      <Route>
        <Header />
        <main>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Products} />
              <Route exact path='/product/:id' component={ProductDetail} />
              <Route exact path='/cart' component={Cart} />
              <Route
                path='/signin'
                exact
                render={() => (currentUser ? <Redirect to='/' /> : <SignIn />)}
              />
              <Route
                path='/signup'
                exact
                render={() => (currentUser ? <Redirect to='/' /> : <SignUp />)}
              />
            </Suspense>
            <Route component={Error404} />
          </Switch>
        </main>
        <Footer />
      </Route>
    </Switch>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, { setCurrentUser })(App);
