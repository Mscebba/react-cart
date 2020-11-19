import classes from './footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={classes['footer']}>
        <section>
          <h4>Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Return policy</li>
          </ul>
        </section>
        <section>
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </section>
        <section>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>©2020 react cart</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
