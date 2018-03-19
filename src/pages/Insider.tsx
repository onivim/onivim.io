import * as React from "react";

import styled, { keyframes }  from "styled-components"

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

const HeroSectionWrapper = styled.div`
    height: 50vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const HeroSectionHeader = styled.div`
    font-size: 3em;
    color: white;
`
const HeroSectionSubHeader = styled.div`
    font-size: 1.2em;
    color: white;
`

export interface AuthenticatedSectionState {
    isAuthenticated: boolean
}

const makeAuthenticatedApiCall = (apiPath: string): Promise<Response> => {
    return fetch(`https://api.onivim.io/${apiPath}?${new Date().getTime()}`, {credentials: "same-origin"})
}

export class AuthenticatedSection extends React.PureComponent<{}, AuthenticatedSectionState> {

    constructor(props) {
        super(props)

        this.state = {
            isAuthenticated: false,
        }
    }

    public componentDidMount(): void {

        makeAuthenticatedApiCall("auth/me")
            .then((res) => {
                debugger
                if (res.status === 200) {
                    this.setState({
                        isAuthenticated: true,
                    })
                }
            })
    }

    public render(): JSX.Element {
       return <div>Authenticated: {this.state.isAuthenticated.toString()}</div> 
    }
}

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

            <NavBar logo={logo}/>
            <HeroSectionWrapper>
                <HeroSectionHeader>Become an Insider</HeroSectionHeader>
                <HeroSectionSubHeader>Support Oni with a monthly donation</HeroSectionSubHeader>
            </HeroSectionWrapper>
            <section className="section">
                <AuthenticatedSection />
                <a href="https://api.onivim.io/auth/github">Auth with Github</a>
                <div className="container">
                    <div>Support Oni's development</div>
                    <div>Get these features</div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        feature1
                    </div>
                    <div className="column is-narrow">
                        feature2
                    </div>
                </div>
            </section>
            <HeroFooter />
        </div>;
    }
}
