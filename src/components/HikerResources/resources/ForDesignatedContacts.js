import React from 'react';
import { ContentBox, Heading, P } from './../StyledResources';
import Typography from '@material-ui/core/Typography';


export default function FirstAid () {
    return (
        <ContentBox>
        <Typography variant="overline" style={{textDecoration: 'underline'}}>For Designated Contacts</Typography>
        <Heading>How do I report my hiker missing?</Heading>
        <P>If you've received a text and email from Backpact as a designated contact to one of our hikers, your hiker didn't return by their expected end date and delete their alert.</P>
        </ContentBox>
    )
}