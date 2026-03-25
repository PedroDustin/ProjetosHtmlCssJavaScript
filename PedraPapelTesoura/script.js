const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user-result img"),
    cpuResult = document.querySelector(".cpu-result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "img/rock.png";
        result.textContent = "espere.."

        optionImages.forEach((image2, index2) =>{
            // console.log(index, index2);
            index !== index2 && image2.classList.remove("active");            
        });

        gameContainer.classList.add("start");
        
        let time = setTimeout(()=>{
            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);
        // console.log(randomNumber);
        let cpuImages = ["img/rock.png", "img/paper.png", "img/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];

        let cpuValue = ["R", "P", "S"][randomNumber];

        let userValue = ["R", "P", "S"][index];

        let outcomes = {
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "Cpu",
            SS: "Draw",
            SR: "Cpu",
            SP: "User",
        };

        let outComevalue = outcomes[userValue + cpuValue];

        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComevalue} won!!`;   
        },2500);
    });
});