$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });
    function updateHour(){
        var currHour = moment().hours();

        $(".time-block").each(function(){
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);

            if (hourBlock < currHour) {
                $(this).addClass("past");
              }
        });
    }
})