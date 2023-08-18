const coursesLeft = document.querySelector(".courses--left");
const coursesRight = document.querySelector(".courses--right");
let courses = [];

const loadCourses = async () => {
  const response = await fetch("./assets/data/courses.json");
  const data = await response.json();
  courses = data.courses;
  displayCourses();
};

const displayCourses = () => {
  courses[0].forEach((course) => {
    coursesLeft.innerHTML += `
      <div class="course">
        <img class="course__img" src="${course.platform}" alt="${course.platformName}" draggable="false" />
        <div class="course__text">
          <p>${course.name}</p>
          <p>${course.date}</p>
        </div>
        <a class="course__certificate" href="${course.certificate}" download>
          <span class="material-symbols-outlined">download</span>
        </a>
      </div>
    `;
  });

  courses[1].forEach((course) => {
    coursesRight.innerHTML += `
      <div class="course">
        <img class="course__img" src="${course.platform}" alt="${course.platformName}" draggable="false" />
        <div class="course__text">
          <p>${course.name}</p>
          <p>${course.date}</p>
        </div>
        <a class="course__certificate" href="${course.certificate}" download>
          <span class="material-symbols-outlined">download</span>
        </a>
      </div>
    `;
  });
};

loadCourses();
