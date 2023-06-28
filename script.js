// menu variables
const btn = document.getElementById('union-logo');
const close = document.getElementById('menu-close');
const menu = document.getElementById('menu');

// menu functions
btn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

function closedMenu() {
  menu.style.display = 'none';
  document.body.style.overflow = 'scroll';
}
close.addEventListener('click', closedMenu);
menu.addEventListener('click', closedMenu);

// product functions
const productCard = document.getElementById('section-product');
const productHeader = document.createElement('div');

productHeader.innerHTML = `<h2>Main Products</h2>
                            <div class="line"></div>`;
productCard.appendChild(productHeader);

const productContainer = document.createElement('div');

const products = [
  {
    image: 'images/1.jpeg',
    title: 'Bubu Dudu Sleeping Hoodies',
    price: '&#8377 999',
    img: 'images/truck.svg',
  },
  {
    image: 'images/2.jpeg',
    title: 'Bubu Dudu Sleeping Hoodies',
    price: '&#8377 999',
    img: 'images/truck.svg',
  },
  {
    image: 'images/3.jpeg',
    title: 'Bubu Dudu Sleeping Hoodies',
    price: '&#8377 999',
    img: 'images/truck.svg',
  },
  {
    image: 'images/4.jpeg',
    title: 'Bubu Dudu Happy Birthday White Cushion',
    price: '&#8377 499',
    img: 'images/truck.svg',
  },
  {
    image: 'images/5.jpeg',
    title: 'Happy Anniversary Bubu Dudu Magic Mug',
    price: '&#8377 999',
    img: 'images/truck.svg',
  },
  {
    image: 'images/6.jpeg',
    title: 'Bubu Dudu(Bear Panda) Soft Toys/Plushies/Teddy',
    price: '&#8377 999',
    img: 'images/truck.svg',
  },
];

products.forEach((product, index) => {
  const {
    image, title, price, img,
  } = products[index];
  const productContent = document.createElement('div');
  productContent.className = 'product-content';
  productContent.innerHTML = `
                                <div class="product-image">
                                    <img src=${image} alt="product-image">
                                </div>
                                <div class="product-details">
                                    <h4>${title}</h4>
                                    <span>${price}</span> &#8377 799
                                    <hr class="line-black">
                                    <img src=${img} alt="truck" style="color:grey">
                                    Standard shipping in 10 working days
                                </div>`;

  productContainer.appendChild(productContent);
});

const showMore = document.createElement('div');

productHeader.className = 'product-header';
productContainer.className = 'product-container';
showMore.className = 'show-more';

showMore.innerHTML = `<span>More</span>
                        <img src="images/arrow-down.png" alt="arrow-down">`;

productCard.appendChild(productContainer);

showMore.addEventListener('click', () => {
  productContainer.style.maxHeight = 'fit-content';
});
productCard.appendChild(showMore);