// Function to display rankings in rankBox
// function displayRankings() {
//     const rankBoxDiv = document.querySelector(".rankBox");
//     const imageRankings = JSON.parse(localStorage.getItem('imageRankings')) || [];

//     if (imageRankings.length > 0) {
//         let rankListHTML = "<h3>Image Rankings:</h3>";
        
//         // Sort the images by the number of clicks
//         const sortedRankings = imageRankings.sort((a, b) => b.count - a.count);
        
//         sortedRankings.forEach(image => {
//             rankListHTML += `
//                 <div class="rankItem">
//                     <img src="${image.url}" alt="${image.id}" style="width: 100px; height:150px;">
//                     <p>${image.id}: ${image.count} clicks</p>
//                 </div>
//             `;
//         });

//         rankBoxDiv.innerHTML = rankListHTML;
//     } else {
//         rankBoxDiv.innerHTML = "<p>No rankings available yet. Please visit the main page and make some clicks.</p>";
//     }
// }

// // Display rankings when the page loads
// window.addEventListener("load", displayRankings);


// BASED ON JSON FILE

// function displayRankings() {
//     const rankBoxDiv = document.querySelector(".rankBox");
//     const imageRankings = JSON.parse(localStorage.getItem('imageRankings')) || [];
  
//     if (imageRankings.length > 0) {
//       let rankListHTML = "<h3>Image Rankings:</h3>";
  
//       // Sort the images by the number of clicks
//       const sortedRankings = imageRankings.sort((a, b) => b.clicks - a.clicks);
  
//       sortedRankings.forEach(image => {
//         rankListHTML += `
//           <div class="rankItem">
//             <img src="${image.url}" alt="${image.id}" style="width: 75px; height:100px;">
//             <p>${image.id}: ${image.clicks} clicks</p>
//           </div>
//         `;
//       });
  
//       rankBoxDiv.innerHTML = rankListHTML;
//     } else {
//       rankBoxDiv.innerHTML = "<p>No rankings available yet. Please visit the main page and make some clicks.</p>";
//     }
//   }
  
//   // Display rankings when the page loads
//   window.addEventListener("load", displayRankings);
  



// SHOW ONLY THOSE IMAGES WHICH HAVE SOME RANKING



function displayRankings() {
    const rankBoxDiv = document.querySelector(".rankBox");
    const imageRankings = JSON.parse(localStorage.getItem('imageRankings')) || [];

    // Filter out images with 0 clicks
    const rankedImages = imageRankings.filter(image => image.clicks > 0);

    if (rankedImages.length > 0) {
        let rankListHTML = "<h3>Image Rankings:</h3>";

        // Sort images by their click counts in descending order
        rankedImages.sort((a, b) => b.clicks - a.clicks);

        rankedImages.forEach(image => {
            rankListHTML += `
                <div class="rankItem">
                    <img src="${image.url}" alt="${image.id}">
                    <p>${image.id}: ${image.clicks} clicks</p>
                </div>
            `;
        });

        rankBoxDiv.innerHTML = rankListHTML;
    } else {
        // No ranked images to show
        rankBoxDiv.innerHTML = "<p>No images have been ranked yet. Please visit the main page and rank some images.</p>";
    }
}

// Display rankings on page load
window.addEventListener("load", displayRankings);

