import styled from 'styled-components'
import {Earth} from '@styled-icons/ionicons-solid/Earth'
import {Like} from '@styled-icons/boxicons-regular/Like'
import {CommentDots} from '@styled-icons/fa-regular/CommentDots'
import {Share} from '@styled-icons/open-iconic/Share'
import {SendPlane} from '@styled-icons/remix-fill/SendPlane'


export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45%;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    border: 1px solid rgba(249, 253, 255, 0.24);
    max-height: 730px;
    max-width: 550px;
    margin: 2em 0% 0% 2%;

    @media(max-width: 750px) {
        display: flex;
        height: 20%;
    }
    

`

export const PicWithDotArea = styled.div`
    display: flex;
    height: 15%;
    width: 100%;
`
export const ProfileAndNameBox = styled.div`
    display: flex;
    height: 100%;
    width: 50%;

    max-height: 95px;

    @media(max-width: 750px) {
        display: flex;
        width: 80%;
    }
`
export const ThreeDotBox = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    max-height: 95px;

    @media(max-width: 750px) {
        display: flex;
        width: 20%;
    }

`
export const Dots = styled.div`
    display: flex;
    color: lightgray;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 1.5em;
    justify-content: flex-end;
    margin: 3% 5% 0% 0%;
    
    @media(max-width: 750px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
`

export const ProfileImgArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 35%;
`

export const ProfileImage = styled.img`
    display: flex;
    height: 80%;
    width: 80%;
    border-radius: 50%;
    border:2px solid #FFC007;
    max-height: 50px;
    max-width: 50px;

`
export const NameAndTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 65%;
`
export const Name = styled.div`
    display: flex;
    height: 20%;
    width: 100%;
    align-items: center;
    color: white;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.1em;
`

export const Title = styled.div`
    display: flex;
    height: 20%;
    width: 100%;
    align-items: center;
    color: lightgray;
    font-size: 0.7em;
    letter-spacing: 0.1em;
`

export const PostPastTimeWithEarthBox = styled.div`
    display: flex;
    height: 20%;
    width: 100%;
    align-items: center;
    color: lightgray;
    font-size: 0.7em;
    letter-spacing: 0.1em;
`

export const Planet = styled(Earth)`
    display: flex;
    height: 80%;
    width: 15%;
    color: lightgray;

`
export const Hours = styled.div`
    display: flex;
    height: 90%;
    width: 10%;
    align-items: center;
    color: lightgray;
    font-size: 1em;
    letter-spacing: 0.1em;
`

export const TextAndProjectBox =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
    width: 100%;

    @media(max-width: 750px) {
        display: flex;
        justify-content: space-evenly;
        height: 80%;
    }

`

export const TextArea = styled.div`
    display: flex;
    height: 30%;
    width: 100%;
    font-size: 1em;
    letter-spacing: 0.1em;
    line-height: 1.7em;
    color: lightgray;
    justfy-content: center;
    padding: 3%;
    max-height: 190px;

    @media(max-width: 750px) {
        display: flex;
        font-size: 0.8em;
    }
`

export const ProjectImg = styled.img`
    display: flex;
    align-items: center;
    height: 70%;
    width: 100%;
    justfy-content: center;
    cursor: pointer;

    max-height: 370px;

    @media(max-width: 750px) {
        display: flex;
    }
    
 
`


export const LikeAndCommentArea = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
        width: 95%;
        border-bottom: 0.5px solid lightgray;
        max-height: 30px;
        
`

export const AmountOfLikesBox = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        width: 50%;


`

export const AmountOfCommentBox = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 50%;
        color: lightgray;
        font-size: 1em;

        @media(max-width: 750px) {
            display: flex;
            font-size: 0.8em;
        }

`
export const LikeIcons = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        width: 20%;



`
export const LikeAmount = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        width: 50%;
        color: lightgray;
        font-size: 1em;


        @media(max-width: 750px) {
            display: flex;
            font-size: 0.8em;
            margin-left: 5%;
        }

`


export const ILike = styled.img`
        display: flex;
        height: 100%;
        width: 40%;

        @media(max-width: 750px) {
            display: flex;
            width: 60%;
        }
        

`
export const Celebrate = styled.img`
        display: flex;
        position: relative;
        left: -10px;
        height: 100%;
        width: 40%;

        @media(max-width: 750px) {
            display: flex;
            width: 60%;
        }
`

export const Love = styled.img`
        display: flex;
        height: 100%;
        width: 40%;
        position: relative;
        left: -20px;

        @media(max-width: 750px) {
            display: flex;
            width: 60%;
        }

`

export const Action = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 15%;
    width: 95%;
    max-height: 50px;

`
export const LikeBox =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    cursor: pointer;

    :hover {
        background: #474a4d;
        border-radius: 10px;
        height: 80%;

    }

`

export const CommentBox =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    margin-left: 5%;
    cursor: pointer;

    @media(max-width: 750px) {
        :hover {
            background: #474a4d;
            border-radius: 10px;
            height: 80%;
            width: 30%;
        }
    }


`
export const ShareBox =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    margin-left: 5%;
    cursor: pointer;

    :hover {
        background: #474a4d;
        border-radius: 10px;
        height: 80%;
    }


`

export const SendBox =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    margin-left: 5%;
    cursor: pointer;

    :hover {
        background: #474a4d;
        border-radius: 10px;
        height: 80%;
    }
`

export const LikeIcon = styled(Like)`
    display: flex;
    height: 100%;
    width: 20%;
    color: white;

`


export const LikeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    color: white;
    font-size: 1em;
    font-weight: bold;  
    margin-left: 5%;

    @media(max-width: 750px) {
        display: flex;
        font-size: 0.8em;
    }


`

export const CommentText = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 70%;
    color: white;
    font-size: 1em;
    font-weight: bold;  
    margin-left: 5%;

    @media(max-width: 750px) {
        display: flex;
        font-size: 0.8em;
    }


`

export const ShareText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    color: white;
    font-size: 1em;
    font-weight: bold;  
    margin-left: 5%;

    @media(max-width: 750px) {
        display: flex;
        font-size: 0.8em;
    }


`

export const SendText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    color: white;
    font-size: 1em;
    font-weight: bold;  
    margin-left: 5%;

    @media(max-width: 750px) {
        display: flex;
        font-size: 0.8em;
    }


`

export const CommentIcon = styled(CommentDots)`
    display: flex;
    height: 100%;
    width: 20%;
    color: white;

`

export const ShareIcon = styled(Share)`
    display: flex;
    height: 100%;
    width: 20%;
    color: white;

`

export const SendIcon = styled(SendPlane)`
    display: flex;
    height: 100%;
    width: 20%;
    color: white;

`


