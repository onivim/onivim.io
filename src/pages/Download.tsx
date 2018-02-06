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
const background = require("./diagmonds.png");

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

export default class HomePage extends React.PureComponent<IndexPageProps, {}> {

    constructor(props: IndexPageProps) {
        super(props);
    }

    public render(): JSX.Element {
        const bodyStyle = {
            backgroundImage: "url('" + background + "')",
        };

        return <div style={bodyStyle}>
            <NavBar logo={logo}/>
            <HeroSectionWrapper className="oni-header hero is-fullheight is-dark">
                <div className="hero-body">
                </div>
            </HeroSectionWrapper>
        </div>
    }
}
