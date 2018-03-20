import * as React from "react";

import styled, { keyframes } from "styled-components"

import { HeroFooter } from "./../components/HeroFooter"
import { NavBar } from "./../components/NavBar"

interface IndexPageProps {
    location: {
        pathname: string;
    };
}
    import * as Colors from "./../components/Colors"
        

const logo = require("./logo-256x256.png");
const header = require("./oni-headline-small.png");
const background = require("./diagmonds.png");

const ContainerWrapper = styled.div`
    min-height: 100vh;
    width: 100%;

    background-color: black;
`

const HeroSectionWrapper = styled.div`
    height: 50vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SectionWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeroSectionHeader = styled.div`
    font-size: 3em;
    color: white;
`
const HeroSectionSubHeader = styled.div`
    font-size: 1.2em;
    color: white;
`

export interface AuthenticatedSectionProps {
    render: (isLoading: boolean, isAuthenticated: boolean, userName?: string) => JSX.Element
}

export interface AuthenticatedSectionState {
    isAuthenticated: boolean
    isLoading: boolean
    userName: string
}

const makeAuthenticatedApiCall = (apiPath: string): Promise<Response> => {
    return fetch(`https://api.onivim.io/${apiPath}?${new Date().getTime()}`, { credentials: "include" })
}

export class AuthenticatedSection extends React.PureComponent<AuthenticatedSectionProps, AuthenticatedSectionState> {

    constructor(props: AuthenticatedSectionProps) {
        super(props)

        this.state = {
            isLoading: true,
            isAuthenticated: false,
            userName: null,
        }
    }

    public componentDidMount(): void {

        makeAuthenticatedApiCall("auth/me")
            .then((res) => {
                if (res.status !== 401) {
                    const info = res.json().then((val) => {
                        this.setState({
                            isAuthenticated: !!val.username,
                            isLoading: false,
                            userName: val.username
                        })
                    })
                } else {
                    this.setState({
                        isAuthenticated: false,
                        isLoading: false,
                        userName: null,
                    })
                }

            }, (err) => {
                this.setState({
                    isAuthenticated: false,
                    isLoading: false,
                    userName: null,
                })
            })
    }

    public render(): JSX.Element {
        return this.props.render(this.state.isLoading, this.state.isAuthenticated, this.state.userName)
    }
}

import { LoadingSpinner } from "./../components/LoadingSpinner"



export default class HomePage extends React.PureComponent<IndexPageProps, {}> {

    constructor(props: IndexPageProps) {
        super(props);
    }

    public render(): JSX.Element {
        const bodyStyle = {
            // backgroundColor: "black"
            backgroundImage: "url('" + background + "')",
        };
        const renderFunc = (isLoading: boolean, isAuthenticated: boolean, userName: string): JSX.Element => {
            if (isLoading) {
                return <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <LoadingSpinner prompt={"Loading..."} />
                </div>
            }

            if (!isAuthenticated) {
                return <UnauthenticatedContent />
            } else {
                return <AuthenticatedContent userName={userName} />
            }
        }

        return <div style={bodyStyle}>
            {/* Master head */}
            <NavBar logo={logo} />
            <div style={{ height: "3.5em" }} />
            <ContainerWrapper>
                <AuthenticatedSection render={renderFunc} />
            </ContainerWrapper>
            <HeroFooter />
        </div>;
    }
}

const RotatingImageKeyframes = keyframes`
    0% { transform: rotateY(0deg); }
    75% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
`

const RotatingImageWrapper = styled.div`
    width: 128px;
    height: 128px;

    margin: 128px;
    animation: ${RotatingImageKeyframes} 10s linear infinite;
`

const Text = styled.div`
    font-size: 1;
    color: white;
`

const ButtonWrapper = styled.a`
    background-color: grey;
    border-radius: 4px;
    width: 250px;
    padding: 4px;
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
        color: white;
        transform: translateY(-2px);
    }
`

const ButtonIconWrapper = styled.div`
    margin: 8px;
    flex: 0 0 auto;
`

const ButtonTextWrapper = styled.div`
    flex: 1 1 auto;
    text-align: center;
`

const Button = (props: { url: string, text: string, icon: string, backgroundColor: string, color: string = "white" }): JSX.Element => {
    const color = props.color || "white"
    return <ButtonWrapper href={props.url} style={{ backgroundColor: props.backgroundColor, color: props.color }}>
        <ButtonIconWrapper>
            <i className={props.icon}/>
        </ButtonIconWrapper>
        <ButtonTextWrapper>
            {props.text}
        </ButtonTextWrapper>
    </ButtonWrapper>
}

