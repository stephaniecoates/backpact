import styled from 'styled-components';

export const ActiveAlertBar = styled.div`
width: 100%;
height: 15%;
position: fixed;
bottom: 0px;
background-color: rgba(52, 61, 45, 0.8);
border-radius: 30px 30px 0px 0px;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 0px;
`

export const ActiveAlertText = styled.p`
font-size: 14px;
margin: 20px;

@media (max-width: 500px) {
font-size: 10px;
}
`

export const ButtonContainer = styled.div`
display: flex;
margin-right: 20px;

@media (max-width: 500px) {
  flex-direction: column;
}
`

export const Button = styled.button`

padding: 10px 15px;
font-size: 10px;
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
@media (max-width: 500px) {
font-size: 6px;
padding: 5px 10px;
margin: 3px;
}

`