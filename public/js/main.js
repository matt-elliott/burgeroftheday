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
})
})()