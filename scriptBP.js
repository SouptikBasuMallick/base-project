// Product data - Easy to customize
const products = [
    {
        name: "Product 1",
        price: "$19.99",
        description: "A great product for everyday use.",
        image: "https://via.placeholder.com/300x200?text=Product+1"
    },
    {
        name: "Product 2",
        price: "$29.99",
        description: "High-quality and durable.",
        image: "https://via.placeholder.com/300x200?text=Product+2"
    },
    {
        name: "Product 3",
        price: "$39.99",
        description: "Perfect for professionals.",
        image: "https://via.placeholder.com/300x200?text=Product+3"
    }
];

// Contact details
const phoneNumber = "+1234567890";
const whatsappNumber = "+1234567890";

// DOM elements
const productGrid = document.getElementById('product-grid');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const loginForm = document.getElementById('login-form');
const signupToggle = document.getElementById('signup-toggle');
const signupForm = document.getElementById('signup-form');
const signupBtn = document.getElementById('signup-btn');
const phoneLink = document.getElementById('phone-link');
const whatsappLink = document.getElementById('whatsapp-link');

// Load products dynamically
function loadProducts() {
    if (!productGrid) return;

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <div class="buttons">
                <button onclick="orderOnWhatsApp('${product.name}')">Order on WhatsApp</button>
                <button onclick="callToOrder()">Call to Order</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// WhatsApp order
function orderOnWhatsApp(productName) {
    const message = encodeURIComponent(`Hi, I'd like to order ${productName}.`);
    window.open(
        `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`,
        '_blank'
    );
}

// Call to order
function callToOrder() {
    window.location.href = `tel:${phoneNumber}`;
}

// Hamburger menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Login form
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }

        console.log('Logged in with:', email);
        alert('Login successful!');
    });
}

// Signup toggle
if (signupToggle) {
    signupToggle.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });
}

// Signup form
if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }

        console.log('Signed up with:', email);
        alert('Signup successful!');
    });
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Set contact links
if (phoneLink) phoneLink.href = `tel:${phoneNumber}`;
if (whatsappLink) whatsappLink.href = `https://wa.me/${whatsappNumber.replace('+', '')}`;

// Initialize
loadProducts();
