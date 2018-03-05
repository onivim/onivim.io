import * as React from "react";
// import { menuItems } from "../layouts";

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
    font-size: 0.9em;
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

const Centered = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`

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

const VideoWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    & iframe {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
`

export default class HomePage extends React.PureComponent<IndexPageProps, {}> {

    constructor(props: IndexPageProps) {
        super(props);
    }

    public render(): JSX.Element {
        const bodyStyle = {
            // backgroundColor: "black"
            backgroundImage: "url('" + background + "')",
        };

        return <div style={bodyStyle}>
            {/* Master head */}

            <NavBar logo={logo} backgroundColor={"#000"}/>
            <HeroSectionWrapper className="oni-header hero is-dark" style={{backgroundColor: "black"}}>
                <HeroVideoSectionWrapper>
            <VideoWrapper>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Rf-lG8NuaU0?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;modestBranding=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </VideoWrapper>
                </HeroVideoSectionWrapper>
                <HeroInnerSectionWrapper>
                    <DownloadNow />
                </HeroInnerSectionWrapper>
            </HeroSectionWrapper>
            <HeroFooter />
        </div>;
    }
}
