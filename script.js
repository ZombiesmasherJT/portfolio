document.addEventListener('DOMContentLoaded', () => {
  fetch('portfolio.json')
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById('portfolio-container');
          data.projects.forEach((project, index) => {
              const projectElement = document.createElement('div');
              projectElement.classList.add('projectItem');
              projectElement.setAttribute('data-aos', 'fade-up');
              projectElement.innerHTML = `
                  <div>
                      <h2>${project.title}</h2>
                      <p class="darkerText">${new Date(project.date).toDateString()}</p>
                      <p id="project-description-${index}"></p>
                  </div>
                  <div>
                      <a href="${project.link}" target="_blank">
                          <img src="${project.image}" alt="${project.title}">
                      </a>
                  </div>
              `;
              container.appendChild(projectElement);

              // Initialize Typed.js for each project description
              new Typed(`#project-description-${index}`, {
                  strings: [project.description],
                  typeSpeed: 17,
                  showCursor: false
              });
          });
      })
      .catch(error => {
          console.error('Error loading portfolio items:', error);
      });

  fetch('https://api.github.com/users/ZombiesmasherJT')
      .then(response => response.json())
      .then(data => {
          document.getElementById('githubFollowers').textContent = data.followers;
          document.getElementById('githubRepos').textContent = data.public_repos;
      })
      .catch(error => console.log('Error fetching GitHub data:', error));

  AOS.init();
});
