import styled from 'styled-components';

export const ShowHideModal = styled.div`
    
    display: ${(props) => props.modalVisible ? "block" : "none" };
    position: fixed;
      z-index: 2000;
      top: 0;
      left: 0;
      width:100%;        
      height: 100%;
      background: rgba(255, 255, 255, 0.6);

  
    `

export const LoginHeader = styled.h1`
margin-top: 30px;
text-transform: lowercase;
letter-spacing: 1px;
`
export const LoginSubhead = styled.p`
padding: 5px;
text-transform: uppercase;
letter-spacing: 2px;
font-size: 0.8em;
color: grey;
margin: 0px 15px;
`

export const Button = styled.button`
padding: 8px 20px;
font-size: 16px;
border: none;
box-shadow: -1px 1px 2px black;  
 margin: 10px 6px;
 box-sizing: border-box;
 text-transform: uppercase;
 font-family: 'Roboto';
 color: white;
 text-align: center;
background-color: black;
border-radius: 4px;

}
`
export const ButtonContainer = styled.div`
display: flex;
flex-direction: row
justify-content: center;
margin: 1.2em 0em;

`

export const ErrMsg = styled.p`
color: red;
font-size: 0.5em;
margin: 0px;
`

export const MainModal = styled.div`
    position:fixed;
    z-index: 2001;
    background: white;        
    z-index: 2001;
    width: 30%
    min-width: 300px;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    `

export const Xbutton = styled.button`
    position: fixed;
    top: 5px;
    right: 2px;
    border: none;
    `