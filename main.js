menuListArray = ["Pizza Vegetariana",
"pizza de frango",
"Pizza Portuguesa",
"Pizza Quatro Queijos",
"Pizza de Calabresa",
"Pizza Extravaganza"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for (var i=0;i<menuListArray.length; i++){
   htmldata=htmldata+ menuListArray[i] + '<br>';

}
document.getElementById("displayMenu").innerHTML = htmldata;

}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="";
for (var i=0;i<menuListArray.length; i++){
    htmldata=htmldata+ menuListArray[i] + '<br>';
}
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();

}
