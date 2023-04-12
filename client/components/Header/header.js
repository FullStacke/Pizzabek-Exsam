const serachInput = document.getElementById('search')
const productsLength = document.querySelector('.products')
// product length on karzinka btn 
function bagLengt() {
productsLength.textContent = karzinkaOrderItems.children.length ? karzinkaOrderItems.children.length : 0;
}


// header search products 
serachInput.addEventListener('input', () => {
  const cardsItem = document.querySelectorAll('.piza-cards__items')
  const cardsTitle = document.querySelectorAll('.cardTitle')

  let inpValue = serachInput.value.toLowerCase()
  cardsTitle.forEach(item => {
    if (item.textContent.toLowerCase().includes(inpValue)) {
      item.parentElement.parentElement.classList.remove('hidden')
    } else{
      item.parentElement.parentElement.classList.add('hidden')
    }
  })

})




