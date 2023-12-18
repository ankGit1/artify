import { createApi } from "unsplash-js";

const displayDiv = document.getElementById("diaplay_images");
const categoryTitle = document.getElementById("categoryTitle");

const unsplash = createApi({
  accessKey: "9vx8r413brlRKpWFvy4vDW3JgQ1wH9-uB4jlzjDFIIQ",
});

var storeData = [];

export const fetchImages = async (category) => {
  console.log(category);
  try {
    const result = await unsplash.search.getPhotos({
      query: category,
      page: 1,
      perPage: 16,
      orientation: "portrait",
    });

    if (result.type === "success") {
      displayDiv.innerHTML = "";
      const photos = result.response.results;
      const getUrls = photos.map((i) => {
        const node = document.createElement("div");
        node.classList.add("image_contain_div");
        const element = `
        <img id=${i.id} class='pic' src=${i.urls.small} />
        <button id=${i.id} class='favouriteBtn'>Add to favourite</button>
        `;
        node.innerHTML = element;
        displayDiv.appendChild(node);
      });
      categoryTitle.innerText = category;
      storeData = photos;
      console.log(storeData);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// exporting storeData
export const getStoreData = () => {
  console.log(storeData);
  return storeData;
};
