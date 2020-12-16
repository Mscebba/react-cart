import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { auth, createDatabaseUser } from '../../firebase/firebase.utils';
import Header from '../../layout/Header/Header';
import Products from '../Products/Products';
import ProductDetail from '../Products/ProductDetail/ProductDetail';
import Footer from '../../layout/Footer/Footer';
import Cart from '../Cart/Cart';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import '../../styles/main.scss';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
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
  }, [currentUser]);

  return (
    <Router>
      <Header user={currentUser} />
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
