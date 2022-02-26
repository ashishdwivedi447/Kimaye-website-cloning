let pomeg={
    image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_360x.png?v=1613364164",
    fruits_name:"Pomegranate Seeds (Arils Cup) 125g",
    price:"₹ 55",
    star:"⭐⭐⭐⭐"
}


           displayprod(pomeg)

           function displayprod(pomeg){
               let main_div=document.createElement("div");
               main_div.id="main_div";
               let imagediv=document.createElement("div");
               imagediv.id="imagediv";

               let image=document.createElement("img");
               image.id="image"
               image.src=pomeg.image
               imagediv.append(image);
               let infodiv=document.createElement("div");
               infodiv.id="infodiv";
               let fruitdiv=document.createElement("div");
               fruitdiv.className="fruitdiv";

               let fruittag=document.createElement("h3");
               fruittag.innerText=pomeg.fruits_name;
               fruittag.className="fruitname"

               fruitdiv.append(fruittag);

               let rating=document.createElement("p");
               rating.innerText=pomeg.star+"1 review";

               let desdiv=document.createElement("div");
               desdiv.className="desdiv";
               desdiv.innerHTML=`Kimaye Arils are non-frozen, non-dried, fresh Pomegranate seeds.<br>Pop open the cup to enjoy arils as fresh as a pomegranate opened at your home.`

               let orgintag=document.createElement("h4");
               orgintag.className="origin"
               orgintag.innerText="Origin : India";

               let pricetag=document.createElement("p");
               pricetag.className="price";
               pricetag.innerText=pomeg.price;

               let buttondiv=document.createElement("div");
               buttondiv.className="button";

               let quantdiv=document.createElement("div");
               quantdiv.className="quatdiv";
               let table=document.createElement("table");
               table.className="table";
               let tr=document.createElement("tr");
               let td1=document.createElement("td")
               let buttondec=document.createElement("button");
               buttondec.innerText="-";
               td1.append(buttondec);
               let td2=document.createElement("td")
               td2.innerText="1"
               let td3=document.createElement("td")
               let buttoninc=document.createElement("button");
               buttoninc.innerText="+";
               td3.append(buttoninc);
               tr.append(td1,td2,td3);
               table.append(tr);
               quantdiv.append(table);
               let cartbutton=document.createElement("button");
               cartbutton.className="addtocart";
               cartbutton.innerText="Add to Cart"

               buttondiv.append(quantdiv,cartbutton);
               let line=document.createElement("hr");
               line.className="line";

               let storage_ins=document.createElement("h5");
               storage_ins.className="storage"
               storage_ins.innerText="Storage Instructions:"

               let shelf=document.createElement("p");
               shelf.className="shelf"
               shelf.innerText="- Shelf Life: 10 days when stored at temperature of 2 to 5⁰C";

               infodiv.append(fruitdiv,rating,desdiv,orgintag,pricetag,buttondiv,line,storage_ins,shelf);

               main_div.append(imagediv,infodiv);

               document.getElementById("append-prod").append(main_div);
           }