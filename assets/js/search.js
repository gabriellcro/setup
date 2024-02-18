const filterElement = document.querySelector("#filter");
const cards = document.querySelectorAll("li");

filterElement.addEventListener("input", filterCards);

function filterCards() {
  if (!filterElement) return;

  for (let card of cards) {
    let tag = card.querySelector(".tag").textContent;
    let title = card.querySelector(".title").textContent.toLowerCase();
    let filterText = filterElement.value.toLowerCase();
    let shhowCard = tag.includes(filterText) | title.includes(filterText);

    card.style.display = shhowCard ? "flex" : "none";
  }
}
