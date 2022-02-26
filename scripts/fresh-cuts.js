let data=[{
    image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_360x.png?v=1613364164",
    fruits_name:"Pomegranate Seeds (Arils Cup) 125g",
    price:55,
},
{
    image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/24d0f9c9-fe83-40a3-84ab-300e73e4ff8d_540x.png?v=1611811511",
    fruits_name:"Coconut Chunks Cup (100g)",
    price:51,
},
{
    image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/0fce7fd6-f30e-45df-8c52-234acbd62023_360x.png?v=1611811509",
    fruits_name:"Grated Coconut Punnet",
    price:51,
},
{
    image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min_360x.png?v=1614324446",
    fruits_name:"kimaye Arils-Coco cup",
    price:55,
}];



let main_div=document.getElementById("append-prod")
display_prod(data)

function display_prod(data){
    let count=0;
    let count1=0;
data.forEach((elem)=>{

    let product_maindiv=document.createElement("div");
    product_maindiv.className="main_div";

    let prod_image=document.createElement("img")
    prod_image.src=elem.image;

    prod_image.className="prod_image"
   
   prod_image.id="image"+count++;

   let button=document.createElement("button");
    button.className="addtocart";
    button.id="button"+count1++;
    button.innerText="Add to Cart";

    button.onclick=function (event){
        addtocart(elem);
    }

    let product_name_tag=document.createElement("p");
      
    product_name_tag.className="product_name_tag"

    product_name_tag.innerText=elem.fruits_name;

    let price_tag=document.createElement("p");
     
    price_tag.className="price_tag"
    
    price_tag.innerText=`₹ ${elem.price}`;
  
    product_maindiv.append(prod_image,button,product_name_tag,price_tag)
    main_div.append(product_maindiv); 

   
  
    })


}

let pomeg=document.getElementById("image0")
let coco=document.getElementById("image1")
let grated=document.getElementById("image2")
let arils=document.getElementById("image3")

pomeg.addEventListener("click",(index)=>{
      window.location.href="pomeg.html"
     } );
    coco.addEventListener("click",(index)=>{
         window.location.href="coco.html"
    })
    grated.addEventListener("click",(index)=>{
        window.location.href="grated.html"
    })
    arils.addEventListener("click",(index)=>{
        window.location.href="arils.html"
    })
   


function addtocart(elem){
let cart=JSON.parse(localStorage.getItem("kimayecart"))||[];

cart.push(elem);
localStorage.setItem("kimayecart",JSON.stringify(cart));
}