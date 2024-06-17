const products = [
  {
    id: '1',
    title: 'Pick upwhere ',
    img: "./source/box/g.jpg",
  },
  {
      id: '2',
      title: 'Pick upwhere ',
      img: "./source/box/q.jpg",
    },
    {
      id: '3',
      title: 'Pick upwhere ',
      img: "./source/box/r.jpg",
    },
    {
      id: '4',
      title: 'Pick upwhere ',
      img: "./source/box/w.jpg",
    },
    
];


let Products = [...products];                  
//Data 0{}1{}...good  /bad [12{012..}]
//[...direct copy]
const productsContainer = document.querySelector('.products-container1');//grid All products
const productsContaine= document.querySelector('.products-container2');//grid All products
const productsContain = document.querySelector('.products-container3');
const productsContai = document.querySelector('.products-container4');



const displayProducts = () => {
  if (Products.length < 1) {//emty data show error message
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = Products
    .map((product) => {
      const { id, title, img} = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${img}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h2 class="product-name">${title}</h2>
        
          </footer>
        </article>`;
    })
    .join('');
};
displayProducts();//show All product call Automatic

const displayProduct = () => {
  if (Products.length < 1) {//emty data show error message
    productsContaine.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContaine.innerHTML = Products
    .map((product) => {
      const { id, title, img, price } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${img}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h2 class="product-name">${title}</h2>
           
          </footer>
        </article>`;
    })
    .join('');
};
displayProduct();

const displayProduc = () => {
  if (Products.length < 1) {//emty data show error message
    productsContain.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContain.innerHTML = Products
    .map((product) => {
      const { id, title, img, price } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${img}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h2 class="product-name">${title}</h2>
          </footer>
        </article>`;
    })
    .join('');
};
displayProduc();


const displayProdu= () => {
  if (Products.length < 1) {//emty data show error message
    productsContai.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContai.innerHTML = Products
    .map((product) => {
      const { id, title, img } = product;
      return `<article class="product" data-id="${id}">
      
          <img
            src="${img}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h2 class="product-name">${title}</h2>
          </footer>
        </article>`;
    })
    .join('');
};
displayProdu();