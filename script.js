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
    fond.style.opacity = 0;
    Video.muted = false;
    Video.restart();
    
    Video.volume = 0.3;
    
})

