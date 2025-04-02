// Sample data storage (in a real app, this would be replaced with API calls)
let slidersData = [];
let newsData = [];
let aboutData = [];
let countsData = [];
let serviceData = [];

// Tab management
function setTab(tabNumber) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Show selected tab
    document.getElementById(`tab${tabNumber}`).classList.remove('hidden');
    
    // Update tab styling
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        if (index + 1 === tabNumber) {
            item.classList.add('active');
            item.classList.remove('bg-[#ececec50]', 'text-[#7a7c80]');
        } else {
            item.classList.remove('active');
            item.classList.add('bg-[#ececec50]', 'text-[#7a7c80]');
        }
    });
}

// Slider functions
function addSlider() {
    const title = document.getElementById('sliderTitle').value;
    const desc = document.getElementById('sliderDesc').value;
    const imageFile = document.getElementById('sliderImage').files[0];
    
    if (title && desc && imageFile) {
        const newSlider = {
            id: Date.now().toString(),
            title,
            desc,
            imageUrl: URL.createObjectURL(imageFile)
        };
        
        slidersData.push(newSlider);
        renderSliders();
        
        // Reset form
        document.getElementById('sliderTitle').value = '';
        document.getElementById('sliderDesc').value = '';
        document.getElementById('sliderImage').value = '';
        document.getElementById('sliderImageName').textContent = 'Hech qanday rasm tanlanmagan';
        document.getElementById('sliderImagePreview').classList.add('hidden');
        
        // Close modal
        document.getElementById('sliderModal').close();
    }
}

function deleteSlider(id) {
    slidersData = slidersData.filter(slider => slider.id !== id);
    renderSliders();
}

