import styled from 'styled-components'
import {Github} from  '@styled-icons/bootstrap/Github'
import {Linkedin} from  '@styled-icons/bootstrap/Linkedin'




export const AboutWrapper = styled.div`
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    align-self: flex-start; /* <-- this is the fix */
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 25%;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    border: 1px solid rgba(249, 253, 255, 0.24);
    
    max-height: 1000px;
    max-width: 380px;
    
    margin: 2em 0% 0% 2%;

    @media(max-width: 750px) {
        display: none;
    }


`


export const ResumeBox = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    width: 90%;
    margin-top: 5%;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    border: 1px solid rgba(249, 253, 255, 0.24);

    cursor: pointer;

`

export const ResumeArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30%;
    background: #FFC007;
    border-radius: 16px 0px 0px 16px;


`

export const TextForResume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 70%;

`

export const ActualTextResume = styled.div`
    display: flex;
    font-size: 1.1em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;

`


export const FileName = styled.div`
    display: flex;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;

`
export const LastUpdated = styled.div`
    display: flex;
    font-size: 0.8em;
    letter-spacing: 0.1em;
    color: lightgray;
`

export const EmailHeadingArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5%;
    width: 80%;
`

export const Heading = styled.div`
    display: flex;
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: white;
`



export const FormWrapper = styled.form`
    display: flex;
    height: 50%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    
    
    @media(max-width: 500px){
        display: flex;
        height: 90vh;
        width: 90vw;

}
`;


export const Input = styled.input`
    display: flex;
    height: 7%;
    width: 90%;

    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    border: 1px solid rgba(249, 253, 255, 0.24);
    background: none;
   
     @media(max-width: 500px){
        display: flex;
        height: 5%;
        width: 90%;
      
      }

  

`;

export const StyledTextArea = styled.textarea`
    display: flex;
    height: 20%;
    width:  90%;

    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.7px);
    border: 1px solid rgba(249, 253, 255, 0.24);
    background: none;


`

export const SendButton = styled.button`
    dipslay: flex;
    font-size: 1.2em;
    height: 10%;
    width: 40%;
    background-color: #FFC007;
    color: white;
    font-weight: bold;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    border-radius: 16px;

:hover {
    box-shadow: inset 0 100px 0 0 #49AD61;
    -webkit-transition: ease-out 0.8s;
    -moz-transition: ease-out 0.8s;
     transition: ease-out 0.8s;
  }

  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 40%;
    max-height: 4000px;
    margin: 0;
   
}

`

export const SocialArea = styled.div`
    display: flex;
    align-items: center;
    height: 15%;
    width: 90%;
`

export const GitBox =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 50%;
    cursor: pointer;

`

export const LinkedinBox =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 50%;
    cursor: pointer;


`

export const GitHubIcon =  styled(Github)`
    display: flex;
    height: 50%;
    width: 50%;
    color: white;

    :hover {
        transition: transform .7s  ease-in-out;
        transform: rotate(360deg);
        color: #FFC007;
        }

`

export const GitHubText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 80%;
    color: white;
    font-size: 1.3em;
    font-weight: bold;

`
export const LinkedInIcon =  styled(Linkedin)`
    display: flex;
    height: 50%;
    width: 50%;
    color: white;

    :hover {
        transition: transform .7s  ease-in-out;
        transform: rotate(360deg);
        color: #FFC007;
        }

`


export const LinkedinText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 80%;
    color: white;
    font-size: 1.3em;
    font-weight: bold;

`