import React, {Component} from 'react';
import GearItem from './GearItem';

const gearEssentials = [
    {itemId: 1, itemName: 'Backpack', itemInfo: `For multi-day trips, choose a a 50- to 80-liter pack. Make sure to bring a rain cover, or line your pack with a trash compactor bag to make it waterproof.`, itemImage: 'https://content.backcountry.com/images/items/900/OSP/OSP00AI/CANGN.jpg', itemImageAlt: '', learnMore: 'https://www.rei.com/learn/expert-advice/backpack.html', shop: 'https://www.rei.com/c/hiking-backpacks'},
    {itemId: 2, itemName: 'Shelter', itemInfo: `Whether you prefer an ultralight tarp or a heavy-duty tent, you'll need some sort of shelter to keep you protected from the elements.`, itemImage: 'https://www.sportsmanswarehouse.com/img/products/original/alps_mountaineering_lynx_2_person_backpacking_tent_1307501_1.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/backpacking-tent.html', shop: 'https://www.rei.com/learn/expert-advice/backpacking-tent.html'},
    {itemId: 3, itemName: 'Sleeping Bag', itemInfo: `Make sure your bag's temperature rating is warm enough for the weather conditions. Keep those toes toasty at night!`, itemImage: 'https://besthiking.net/wp-content/uploads/2014/12/2-Kelty-Cosmic-Down-20.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/sleeping-bag-backpacking.html', shop: 'https://www.rei.com/s/backpacking-sleeping-bags'},
    {itemId: 4, itemName: 'Sleeping Pad', itemInfo: `A good sleeping pad is essential for two reasons: insulation from the cold ground, and comfortable padding for a good night's sleep.`, itemImage: 'https://assets.sectionhiker.com/wp-content/uploads/thumbskeep/2018/02/1-Xlite-Sleeping-Pad.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/sleeping-pads.html', shop: 'https://www.rei.com/c/sleeping-pads'},
    {itemId: 5, itemName: 'Headlamp', itemInfo: `Headlamps offer hands-free convenience to set up your tent, read a book, or keep hiking once the sun goes down.`, itemImage: 'https://cdn.shopify.com/s/files/1/0384/0233/files/6_2ae820fe-b7c2-444a-9149-b5e4092232f7.jpg?11260929755919646608', learnMore: 'https://www.rei.com/learn/expert-advice/headlamp.html', shop: 'https://www.rei.com/c/headlamps'},
    {itemId: 6, itemName: 'Trekking Poles', itemInfo: `While trekking poles aren't essential, they provide support and enhance stability on all types of terrain`, itemImage: 'https://www.rei.com/media/product/863073', learnMore: 'https://www.rei.com/learn/expert-advice/trekking-poles-hiking-staffs.html', shop: 'https://www.rei.com/c/trekking-poles'},
    {itemId: 7, itemName: 'Pillow', itemInfo: `Either bring a designated pillow, or repurpose your sleeping bag stuff sack by stuffing it with your hiking clothes.`, itemImage: 'https://images-na.ssl-images-amazon.com/images/I/81XvkKETc7L._SX425_.jpg', learnMore: 'https://www.outdoorgearlab.com/topics/camping-and-hiking/best-camping-pillow/buying-advice', shop: 'https://www.rei.com/c/camping-pillows'},
    {itemId: 8, itemName: 'Bear Spray', itemInfo: `If you're hiking in bear territory, it's a smart idea to bring bear spray and know how to use it. Better safe than sorry.`, itemImage: 'https://www.sportsmanswarehouse.com/img/products/original/udap_economy_79oz_bear_spray_1113079_1.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/backpacking-in-bear-country.html', shop: 'https://www.rei.com/c/bear-spray'},
    {itemId: 9, itemName: 'Stove', itemInfo: `If you like morning coffee and hot dinners, a backpacking stove is a must.`, itemImage: 'https://mountainsforeverybody.com/wp-content/uploads/2016/04/MSR-Pocket-Rocket-Stoves-item-with-box.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/backpacking-stove.html', shop: 'https://www.rei.com/c/backpacking-stoves'},
    {itemId: 10, itemName: 'Fuel', itemInfo: `Choose from isobutane or propane pressurized canisters, liquid refillable fuel bottles, or a stove system that funs on fuel pellets or wood.`, itemImage: 'https://images-na.ssl-images-amazon.com/images/I/61AvSqSUzZL._SL1000_.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/backpacking-stove.html', shop: 'https://www.rei.com/c/stove-fuel'},
    {itemId: 11, itemName: 'Cookset', itemInfo: `Pot(s) to cook your food in. If you're going solo, you can get away with cooking and eating from the same pot/mug, if that's your style. Don't forget a pot grabber!`, itemImage: 'https://welltraveledmile.com/wp-content/uploads/2017/12/41wKvLKbz3L.jpg?x60965', learnMore: 'https://www.rei.com/learn/expert-advice/cookware.html', shop: 'https://www.rei.com/c/cooksets'},
    {itemId: 12, itemName: 'Bowl/Mug', itemInfo: `Something to eat and drink out of. Bring both, or use one for both purposes to save weight.`, itemImage: 'http://2.bp.blogspot.com/-kY8Lcvx1yN8/U5fIw71xTJI/AAAAAAAABew/oh5de6z38hE/s1600/61MSQaMKUDL._SL1500_.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/cookware.html', shop: 'https://www.rei.com/c/glasses-cups-and-mugs?ir=category%3Acooksets&r=category%3Acamping-and-hiking%7Ccamp-kitchen%7Ccookware-and-dinnerware%7Cglasses-cups-and-mugs&origin=web'},
    {itemId: 13, itemName: 'Eating Utensil', itemInfo: `You need something to eat with! Otherwise, you'll have to resort to using a woodchip. Not fun.`, itemImage: 'https://ae01.alicdn.com/kf/HTB12YMLPFXXXXb.XpXXq6xXFXXX0/Mini-Portable-EDC-Outdoor-Lightweight-Useful-Titanium-Alloy-Camping-Backpacking-Cutlery-Spork-Fork-Spoon.jpg_640x640.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/cookware.html', shop: 'https://www.rei.com/c/camping-utensils'},
    {itemId: 14, itemName: 'Food Storage', itemInfo: `Keep your food safe and away from animals at night. Use bear cans or bear bags in bear territory, otherwise hang your food bag with a sturdy rope.`, itemImage: 'https://lnt.org/sites/default/files/BV450_0.png', learnMore: 'https://www.rei.com/learn/expert-advice/food-handling-storage.html', shop: 'https://www.rei.com/c/bear-resistant-food-containers'},
    {itemId: 15, itemName: 'Water Bottles', itemInfo: `Bring enough bottles to carry AT LEAST two liters of water at all times. Nalgenes are durable, cheap, and get the job done.`, itemImage: 'https://store.nalgene.com/v/vspfiles/photos/2178-2025-2.jpg', learnMore: 'https://www.greenbelly.co/pages/how-much-water-should-i-carry-backpacking', shop: 'https://www.rei.com/c/water-bottles-flasks-and-jugs?ir=category%3Awater-bottles-and-treatment&r=category%3Awater-bottles-and-treatment%7Cwater-bottles-flasks-and-jugs&origin=web'},
    {itemId: 16, itemName: 'Water Storage', itemInfo: `It's a good idea to have a water container to fill up at camp. If water sources are sparse on your route, you may also need to lug extra water while hiking.`, itemImage: 'https://i.pinimg.com/originals/e4/40/80/e440808da4822c0190a535ace48b2c01.jpg', learnMore: 'https://www.outdoorgearlab.com/expert-advice/the-best-water-storage-solution-for-backpacking', shop: 'https://www.rei.com/c/water-storage'},
    {itemId: 17, itemName: 'Water Treatment', itemInfo: `There are a variety of methods, from chemical treatment to physical filters, to making water in the backcountry safe to drink. Choose the method that fits your trip best.`, itemImage: 'https://www.aquamira.com/wp-content/uploads/2017/05/hero-aquamira-water-treatment-1-oz.jpg', learnMore: 'https://www.rei.com/learn/expert-advice/water-treatment-backcountry.html', shop: 'https://www.rei.com/c/water-treatment'},
    {itemId: 18, itemName: 'Meals & Snacks', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 19, itemName: `Extra day of food`, itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 20, itemName: 'Hiking Clothing', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 21, itemName: 'Extra Layers', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 22, itemName: 'Hiking Footwear', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 23, itemName: 'Hiking Gloves', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 24, itemName: 'Hiking Socks', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 25, itemName: 'Rain Gear', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 26, itemName: 'Cold Weather Gear', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 27, itemName: 'Camp Shoes', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 28, itemName: 'Gaiters', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 29, itemName: 'Bandana/Buff', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 30, itemName: 'Hat', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 31, itemName: 'Map', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 32, itemName: 'Compass', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 33, itemName: 'Guidebook', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 34, itemName: 'Watch', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 35, itemName: 'GPS', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 36, itemName: 'Satellite/Beacon', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 37, itemName: 'Whistle', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 38, itemName: 'First-Aid Kit', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 39, itemName: 'Lighter/Matches', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 40, itemName: 'Fire Starter', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 41, itemName: 'Emergency Shelter', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 42, itemName: 'Hand Sanitizer', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 43, itemName: 'Multipurpose Soap', itemInfo: `Use this for all cleaning purposes: your hands, your body, and your dishes. Be sure to dispose of soapy water properly.`, itemImage: 'https://www.tenpoundbackpack.com/assets/2011/12/Backpacking-Soap-300x300.jpg', learnMore: 'https://www.backpacker.com/skills/prof-hike-a-backpacker-s-guide-to-smart-personal-hygiene', shop: 'https://www.rei.com/c/soap-and-shampoo'},
    {itemId: 44, itemName: 'Toothbrush', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 45, itemName: 'Toothpaste', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 46, itemName: 'Lotion', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 47, itemName: 'Camp Towel', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 48, itemName: 'Toilet Paper', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 49, itemName: 'Wet Wipes', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 50, itemName: 'Menstrual Products', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 51, itemName: 'Prescription medications', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 52, itemName: 'Extra Contacts', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 53, itemName: 'Glasses', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 54, itemName: 'Sunglasses', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 55, itemName: 'Sunscreen', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 56, itemName: 'Lip balm', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 57, itemName: 'Insect Repellent', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 58, itemName: 'Blister Treatment', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 59, itemName: 'Knife/Multi-tool', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 60, itemName: 'Repair Kit', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 61, itemName: 'Duct Tape', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 62, itemName: 'Daypack', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 63, itemName: 'Camera', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 65, itemName: 'Star Chart', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 66, itemName: 'Journal', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 67, itemName: 'Pens/Pencils', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 69, itemName: 'Book', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 70, itemName: 'Cards/Games', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 71, itemName: 'Binoculars', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 72, itemName: 'Two-way radios', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 73, itemName: 'Permits', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 74, itemName: 'Credit Card/Cash', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 75, itemName: 'Personal ID', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 76, itemName: 'Car Keys', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
    {itemId: 77, itemName: 'Cell Phone', itemInfo: ``, itemImage: '', learnMore: '', shop: ''},
]


class GearList extends Component {
render () {
    return(
    gearEssentials.map((obj) => {
        return (
        <div style={{display: 'flex'}}>
        <GearItem
        key={obj.itemId}
        itemName={obj.itemName}
        itemInfo={obj.itemInfo}
        itemImage={obj.itemImage}
        learnMore={obj.learnMore}
        shop={obj.shop}
        />
    </div>
    )}))
    }

}

export default GearList;