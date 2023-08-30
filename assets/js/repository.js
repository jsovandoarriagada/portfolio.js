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
        <div class="project__header">
        <h4>${project.platform}</h4>
          <img class="project__img" src="${project.preview}" alt="${project.name}" draggable="false" />
        </div>
        <div class="project__content">
          <div class="project__content--title">
               <h3>${project.name}</h3>
            <img src="${project.logo}" alt="${project.name}" class="project__content--img" draggable="false" />
            <p>${project.date}</p>
          </div>
          <div class="project__content--body">
            <ul class="project__ul">
              <li class="project__li">
                <h4>👉 ${project.technologies}</h4>
              </li>
              <li class="project__li">
                <h4>👉 ${project.resolution}</h4>
              </li>
            </ul>
            <div class="project__buttons">
              <a class="project__repository" href="${project.repository}" target="_blank" >GitHub</a>
              <a class="project__deployment" href="${project.deployment}" target="_blank" >Visitar</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};

loadRepository();
