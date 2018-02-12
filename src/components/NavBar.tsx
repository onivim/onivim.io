import * as React from "react";

import styled, { keyframes }  from "styled-components";

import { logo } from "./../pages/logo-256x256.png"

const Colors = {
    DarkBackground: "#212733",
    DarkForeground: "#ECEFF4",
    Background: "#2F3440",
    Foreground: "#DCDCDC",
    Accent: "#61AFEF",
};

export interface INavBarState {
    isActive: boolean;
}

const NavBarItemContainer = styled.a`
    &.navbar-item:hover, &.navbar-link:hover {
        background-color: ${Colors.Background} !important;
        border-bottom: 2px solid ${Colors.Accent};
        box-shadow:  -9px 0px 20px 0 rgba(0,0,0,0.2), 9px 0px 20px 0 rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);

        z-index: 1;
    }

    color: ${Colors.Foreground} !important;
    border-bottom: 2px solid transparent;
`

const createAnchorItem = (className: string) => {
    return class HOC extends React.PureComponent<{href: string }, {}> {
        public render(): JSX.Element {
            return <NavBarItemContainer className={className} href={this.props.href}>{this.props.children}</NavBarItemContainer>;
        }
    };
};

const GitHubIconLarge = () => {
    return <span className="icon" style={{color: "#EEE" }}>
        <i className="fa fa-lg fa-github">
        </i>
    </span>;
};

const TwitterIconLarge = () => {
    return <span className="icon" style={{color: "#55acee" }}>
        <i className="fa fa-lg fa-twitter">
        </i>
    </span>;
};

const RedditIconLarge = () => {
    return <span className="icon" style={{color: "orange" }}>
        <i className="fa fa-lg fa-reddit">
        </i>
    </span>;
};

const NavBarItem = createAnchorItem("navbar-item");
const NavBarItemHiddenOnDesktop = createAnchorItem("navbar-item is-hidden-desktop");
const NavBarItemDesktopOnly = createAnchorItem("navbar-item is-hidden-desktop-only");

const NavigationMenuWrapper = styled.nav`
    background-color: ${Colors.Background};
    color: ${Colors.Foreground};
`

const NavBarMenu = (props: { isActive: boolean}) => {

    const menuClass = props.isActive ? "navbar-menu is-active" : "navbar-menu";

    return <NavigationMenuWrapper className={menuClass} id="navMenuDocumentation">
        <div className="navbar-start">
            <NavBarItem href={"https://github.com/onivim/oni/releases/latest"}>Download</NavBarItem>
            <NavBarItem href={"https://onivim.github.io/oni-docs/#/"}>Documentation</NavBarItem>
            <div className="navbar-item has-dropdown is-hoverable">
                <NavBarItemContainer className="navbar-link" href={"https://github.com/onivim/oni/wiki"}>Support Oni</NavBarItemContainer>
                <div className="navbar-dropdown">
                    <NavBarItem href={"https://opencollective.com/oni"}>OpenCollective</NavBarItem>
                    <NavBarItem href={"https://www.bountysource.com/teams/oni"}>BountySource</NavBarItem>
                    <NavBarItem href={"https://paypal.me/bryphe/25"}>PayPal</NavBarItem>
                </div>
            </div>
        </div>
        <div className="navbar-end">
            <NavBarItemDesktopOnly href={"https://github.com/onivim/oni"}>
                <GitHubIconLarge />
            </NavBarItemDesktopOnly>
            <NavBarItemDesktopOnly href={"https://twitter.com/oni_vim"}>
                <TwitterIconLarge />
            </NavBarItemDesktopOnly>
            <NavBarItemDesktopOnly href={"https://reddit.com/r/onivim"}>
                <RedditIconLarge />
            </NavBarItemDesktopOnly>
        </div>
    </NavigationMenuWrapper>;

};

const NavBarWrapper = styled.nav`
    &.navbar.is-dark.is-fixed-top,
    & .navbar-dropdown,
    & .navbar-item, 
    & .navbar-link {
        background-color: ${Colors.Background};
        color: ${Colors.Foreground};
    }
`

const BrandEntranceKeyframes = keyframes`
    0% { transform: scale(0.8); opacity: 0.8; }
    100%% { transform: scale(1); opacity: 1; }
`

export const NavBarBrandWrapper = styled.div`
    animation: ${BrandEntranceKeyframes} 0.25s ease-in forwards;
`

export interface INavBarProps {
    logo: string
}

export class NavBar extends React.PureComponent<INavBarProps, INavBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    public render(): JSX.Element {

            const burgerClass = this.state.isActive ? "navbar-burger burger is-active" : "navbar-burger burger";

            return <NavBarWrapper className="navbar is-dark is-fixed-top">
                <div className="container">
                <div className="navbar-brand">
                    <NavBarBrandWrapper className="navbar-item">
                        <a className="oni-brand-logo" href="https://github.com/onivim/oni">
                        <img src={this.props.logo} alt="Oni Logo" />
                        </a>
                    </NavBarBrandWrapper>
                    <NavBarItemHiddenOnDesktop href={"https://github.com/onivim/oni"}>
                        <GitHubIconLarge />
                    </NavBarItemHiddenOnDesktop>
                    <NavBarItemHiddenOnDesktop href={"https://twitter.com/oni_vim"}>
                        <TwitterIconLarge />
                    </NavBarItemHiddenOnDesktop>
                    <div className={burgerClass} data-target="navMenuDocumentation" onClick={() => this._toggleActive()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <NavBarMenu isActive={this.state.isActive}/>
                </div>
            </NavBarWrapper>;
    }

    private _toggleActive(): void {
        this.setState({
            isActive: !this.state.isActive,
        });
    }
}

