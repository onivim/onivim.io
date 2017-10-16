import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
// import { menuItems } from "../layouts";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const logo = require("./logo-256x256.png");



// import logo from "./oni-header.png"

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <div className="page">
        <div className="oni-navigation">
        </div>
        <div className="oni-content">
            <div>
                <a href="https://github.com/bryphe/oni">
                    <img src={logo} alt="Oni Logo" style={{width: "128px"}} />
                </a>
            </div>
            <div>
                <h1>ONI</h1>
            </div>
        </div>
    </div>
  </div>;
