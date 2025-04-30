let BtnContact = document.getElementById('Contact')
let fond = document.getElementById('enter')
let Video = document.getElementById('test')
const BtnPortfolio = document.querySelector('.Portfolio')

BtnPortfolio.addEventListener('mouseover', function () {
    BtnPortfolio.textContent = 'Soonn !!!'
})

BtnPortfolio.addEventListener('mouseout', function () {
    BtnPortfolio.textContent = 'Portfolio'
})

BtnContact.addEventListener("click", function () {
    Video.muted = false;
    Video.play();
    Video.volume = 0.1;
    fond.style.visibility = "hidden";
})

