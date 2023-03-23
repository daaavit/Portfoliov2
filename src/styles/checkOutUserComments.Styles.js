import styled from 'styled-components';
import {User} from "@styled-icons/boxicons-regular/User"

export const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background transparent;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
    
`

export const UserCommentTImeBox = styled.div`
    display: flex;
    align-items: center;
    height: 95%;
    width: 90%;

`


export const CommentData = styled.div`
    display: flex;
    width: 80%;
    height: 90%;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 0.8em;

    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;

`

export const UserIconAndUserNameBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 20%;
`
export const UserIcon = styled(User)`
    display: flex;
    color: white;
    height: 50%;
    width: 100%;

`

export const UserName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 50%;
    width: 100%;
    font-size: 1em;
    
    @media (max-width: 750px) {
        display: flex;
        font-size: 0.7em;
    }

`


