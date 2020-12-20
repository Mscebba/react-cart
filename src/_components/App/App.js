import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import { auth, createDatabaseUser } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../redux/User/user-actions';
import Header from '../../layout/Header/Header';
import Products from '../Products/Products';
import ProductDetail from '../Products/ProductDetail/ProductDetail';
import Footer from '../../layout/Footer/Footer';
import Cart from '../Cart/Cart';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import '../../styles/main.scss';

function App({ setCurrentUser, currentUser }) {
  // const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser, '<<<CurrentUser');
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

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});
export default connect(mapStateToProps, { setCurrentUser })(App);
