import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";
//Thẻ Fragment chỉ để chứa
import { Fragment } from "react";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            //Đặt biến cho component phải viết Hoa
            let Layout = DefaultLayout;

            //Kiểm tra nế Layout === true thì sẽ trả về layout
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  //Trở thành children của layout nên được được
                  //Đưa vào trong layout để render ra
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
