import * as React from "react";
// import { menuItems } from "../layouts";

const Waypoint = require("react-waypoint");

import { HeroSection } from "./../components/HeroSection";
import { HeroFooter } from "./../components/HeroFooter"
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
        description: "Break free of terminal limitations. Oni is a Vim GUI that brings together the best of Vim, IDEs, and modern editors."
    },
    BatteriesIncluded: {
        title: "Batteries Included",
        description: "Spend less time configuring and more time creating. Sane defaults plus out-of-the-box support for JavaScript, TypeScript, CSS, and Reason."
    },
    Extensible: {
        title: "Hassle-free Extensibility",
        description: "Oni is hackable via JavaScript, and a common JavaScript plugin API powers configuration and plugins. Oni also supports Vim plugins!",
    },
    Productivity: {
        title: "Maximum Productivity",
        description: "The ultimate goal of Oni is to make you more productive. Oni can help speed up your 'inner loop' - your code/test/debug/run cycle.",
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

const SponsorsContents = () => {
                return <p className="content has-text-centered">
                        <p><Sponsor tier={"gold-sponsor"} index={0} /></p>
                        <p><Sponsor tier={"gold-sponsor"} index={1} /></p>
                    </p>
}

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
            <HeroSection title={"Brought to you by our sponsors"} description={"Oni is free and open-source... but needs your help! Consider becoming a backer or sponsor if you find the project useful."} image={<SponsorsContents />} reverse={true}/>
            <HeroSection title={Sections.ModernUX.title} description={Sections.ModernUX.description} />
            <HeroSection title={Sections.BatteriesIncluded.title} description={Sections.BatteriesIncluded.description} reverse={true} />
            <HeroSection title={Sections.Extensible.title} description={Sections.Extensible.description} />
            <HeroSection title={Sections.Productivity.title} description={Sections.Productivity.description} reverse={true}/>
            <HeroFooter />
        </div>;
    }
}
