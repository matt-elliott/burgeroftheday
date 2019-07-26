(function() {
$('#burgerInput').on('submit', function(event) {
  event.preventDefault();
  let data = $(this).serializeArray();
  $.post(
    '/',
    data,
    function(res) {
      console.log('psoted');
      location.reload();
    }
  );
});

$(document).on('click', '#burgers-of-the-day .devour', function(event){
  const btn = $(this);
  let id = btn.attr('data-burger-id');
  $.post(
    `/api/update/${id}`,
    function(status) {
      if(status === 200) {
        btn.addClass('devoured');
      } else {
        btn.removeClass('devoured');
        btn.addClass('not-devoured');
      }
    }
  )
})
})()