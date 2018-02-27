import * as React from "react";
// import { menuItems } from "../layouts";

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

const DownloadSectionWrapper = styled.div`
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
            backgroundImage: "url('" + background + "')",
        };

        return <div style={bodyStyle}>
            <NavBar logo={logo}/>
            <DownloadSectionWrapper>
                <div>
                    Backers Builds
                </div>
            </DownloadSectionWrapper>
            <DownloadSectionWrapper>
                <div>
                    Previous Builds
                </div>
            </DownloadSectionWrapper>
        </div>
    }
}
