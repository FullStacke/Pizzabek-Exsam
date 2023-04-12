 // modal selectors
const modalOverlay = document.getElementById("modal-overlay"),
      closeBtn = document.querySelector(".close"),
      arrowIcon = document.querySelector(".arrow")




const modalImg = document.querySelector('#modalImg'),
modalTitle = document.querySelector('.modalTitle'),
modalText = document.querySelector('.modalText'),
modalPrice =  document.querySelector('.pitsalar-price'),
modalPrice2 =  document.querySelector('.pitsalar-price2')


// crate modal 
const modalContainer = document.querySelector(".modal-container");
function createModal(title, img, price, text, id) {
  modalContainer.innerHTML = `
    
        <div class="modal">
      <div class="arrow" onclick="arrowClose()">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="modal-img">
        <img id="modalImg" src="${img}" width="100%">
      </div>
      <div class="modal-right">
        <div class="modal-right__text">
          <h6 class="modalTitle">
          ${title}
          </h6>
          <p class="modalText">
          ${text}
          </p>
        </div>
        <div class="pitsalar">
          <h4>Pitsa kattaligi</h4>
          <div class="pitsalar-count">
            <span class="minus" onclick="minusBtn()"><img src="./img/minuscirlce.svg" alt="minus"></span>
            <div class="pitsalar-soni">
              <span class="pitsalar-soni__num">0</span> - <span>ta</span>
            </div>
            <span class="plus" onclick="plusBtn()"><img src="./img/addcircle.svg" alt="plus"></span>
          </div>
          <div class="pitsalar-fill">
            <span class="pitsalar-fill__active fill" onclick="selectFil()">
            Ingichka
            </span>
            <span class="fill" onclick="selectFil()">
            Qalin
            </span>
          </div>
          <div class="pitsalar-price_btn">
            <span class="pitsalar-price" >
              ${price}
            </span>
            <span class="pitsalar-price2 hidden" >
            ${price}
          </span>

            <button type="button" class="addBtn" id="${id}">
             
                Savatga qo'shish
              
            </button>
          </div>
        </div>
      </div>
    </div>

    
    `;
}

// set data to modal 
function setToModal(currentCard) {
  modalImg.src = currentCard.image;
  modalPrice.textContent = currentCard.price;
  modalPrice2.textContent = currentCard.price;
  modalText.textContent =  currentCard.description;
  modalTitle.textContent = currentCard.title;
}


// open modal
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('piza-cards__items') ||
  e.target.classList.contains('piza-cards__items-img') ||
  e.target.classList.contains('piza-cards__items-text') ||
  e.target.classList.contains('cardImg')   ||
  e.target.classList.contains('cardTitle')  ||
  e.target.classList.contains('description') ||
  e.target.classList.contains('btn-price') ||
  e.target.classList.contains('btn-price__wrapper')
     ) {
    getId(e.target.id)
    modalOverlay.classList.remove('hidden')
  }
})


// close  modal
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  modalOverlay.classList.add("hidden");
});

function arrowClose() {
  modalOverlay.classList.add("hidden");
}

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    modalOverlay.classList.add("hidden");
  }
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    modalOverlay.classList.add("hidden");
  }
});



const closeMessageModal = document.querySelector('.messageClose')

closeMessageModal.addEventListener('click', () => {
  modalMessage.classList.add('hidden')
})

