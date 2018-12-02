import React from 'react';
import { ContentBox } from './../StyledResources';
import Typography from '@material-ui/core/Typography';


export default function Navigation () {
    return (
        <ContentBox>
         <Typography variant="overline" style={{textDecoration: 'underline'}}>Navigation</Typography>
        </ContentBox>
    )
}