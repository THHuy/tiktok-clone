import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);

const defaulFn = () => {};
function Menu({ children, items = [], onChange = defaulFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1]; //Lấy phần tử cuối
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; //convert parent
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              //Nếu history > 1 thì sẽ hiện lên title
              <Header
                title="Language"
                onBack={() => {
                  //Nếu nhấn nút back thì sẽ trờ về và bỏ 1 ra khỏi mảng
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
