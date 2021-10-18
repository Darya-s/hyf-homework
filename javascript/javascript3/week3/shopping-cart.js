
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency) {
        const exchangeCurrency = currency.toUpperCase();
        fetch(
                `https://free.currconv.com/api/v7/convert?q=DKK_${exchangeCurrency}&compact=ultra&apiKey=887a84c9cd061cfbd5fa`
            )
            .then((response) => response.json())
            .then((data) => {
                const exchangeRate = Object.values(data)[0];
                const exchangeValue = (this.price * exchangeRate).toFixed(2) + currency;
                console.log(exchangeValue);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {

        const index = this.products.indexOf(product);
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    searchProduct(productName) {
        const index = this.products.indexOf(productName);
        let searchedProducts = [];
        if (index > -1) {
            searchedProducts.push(this.products[index]);
        }
        return (this.searchedProducts = searchedProducts);
    }

    getTotal() {
        let totalAmount = 0;
        this.products.forEach((product) => (totalAmount += product.price));
        this.totalAmount = totalAmount;
    }

    renderProducts() {
        this.products.map((product) => {
            console.log(product.name);
            console.log(product.price);
        });
    }



    async getUser(usId) {
        try {
            const use = await fetch(`https://jsonplaceholder.typicode.com/users/${usId}`);
            const response = await use.json();
            
            console.log(response.username);
        } catch (error) {
            console.log(error);
        }
    }
}




const shoppingCart = new ShoppingCart();

const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const smartTV = new Product("smart-tv", 2500);
shoppingCart.addProduct(smartTV);
const kitchenMachine = new Product("kitchen-machine", 10000);
shoppingCart.addProduct(kitchenMachine);
const laptop = new Product("laptop", 15000);
shoppingCart.addProduct(laptop);
const digitalPen = new Product("digital-pen", 100);
shoppingCart.addProduct(digitalPen);
digitalPen.convertToCurrency("EUR");
shoppingCart.removeProduct(flatscreen);
shoppingCart.searchProduct(kitchenMachine);

console.log(shoppingCart);

const allProducts = shoppingCart.products;

shoppingCart
    .getUser(1)

.then(shoppingCart.renderProducts(allProducts))
    .then(shoppingCart.getTotal())