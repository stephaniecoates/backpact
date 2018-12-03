import styled from 'styled-components';

export const SetAlertPage = styled.div`
overflow: hidden;
`

export const PleaseLogIn = styled.div`
padding: 20px;
width: 40vw;
margin: 100px auto;
border: 1px solid black;
box-shadow: -2px 2px 1px black;
background-color: rgba(255, 255, 255, 0.5);
`
export const ActiveAlertDisplay = styled.div`
height: 70vh;
width: 70vw;
margin: auto;
box-shadow: -2px 2px 1px;
background-color: rgba(255, 255, 255, 0.6);
@media (max-width: 600px) {
    margin-top: 30px;
    width: 90%;
    height: 80vh;
}
`

export const ActiveAlertHeader = styled.h3`
padding: 20px;
margin: 0px auto;
letter-spacing: 1.5px;
@media (max-width: 600px) {
    padding-bottom: 10px;

}
@media (max-width: 325px) {
    font-size: 1em;
}
@media (max-width: 320px) {
    font-size: 0.9em;
    padding-bottom: 5px;
}
`

export const ActiveAlertFooter = styled.h3`
font-size: 1em;
letter-spacing: 1px;
margin-top: 0px;
@media (max-width: 600px) {
    margin: 20px 10px 10px 10px;
    font-size: 0.8em;
    letter-spacing: auto;
}
`

export const ActiveAlertInfo = styled.div`
height: 60%;
text-align: left;
width: 95%;
border-top: solid 3px grey;
border-left: solid 3px grey;
margin: auto;
display: flex;
justify-content: space-evenly;
@media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 65%;
    overflow: scroll;
    padding: 5px;
    width: 80%;
    border: none;
}
`

export const ScrollingColumn = styled.div`
overflow: scroll;
height: 80%;
margin-left: 5px;
padding-left: 10px;
border-top: 2px grey solid;
border-left: 2px solid grey;
@media (max-width: 600px) {
   height: auto;
  padding-left: 10px;
  margin-left: 0px;    
}
`

export const AlertLine = styled.p`
font-size: 12px;`

export const ColumnContainer = styled.div`
width: 30%;
@media (max-width: 600px) {
    width: 100%;
}
`

export const Button = styled.button`
padding: 8px 4px;
min-width: 100px;
font-size: 12px;
border: none;
box-shadow: -1px 1px 2px black;  
 margin: 8px;
 box-sizing: border-box;
 text-transform: uppercase;
 font-family: 'Roboto';
 color: white;
 text-align: center;
background-color: black;
border-radius: 4px;
}
@media (max-width: 600px) {
font-size: 8px;
padding: 4px 0px;
margin: 3px;
}
`

export const SetAlertForm = styled.div`
width: 80vw;
height: 75vh;
margin: auto;
margin-top: 15px;
padding: 20px 50px;
overflow: scroll;
box-sizing: border-box;
border: 1px solid grey;
box-shadow: -2px 2px 2px black;
background-color: rgba(255,255,255,0.7);
@media (max-width: 600px) {
    width: 90vw;
    height: 85vh;
}
`
export const FormHeading = styled.h3`
text-align: left;
margin-bottom: 0px;
`

export const HalfWidthInputContainer = styled.div`
display: flex
justifyContent: space-between;

@media (max-width: 500px) {
    display: block;  
}
`

export const SubmitButton = styled.button`

a {
     text-decoration: none;
  color: black;
}
a:visited {
    color: black;
}

&:hover {
    box-shadow: -3px 3px 1px white;
}

 padding: 10px 15px;
 font-size: 12px;
 width: 11em;
box-shadow: -1px 1px 2px black;  
 margin: 20px;
 box-sizing: border-box;
border: none;
 text-transform: uppercase;
 font-family: 'Roboto';
 color: white;
 text-align: center;
    background-color: black;
    border-radius: 4px;
    `

    export const TopInfo = styled.p`
    text-align: left;
    font-size: .9em;
    `

    export const MainHeading = styled.h2`
    text-transform: uppercase;
    letter-spacing: 1px;
    `