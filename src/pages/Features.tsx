import * as React from "react";

import styled, { keyframes }  from "styled-components";

// import { menuItems } from "../layouts";
import { HeroSection } from "./../components/HeroSection";
import { HeroFooter } from "./../components/HeroFooter";
import { NavBar } from "./../components/NavBar";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const animateScrollTo = require("animated-scroll-to");

const logo = require("./logo-256x256.png");
const header = require("./oni-headline-small.png");
const background = require("./diagmonds.png");
// const heroVideoWebm = require("./hero-video.webm");
// const heroVideoMp4 = require("./hero-video.mp4");
// const heroImage = require("./hero-screenshot.png");

const SponsorsContents = () => {
  return (
    <div className="content has-text-centered">
      <p><Sponsor tier={"gold-sponsor"} index={0} /></p>
      <p><Sponsor tier={"gold-sponsor"} index={1} /></p>
    </div>
  );
};

const DownloadNow = () => {
  return (
    <ButtonContainer>
      <a className="button is-primary is-large" href="https://github.com/onivim/oni/releases/latest">
        Download Now
      </a>
    </ButtonContainer>
  );
};

const createDivItem = (className: string) => {
  return class SingleClassItem extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
      return (
        <div className={className}>
          {this.props.children}
        </div>
      );
    }
  };
};

export const Sponsor = (props: {tier: string, index: number}): JSX.Element => {
  return (
    <a href={`https://opencollective.com/oni/tiers/${props.tier}/${props.index}/website`}>
      <img src={`https://opencollective.com/oni/tiers/${props.tier}/${props.index}/avatar.png`} />
    </a>
  );
};

const MiniHeader = styled.div`
    font-weight: bold;
    font-size: 0.9em;
    text-align: center;
    padding: 2em;
`;

const ButtonContainer = styled.div`
    padding: 2em;
`;

const HighlightContainer = styled.div`
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.1);
`;

const HeroSectionImage = styled.img`
    padding: 2em;
`;

const Centered = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

const ContentsWrapper = styled.div`
    text-align: left;
`;

