import React from "react";
import "../index.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <p
          style={{
            fontSize: "1.7rem",
            marginBottom: "3rem",
            letterSpacing: "3px",
          }}
        >
          CONNECT WITH US
        </p>
        <i className="fa fa-github fa-2x" href=""></i>
        <i className="fa fa-twitter fa-2x" href=""></i>
        <i className="fa fa-instagram fa-2x" href=""></i>
        <i className="fa fa-linkedin fa-2x" href=""></i>
      </div>
      <hr
        style={{
          marginTop: "-.16rem",
          backgroundColor: "#fff",
          opacity: "0.4",
          width: "97%",
        }}
      />
      <p
        style={{
          color: "#fff",
          backgroundColor: "#000000",
          marginTop: "-1rem",
          marginBottom: "0",
          height: "4rem",
          paddingTop: "1rem",
          paddingBottom: "2rem",
        }}
      >
        COPYRIGHT &copy; 2020.All Rights deserved
      </p>
    </>
  );
}
export default Footer;
