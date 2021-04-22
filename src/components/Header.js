import React from "react";

function Header(props) {
  const { title } = props;
  return (
    <div className="header">
      <div className="inside-header">
        <img src="/bbl.png" className="logo"></img>
        <div
          style={{
            color: "#039",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Prompt",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default Header;
