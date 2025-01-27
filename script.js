// const box1 = document.querySelector("#box1");
// const box2 = document.querySelector("#box2");
// box1.addEventListener('click',function(){
//     console.log('1');
// });
// box2.addEventListener('click',function(){
//     console.log('1');
// });

// BELOW IS A CODE TO GENERATE RANDOM IMAGES ON THE BOXES

// const box1 = document.querySelector("#box1");
// const box2 = document.querySelector("#box2");

// // Array of random image URLs
// const randomImages = [
//  "https://picsum.photos/200/300?random=1",
//   "https://picsum.photos/200/300?random=2",
//   "https://picsum.photos/200/300?random=3",
//   "https://picsum.photos/200/300?random=4",
//   "https://picsum.photos/200/300?random=5"
// ];

// // Function to generate a random image URL
// function getRandomImage() {
//   const randomIndex = Math.floor(Math.random() * randomImages.length);
//   return randomImages[randomIndex];
// }

// // Add event listeners to the boxes
// box1.addEventListener("click", function () {
//   box1.style.backgroundImage = `url(${getRandomImage()})`;
//   box1.style.backgroundSize = "cover";
//   box1.style.backgroundPosition = "center";
// });

// box2.addEventListener("click", function () {
//   box2.style.backgroundImage = `url(${getRandomImage()})`;
//   box2.style.backgroundSize = "cover";
//   box2.style.backgroundPosition = "center";
// });


// BELOW IS THE UPDATED CODE TO SET A COUNTER ON EACH IMG

// const box1 = document.querySelector("#box1");
// const box2 = document.querySelector("#box2");

// // Array of random image URLs with an ID and click count
// const randomImages = [
//   { id: "Ava Addams", url: "img/AvaAddams.jpg", count: 0 },
//   { id: "Emmy Wills", url: "img/EmmyWills.jpg", count: 0 },
//   { id: "Jasmine Sherni", url: "img/JasmineSherni.jpg", count: 0 },
//   { id: "Lena Paul", url: "img/LenaPaul.jpg", count: 0 },
//   { id: "Nicole Aniston", url: "img/NicoleAniston.jpg", count: 0 },
// ];

// // Function to generate a random image URL
// function getRandomImage() {
//   const randomIndex = Math.floor(Math.random() * randomImages.length);
//   return randomImages[randomIndex];
// }

// // Function to set random images on page load
// function setInitialImages() {
//   let randomImageForBox1 = getRandomImage();
//   let randomImageForBox2 = getRandomImage();

//   // Ensure box1 and box2 do not display the same image on initial load
//   while (randomImageForBox1 === randomImageForBox2) {
//     randomImageForBox2 = getRandomImage();
//   }

//   box1.style.backgroundImage = `url(${randomImageForBox1.url})`;
//   box1.style.backgroundSize = "cover";
//   box1.style.backgroundPosition = "center";

//   box2.style.backgroundImage = `url(${randomImageForBox2.url})`;
//   box2.style.backgroundSize = "cover";
//   box2.style.backgroundPosition = "center";
// }

// // Call setInitialImages when the page loads
// window.addEventListener("load", setInitialImages);

// // Add event listeners to the boxes
// box1.addEventListener("click", function () {
//   const randomImage = getRandomImage();
//   box1.style.backgroundImage = `url(${randomImage.url})`;
//   box1.style.backgroundSize = "cover";
//   box1.style.backgroundPosition = "center";
  
//   // Increment the click count for the selected image
//   randomImages.forEach(image => {
//     if (image.url === randomImage.url) {
//       image.count++;
//     }
//   });

//   // Save the updated rankings to localStorage
//   localStorage.setItem('imageRankings', JSON.stringify(randomImages));
// });

// box2.addEventListener("click", function () {
//   const randomImage = getRandomImage();
//   box2.style.backgroundImage = `url(${randomImage.url})`;
//   box2.style.backgroundSize = "cover";
//   box2.style.backgroundPosition = "center";
  
//   // Increment the click count for the selected image
//   randomImages.forEach(image => {
//     if (image.url === randomImage.url) {
//       image.count++;
//     }
//   });

//   // Save the updated rankings to localStorage
//   localStorage.setItem('imageRankings', JSON.stringify(randomImages));
// });












//FETCHING IMAGES FROM LOCALDEVICE USING JSON

// Fetch images data from local JSON file
// Fetch images data from the local JSON file
// Fetch images data from the local JSON file



const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

// Variable to hold images data
let images = [];

// Function to load images from the local JSON file
function loadImages() {
  fetch("images.json")
    .then(response => response.json())
    .then(data => {
      images = data.images; // Store images in the `images` variable
      setInitialImages(); // Set images after loading the data
    })
    .catch(error => console.log("Error loading images:", error));
}

// Function to generate a random image URL
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Function to set random images on page load
function setInitialImages() {
  let randomImageForBox1 = getRandomImage();
  let randomImageForBox2 = getRandomImage();

  // Ensure box1 and box2 do not display the same image on initial load
  while (randomImageForBox1 === randomImageForBox2) {
    randomImageForBox2 = getRandomImage();
  }

  box1.style.backgroundImage = `url(${randomImageForBox1.url})`;
  box1.style.backgroundSize = "cover";
  box1.style.backgroundPosition = "center";

  box2.style.backgroundImage = `url(${randomImageForBox2.url})`;
  box2.style.backgroundSize = "cover";
  box2.style.backgroundPosition = "center";
}

// Call setInitialImages when the page loads
window.addEventListener("load", function () {
  loadImages();
});

// Add event listeners to the boxes
box1.addEventListener("click", function () {
  const selectedImage = getRandomImage();
  box1.style.backgroundImage = `url(${selectedImage.url})`;
  box1.style.backgroundSize = "cover";
  box1.style.backgroundPosition = "center";

  // Increment the click count for the selected image
  images.forEach(image => {
    if (image.url === selectedImage.url) {
      image.clicks++;
    }
  });

  // Save the updated rankings to localStorage
  localStorage.setItem("imageRankings", JSON.stringify(images));
});

box2.addEventListener("click", function () {
  const selectedImage = getRandomImage();
  box2.style.backgroundImage = `url(${selectedImage.url})`;
  box2.style.backgroundSize = "cover";
  box2.style.backgroundPosition = "center";

  // Increment the click count for the selected image
  images.forEach(image => {
    if (image.url === selectedImage.url) {
      image.clicks++;
    }
  });

  // Save the updated rankings to localStorage
  localStorage.setItem("imageRankings", JSON.stringify(images));
});
