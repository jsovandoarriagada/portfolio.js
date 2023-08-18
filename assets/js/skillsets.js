const skillsShowcase = document.querySelector(".skills__showcase");
let skillsets = [];

const loadSkillsets = async () => {
  const response = await fetch("./assets/data/skillsets.json");
  const data = await response.json();
  skillsets = data.skillsets;
  displaySkillsets();
};

const displaySkillsets = () => {
  skillsets.forEach((skillset) => {
    skillsShowcase.innerHTML += `
      <div class="skillset">
        <h3 class="skillset__title">${skillset[0].title}</h3>
        <div class="skillset__container">
          <div class="skillset__container--left">
            <div class="skill">
              <div class="skill__icon">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <p class="skill__name">${skillset[1][0].name}<span>${skillset[1][0].level}</span></p>
            </div>
            <div class="skill">
              <div class="skill__icon">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <p class="skill__name">${skillset[1][1].name}<span>${skillset[1][1].level}</span></p>
            </div>
            <div class="skill">
              <div class="skill__icon">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <p class="skill__name">${skillset[1][2].name}<span>${skillset[1][2].level}</span></p>
            </div>
            <div class="skill">
              <div class="skill__icon">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <p class="skill__name">${skillset[1][3].name}<span>${skillset[1][3].level}</span></p>
            </div>
          </div>
          <div class="skillset__container--right">
            <div class="skill">
              <div class="skill__icon">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <p class="skill__name">${skillset[2][0].name}<span>${skillset[2][0].level}</span></p>
            </div>
            <div class="skill">
              <div class="skill__icon">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <p class="skill__name">${skillset[2][1].name}<span>${skillset[2][1].level}</span></p>
            </div>
            <div class="skill">
              <div class="skill__icon">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <p class="skill__name">${skillset[2][2].name}<span>${skillset[2][2].level}</span></p>
            </div>
            <div class="skill">
              <div class="skill__icon">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <p class="skill__name">${skillset[2][3].name}<span>${skillset[2][3].level}</span></p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};

loadSkillsets();
