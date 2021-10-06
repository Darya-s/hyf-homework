/*console.log("Script loaded");const products = getAvailableProducts();console.log(products);*/




const  products  =  getAvailableProducts();
const  ul  =  document.getElementById("products_list");
const  input  =  document.getElementById("filter_products");

function  renderProducts(products)  {    
    ul.innerHTML  =  '';    
    let  render_products  =  products.map((product)  =>  {        
        let  li  =  document.createElement("li");        
        li.innerHTML  =  product.name;        
        ul.appendChild(li);    
    });    
    return  render_products;
}

function  search(event)  {    
    let  lower  =  event.target.value.toLowerCase();    
    let  filtered_products  =  products.filter((product)  =>  product.name.toLowerCase()[0].includes(lower[0]));    
    renderProducts(filtered_products);
}

renderProducts(products);

input.addEventListener('input',  search);

//input.addEventListener('input', (e) => filtered_products(e.target.value));

//input.addEventListener('input', getProduct);