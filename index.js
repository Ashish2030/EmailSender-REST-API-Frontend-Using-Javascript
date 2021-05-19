function send()
{
 
        var from = document.getElementById("from").value;
        var password = document.getElementById("password").value;
        var to = document.getElementById("to").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("Message").value;
         var valid=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (subject.length===0||message.length===0||!from.match(valid)||!to.match(valid)) 
        {
            alert("Invalid Input")
        }
        else {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://email9876.herokuapp.com/data", true);
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
    
                }
            };
    
    
            var json = {
                "from": from,
                "password": password,
                "to": to,
                "subject":subject,
                "message":message
            };
            xhttp.send(JSON.stringify(json));
         

          
        }
  setTimeout(function () { window.location.reload(); }, 200);
    
       
    

}
