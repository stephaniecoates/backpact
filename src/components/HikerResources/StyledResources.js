import styled from 'styled-components';

export const Menu = styled.div`
width: 80vw;
height: 15%;
background-color: rgba(255, 255, 255, 0.6);
margin: auto;
margin-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 1000px) {
    width: 90vw;

@media (max-width: 800px) {
    width: 100vw;
    justify-content: space-evenly;

@media (max-width: 600px) {
    width: 100vw;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
`

export const Button = styled.button`
text-align: center;
font-size: .9em;
font-weight: 2em;
text-transform: uppercase;
letter-spacing: 1px;
padding: 25px;
color: black
background-color: rgba(255, 255, 255, 0);
border: none;
border-bottom: 3px solid rgba(255, 255, 255, 0);


a {
    text-decoration: none;
}

&:hover {
    border-bottom: 3px solid black;
}

@media (max-width: 1000px) {
    padding: 12px;
    font-size: 12px;
}
@media (max-width: 800px) {
    padding: 16px 8px;
    font-size: 11px;
}
@media (max-width: 600px) {
    padding: 10px;
    font-size: 10px;
}
@media (max-width: 400px) {
    padding: 9px;
    font-size: 11px;
}

@media (max-width: 320px) {
    padding: 8px;
    font-size: 9px;
}
`

export const ContentBox = styled.div`
width: 80vw;
height: 57vh;
margin: auto;
margin-top: 5px;
overflow: scroll;
background-color: rgba(255, 255, 255, 0.6);
padding: 10px 60px;
box-sizing: border-box;
@media (max-width: 1000px) {
    width: 90vw;
}
@media (max-width: 800px) {
    width: 100vw;
}
@media (max-width: 600px) {
    margin-top: 15px;
    padding: 10px 20px;
}`

export const Heading = styled.h3`
letter-spacing: 1px;
@media (max-width: 600px) {
    font-size: 0.9em;
}
`
export const P = styled.p`
line-height: 1.5em;
text-align: left;
@media (max-width: 600px) {
    font-size: 0.8em;
}
`