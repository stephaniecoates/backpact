import React from 'react';
import { ContentBox, Heading, P } from './../StyledResources';
import Typography from '@material-ui/core/Typography';


export default function FirstAid () {
    return (
        <ContentBox>
        <Typography variant="overline" style={{textDecoration: 'underline'}}>For Designated Contacts</Typography>
        <Heading>How do I report my hiker missing?</Heading>
        <P>You've received a text and email from Backpact as a designated contact to one of our hikers, which means they didn't return by their expected end date. If you can't get ahold of them yourself and are concerned that something bad may have happened to them on their trip, it's a good idea to report them missing.</P>
        <Heading>Who should I call to activate a search and rescue effort?</Heading>
        <P>In the United States, if you're in the same state as the hiker on their trip, the best number to call to report them missing is 911. If you're not in the same state, call the State Police for the state your hiker is in for their trip.</P>
        <P>If you call 911, they will relay the call to the State Police troop closest to the rescue area, and then the State Police will call in the designated Search and Rescue (SAR) agencies responsible for conducting a search.</P>
        <Heading>Why State Police?</Heading>
        <P>State Police have the 24/7 response and communication infrastructure, as well as staffing necessary to call in groups/agencies that'll mount a search. While it varies from region to region, most SAR and rescue agencies don't publish public phone numbers or answer them outside of business hours, so it's your best bet to have State Police handle the coordination effort. They'll answer the phone and get the ball rolling.</P>
        <P>Be sure to have access to the trip itinerary and personal hiker information we've emailed you to pass on to authorities.</P>
        </ContentBox>
    )
}