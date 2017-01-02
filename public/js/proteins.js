$(document).ready(function () {

    $.getJSON('/proteins-api', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/proteins-api', {protein: $('#protein').val(), description: $('#description').val(), AAseq: $('#AAseq').val(), pdbcode: $('#pdbcode').val()}, printTerms);
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
