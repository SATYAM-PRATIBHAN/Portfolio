let animateText = (element, delay, resetDelay) => {
    let text = element.textContent;
    element.innerHTML = '';
    let delayIncrement = 0;

    text.split('').forEach(char => {
        let span = document.createElement('span');
        span.textContent = char;
        span.style.animation = `fadeIn 0.5s ${delayIncrement}s forwards`;
        element.appendChild(span);
        delayIncrement += delay;
    });

    setTimeout(() => {
        element.innerHTML = text;
        animateText(element, delay, resetDelay);
    }, delayIncrement * 1000 + resetDelay);
};

document.addEventListener('DOMContentLoaded', () => {
    let heading = document.getElementById('animated-text');
    let paragraph = document.getElementById('animated-txt');
    
    animateText(heading, 0.1, 1000); 
    animateText(paragraph, 0.1, 1000);
});

let heroImage = document.querySelector('.hero-image img');
let heroSection = document.querySelector('.hero');

document.addEventListener('DOMContentLoaded', function() {
    let counters = document.querySelectorAll('.stat-number');
    let speed = 1000; 

    let animateCounters = () => {
        counters.forEach(counter => {
            let updateCount = () => {
                let target = +counter.getAttribute('data-target');
                let count = +counter.innerText;

                // Determine the increment
                let increment = target / speed;

                // If count is less than target, add increment
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    let options = {
        root: null,
        threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, options);

    let statsSection = document.querySelector('.statistics-container');
    observer.observe(statsSection);
});

function anime() {
    window.open("https://satyam-pratibhan.github.io/Anime-Website/", "_blank");
}
function food() {
    window.open("https://satyam-pratibhan.github.io/Food-Company/", "_blank");
}
function coffee() {
    window.open("https://satyam-pratibhan.github.io/Coffee-Shop/", "_blank");
}
function git_anime() {
    window.open("https://github.com/SATYAM-PRATIBHAN/Anime-Website", "_blank");
}
function git_food() {
    window.open("https://github.com/SATYAM-PRATIBHAN/Food-Company", "_blank");
}
function git_coffee() {
    window.open("https://github.com/SATYAM-PRATIBHAN/Coffee-Shop", "_blank");
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let templateParams = {
        from_name: name,
        email_id: email,
        message: message
    };

    emailjs.send('service_bsohvvr', 'template_nmtphxh', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });

    document.getElementById('contact-form').reset();
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

let togglebtn = document.querySelector(".toggle-btn");
let togglebtnicon = document.querySelector(".toggle-btn i");
let dropdownmenu = document.querySelector(".dropdown");

togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open');
    let isopen = dropdownmenu.classList.contains('open');
    togglebtnicon.classList = isopen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

let loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
})