function createGame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da Servia">
  </li>  
    `
}

function createCard(date, day, games) {
  return `
  <div class="card">
  <h2>${date}  <span>${day}</span>  </h2> 
    <ul>
      ${games}              
               
    </ul>
  </div>
  `
}
console.log("card")
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "QUINTA",
    createGame("switzerland", "07:00", "camaroon") +
      createGame("uruguay", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("camaroon", "07:00", "serbia") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "SEXTA",
    createGame("southkorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "13:00", "switzerland") +
      createGame("camaroon", "16:00", "brazil")
  )
