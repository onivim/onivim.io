import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
// import { menuItems } from "../layouts";

const Waypoint = require("react-waypoint")

interface IndexPageProps {
    location: {
        pathname: string;
    };
}

const logo = require("./logo-256x256.png");
const header = require("./oni-header.png");
const background = require("./diagmonds.png");

const createDivItem = (className: string) => {
    return class SingleClassItem extends React.PureComponent<{}, {}> {
        public render(): JSX.Element {
            return <div className={className}>{this.props.children}</div>;
        }
    };
};

const createAnchorItem = (className: string) => {
    return class HOC extends React.PureComponent<{href: string }, {}> {
        public render(): JSX.Element {
            return <a className={className} href={this.props.href}>{this.props.children}</a>;
        }
    };
};
const GitHubIconLarge = () => {
                        return <span className="icon" style={{color: "#333" }}>
        <i className="fa fa-lg fa-github">
        </i>
    </span>;
};

const TwitterIconLarge = () => {
                        return <span className="icon" style={{color: "#55acee" }}>
        <i className="fa fa-lg fa-twitter">
        </i>
    </span>;
};


const LargeCircleIcon = (props: { iconName: string, color: string }) => {

    const iconClass = `fa fa-5x fa-${props.iconName}`

    const style = {
        width: "8rem",
        height: "8rem",
        borderRadius: "4rem",
        backgroundColor: props.color,
        color: "white",
    }

    return <span className="icon" style={style}>
        <i className={iconClass}>
        </i>
    </span>;
}

const NavBarItem = createAnchorItem("navbar-item");
const NavBarItemHiddenOnDesktop = createAnchorItem("navbar-item is-hidden-desktop");
const NavBarItemDesktopOnly = createAnchorItem("navbar-item is-hidden-desktop-only");

import { Carousel } from "react-responsive-carousel";
const styles = require("react-responsive-carousel/lib/styles/carousel.min.css");

export interface IHeroState {
    isRendered: boolean;
}

export class HeroImageSlider extends React.PureComponent<{}, IHeroState> {

    constructor() {
        super();
    }

    public componentDidMount(): void {
    }

    public render(): JSX.Element {

        return <video className="oni-hero-video" src="webm-test2.webm" autoPlay={true} />

    }
}

const NavBarMenu = () => {

    return <div className="navbar-menu" id="navMenuDocumentation">
        <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href={"https://github.com/bryphe/wiki"}>Docs</a>
                <div className="navbar-dropdown">
                    <NavBarItem href={"https://github.com/bryphe/oni/wiki/Configuration"}>Configuration</NavBarItem>
                    <NavBarItem href={"https://github.com/bryphe/oni/wiki/FAQ"}>FAQ</NavBarItem>
                    <NavBarItem href={"https://github.com/bryphe/oni/wiki/Language-Support"}>Language Support</NavBarItem>
                    <NavBarItem href={"https://github.com/bryphe/oni/wiki/Plugins"}>Plugins</NavBarItem>
                    <NavBarItem href={"https://github.com/bryphe/oni/wiki/API"}>API</NavBarItem>
                </div>
            </div>
            <NavBarItem href={"https://github.com/bryphe/releases"}>Download</NavBarItem>
        </div>
        <div className="navbar-end">
            <NavBarItemDesktopOnly href={"https://github.com/bryphe/oni"}>
                <GitHubIconLarge />
            </NavBarItemDesktopOnly>
            <NavBarItemDesktopOnly href={"https://twitter.com/oni_vim"}>
                <TwitterIconLarge />
            </NavBarItemDesktopOnly>
        </div>
    </div>;

};

const FeatureCard = (title: string, description: string) => {

    return <div className="card">
        <div className="card-header">
            <div className="card-header-title">
                Modern UX
            </div>
        </div>
        <div className="card-content">
            Break free of terminal limitations and experience Vim in a new way.
        </div>
    </div>;

};

// Other ones:
// - No VimL
// - 

// License
// Code of Conduct
// FOoter
// FAQ
// Github

// import logo from "./oni-header.png"

