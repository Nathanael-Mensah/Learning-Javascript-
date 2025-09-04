//class=(ES6 feature)provides a more structured and cleaner way to work with objects compared to traditional
//constructor functions ex.static keyword,encapsulation,inheritance
class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`Product:${this.name}`);
        console.log(`Price:$${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax=0.05;

const product1=new Product("Shirt",19.99);
const product2=new Product("Pants",25.50);
const product3=new Product("Underear",100);

product1.displayProduct();
const total=product3.calculateTotal();
console.log(`Total price (withTax): $${total.toFixed(2)}`);//.toFixed(2) changes the value to two decimal place