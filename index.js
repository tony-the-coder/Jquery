// $('h1').addClass("big-title margin-50");


//Changes all text that matches the item. 
// $('h1').text("Bye");
// $('button').text("This is a button");

// $('button').html("<em>I am still a button</em>")

//Changing Attributes

// console.log($("img").attr("src"))

// $("a").attr("href", "https://www.bing.com");

//Adding some kind of event

// $("h1").click(function () {
//     $("h1").css("color", "red");
// })

// $("button").click(function () {
//     $("h1").css("color", "purple")
// });

// $(document).keydown(function (event) {
//     console.log(event.key);
//     $("h1").text(event.key)
// })

// $('h1').on("mouseover", function () {
//     $("h1").css("color", "green")
// })

$('button').on("click", function () {
    // $('h1').toggle();
    // $('h1').fadeOut();
    // $('h1').fadeToggle();
    // $('h1').slideToggle();
    // $("h1").animate({
    //     opacity: 0.5
    // });
    //Can chain items together
    $('h1').slideUp().slideDown().animate({
        opacity: 0.1
    });
}
)

