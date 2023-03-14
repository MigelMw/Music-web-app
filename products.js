
const shoes = [
    {
      name: "Adidas Ultraboost",
      brand: "Adidas",
      image: "https://images.pexels.com/photos/14174472/pexels-photo-14174472.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 179.99,
      id:"shoe1",
      colors: ["black", "white", "blue"],
      sizes: [6, 7, 8, 9, 10, 11],
      isAvailable: true,
      features: {
        sole: "Boost technology",
        upper: "Primeknit",
        closure: "Laces"
      }
    },
    {
      name: "Converse Chuck Taylor All Star",
      brand: "Converse",
      image:"https://images.pexels.com/photos/13924826/pexels-photo-13924826.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 59.99,
      id:"shoe2",
      colors: ["black", "white", "red"],
      sizes: [5, 6, 7, 8, 9, 10],
      isAvailable: true,
      features: {
        sole: "Rubber",
        upper: "Canvas",
        closure: "Laces"
      }
    },
    {
      name: "New Balance Fresh Foam 1080v11",
      brand: "New Balance",
      image:"https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 149.99,
      id:"shoe3",
      colors: ["black", "grey", "blue"],
      sizes: [6, 7, 8, 9, 10, 11, 12],
      isAvailable: true,
      features: {
        sole: "Fresh Foam technology",
        upper: "Engineered mesh",
        closure: "Laces"
      }
    }
];
  
let ShoeAvailable = 3;

const electronics = [  
    {    
    name: "Apple iPhone 13",    
    brand: "Apple",    
    price: 799,    
    id:1000,
    colors: ["black", "white", "blue", "pink"],
    storage: [128, 256, 512],
    isAvailable: true,
    features: {
      display: "6.1-inch Super Retina XDR display",
      camera: "Dual-camera system with 12MP Ultra Wide and Wide cameras",
      battery: "Built-in rechargeable lithium-ion battery"
    },
    image: "https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Samsung Galaxy S21",
    brand: "Samsung",
    price: 799,
    id:1001,
    colors: ["black", "silver", "violet"],
    storage: [128, 256],
    isAvailable: true,
    features: {
      display: "6.2-inch Dynamic AMOLED 2X display",
      camera: "Triple camera system with 12MP Ultra Wide, Wide, and Telephoto cameras",
      battery: "4000mAh battery with fast charging and wireless charging capabilities"
    },
    image: "https://images.pexels.com/photos/13302159/pexels-photo-13302159.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Sony WH-1000XM4",
    brand: "Sony",
    price: 349,
    id:1002,
    colors: ["black", "silver"],
    isAvailable: true,
    features: {
      noiseCancellation: "Industry-leading noise cancellation",
      batteryLife: "Up to 30 hours of battery life",
      voiceAssistant: "Alexa and Google Assistant compatible"
    },
    image: "https://images.pexels.com/photos/5382359/pexels-photo-5382359.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

// const shoes = [
//     { id: "shoe1", brand: "Nike", model: "Air Max 97", color: "Black", size: 10 },
//     { id: "shoe2", brand: "Adidas", model: "UltraBoost", color: "White", size: 9 },
//     { id: "shoe3", brand: "Reebok", model: "Classic Leather", color: "Red", size: 8 }
//   ];





// Add a click event listener to each shoe item

let back = document.getElementById("back").addEventListener("click", () =>{
    window.location.href = "Index.html";
});
