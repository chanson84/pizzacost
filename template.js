$(document).ready(
    function () {

//add event handlers
        $("#calcButton").click(calculateTrip);
       // $("#alertButton").click(showPopup)
        //all other functions (program logic)
        function calculateTrip()
        {
        //Get data from imput
         var toppings = $("#toppings").val();
         toppings =parseFloat(toppings);
         var number= $("#number").val;
         number=parseFloat(number);
         //parse numbers

         //Do Math
         var toppingcost =  toppings * 1.25;
         var pizzacost= toppingcost + 15.00;
         var costperson= pizzacost/  number;
         //Put in Spans
         $("#costOutput").text(costperson.toFixed(2));
         $(".output").show();
        }

    }
)