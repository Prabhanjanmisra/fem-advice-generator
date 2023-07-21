function refresh(e) {
    if ($("#button-circle").css("opacity") == 1) {
        $("#button-circle").addClass("clicked");
        setTimeout(function () {
            $("#button-circle").removeClass("clicked");
        }, 100);
    }


    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            $("#quote-id").text(data.slip.id);
            $("#quote-text").text(data.slip.advice);
            $("#button-circle").animate({ opacity: 0.5 });
            setTimeout(function () {
                $("#button-circle").animate({ opacity: 1 });
            }, 1500)
        });
}

const refreshButton = $("#button-circle");
refreshButton.on("click", refresh);

$(window).on("load", function() {
    alert("Click on the dice to refresh.");
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            $("#quote-id").text(data.slip.id);
            $("#quote-text").text(data.slip.advice);
            $("#button-circle").animate({ opacity: 0.5 });
            setTimeout(function () {
                $("#button-circle").animate({ opacity: 1 });
            }, 1500)
        });
})


// Attribution

const myImg = document.querySelector("#my-img");
myImg.addEventListener("click", function() {
    document.querySelector("#hidden").classList.toggle("hide");
})
