import React from "react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { PushNotifications } from "@capacitor/push-notifications";
const Header = (props) => {
  const startScan = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    document.body.style.opacity = "0";
    document.body.style.background = "transparent";
    await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      document.body.style.background = " 0";
      document.body.style.opacity = "1";
      alert(result.content);
      console.log(result.content); // log the raw scanned content
    }
  };

  const getNotif = () => {
    if (Capacitor.getPlatform() !== "web") {
      PushNotifications.checkPermissions()
        .then((result) => {
          alert(result.receive);
          if (result.receive !== "granted") {
            PushNotifications.requestPermissions().then((permission) => {
              if (permission.receive === "denied") {
                alert("perm denied");
              } else {
                alert("granted");
              }
            });
          }
        })
        .catch((err) => alert(err));
      register();
    }
  };
  
  const register = () => {
    PushNotifications.register();

    PushNotifications.addListener("registration", (token) => {
      alert(token.value);
      console.log(token.value);
    });
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <button onClick={startScan}>barcode</button>
        <button onClick={getNotif}>Push</button>
        <div>OrderFood</div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
