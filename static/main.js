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

// window.onhashchange = newroutetest;

// $( document ).ready(function(){
//     newroutetest()
// })


// function newroutetest(){
//     let url
//     if (location.hash!='') {
//         url = window.location.hash.replace('#', '/')
//     }
//     else{
//         url='/home'
//     }
//     var xhttp = new XMLHttpRequest()
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("content").innerHTML = this.responseText;
//         }
//     }
//     xhttp.open("GET", url, true);
//     xhttp.send();
// }