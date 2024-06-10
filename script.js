document.addEventListener('DOMContentLoaded', () => {
    fetch('portfolio.JSON')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('portfolio-container');
        data.projects.forEach(project => {
          const projectElement = document.createElement('div');
          projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.title}" />
          `;
          container.appendChild(projectElement);
        });
      })
      .catch(error => {
        console.error('Error loading portfolio items:', error);
      });
  });

  fetch('https://api.github.com/users/ZombiesmasherJT')
  .then(response => response.json())
  .then(data => {
      document.getElementById('githubFollowers').textContent = data.followers;
      document.getElementById('githubRepos').textContent = data.public_repos;
  })
  .catch(error => console.log('Error fetching GitHub data:', error));


  AOS.init();