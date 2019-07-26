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
  let id = $(this).attr('data-burger-id');
  $.post(
    `/api/update/${id}`,
    function(res) {
      console.log(res);
    }
  )
})
})()