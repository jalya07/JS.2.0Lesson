let buttons = document.querySelectorAll(".btn-primary");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function (ev) {
        ev.preventDefault();
        let str = this.previousElementSibling.previousElementSibling.innerText
        let id = this.parentNode.getAttribute("data-id");
        let basketStr = localStorage.getItem("basket");
        let products = [];
        if (basketStr) {
            products = JSON.parse(basketStr);
        }
        let existproduct = products.find(p => p.id == id);
        if (existproduct) {
            existproduct.count++;
        }
        else {
            let product = {
                id,
                name: this.parentNode.firstElementChild.innerText,
                desc: this.previousElementSibling.innerText,
                price: str.substring(str.indexOf(":") + 1),
                url: this.parentNode.previousElementSibling.getAttribute("src"),
                count:1
            }
            products.push(product);
        }

        localStorage.setItem("basket", JSON.stringify(products))
        // console.log(product);

    })

}