const Sections = {
  ModernUX: {
    title: "Modern UX",
    subtitle: "Modal Editing + Modern Editing",
    description: [
      (
        <div style={{textAlign: "center", margin: "2em"}}>
          <MiniHeader>
            Coming from Atom/VSCode?
          </MiniHeader>
          <ContentsWrapper>
            Unlike most Electron-based editors, Oni features a <b>high-performance canvas renderer</b>, 
            along with <a href="https://neovim.io/">neovim</a> at the core - providing a complete 
            vim experience without emulation.
          </ContentsWrapper>

          <MiniHeader>
            Coming from vim/neovim?
          </MiniHeader>
          <ContentsWrapper>
            Keep your workflow while enjoying the perks of new code editors, like out-of-box completion 
            & fuzzy find - in a modern, beautiful package.
          </ContentsWrapper>

          <MiniHeader>
            New to modal editing?
          </MiniHeader>
          <ContentsWrapper>
            Oni makes it easy to learn and get started!
          </ContentsWrapper>
        </div>
      ),
    ],
    contents: (
      <img src="https://user-images.githubusercontent.com/13532591/36127305-9c7b6b80-1011-11e8-85dd-0345788c0b56.png" />
    ),
  },
  BatteriesIncluded: {
    title: "Batteries Included",
    subtitle: "...but still hackable to the core.",
    description: [
      <Centered>
        <MiniHeader>
          Comes out of the box with:
        </MiniHeader>
        <div className="content">
          <ul>
            <li>Code completion</li>
            <li>Hover info</li>
            <li>Font ligature support</li>
            <li>Fuzzy file finder</li>
            <li>Language server support</li>
            <li>Snippets</li>
          </ul>
        </div>
      </Centered>,
    ],
    content: [
      <Centered>
        <MiniHeader>Customizable your way:</MiniHeader>
        <div className="content">
          <ul>
            <li>Prefer front-end languages? Use our <a href="https://onivim.github.io/oni-api/">javascript API</a></li>
            <li>
            Coming from Vim? No problem - bring your 
            <a href="https://github.com/onivim/oni/wiki/Configuration#initvim">`init.vim`!</a>
            </li>
            <li>
              Compatible with most 
              <a href="https://github.com/onivim/oni/wiki/Configuration#initvim">Vim plugins</a>
            </li>
            <li>...and most <a href="http://langserver.org/">language servers</a></li>
          </ul>
        </div>
      </Centered>,
    ],
  },
  Productivity: {
    title: "Maximize Productivity",
    subtitle: "Live Preview (Coming Soon)",
    description: [
      <HighlightContainer>
      <p className="content">
      Oni is about more than just modal editing - its about improving your workflow from start to finish. 
      </p>
      <p className="content">
      View changes live as you code, minimizing the time spent on the 'inner loop' of code/build/test, 
      and maximizing your productivity.
      </p>
      </HighlightContainer>,
    ],
    content: [
      (
      <HeroSectionImage src="https://user-images.githubusercontent.com/13532591/35305852-e7bf8f6c-004f-11e8-9614-cfe5ced35515.gif" />
      ),
    ],
  },
  GetStarted: {
    title: "Get started!",
    subtitle: "Download + Contribute",
    contents: [
      <HighlightContainer>
        <Centered>
          <ButtonContainer><a className="button is-primary is-large" href="https://github.com/onivim/oni/releases/latest">Download Now</a></ButtonContainer>
          <ButtonContainer><a className="button is-warning is-large" href="https://onivim.github.io/oni-docs/#/">Documentation</a></ButtonContainer>
        </Centered>
      </HighlightContainer>,
    ],
    description: [
      <Centered>
        <MiniHeader>
          Contribute
        </MiniHeader>
        <div className="content">
          <ul>
            <li>
              Become a backer via <a href="https://opencollective.com/oni">OpenCollective</a>
            </li>
            <li>
              Become a backer via <a href="https://www.bountysource.com/teams/oni">BountySource</a>
            </li>
            <li>
              <a href="https://github.com/onivim/oni/issues/new">Report a bug</a> 
              or <a href="https://github.com/onivim/oni/issues/new">suggest a feature</a>
            </li>
            <li>
              Fix an <a href="https://github.com/onivim/oni/issues">issue</a> and 
              submit a <a href="https://github.com/onivim/oni/compare">Pull Request</a>
            </li>
            <li>
              Chat with us on <a href="https://discord.gg/7maEAxV">Discord</a>
            </li>
          </ul>
        </div>
      </Centered>,
    ],
  },
  BroughtToYouBy: {
    title: "Brought to you by...",
    subtitle: "...our backers, sponsors, and contributors!",
    description: [
      <div>
        <MiniHeader>Contributors</MiniHeader>
        <a href="https://github.com/onivim/oni/graphs/contributors">
          <img src="https://opencollective.com/oni/contributors.svg?width=890" />
        </a> 
      </div>,
    ],
    contents: [
      <div>
        <MiniHeader>Sponsors</MiniHeader>
        <SponsorsContents />
      </div>,
    ],
  },
};

const HeroSectionWrapper = styled.section`
    text-align: center;
    height: 100vh;

    position: relative;
`;

const HeroInnerSectionWrapper = styled.div`
    position: absolute;
    bottom: 0px;
    height: 12em;
    left: 0px;
    right: 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: white !important;
    }
`;

const HeroVideoSectionWrapper = styled.div`
    position: absolute;
    top: 6em;
    bottom: 12em;
    left: 0px;
    right: 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default class HomePage extends React.PureComponent<IndexPageProps, {}> {
  constructor(props: IndexPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const bodyStyle = {
      backgroundImage: "url('" + background + "')",
    };

    return <div style={bodyStyle}>
      {/* Master head */}

      <NavBar logo={logo}/>
      <HeroSection title={Sections.ModernUX.title} subtitle={Sections.ModernUX.subtitle} description={Sections.ModernUX.description} image={Sections.ModernUX.contents} reverse={true} />
      <HeroSection title={Sections.BatteriesIncluded.title} subtitle={"Less time configuring, more time creating"} description={Sections.BatteriesIncluded.description} image={Sections.BatteriesIncluded.content} reverse={false} />
      <HeroSection title={Sections.Productivity.title} subtitle={Sections.Productivity.subtitle} description={Sections.Productivity.description} image={Sections.Productivity.content} reverse={true}/>
      <HeroSection title={Sections.BroughtToYouBy.title} subtitle={Sections.BroughtToYouBy.subtitle} description={Sections.BroughtToYouBy.description} image={Sections.BroughtToYouBy.contents} reverse={false}/>
      <HeroSection title={Sections.GetStarted.title} subtitle={Sections.GetStarted.subtitle} description={Sections.GetStarted.description} image={Sections.GetStarted.contents} reverse={true}/>
      <HeroFooter />
      </div>;
  }
}

// <HeroSection title={"Free and open-source"} subtitle={"...brought to you by our sponsors!"} description={"Thanks to our sponsors and backers for your support!"} image={<SponsorsContents />}/>
