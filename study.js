import React from 'react';
import ReactDOM from "react-dom/client";

import newClass,{name,rollNo} from './src/config';
// Header
//         - Logo(Title)
//         - Nav Items(Right Side)
//         - Cart
//      Body 
//         - Search bar
//         - RestrauntList
//           - RestaurantCard (many cards)
//               - Image
//               - Name
//               - Rating
//               - Cusines
//      Footer
//       - links
//       - Copyright
const Title = () => {
    return (
        <a href='/'>
            <img className='logo' src="https://foodhub.modeltheme.com/wp-content/themes/foodhub/images/logo.png" alt="logo" />
        </a>
        
    )
} 

const Header =() => {
    return (
        <div className='header'>
            
            <div className="nav-bar">
            <Title />
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Search</li>
                        <li>My Account</li>
                        <li>Cart</li>
                    </ul>
                </div>
            <button className='btn'>Submit Recipe</button>
            </div>
            <div className='hero-section'>
                <h1>It is even better than</h1>
                <h1>an expensive cookery book </h1>
                <p>Learn how to make your favorite restaurant’s dishes</p>
                <div className='search-bar'>
                    <input className='input' placeholder='I want to make...'></input>
                    <button className='btn2'>Search</button>
                </div>
                
            </div>
        </div>
        
    )
};

const restrautList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "73011",
        name: "KFC",
        uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["American", "Snacks", "Biryani"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 6.199999809265137,
        slugs: {
          restaurant: "kfc-chukkuwala-chukkuwala",
          city: "dehradun",
        },
        cityState: "22",
        address:"KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
        locality: "Clock Tower",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "73011",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 6.199999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "542132",
        name: "Domnik Pizza",
        uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
        city: "22",
        area: "Majra    Bansal Home",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 0.6000000238418579,
        slugs: {
          restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
        locality: "Patel Nagar",
        parentId: 22321,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "542132",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 0.6000000238418579,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "321517",
        name: "FOOD PLANET RESTAURANT",
        uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
        city: "22",
        area: "Majra",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "ykboewqeoxnne8fgrnui",
        cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 0.699999988079071,
        slugs: {
          restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
        locality: "Patel Nagar",
        parentId: 81850,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "321517",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 0.699999988079071,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "2.8",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "311806",
        name: "Burger King",
        uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
        cuisines: ["Burgers", "American"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        slaString: "39 MINS",
        lastMileTravel: 6.300000190734863,
        slugs: {
          restaurant: "burger-king-chakrata-road-ballupur",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
        locality: "CHAKRATA ROAD",
        parentId: 166,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "311806",
          deliveryTime: 39,
          minDeliveryTime: 39,
          maxDeliveryTime: 39,
          lastMileTravel: 6.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "132460",
        name: "Annapurna Andhra Mess",
        uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
        city: "22",
        area: "Dehradun",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
        cuisines: ["South Indian", "Biryani", "North Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
        locality: "Patel Nagar",
        parentId: 33997,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "132460",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "496677",
        name: "Uncle Ji Restaurant",
        uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
        city: "22",
        area: "Patel Nagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
        cuisines: ["North Indian", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 0.800000011920929,
        slugs: {
          restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address: "348 santosh tower, majra road gram majra dehradun 248001",
        locality: "Patel Nagar",
        parentId: 298209,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "496677",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 0.800000011920929,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
  ];


/*1st way
const RestaurantCard=(props) =>{
    return (
            <div className='card'>
            <img className='burger-img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + props.restaurant.data?.cloudinaryImageId}></img>
                <h2>{props.restaurant.data?.name}</h2>
                <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
                <h3>{props.restaurant.data?.avgRating} stars</h3>
            </div>
    )
}*/
/*2nd way destructuring
const RestaurantCard=({restaurant}) =>{
    const {name, cuisines , cloudinaryImageId , avgRating } =restaurant.data;
    return (
        
            <div className='card'>
            <img className='burger-img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}></img>
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{avgRating} stars</h3>
            </div>
    )
}*/
/*3rd way
const RestaurantCard=({name, cuisines , cloudinaryImageId , avgRating }) =>{
    return (
        
            <div className='card'>
            <img className='burger-img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}></img>
                <h2>{name}</h2>
                <h3>{cuisines && cuisines.join(", ")}</h3>
                <h3>{avgRating} stars</h3>
            </div>
    )
}*/

const RestaurantCard=({name, cuisines , cloudinaryImageId , avgRating }) =>{
    return (
        
            <div className='card'>
            <img className='burger-img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}></img>
                <h2>{name}</h2>
                <h3>{cuisines && cuisines.join(", ")}</h3>
                <h3>{avgRating} stars</h3>
            </div>
    )
}
//4th By spread Operator
const Body =()=>{
  const [searchTxt , setSearchTxt] = useState();

  const [onclicked, setOnClicked] = useState("False");

  const [h1Color,setH1Color] = useState();

  return (
      <div className='Restraurant'>
          <h1 className='head'>Restaurants with online food delivery</h1>
          <div className="search">
              <input type="text" placeholder="Search for restaurant and food" 
              value={searchTxt}
              onChange={ (e) => {
                  setSearchTxt(e.target.value);
              }}
              onClick={ () => {
                  if(onclicked === "True")
                      setOnClicked("False");
                  else
                      setOnClicked("True");
              }}
              />
              <button className="btn2"
              onClick={ () =>{
                  setH1Color('red');
              }}
              >Search</button>
          </div>
          <h1 style={{ color: h1Color}}>{searchTxt}</h1>
          <h1 style={{ color: h1Color}}>{onclicked}</h1>
          <div className='Restraurant-card'>

            {/* 3rd way */}
            {/* <RestaurantCard name={restrautList[0].data.name} cuisines={restrautList[0].data.cuisines} cloudinaryImageId={restrautList[0].data.cloudinaryImageId} avgRating={restrautList[0].data.avgRating}/> */}

            {
                restrautList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }
            {/* <RestaurantCard {...restrautList[0].data}/>
            <RestaurantCard {...restrautList[1].data}/>
            <RestaurantCard {...restrautList[2].data}/>
            <RestaurantCard {...restrautList[3].data}/>
            <RestaurantCard {...restrautList[4].data}/>
            <RestaurantCard {...restrautList[5].data}/>
            <RestaurantCard {...restrautList[0].data}/>
            <RestaurantCard {...restrautList[0].data}/> */}
            </div>
        </div>
    )
};
const Footer =()=>{
    return (
        <h2>Footer</h2>
    )
};
const AppLayout=() => {
    return (
        <>
        
        {name}
        {newClass}
        {rollNo} 
        <Header />
        <Body />
        <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);