import React from 'react';
import {ContentBox, Heading, P} from './../StyledResources';
import Typography from '@material-ui/core/Typography';


export default function Clothing () {
    return (
        <ContentBox>
            <Typography variant="overline" style={{textDecoration: 'underline'}}>Clothing</Typography>
            <Heading>What should I wear on my backpacking trip?</Heading>
            <P>Whether you're going on a one-nighter, a weekend trip, or two months on the PCT, you'll use the same fundamental pieces of clothing for layering, tweaking it to address specific weather conditions you're likely to encounter.</P>
        </ContentBox>
    )
}