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

function loadingurl(url) {
    $.ajax({
        type:'GET',
        url:url,
        success: function () {
            $('#content').load(url);
        }
    });
    window.history.pushState({url: url}, '', url);
}
