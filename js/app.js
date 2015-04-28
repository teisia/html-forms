$(function () {

  if(document.location.search) {
    var queryString = document.location.search.replace('?', '');
    var pairs = queryString.split('&').map(function (pair) {
      return pair.split('=');
    });

    $('.query-params').show();
    var $tbody = $('.query-params tbody');

    pairs.forEach(function (pair) {
      var $tr = $('<tr>');
      $tr.append($('<td>').html(pair[0]));
      $tr.append($('<td>').html(pair[1]));
      $tbody.append($tr);
    });
  }

  $("form.example").on("submit", function (e) {
    $('.form-params').show();
    var $tbody = $('.form-params tbody');
    $tbody.empty();
    $(e.target).serializeArray().forEach(function (el) {
      var $tr = $('<tr>');
      var $el = $('[name=' + el.name + ']');
      var identifier = $el.prop('tagName').toLowerCase();
      if (identifier === 'input') {
        identifier += " (" + $el.attr('type') + ")";
      }

      $tr.append($('<td>').html(identifier));
      $tr.append($('<td>').html(el.name));
      if(el.value) {
        $tr.append($('<td>').html(el.value.replace(/\n/g, '<br/>')));
      } else {
        $tr.append($('<td>'));
      }
      $tbody.append($tr);
    });
    return false;
  });

});
