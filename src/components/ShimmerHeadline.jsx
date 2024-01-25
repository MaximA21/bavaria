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


    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Primary, sans-serif;
    text-align: center;
    text-align: center;

    // background: -webkit-gradient(linear, left top, right top, from(#ffffff), to(#605252), color-stop(0.5, #d2c3c3));
    //  background: -moz-gradient(linear, left top, right top, from(#c50909), to(#222), color-stop(0.5, #1c0909));
    //   background: gradient(linear, left top, right top, from(#d30000), to(#222), color-stop(0.5, #1e1d1d));
    background: linear-gradient(90deg, #838383, #ccc, #ffffff, #ccc, #838383);
    background-size: 60% 100%;
    background-clip: text;
    animation: ${Shimmer} 7s ease-in infinite;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: #838383;

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 110%; /* Breite des Bildes anpassen */
        height: 100%; /* Höhe des Bildes anpassen */
        transform: scale(0.1);
        transform-origin: top right;
        rotate: 45deg;
        background: url('public/Screenshot_2024-01-24_at_03.51.50-removebg-preview.png') center center no-repeat; /* Pfad zum Bild hier einfügen */
        background-size: cover; /* Bildgröße anpassen */
    }

`