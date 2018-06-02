import * as React from "react";

import { Colors } from "./../components/Colors";
import { withProps } from "./../components/withProps";

import styled, { keyframes, ThemedStyledFunction } from "styled-components";

const CursorFrames = keyframes`
    0% { opacity: 0; }
    100% { opacity: 0.8; }
`;

export const CursorWrapper = styled.span`
    animation: ${CursorFrames} 1s linear infinite;
    background-color: ${Colors.Foreground};
    color: ${Colors.Foreground};
    font-weight: bold;
`;
