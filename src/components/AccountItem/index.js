import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/3563004f82a84bf04d4b98584d685b12.jpeg?lk3s=a5d48078&nonce=59086&refresh_token=276c3dc08862bb58ea0b553d29f6c9d0&x-expires=1725465600&x-signature=vloBAQHTTwOvt3wlvO7tKnOp5ho%3D&shp=a5d48078&shcp=81f88b70"
        alt="Vy"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          Lê Nguyễn Phương Vy
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>phvyy</span>
      </div>
    </div>
  );
}

export default AccountItem;
