import * as React from "react";

import styled, { ThemedStyledFunction } from "styled-components";

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
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

    opacity: ${props => props.active ? "1.0": "0.2"};
    transform: translateX(${props => props.active ? 0 : 100}px);

    transition: all 0.5s ease-in;
`;

const SectionBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
`

const Title = styled.div`
    font-family: Sintony;
    font-size: 21pt;
    font-weight: bold;
    padding: 32px;
`

const Description = styled.div`
    padding: 32px;
`

const SectionImageWrapper = styled.div`
flex: 1 1 auto;
width: 100%;
`

const Spacer = styled.div`
flex: 1 1 auto;
width: 100%;
`

export interface IHeroSectionProps {
    reverse?: boolean

    title: string
    description: string
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
      return <Waypoint onEnter={() => this.setState({active: true})} onLeave={() => this.setState({active: false})}>
              <SectionWrapper reverse={this.props.reverse} active={this.state.active}>
                <SectionBodyWrapper>
                    <Title>{this.props.title}</Title>
                    <Description>{this.props.description}</Description>
                </SectionBodyWrapper>
                <Spacer />
                <SectionImageWrapper>
                </SectionImageWrapper>
              </SectionWrapper>
          </Waypoint>
    }
}
