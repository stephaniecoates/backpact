import React from 'react';
import {ContentBox, Heading, P} from './../StyledResources';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';


export default function Clothing () {
    return (
        <ContentBox>
            <Typography variant="overline" style={{textDecoration: 'underline'}}>Clothing</Typography>
            <Heading>What should I wear on my backpacking trip?</Heading>
            <P>Whether you're going on a one-nighter, a weekend trip, or for two months on the PCT, you'll use the same fundamental pieces of clothing. Layers are key, which can be tweaked based on specific weather conditions that you're likely to run into on your trip.</P>
            <P>With layers, you can remove one when you get too hot, and add one when you start to feel chilled. And remember: it's easier to stay warm than to get warm.</P>
            <P>Your individual clothing choices will be based on a combination of the following factors:</P>
            <ul>
                <P><li><b>Functionality: </b>Look for clothes that are moisture-wicking, quick-drying, and offer sun protection. Consider if you want features like pockets, zippers, hoods, and vents and how they'll affect your performance.</li></P>
                <P><li><b>Weight vs. Comfort: </b>Added features add convenience and comfort, but they tag on ounces which add up. Choose clothes that satisfy your needs while keeping your pack weight in check.</li></P>
            </ul>
            <P>Itch-free merino wool and synthetic materials, like polyester and nylon, make great choices for clothing fabrics. They're quick drying, moisture-wicking, and durable.</P>
            <Heading>Essential layers you'll need for the trail</Heading>
            <P>Base Layers:</P>
            <ul>
                <P><li><b>Underwear: </b>If you choose to wear underwear, make sure they're airy, breathable, and not cotton. Bring two to three pairs, and rinse out a pair when you feel it's necessary.</li></P>
                <P><li><b>Bras: </b>Choose a pullover sports bra with no clasps. The metal or plastics parts can dig into your skin under the weight of your pack. Bring one or two.</li></P>
                <P><li><b>Base layer top and bottoms: </b>Also called long underwear, these are available in different weights and are essential for cold-weather backpacking. Base layers can be worn underneath rain gear or other layers on chilly days, or saved for nights after arriving in camp to lounge and sleep in. Even during the summer, you'll need base layers if you're in the mountains and temperatures dip into the 50's at night.</li></P>
            </ul>
            <P>Shirts, Pants, and Shorts</P>
            <ul>
                <P><li><b>T-shirt: </b>Go with synthetic or wool. Bring two - one to hike in, and a clean one to sleep in.</li></P>
                <P><li><b>Long-sleeve shirt: </b>A long sleeve top can serve multiple purposes. In the desert, an airy long sleeve can serve as sun protection, in the northeastern forests, it can act as a protectant from pesky insects, or in the alpine, it can add lightweight warmth.</li></P>
                <P><li><b>Shorts/Pants: </b>Choose a comfortable pair of synthetic pants (not jeans!) that fit well and provide a good stretch when you move. Convertible, zip-off pants are convenient for hot weather and creek crossings, even if they're not that stylish. The wildlife won't judge you.</li></P>
            </ul>
            <P>Mid Layers</P>
            <ul>
                <P><li><b>Fleece Top</b></li></P>
                <P><li><b>Puffy insulated jacket/vest</b></li></P>
                <P><li><b>Soft shell</b></li></P>
            </ul>
            <P>Rain Gear</P>
            <ul>
                <P><li><b>Rain Jacket</b></li></P>
                <P><li><b>Rain Pants</b></li></P>
                <P><li><b>Waterproof pack cover</b></li></P>
            </ul>
            <P>Accessories</P>
            <ul>
                <P><li><b>Socks</b></li></P>
                <P><li><b>Sock liners</b></li></P>
                <P><li><b>Sunhat</b></li></P>
                <P><li><b>Cold weather hat</b></li></P>
                <P><li><b>Gloves (one pair for sun, one for warmth)</b></li></P>
                <P><li><b>Bandana/Buff</b></li></P>
            </ul>
            <P>For more information, watch this great video from REI:</P>
            <ReactPlayer url="https://www.youtube.com/watch?time_continue=6&v=D6zEhwhIGik" width={'60%'} height={'90%'} style={{margin: 'auto'}}/>

        </ContentBox>
    )
}