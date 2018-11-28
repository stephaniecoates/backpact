import React, {Component} from 'react';
import GearItem from './GearItem';

const gearEssentials = [
    {itemId: 1, itemName: 'Backpack', },
    {itemId: 2, itemName: 'Shelter'},
    {itemId: 3, itemName: 'Sleeping Bag'},
    {itemId: 4, itemName: 'Sleeping Pad'},
    {itemId: 5, itemName: 'Headlamp'},
    {itemId: 6, itemName: 'Trekking Poles'},
    {itemId: 7, itemName: 'Pillow'},
    {itemId: 8, itemName: 'Bear Spray'},
    {itemId: 9, itemName: 'Stove'},
    {itemId: 10, itemName: 'Fuel'},
    {itemId: 11, itemName: 'Cookset'},
    {itemId: 12, itemName: 'Bowl/Mug'},
    {itemId: 13, itemName: 'Eating Utensil'},
    {itemId: 14, itemName: 'Food Storage'},
    {itemId: 15, itemName: 'Water Bottles'},
    {itemId: 16, itemName: 'Water Storage'},
    {itemId: 17, itemName: 'Water Treatment'},
    {itemId: 18, itemName: 'Meals & Snacks'},
    {itemId: 19, itemName: `Extra day of food`},
    {itemId: 20, itemName: 'Hiking Clothing'},
    {itemId: 21, itemName: 'Extra Layers'},
    {itemId: 22, itemName: 'Hiking Footwear'},
    {itemId: 23, itemName: 'Hiking Gloves'},
    {itemId: 24, itemName: 'Hiking Socks'},
    {itemId: 25, itemName: 'Rain Gear'},
    {itemId: 26, itemName: 'Cold Weather Gear'},
    {itemId: 27, itemName: 'Camp Shoes'},
    {itemId: 28, itemName: 'Gaiters'},
    {itemId: 29, itemName: 'Bandana/Buff'},
    {itemId: 30, itemName: 'Hat'},
    {itemId: 31, itemName: 'Map'},
    {itemId: 32, itemName: 'Compass'},
    {itemId: 33, itemName: 'Guidebook'},
    {itemId: 34, itemName: 'Watch'},
    {itemId: 35, itemName: 'GPS'},
    {itemId: 36, itemName: 'Satellite/Beacon'},
    {itemId: 37, itemName: 'Whistle'},
    {itemId: 38, itemName: 'First-Aid Kit'},
    {itemId: 39, itemName: 'Lighter/Matches'},
    {itemId: 40, itemName: 'Fire Starter'},
    {itemId: 41, itemName: 'Emergency Shelter'},
    {itemId: 42, itemName: 'Hand Sanitizer'},
    {itemId: 43, itemName: 'Multipurpose Soap'},
    {itemId: 44, itemName: 'Toothbrush'},
    {itemId: 45, itemName: 'Toothpaste'},
    {itemId: 46, itemName: 'Lotion'},
    {itemId: 47, itemName: 'Camp Towel'},
    {itemId: 48, itemName: 'Toilet Paper'},
    {itemId: 49, itemName: 'Wet Wipes'},
    {itemId: 50, itemName: 'Menstrual Products'},
    {itemId: 51, itemName: 'Prescription medications'},
    {itemId: 52, itemName: 'Extra Contacts'},
    {itemId: 53, itemName: 'Glasses'},
    {itemId: 54, itemName: 'Sunglasses'},
    {itemId: 55, itemName: 'Sunscreen'},
    {itemId: 56, itemName: 'Lip balm'},
    {itemId: 57, itemName: 'Insect Repellent'},
    {itemId: 58, itemName: 'Blister Treatment'},
    {itemId: 59, itemName: 'Knife/Multi-tool'},
    {itemId: 60, itemName: 'Repair Kit'},
    {itemId: 61, itemName: 'Duct Tape'},
    {itemId: 62, itemName: 'Daypack'},
    {itemId: 63, itemName: 'Camera'},
    {itemId: 65, itemName: 'Star Chart'},
    {itemId: 66, itemName: 'Journal'},
    {itemId: 67, itemName: 'Pens/Pencils'},
    {itemId: 69, itemName: 'Book'},
    {itemId: 70, itemName: 'Cards/Games'},
    {itemId: 71, itemName: 'Binoculars'},
    {itemId: 72, itemName: 'Two-way radios'},
    {itemId: 73, itemName: 'Permits'},
    {itemId: 74, itemName: 'Credit Card/Cash'},
    {itemId: 75, itemName: 'Personal ID'},
    {itemId: 76, itemName: 'Car Keys'},
    {itemId: 77, itemName: 'Cell Phone'},
]


class GearList extends Component {
render () {
    return(
    gearEssentials.map((obj) => {
        return (
        <div key={obj.itemId} style={{margin: '10px 0px 10px 10px', alignContent: 'left'}}>
        <GearItem
        itemName={obj.itemName}
        />
    </div>
    )}))
    }

}

export default GearList;