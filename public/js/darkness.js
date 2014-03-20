function sourceOption(source) {
  return $('<option>')
    .attr('value', source.name)
    .attr('data-level', source.lightLevel)
    .attr('data-spell-level', source.spellLevel)
    .text(source.name);
}

function sourceChange() {
  var spellLevel = $('#light-sources option:selected').attr('data-spell-level');
  
  if (spellLevel) {
    $('.magic-control').show();
    $('.magic-control input').val(spellLevel).change();
  } else {
    $('.magic-control').hide();
  }
}

function addSources(sourceList) {
  sourceList.forEach(function(source) {  
    $('#light-sources').append(sourceOption(source));
  });
  $('#light-sources').val(sourceList[0].name).change();
}

function darknessReady() {
  if (jQuery.mobile.path.get() === 'source') {
    if ($('#light-sources option').length === 0) {
      $.getJSON('data/sources.json').done(addSources);
    }
    $('#light-sources').change(sourceChange);
  }
}
