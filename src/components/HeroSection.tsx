import * as React from "react";

import styled from "styled-components"


const Colors = {
    DarkBackground: "#212733",
    DarkForeground: "#ECEFF4",
    Background: "#2F3440",
    Foreground: "#DCDCDC",
    Accent: "#61AFEF",
}

const SectionWrapper = styled.div`
    padding: 3rem 1.5rem;
    background-color: ${Colors.Background};
    color: ${Colors.Foreground};
`

export default () => {
  return (
      <SectionWrapper>test</SectionWrapper>
  );
};
