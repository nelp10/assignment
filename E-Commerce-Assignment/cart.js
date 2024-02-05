const product = [
    {
        id: 1,
        image: '../image/t1.png',
        title: 'Hoodie',
        price: "₱399",
    },
    {
        id: 2,
        image: 'image/ts1.png',
        title: 'T-Shirt',
        price: "₱299",
    },
    {
        id: 3,
        image: 'image/p2.png',
        title: 'Jacket',
        price: "₱499",
    },
    {
        id: 4,
        image: 'image/ts2.png',
        title: 'T-Shirt',
        price: "₱299",
    },
    {
        id: 5,
        image: 'image/ts3.png',
        title: 'T-Shirt',
        price: "₱299",
    },
    {
        id: 6,
        image: 'image/p15.png',
        title: 'Long Sleeve',
        price: "₱350",
    },
    {
        id: 7,
        image: 'image/h2.png',
        title: 'Hoodie',
        price: "₱399",
    },
    {
        id: 8,
        image: 'image/h3.png',
        title: 'Hoodie',
        price: "₱399",
    },
    {
        id: 9,
        image: 'image/h3.png',
        title: 'Hoodie',
        price: "₱399",
    },
    {
        id: 10,
        image: 'image/h3.png',
        title: 'Hoodie',
        price: "₱399",
    },
    {
        id: 11,
        image: 'image/h3.png',
        title: 'Hoodie',
        price: "₱399",
    },
    {
        id: 12,
        image: 'image/h3.png',
        title: 'Hoodie',
        price: "₱399",
    },
];
const categories = [...new Set(product.map(item => item.title))];

let cart = document.getElementById('root');
cart.innerHTML = product.map(item => {
    const { Image, title, price } = item;
    return (
        `<div class="box">
            <div class="img-box">
                <img src="${Image}" alt="${title}">
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>`
    );
}).join('');