function renderSliders() {
    const tableBody = document.getElementById('slidersTable');
    tableBody.innerHTML = '';
    
    slidersData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = 'flex justify-between py-[10px] ';
        
        row.innerHTML = `
            <td class="w-[65px] text-center">${index + 1}</td >
            <td class="w-4/6">${item.title}</td>
            <td class="w-4/6">${item.desc}</td>
            <td class="w-3/12">${item.imageUrl.toString().slice(0, 36)}...</td>
            <td onclick="deleteSlider('${item.id}')" class="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center">
                <i class="fa-regular fa-trash-can"></i>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// News functions
function addNews() {
    const title = document.getElementById('newsTitle').value;
    const desc = document.getElementById('newsDesc').value;
    const fullDesc = document.getElementById('newsFullDesc').value;
    const imageUrl = document.getElementById('newsImageUrl').value;
    const by = document.getElementById('newsBy').value;
    
    if (title && desc && fullDesc && imageUrl && by) {
        const newNews = {
            id: Date.now().toString(),
            title,
            desc,
            fullDesc,
            imageUrl,
            by,
            addedAt: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
        };
        
        newsData.push(newNews);
        renderNews();
        
        // Reset form
        document.getElementById('newsTitle').value = '';
        document.getElementById('newsDesc').value = '';
        document.getElementById('newsFullDesc').value = '';
        document.getElementById('newsImageUrl').value = '';
        document.getElementById('newsBy').value = '';
        
        // Close modal
        document.getElementById('newsModal').close();
    }
}

function deleteNews(id) {
    newsData = newsData.filter(news => news.id !== id);
    renderNews();
}

function renderNews() {
    const tableBody = document.getElementById('newsTable');
    tableBody.innerHTML = '';
    
    newsData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = 'flex justify-between py-[10px]';
        
        row.innerHTML = `
            <td class="w-[65px] text-center">${index + 1}</td>
            <td class="w-3/12">${item.title}</td>
            <td class="w-4/12">${item.desc}</td>
            <td class="w-6/12">${item.fullDesc.toString().slice(0, 36)}...</td>
            <td class="w-4/12">${item.imageUrl.toString().slice(0, 36)}...</td>
            <td class="w-2/12">${item.by}</td>
            <td class="w-2/12">${item.addedAt}</td>
            <td onclick="deleteNews('${item.id}')" class="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center">
                <i class="fa-regular fa-trash-can"></i>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// About functions
function addAbout() {
    const name = document.getElementById('aboutName').value;
    const roles = document.getElementById('aboutRoles').value;
    const imageUrl = document.getElementById('aboutImageUrl').value;
    
    if (name && roles && imageUrl) {
        const newAbout = {
            id: Date.now().toString(),
            name,
            roles: roles.split(", "),
            imageUrl
        };
        
        aboutData.push(newAbout);
        renderAbout();
        
        // Reset form
        document.getElementById('aboutName').value = '';
        document.getElementById('aboutRoles').value = '';
        document.getElementById('aboutImageUrl').value = '';
        
        // Close modal
        document.getElementById('aboutModal').close();
    }
}

function deleteAbout(id) {
    aboutData = aboutData.filter(about => about.id !== id);
    renderAbout();
}

function renderAbout() {
    const tableBody = document.getElementById('aboutTable');
    tableBody.innerHTML = '';
    
    aboutData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = 'flex justify-between py-[10px]';
        
        row.innerHTML = `
            <td class="w-[65px] text-center">${index + 1}</td>
            <td class="w-4/12">${item.name}</td>
            <td class="w-4/12">${item.roles.join(", ")}</td>
            <td class="w-3/12">${item.imageUrl.toString().slice(0, 36)}...</td>
            <td onclick="deleteAbout('${item.id}')" class="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center">
                <i class="fa-regular fa-trash-can"></i>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Counts functions
function addCounts() {
    const title = document.getElementById('countsTitle').value;
    const desc = document.getElementById('countsDesc').value;
    
    if (title && desc) {
        const newCounts = {
            id: Date.now().toString(),
            title,
            desc
        };
        
        countsData.push(newCounts);
        renderCounts();
        
        // Reset form
        document.getElementById('countsTitle').value = '';
        document.getElementById('countsDesc').value = '';
        
        // Close modal
        document.getElementById('countsModal').close();
    }
}

function deleteCounts(id) {
    countsData = countsData.filter(counts => counts.id !== id);
    renderCounts();
}

function renderCounts() {
    const tableBody = document.getElementById('countsTable');
    tableBody.innerHTML = '';
    
    countsData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = 'flex justify-between py-[10px]';
        
        row.innerHTML = `
            <td class="w-[65px] text-center">${index + 1}</td>
            <td class="w-5/12">${item.title}</td>
            <td class="w-5/12">${item.desc.toString().slice(0, 36)}...</td>
            <td onclick="deleteCounts('${item.id}')" class="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center">
                <i class="fa-regular fa-trash-can"></i>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Service functions
function addService() {
    const items = document.getElementById('serviceItems').value;
    const imageUrl = document.getElementById('serviceImageUrl').value;
    
    if (items && imageUrl) {
        const newService = {
            id: Date.now().toString(),
            items: items.split(", "),
            imageUrl
        };
        
        serviceData.push(newService);
        renderService();
        
        // Reset form
        document.getElementById('serviceItems').value = '';
        document.getElementById('serviceImageUrl').value = '';
        
        // Close modal
        document.getElementById('serviceModal').close();
    }
}

function deleteService(id) {
    serviceData = serviceData.filter(service => service.id !== id);
    renderService();
}

function renderService() {
    const tableBody = document.getElementById('serviceTable');
    tableBody.innerHTML = '';
    
    serviceData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = 'flex justify-between py-[10px]';
        
        row.innerHTML = `
            <td class="w-[65px] text-center">${index + 1}</td>
            <td class="w-5/12">${item.items.join(", ")}</td>
            <td class="w-5/12">${item.imageUrl.toString().slice(0, 38)}...</td>
            <td onclick="deleteService('${item.id}')" class="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center">
                <i class="fa-regular fa-trash-can"></i>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Set default tab
    setTab(1);
    
    // Set up image preview for slider
    document.getElementById('sliderImage').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            document.getElementById('sliderImageName').textContent = file.name;
            const preview = document.getElementById('sliderImagePreview');
            preview.src = URL.createObjectURL(file);
            preview.classList.remove('hidden');
        } else {
            document.getElementById('sliderImageName').textContent = 'Hech qanday rasm tanlanmagan';
            document.getElementById('sliderImagePreview').classList.add('hidden');
        }
    });
    
    // Add some sample data
    slidersData = [
        {
            id: id,
            title: title,
            desc: desc,
            imageUrl: imageUrl
        }
    ];
    
    newsData = [
        {
            id: id,
            title: title,
            desc: desc,
            fullDesc: fullDesc,
            imageUrl: imageUrl,
            by: by,
            addedAt: addedAt
        }
    ];
    
    aboutData = [
        {
            id: id,
            name: name,
            roles: roles,
            imageUrl: imageUrl
        }
    ];
    
    countsData = [
        {
            id: id,
            title: title,
            desc: desc
        }
    ];
    
    serviceData = [
        {
            id: id,
            items: items,
            imageUrl: imageUrl
        }
    ];
    
    // Render all data
    renderSliders();
    renderNews();
    renderAbout();
    renderCounts();
    renderService();
});