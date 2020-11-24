import classes from './button.module.scss';

export default function Button({ children, onClick, block }) {
  let btnClasses = block
    ? `${classes['btn']} ${classes['btn_block']}`
    : `${classes['btn']}`;

  return (
    <button onClick={onClick} className={btnClasses}>
      {children}
    </button>
  );
}
