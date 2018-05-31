/**
 * DownloadSection.tsx
 *
 * Component for showing a download section for Oni.
 * Dynamically fetches the download information from our API endpoint."
 */

import * as React from "react";

import { Colors } from "./Colors";

import styled, {keyframes} from "styled-components";

const SpinnerKeyframes = keyframes`
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
`;

const LoadingSpinnerWrapper = styled.div`
    animation: ${SpinnerKeyframes} 1s linear infinite;
    border-top: 48px solid white;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 30px solid transparent;
    opacity: 0.8;
`;

const LoadingSpinnerContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
`;

export const LoadingSpinner = (props: {prompt: string}): JSX.Element => {
    return (
      <LoadingSpinnerContainerWrapper>
        <LoadingSpinnerWrapper />
        <div>{props.prompt}</div>
      </LoadingSpinnerContainerWrapper>
    );
};
