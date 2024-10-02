import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/";
import "tippy.js/dist/tippy.css";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faCoins,
  faGear,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import styles from "./Header.module.scss";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const [searchResults, setSearchResults] = useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResults([1, 2, 3]);
  //   }, 0);
  // }, []);
  //Hanlde logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //Code
        break;
      default:
    }
  };
  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "@user",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coin",
      to: "coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <HeadlessTippy
          visible={searchResults.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accouts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Tìm Kiếm" spellCheck={true}></input>
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <span className={cx("span-spliter")}></span>
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 500]} content="Upload Video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            //Kiểm tra nếu có curent user thì sẽ hiện menu user
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/4e8706e998c9d2c398cf99e6a08ce084.jpeg?lk3s=a5d48078&nonce=22600&refresh_token=e3087d2b4562c6d4eeb3db33084b5afb&x-expires=1728057600&x-signature=UHerN1tdgWHuFyJ%2FMRciDmbbos8%3D&shp=a5d48078&shcp=81f88b70"
                className={cx("user-avatar")}
                alt="Nguyễn Văn A"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
