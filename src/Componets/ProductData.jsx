import HeadImage from "../assets/HeadPhone.png"
import TishirtsImage from "../assets/tishirts.png"
import ShoesImage from "../assets/shoes.png"
import WatchImage from "../assets/watchs.png"
import PantsImage from "../assets/pants.png"
import LaptopImage from "../assets/Laptops.png"
import BagImage from "../assets/bags.png"
import SandalImage from "../assets/Sandal.png"

export const Productdata = [

{
id:1,
Image:HeadImage,
Name:"HeadPhone",
Price:1500,
oldPrice:1700,
reviewsCount:140,
rating:"⭐⭐⭐⭐",
Descriptions:"Experience immersive sound with our high-quality headphones designed for music lovers and gamers.",
sizes:["S","M","L","XL"],
overview:"Premium wireless headphones with deep bass and crystal-clear audio for everyday use.",
features:[
"High quality sound",
"Comfortable ear cushions",
"Lightweight design",
"Long battery life"
],
specifications:{
material:"Plastic & Metal",
type:"Wireless",
weight:"0.8kg"
},
extraFeatures:[
{title:"Warranty", text:"6-month warranty included"},
{title:"Fast Delivery", text:"Delivery within 2 days"}
],
reviews:[
{name:"Harper Jackson", time:"3 months ago", title:"Amazing Sound", text:"Sound quality is excellent."}
],
category:"electronics"
},

{
id:2,
Image:TishirtsImage,
Name:"Tshirts",
Price:550,
oldPrice:650,
reviewsCount:120,
rating:"⭐⭐⭐",
Descriptions:"Soft cotton t-shirts for everyday comfort.",
sizes:["S","M","L","XL","XXL"],
overview:"Comfortable cotton t-shirts designed for casual wear.",
features:[
"Soft cotton",
"Breathable fabric",
"Stylish fit"
],
specifications:{
material:"Cotton",
type:"Casual Wear",
weight:"0.4kg"
},
extraFeatures:[
{title:"Easy Wash", text:"Machine washable"},
{title:"Comfort Fit", text:"All-day comfort"}
],
reviews:[
{name:"Harper Jackson", time:"2 months ago", title:"Nice Quality", text:"Very comfortable"}
],
category:"fashion"
},

{
id:3,
Image:ShoesImage,
Name:"Shoes",
Price:1500,
oldPrice:1800,
reviewsCount:180,
rating:"⭐⭐⭐⭐",
Descriptions:"Comfortable stylish shoes for daily use.",
sizes:["6","7","8","9","10"],
overview:"Premium shoes built for comfort and durability.",
features:[
"Soft cushioning",
"Lightweight sole",
"Breathable material"
],
specifications:{
material:"Leather",
type:"Slip-on",
weight:"1.2kg"
},
extraFeatures:[
{title:"Warranty", text:"6 months warranty"},
{title:"Durable", text:"Long lasting material"}
],
reviews:[
{name:"Harper Jackson", time:"3 months ago", title:"Comfortable", text:"Very nice shoes"}
],
category:"shoe"
},

{
id:4,
Image:WatchImage,
Name:"Watch",
Price:1800,
oldPrice:2100,
reviewsCount:90,
rating:"⭐⭐⭐⭐",
Descriptions:"Stylish modern watch.",
sizes:["Free Size"],
overview:"Elegant watch with premium design and accurate timekeeping.",
features:[
"Water resistant",
"Premium steel body",
"Stylish design"
],
specifications:{
material:"Steel",
type:"Analog",
weight:"0.3kg"
},
extraFeatures:[
{title:"Warranty", text:"1 year warranty"},
{title:"Gift Ready", text:"Comes in premium box"}
],
reviews:[
{name:"Rahul Sharma", time:"1 month ago", title:"Nice Watch", text:"Looks premium"}
],
category:"watches"
},

{
id:5,
Image:PantsImage,
Name:"Pants",
Price:550,
oldPrice:700,
reviewsCount:70,
rating:"⭐⭐⭐⭐",
Descriptions:"Comfortable everyday pants.",
sizes:["S","M","L","XL"],
overview:"Stylish pants with modern fit and stretch comfort.",
features:[
"Stretch fabric",
"Durable stitching",
"Comfort fit"
],
specifications:{
material:"Cotton Blend",
type:"Casual",
weight:"0.6kg"
},
extraFeatures:[
{title:"Flexible", text:"Easy movement"},
{title:"Long Lasting", text:"Durable material"}
],
reviews:[
{name:"Amit Verma", time:"2 months ago", title:"Good Fit", text:"Fits perfectly"}
],
category:"fashion"
},

{
id:6,
Image:LaptopImage,
Name:"Laptop",
Price:1500,
oldPrice:1800,
reviewsCount:200,
rating:"⭐⭐⭐⭐⭐",
Descriptions:"Powerful laptop for work and entertainment.",
sizes:["13 inch","15 inch","17 inch"],
overview:"High-performance laptop with fast processing and large storage.",
features:[
"Fast processor",
"Large storage",
"Lightweight"
],
specifications:{
material:"Metal",
type:"Electronics",
weight:"2kg"
},
extraFeatures:[
{title:"Warranty", text:"1 year warranty"},
{title:"Support", text:"24/7 support"}
],
reviews:[
{name:"John Doe", time:"1 month ago", title:"Excellent", text:"Very fast laptop"}
],
category:"electronics"
},

{
id:7,
Image:BagImage,
Name:"Bag",
Price:1000,
oldPrice:1200,
reviewsCount:85,
rating:"⭐⭐⭐",
Descriptions:"Stylish and durable bag.",
sizes:["Medium","Large"],
overview:"Spacious bag perfect for daily use and travel.",
features:[
"Spacious compartments",
"Strong material",
"Modern design"
],
specifications:{
material:"Polyester",
type:"Backpack",
weight:"0.9kg"
},
extraFeatures:[
{title:"Water Resistant", text:"Protects from rain"},
{title:"Comfort", text:"Soft shoulder straps"}
],
reviews:[
{name:"Priya Singh", time:"2 months ago", title:"Nice Bag", text:"Very useful"}
],
category:"fashion"
},

{
id:8,
Image:SandalImage,
Name:"Sandal",
Price:1500,
oldPrice:1700,
reviewsCount:60,
rating:"⭐⭐⭐⭐⭐",
Descriptions:"Comfortable sandals for daily wear.",
sizes:["6","7","8","9"],
overview:"Lightweight sandals with soft cushioning.",
features:[
"Soft sole",
"Breathable design",
"Stylish look"
],
specifications:{
material:"Rubber",
type:"Casual",
weight:"0.5kg"
},
extraFeatures:[
{title:"Comfort", text:"All day comfort"},
{title:"Lightweight", text:"Easy to wear"}
],
reviews:[
{name:"Ravi Kumar", time:"3 months ago", title:"Very Comfortable", text:"Loved it"}
],
category:"shoe"
}

]

export default Productdata;