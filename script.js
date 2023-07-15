const toggle = document.getElementById("toggle-icon");
const dropdown = document.querySelector(".m-nav-wrapper");

toggle.addEventListener("click", () => {
   dropdown.style.right = "0";
   console.log("clicked");
});
