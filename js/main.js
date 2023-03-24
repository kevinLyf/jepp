const productSelect = document.getElementById("productSelect");
const payment = document.getElementById("payment");
const createBtn = document.getElementById("create");
const productsSoldWrapper = document.getElementById("productsSoldWrapper");
const currentSeller = document.getElementById("currentSeller");
const startTime = document.getElementById("startTime");

console.log(!JSON.parse(localStorage.getItem("CurrentSeller")))

if(!JSON.parse(localStorage.getItem("CurrentSeller"))){
  window.location.href = "./pages/config.html"
}

if (!localStorage.getItem("index")) {
  localStorage.setItem("index", 1);
  window.location.reload();
}

const indexLocalStorage = Number(localStorage.getItem("index"));
let index = indexLocalStorage;

if (Number(localStorage.getItem("index")) > 1) {

  for (let i = 0; i < index - 1; i++) {
    let productSold = JSON.parse(localStorage.getItem(`productSold${i}`))
    console.log(productSold)

    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.innerHTML = productSold.name;
    td2.innerHTML = productSold.payment;
    td3.innerHTML = productSold.value
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

  const date = new Date().toLocaleTimeString();
  const row = document.createElement("tr");

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");

  td1.innerHTML = productSelect.value;
  td2.innerHTML = payment.value;
  td3.innerHTML = productSelect.value === "Óleo" ? "39.90" : "N/A";
  td4.innerHTML = JSON.parse(localStorage.getItem("CurrentSeller")).name;
  td5.innerHTML = date;

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);

  productsSoldWrapper.appendChild(row);

  const newProductSold = {
    name: productSelect.value,
    payment: payment.value,
    value: productSelect.value === "Óleo" ? "39.90" : "N/A",
    seller: JSON.parse(localStorage.getItem("CurrentSeller")).name,
    time: date,
  };

  localStorage.setItem(
    `productSold${index - 1}`,
    JSON.stringify(newProductSold)
  );

  index++;
  localStorage.setItem("index", index);
});
