import styled from "styled-components"

export const ContentBox = styled.div`
height: 50%;
width: 50%;
background-color: rgba(255, 255, 255, 0.4);
box-shadow: -3px 3px black;  
display: flex;
flex-direction: column;
justify-content: center;


@media (max-width: 665px) {
    width: 70%;
}

@media (max-width: 420px) {
    width: 100%;
    height: 40%;
}
`
export const MainHeading = styled.h1`
text-transform: uppercase;
font-size: 1.5em;
letter-spacing: 0.5px;
text-align: left;
margin: 15px 15px 5px 15px;

@media (max-width: 900px) {
    font-size: 1.2em
}
@media (max-width: 675px) {
    font-size: 1em
}
`
export const SubHead = styled.h4`
text-transform: uppercase;
font-size: 1em;
text-align: left;
margin: 10px 15px;

@media (max-width: 900px) {
    font-size: 0.8em
}
`

export const Details = styled.p`
font-size: 0.8em;
text-align: left;
margin: 5px 15px 10px 15px;

@media (max-width: 1000px) {
    font-size: .7em
}

@media (max-width: 370px) {
    font-size: .5em
}

`

export const Button = styled.button`

a {
     text-decoration: none;
    color: black;

}
a:visited {
    color: black;
}
 padding: 10px 15px;
 font-size: 14px;
 border: 1px solid rgb(89, 89, 89);
box-shadow: -1px 1px 2px black;  
 margin: 10px;
 box-sizing: border-box;
 text-transform: uppercase;
 font-family: 'Roboto';
 color: black;
 text-align: center;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 4px;

    @media (max-width: 1000px) {
        font-size: 8px;
        padding: 10px 10px;
    }
    @media (max-width: 460px) {
        font-size: 6px;
        padding: 10px 10px;
    }
`