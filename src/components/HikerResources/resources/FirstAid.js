import React from 'react';
import { ContentBox, Heading, P } from './../StyledResources';
import Typography from '@material-ui/core/Typography';


export default function FirstAid() {
    return (
        <ContentBox>
             <Typography variant="overline" style={{textDecoration: 'underline'}}>First Aid</Typography>
             <Heading>What should I pack in my first-aid kit?</Heading>
             <P>Whenever you're headed into the wilderness, you should always carry a first-aid kit, whether its a prepackaged store-bought kit, or a DIY one.</P>
             <P>Remember, an item is useless if you don't know how to use it/what to use it for. Consider taking a wilderness first-aid (WFA) or wilderness first responder (WFR) course so you're prepared.</P>
             <P>If you decide to make a DIY kit, use the list below (compiled from REI) as a guide. The list is intentionally exhaustive, so you don't forget anything. Only bring what's relevant to your trip.</P> 
             <P>Think - what sort or risks or dangers will be present where you're going and with what you're doing?</P>
            <P><b>Basic Care</b></P>
            <ul>
                <P><li>Antiseptic Wipes</li></P>
                <P><li>Antibacterial ointment</li></P>
                <P><li>Compound benzoin tincture (bandage adhesive)</li></P>
                <P><li>Adhesive bandages</li></P>
                <P><li>Butterfly bandages/wound-closure strips</li></P>
                <P><li>Gauze pads</li></P>
                <P><li>Nonstick sterile pads</li></P>
                <P><li>Medical adhesive tape</li></P>
                <P><li>Blister treatment</li></P>
                <P><li>Ibuprofen (or other preferred pain-relief med)</li></P>
                <P><li>Anti-itch treatment</li></P>
                <P><li>Benadryl/Antihistamine (for allergic reactions)</li></P>
                <P><li>Fine point tweezers (for splinter removal)</li></P>
                <P><li>Safety pins</li></P>
                <P><li>First-aid manual</li></P>
            </ul>
            <P><b>Wraps, Splints, and Wound Coverings</b></P>
            <ul>
                <P><li>Elastic Wrap</li></P>
                <P><li>Triangular cravat bandage</li></P>
                <P><li>Finger splint</li></P>
                <P><li>SAM splint</li></P>
                <P><li>Rolled gauze</li></P>
                <P><li>Rolled, stretch-to-conform bandages</li></P>
                <P><li>Hydrogel-based pads</li></P>
                <P><li>First-aid cleansing pads with topical anesthetic</li></P>
                <P><li>Hemostatic gauze</li></P>
                <P><li>Liquid bandage</li></P>
            </ul>
            <P><b>Additional Meds/Treatments</b></P>
            <ul>
                <P><li>Sunburn relief</li></P>
                <P><li>Throat lozenges</li></P>
                <P><li>Eye drops</li></P>
                <P><li>Diarrhea medication</li></P>
                <P><li>Antacid tablets</li></P>
                <P><li>Oral rehydration salts</li></P>
                <P><li>Glucose (or other sugar, to treat hypoglycemia)</li></P>
                <P><li>EpiPen (for severe allergic reactions)</li></P>
                <P><li>Aspirin (as a response to angina or a heart attack)</li></P>
            
            </ul>
            <P><b>Tools and Supplies</b></P>
            <ul>
                <P><li>Knife (or multitool w/ knife)</li></P>
                <P><li>Blunt-tip scissors</li></P>
                <P><li>Safety razor blade</li></P>
                <P><li>Cotton-tipped swabs</li></P>
                <P><li>Thermometer</li></P>
                <P><li>Irrigation Syringe</li></P>
                <P><li>Medical gloves</li></P>
                <P><li>CPR mask</li></P>
                <P><li>Small notepad (for recording medical data)</li></P>
                <P><li>Medical waste bag</li></P>
                <P><li>Waterproof container for medical supplies</li></P>
                <P><li>Emergency blanket</li></P>
                <P><li>Hand sanitizer</li></P>
                <P><li>Biodegradable soap</li></P>
            </ul>

            <h4>REMEMBER: If you can't explain to yourself (in detail!) how, why, and in what scenario you'd use any of these items, either educate yourself or don't bring them. Otherwise, they're just dead weight.</h4>
            </ContentBox>
    )
}