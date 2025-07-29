import React from "react";
import ReactDOM from "react-dom/client";
import searchIcon from "./assets/search-icon.png"; // adjust the path if needed

const Header = () => {
  return (
    <div className="container">
      <div className="Logo-container">
        <img
          className="logo-img"
          src="https://t4.ftcdn.net/jpg/15/46/63/35/240_F_1546633590_OwptW1bUQ40sECFXOKFfIjiaOaOpVyvc.jpg"
          alt="logo"
        />
      </div>
      <div className="Nav-section">
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>About Us</span>
          </li>
          <li>
            <span>Contact Us</span>
          </li>
          <li>
            <span>cart</span>
          </li>

          <div className="btn-container">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

const Card = (props) => {
    const {resData}=props;
  return (
    <div className="card-container">
      <img
        className="card-img"
        src="https://media.istockphoto.com/id/1146289003/photo/traditional-indian-street-food-rice-with-vegetables-close-up-on-a-plate-horizontal.jpg?s=612x612&w=0&k=20&c=Ikb_QsWs1yjKMs8izmdkAjUc2BAiBQCLOzL9uWZ7-aY="
        alt="pulao"
      />
      <h3>{resData.info.name}</h3>
      <p>{resData.info.cuisines.join(", ")}</p>
      <p>{resData.info.avgRating}⭐</p>
      <p>{resData.info.deliveryTime}minutes</p>
      <p>${resData.info.costForTwo/100}FOR TWO</p>
    </div>
  );
};

const restList={
    "restaurants": [
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"55473",
"name"
:
"Pizza Hut",
"cloudinaryImageId"
:
"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/2967d497-2449-4e24-b771-98138a38ded3_55473.JPGImage preview",
"locality"
:
"Sector 10",
"areaName"
:
"Rohini",
"costForTwo"
:
"₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating"
:
4.1,
"parentId"
:
"721",
"avgRatingString"
:
"4.1",
"totalRatingsString"
:
"8.2K+",
"sla": {
"deliveryTime"
:
23,
"lastMileTravel"
:
2.2,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"20-25 mins",
"lastMileTravelString"
:
"2.2 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-07-30 04:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹59"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-35da88ae-1027-4cc4-b050-8fb082d8512e"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/delhi/pizza-hut-sector-10-rohini-rest55473",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"253721",
"name"
:
"McDonald's",
"cloudinaryImageId"
:
"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/62f53fde-2065-40d9-aeee-fe0a972b0008_253721.JPGImage preview",
"locality"
:
"Janak Palace",
"areaName"
:
"Janakpuri",
"costForTwo"
:
"₹400 for two",
"cuisines": [
"American"
],
"avgRating"
:
4.4,
"parentId"
:
"630",
"avgRatingString"
:
"4.4",
"totalRatingsString"
:
"23K+",
"sla": {
"deliveryTime"
:
41,
"lastMileTravel"
:
9.8,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"40-45 mins",
"lastMileTravelString"
:
"9.8 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-07-30 04:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹117"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"4.1",
"ratingCount"
:
"3.6K+"
},
"source"
:
"GOOGLE",
"sourceIconImageId"
:
"v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-35da88ae-1027-4cc4-b050-8fb082d8512e"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/delhi/mcdonalds-janak-palace-janakpuri-rest253721",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"955049",
"name"
:
"Wraps Kathi Rolls",
"cloudinaryImageId"
:
"RX_THUMBNAIL/IMAGES/VENDOR/2025/5/6/2e68d7ad-a64f-46a5-8ae5-896c4e896bf2_955049.jpgImage preview",
"locality"
:
"Rohini",
"areaName"
:
"Rohini",
"costForTwo"
:
"₹250 for two",
"cuisines": [
"Rolls & Wraps",
"Fast Food",
"Snacks"
],
"avgRating"
:
3.6,
"parentId"
:
"394373",
"avgRatingString"
:
"3.6",
"totalRatingsString"
:
"465",
"sla": {
"deliveryTime"
:
15,
"lastMileTravel"
:
1.4,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"15-20 mins",
"lastMileTravelString"
:
"1.4 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-07-30 07:00:00",
"opened"
:
true
},
"badges": {
"imageBadges": [
{
"imageId"
:
"bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
"description"
:
"bolt!"
}
]
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description"
:
"bolt!",
"imageId"
:
"bolt/big%20rx%20listing%2015%20mins%20.pngImage preview"
}
}
]
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹69"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-35da88ae-1027-4cc4-b050-8fb082d8512e"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/delhi/wraps-kathi-rolls-rohini-rest955049",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"356627",
"name"
:
"Rollsome",
"cloudinaryImageId"
:
"d2zhmkic7glofbpvzqt1",
"locality"
:
"Naharpur",
"areaName"
:
"Rohini",
"costForTwo"
:
"₹250 for two",
"cuisines": [
"Fast Food",
"Snacks",
"Street Food"
],
"avgRating"
:
4.2,
"parentId"
:
"171215",
"avgRatingString"
:
"4.2",
"totalRatingsString"
:
"6.1K+",
"sla": {
"deliveryTime"
:
31,
"lastMileTravel"
:
2.9,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"30-35 mins",
"lastMileTravelString"
:
"2.9 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-07-30 07:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹149"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-35da88ae-1027-4cc4-b050-8fb082d8512e"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/delhi/rollsome-naharpur-rohini-rest356627",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"349931",
"name"
:
"Billu's Pasta Hut",
"cloudinaryImageId"
:
"hd6uixw1ykomliddvyap",
"locality"
:
"Aggarwal Metro Heights",
"areaName"
:
"Netaji Subhash Place",
"costForTwo"
:
"₹150 for two",
"cuisines": [
"Continental",
"Pizzas",
"Italian"
],
"avgRating"
:
3.9,
"veg"
:
true,
"parentId"
:
"46040",
"avgRatingString"
:
"3.9",
"totalRatingsString"
:
"9.1K+",
"sla": {
"deliveryTime"
:
35,
"lastMileTravel"
:
6.6,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"35-40 mins",
"lastMileTravelString"
:
"6.6 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-07-30 05:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹69"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-35da88ae-1027-4cc4-b050-8fb082d8512e"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/delhi/billus-pasta-hut-aggarwal-metro-heights-netaji-subhash-place-rest349931",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"504341",
"name"
:
"Sardar Ji Late Night Kitchen",
"cloudinaryImageId"
:
"xax24mb5ktl439uewghm",
"locality"
:
"A Block",
"areaName"
:
"Paschim Vihar",
"costForTwo"
:
"₹300 for two",
"cuisines": [
"North Indian",
"Punjabi",
"Chinese",
"Biryani",
"Beverages",
"Tandoor",
"Indian"
],
"avgRating"
:
4.4,
"parentId"
:
"13225",
"avgRatingString"
:
"4.4",
"totalRatingsString"
:
"1.4K+",
"sla": {
"deliveryTime"
:
36,
"lastMileTravel"
:
6.1,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"35-40 mins",
"lastMileTravelString"
:
"6.1 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-07-30 04:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹69"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-35da88ae-1027-4cc4-b050-8fb082d8512e"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/delhi/sardar-ji-late-night-kitchen-a-block-paschim-vihar-rest504341",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"252104",
"name"
:
"Sardar Ji Late Night Kitchen (Rajouri Garden)",
"cloudinaryImageId"
:
"j0kv8rp155o0s426id71",
"locality"
:
"C Block",
"areaName"
:
"Tagore Garden",
"costForTwo"
:
"₹300 for two",
"cuisines": [
"North Indian",
"Punjabi",
"Tandoor",
"Chinese",
"Indian",
"Kebabs",
"Beverages",
"Biryani"
],
"avgRating"
:
4.4,
"parentId"
:
"178225",
"avgRatingString"
:
"4.4",
"totalRatingsString"
:
"6.4K+",
"sla": {
"deliveryTime"
:
36,
"lastMileTravel"
:
9.4,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"35-40 mins",
"lastMileTravelString"
:
"9.4 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-07-30 04:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹69"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-35da88ae-1027-4cc4-b050-8fb082d8512e"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/delhi/sardar-ji-late-night-kitchen-rajouri-garden-c-block-tagore-garden-rest252104",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"8869",
"name"
:
"Franky Chicken Roll",
"cloudinaryImageId"
:
"883482facf8622056123a7cd7f14d5d7",
"locality"
:
"Jail Road",
"areaName"
:
"Jail Road",
"costForTwo"
:
"₹500 for two",
"cuisines": [
"Chinese"
],
"avgRating"
:
3.9,
"parentId"
:
"15943",
"avgRatingString"
:
"3.9",
"totalRatingsString"
:
"17K+",
"sla": {
"deliveryTime"
:
31,
"lastMileTravel"
:
9.8,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"30-35 mins",
"lastMileTravelString"
:
"9.8 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-07-30 04:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"60% OFF",
"subHeader"
:
"UPTO ₹120"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"3.6",
"ratingCount"
:
"338"
},
"source"
:
"GOOGLE",
"sourceIconImageId"
:
"v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-35da88ae-1027-4cc4-b050-8fb082d8512e"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/delhi/franky-chicken-roll-jail-road-rest8869",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
]
}
const Body = () => {
  return (
    <div className="Hero-section">
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search here..."
        />
        <button className="search-icon">
          <i className="bx  bx-search"></i>
        </button>
      </div>
      <div className="food-card">
        <Card 
        resData={restList}/>
    
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
