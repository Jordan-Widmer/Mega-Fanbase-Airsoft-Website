document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

// Sample Blog Post Data
const blogPosts = [
    {
        title: 'How to Choose the Right Airsoft Gear',
        content: 'Choosing the right gear can make a huge difference in your airsoft experience. Here are some tips...',
        link: '#'
    },
    {
        title: 'Top 10 Airsoft Strategies',
        content: 'Master these strategies to dominate your next airsoft match. From teamwork to tactical maneuvers...',
        link: '#'
    }
];

// Display Blog Posts
const blogContainer = document.querySelector('.blog-posts');
blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <a href="${post.link}" class="btn">Read more</a>
    `;
    blogContainer.appendChild(postElement);
});
