let Item = document.getElementById("Item");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");
let open = document.getElementById("open");
let close = document.getElementById("close");
let shoeList = document.getElementById("#product-result");


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
        shoes.forEach(shoe => {
            const shoeItem = document.createElement("div");
            const ShoeImage = document.createElement("div");
            const H3 = document.createElement("h3");
            shoeItem.setAttribute("class", "theObject");
            shoeItem.setAttribute("id", shoe.id);
            ShoeImage.setAttribute("class", "img");
            ShoeImage.style.backgroundImage = `url(${shoe.image})`;
            H3.textContent = `${shoe.brand} $${shoe.price}`;
            shoeItem.style.cursor = "pointer";
            result.appendChild(shoeItem);
            shoeItem.appendChild(ShoeImage);
            shoeItem.appendChild(H3);
          });

            const shoeItems = document.querySelectorAll(".theObject");
            shoeItems.forEach(shoeItem => {
            shoeItem.addEventListener("click", () => {
                window.location.href = "Product.html";
                const selectedShoe = shoes.find(shoe => shoe.id === shoeItem.id);
                console.log("selectedShoe:", selectedShoe);
                let container = document.createElement("div");
                let ShoeImage = document.createElement("div");
                let description = document.createElement("div");
                let name = document.createElement("h3");
                let price = document.createElement("h3");
                let colors = document.createElement("h3");

                container.setAttribute("id", "package-container");
                ShoeImage.setAttribute("class", "img");
                description.setAttribute("id", "package-description");
                name.setAttribute("id", "package-name");
                price.setAttribute("id", "package-price");
                colors.setAttribute("id", "available-colors");

                ShoeImage.style.backgroundImage = `url(${selectedShoe.image})`;
                name.textContent = "Shoe name: " + `${selectedShoe.name}`;
                price.textContent = "Price: " + "$" + `${selectedShoe.price}`;
                colors.textContent = "Available colors: " +`${selectedShoe.colors}`;

                shoeList.appendChild(container);
                container.appendChild(ShoeImage);
                container.appendChild(description);
                description.appendChild(name);
                description.appendChild(price);
                description.appendChild(colors);
        });
});

    }
    // else if(Search == "electronics" && "Electronics"){
    //     result.innerHTML = `
            
    //         <h3 class="header">${Search}<h3>
    //         <div class = "Packages">
    //             <div class = "Package" id="package">
    //                 <img src="${electronics[0].image}" class="img">
    //                 <h3>Name: <p>${electronics[0].name}</p></h3>
    //                 <h3>Price: <p>$${electronics[0].price}</p></h3>
    //             </div>

    //             <div class = "Package" id="package">
    //                 <img src="${electronics[1].image}" class="img">
    //                 <h3>Name: <p>${electronics[1].name}</p></h3>
    //                 <h3>Price: <p>$${electronics[1].price}</p></h3>
    //             </div>

    //             <div class = "Package" id="package">
    //                 <img src="${electronics[2].image}" class="img">
    //                 <h3>Name: <p>${electronics[2].name}</p></h3>
    //                 <h3>Price: <p>$${electronics[2].price}</p></h3>
    //             </div>
    //         </div>
        
        
    //     `;
    //     let package = document.getElementById("package");
    //     package.onmouseenter = window.location.href = "Product.html";
    // }
    // else if(Search == "furniture" && "Furniture"){
    //     result.innerHTML = "Furniture";
    // }


}

searchBtn.addEventListener("click", ShowContent);
window.addEventListener("load", ShowContent);


// 