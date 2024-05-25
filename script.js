// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Offset for fixed header
            behavior: 'smooth'
        });
    }

    // Image Modal
    const galleryImages = document.querySelectorAll('.gallery-images img');
    galleryImages.forEach(image => {
        image.addEventListener('click', openModal);
    });

    function openModal(event) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <img src="${event.currentTarget.src}" alt="${event.currentTarget.alt}">
            </div>
        `;
        document.body.appendChild(modal);
        document.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);

    function validateForm(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
        } else {
            alert('Thank you for contacting us!');
            form.reset();
        }
    }

    // Google Maps
    window.initMap = function() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 20.5937, lng: 78.9629 },
            zoom: 5
        });

        const showrooms = [
            { position: { lat: 28.7041, lng: 77.1025 }, title: 'Delhi' },
            { position: { lat: 19.0760, lng: 72.8777 }, title: 'Mumbai' },
            { position: { lat: 13.0827, lng: 80.2707 }, title: 'Chennai' },
            { position: { lat: 22.5726, lng: 88.3639 }, title: 'Kolkata' }
        ];

        showrooms.forEach(showroom => {
            new google.maps.Marker({
                position: showroom.position,
                map: map,
                title: showroom.title
            });
        });
    };
});
