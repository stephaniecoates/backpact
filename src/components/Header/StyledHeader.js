import styled from "styled-components"

export const InvisibleHeader = styled.div`
height: 18%

@media (max-width: 600px) {
  height: 10%;
}
`

    export const Title = styled.h1`
    position: absolute; 
    top: 20px;
    letter-spacing: 2px;
    left: 120px;
    color: white;
    font-size: 32px

    @media (max-width: 600px) {
      left: 65px;
      top: 1px;
      font-size: 24px;
    }
    `

    export const Button = styled.button`
    position: absolute;
    top: 41px;
    right: 15px;
    min-width: 30px;
    min-height: 25px;
    background: black;
    border-radius: 3px;
    text-transform: uppercase;
    border: 2px solid black;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    color: white;
    margin: 0.5em 1em;
    padding: 0.3em 1em;
    font-size: 14px;
    
    
    @media (max-width: 600px) {
      top: 16px;
      max-width: 100px;
    right: 2px;
   
    min-height: 10px;
    font-size: 10px;
    }
     `

   export const UserGreeting = styled.p`
    font-size: 14px;
    color: white;
    position: absolute;
    top: 40px;
    right: 135px;

    @media (max-width: 600px) {
    font-size: 11px;
    margin: 4px 0px;
    color: white;
    position: absolute;
    top: 2px;
    right: 18px;
    }
    `