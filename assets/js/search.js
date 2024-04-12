const filterElement = document.querySelector("#filter");
const cards = document.querySelectorAll("li");

filterElement.addEventListener("input", filterCards);

function filterCards() {
  if (!filterElement) return;

  cards.forEach((card) => {
    let tag = card.querySelector(".tag").textContent;
    let title = card.querySelector(".title").textContent.toLowerCase();
    let filterText = filterElement.value.toLowerCase();
    let showCard = tag.includes(filterText) | title.includes(filterText);

    card.style.display = showCard ? "flex" : "none";
  });
}
