import * as React from "react";

import styled, { keyframes, ThemedStyledFunction } from "styled-components";

export type StyledFunction<T> = ThemedStyledFunction<T, any>

export function withProps<T, U extends HTMLElement = HTMLElement>(
    styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
    return styledFunction
}

import * as Waypoint from "react-waypoint"

const Colors = {
    DarkBackground: "#212733",
    DarkForeground: "#ECEFF4",
    Background: "#2F3440",
    Foreground: "#DCDCDC",
    Accent: "#61AFEF",
};

export interface IHeroSectionWrapperProps {
    reverse?: boolean
    active?: boolean
}

const SectionWrapper = withProps<IHeroSectionWrapperProps>(styled.div)`
    padding: 3rem 1.5rem;
    background-color: ${Colors.Background};
    color: ${Colors.Foreground};

    display: flex;
    justify-content: center;
    align-items: center;

overflow: hidden;


    opacity: ${props => props.active ? "1.0": "0.2"};

    ${props => {
        if (props.active) {
            return props.reverse ? "border-right: 4px solid " + Colors.Accent: "border-left: 4px solid " + Colors.Accent
        } else {
            return "border: 0px";
        }
    }};

    transition: all 0.5s ease-in;
`;

const Title = styled.div`
    font-family: Sintony;
    font-size: 21pt;
    font-weight: bold;
    padding: 32px;
`

const Description = styled.div`
    padding: 32px;
`

const Spacer = styled.div`
flex: 1 1 auto;
width: 100%;
`

const SectionContentsWrapper = withProps<IHeroSectionWrapperProps>(styled.div)`
    max-width: 1000px;
    min-height: 80vh;
    overflow: hidden;

    transform: translateX(${props => props.active ? 0 : (props.reverse ? 250 : -250)}px);
    transition: all 0.25s ease-in;

    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
`

const CursorFrames = keyframes`
    0% { opacity: 0; }
    100% { opacity: 0.8; }
`

const CursorWrapper = styled.span`
    animation: ${CursorFrames} 1s linear infinite;
    background-color: ${Colors.Foreground};
    color: ${Colors.Foreground};
    font-weight: bold;
`



export interface IHeroSectionProps {
    reverse?: boolean

    title: string
    description: string | JSX.Element

    image?: JSX.Element
}

export interface IHeroSectionState {
    active: boolean
}

export class HeroSection extends React.PureComponent<IHeroSectionProps, IHeroSectionState> {

    constructor(props: IHeroSectionProps) {
        super(props)

        this.state = {
            active: false,
        }
    }
    public render(): JSX.Element {
      return <SectionWrapper reverse={this.props.reverse} active={this.state.active}>
                <SectionContentsWrapper reverse={this.props.reverse} active={this.state.active} className="columns is-centered is-vcentered">
            <Waypoint
        onEnter={() => this.setState({active: true})} 
        onLeave={() => this.setState({active: false})}
        bottomOffset={"10%"}
        topOffset={"10%"}>
                    <div className="column">
                        <Title>{this.props.title}<CursorWrapper>H</CursorWrapper></Title>
                        <Description>{this.props.description}</Description>
                    </div>
          </Waypoint>
                    <div className="column">
                        { this.props.image ? this.props.image : <div style={{maxWidth:"640px", maxHeight: "640px"}} />}
                    </div>
                </SectionContentsWrapper>
              </SectionWrapper>
    }
}
