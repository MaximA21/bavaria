import styled, {keyframes} from "styled-components";

// eslint-disable-next-line react/prop-types
export const ShimmerHeadline = ({children}) => {
    return (
        <ShimmerH2>{children}</ShimmerH2>
    )
}

const Shimmer = keyframes`
    0% {
        background-position: 0% 50%;
    }
    10% {
        background-position: 100% 50%;
    }  20% {
        background-position: -120%;

    }`;

const ShimmerH2 = styled.h2`

    font-size: 5rem;


    
    font-family: Primary, sans-serif;
    text-align: center;
    text-align: center;

    // background: -webkit-gradient(linear, left top, right top, from(#ffffff), to(#605252), color-stop(0.5, #d2c3c3));
    //  background: -moz-gradient(linear, left top, right top, from(#c50909), to(#222), color-stop(0.5, #1c0909));
    //   background: gradient(linear, left top, right top, from(#d30000), to(#222), color-stop(0.5, #1e1d1d));
    background: linear-gradient(90deg, #838383, #ccc, #ffffff, #ccc, #838383);
    background-size: 60% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${Shimmer} 7s ease-in infinite;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: #838383;
`