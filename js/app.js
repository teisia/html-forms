$(function () {

  $("form.example").on("submit", function (e) {
    $('table').show();
    var $tbody = $('tbody');
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
