import * as React from "react";
// import { menuItems } from "../layouts";

import { Colors } from "./../components/Colors"
import { NavBar } from "./../components/NavBar"

import { DownloadSection } from "./../components/DownloadSection";

import { HeroFooter } from "./../components/HeroFooter"
import { HeaderSpacer } from "./../components/HeaderSpacer";

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
            <HeaderSpacer />
            <div style={{minHeight: "75vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <DownloadSection buildType="community" />
            </div>
            <HeroFooter />
        </div>
    }
}
