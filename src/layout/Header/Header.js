import { Link } from 'react-router-dom';
import classes from './header.module.scss';

function Header() {
  return (
    <header>
      <nav role='navigation' className={classes['nav']}>
        <h1 className={classes.brand}>
          <Link to='/'>
            <i>react</i> shoppingCART
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/cart'>
              <i className='material-icons-outlined'>shopping_cart</i>
              <span>3</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
