const repositoryShowcase = document.querySelector(".repository__showcase");
let projects = [];

const loadRepository = async () => {
  const response = await fetch("./assets/data/repository.json");
  const data = await response.json();
  projects = data.projects;
  displayRepository();
};

const displayRepository = () => {
  projects.forEach((project) => {
    repositoryShowcase.innerHTML += `
      <div class="project">
        <div class="project__top">
          <div class="project__header">
            <div class="project__info">
              <span class="material-symbols-outlined project__info--span">info</span>
              <div class="project__bubble">
                <div class="bubble">
                  <div class="bubble__content">
                    <ul>
                      <li>👉 HTML, SCSS y JS</li>
                      <li>👉 Responsive</li>
                      <li>👉 Terminado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h4>${project.platform}</h4>
          </div>
          <img class="project__img" src="${project.preview}" alt="${project.name}" draggable="false" />
        </div>
        <div class="project__bottom">
          <div class="project__bottom--title">
               <h3>${project.name}</h3>
            <img src="${project.logo}" alt="${project.name}" class="project__bottom--img" draggable="false" />
            <p>${project.date}</p>
          </div>
          <div class="project__bottom--body">
            <div class="project__buttons">
              <a class="project__repository" href="${project.repository}" target="_blank" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a class="project__deployment" href="${project.deployment}" target="_blank" >
                <span class="material-symbols-outlined">north_east</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};

loadRepository();
