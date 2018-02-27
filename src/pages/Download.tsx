import * as React from "react";
// import { menuItems } from "../layouts";

import { HeroSection } from "./../components/HeroSection";
import { NavBar } from "./../components/NavBar"

import { HeroFooter } from "./../components/HeroFooter"

interface IndexPageProps {
    location: {
        pathname: string;
    };
}

const logo = require("./logo-256x256.png");
const background = require("./diagmonds.png");
const heroImage = require("./hero-screenshot.png")

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

import styled from "styled-components"

const DownloadSectionWrapper = styled.div`
    margin: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const DownloadSectionTitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;

    color: #DCDCDC;
`

const DownloadSectionSubtitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.2rem;

    color: #DCDCDC;
`

const BuildItem = styled.div`
    margin: 5em;

    display: flex;
    align-items: center;
    flex-direction: column;

    & span.icon {
        margin: 1.5rem;
    }

    & .additional-download {
        color: #DCDCDC;
    }

    & .additional-download:hover {
        color: #61AFEF;
    }
`

const BuildItemButtonStrip = styled.div`
    display: flex;
    flex-direction: row;
    
    & .button {
        margin: 16px;
        min-width: 10rem;
    }
`

const HeroImage = styled.div`
    margin: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
`

const PlatformIconWrapper = styled.div`
    padding: 2em;
`

const HeroSection = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5rem;
    background-color: black;
    justify-content: center;
    align-items: center;

    max-height: 50vh;
    
`

// TODO: 
// - Check if backer, if not, show 'Locked' experience (sign-in with github / twitter)
// - Otherwise, show 'stable' and 'latest' builds

export default class HomePage extends React.PureComponent<IndexPageProps, {}> {

    constructor(props: IndexPageProps) {
        super(props);
    }

    public render(): JSX.Element {
        const bodyStyle = {
            backgroundColor: "#2F3440",
            color: "#DCDCDC",
            height: "100%",
        };

        return <div style={bodyStyle}>
            <NavBar logo={logo}/>
            <HeroSection>
                <DownloadSectionWrapper>
                    <DownloadSectionTitle>
                        Download Oni
                    </DownloadSectionTitle>
                    <DownloadSectionSubtitle>
                       0.3.0 
                    </DownloadSectionSubtitle>
                </DownloadSectionWrapper>
                <HeroImage>
                    <img src={heroImage} style={{maxHeight: "40vh"}} />
                </HeroImage>
            </HeroSection>
            <DownloadSectionWrapper>
                <div className="columns is-centered is-vcentered">
                    <BuildItem className="column">
                        <PlatformIconWrapper>
                            <i className="fab fa-windows fa-5x" />
                        </PlatformIconWrapper>
                        <BuildItemButtonStrip>
                            <a className="button is-primary" href={"https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-ia32-win.exe"}>
                                <span className="icon">
                                    <i className="fas fa-download" />
                                </span>
                                <span>Windows</span>
                            </a>
                        </BuildItemButtonStrip>
                        <a className="additional-download" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-ia32-win.exe">.zip</a>
                    </BuildItem>
                    <BuildItem className="column">
                        <PlatformIconWrapper>
                            <i className="fab fa-linux fa-5x" />
                        </PlatformIconWrapper>
                        <BuildItemButtonStrip>
                            <a className="button is-primary" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-amd64-linux.deb">
                                <span className="icon">
                                    <i className="fas fa-download" />
                                </span>
                                <span>.deb</span>
                            </a>
                            <a className="button is-primary" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-x86_64-linux.rpm">
                                <span className="icon">
                                    <i className="fas fa-download" />
                                </span>
                                <span>.rpm</span>
                            </a>
                        </BuildItemButtonStrip>
                        <a className="additional-download" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-x64-linux.tar.gz">.tar.gz</a>
                    </BuildItem>
                    <BuildItem className="column">
                        <PlatformIconWrapper>
                            <i className="fab fa-apple fa-5x" />
                        </PlatformIconWrapper>
                        <BuildItemButtonStrip>
                            <a className="button is-primary" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-osx.dmg">
                                <span className="icon">
                                    <i className="fas fa-download" />
                                </span>
                                <span>Mac</span>
                            </a>
                        </BuildItemButtonStrip>
                        <a className="additional-download" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-osx.dmg">.dmg</a>
                    </BuildItem>
                </div>
            </DownloadSectionWrapper>
            <HeroFooter />
        </div>
    }
}
