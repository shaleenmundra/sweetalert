function sweet(){
    swal({
        title: 'jQuery HTML example',
        html: $('<div>')
            .addClass('some-class')
            .text('jQuery is everywhere.'),
        animation: false,
        customClass: 'animated tada'
    })
} 