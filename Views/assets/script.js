
$(document).ready(function () {


    // On Click Function to create profile object or redirect if invalid
    $("#profileSubmit").click(function () {
           console.log("Handler for click succesful.");

        // if all responses valid
        if ($("#clientName").val() !== '' && $("#dogName").val() !== '' && $(dogAge).val() !== '') {
            var clientName = $("#clientName").val();
            // console.log("User = " + clientName);

            var dogName = $("#dogName").val();
            // console.log("Dog = " + dogName);

            var dogAge = $("#dogAge").val();
            // console.log("Age = " + dogAge);

            var dogBreed = $("#dogBreed").val();
            // console.log("Breed = " + dogBreed);

            var dogSex = $("#dogSex").val();
            // console.log("Sex = " + dogSex);

            var dogSnipped = $("#dogSnipped").val();
            // console.log("Snipped = " + dogSnipped);

            var $items = $('#clientName, #dogName, #dogAge, #dogBreed, #dogSex, #dogSnipped ')
            var obj = {}
            $items.each(function () {
                obj[this.id] = $(this).val();
            })

            var json = JSON.stringify(obj);

            console.log(json);

            // if invalid/incomplete
        } else {
            alert("Please answer all questions before submitting.");
            // Highlight unanswered text
            // function highlight (){
            //     if ()
            // };
        };

    });



    TESTER = document.getElementById('tester');
    Plotly.newPlot(TESTER, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }], {
        margin: { t: 0 }
    });

});











// attempt animate again if time

// $(document).ready(function(){

// $("#slideshow > div:gt(0)").hide();

// setInterval(function() { 
//   $('#slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow');
// },  3000);
// });