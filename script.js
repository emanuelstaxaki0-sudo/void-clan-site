// ===== PARTÍCULAS DE FUNDO =====

const particles = [];

const canvas = document.createElement("canvas");

document.body.appendChild(canvas);


const ctx = canvas.getContext("2d");


canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";


function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();


window.addEventListener("resize", resize);



class Particle {

    constructor(){

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 3 + 1;

        this.speedX = Math.random() * 1 - 0.5;

        this.speedY = Math.random() * 1 - 0.5;


        this.color = Math.random() > 0.5
        ? "#00bfff"
        : "#ff00ff";

    }


    update(){

        this.x += this.speedX;

        this.y += this.speedY;


        if(this.x < 0 || this.x > canvas.width){

            this.speedX *= -1;

        }


        if(this.y < 0 || this.y > canvas.height){

            this.speedY *= -1;

        }

    }


    draw(){

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle = this.color;

        ctx.shadowBlur = 15;

        ctx.shadowColor = this.color;


        ctx.fill();

    }

}




for(let i = 0; i < 80; i++){

    particles.push(new Particle());

}




function animate(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(particle => {

        particle.update();

        particle.draw();

    });


    requestAnimationFrame(animate);

}


animate();





// ===== ANIMAÇÃO AO SCROLL =====


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const top =
        section.getBoundingClientRect().top;


        if(top < window.innerHeight - 100){

            section.style.opacity = "1";

            section.style.transform =
            "translateY(0)";

        }


    });


});



// configuração inicial

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform=
    "translateY(50px)";

    section.style.transition=
    "1s";

});





// ===== EFEITO NO LOGO =====


const logo = document.querySelector(".logo");


logo.addEventListener("click",()=>{


    logo.style.transform="scale(1.2)";


    setTimeout(()=>{

        logo.style.transform="scale(1)";

    },300);


});