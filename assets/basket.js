let table = document.getElementById("table");
let totalPrice = document.getElementById("totalPrice");

let arr = [];
if (localStorage.getItem("basket") != null) {
    arr = JSON.parse(localStorage.getItem("basket"));

    arr.forEach(product => {

        let tr = document.createElement("tr");

        let tdImage = document.createElement("td");
        let image = document.createElement("img");
        image.setAttribute("src", product.image);
        image.style.width = "70px"
        tdImage.append(image);

        let tdName = document.createElement("td");
        tdName.innerText = product.name;

        let tdprice = document.createElement("td");
        tdprice.innerText = product.price + " $";

        let tdCount = document.createElement("td");
        let pCount = product.count;

        let tdplus = document.createElement("i");
        tdplus.classList.add("fa-solid", "fa-circle-plus");
        tdplus.style.marginRight = "5px";
        let tdminus = document.createElement("i");
        tdminus.classList.add("fa-solid", "fa-circle-minus");
        tdminus.style.marginLeft = "5px"
        tdCount.append(tdplus, pCount, tdminus)


        let totalPriceItem = document.createElement("td");
        let sumprice = product.count * product.price;
        totalPriceItem.innerHTML = sumprice + " $";

        tr.append(tdImage, tdName, tdprice, tdCount, totalPriceItem);

        table.lastElementChild.append(tr);


        tdplus.addEventListener("click", function () {
            product.count += 1;
            localStorage.setItem("basket", JSON.stringify(arr));
            window.location.reload();
        })
        tdminus.addEventListener("click", function () {
            if (product.count > 0) {
                product.count -= 1;
                localStorage.setItem("basket", JSON.stringify(arr));
                window.location.reload();
            } else {
                this.parentElement.parentElement.remove();
            }
        })

        totalPrice.lastElementChild.innerHTML = TotalPriceBasket(arr);
    });

}

function TotalPriceBasket(arry) {
    let sum = 0;

    arry.forEach(p => {
        sum += p.price * p.count;
    })
    return sum;
}

