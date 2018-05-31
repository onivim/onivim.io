import * as React from "react";

import styled, { keyframes, ThemedStyledFunction } from "styled-components";

import { Colors } from "./../components/Colors";
import { withProps } from "./../components/withProps";

const FooterLink = styled.a`
    font-size: 0.8em;

    .oni-footer.is-dark &:hover {
        color: ${Colors.Accent} !important;
    }
`;

const FooterList = styled.ul`
    margin: 0px;
    padding: 0px;

    & li {
        margin: 0px;
    }
`;

const CopyrightText = styled.div`
    font-size: 0.8em;
`;

const SocialLinksContainer = styled.div`
    margin-top: 1em;
`;

const SectionContainer = withProps<{isActive: boolean}>(styled.section)`
    transition: all 0.25s ease-in;

    transform: translateY(${(props) => props.isActive ? 0 : 25}px);

    opacity: ${(props) => props.isActive ? "1.0" : "0.2"};
    border-bottom: 4px solid ${Colors.Accent};
`;

export interface IHeroFooterState {
  isActive: boolean;
}

export class HeroFooter extends React.PureComponent<{}, IHeroFooterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isActive: true,
    };
  }

  public render(): JSX.Element {
    return (
      <SectionContainer isActive={this.state.isActive} className="section hero oni-footer is-dark">
             <div className="container">
                 <div className="columns">
                     <div className="column">
                         <div className="content">
                             <p><strong>Oni brought to you by:</strong></p>
                             <FooterList>
                                 <li><FooterLink href="https://github.com/onivim/oni/blob/master/BACKERS.md">Sponsors & Backers</FooterLink></li>
                                 <li><FooterLink href="https://github.com/onivim/oni/graphs/contributors">Contributors</FooterLink></li>
                                 <li><FooterLink href="https://neovim.io">Neovim</FooterLink></li>
                             </FooterList>
                         </div>
                         <CopyrightText>Copyright 2018 Bryan Phelps</CopyrightText>
                     </div>
                     <div className="column">
                         <div className="content">
                             <p><strong>Website built with:</strong></p>
                             <FooterList>
                                 <li><FooterLink href="https://bulma.io">Bulma</FooterLink></li>
                                 <li><FooterLink href="https://www.gatsbyjs.org">Gatsby</FooterLink></li>
                                 <li><FooterLink href="http://fontawesome.io">Font Awesome</FooterLink></li>
                                 <li><FooterLink href="https://www.toptal.com/designers/subtlepatterns">Subtle Patterns</FooterLink></li>
                             </FooterList>
                         </div>
                     </div>
                     <div className="column">
                         <p><strong>Keep in touch:</strong></p>
                         <div className="content">
                         <SocialLinksContainer>
                         <p><a href="https://twitter.com/oni_vim?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" langdata-show-count="false">Follow @oni_vim</a></p>
                         <p><iframe src="https://ghbtns.com/github-btn.html?user=onivim&repo=oni&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe></p>
                         </SocialLinksContainer>
                         </div>
                     </div>
                 </div>
             </div>
         </SectionContainer>
    );
  }
}
