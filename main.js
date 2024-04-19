const motTrouver = document.querySelector('#mot')
const lettre = document.querySelector('#lettre')
const lettreSpécial = document.querySelector('#lettreSpécial')
const input = document.querySelector('#deviner')
const erreur = document.querySelector('#erreur')
const valider = document.querySelector('#valider')
const score = document.querySelector('#score')
const body = document.querySelector('body')
const mot = ["chat", "chien", "maison", "arbre", "soleil", "pluie", "fleur", "montagne", "rivière", "ocean"]
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphabetSpéciaux = ['Ê', 'É', 'È', 'Ë', 'Ç', 'Ù', 'Â', 'Ï']

let devinnette
let countErreur = 0
let countScore = 0
score.textContent = countScore

function creerMot (){
  motTrouver.textContent = ''
let random = Math.floor(Math.random()*mot.length)
  devinnette = mot[random].toUpperCase()
  let p = document.createElement('p')
  p.setAttribute('class','mot')
  for(let i = 0;i<devinnette.length;i++){
    let span = document.createElement('span')
    span.setAttribute('class','trait')
    motTrouver.appendChild(p)
    p.appendChild(span)
  }
}

function creerTouche(){
  for(let i = 0;i<alphabet.length;i++){
    let button = document.createElement('button')
    button.setAttribute('class','lettre')
    button.textContent = alphabet[i]
    lettre.appendChild(button)
  }
  for(let i = 0;i<alphabetSpéciaux.length;i++){
    let button = document.createElement('button')
    button.setAttribute('class','lettre')
    button.textContent = alphabetSpéciaux[i]
    lettreSpécial.appendChild(button)
  }
}
creerMot()
creerTouche()

let button = document.querySelectorAll('.lettre')
let span = document.querySelectorAll('.trait')
let TableauVerification = []
console.log(devinnette)
for(let i = 0;i<button.length;i++){
  button[i].addEventListener('click',()=>{
    let error = true
    for(let j =0;j<devinnette.length;j++){
      if(button[i].textContent === devinnette[j]){
        span[j].textContent = devinnette[j]
        TableauVerification[j] = devinnette[j]
        error = false
        verification()
      }
      }
      if(error){
        let spanErreur = document.createElement('span')
        spanErreur.setAttribute('class','erreur')
        erreur.appendChild(spanErreur)
        spanErreur.textContent = 'X'
        countErreur++ 
        verification()
    }
  })
}

function verification(){
  if(devinnette === TableauVerification.join('')){
    setTimeout(()=>{body.setAttribute('class','green')},100)
    setTimeout(()=>{body.setAttribute('class','white')},600)
    countScore +=1
  score.textContent = countScore
  creerMot()
  }
  else if(countErreur === 5){
    
    setTimeout(()=>{alert('perdu, le mot était '+ devinnette)},200)
  }
}
valider.addEventListener('click',()=>{
  let value = input.value.toUpperCase()
  value = value.trim()
  if(value === devinnette){
    setTimeout(()=>{alert('gagner')},200)
    countScore += 1
    score.textContent = countScore
    creerMot()

  }
  else{
    let spanErreur = document.createElement('span')
    spanErreur.setAttribute('class','erreur')
    erreur.appendChild(spanErreur)
    spanErreur.textContent = 'X'
    countErreur++ 
    verification()
  }
})