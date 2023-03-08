let Item = document.getElementById("Item");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");
let open = document.getElementById("open");
let close = document.getElementById("close");

let Shoes = document.getElementById("Shoes");
let Clothes = document.getElementById("Clothes");
let Electronics = document.getElementById("Electronics");
let Furniture = document.getElementById("Furniture");
let Tbody = document.getElementById("body");

//close.style.transition("all 500ms ease");

function Open(){
    // close.transition = "all 500ms ease";
    // open.transition = "all 500ms ease";
    close.style.display = "block";
    open.style.display = "none";
    Tbody.style.display = "block";
    Tbody.style.display = "flex";
    Tbody.style.flexDirection = "row";
}

function Close(){
    // close.transition = "all 500ms ease";
    // open.transition = "all 500ms ease";
    close.style.display = "none";
    open.style.display = "block";
    Tbody.style.display = "none";
}


function ShowContent(){
    Tbody.style.display = "none";
    let Search = Item.value;
    let currentUrl = window.location.href;
    // if search input is empty
    if(Search.length <= 0){
        result.innerHTML = "";
    }
    // Search input with various inputs
    else if(Search == "shoes" && "Shoes"){
        result.innerHTML = `
            
            <h3 class="header">${Search}<h3>
            <div class = "Packages">
                <div class = "Package">
                    <img src="https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&w=600" class="img">
                    <h3>Name: <p>Nike 720Spa</p></h3>
                    <h3>Price: <p>$300</p></h3>
                </div>

                <div class = "Package">
                    <img src="https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&w=600" class="img">
                    <h3>Name: <p>Nike 720Spa</p></h3>
                    <h3>Price: <p>$300</p></h3>
                </div>

                <div class = "Package">
                    <img src="https://images.pexels.com/photos/5704719/pexels-photo-5704719.jpeg?auto=compress&cs=tinysrgb&w=600" class="img">
                    <h3>Name: <p>Nike 720Spa</p></h3>
                    <h3>Price: <p>$300</p></h3>
                </div>
            </div>
        
        
        
        `;
    }
    else if(Search == "electronics" && "Electronics"){
        result.innerHTML = "Electronics";
    }
    else if(Search == "furniture" && "Furniture"){
        result.innerHTML = "Furniture";
    }
}

searchBtn.addEventListener("click", ShowContent);
window.addEventListener("load", ShowContent);

// objects