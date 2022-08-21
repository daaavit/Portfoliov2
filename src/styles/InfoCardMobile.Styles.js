import styled from "styled-components";
import {Circle} from '@styled-icons/fluentui-system-filled/Circle'

export const InfoWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 25%;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15.7px);
    -webkit-backdrop-filter: blur(15.7px);
    border: 1px solid rgba(249, 253, 255, 0.24);

    max-height: 1000px;
    max-width: 380px;
    margin: 2em 0% 0% 2%;
    

    @media(max-width: 750px) {
        display: flex;
        align-self: none;
        width: 100%;
        z-index:8000;
        max-width: 300px;

        animation: InfoWrapper 2s ease 0s 1 normal forwards;

        @keyframes InfoWrapper {
                0% {
                        opacity: 0;
                        transform: rotateY(-70deg);
                        transform-origin: left;
                }
        
                100% {
                        opacity: 1;
                        transform: rotateY(0);
                        transform-origin: left;
                }
        }
    }


`

export const ProfileImgArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15%;
    width: 100%;
    margin-top: 5%;

`

export const ProfileImage = styled.img`
    display: flex;
    height: 90%;
    width: 40%;
    border-radius: 50%;
    border:2px solid #FFC007;
    max-height: 70px;
    max-width: 70px;

`

export const OnlineDot = styled.div`
    height: 15px;
    width: 15px;
    background: green;
    border-radius: 50%;
    position: relative;
    right: -20px;
    top: -15px;
    

    animation: OnlineDot 1s linear infinite;
    @keyframes OnlineDot {
        50% {
          opacity: 0.5;
        };
        
`

export const NameTitleArea = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column; 
        height: 10%;
        width: 90%;
        border-bottom: 0.5px solid lightgray;


`

export const Name = styled.div`
        display: flex;
        height: 50%;
        width: 100%;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.3em;
        font-weight: bold;
        letter-spacing: 0.1em;

`

export const Title = styled.div`
        display: flex;
        height: 50%;
        width: 100%;
        justify-content: center;
        align-items: center;
        color: gray;
        font-size: 1em;
        letter-spacing: 0.1em;

`


export const LocationAndJobArea = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column; 
        height: 10%;
        width: 100%;
`

export const LocationBox = styled.div`
        display: flex;
        align-items: center;
        height: 50%;
        width: 100%;
`

export const Location = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        width: 50%;
        color: white;
        font-size: 0.9em;
        margin-left: 2%;
`

export const ActualLocation = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 50%;
        color: #8F8484;
        font-size: 0.9em;
        margin-right: 2%;
`


export const LangaugeArea = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 12%;
        width: 100%;


`

export const BoxForlanguage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 30%;



`


export const OvalEngilsh = styled(Circle)`
        display: flex;
        align-items: center;
        height: 80%;
        width: 80%;
        color: transparent;
        stroke: #FFC007;
        stroke-width: 0.10em;
        stroke-dasharray: 95.273, 292.273;
        stroke-dashoffset: 39.2273;
    


`
export const OvalGeorgian = styled(Circle)`
        display: flex;
        align-items: center;
        height: 80%;
        width: 80%;
        color: transparent;
        stroke: #FFC007;
        stroke-width: 0.10em;
      
    


`

export const OvalRussian = styled(Circle)`
        display: flex;
        align-items: center;
        height: 80%;
        width: 80%;
        color: transparent;
        stroke: #FFC007;
        stroke-width: 0.10em;
        stroke-dasharray: 86.273, 292.273;
        stroke-dashoffset: 39.2273;
    


`

export const TextForSvg = styled.div`
        display: flex;
        position: relative;
        left: -50px;
        font-size: 1em;
        background: red;
        color: black;

`

export const Language = styled.div`
        display: flex;
        font-size: 1em;
        color: white;

`

