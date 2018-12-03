import React from 'react';
import { ContentBox, Heading, P } from './../StyledResources';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';


export default function Navigation () {
    return (
        <ContentBox>
         <Typography variant="overline" style={{textDecoration: 'underline'}}>Navigation</Typography>
         <Heading>How do I use a map and compass?</Heading>
         <P>It's amazing to live in a time where technology make our backcountry experiences easier, more enjoyable, and more accessible for all. Portable GPS systems and phone apps can be used to help you navigate on- and off-trail. </P>
         <P>That being said, those devices can fail. GPS system batteries can die, as can your phone's. It's crucial to still carry a map and compass and know how to use them.</P>
         <P>REI offers some wonderful videos on the basics of using topography maps and a compass to navigate in the backcountry.</P>
         <P><b>How to read a topo map:</b></P>
         <ReactPlayer url="https://www.youtube.com/watch?v=CoVcRxza8nI" width={'65%'} height={'90%'} style={{margin: 'auto'}}/>
         <br></br>
         <P><b>How to use a compass:</b></P>
         <ReactPlayer url="https://www.youtube.com/watch?v=0cF0ovA3FtY" width={'65%'} height={'90%'} style={{margin: 'auto'}}/>
        </ContentBox>
    )
}