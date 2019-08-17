document.getElementById("get_laugh").onclick = button_Click;
var five = 0;
function button_Click()
{
    document.getElementById("get_laugh").innerHTML = "Make me Laugh";

    var need_url = 'https://geek-jokes.sameerkumar.website/api';
    five++;
    $.ajax({
            
        method: 'GET',
        url: need_url,
        
    }).then(function(parameter) {
        
        if(five <=5)
        {
        console.log(parameter)
        $("#res").append(parameter);    
        }else{
            document.getElementById("res").innerHTML = "";
            document.getElementById("get_laugh").innerHTML = "RESET";
            five = 0;
        }
    })
 }