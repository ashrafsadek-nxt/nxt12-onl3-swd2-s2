/*toggle dark*/
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const body = document.body;

document.getElementById('toggle').addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    moonIcon.style.display = 'inline';
    sunIcon.style.display = 'none';
  } else {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline';
  }
});

/*text flows in*/
const text = "HELLO I'M SALMA";
const headline = document.getElementById("moving-heading");

let i = 0;
function typeWriter() {
  if (i < text.length) {
    headline.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();


/*fading effect*/
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.15 });

faders.forEach(el => observer.observe(el));


/*responsive nav menu */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

/*putting projects in an object*/
const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime officiis mollitia voluptate impedit laboriosam temporibus eligendi natus esse quam nostrum provident quia, nihil nisi ratione eveniet! Eius, voluptates neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime officiis mollitia voluptate impedit laboriosam temporibus eligendi natus esse quam nostrum provident quia, nihil nisi ratione eveniet! Eius, voluptates neque.",
    image: "assets/project.jpg",
  },
  {
    id: 2,
    name: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime officiis mollitia voluptate impedit laboriosam temporibus eligendi natus esse quam nostrum provident quia, nihil nisi ratione eveniet! Eius, voluptates neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime officiis mollitia voluptate impedit laboriosam temporibus eligendi natus esse quam nostrum provident quia, nihil nisi ratione eveniet! Eius, voluptates neque.",
    image: "assets/project.jpg",
  },
  {
    id: 3,
    name: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime officiis mollitia voluptate impedit laboriosam temporibus eligendi natus esse quam nostrum provident quia, nihil nisi ratione eveniet! Eius, voluptates neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime officiis mollitia voluptate impedit laboriosam temporibus eligendi natus esse quam nostrum provident quia, nihil nisi ratione eveniet! Eius, voluptates neque.",
    image: "assets/project.jpg",
  },
  {
    id: 4,
    name: "project 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime officiis mollitia voluptate impedit laboriosam temporibus eligendi natus esse quam nostrum provident quia, nihil nisi ratione eveniet! Eius, voluptates neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime officiis mollitia voluptate impedit laboriosam temporibus eligendi natus esse quam nostrum provident quia, nihil nisi ratione eveniet! Eius, voluptates neque.",
    image: "assets/project.jpg",
  }
];

const projectContainer = document.getElementById("prjcts-slides");
projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "prjcts-slide";
  card.innerHTML = `
          <img src="${project.image}" alt="${project.name}">
          <div>
          <h2>${project.name}</h2>
          <p class="reg-txt">${project.description}</p>
          </div>
        `;
  projectContainer.appendChild(card);
});


/*slider*/
const slides = document.querySelector('.prjcts-slides');
const slideCount = projects.length;
console.log(slideCount)
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slideCount;
  slides.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slideCount) % slideCount;
  slides.style.transform = `translateX(${-index * 100}%)`;
});



/*putting skills in an object*/

const skills = [
  {
    id: 1,
    name: "HTML",
    image: "assets/html-5-svgrepo-com.svg",
  },
  {
    id: 2,
    name: "CSS",
    image: "assets/css-3-svgrepo-com.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "assets/javascript-svgrepo-com.svg",
  },
];

const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {
  const card = document.createElement("div");
  card.className = "skills-flex-item";
  card.innerHTML = `
          <img src="${skill.image}" alt="${skill.name}">
          <p class="reg-txt">${skill.name}</p>
        `;
  skillsContainer.appendChild(card);
});