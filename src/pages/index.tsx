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
    return <ButtonContainer><a className="button is-primary is-large" href="/Download">Download Now</a></ButtonContainer>
}


const createDivItem = (className: string) => {
    return class SingleClassItem extends React.PureComponent<{}, {}> {
        public render(): JSX.Element {
            return <div className={className}>{this.props.children}</div>;
        }
    };
};

const ButtonContainer = styled.div`
    padding: 4em;
`

const HeroSectionWrapper = styled.section`

    text-align: center;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroInnerSectionWrapper = styled.div`
    display: flex;
    flex: 0 1 auto;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: white !important;
    }
`

const HeroVideoSectionWrapper = styled.div`

    flex: 1 1 auto;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    & iframe {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
`

const HeadingWrapper = styled.div`
    padding-top: 7em;
    padding-bottom: 4em;
    max-width: 1280px;
    width: 80%;
    text-align: left;
`

const HeadingTitle = styled.div`
    font-size: 1.2em;
    font-weight: 600;
`

const VIDEO_ID="uLpbxfq0IXM"

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
                <HeroInnerSectionWrapper>
                    <HeadingWrapper>
                        <HeadingTitle>Meet Oni</HeadingTitle>
                        <div>Mouse-free productivity with the perks of modern code editors. Open-source, cross-platform, and easy to learn.</div>
                    </HeadingWrapper>
                </HeroInnerSectionWrapper>
                <HeroVideoSectionWrapper>
                    <VideoWrapper>
                            <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;modestBranding=1&playlist=${VIDEO_ID}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
