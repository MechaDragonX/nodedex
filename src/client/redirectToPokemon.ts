$(document).ready(function() {
    $('#searchBtn').click(function() {
        window.location.href = `/national/${$('#searchBar').val()}`;
    });
});