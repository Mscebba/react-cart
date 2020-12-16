import classes from './button.module.scss';

export default function Button({
  children,
  onClick,
  block,
  primary,
  light,
  icon,
  small,
  ...props
}) {
  let btnClass = [
    `${classes['btn']}`,
    block && `${classes['btn_block']}`,
    primary && `${classes['btn_primary']}`,
    light && `${classes['btn_light']}`,
    icon && `${classes['btn_icon']}`,
    small && `${classes['btn_small']}`,
  ];
  btnClass = btnClass.join(' ');

  return (
    <button onClick={onClick} className={btnClass} {...props}>
      {children}
    </button>
  );
}
