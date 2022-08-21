import styled from 'styled-components'


export const SliderArrowWrapper = styled.div`
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 2.5%;
    width: 110%;
    z-index: 1000;   
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    border: 1px solid rgba(249, 253, 255, 0.24); 

`
export const OpenMenu = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: white;
    cursor: pointer;
    font-size: 1em;

    animation: OpenMenu 2s ease 0s infinite normal forwards;

    @keyframes OpenMenu {
        0%,
        100% {
            transform: rotate(0deg);
            transform-origin: 50% 0;
        }
    
        10% {
            transform: rotate(2deg);
        }
    
        20%,
        40%,
        60% {
            transform: rotate(-4deg);
        }
    
        30%,
        50%,
        70% {
            transform: rotate(4deg);
        }
    
        80% {
            transform: rotate(-2deg);
        }
    
        90% {
            transform: rotate(2deg);
        }
    }

`

export const OpenContact = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    aling-items: center;
    justify-content: center;
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: white;
    cursor: pointer;
    font-size: 1em;

    animation: OpenMenu 2s ease 0s infinite normal forwards;

    @keyframes OpenMenu {
        0%,
        100% {
            transform: rotate(0deg);
            transform-origin: 50% 0;
        }
    
        10% {
            transform: rotate(2deg);
        }
    
        20%,
        40%,
        60% {
            transform: rotate(-4deg);
        }
    
        30%,
        50%,
        70% {
            transform: rotate(4deg);
        }
    
        80% {
            transform: rotate(-2deg);
        }
    
        90% {
            transform: rotate(2deg);
        }
    }

`