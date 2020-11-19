let $modal = $('#projectDetailModal');
$('figure.cc-effect').click(function(){
    let $this = $(this)
    let title = $this.find('.title').html();
    let content = $this.find('.content').html();
    let srcImage = $this.find('img').attr('src');

    $modal.find('.modal-title').html(title);
    $modal.find('.modal-body .content').html(content);

    let $img = `<img src='${srcImage}'>`
    $modal.find('.modal-body .main-img').html($img);
    $modal.modal('show');
})  