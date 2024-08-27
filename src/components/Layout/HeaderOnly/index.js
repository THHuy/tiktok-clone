//Những trang nào mặc định ko thay đổi trên web
import Header from "~/components/Layout/components/Header";

//App Pages sẽ trở thành children của DefaultLayout này
function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
