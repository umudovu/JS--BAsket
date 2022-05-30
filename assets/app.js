let addBasket=document.querySelectorAll(".addBasket");

addBasket.forEach(product=>{
    product.addEventListener("click",function(){
        
        if (localStorage.getItem("basket")==null) {
            localStorage.setItem("basket",JSON.stringify([]));
        }
        let arr=JSON.parse(localStorage.getItem("basket"));
        let productId=this.parentElement.parentElement.getAttribute("data-id");
        let existProduct=arr.find(p=>p.id==productId);
        if (existProduct==undefined) {
            arr.push({
                id:productId,
                price:this.previousElementSibling.firstElementChild.innerText,
                image:this.parentElement.previousElementSibling.getAttribute("src"),
                name:this.parentElement.firstElementChild.innerText,
                count:1
            })
            console.log(arr);
        }
        else{
            existProduct.count++;
        }
        localStorage.setItem("basket",JSON.stringify(arr))
    })
})