import classes from './spinner.module.scss';

export default function Spinner() {
  return (
    <>
      <div className={classes['spinner']}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes['loading_text']}>Loading...</div>
    </>
  );
}
