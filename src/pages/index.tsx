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
    return <div>
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
                        <h5 className="title is-5">Modal editing. Supercharged.</h5>
                        <a className="oni-button button is-primary is-large">Download</a>
                    </div>
                    <div className="column oni-flex-center">
                        <HeroImageSlider />
                    </div>
                    <div className="column oni-flex-center">
                        <h5 className="title is-5">The power of vim, the comfort of an IDE.</h5>
                        <a className="oni-button button is-info is-large">Support</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="section oni-dark-section is-medium is-light">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title">Modern UX</h1>
                        <p className="content">
                        Break free of terminal UI limitations and experience modal editing like never before. Oni uses neovim under-the-hood - no emulation. Built with Electron and web technologies, Oni combines fast modal editing with the features you expect from a modern code editor.
                        </p>
                    </div>
                    <div className="column">
                    </div>
                </div>
            </div>
        </section>
        <section className="section oni-dark-section is-medium is-light">
            <div className="container">
                <div className="columns">
                    <div className="column">
                    </div>
                    <div className="column">
                        <h1 className="title">Batteries Included</h1>
                        <p className="content">
                        Spend less time configuring and more time creating. Oni works great with language servers, and comes with out-of-the-box support for JavaScript, TypeScript, and Reason.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section oni-dark-section is-medium is-light">
            <div className="container">
                <h1 className="title">Extensible</h1>
                <p className="content">
                Oni is fully configurable and scriptable via JavaScript, or your compile-to-Javascript dialect of choice.
                </p>
            </div>
        </section>
        <section className="section hero is-info">
            <div className="container">
                <h1 className="title is-1 is-spaced">Contribute</h1>
                <p className="content">Oni needs your support!</p>
                <h2 className="subtitle is-4">Help us build</h2>
                <p className="content">
                    <ul>
                        <li>Find & report a bug</li>
                        <li>Review our documentation</li>
                        <li>Fix an issue and submit a PR</li>
                    </ul>
                </p>
                <h2 className="subtitle is-4">Help us finance</h2>
                <p className="content">

                </p>
            </div>
        </section>
            <section className="section is-medium is-light">
                <div className="container">
                    <Waypoint>
                        <div>
                            <h1 className="title is-1">Keep in touch</h1>
                            <p className="content">
                                <ul>
                                    <li>Twitter: @oni_vim</li>
                                    <li>Chat: Gitter</li>
                                    <li>Reddit: r/onivim</li>
                                </ul>
                            </p>
                        </div>
                    </Waypoint>
                </div>
            </section>
    </div>;
};
