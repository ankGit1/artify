let getImageArray = localStorage.getItem("favorites"),
  storedImageArray = JSON.parse(getImageArray) || [];
const fav_display = document.getElementById("diaplay_images");
function disFavImg(e) {
  (fav_display.innerHTML = ""),
    e.map((e) => {
      let a = document.createElement("div");
      a.classList.add("image_contain_div");
      let t = `
        <img id=${e.id} class='pic' src=${e.urls.small} />
        <button id=${e.id} class='removeImg'>Remove</button>
        `;
      (a.innerHTML = t), fav_display.appendChild(a);
    });
}
storedImageArray.length > 0 && disFavImg(storedImageArray),
  fav_display.addEventListener("click", (e) => {
    if ("removeImg" === e.target.className) {
      let a = (storedImageArray = JSON.parse(
        localStorage.getItem("favorites")
      )).filter((a) => a.id !== e.target.id);
      localStorage.setItem("favorites", JSON.stringify(a)), disFavImg(a);
    }
  });
