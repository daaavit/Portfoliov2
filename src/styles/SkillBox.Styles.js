import styled from "styled-components";

export const SkillsWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
        width: 100%;
`

export const HtmlBox = styled.div`
        display: flex;
        flex-direction: column;
        height: 10%;
        width: 95%;
        
`

export const TitleAndProcBox = styled.div`
        display: flex;
        height: 50%;
        width: 100%;
`

export const Html = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 50%;
        color: white;
        font-size: 0.8em;
`

export const Procentage = styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        width: 50%;
        color: white;
        font-size: 0.8em;
`

export const ProcBox = styled.div`
        display: flex;
        align-items: center;
        height: 25%;
        width: 100%;
`


export const BgForProc = styled.div`
        display: flex;
        height: 50%;
        width: 100%;
        background: #494457;
`
export const HtmlSkillLine = styled.div`
        display: flex;
        height: 100%;
        width: ${(props) => props.width};
        background: #FFC107;
        
`



