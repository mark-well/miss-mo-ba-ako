
let yesBtn = document.querySelector(".btn-yes");
let noBtn = document.querySelector(".btn-no");
let image = document.querySelector(".icon");
let text = document.querySelector(".text");
let particles = document.querySelectorAll(".particle");
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let gap = 48;
let yesClickCounter = 0;
let noClickCounter = 0;

let gif1 = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2E3cGx6cXA2ODR2amUxdng0ZHU0bTdqcTAyMHVwbXlqbnVqbWkwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TSuR7EyTAL71dz5Tsv/giphy.gif";
let gif2 = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3cwZjhraXhlNWM1NWFlcGVjeHpwam51MHNjcDFhaHN4d3VvcjdzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D9j761FH8SYJLyW9WO/giphy.gif"
let gif3 = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpwcDAzZ2ZtYmRoM3hjZXJrOHRndnMyeG9keGN2eHQzY3NyNmxrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XYEEvoX0Ub69ZgN9ai/giphy.gif"
let gif4 = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWpkb3o4MHJrdHM3NjB1dmpwMGJhaXYxdDJjdmM0N25xdjc2cmM0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/86txpiLvnEGp5fgw25/giphy.gif"
let gif5 = "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cWt1NjV4YmoxazFyMzV2MzFkazMxOXN2d3p0emx0dHZrbzhyODA2ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/awjh48VUptCPbEvYob/giphy.gif"
let gif6 = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGV5OGt3eXp3aTl1MGxrdHJkMXIzNWI5OTJuZzRndG1wa2QzNG9uOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yzDNdo4s1oGw7jEu24/giphy.gif"
let gif7 = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhucWk3MXA3NWd5bzJtdGI2eGU0NGxrcDV6bjJ2NDJ3cDZjYjZqcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lv2VhwHrt6ljhvZ6LF/giphy.gif"

yesBtn.style.transform = `translateX(${((screenWidth/2) - yesBtn.offsetWidth) - (gap/2)}px)`;
noBtn.style.transform = `translateX(${(screenWidth/2) + (gap/2)}px)`;

    window.addEventListener('resize', () => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    yesBtn.style.transform = `translateX(${((screenWidth/2) - yesBtn.offsetWidth) - (gap/2)}px)`;
    noBtn.style.transform = `translateX(${(screenWidth/2) + (gap/2)}px)`;
});

function yesButtonClick() {
    yesClickCounter += 1;
    noBtn.style.display = "none";
    image.src = gif2;
    text.textContent = "I MISS U TOOO!!"
    toggleScale(image)
    toggleScale(text)
    createConfetti();

    particles.forEach(element => {
        element.style.display = "block";
    });
    
    if(yesClickCounter >= 2) {
        text.textContent = "Super miss yarn?"
         // Change to gif7
        if(image.src !== gif7) {
            image.src = gif7;
        }
    }
}

function noButtonClick() {
    let newCoords = getRandomCoordinates();
    noBtn.style.transform = `translate(${newCoords.x}px, ${newCoords.y}px)`;
    noClickCounter += 1;

    if(noClickCounter >= 3) {
        noBtn.style.width = "5.125rem"
        noBtn.style.height = "2rem"
        toggleScale(yesBtn);

        // Change to gif3
        if(image.src !== gif3) {
            image.src = gif3;
        }

        text.textContent = "Sure ka 'di mo ako miss??"
        toggleScale(text)
    }

    if(noClickCounter >= 5) {
        // Change to gif4
        if(image.src !== gif4) {
            image.src = gif4;
        }
    }
    
    if(noClickCounter >= 6) {
        noBtn.style.width = "2rem"
        noBtn.style.height = "1rem"
        noBtn.style.fontSize = "0.5rem"

        text.textContent = "Sure ka talaga??????"
        // Change to gif5
        if(image.src !== gif5) {
            image.src = gif5;
        }
    }

    if(noClickCounter >= 8) {
        noBtn.style.display = "none";
        text.textContent = "...."
        // Change to gif6
        if(image.src !== gif6) {
            image.src = gif6;
        }
    }
}

function toggleScale(target) {
  // Add the shake animation class
  target.classList.add('scale-animation');

  // Remove the class after the animation duration to allow it to be re-triggered
  setTimeout(() => {
    target.classList.remove('scale-animation');
  }, 500); // 500ms matches the animation duration in CSS
}

function getRandomCoordinates() {
    let x = randomInteger(0, screenWidth - yesBtn.offsetWidth);
    let y = randomInteger(0, (screenHeight/2) - yesBtn.offsetHeight);

    return {x,y};
}

// Source - https://stackoverflow.com/a
// Posted by Lior Elrom, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-08, License - CC BY-SA 4.0
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Confetti 
function createConfetti() {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.zIndex = "-1";
        confetti.className = 'confetti';
        confetti.style.left = window.innerWidth / 2 + 'px';
        confetti.style.top = window.innerHeight / 2 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        document.body.appendChild(confetti);
        
        const angle = (Math.PI * 2 * i) / confettiCount;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 3;
        
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 4;
        let velX = vx;
        let velY = vy;
        
        const animate = () => {
            x += velX;
            y += velY;
            velY += 0.1; // gravity
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.opacity = Math.max(0, 1 - (y - window.innerHeight / 2) / 300);
            
            if (y < window.innerHeight + 100) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        
        animate();
    }
}
