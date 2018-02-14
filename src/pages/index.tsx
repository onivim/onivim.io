import * as React from "react";
// import { menuItems } from "../layouts";

const Waypoint = require("react-waypoint");
import styled from "styled-components"

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

const SponsorsContents = () => {
                return <p className="content has-text-centered">
                        <p><Sponsor tier={"gold-sponsor"} index={0} /></p>
                        <p><Sponsor tier={"gold-sponsor"} index={1} /></p>
                    </p>
}


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

export const Sponsor = (props: {tier: string, index: number}): JSX.Element => {
    return <a href={`https://opencollective.com/oni/tiers/${props.tier}/${props.index}/website`}><img src={`https://opencollective.com/oni/tiers/${props.tier}/${props.index}/avatar.png`} /></a>;
};

const MiniHeader = styled.div`
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
`

const Sections = {
    ModernUX: {
        title: "Modern UX",
        subtitle: "Modal Editing + Modern Editing",
        // description: "Oni merges aesthetics and functionality by harnessing the power of modal editing in a beautiful package."
        description:[
            <p className="content">
            <ul>
                <li>Bringing together the best of Atom, VSCode, and Vim.</li>
                <li>Experience mouse-free productivity with Vim-style modal editing...</li>
                <li>...in a beautiful, modern package.</li>
            </ul>
            </p>
        ],
        contents: <img src="https://user-images.githubusercontent.com/13532591/36127305-9c7b6b80-1011-11e8-85dd-0345788c0b56.png" />
    },
    BatteriesIncluded: {
        title: "Batteries Included",
        subtitle: "...but still hackacble to the core.",
        description:[
            <div>
            <MiniHeader>Out-of-box functionality:</MiniHeader>
            <p className="content">
            <ul>
                <li>Code completion</li>
                <li>Hover info</li>
                <li>Font ligature support</li>
                <li>Fuzzy finder</li>
                <li>Language server support:</li>
                <ul>
                    <li>CSS</li>
                    <li>LESS</li>
                    <li>JavaScript</li>
                    <li>Reason</li>
                    <li>SASS</li>
                    <li>TypeScript</li>
                    <li>Or bring your own!</li>
                </ul>
            </ul>
            </p>
            </div>
        ],
        content: [
            <div>
            <MiniHeader>Extensible</MiniHeader>
            <p className="content">
            <ul>
                <li>Prefer front-end? Use our javascript API</li>
                <li>Coming from Vim? No problem - bring your `init.vim`!</li>
                <li>Compatible with most Vim plugins</li>
            </ul>
            </div>
        ]
        // description: "Spend less time configuring and more time creating. Sane defaults plus out-of-the-box support for JavaScript, TypeScript, CSS, and Reason."
    },
    Productivity: {
        title: "Maximize Productivity",
        subtitle: "Live Preview (Coming Soon)",
        description:[
            <p className="content">
            <ul>
                <li>See the results of your code as you work.</li>
                <li>Minimize your 'inner loop' and experience live preview.</li>
            </ul>
            </p>
        ],
        content: [
            <img src="https://user-images.githubusercontent.com/13532591/35305852-e7bf8f6c-004f-11e8-9614-cfe5ced35515.gif" />
        ]
    },
    GetStarted: {
        title: "Get started!",
        subtitle: "Download + Contribute",
        description: [
            <div>
                <a className="button is-primary">Download</a>
                <a className="button is-warning">Documentation</a>
            </div>
        ],
    },
    BroughtToYouBy: {
        title: "Brought to you by...",
        subtitle: "...our backers, sponsors, and contributors!",
        description: [
            <div>
               <MiniHeader>Contributors</MiniHeader>
               <a href="https://github.com/onivim/oni/graphs/contributors"><img src="https://opencollective.com/oni/contributors.svg?width=890" /></a> 
            </div>
        ],
        contents: [
            <div>
                <MiniHeader>Sponsors</MiniHeader>
                <SponsorsContents />
            </div>
        ],
    }
}

const HeroSectionWrapper = styled.section`

    text-align: center;
    height: 100vh;

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
    flex: 0 0 auto;
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

export default class HomePage extends React.PureComponent<IndexPageProps, {}> {

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
            <HeroSection title={Sections.ModernUX.title} subtitle={Sections.ModernUX.subtitle} description={Sections.ModernUX.description} image={Sections.ModernUX.contents} reverse={true} />
            <HeroSection title={Sections.BatteriesIncluded.title} subtitle={"Less time configuring, more time creating"} description={Sections.BatteriesIncluded.description} reverse={false} />
            <HeroSection title={Sections.Productivity.title} subtitle={Sections.Productivity.subtitle} description={Sections.Productivity.description} image={Sections.Productivity.content} reverse={false}/>
            <HeroSection title={Sections.BroughtToYouBy.title} subtitle={Sections.BroughtToYouBy.subtitle} description={Sections.BroughtToYouBy.description} image={Sections.BroughtToYouBy.contents} reverse={true}/>
            <HeroSection title={Sections.GetStarted.title} subtitle={Sections.GetStarted.subtitle} description={Sections.GetStarted.description} reverse={false}/>
            <HeroFooter />
        </div>;
    }
}
            // <HeroSection title={"Free and open-source"} subtitle={"...brought to you by our sponsors!"} description={"Thanks to our sponsors and backers for your support!"} image={<SponsorsContents />}/>
