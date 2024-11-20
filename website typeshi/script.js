let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                
                let currentLink = document.querySelector('header nav a[href*=' + id + ']');
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            });
        }
    });
};


let doctorGptLink = document.querySelector('header nav a[href="#doctor-gpt"]');
if (doctorGptLink) {
    doctorGptLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        window.open("#doctor-gpt", "_blank"); 
    });
    
}
