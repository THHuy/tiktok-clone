//Những trang nào mặc định ko thay đổi trên web
import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";

//App Pages sẽ trở thành children của DefaultLayout này
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
