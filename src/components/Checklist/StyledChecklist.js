import styled from 'styled-components';

export const DashboardContainer = styled.div`
height: 72vh;
background-color: rgba(255, 255, 255, 0.7);
box-shadow: -2px 2px 1px black;
width: 90%;
margin: auto;
@media (max-width: 600px) {
    margin-top: 12px;
    height: 77vh
}
`
export const ChecklistContainer = styled.div`
width: 100%;
height: 90%;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width: 600px) {
    flex-direction: column;
    height: 73%;
    margin-top: 20px;
}
`

export const TripChecklistContainer = styled.div`
width: 70%;
height: 95%
@media (max-width: 750px) {
    width: 65%
}
@media (max-width: 600px) {
    width: 90%;
    height: 35vh;
}
`
export const TripChecklistBox = styled.div`

height: 87%;
border: 2px solid black;
overflow: scroll;
`

export const GearChecklistContainer = styled.div`
width: 23%;
height: 95%
@media (max-width: 750px) {
    width: 26%
}
@media (max-width: 600px) {
    margin-top: 10px;
    width: 90%
    height: 30vh;
}
`

export const GearChecklistBox = styled.div`
height: 87%;
border: 2px solid black;
overflow: scroll;
`

export const ChecklistTitle = styled.h4`
font-size: 1em;
text-transform: uppercase;
text-align: left;
margin: 0px;
padding: 20px 10px 0px 30px;
@media (max-width: 600px) {
    font-size: 0.8em;
    text-align: left;
    margin-bottom: 5px;
    padding: 10px;
}
@media (max-width: 470px) {
    text-align: left;
}
`

export const TripTip = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: solid 1px #606060;
padding: 5px;
font-size: 0.8em;
@media (max-width: 750px) {
    font-size: 0.7em
}
`

export const GearItem = styled.div`
width: 100%
height: 20px;
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: solid 1px #606060;
padding: 10px 0px;
margin: 10px 0px;
text-transform: lowercase;
font-size: 0.8em;
padding: 5px

@media (max-width: 750px) {
    font-size: 0.7em
}
`