const loader = document.querySelector(".loader");

const allPitsa = async (resourse) => {
  loader.classList.remove("hidden");
  const request = await fetch(resourse);
  const data = await request.json();
  request &&  data && loader.classList.add("hidden");
  return data;
};

const goshtliPizza = async (resourse2) => {
  loader.classList.remove("hidden");

  const request = await fetch(resourse2);
  const data = await request.json();
  request &&  data && loader.classList.add("hidden");
  return data;
};

const pishloqliPizza = async (resourse3) => {
  loader.classList.remove("hidden");

  const request = await fetch(resourse3);
  const data = await request.json();
  request &&  data && loader.classList.add("hidden");
  return data;
};

const qoziqornliPizza = async (resourse4) => {
  loader.classList.remove("hidden");

  const request = await fetch(resourse4);
  const data = await request.json();
  request &&  data && loader.classList.add("hidden");
  return data;
};

const achiqPizza = async (resourse5) => {
  loader.classList.remove("hidden");

  const request = await fetch(resourse5);
  const data = await request.json();
  request &&  data && loader.classList.add("hidden");
  return data;
};


const url1 = "http://localhost:7777/barcha-pitsalar";
allPitsa(url1)
  .then((date) => cards(date))
  .catch((error) => console.log(error));


const url2 = "http://localhost:7777/goshtli";
goshtliPizza(url2)
  .then((data) => goshtlipitsa(data))
  .catch((error) => console.log(error));


const url3 = "http://localhost:7777/pishloqli";
pishloqliPizza(url3).then((data) => pishloqlipitsa(data));


const url4 = "http://localhost:7777/qoziqorinli";
qoziqornliPizza(url4).then((data) => qoziqornliPitsa(data));


const url5 = "http://localhost:7777/achchiq";
achiqPizza(url5).then((data) => achiqPitsa(data));




// data for localStorage 
const SetLocol = async (resourse) => {
  loader.classList.remove("hidden");
  const request = await fetch(resourse);
  const data = await request.json();
  loader.classList.add("hidden");
  return data;
};


function itemId(idx) {
  const urlLocol = `http://localhost:7777/barcha-pitsalar/${idx}`;
  SetLocol(urlLocol)
    .then((date) => setToLocolStorage(date))
    .catch((error) => console.log(error));
}

// data for modol 
const getForModal = async (resourse) => {
  loader.classList.remove("hidden");

  const request = await fetch(resourse);
  const data = await request.json();
  request &&  data && loader.classList.add("hidden");
  return data;
};

function getId(id) {
  const urlForModol = `http://localhost:7777/barcha-pitsalar/${id}`;
  getForModal(urlForModol)
  .then(data => setToModal(data))
}



