document.addEventListener('DOMContentLoaded', () => {
const  pizzaCards = document.querySelector('.pizza-cards')
const  goshtli = document.querySelector('.goshtli')
const  pishloqli = document.querySelector('.pishloqli')
const  qoziqornli = document.querySelector('.qoziqornli')
const  achiq = document.querySelector('.achiq')






const allPitsa = async (resourse) => {
  
  const request = await fetch(resourse)
  const data = await request.json()
  return data
}

const url1  = 'http://localhost:7777/barcha-pitsalar'
  allPitsa(url1)
.then(date => cards(date))
.catch(error => console.log(error))


  const goshtliPizza = async (resourse2) => {
    
    const request = await fetch(resourse2)
    const data = await request.json()
    return data 
  }
  const url2 = 'http://localhost:7777/goshtli'
  goshtliPizza(url2)
  .then(data => goshtlipitsa(data))
  .catch(error => console.log(error))


  const pishloqliPizza = async (resourse3) => {
    
    const request = await fetch(resourse3)
    const data = await request.json()
    return data
  }

  const url3 = 'http://localhost:7777/pishloqli'
  pishloqliPizza(url3)
  .then(data => pishloqlipitsa(data))


  const qoziqornliPizza = async (resourse4) => {
    
    const request =  await fetch(resourse4)
    const data = await request.json()
    return data
  }

  const url4 = 'http://localhost:7777/qoziqorinli'
  qoziqornliPizza(url4)
  .then(data => qoziqornliPitsa(data))


  const achiqPizza = async (resourse5) => {
      
      const request = await fetch(resourse5)
      const data = await request.json()
    return data
  }

  const url5 = 'http://localhost:7777/achchiq'

  achiqPizza(url5)
  .then(data => achiqPitsa(data))





function cards(data) {
  data.forEach(item => {
  pizzaCards.innerHTML += `
  <div class="piza-cards__items">
  <div class="piza-cards__items-img">
  <img src="${item.image}" class="cardImg" alt="${item.title}" name="image">
  </div>
  <div class="piza-cards__items-text">
  <h6  name="title">
    ${item.title}
    </h6>
    <p name="description">
    ${item.description}
    </p>
    </div>
<div >
<button type="button" class="btn-price">
<b>${item.price}</b>
</button>
</div>
</div>
`

});  
}

function goshtlipitsa(data) {
  data.forEach(item => {
    
  goshtli.innerHTML += `
  
  <div class="piza-cards__items">
  <div class="piza-cards__items-img">
    <img src="${item.image}" class="cardImg"  alt="${item.title}" name="image">
  </div>
  <div class="piza-cards__items-text">
    <h6  name="title">
    ${item.title}
    </h6>
    <p name="description">
    ${item.description}
    </p>
  </div>
<div >
  <button type="button" class="btn-price">
    <b>${item.price}</b>
  </button>
</div>
</div>
  
  `
})
}

function pishloqlipitsa(data){
  data.forEach(item => {
  
    pishloqli.innerHTML += `
    
    <div class="piza-cards__items">
    <div class="piza-cards__items-img">
      <img src="${item.image}" class="cardImg"  alt="${item.title}" name="image">
    </div>
    <div class="piza-cards__items-text">
      <h6  name="title">
      ${item.title}
      </h6>
      <p name="description">
      ${item.description}
      </p>
    </div>
  <div >
    <button type="button" class="btn-price">
      <b>${item.price}</b>
    </button>
  </div>
  </div>
    
    `
  })
}

 function qoziqornliPitsa(data) {
  data.forEach(item => {
  
    qoziqornli.innerHTML += `
    
    <div class="piza-cards__items">
    <div class="piza-cards__items-img">
      <img src="${item.image}" class="cardImg"  alt="${item.title}" name="image">
    </div>
    <div class="piza-cards__items-text">
      <h6  name="title">
      ${item.title}
      </h6>
      <p name="description">
      ${item.description}
      </p>
    </div>
  <div >
    <button type="button" class="btn-price">
      <b>${item.price}</b>
    </button>
  </div>
  </div>
    
    `
  })

}

function achiqPitsa(data) {
  data.forEach(item => {
    achiq.innerHTML += `
    
    <div class="piza-cards__items">
    <div class="piza-cards__items-img">
      <img src="${item.image}" class="cardImg"  alt="${item.title}" name="image">
    </div>
    <div class="piza-cards__items-text">
      <h6 name="title">
      ${item.title}
      </h6>
      <p name="description">
      ${item.description}
      </p>
    </div>
  <div >
    <button type="button" class="btn-price">
      <b>${item.price}</b>
    </button>
  </div>
  </div>
    
    `
  })

}







const tabWrapper = document.querySelector('.tab')
tabWrapper.innerHTML = `
<ul class="tabs">
<li class="tabs-item active">Barchasi</li>
<li class="tabs-item">Go’shtli</li>
<li class="tabs-item">Pishloqli</li>
<li class="tabs-item">Qo’ziqorinli</li>
<li class="tabs-item">Achchiq</li>
</ul>

`

const categories =  document.querySelectorAll('.item'),
      tabsItem = document.querySelectorAll('.tabs-item')


      tabsItem.forEach((item,id) =>{
        item.addEventListener('click', () => {
          categories.forEach((category,i) => {
            if (id === i) {

              tabsItem[i].classList.add('active')
              category.classList.remove('hidden')
            } else{
              category.classList.add('hidden')
              tabsItem[i].classList.remove('active')

            }
          })
        })


      })








      const modalOverlay = document.getElementById('modal-overlay'),
      closeBtn = document.querySelector('.close'),
      arrowICon = document.querySelector('.arrow')

// open modal 
pizzaCards.addEventListener('click', (e) => {

  if (e.target.classList.contains('piza-cards__items') || e.target.classList.contains('piza-cards__items-img') || e.target.classList.contains('piza-cards__items-text') || e.target.classList.contains('cardImg') ) {
    modalOverlay.classList.remove('hidden')

  }
})
goshtli.addEventListener('click', (e) => {
  if (e.target.classList.contains('piza-cards__items') || e.target.classList.contains('piza-cards__items-img') || e.target.classList.contains('piza-cards__items-text') || e.target.classList.contains('cardImg') ) {
    modalOverlay.classList.remove('hidden')
  }
})

pishloqli.addEventListener('click', (e) => {
  if (e.target.classList.contains('piza-cards__items') || e.target.classList.contains('piza-cards__items-img') || e.target.classList.contains('piza-cards__items-text') || e.target.classList.contains('cardImg') ) {
    modalOverlay.classList.remove('hidden')
  }
})
qoziqornli.addEventListener('click', (e) => {
  if (e.target.classList.contains('piza-cards__items') || e.target.classList.contains('piza-cards__items-img') || e.target.classList.contains('piza-cards__items-text') || e.target.classList.contains('cardImg') ) {
    modalOverlay.classList.remove('hidden')
  }
})
achiq.addEventListener('click', (e) => {
  if (e.target.classList.contains('piza-cards__items') || e.target.classList.contains('piza-cards__items-img') || e.target.classList.contains('piza-cards__items-text') || e.target.classList.contains('cardImg') ) {
    modalOverlay.classList.remove('hidden')
  }
})


// close  modal
closeBtn.addEventListener('click', () => {
  modalOverlay.classList.add('hidden')
})

arrowICon.addEventListener('click', () => {
  modalOverlay.classList.add('hidden')
})

window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    modalOverlay.classList.add('hidden')
  }
})

modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.add('hidden')
})



})