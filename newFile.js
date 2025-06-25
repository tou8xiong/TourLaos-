const { searchBox, listItems } = require("./script");

searchBox.addEventListener("keyup", function () {
  const searchTerm = searchBox.value.toLowerCase();
  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? "" : "none";
  });
});
