import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
// import { menuItems } from "../layouts";

const Waypoint = require("react-waypoint");

interface IndexPageProps {
    location: {
        pathname: string;
    };
}

const bitcoinAddress = require("./bitcoin-address.png");
const logo = require("./logo-256x256.png");
const header = require("./oni-headline-small.png");
const background = require("./diagmonds.png");
const heroVideoWebm = require("./hero-video.webm");
const heroVideoMp4 = require("./hero-video.mp4");
const heroImage = require("./hero-screenshot.png");

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

const RedditIconLarge = () => {
    return <span className="icon" style={{color: "orange" }}>
        <i className="fa fa-lg fa-reddit">
        </i>
    </span>;
};

const LargeCircleIcon = (props: { iconName: string, color: string }) => {

    const iconClass = `fa fa-5x fa-${props.iconName}`;

    const style = {
        width: "8rem",
        height: "8rem",
        borderRadius: "4rem",
        backgroundColor: props.color,
        color: "white",
    };

    const wrapperStyle = {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    };

    return <div style={wrapperStyle}>
    <span className="icon" style={style}>
        <i className={iconClass}>
        </i>
    </span>
    </div>;
};

const NavBarItem = createAnchorItem("navbar-item");
const NavBarItemHiddenOnDesktop = createAnchorItem("navbar-item is-hidden-desktop");
const NavBarItemDesktopOnly = createAnchorItem("navbar-item is-hidden-desktop-only");

import { Carousel } from "react-responsive-carousel";
const styles = require("react-responsive-carousel/lib/styles/carousel.min.css");

export interface IHeroState {
    isRendered: boolean;
}

const BitcoinModal = (props: { visible: boolean, onClose: () => void }) => {

    const className = props.visible ? "modal is-active" : "modal";

    return <div className={className}>
            <div className="modal-background"> </div>
            <div className="modal-card">
                <header className="modal-card-head">
                   <p className="modal-card-title">Donate Bitcoin</p>
                  <button className="delete" aria-label="close" onClick={props.onClose}></button>
                </header>
                <section className="modal-card-body">

                    <p className="content has-text-centered">
                    <img src={bitcoinAddress} />
                    <p className="oni-padding-top"><input className="input is-medium oni-padding-top" value="1HdTteoJZCkkAuesyxA3vmLxmpGGk995PG" type="text" readOnly={true}/></p>

                    <p className="has-text-left is-small oni-padding-top"><strong>NOTE:</strong> Bitcoin donations are anonymous, so please hit me up on <a href="mailto:bryphe@outlook.com">e-mail</a> or <a href="http://www.twitter.com/oni_vim">twitter</a> if you'd like to be recognized for your donation.</p>
                    </p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={props.onClose}>Close</button>
                </footer>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={props.onClose}></button>
            </div>;
};

export class HeroImageSlider extends React.PureComponent<{}, IHeroState> {

    constructor() {
        super();
    }

    public componentDidMount(): void {
    }

    public render(): JSX.Element {

        return <figure className="oni-hero-container image is-4by3" style={{width: "100%"}}>
            <div className="oni-hero-loading">
                <i className="fa fa-circle-o-notch fa-3x fa-spin" aria-hidden="true"></i>
            </div>
            <img src={heroImage} style={{width: "100%"}}/>
            {/* TODO: Bring back once the video isn't broken
            <video className="oni-hero-video" autoPlay={true} loop={true}>
                <source src={heroVideoWebm} type="video/webm" />
                <source src={heroVideoMp4} type="video/mp4" />
            </video>
            */}
        </figure>;

    }
}

