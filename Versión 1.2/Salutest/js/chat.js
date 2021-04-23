var btn_send = document.querySelector("#send");
document.querySelector("#answer").focus();

btn_send.addEventListener('click', function(e){

    e.preventDefault();
    var answer = document.querySelector("#answer").value,
        messages = document.querySelector("#messages");
        containerMessages = document.querySelector("#messages");


    if (answer.length > 0) {
        hora();
        var time = (ceroh + h + ":" + ceromin + min + horario)
        
        //  CHAT USER

        let divUser = document.createElement("div");
        let imgUser = document.createElement("img");
        let textUser = document.createElement("p");
        let hourUser = document.createElement("h6");
        divUser.setAttribute("class", "chatUser");
        imgUser.setAttribute("src", "../../resources/img/Favicon.png");
        textUser.innerHTML = answer;
        hourUser.innerHTML = time;
        divUser.appendChild(hourUser);
        divUser.appendChild(textUser);
        divUser.appendChild(imgUser);
        messages.appendChild(divUser);

    
        //BOT MEDIC

        var divBot = document.createElement("div");
        var imgBot = document.createElement("img");

        divBot.setAttribute("class", "botMedic");
        imgBot.setAttribute("src", "../../resources/img/Favicon.png");
        divBot.appendChild(imgBot);
        messages.appendChild(divBot);


        var spinner = document.createElement("div");
        var bounce1 = document.createElement("div");
        var bounce2 = document.createElement("div");
        var bounce3 = document.createElement("div");
        spinner.setAttribute("class", "spinner_chat");
        bounce1.setAttribute("class", "bounce1");
        bounce2.setAttribute("class", "bounce2");
        bounce3.setAttribute("class", "bounce3");
        spinner.appendChild(bounce1);
        spinner.appendChild(bounce2);
        spinner.appendChild(bounce3);
        divBot.appendChild(spinner);
        

        var timeText = (answer.length * 100);
        setTimeout(function(){

            hora();
            var time = (ceroh + h + ":" + ceromin + min + horario);

            divBot.removeChild(spinner);
        
            let textBot = document.createElement("p");
            let hourBot = document.createElement("h6");
            textBot.innerHTML = answer;
            hourBot.innerHTML = time;
            divBot.appendChild(textBot);
            divBot.appendChild(hourBot);
            
        }, timeText);
        

        //SCROLL BOT
        containerMessages.scrollTop = containerMessages.scrollHeight;

        //RESET INPUT
        document.querySelector("#form_chat").reset();
        document.querySelector("#answer").focus();

    }else{
        document.querySelector("#answer").focus();
    }

}); 
