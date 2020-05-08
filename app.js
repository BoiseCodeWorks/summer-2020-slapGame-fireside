let enemy = {
  health: 100
}

let player = {
  health: 100,
  items: [],
  modifier: 1
}

let enemyHealth = document.getElementById("enemyHealthBar")
let myHp = document.getElementById("myHealthBar")
// function fireAttack() {
//   enemy.health -= 1
//   console.log(enemy.health)
// }

// function broomAttack() {
//   enemy.health -= 3
//   console.log(enemy.health)
// }

// function bombAttack() {
//   enemy.health -= 5
//   console.log(enemy.health)
// }

let allItems = {
  camera: {
    name: "D$ Slayer",
    modifier: 5,
  }
}

let attackStyles = {
  fire: {
    name: "Fireblast",
    damage: 1,
    timeout: 1000
  },
  broom: {
    name: "Broom Blast",
    damage: 3,
    timeout: 3000
  },
  bomb: {
    name: "Bomb Blast",
    damage: 5,
    timeout: 5000

  },
}

function attack(attackMethod) {
  // console.log(attackMethod);
  // console.log(attackStyles[attackMethod])

  enemy.health -= (attackStyles[attackMethod].damage + player.modifier)

  let buttonUsed = document.getElementById(attackMethod)
  buttonUsed.setAttribute("disabled", "true")
  setTimeout(() => {
    buttonUsed.removeAttribute("disabled")
  }, attackStyles[attackMethod].timeout);

  // player.items = []
  player.modifier = 1
  draw()
}

function draw() {
  enemyHealth.setAttribute("style", `width: ${enemy.health}%`)
  myHp.setAttribute("style", `width: ${player.health}%`)
}

function useItem(itemName) {
  console.log(itemName);
  // let modHolder = 0
  // let itemToUse = allItems[itemName]
  // // console.log(itemToUse);
  // player.items.push(itemToUse)
  // // console.log(player.items);
  // player.items.forEach(i => modHolder += i.modifier)
  // player.modifier = modHolder
  // console.log(player.modifier);

  let itemToUse = allItems[itemName]
  player.modifier += itemToUse.modifier
  console.log(player.modifier);


}


setInterval(() => {
  player.health -= 15
  // console.log(player.health);
  draw()
}, 3000);
