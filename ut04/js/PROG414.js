let products = [
    {
      id: '1000',
      product: 'Fresas de Huelva',
      price: 4.10,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
      id: '1001',
      product: 'Kiwi amarillo',
      price: 2.45,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
      id: '1002',
      product: 'Manzana roja',
      price: 1.95,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
      id: '1003',
      product: 'Manzana verde',
      price: 1.70,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
      id: '1004',
      product: 'Melón',
      price: 1.35,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
      id: '1005',
      product: 'Naranja valenciana',
      price: 1.60,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
      id: '1006',
      product: 'Pera conferencia',
      price: 2.10,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
      id: '1007',
      product: 'Plátano',
      price: 2.60,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
      id: '1008',
      product: 'Sandía',
      price: 1.15,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
      id: '1009',
      product: 'Uva',
      price: 1.95,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
      id: '1010',
      product: 'Aguacate',
      price: 4.15,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
      id: '1011',
      product: 'Cereza del Bierzo',
      price: 5.20,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
      id: '1012',
      product: 'Granada',
      price: 3.10,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
      id: '1013',
      product: 'Limón',
      price: 1.55,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
      id: '1014',
      product: 'Nectarina',
      price: 1.80,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
      id: '1015',
      product: 'Piña',
      price: 3.20,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },
  
  ];

let productsSection = document.getElementById("products-section");
let cartSection = document.getElementById("cart-section");

function mover(event) {
  console.log(event.target.dataset.product);
  let comprarProducto = document.createElement("p");
  comprarProducto.textContent = (event.target.dataset.product);
  cartSection.append(comprarProducto);
  return comprarProducto;
}


products.forEach(element => {

    let product = document.createElement("div");
    product.setAttribute("id","product");

    let imagenProducto = document.createElement("img");
    imagenProducto.setAttribute("id","product-foto");
    imagenProducto.setAttribute("src",element.image);

    let datosProducto = document.createElement("div");
    datosProducto.setAttribute("id","product-data");

    let nombreProducto = document.createElement("span");
    nombreProducto.setAttribute("id","product-name");
    nombreProducto.textContent = (element.product);

    let precioProducto = document.createElement("span");
    precioProducto.setAttribute("id","price");
    precioProducto.textContent = (element.price + "€/Kg");

    let botonProducto = document.createElement("button");
    botonProducto.setAttribute("data-product",element.product);
    botonProducto.addEventListener("click",mover);
    botonProducto.textContent = "Añadir";

    product.append(imagenProducto);
    datosProducto.append(nombreProducto);
    datosProducto.append(precioProducto);
    datosProducto.append(botonProducto);
    product.append(datosProducto);

    productsSection.append(product);
});


/*
// La estructura del carrito será:
// { id: XX, name: XXXX, price: XXX, amount: XX }
let carrito = [];

renderPage();

// Renderiza la página, esta función se llamará al ejecutar el script
// y después de cada vez que se cambie la página
function renderPage() {
    let productNodes = products.map( createProductNode );


    let productSection = document.getElementById('products-section');
    productSection.innerHTML = '';
    productSection.append(...productNodes);

    //Añadimos los listener a los botones
    let buttons = document.querySelectorAll('.btn-add-product');
    buttons.forEach( (btn) => {
        console.log("Añadiendo listener")
        btn.addEventListener( 'click', addToCart );
    } )
}

// Recoge los datos del producto y devuelve un nodo HTML con la estructura del producto
function createProductNode( {id, product, price, image} ) {
    // Creamos el div base del producto
    let divProduct = document.createElement('div');
    divProduct.classList.add('product');
    
    // Añadimos la foto
    let img = document.createElement('img');
    img.setAttribute('src', image);
    img.classList.add('product-photo');
    divProduct.append(img);
    
    // Añadimos el texto inferior
    let data = document.createElement('div');
    data.classList.add('product-data');
    data.innerHTML = `
        <div class="fruit-name">${ product }</div>
        <div class="price-btn">
            <div class="price">${ (price/100).toFixed(2) } €/Kg</div>
            <div class="btn btn-add-product" data-id="${id}">Añadir</div>
        </div>
    `;
    divProduct.append(data);

    return divProduct;
}

// Handler del botón Añadir. Recoge el identificador del producto a partir del 
// atributo data-id del botón que ha disparado el evento
function addToCart( e ) {
    let productId = e.target.getAttribute('data-id');
    let product = products.find( (item) => item.id == productId );
    // Averiguamos si el producto ya está en el carrito
    let productIndex = carrito.findIndex( (item) => item.id == productId );

    if ( productIndex != -1 ) {
        carrito[productIndex ].amount +=1;
    } else {
        carrito.push({
            ...product,
            amount: 1
        })
    }
    
    renderCarrito();
}

// Renderiza el carrito. Cada vez que se añade un producto dibuja completamente el carrito
// a partir del contenido de la variable carrito
function renderCarrito() {
    let divCarritoContent = document.getElementById('carrito-content');

    // Se construye el carrito a partir de la variable carrito
    let compra =  carrito.map( ( {amount, product, price} ) => {
        let carritoRow = document.createElement('div');
        carritoRow.classList.add('carrito-row');
        carritoRow.innerHTML = `<span class="amount-column">${amount}</span><span class="product-column">${product}</span><span class="price-column">${(price*amount/100).toFixed(2)} €</span>`;
        return carritoRow;
    } );

    divCarritoContent.replaceChildren(...compra)

    // Añadimos el total
    let divCarritoTotal = document.getElementById('carrito-total');
    let total = carrito.reduce( (acum, {amount, price}) => acum + (price*amount), 0 );
    divCarritoTotal.innerHTML = `
        <span class="total-column">TOTAL</span><span class="total">${ (total/100).toFixed(2) } €</span>
    `;
}
*/