const FeatureCardWrapper = styled.div`
    border: 1px solid ${Colors.Colors.Accent}
    border-radius: 4px;
    box-shadow:  -9px 0px 20px 0 rgba(0,0,0,0.2), 9px 0px 20px 0 rgba(0, 0, 0, 0.2);

    background-color: ${Colors.Colors.Background};
    color: white;

    width: 100%;
    max-width: 450px;
    margin: 1em 0em;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
`

const FeatureCardIconWrapper = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 2px solid ${Colors.Colors.DarkBackground};

    width: 96px;
    height: 96px;
`

const FeatureCardDescriptionWrapper = styled.div`
    flex: 1 1 auto;
    width: 100%;
    margin: 1em;

    & .header {
        font-weight: bold;
    }

    & .description {
        font-size: 0.9em;
    }
`

const FeatureCard = (props: { header: string, icon: string, text: string}): JSX.Element => {
   return <FeatureCardWrapper>
            <FeatureCardIconWrapper className="is-hidden-mobile">
                <i className={props.icon} />
            </FeatureCardIconWrapper>
            <FeatureCardDescriptionWrapper>
                <div className="header">{props.header}</div>
                <div className="description">{props.text}</div>
            </FeatureCardDescriptionWrapper>
        </FeatureCardWrapper>
}

const DonateHeader = styled.div`
    font-weight: bold;
    font-size: 1em;
    color: white;

    border-bottom: 2px solid ${Colors.Colors.Accent};
    margin: 1em;
    padding: 1em;
    width: 100%;
    text-align: center;
`

const OptionsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const OptionsSplitter = styled.div`
    margin: 8px;
    font-size: 0.8em;
    color: white;
`

export const UnauthenticatedContent = (): JSX.Element => {
    return <div>
        <HeroSectionWrapper>
            <HeroSectionHeader>Become an Insider!</HeroSectionHeader>
            <HeroSectionSubHeader>Support Oni's development with a monthly donation</HeroSectionSubHeader>
            <RotatingImageWrapper>
                <img src={logo} style={{ "width": "100%" }} />
            </RotatingImageWrapper>
        </HeroSectionWrapper>
        <div className="container" style={{marginBottom: "4em"}}>
            <div className="columns is-centered">
                <OptionsColumn className="column is-one-quarter">
                    <DonateHeader>Already an insider?</DonateHeader>
                    <Button url="" text={"Sign in with GitHub"} icon={"fab fa-github"} backgroundColor={"#333"} />
                </OptionsColumn>
                <div className="column is-one-quarter" />
                <OptionsColumn className="column is-one-quarter">
                    <DonateHeader>Become an insider:</DonateHeader>
                    <a href="https://opencollective.com/oni/order/2524" target="_blank">
                        <img src={"https://opencollective.com/oni/donate/button@2x.png?color=white"} width={300} />
                    </a>
                    <OptionsSplitter>
                        or
                    </OptionsSplitter>
                    <Button url="https://salt.bountysource.com/checkout/amount?team=oni" text="Support via BountySource"icon="fas fa-dollar-sign" backgroundColor={"red"} />
                
                </OptionsColumn>
            </div>
        </div>
        <SectionWrapper style={{backgroundColor: Colors.Colors.DarkBackground}}>

            <div style={{margin: "4em"}}>
            <HeroSectionSubHeader style={{textAlign: "center"}}>Get these perks:</HeroSectionSubHeader>
            <div className="container" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <FeatureCard icon={"fas fa-building fa-lg"} header={"Insider Builds"} text={"Always have access to the latest binaries and newest features."} /> 
                <FeatureCard icon={"fas fa-flag fa-lg"} header={"Prioritized Issues"} text={"Issues logged by Insiders are tagged and have priority over other issues."} /> 
                <FeatureCard icon={"fas fa-flask fa-lg"} header={"Support Development"} text={"Developing features and fixing bugs takes time - funding lets us keep building!"} /> 
            </div>
            </div>
        </SectionWrapper>
    </div>

        }
        
import {DownloadSection} from "./../components/DownloadSection"
        
        const TrophyWrapper = styled.div`
    background-color: ${Colors.Colors.Accent};
        color: white;
        width: 100%;
        height: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8em;
    `
    
export const AuthenticatedContent = (props: { userName: string} ): JSX.Element => {
        return <section className="section">
            <HeroSectionWrapper>
                <HeroSectionHeader>Welcome back, {props.userName}!</HeroSectionHeader>
                <HeroSectionSubHeader>We really appreciate your support!</HeroSectionSubHeader>
                <RotatingImageWrapper>
                    <TrophyWrapper>
                        <i className="fas fa-trophy fa-5x" />
                    </TrophyWrapper>
                </RotatingImageWrapper>
                <HeroSectionSubHeader style={{ width: "100%", textAlign: "center" }}>As a thank you, here's the latest master build:</HeroSectionSubHeader>
            </HeroSectionWrapper>
            <DownloadSection buildType={"community"} />
        </section>
}
