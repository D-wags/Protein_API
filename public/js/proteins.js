$(document).ready(function () {

    $.getJSON('/proteins-api', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/dictionary-api', {term: $('#protein').val(), defined: $('#description').val()}, printTerms);
        this.reset();
    });

});

function printTerms(terms) {
    $('body>dl').empty();
    $.each(terms, function () {
        $('<dt>').text(this.protein).appendTo('body>dl');
        $('<dd>').text(this.description).appendTo('body>dl');
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/proteins-api/' + $(this).text(),
            type: 'DELETE',
            success: printTerms
        });
    });
}
