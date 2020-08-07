/*function locationHashChanged( e ) {
    $.ajax({
        type:'GET',
        url:e.newURL,
        success: function () {
            if (window.location.hash===""){
                $('html').load('/');
                document.title='Home';
            }
            else if (window.location.href.indexOf("#") >-1){
                $('#content').load(location.hash.replace('#','/'));
                document.title=location.hash.replace("#","")
            }
            else {
                $('html').load('/');
                document.title='Home';
            }
        }
    });
}*/

window.onhashchange = newroutetest;

$( document ).ready(function() {
    newroutetest()
})


function newroutetest(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if (location.hash==''){
            $('html').load(this.responseText);
        }
        else if(this.readyState == 4 && this.status==200){
            document.getElementById("content").innerHTML = this.responseText;
        }
    }
    console.log(location.hash)
    xhttp.open("GET", location.hash.replace('#','/'), true);
    xhttp.send();
}


