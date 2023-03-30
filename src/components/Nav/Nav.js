import React, { useState } from "react";
// not neccery routing 
// import { NavLink } from "react-router-dom";
import "./Nav.css";
import { TiLocation } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { CenterContainer } from "../CenterContainet/CenterContainer";

export default function Nav() {
  const [tab, setTab] = useState(2);

  return (
    <div className="Nav">
      <nav>
        <ul>
          <li onClick={() => setTab(0)}>
            <TiLocation className="navIcons" />
            102 Street 2714 Don{" "}
          </li>
          <li onClick={() => setTab(1)}>
            <BsTelephoneFill className="navIcons" />
            +02 1234 567{" "}
          </li>
          <li onClick={() => setTab(2)}>
            <IoMailSharp className="navIcons" />
            hello@flowbase.com
          </li>
        </ul>
        <CenterContainer tab={tab} />
      </nav>
    </div>
  );
}
