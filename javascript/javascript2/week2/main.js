/*console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
*/





const products = getAvailableProducts();
const ul = document.getElementById("products_list");
const input = document.getElementById("filter_products");
const value = input.value;

input.addEventListener('input', getProduct);




let filtered_products = products.filter((product) => {



    if (product.name.toLowerCase().includes(value.toLowerCase())) {

        return product;
    }


});




function getProduct() {

    let render_products = filtered_products.map((product) => {

        let li = document.createElement("li");

        li.innerHTML = product.name;

        return ul.appendChild(li);




    });
    return render_products;

};