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
              tabsItem[i].classList.remove('active')
              category.classList.add('hidden')
            }
          })
        })


      })


