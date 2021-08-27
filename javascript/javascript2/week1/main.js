/*console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
*/
const products = getAvailableProducts();
const ul = document.querySelector("#ulSelector");



function renderProducts(products) {
    // your code here
    for (let j in products) {
        let i;
        let node = document.createElement("li"); // Create a <li> node
        let textnode = document.createTextNode(i); // Create a text node
        node.appendChild(textnode); // Append the text to <li>




        ul.appendChild(node).innerHTML = "<b>" + products[j].name + " </b><br> " + products[j].price + "$ <br>" + " Rating: " + products[j].rating + "<br><br><br>";
        node.style.display = "block";
        node.style.marginLeft = "15px";

        //products[j].name.style.fontWeight="bold";




    }
};



renderProducts(products);

/* In the html create a ul that will contain all the products. Select that ul using document.querySelector
For each product in the products array:
create an li
Set the innerHTML of that li to the contain the title, price and rating
Append the li to the ul*/