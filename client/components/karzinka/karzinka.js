const headerCounterPrice = document.querySelector('.counter')
const karzinkaFiled = document.querySelector('.karzinka')
const karzinkaOrder = document.querySelector('.karzinka-buyrtma')
const karzinkaOrderItems = document.querySelector('.karzinka-buyrtma__items')
const karzinkaEmpty = document.querySelector('.empty')
const OpenKaarzinkaBtn = document.querySelector('.karzinka-btn')
const productWrapper = document.querySelector('.wrapper')
const closeKarzinka = document.querySelector('.closekarzinka') 
const headerPriceCounter = document.querySelector('.counter')
let narxYeg = 0
let totolPrice = 0


function minusBtn() {
  const count = document.querySelector('.pitsalar-soni__num')
  const ModalPrice = document.querySelector('.pitsalar-price')
  const ModalPrice2 = document.querySelector('.pitsalar-price2')
  const intigerValue = parseInt(ModalPrice.textContent)
  const intigerValue2 = parseInt(ModalPrice2.textContent)
  if (narxYeg > 0) {
    narxYeg--
    count.textContent = narxYeg  
    totolPrice -= intigerValue2
    ModalPrice.textContent = totolPrice.toFixed(3) + "  " + "UZS"
  }

}

function plusBtn() {
  const count = document.querySelector('.pitsalar-soni__num')
  const ModalPrice = document.querySelector('.pitsalar-price')
  const ModalPrice2 = document.querySelector('.pitsalar-price2')
  const intigerValue = parseInt(ModalPrice.textContent)
  const intigerValue2 = parseInt(ModalPrice2.textContent)

  if (narxYeg >= 0) {
    narxYeg++
    count.textContent = narxYeg
    totolPrice += intigerValue2 
    ModalPrice.textContent = totolPrice.toFixed(3) + "  " + "UZS"
  }

}



function selectFil() {
  const fill = document.querySelectorAll('.fill')

  fill[0].addEventListener('click', () => {
    fill[0].classList.add('pitsalar-fill__active')
    fill[1].classList.remove('pitsalar-fill__active')
    console.log(fill[0].textContent.trim());
  })

  fill[1].addEventListener('click', () => {
    fill[1].classList.add('pitsalar-fill__active')
    fill[0].classList.remove('pitsalar-fill__active')
    console.log(fill[1].textContent.trim());

  })
}
 
  
// const filtext = document.querySelector('.karzinkaCardFill')
// filtext.textContent  


function setTokarzinka() {
let totol = 0
karzinkaOrderItems.innerHTML = ''
getLocol.forEach( product => {  
const productsLength = document.querySelector('.products')
totol += parseInt(product.price)
headerCounterPrice.textContent = totol.toFixed(3)

const fill = document.querySelectorAll('.fill')
if (fill[0].classList.contains('pitsalar-fill__active')) {
  karzinkaOrderItems.innerHTML += `
  <div class="karzinka-buyrtma__item">
  <div class="karzinka-buyrtma__item-left">
    <img src="${product.image}" alt="${product.title}" class="karzinkaImg" >
    <div class="karzinka-buyrtma__item-left__text">
      <h6>
        ${product.title}
      </h6>
      <p class="karzinkaCardFill">${fill[0].textContent}</p>
    </div>
  </div>
  <div class="karzinka-buyrtma__item-right">
    <div class="karzinka-buyrtma__item-righ__counter">
      <div class="pitsalar-count">
        <span class="minus"><img src="./img/minuscirlce.svg" alt="minus"></span>
        <div class="pitsalar-soni">
          <span class="pitsalar-soni__num num2">1</span>
        </div>
        <span class="plus"><img src="./img/addcircle.svg" alt="plus"></span>
      </div>
      <span class="pitsalar-price allPrice">
       ${totol.toFixed(3) + " so'm"}
      </span>
    </div>
  </div>
  </div>
  `
} else if (fill[1].classList.contains('pitsalar-fill__active')) {
  karzinkaOrderItems.innerHTML += `
  <div class="karzinka-buyrtma__item">
  <div class="karzinka-buyrtma__item-left">
    <img src="${product.image}" alt="${product.title}" class="karzinkaImg" >
    <div class="karzinka-buyrtma__item-left__text">
      <h6>
        ${product.title}
      </h6>
      <p class="karzinkaCardFill">${fill[1].textContent}</p>
    </div>
  </div>
  <div class="karzinka-buyrtma__item-right">
    <div class="karzinka-buyrtma__item-righ__counter">
      <div class="pitsalar-count">
        <span class="minus"><img src="./img/minuscirlce.svg" alt="minus"></span>
        <div class="pitsalar-soni">
          <span class="pitsalar-soni__num num2">1</span>
        </div>
        <span class="plus"><img src="./img/addcircle.svg" alt="plus"></span>
      </div>
      <span class="pitsalar-price allPrice">
       ${totol.toFixed(3) + " so'm"}
      </span>
    </div>
  </div>
  </div>
  `
} else{
  karzinkaOrderItems.innerHTML += `
  <div class="karzinka-buyrtma__item">
  <div class="karzinka-buyrtma__item-left">
    <img src="${product.image}" alt="${product.title}" class="karzinkaImg" >
    <div class="karzinka-buyrtma__item-left__text">
      <h6>
        ${product.title}
      </h6>
      <p class="karzinkaCardFill">Tanlanmagan</p>
    </div>
  </div>
  <div class="karzinka-buyrtma__item-right">
    <div class="karzinka-buyrtma__item-righ__counter">
      <div class="pitsalar-count">
        <span class="minus"><img src="./img/minuscirlce.svg" alt="minus"></span>
        <div class="pitsalar-soni">
          <span class="pitsalar-soni__num num2">1</span>
        </div>
        <span class="plus"><img src="./img/addcircle.svg" alt="plus"></span>
      </div>
      <span class="pitsalar-price allPrice">
       ${totol.toFixed(3) + " so'm"}
      </span>
    </div>
  </div>
  </div>
  `
}

});

}

setTokarzinka()
bagLengt()







OpenKaarzinkaBtn.addEventListener('click', () => {
  productWrapper.classList.add('hidden')
  karzinkaFiled.classList.remove('hidden')

  if (!karzinkaOrderItems.children.length) {
    karzinkaOrder.classList.add('hidden')
    karzinkaEmpty.classList.remove('hidden')
  } else{
    karzinkaOrder.classList.remove('hidden')
    karzinkaEmpty.classList.add('hidden')
  }


})

closeKarzinka.addEventListener('click', () => {
  karzinkaFiled.classList.add('hidden')
  productWrapper.classList.remove('hidden')
})


const buyrtmaQilishBtn = document.querySelector('.buyrtmaQilish')
buyrtmaQilishBtn.addEventListener('click', () => {
  karzinkaFiled.classList.add('hidden')
  productWrapper.classList.remove('hidden')

})



const modalMessage = document.querySelector('.message-modal_field')
const messageTag = document.querySelector('.message')

function Message(message){
  modalMessage.classList.add('hidden')
  messageTag.textContent = message
}

const okanchatilniSumma = document.querySelector('.okanchatilniSumma'),
      saleBtn  = document.querySelector('.saleBtn'),
      promokodInput = document.querySelector('.promokod-input')


let promokod = 'betmin'

promokodInput.addEventListener('submit', () => {
  if (promokodInput.ariaValueMax.toLowerCase().trim() === promokod) {
    Message('Sizga 50.000 so\'\m chegirma')
  }
})