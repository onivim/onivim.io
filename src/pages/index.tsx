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
            <div className="nav-item">
                <a href="https://github.com/bryphe/oni/releases">Download</a>
            </div>
            <div className="nav-item">
                <a href="https://github.com/bryphe/oni/wiki">Wiki</a>
            </div>
            <div className="nav-item">
                <a href="https://twitter.com/oni_vim">
                    <i className="fa fa-twitter" />
                </a>
            </div>
            <div className="nav-item">
                <a href="https://github.com/bryphe/oni/wiki">
                    <i className="fa fa-github" />
                </a>
            </div>
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
