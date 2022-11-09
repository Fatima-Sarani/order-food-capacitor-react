import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
// import { PushNotifications } from "@capacitor/push-notifications";
function App() {
  // const Notifications = () => {
  //   if (Capacitor.getPlatform() === "android") {
  //     PushNotifications.checkPermissions()
  //       .then((result) => {
  //         if (result.receive !== "granted") {
  //           PushNotifications.requestPermissions().then((permission) => {
  //             if (permission.receive === "denied") {
  //               alert("perm denied");
  //             } else {
  //               alert("granted");
  //             }
  //           });
  //         }
  //       })
  //       .catch((err) => alert(err));
  //   }
  // };

  // useEffect(()=>{

  // },[])
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
export default App;
