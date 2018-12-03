import React from 'react';
import { ContentBox, Heading, P } from './../StyledResources';
import Typography from '@material-ui/core/Typography';


export default function LNT() {
    return (
        <ContentBox>
            <Typography variant="overline" style={{ textDecoration: 'underline' }}>Leave No Trace</Typography>
            <Heading>What is LNT?</Heading>
            <P>If you're familiar with the outdoor recreation space, chances are, you've heard the keyword LNT before. LNT, or Leave No Trace, are the seven best practices we should follow to enjoy and protect wild places we visit.</P>
            <P>Over 100 million visitors go on more than 10 billion outdoor outings every year in the U.S., which takes a toll on the environment. While most of us don't intend harm, we can end up contributing towards litter, invasive species, habituated wildlife, trail erosion, polluted water sources, and more if we aren't diligent.</P>
            <P>Following the 7 LNT principles is a great way to minimize impact and leave our favorite natural spaces as good (or better!) than we found them.</P>
            <Heading>The 7 LNT Principles</Heading>
            <ul>
                <P><li><b>Plan Ahead and Prepare: </b>When you aren't prepared, you're more likely to run into situations where you're making decisions out of fatigue or fear, leading to poor, irrational or irresponsible decisions. Do your research and plan accordingly! Know the regulations for the area you'll visit, prepare for extreme weather, test our your gear, and familiarize yourself with the map before going.</li></P>
                <P><li><b>Travel and Camp on Durable Surfaces: </b>Whether you're hiking, sitting down for lunch, or setting up overnight camp, always look for resilient types of terrain to walk/sit/set up on. Ideal surfaces are established trails and campsites, rock, gravel, dry grasses or snow. Don't hike off-trail unless it's absolutely necessary.</li></P>
                <P><li><b>Dispose of Waste Properly: </b>This applies to everything, from food scraps and packaging to rinse water to your own poop. Pack out what you pack in - that means all trash, litter, and leftover food. Bury human waste in catholes dug 6 to 8 inches deep and at least 200 feet from any water sources. Pack out your toilet paper and hygiene products - don't bury them. If you wash your dishes, make sure to scatter the water at least 200 feet away from water sources.</li></P>
                <P><li><b>Minimize Campfire Impacts: </b>Yes, campfires are a timeless camping tradition, but they're quite desctuctive. First check that your trip location allows open fires, and if they are, always use established fire rings, fire pans, or mound fires. Burn all wood and coals to ash, and put out campfires completely before going to bed or leaving the site. Scatter the cool ashes as well.</li></P>
                <P><li><b>Leave What You Find: </b>Take only pictures, leave only footprints.</li></P>
                <P><li><b>Respect Wildlife: </b>Always observe wildlife from a distance. Don't follow, approach, or feed them. This is their home you're entering into, remember, so be respectful. Additionally, protect the local wildlife by storing your food and trash securely at night.</li></P>
                <P><li><b>Be Considerate of Other Visitors: </b>The golden rule applies to the outdoors, too. Be courteous, yield to uphill hikers, be aware of other trail users (on bikes and horseback), camp away from trails and other visitors, and avoid loud voices and noises. No one likes the guy carrying speakers, blaring his country music while hiking. Let nature's sounds prevail.</li></P>
            </ul>
        </ContentBox>
    )
}