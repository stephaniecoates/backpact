import React from 'react';
import {TripTip} from './StyledChecklist';

const tripTips = [
    {tipId: 1, tipName: 'Is your trip feasible and realistic? Is it within your time and budget constraints, appropriate for the current weather/season, and matched with your physical ability and wilderness skills?'},
    {tipId: 2, tipName: 'Are you bringing a GPS or digital navigation system?'},
    {tipId: 3, tipName: 'Do you have paper maps and a compass as backup? Do you know how to use them?'},
    {tipId: 4, tipName: `Are you aware of any regulations and/or bans where you're hiking? Fire ban, bear can requirements, etc.`},
    {tipId: 5, tipName: 'Have you created a detailed itinerary with mileage and elevation gain? Be sure to enter your daily itinerary in the trip description when you set an alert.'},
    {tipId: 6, tipName: 'Do you have the necessary permits for your trip?'},
    {tipId: 7, tipName: 'Have you packed appropriate clothing for the conditions?'},
    {tipId: 8, tipName: 'Do you have all the necessary gear for your trip? Check our our example gear list.'},
    {tipId: 9, tipName: 'Have you scoped out reliable water resupply points along your route?'},
    {tipId: 10, tipName: 'If your trip requires them, have you scoped out food resupply points?'},
    {tipId: 11, tipName: `Have you planned out a menu with adequate nutrition and calories? Backpacking burns a lot of energy - be sure you bring enough food so you don't tire out!`},
    {tipId: 12, tipName: 'If your trip is a point-to-point hike, have you set up return transportation?'},
    {tipId: 13, tipName: 'Are you carrying a first-aid kit and repair kit? Do you know how to use them?'},
    {tipId: 14, tipName: `Have you tested all of your gear? Pitch your tent at home, fire up the stove, and break in your boots (if they're new) before you go.`},
    {tipId: 15, tipName: `Are you aware of and well versed in the 7 LNT principles?`},
]


export default function TripChecklist () { 
    return (
    tripTips.map((obj) => {
        return (
       <TripTip>
        <input type='checkbox'/>
        <p key={obj.tipId} style={{marginLeft: '10px', textAlign: 'left'}}>{obj.tipName}</p>
        </TripTip>
    )})
    )

}
