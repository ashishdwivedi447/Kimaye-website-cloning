let cartitems=JSON.parse(localStorage.getItem("kimayecart"))||[]
     
let total=0;
displaycart(cartitems)

function displaycart(cartitems){
document.querySelector("#append-cart-item").innerHTML=""

 cartitems.forEach((elem,index)=>{
   
     let rowdiv=document.createElement("div");
     rowdiv.id="rowdiv";

     let div1=document.createElement("div");
     div1.id="firstcol";
    

     let button=document.createElement("button")
     button.className="cross"
     button.innerText="✕"

     button.addEventListener("click",()=>{
        cartsum_afterdeletion(cartitems,index)
         deletetask(index);
     })

     let image=document.createElement("img");
     image.className="image";
     image.src=elem.image;

     let p=document.createElement("p");

     p.className="fruits"
     p.innerText=elem.fruits_name;

     div1.append(button,image,p);

      let div2=document.createElement("div");
      div2.innerText=elem.price;
      div2.className="div2"

      let table1=document.createElement("table");
      table1.className="table1"

      let tr=document.createElement("tr")

      let leftbutton=document.createElement("button");

      leftbutton.className="button"
      leftbutton.innerText="-"

      let rightbutton=document.createElement("button");
      rightbutton.className="button";
      rightbutton.innerText="+";

      let td1=document.createElement("td")

      td1.append(leftbutton)
      let td2=document.createElement("td")

     td2.innerText=1;

     let td3=document.createElement("td");

     td3.append(rightbutton)

     tr.append(td1,td2,td3)

  table1.append(tr);

     let div3=document.createElement("div");
     div3.className="div3"

     div3.append(table1);

     table1.append()

     let div4=document.createElement("div");
     div4.className="div4"

     div4.innerText=elem.price;

     rowdiv.append(div1,div2,div3,div4);

     document.querySelector("#append-cart-item").append(rowdiv);
 })
 carttotal(cartitems);
}

       function deletetask(index){
        cartitems.splice(index,1);
          
    
        
           localStorage.setItem("kimayecart",JSON.stringify(cartitems));
           
           displaycart(cartitems);
           
       }
        
       function carttotal(cartitems){
       for(let i=0;i<cartitems.length;i++){
           total+=cartitems[i].price;
       }
      console.log(total);
       }


      
       let total1=document.createElement("p");
       total1.innerText=`Subtotal:₹${total} ` 
       total1.style.fontSize="35px"
       let line=document.createElement("hr");

       let subtotal=document.createElement("h");

       subtotal.innerText=`Total: ₹  ${total}`

       subtotal.style.fontSize="50px";

       document.getElementById("subtotal").append(total1,line,subtotal)

       document.querySelector("#checkoutbtn").addEventListener("click",()=>{
           window.location.href="address.html"
       })