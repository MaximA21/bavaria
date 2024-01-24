import styled, {keyframes} from "styled-components";

// eslint-disable-next-line react/prop-types,no-unused-vars
export const Spotlight = ({scale, rotate, duration}) => {
    return (
        <Light scale={scale} rotate={rotate} duration={duration}></Light>
    )
}

const Light = styled.div`
            position: absolute;
             z-index:-10;
            top: 0px;
            left: 50%;
            width: 200px;
            height: 500px;
            background-image: conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, .3) 49%, rgba(124, 145, 182, .5) 50%, rgba(124, 145, 182, .3) 51%, transparent 55%);
            opacity: .5;
            border-radius: 9999px;
            filter: blur(15px);
            pointer-events: none;
            transform-origin: 50% 0;
            animation: spotlight_opacity calc(${p => p.duration} * 1.2) linear infinite  0s alternate, ${p =>spotlight_scale(p.rotate, p.scale)} calc(${p => p.duration} * 1.7) infinite 0s both;
      
          @keyframes spotlight_opacity {
              0% {
                  opacity: .6
              }
      
              50% {
                  opacity: .5
              }
      
              95% {
                  opacity: .6
              }
          }
        
    `

const spotlight_scale = (rotate, scale) => keyframes`
    0% {
        transform: translateX(-50%) rotate(${rotate}) scale(${ scale})
    }

    50% {
        transform: translateX(-50%) rotate(calc(${rotate} * 1.2)) scale(calc(${scale} * 1.1))
    }

    to {
        transform: translateX(-50%) rotate(${rotate}) scale(${scale})
    }
`;