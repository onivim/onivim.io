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
        this.state = {
            isRendered: false,
        };
    }

    public componentDidMount(): void {
        // window.setTimeout(() => {
        // this.setState({
        //     isRendered: true
        // })
        // }, 1000)
    }

    public render(): JSX.Element {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 0,
            slidesToScroll: 1,
        };

        // if (!this.state.isRendered) {
        //     return <div />
        // }

        return <Carousel showThumbs={false} showIndicators={false}>
                <div><img src="https://user-images.githubusercontent.com/13532591/28976286-25779704-78f2-11e7-967f-72cb438d77f6.png" /><h2>Showcase 1</h2></div>
                <div><img src="https://user-images.githubusercontent.com/13532591/28976286-25779704-78f2-11e7-967f-72cb438d77f6.png" /></div>
                <div><img src="https://user-images.githubusercontent.com/13532591/28976286-25779704-78f2-11e7-967f-72cb438d77f6.png" /></div>
            </Carousel>;
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

const FeatureCard = () => {

    return <div className="card">
        <div className="card-header">
            <div className="card-header-title">
                Modern UX
            </div>
        </div>
        <div className="card-content">
            This is content about the feature
        </div>
    </div>;

};

// import logo from "./oni-header.png"

export default (props: IndexPageProps) => {
    return <div>
        {/* Master head */}
        <nav className="navbar is-light">
            <div className="container">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <a href="https://github.com/bryphe/oni">
                    <img src={header} alt="Oni Logo" />
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

        <section className="hero is-dark is-medium">
            <div className="hero-body">
                <div className="columns">
                    <div className="column oni-flex-center">
                        <a className="oni-button button is-primary is-large">Download</a>
                    </div>
                    <div className="column oni-flex-center">
                        <HeroImageSlider />
                    </div>
                    <div className="column oni-flex-center">
                        <a className="oni-button button is-info is-large">Support</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="section is-light">
            <div className="container">
                <h1 className="title">Features</h1>
                <div className="columns is-8">
                    <div className="column">
                        <FeatureCard />
                    </div>
                    <div className="column">
                        <FeatureCard />
                    </div>
                    <div className="column">
                        <FeatureCard />
                    </div>
                </div>
            </div>
        </section>
        <section className="section is-light">
            <div className="container">
                <h1 className="title">Support</h1>
            </div>
        </section>
        <section className="section is-light">
            <div className="container">
                <h1 className="title">Learn More</h1>
            </div>
        </section>
    </div>;
};
