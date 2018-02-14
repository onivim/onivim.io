import * as React from "react";
// import { menuItems } from "../layouts";

const Waypoint = require("react-waypoint");
import styled, { keyframes }  from "styled-components"

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

const DownloadNow = () => {
                    return <ButtonContainer><a className="button is-primary is-large" href="https://github.com/onivim/oni/releases/latest">Download Now</a></ButtonContainer>
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
    font-size: 1.1em;
    text-align: center;
    padding: 2em;
`

const ButtonContainer = styled.div`
    padding: 2em;
`

const HighlightContainer = styled.div`
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.1);
`

const HeroSectionImage = styled.img`
    padding: 2em;
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
        subtitle: "...but still hackable to the core.",
        description:[
            <div>
                <MiniHeader>Included:</MiniHeader>
                <p className="content">
                    <ul>
                        <li>Code completion</li>
                        <li>Hover info</li>
                        <li>Font ligature support</li>
                        <li>Fuzzy file finder</li>
                        <li>Language server support</li>
                    </ul>
                </p>
            </div>
        ],
        content: [
            <HighlightContainer>
                <MiniHeader>Extensible:</MiniHeader>
                <p className="content">
                    <ul>
                        <li>Prefer front-end? Use our <a href="https://onivim.github.io/oni-api/">javascript API</a></li>
                        <li>Coming from Vim? No problem - bring your <a href="https://github.com/onivim/oni/wiki/Configuration#initvim">`init.vim`!</a></li>
                        <li>Compatible with most <a href="https://github.com/onivim/oni/wiki/Configuration#initvim">Vim plugins</a></li>
                        <li>...and most <a href="http://langserver.org/">language servers</a></li>
                    </ul>
                </p>
            </HighlightContainer>
        ]
    },
    Productivity: {
        title: "Maximize Productivity",
        subtitle: "Live Preview (Coming Soon)",
        description:[
            <HighlightContainer>
                <p className="content">
                    See the results of your code as you work.
                </p>
                <p className="content">
                    Tighten your inner loop, and become more productive.
                </p>
            </HighlightContainer>
        ],
        content: [
            <HeroSectionImage src="https://user-images.githubusercontent.com/13532591/35305852-e7bf8f6c-004f-11e8-9614-cfe5ced35515.gif" />
        ]
    },
    GetStarted: {
        title: "Get started!",
        subtitle: "Download + Contribute",
        contents: [
            <HighlightContainer>
                <ButtonContainer><a className="button is-primary is-large" href="https://github.com/onivim/oni/releases/latest">Download Now</a></ButtonContainer>
                <ButtonContainer><a className="button is-warning is-large" href="https://onivim.github.io/oni-docs/#/">Documentation</a></ButtonContainer>
            </HighlightContainer>
        ],
        description: [
            <div>
                <MiniHeader>Contribute</MiniHeader>
                <p className="content">
                <ul>
                    <li>Become a backer via <a href="https://opencollective.com/oni">OpenCollective</a></li>
                    <li>Become a backer via <a href="https://www.bountysource.com/teams/oni">BountySource</a></li>
                    <li><a href="https://github.com/onivim/oni/issues/new">Report</a> a bug or <a href="https://github.com/onivim/oni/issues/new">suggest a feature</a></li>
                    <li>Fix an <a href="https://github.com/onivim/oni/issues">issue</a> and submit a <a href="https://github.com/onivim/oni/compare">pull request</a></li>
                    <li>Chat with us on <a href="https://gitter.im/onivim">gitter</a></li>
                </ul>
                </p>
            </div>
        ]
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

    position: relative;
`

const HeroInnerSectionWrapper = styled.div`

    position: absolute;
    bottom: 0px;
    height: 12em;
    left: 0px;
    right: 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: white !important;
    }
`

const HeroVideoSectionWrapper = styled.div`

    position: absolute;
    top: 6em;
    bottom: 12em;
    left: 0px;
    right: 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const DownIconKeyFrames = keyframes`
    0% { transform: translateY(-5px) scale(0.9); opacity: 1; }
    50% { transform: translateY(0px) scale(1); opacity: 0.8; }
    100% { transform: translateY(-5px) scale(0.9); opacity: 1; }
`

const DownIconWrapper = styled.a`
    animation: ${DownIconKeyFrames} 2s ease-in-out infinite;
    color: rgba(0, 255, 200, 0.8);
    padding: 2em;

    &:hover {
        animation: ${DownIconKeyFrames} 1s ease-in-out infinite;
        color: rgba(0, 255, 200, 1);
    }
`

const scrollDown = () => {
    window.scrollBy(0, window.innerHeight)
}

const DownIcon = () => {
    return <DownIconWrapper className="icon" onClick={scrollDown}>
        <i className="fa fa-4x fa-chevron-circle-down">
        </i>
    </DownIconWrapper>;
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
            <HeroSectionWrapper className="oni-header hero is-dark">
                <HeroVideoSectionWrapper>
                    <video src="https://s3-us-west-2.amazonaws.com/oni-media/oni-hero-video.mp4" id="video" autoPlay={true} muted={true} width="100%" style={{width: "100%", height: "100%"}}/>
                </HeroVideoSectionWrapper>
                <HeroInnerSectionWrapper>
                    <DownloadNow />
                    <DownIcon />
                </HeroInnerSectionWrapper>
            </HeroSectionWrapper>
            <HeroSection title={Sections.ModernUX.title} subtitle={Sections.ModernUX.subtitle} description={Sections.ModernUX.description} image={Sections.ModernUX.contents} reverse={true} />
            <HeroSection title={Sections.BatteriesIncluded.title} subtitle={"Less time configuring, more time creating"} description={Sections.BatteriesIncluded.description} image={Sections.BatteriesIncluded.content} reverse={false} />
            <HeroSection title={Sections.Productivity.title} subtitle={Sections.Productivity.subtitle} description={Sections.Productivity.description} image={Sections.Productivity.content} reverse={true}/>
            <HeroSection title={Sections.BroughtToYouBy.title} subtitle={Sections.BroughtToYouBy.subtitle} description={Sections.BroughtToYouBy.description} image={Sections.BroughtToYouBy.contents} reverse={false}/>
            <HeroSection title={Sections.GetStarted.title} subtitle={Sections.GetStarted.subtitle} description={Sections.GetStarted.description} image={Sections.GetStarted.contents} reverse={true}/>
            <HeroFooter />
        </div>;
    }
}
            // <HeroSection title={"Free and open-source"} subtitle={"...brought to you by our sponsors!"} description={"Thanks to our sponsors and backers for your support!"} image={<SponsorsContents />}/>