const NavBarMenu = (props: { isActive: boolean, openBitcoinModal: () => void }) => {

    const menuClass = props.isActive ? "navbar-menu is-active" : "navbar-menu";

    return <div className={menuClass} id="navMenuDocumentation">
        <div className="navbar-start">
            <NavBarItem href={"https://github.com/onivim/oni/releases/latest"}>Download</NavBarItem>
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href={"https://github.com/onivim/oni/wiki"}>Docs</a>
                <div className="navbar-dropdown">
                    <NavBarItem href={"https://github.com/onivim/oni/wiki/Configuration"}>Configuration</NavBarItem>
                    <NavBarItem href={"https://github.com/onivim/oni/wiki/FAQ"}>FAQ</NavBarItem>
                    <NavBarItem href={"https://github.com/onivim/oni/wiki/Language-Support"}>Language Support</NavBarItem>
                    <NavBarItem href={"https://github.com/onivim/oni/wiki/Plugins"}>Plugins</NavBarItem>
                    <NavBarItem href={"https://github.com/onivim/oni/wiki/API"}>API</NavBarItem>
                </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href={"https://github.com/onivim/oni/wiki"}>Support Oni</a>
                <div className="navbar-dropdown">
                    <NavBarItem href={"https://www.bountysource.com/teams/oni"}>BountySource</NavBarItem>
                    <NavBarItem href={"https://paypal.me/bryphe/25"}>PayPal</NavBarItem>
                    <NavBarItem href={"javascript:;"}><span onClick={() => props.openBitcoinModal()} style={{width: "100%"}}>BitCoin</span></NavBarItem>
                </div>
            </div>
        </div>
        <div className="navbar-end">
            <NavBarItemDesktopOnly href={"https://github.com/onivim/oni"}>
                <GitHubIconLarge />
            </NavBarItemDesktopOnly>
            <NavBarItemDesktopOnly href={"https://twitter.com/oni_vim"}>
                <TwitterIconLarge />
            </NavBarItemDesktopOnly>
            <NavBarItemDesktopOnly href={"https://reddit.com/r/onivim"}>
                <RedditIconLarge />
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

const Link = (props: { text: string, href: string }) => {
    return <a href={props.href}>{props.text}</a>;
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

export interface INavBarProps {
    openBitcoinModal: () => void;
}

export interface INavBarState {
    isActive: boolean;
}

export class NavBar extends React.PureComponent<INavBarProps, INavBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    public render(): JSX.Element {

            const burgerClass = this.state.isActive ? "navbar-burger burger is-active" : "navbar-burger burger";

            return <nav className="navbar is-light">
                <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <a className="oni-brand-logo" href="https://github.com/onivim/oni">
                        <img src={logo} alt="Oni Logo" />
                        </a>
                    </div>
                    <NavBarItemHiddenOnDesktop href={"https://github.com/onivim/oni"}>
                        <GitHubIconLarge />
                    </NavBarItemHiddenOnDesktop>
                    <NavBarItemHiddenOnDesktop href={"https://twitter.com/oni_vim"}>
                        <TwitterIconLarge />
                    </NavBarItemHiddenOnDesktop>
                    <div className={burgerClass} data-target="navMenuDocumentation" onClick={() => this._toggleActive()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <NavBarMenu isActive={this.state.isActive} openBitcoinModal={this.props.openBitcoinModal} />
                </div>
            </nav>;
    }

    private _toggleActive(): void {
        this.setState({
            isActive: !this.state.isActive,
        });
    }
}

export class IndexPageState {
    isBitcoinModalVisible: boolean;
}

export default class HomePage extends React.PureComponent<IndexPageProps, IndexPageState> {

    constructor(props: IndexPageProps) {
        super(props);

        this.state = {
            isBitcoinModalVisible: false,
        };
    }

    private _openBitcoinModal(): void {
        this.setState({ isBitcoinModalVisible: true });
    }

    private _closeBitcoinModal(): void {
        this.setState({ isBitcoinModalVisible: false });
    }

    public render(): JSX.Element {
        const bodyStyle = {
            backgroundImage: "url('" + background + "')",
        };

        return <div style={bodyStyle}>
            {/* Master head */}

            <NavBar openBitcoinModal={() => this._openBitcoinModal()}/>
            <BitcoinModal visible={this.state.isBitcoinModalVisible} onClose={() => this._closeBitcoinModal()} />
            <section className="oni-header hero is-medium is-dark">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column oni-flex-center">
                            <img src={header} style={{width: "65%"}} />
                            <h5 className="title is-5 has-text-centered">Modal editing for the future</h5>
                            <p className="content">
                                <ul>
                                    <li>Open-source</li>
                                    <li>Cross-platform</li>
                                    <li>Powered by <a href="https://neovim.io">neovim</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="column oni-flex-center">
                            <HeroImageSlider />
                        </div>
                        <div className="column oni-flex-center">
                            <a className="oni-button button is-primary is-large" href="https://github.com/onivim/oni/releases/latest">Download</a>
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
                            Break free of terminal UI limitations and experience modal editing in a new way. Built with neovim, electron and web technology, Oni combines fast modal editing with the features of a modern code editor.
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
                            Oni is fully configurable and scriptable via JavaScript, or your compile-to-Javascript dialect of choice. Oni is compatible with most VimL plugins, too!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section hero oni-header is-dark">
                <div className="container">
                    <h1 className="title is-1 is-spaced">Why?</h1>
                    <p className="content">
                        Our <strong>goal</strong> is build the <em>fastest way to go from thought to code</em>, enabling a new level of developer productivity - by combining old-school modal editing with deep language integration, wrapped up in a modern package. Oni leverages <a href="https://neovim.io">neovim</a> for a complete vim package (no emulation!), and is built on <a href="https://electron.atom.io">Electron</a>. It shares much in common with <a href="https://code.visualstudio.com">VSCode</a> and <a href="https://atom.io">Atom</a>, however, it features a unique architecture with <a href="https://neovim.io">neovim</a> as the text-editing engine, a high-performance canvas renderer, and a powerful extensibility model.
                    </p>
                </div>
            </section>
            <section className="section hero oni-header is-dark">
                <div className="container">
                    <h1 className="title is-1 is-spaced">Contribute</h1>
                    <p className="content">Oni is free and open-source, but has a very ambitious <a href="https://github.com/onivim/oni/wiki/roadmpa">roadmap</a> - help us on our mission to <strong>reimagine developer productivity</strong>. Oni would not be possible without our <a href="https://github.com/onivim/oni/blob/master/BACKERS.md">backers</a> and <a href="https://github.com/onivim/oni/graphs/contributors">contributors</a>.</p>
                </div>
            </section>
            <section className="section hero oni-header is-dark">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-quarter">
                            <LargeCircleIcon iconName={"usd"} color={"#23d160"} />
                        </div>
                        <div className="column is-one-quarter">
                            <h2 className="subtitle is-2">Finance</h2>
                            <p className="content">
                                <ul>
                                    <li><b>Coming Soon</b> - Become a backer or sponsor via OpenCollective</li>
                                    <li>Become a <a href="https://www.bountysource.com/teams/oni">backer</a> via BountySource</li>
                                    <li>Make a one-time donation via <a href="https://paypal.me/bryphe/25">PayPal</a></li>
                                    <li>Make a one-time donation via <a href="javascript:;" onClick={() => this._openBitcoinModal()}>BitCoin</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="column is-one-quarter"></div>
                    </div>
                </div>
            </section>
            <section className="section hero oni-header is-dark">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-quarter">
                            <LargeCircleIcon iconName={"wrench"} color={"orange"} />
                        </div>
                        <div className="column is-one-quarter">
                            <h2 className="subtitle is-2">Build</h2>
                            <p className="content">
                                <ul>
                                    <li><a href="https://github.com/onivim/oni/issues/new">Report</a> a bug</li>
                                    <li><a href="https://github.com/onivim/oni/issues/new">Suggest</a> a feature</li>
                                    <li>Set up your <a href="https://github.com/onivim/oni/wiki/Development">development environment</a></li>
                                    <li>Fix an <a href="https://github.com/onivim/oni/issues">issue</a> and submit a <a href="https://github.com/onivim/oni/compare">pull request</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="column is-one-quarter"></div>
                    </div>
                </div>
            </section>
                <section className="section hero oni-header is-dark">
                    <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-quarter">
                            <LargeCircleIcon iconName={"handshake-o"} color={"#209cee"} />
                        </div>
                        <div className="column is-one-quarter">
                            <h2 className="subtitle is-2">Community</h2>
                            <p className="content has-text-left">
                                <ul>
                                    <li>Review our <a href="https://github.com/onivim/oni/wiki">documentation</a></li>
                                    <li>Contribute to our <a href="https://github.com/onivim/onivim.io">website</a></li>
                                    <li>Follow us on <a href="https://twitter.com/oni_vim">twitter</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="column is-one-quarter"></div>
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
                                    <p><strong>Brought to you by:</strong></p>
                                    <ul>
                                        <li><a href="https://github.com/onivim/oni/blob/master/BACKERS.md">Backers</a></li>
                                        <li><a href="https://github.com/onivim/oni/graphs/contributors">Contributors</a></li>
                                    </ul>
                                </p>
                            </div>
                            <div className="column">
                                <p className="content">
                                    <p><strong>Website built with::</strong></p>
                                    <ul>
                                        <li>Bulma</li>
                                        <li>Gatsby</li>
                                        <li>FontAwesome</li>
                                        <li>SubtlePatterns</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="column">
                                <p className="content">
                                <p><a href="https://twitter.com/oni_vim?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" langdata-show-count="false">Follow @oni_ivim</a></p>
                                <p><iframe src="https://ghbtns.com/github-btn.html?user=onivim&repo=oni&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe></p>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>;
    }
}
