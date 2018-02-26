import * as React from "react";

import styled, { keyframes, ThemedStyledFunction } from "styled-components";

export type StyledFunction<T> = ThemedStyledFunction<T, any>

export function withProps<T, U extends HTMLElement = HTMLElement>(
    styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
    return styledFunction
}

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

const DeltaMotion = 25

const SectionWrapper = withProps<IHeroSectionWrapperProps>(styled.div)`
    padding: 3rem 1.5rem;
    background-color: ${Colors.Background};
    color: ${Colors.Foreground};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    overflow: hidden;


    opacity: ${props => props.active ? "1.0": "0.8"};

    transition: all 0.5s ease-in;

    & a {
        color: ${Colors.Accent};
        opacity: 0.9;
        transition: all 0.25s ease-in;
    }

    & a:hover {
       color: ${Colors.Accent};
       opacity: 1; 
       transform: translateY(-1px);
       text-decoration: underline;
    }
`;

const Title = styled.div`
    font-family: Sintony;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1em 3rem;
`
const Subtitle = styled.div`
    font-family: Sintony;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.5em 3rem;
`

const Description = styled.div`
    padding-top: 2em 0em;
`

const Spacer = styled.div`
flex: 1 1 auto;
width: 100%;
`

const TitleWrapper = withProps<IHeroSectionWrapperProps>(styled.div)`
    transform: translateX(${props => !props.active ? (props.reverse ? DeltaMotion : -DeltaMotion) : 0}px);
    text-align: ${props => props.reverse ? "right" : "left"};
    transition: all 0.2s ease-in;
    width: 100%;
    
    border-bottom: 2px solid ${Colors.Accent};
`

const SectionContentsWrapper = withProps<IHeroSectionWrapperProps>(styled.div)`
    max-width: 1000px;
    min-width: 75%;
    min-height: 50vh;
    overflow: hidden;

    transform: translateX(${props => props.active ? 0 : (props.reverse ? DeltaMotion : -DeltaMotion)}px);
    transition: all 0.2s ease-in;

    justify-content: center;
    align-items: center;

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

const InnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export interface IHeroSectionProps {
    reverse?: boolean

    title: string
    subtitle?: string
    description: string | JSX.Element | JSX.Element[]

    image?: JSX.Element
}

export interface IHeroSectionState {
    active: boolean
}

export class HeroSection extends React.PureComponent<IHeroSectionProps, IHeroSectionState> {

    constructor(props: IHeroSectionProps) {
        super(props)

        this.state = {
            active: true,
        }
    }
    public render(): JSX.Element {
            return <SectionWrapper reverse={this.props.reverse} active={this.state.active}>
            <TitleWrapper active={this.state.active} reverse={this.props.reverse}>
                        <Title>{this.props.title}<CursorWrapper>H</CursorWrapper></Title>
                        <Subtitle>{this.props.subtitle}</Subtitle>
            </TitleWrapper>
                <SectionContentsWrapper reverse={this.props.reverse} active={this.state.active} className="columns is-centered is-vcentered">
                    <InnerWrapper className="column">
                        <Description>{this.props.description}</Description>
                    </InnerWrapper>
                    <InnerWrapper className="column">
                        { this.props.image ? this.props.image : <div style={{maxWidth:"640px", maxHeight: "640px"}} />}
                    </InnerWrapper>
                </SectionContentsWrapper>
              </SectionWrapper>
    }
}
