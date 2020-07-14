function locationHashChanged( e ) {
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
}

window.onhashchange = locationHashChanged;

$( document ).ready(function() {
    locationHashChanged(location.hash)
})

/*$(window).bind('hashchange', function() {
    $.ajax({
        type:'GET',
        url:url,
        success: function (response) {
            alert(response)
            $('#content').load(url);
        }
    });
    window.history.pushState({url: url}, '', url);
});*/
