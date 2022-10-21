function foo(){
    var res=document.getElementById("fname").value;
    var res1=document.getElementById("lname").value;
    var res2=document.getElementById("add").value;
    var res3=document.getElementById("pin").value;
    var res4=document.querySelector("male").value;
    var res5=document.querySelector("#food").value;
    var res6=document.getElementById("state").value;
    var res7=document.getElementById("country").value;
    console.log(res,res1,res2,res3,res4,res5,res6,res7);
}


var table=document.createElement("table");
     table.setAttribute("class","table");
     
     var thead=document.createElement("thead");
     thead.setAttribute("class","thead-dark");

     var tr=document.createElement("tr");

     var th=document.createElement("th");
     th.setAttribute("scope","col");
     th.innerHTML="First Name";

     var th1=document.createElement("th");
     th1.setAttribute("scope","col");
     th1.innerHTML="Last Name";

     var th2=document.createElement("th");
     th2.setAttribute("scope","col");
     th2.innerHTML="Address";

     var th3=document.createElement("th");
     th3.setAttribute("scope","col");
     th3.innerHTML="Pincode";

     var th4=document.createElement("th");
     th4.setAttribute("scope","col");
     th4.innerHTML="Gender";

     var th5=document.createElement("th");
     th5.setAttribute("scope","col");
     th5.innerHTML="Choice of food";

     var th6=document.createElement("th");
     th6.setAttribute("scope","col");
     th6.innerHTML="State";

     var th7=document.createElement("th");
     th7.setAttribute("scope","col");
     th7.innerHTML="Country";
    var tr1=document.createElement("tr");

     var tbody=document.createElement("tbody");

     var td=document.createElement("td");
     td.innerHTML="";
     var td1=document.createElement("td");
     td1.innerHTML="";
     var td2=document.createElement("td");
     td2.innerHTML="";
     var td3=document.createElement("td");
     td3.innerHTML="";
     var td4=document.createElement("td");
     td4.innerHTML="";
     var td5=document.createElement("td");
     td5.innerHTML="";
     var td6=document.createElement("td");
     td6.innerHTML="";
     var td7=document.createElement("td");
     td7.innerHTML="";

    table.append(thead,tbody);
    tr.append(th,th1,th2,th3,th4,th5,th6,th7);
    thead.append(tr);

    tr1.append(td,td1,td2,td3,td4,td5,td6,td7);
    tbody.append(tr1);

    document.body.append(table);

    