export default (props: IndexPageProps) => {

    const bodyStyle = {
        backgroundImage: "url('" + background + "')",
    }

    return <div style={bodyStyle}>
        {/* Master head */}
        <nav className="navbar is-light">
            <div className="container">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <a className="oni-brand-logo" href="https://github.com/bryphe/oni">
                    <img src={logo} alt="Oni Logo" />
                    </a>
                </div>
                <NavBarItemHiddenOnDesktop href={"https://github.com/bryphe/oni"}>
                    <GitHubIconLarge />
                </NavBarItemHiddenOnDesktop>
                <NavBarItemHiddenOnDesktop href={"https://twitter.com/oni_vim"}>
                    <TwitterIconLarge />
                </NavBarItemHiddenOnDesktop>
                <div className="navbar-burger burger" data-target="navMenuDocumentation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <NavBarMenu />
            </div>
        </nav>

        <section className="oni-header hero is-medium is-dark">
            <div className="hero-body">
                <div className="columns">
                    <div className="column oni-flex-center">
                        <img src="oni-headline-small.png" style={{height: "128px"}} />
                        <h5 className="title is-5">Modal editing from the future.</h5>
                        <p className="content">
                        Open-source, cross-platform
                        </p>
                    </div>
                    <div className="column oni-flex-center">
                        <HeroImageSlider />
                    </div>
                    <div className="column oni-flex-center">
                        <a className="oni-button button is-primary is-large">Download</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="section oni-dark-section is-medium is-light">
            <div className="container">
                <div className="columns is-8">
                    <div className="column">
                        <h1 className="title">Modern UX</h1>
                        <p className="content">
                        Break free of terminal UI limitations and experience modal editing like never before. Oni uses neovim under-the-hood - no emulation. Built with Electron and web technologies, Oni combines fast modal editing with the features you expect from a modern code editor.
                        </p>
                    </div>
                    <div className="column">
                        <h1 className="title">Batteries Included</h1>
                        <p className="content">
                        Spend less time configuring and more time creating. Oni works great with language servers, and comes with out-of-the-box support for JavaScript, TypeScript, and Reason.
                        </p>
                    </div>
                    <div className="column">
                        <h1 className="title">Extensible</h1>
                        <p className="content">
                        Oni is fully configurable and scriptable via JavaScript, or your compile-to-Javascript dialect of choice.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section hero oni-header is-dark">
            <div className="container">
                <h1 className="title is-1 is-spaced">Contribute</h1>
                <p className="content">Oni is free and open-source, and has an [ambitious roadmap] - help us on our mission to reimagine development productivity. Oni would not be possible without our [backers] and [contributors].</p>
            </div>
        </section>
        <section className="section hero oni-header is-dark">
            <div className="container">
                <div className="columns">
                    <div className="column is-2">
                        <LargeCircleIcon iconName={"usd"} color={"#23d160"} />
                    </div>
                    <div className="column">
                        <h2 className="subtitle is-2">Finance</h2>
                        <p className="content">
                            <ul>
                                <li><b>Coming Soon</b> - Become a backer or sponsor via OpenCollective</li>
                                <li>Become a backer or sponsor via BountySource</li>
                                <li>Make a one-time donation via PayPal</li>
                                <li>Make a one-time donation via BitCoin</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section hero oni-header is-dark">
            <div className="container">
                <div className="columns">
                    <div className="column is-2">
                        <LargeCircleIcon iconName={"wrench"} color={"orange"} />
                    </div>
                    <div className="column">
                        <h2 className="subtitle is-2">Build</h2>
                        <p className="content">
                            <ul>
                                <li>Find & report a bug</li>
                                <li>Fix an issue and submit a PR</li>
                                <li>Suggest a feature</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
            <section className="section hero oni-header is-dark">
                <div className="container">
                <div className="columns">
                    <div className="column is-2">
                        <LargeCircleIcon iconName={"handshake-o"} color={"#209cee"} />
                    </div>
                    <div className="column">
                        <h2 className="subtitle is-2">Evangelize</h2>
                        <p className="content">
                            <ul>
                                <li>Review our documentation</li>
                                <li>Contribute to our website</li>
                                <li>Fix an issue and submit a PR</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
            <section className="section hero oni-footer is-dark">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            Copyright 2017 Bryan Phelps
                        </div>
                        <div className="column">
                            <p className="content">
                                <p>Website made with:</p>
                                <ul>
                                    <li>Bulma</li>
                                    <li>Gatsby</li>
                                    <li>FontAwesome</li>
                                    <li>SubtlePatterns</li>
                                </ul>
                            </p>
                        </div>
                        <div className="column">
                            <a href="https://twitter.com/onivim?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @onivim</a>
                        </div>
                        <div className="column">
                        <iframe src="https://ghbtns.com/github-btn.html?user=bryphe&repo=oni&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
                        </div>
                    </div>
                </div>
            </section>
    </div>;
};
