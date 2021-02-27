let random: number = Math.floor((Math.random() * 5));
let obj: JQuery<HTMLElement>;

$(document).ready(function() {
    switch(random) {
        case 0:
            obj = $("#message").text("o_0\nResource not found!");
            break;
        case 1:
            $("#message").css("font-family", "Famicom");
            $("#message").css("font-size", 18)
            obj = $("#message").text("うわー！　404ダヨー！！\nこのサービスを見つけませんでした");
            break;
        case 2:
            obj = $("#message").text("I AM ERROR\nResource not found!");
            break;
        case 3:
            obj = $("#message").text("GAME OVER\nRETURN OF GANON\nResource not found!");
            break;
        case 4:
            obj = $("#message").text("A WILD MISSINGNO APPEARED!\nResource not found!");
            break;
        case 5:
            obj = $("#message").text("Resource not found!");
            break;
    }
    obj.html(obj.html().replace(/\n/g,'<br/>'));    
});
