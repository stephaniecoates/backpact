import styled from 'styled-components';

export const ActiveAlertBar = styled.div`
width: 100%;
height: 9%;
position: fixed;
bottom: 0px;
background-color: rgba(44, 56, 37, 0.7);
border-radius: 30px 30px 0px 0px;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 0px;
`

export const ActiveAlertText = styled.p`
font-size: .8em;
margin: 20px;

@media (max-width: 600px) {
font-size: .6em;
}
`

export const ButtonContainer = styled.div`
display: flex;
margin-right: 20px;

@media (max-width: 600px) {
  flex-direction: column;
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