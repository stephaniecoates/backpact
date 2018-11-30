import styled from "styled-components"

export const ContentBox = styled.div`
width: 50%;
max-width: 500px;
padding: 20px;
background-color: rgba(255, 255, 255, 0.5);
box-shadow: -3px 3px black;  


@media (max-width: 600px) {
    width: 65%;
}

@media (max-width: 420px) {
    width: 100%;
    height: 50%;
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

export const Details = styled.p`
font-size: .95em;
text-align: left;
line-height: 1.3em;
margin: 12px 15px 10px 15px;

@media (max-width: 1000px) {
    font-size: .8em
}

@media (max-width: 370px) {
    font-size: .7em
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
 font-size: 12px;
 width: 11em;
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