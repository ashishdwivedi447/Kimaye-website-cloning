let account_details=JSON.parse(localStorage.getItem("userdatabase"))
console.log(account_details)
let introdiv=document.createElement("div");

introdiv.innerText=`Hello${account_details[0].fname} ${account_details[0].lname} (not${account_details[0].fname}${account_details[0].lname} )? Sign out`;

let orderdiv=document.createElement("div");

orderdiv.innerText=`Order History:`

let account=document.createElement("div");

account.innerText=`Account details:`

let namediv=document.createElement('div');
namediv.innerText=`Name: ${account_details[0].fname} ${account_details[0].lname}`;

let emaildiv=document.createElement('div');
emaildiv.innerText=`Name: ${account_details[0].emailId}`;

document.querySelector("#append-details").append(introdiv,orderdiv,account,namediv,emaildiv);