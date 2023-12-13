class Store {

    // CURRENT 
    constructor(productList) {
        this.productList = productList;
        this.cart = cart;
    }
    show() {
        this.productList.forEach((p, i) => {
            console.log(i, p.show());
        });
    }
    add(i, quantity = 1) {
        this.cart.itemList.push(new lineItem(this.productList[i], quantity));
        return this.cart.itemList.length - 1;
    }
    getTotal() {
        return this.cart.getTotal();
    }
}
class Product {
    constructor(name, price = 0, image = "", attributes = {}) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.attributes = attributes;

    }
    show() {
return `NAME: ${this.name} PRICE: ${this.price}`
    }
}
class Customer{
    // ...
}
class lineItem{
    constructor(product, quantity){
        this.product = product;
        this,quantity = quantity;

    }
    getExtendedPrice(){
        return this.quantity * this.product.price;
    }
}
function sum(numberList){
    return numberList.reduce((acc, cv) => acc + cv,0);

}