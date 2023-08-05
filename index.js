let homeFreeBtn = document.getElementById("home-Free-Btn")
let homeInsideBtn = document.getElementById("home-Inside-Btn")
let homeThreeBtn = document.getElementById("home-Three-Btn")
let guestFreeBtn = document.getElementById("guest-Free-Btn")
let guestInsideBtn = document.getElementById("guest-Inside-Btn")
let guestThreeBtn = document.getElementById("guest-Three-Btn")
let homeScoreEl = document.getElementById("home-Score-El")
let guestScoreEl = document.getElementById("guest-Score-El")
let homeScore = 0
let guestScore = 0

function homeFree() {
    homeScore += 1 
    homeScoreEl.textContent = homeScore
}

function homeInside() {
    homeScore += 2 
    homeScoreEl.textContent = homeScore
}

function homeThree() {
    homeScore += 3 
    homeScoreEl.textContent = homeScore
}

function guestFree() {
    guestScore += 1 
    guestScoreEl.textContent = guestScore
}

function guestInside() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestThree() {
    guestScore += 3 
    guestScoreEl.textContent = guestScore
}
console.log(homeScore)