// blog-detail.js

document.addEventListener('DOMContentLoaded', () => {
    const blogId = window.location.pathname.split('/').pop(); // Extract blog ID from URL
    const apiUrl = `https://collegeproject1211.pythonanywhere.com/homepage/blog/${blogId}/`; // API endpoint for blog details

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const blogDetailContainer = document.getElementById('blog-detail');
            const language = localStorage.getItem('selectedLang') || 'uz'; // Get selected language

            if (data[language]) {
                const blogData = data[language];
                blogDetailContainer.innerHTML = `
                    <h2>${blogData.title.uz}</h2>
                    <p>${blogData.description.uz}</p>
                `;
            } else {
                blogDetailContainer.innerHTML = '<p>Blog data not available.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching blog details:', error);
            document.getElementById('blog-detail').innerHTML = '<p>Failed to load blog details.</p>';
        });
});
