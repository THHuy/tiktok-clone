import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  children,
  onClick,
  lefticon,
  righticon,
  small = false,
  disabled = false,
  large = false,
  rounded = false,
  className,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  //Remove envent listener whin disabled is work
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] == "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx("icon")}>{lefticon}</span>}
      <span className={cx("title")}>{children}</span>
      {righticon && <span className={cx("icon")}>{righticon}</span>}
    </Comp>
  );
}

export default Button;
