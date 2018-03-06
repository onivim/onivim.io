import * as React from "react";
// import { menuItems } from "../layouts";

import { Colors } from "./../components/Colors"
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
    min-height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    color: ${Colors.Foreground};
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

    display: flex !important;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px solid black;

    & .additional-download {
        color: #DCDCDC;
    }

    & .additional-download:hover {
        color: #61AFEF;
    }
`
const LinkWrapper = styled.a`
    color: ${Colors.Accent};
    opacity: 0.8;
    margin: 8px;

    &:hover {
        color: ${Colors.Accent};
        opacity: 1;
        transform: translateY(-1px);
    }
`

const Link = (props: { url: string, title: string}) => {
    return <LinkWrapper href={props.url}>{props.title}</LinkWrapper>
}

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
    flex-direction: column;
    padding-top: 5rem;
    justify-content: center;
    align-items: center;

    max-height: 50vh;
`

const Version = styled.div`
    font-size: 1.2em;
    font-weight: bold;
`

const BuildItemButtonWrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.Accent};
    color: white;
    margin: 2em;
    white-space: nowrap;
    opacity: 0.9;
    padding: 1em 2em;

    &:hover {
        color: white;
        transform: translateY(-2px);
        opacity: 1;
    }

    & .top-row: {
        font-weight: 600;
        font-size: 1.1em;
        opacity: 0.9;
        display: flex;
        flex-direction: row;

        .icon {
            flex: 0 0 auto;
        }

        .download-title {
            flex: 1 1 auto;
        }
    }

    & .bottom-row {
        font-size: 0.8em;
        opacity: 0.7;
    }
`

const BuildItemButton = (props: { url: string, title: string, description: string} ) => {
        return <BuildItemButtonWrapper href={props.url}>
            <div className="top-row"><span className="icon">
                <i className="fas fa-download" />
            </span>
            <span className="download-title">{props.title}</span></div>
            <div className="bottom-row">{props.description}</div>
        </BuildItemButtonWrapper>
}

const DownloadHeaderWrapper = styled.div`
    font-size: 2em;
    font-weight: 500;
    opacity: 0.9;
`

const DownloadVersionWrapper = styled.div`
    font-size: 1.5em;
    font-weight: 500;
    opacity: 0.8;

    margin: 8px;
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
            backgroundColor: "black",
            // backgroundColor: "#2F3440",
            color: "#DCDCDC",
            height: "100%",
        };

        return <div style={bodyStyle}>
            <NavBar logo={logo}/>
            <DownloadSectionWrapper>
                <HeroSection>
                    <DownloadHeaderWrapper>
                        Download Oni
                    </DownloadHeaderWrapper>
                    <DownloadVersionWrapper>
                        v0.3.0
                    </DownloadVersionWrapper>
                    <div>
                        <Link url="https://github.com/onivim/oni/wiki/Whats-New-in-Oni#v030---2122018" title="Release Notes" />
                        <Link url="https://github.com/onivim/oni/wiki/Installation-Guide" title="Installation Guide" />
                    </div>
                </HeroSection>
                <div className="columns is-centered is-vcentered" style={{width: "100%", maxWidth: "1000px"}}>
                    <BuildItem className="column">
                        <PlatformIconWrapper>
                            <i className="fab fa-windows fa-5x" />
                        </PlatformIconWrapper>
                        <BuildItemButtonStrip>
                            <BuildItemButton url={"https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-ia32-win.exe"} title={"Windows"} description={"Windows 7, 8, 10" } />
                        </BuildItemButtonStrip>
                        <a className="additional-download" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-ia32-win.zip">.zip</a>
                    </BuildItem>
                    <BuildItem className="column">
                        <PlatformIconWrapper>
                            <i className="fab fa-linux fa-5x" />
                        </PlatformIconWrapper>
                        <BuildItemButtonStrip>
                            <BuildItemButton url={"https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-amd64-linux.deb"} title={"Linux"} description={"Debian, Ubuntu" } />
                            <BuildItemButton url={"https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-x86_64-linux.rpm"} title={"Linux"} description={"Red Hat, Fedora, SUSE" } />
                        </BuildItemButtonStrip>
                        <a className="additional-download" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-x64-linux.tar.gz">.tar.gz</a>
                    </BuildItem>
                    <BuildItem className="column">
                        <PlatformIconWrapper>
                            <i className="fab fa-apple fa-5x" />
                        </PlatformIconWrapper>
                        <BuildItemButtonStrip>
                            <BuildItemButton url={"https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-osx.dmg"} title={"Mac"} description={"macOS 10.9" } />
                        </BuildItemButtonStrip>
                        <a className="additional-download" href="https://github.com/onivim/oni/releases/download/v0.3.0/Oni-0.3.0-osx.dmg">.dmg</a>
                    </BuildItem>
                </div>
            </DownloadSectionWrapper>
            <HeroFooter />
        </div>
    }
}
