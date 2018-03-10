import * as React from "react";

import { Colors } from "./../components/Colors"
import { CursorWrapper } from "./../components/Cursor"
import { withProps } from "./../components/withProps"

import styled, { keyframes, ThemedStyledFunction } from "styled-components";

export interface IHeroSectionWrapperProps {
    reverse?: boolean
    active?: boolean
}

const DeltaMotion = 250

export type ScrollMonitorRenderFunction = (percentVisible: number) => JSX.Element

export interface ScrollMonitorProps {
    margin: number
    renderFunction: ScrollMonitorRenderFunction 
}

export interface ScrollMonitorState {
    percentVisible: number
}

export class ScrollMonitor extends React.PureComponent<ScrollMonitorProps, ScrollMonitorState> {

    private _pendingRaf: number = null
    private _dispose: Function
    private _element: HTMLElement

    constructor(props: ScrollMonitorProps) {
        super(props)

        this.state = {
            percentVisible: 1
        }
    }

    public componentDidMount(): void {

        const onScroll = () => {

            if (this._pendingRaf) {
                return
            }

           this._pendingRaf = window.requestAnimationFrame(() => this._update())
        }

        window.addEventListener("scroll", onScroll)

        this._dispose = () => window.removeEventListener("scroll", onScroll)
    }

    public componentWillUnmount(): void {
       if (this._dispose)  {
            this._dispose()
           this._dispose = null
       }
    }

    private _update(): void {
        if (this._element) {

            const viewportHeight = window.innerHeight - (this.props.margin * 2)

            const elemRect = this._element.getBoundingClientRect()

            const topY = this.props.margin

            if (elemRect.top < this.props.margin && elemRect.height + elemRect.top > viewportHeight) {
                this.setState({percentVisible: 1})
                return
            }

            let val = 0
            if (elemRect.top + elemRect.height > this.props.margin && elemRect.top < viewportHeight) {

                if (elemRect.top < this.props.margin) {
                    val = (elemRect.height + elemRect.top + this.props.margin) / elemRect.height
                } else {
                    val = (viewportHeight - elemRect.top + this.props.margin) / elemRect.height
                }
            }

            this.setState({percentVisible: val})
        }

        this._pendingRaf = null
    }
   
   public render(): JSX.Element {
    return <div ref={(ref) => this._updateRef(ref)}>
            {this.props.renderFunction(Math.min(Math.abs(1), 1))}
       </div>
   } 

    private _updateRef(containerElement: HTMLElement): void {
       this._element = containerElement 
        this._update()
    }
}

const SectionWrapper = withProps<IHeroSectionWrapperProps>(styled.div)`
    padding: 3rem 1.5rem;
    background-color: black;
    color: ${Colors.Foreground};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    overflow: hidden;


    opacity: ${props => props.active ? "1.0": "0.8"};

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
    text-align: ${props => props.reverse ? "right" : "left"};
    width: 100%;
    
    border-bottom: 2px solid ${Colors.Accent};
`

const SectionContentsWrapper = withProps<IHeroSectionWrapperProps>(styled.div)`
    max-width: 1000px;
    min-width: 75%;
    padding-top: 4em;
    padding-bottom: 4em;
    overflow: hidden;

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
            return <ScrollMonitor margin={50} renderFunction={(
               percent: number 
            ) => <SectionWrapper reverse={this.props.reverse} active={this.state.active} style={{opacity: Math.max(0.5, percent * percent)}}>
            <TitleWrapper active={this.state.active} reverse={this.props.reverse} style={{"transform": "translateX(" + ((1-percent) * DeltaMotion) + "px)"}}>
                        <Title>{this.props.title}<CursorWrapper>H</CursorWrapper></Title>
                        <Subtitle>{this.props.subtitle}</Subtitle>
            </TitleWrapper>
                <SectionContentsWrapper reverse={this.props.reverse} active={this.state.active} className="columns is-centered" style={{alignItems: "flex-start", opacity: percent * percent, "transform": "translateY(" + ((1-percent) * DeltaMotion) + "px)"}}>
                    <InnerWrapper className="column">
                        <Description>{this.props.description}</Description>
                    </InnerWrapper>
                    <InnerWrapper className="column">
                        { this.props.image ? this.props.image : <div style={{maxWidth:"640px", maxHeight: "640px"}} />}
                    </InnerWrapper>
                </SectionContentsWrapper>
              </SectionWrapper>
            } />
    }
}
