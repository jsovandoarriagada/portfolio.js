const aboutShowcase = document.querySelector(".about__showcase");
let facts = [];

const loadFacts = async () => {
  const response = await fetch("./assets/data/facts.json");
  const data = await response.json();
  facts = data.facts;
  displayFacts();
};

const displayFacts = () => {
  facts.forEach((fact) => {
    aboutShowcase.innerHTML += `
      <div class="fact">
        <p>${fact.fact}<span>${fact.span}</span></p>
      </div>
    `;
  });
};

loadFacts();
