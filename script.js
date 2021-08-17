window.addEventListener('load', function () {
  fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then((response) => response.json())
    .then(function (astronautsJson) {
      updateAstronautList(astronautsJson);
      updateCount(astronautsJson);
    })

  function updateCount(astronautsJson) {
    const count = document.getElementById('astronautCount');
    count.innerHTML = astronautsJson.length;
  }

  function updateAstronautList(astronautsJson) {
    const container = document.getElementById('container');
    let astronauts = '';

    astronautsJson.sort((a1, a2) => a2.hoursInSpace - a1.hoursInSpace )


    for (let i = 0; i < astronautsJson.length; i++) {
      astronauts += createAstronautHTML(astronautsJson[i]);
    }

    container.innerHTML = astronauts;
  }

  function createAstronautHTML(astronaut) {
    const html = `
    <div class="astronaut">
      <div class="bio">
          <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
          <ul>
            <li>Hours in space: ${astronaut.hoursInSpace}</li>
            <li class="${astronaut.active ? 'active' : ''}">
              Active: ${astronaut.active}
            </li>
            <li>Skills: ${astronaut.skills.join(', ')}</li>
          </ul>
      </div>
      <img class="avatar" src="${astronaut.picture}">
    </div>
    `
    return html;
  }
})