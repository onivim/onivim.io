import * as React from "react";

import styled, { ThemedStyledFunction } from "styled-components";

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
export interface IHeroSectionProps {
    reverse?: boolean

    title: string
    description: string
}

const SectionWrapper = withProps<IHeroSectionProps>(styled.div)`
    padding: 3rem 1.5rem;
    background-color: ${Colors.Background};
    color: ${Colors.Foreground};

    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
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

export const HeroSection = (props: IHeroSectionProps) => {
  return (
      <SectionWrapper {...props}>
        <SectionBodyWrapper>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </SectionBodyWrapper>
        <Spacer />
        <SectionImageWrapper>
        </SectionImageWrapper>
      </SectionWrapper>
  );
};
