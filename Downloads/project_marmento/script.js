function displayCategoryProducts(products, categoryId) {
    const container = document.getElementById(categoryId);
    container.innerHTML = '';
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    products.forEach(product => {
        const truncatedTitle = product.title.length > 12 ? product.title.substring(0, 12) + '...' : product.title;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="image-container">
                ${product.badge_text ? `<div class="badge">${product.badge_text}</div>` : ''}
                <img src="${product.image}" alt="${product.title}" 
                    onmouseover="this.src='${(product.second_image && product.second_image !== 'empty') ? product.second_image : product.image}'" 
                    onmouseout="this.src='${product.image}'">
            </div>
            <h4>${truncatedTitle} • <span>${product.vendor}</span></h4>
            <div class="price-details">
                <span class="price">Rs ${product.price}.00</span>
                <span class="compare-at-price">${product.compare_at_price}.00</span>
                <span class="discount">${calculateDiscount(product.price, product.compare_at_price)}% Off</span>
            </div>
            <button>Add to Cart</button>
        `;
        cardContainer.appendChild(card);
    });

    container.appendChild(cardContainer);
}

function calculateDiscount(price, compare_at_price) {
    price = parseFloat(price);
    compare_at_price = parseFloat(compare_at_price);
    var discount = compare_at_price - price;
    var percentageOff = (discount / compare_at_price) * 100;
    return Math.round(percentageOff);
}

// Function to open a category and display its products
function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";


    // Load the product data for the chosen category
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => response.json())
        .then(data => {
            const categoryData = data.categories.find(c => c.category_name === categoryName);
            if (categoryData) {
                displayCategoryProducts(categoryData.category_products, categoryName);
            }
        })
        .catch(error => {
            console.error('Error fetching the product data:', error);
        });
}


// Initialize the tab state and select the 'Men' category by default
document.addEventListener('DOMContentLoaded', () => {
    let menTab = document.querySelector('.tablinks');
    if (menTab) menTab.click();
}
);
