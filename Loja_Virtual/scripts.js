const products = [
    { name: 'Smartphone', category: 'electronics', price: 600, image: 'smartphone.jpg' },
    { name: 'Livro de Ficção', category: 'books', price: 20, image: 'book.jpg' },
    { name: 'Camiseta', category: 'fashion', price: 30, image: 'tshirt.jpg' },
    { name: 'Laptop', category: 'electronics', price: 1200, image: 'laptop.jpg' },
    { name: 'Sapato', category: 'fashion', price: 80, image: 'shoes.jpg' },
];

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const categoryFilter = document.getElementById('category');
    const priceRangeFilter = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const sortSelect = document.getElementById('sort');

    const renderProducts = (filteredProducts) => {
        productGrid.innerHTML = '';
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">R$ ${product.price}</p>
                <button>Comprar</button>
            `;
            productGrid.appendChild(productElement);
        });
    };

    const filterProducts = () => {
        const category = categoryFilter.value;
        const maxPrice = priceRangeFilter.value;

        let filteredProducts = products.filter(product => 
            (category === 'all' || product.category === category) && 
            product.price <= maxPrice
        );

        renderProducts(filteredProducts);
    };

    const sortProducts = () => {
        const sortBy = sortSelect.value;
        const sortedProducts = [...products].sort((a, b) => {
            switch (sortBy) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                default:
                    return 0;
            }
        });

        renderProducts(sortedProducts);
    };

    categoryFilter.addEventListener('change', filterProducts);
    priceRangeFilter.addEventListener('input', (event) => {
        priceValue.textContent = `0 - ${event.target.value}`;
        filterProducts();
    });
    sortSelect.addEventListener('change', sortProducts);

    renderProducts(products); // Initial render
});
