import * as React from "react";
// import { menuItems } from "../layouts";

const Waypoint = require("react-waypoint");

import { HeroSection } from "./../components/HeroSection";
import { NavBar } from "./../components/NavBar"

interface IndexPageProps {
    location: {
        pathname: string;
    };
}

const logo = require("./logo-256x256.png");
const header = require("./oni-headline-small.png");
const background = require("./diagmonds.png");
const heroVideoWebm = require("./hero-video.webm");
const heroVideoMp4 = require("./hero-video.mp4");
// const heroImage = require("./hero-screenshot.png");

const createDivItem = (className: string) => {
    return class SingleClassItem extends React.PureComponent<{}, {}> {
        public render(): JSX.Element {
            return <div className={className}>{this.props.children}</div>;
        }
    };
};

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
            return <img src={"https://s3-us-west-2.amazonaws.com/oni-media/screenshot-darwin.png"} style={{maxWidth: "1280px", width: "100%"}}/>;
    }
}

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

export class IndexPageState {
}

export const Sponsor = (props: {tier: string, index: number}): JSX.Element => {
    return <a href={`https://opencollective.com/oni/tiers/${props.tier}/${props.index}/website`}><img src={`https://opencollective.com/oni/tiers/${props.tier}/${props.index}/avatar.png`} /></a>;
};

const Sections = {
    ModernUX: {
        title: "Modern UX",
        description: "Break free of terminal limitations. Experience modal editing in a new way. Oni is a Vim GUI that brings together the best of Neovim and modern editors like Atom and VSCode."
    },
    BatteriesIncluded: {
        title: "Batteries Included",
        description: "Spend less time configuring and more time creating. Oni comes with a set of IDE-like functionality, like a fuzzy finder, an explorer sidebar, and a fuzzy finder. In addition, there's out-of-the-box support for JavaScript, TypeScript, CSS, and Reason."
    },
    Extensible: {
        title: "Extensible to the Max",
        description: "Oni is hackable via JavaScript, and a common JavaScript plugin API powers configuration and plugins. Oni also supports Vim plugins!",
    },
    Productivity: {
        title: "Maximum Productivity",
        description: "Oni is designed to enable a new level of developer productivity - from configuration, to editing, to seeing your code changes live. Oni can help speed up your 'inner loop' - your code/test/debug/run cycle.",
    }
}

import styled from "styled-components"
const HeroSectionWrapper = styled.section`

    text-align: center;
    max-height: 100vh;

    & .hero-header {
        margin-top: 7rem;
        margin-bottom: 3rem;
    }

    & .hero-body {
        margin-top: 5rem;
        justify-content: center;
        margin-bottom: 1rem;
    }

    & .hero-footer {
        margin: 2rem;

        .icon {
            padding: 1.5rem;
        }

        display: flex;
        flex-direction: column;
    }
`

const HeroInnerSectionWrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DownIcon = () => {
    return <span className="icon" style={{color: "#61AFEF" }}>
        <i className="fa fa-4x fa-chevron-circle-down">
        </i>
    </span>;
};

export default class HomePage extends React.PureComponent<IndexPageProps, IndexPageState> {

    constructor(props: IndexPageProps) {
        super(props);
    }

    public render(): JSX.Element {
        const bodyStyle = {
            backgroundImage: "url('" + background + "')",
        };

        return <div style={bodyStyle}>
            {/* Master head */}

            <NavBar logo={logo}/>
            <HeroSectionWrapper className="oni-header hero is-fullheight is-dark">
                <div className="hero-body">
                    <HeroImageSlider />
                </div>
                <HeroInnerSectionWrapper className="hero-footer">
                    <DownIcon />
                </HeroInnerSectionWrapper>
            </HeroSectionWrapper>
            <HeroSection title={Sections.ModernUX.title} description={Sections.ModernUX.description} />
            <HeroSection title={Sections.BatteriesIncluded.title} description={Sections.BatteriesIncluded.description} reverse={true} />
            <section className="section hero oni-header is-dark">
                <div className="container">
                    <h1 className="title is-2 is-spaced has-text-centered">Sponsors</h1>
                    <h2 className="subtitle is-3 has-text-centered">Gold Sponsors via OpenCollective</h2>
                    <p className="content has-text-centered">
                        <Sponsor tier={"gold-sponsor"} index={0} />
                        <Sponsor tier={"gold-sponsor"} index={1} />
                        <Sponsor tier={"gold-sponsor"} index={2} />
                        <Sponsor tier={"gold-sponsor"} index={3} />
                        <Sponsor tier={"gold-sponsor"} index={4} />
                        <Sponsor tier={"gold-sponsor"} index={5} />
                        <Sponsor tier={"gold-sponsor"} index={6} />
                        <Sponsor tier={"gold-sponsor"} index={7} />
                        <Sponsor tier={"gold-sponsor"} index={8} />
                        <Sponsor tier={"gold-sponsor"} index={9} />
                    </p>
                </div>
            </section>
            <HeroSection title={Sections.Extensible.title} description={Sections.Extensible.description} />
            <HeroSection title={Sections.Productivity.title} description={Sections.Productivity.description} reverse={true}/>
                <section className="section hero oni-footer is-dark">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                Copyright 2017 Bryan Phelps
                            </div>
                            <div className="column">
                                <p className="content">
                                    <p><strong>Oni brought to you by:</strong></p>
                                    <ul>
                                        <li><a href="https://github.com/onivim/oni/blob/master/BACKERS.md">Backers</a></li>
                                        <li><a href="https://github.com/onivim/oni/graphs/contributors">Contributors</a></li>
                                    </ul>
                                </p>
                            </div>
                            <div className="column">
                                <p className="content">
                                    <p><strong>Website built with:</strong></p>
                                    <ul>
                                        <li><a href="https://bulma.io">Bulma</a></li>
                                        <li><a href="https://www.gatsbyjs.org">Gatsby</a></li>
                                        <li><a href="http://fontawesome.io">Font Awesome</a></li>
                                        <li><a href="https://www.toptal.com/designers/subtlepatterns">Subtle Patterns</a></li>
                                    </ul>
                                </p>
                            </div>
                            <div className="column">
                                <p className="content">
                                <p><a href="https://twitter.com/oni_vim?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" langdata-show-count="false">Follow @oni_vim</a></p>
                                <p><iframe src="https://ghbtns.com/github-btn.html?user=onivim&repo=oni&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe></p>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>;
    }
}
