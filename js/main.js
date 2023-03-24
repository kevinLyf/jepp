const productSelect = document.getElementById("productSelect");
const payment = document.getElementById("payment");
const createBtn = document.getElementById("create");
const productsSoldWrapper = document.getElementById("productsSoldWrapper");
const currentSeller = document.getElementById("currentSeller");
const startTime = document.getElementById("startTime");
const asideMenu = document.getElementById("asideMenu");
const menuBtn = document.getElementById("menu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const balanceDayElement = document.getElementById("balanceDay");
const balanceDayLocalStorage = localStorage.getItem("balanceDay");
const kitSelect = document.getElementById("kit");
const kitPayment = document.getElementById("paymentKit");
const kitCreate = document.getElementById("kitCreate");
let balanceDay = balanceDayLocalStorage;
let type = document.getElementById("onFire");

if (!JSON.parse(localStorage.getItem("CurrentSeller"))) {
  window.location.href = "./pages/config.html";
}

if (!localStorage.getItem("index")) {
  localStorage.setItem("index", 1);
  window.location.reload();
}

if (!balanceDayLocalStorage) {
  localStorage.setItem("balanceDay", 0);
  window.location.reload();
}

balanceDayElement.innerHTML = balanceDay;

const indexLocalStorage = Number(localStorage.getItem("index"));
let index = indexLocalStorage;

if (Number(localStorage.getItem("index")) > 1) {
  for (let i = 0; i < index - 1; i++) {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    let productSold = JSON.parse(localStorage.getItem(`productSold${i}`));

    td1.innerHTML = productSold.name;
    td2.innerHTML = productSold.payment;
    td3.innerHTML = productSold.value;
    td4.innerHTML = productSold.seller;
    td5.innerHTML = productSold.time;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    productsSoldWrapper.appendChild(row);
  }
}

createBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let value;
  const date = new Date().toLocaleTimeString();
  const row = document.createElement("tr");

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");

  if (type.value === "Não") {
    if (productSelect.value === "Óleo") {
      value = "30.90";
    } else {
      value = "25.00";
    }
  } else {
    if (productSelect.value === "Óleo") {
      value = "26.99";
    } else {
      value = "19.99";
    }
  }

  td1.innerHTML = productSelect.value;
  td2.innerHTML = payment.value;
  td3.innerHTML = value;
  td4.innerHTML = JSON.parse(localStorage.getItem("CurrentSeller")).name;
  td5.innerHTML = date;

  td1.setAttribute("title", productSelect.value);
  td2.setAttribute("title", payment.value);
  td3.setAttribute("title", value);
  td4.setAttribute(
    "title",
    JSON.parse(localStorage.getItem("CurrentSeller")).name
  );
  td5.setAttribute("title", date);

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);

  productsSoldWrapper.appendChild(row);

  const newProductSold = {
    name: productSelect.value,
    payment: payment.value,
    value: value,
    seller: JSON.parse(localStorage.getItem("CurrentSeller")).name,
    time: date,
  };

  localStorage.setItem(
    `productSold${index - 1}`,
    JSON.stringify(newProductSold)
  );

  balanceDay = (Number(balanceDay) + Number(value)).toFixed(2);

  localStorage.setItem("balanceDay", balanceDay);

  balanceDayElement.innerHTML = balanceDay;
  index++;
  localStorage.setItem("index", index);
});

kitCreate.addEventListener("click", (e) => {
  e.preventDefault();

  const date = new Date().toLocaleTimeString();
  const row = document.createElement("tr");

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");

  td1.innerHTML = kitSelect.value;
  td2.innerHTML = kitPayment.value;
  td3.innerHTML =
    kitSelect.value === "1 Óleo + 1 Esfoliante  " ? "49.99" : "70.00";
  td4.innerHTML = JSON.parse(localStorage.getItem("CurrentSeller")).name;
  td5.innerHTML = date;

  td1.setAttribute("title", kitSelect.value);
  td2.setAttribute("title", kitPayment.value);
  td3.setAttribute(
    "title",
    kitSelect.value === "1 Óleo + 1 Esfoliante  " ? "49.99" : "70.00"
  );
  td4.setAttribute(
    "title",
    JSON.parse(localStorage.getItem("CurrentSeller")).name
  );
  td5.setAttribute("title", date);

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);

  productsSoldWrapper.appendChild(row);

  const newProductSold = {
    name: kitSelect.value,
    payment: kitPayment.value,
    value: kitSelect.value === "1 Óleo + 1 Esfoliante " ? "49.99" : "70.00",
    seller: JSON.parse(localStorage.getItem("CurrentSeller")).name,
    time: date,
  };

  localStorage.setItem(
    `productSold${index - 1}`,
    JSON.stringify(newProductSold)
  );

  balanceDay = (
    Number(balanceDay) +
    Number(kitSelect.value === "1 Óleo + 1 Esfoliante " ? "49.99" : "70.00")
  ).toFixed(2);

  localStorage.setItem("balanceDay", balanceDay);

  balanceDayElement.innerHTML = balanceDay;
  index++;
  localStorage.setItem("index", index);
});

// Menu
menuBtn.addEventListener("click", () => {
  if ((asideMenu.style.display = "none")) {
    asideMenu.style.display = "block";
  } else {
    asideMenu.style.display = "none";
  }
});

closeMenuBtn.addEventListener("click", () => {
  asideMenu.style.display = "none";
});
