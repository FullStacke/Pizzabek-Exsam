const  pizzaCards = document.querySelector('.pizza-cards')
const  goshtli = document.querySelector('.goshtli')
const  pishloqli = document.querySelector('.pishloqli')
const  qoziqornli = document.querySelector('.qoziqornli')
const  achiq = document.querySelector('.achiq')


function render(data,rootElem) {
  data.forEach(item => {
    rootElem.innerHTML += `
    <div class="piza-cards__items achiqCard" id="${item.id}" onclick="itemId(${item.id})" title="click for order Pitsa">
    <div class="piza-cards__items-img" id="${item.id}">
      <img src="${item.image}" class="cardImg"  alt="${item.title}" name="image" id="${item.id}">
    </div>
    <div class="piza-cards__items-text" id="${item.id}">
      <h6 name="title" class="cardTitle" id="${item.id}">
      ${item.title}
      </h6>
      <p name="description" class="description" id="${item.id}">
      ${item.description}
      </p>
    </div>
  <div class="btn-price__wrapper" id="${item.id}">
    <button type="button" class="btn-price" id="${item.id}">
      <b>${item.price}</b>
    </button>
  </div>
  </div>
    `
  })

}


  function cards(data) {
    render(data,pizzaCards)
  }
  
  function goshtlipitsa(data) {
  render(data,goshtli)
  }
  
  function pishloqlipitsa(data){
    render(data,pishloqli)
  }
  
   function qoziqornliPitsa(data) {
    render(data,qoziqornli)
  }
  
  function achiqPitsa(data) {
    render(data,achiq)
  }
  
  
