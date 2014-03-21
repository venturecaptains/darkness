// Levels
// bright
// normal
// low-light
// dark
// magical dark

// Effects:
// daylight -> bright
// light -> normal
// increase +1
// decrease -1
// darkness -> dark
// deeper -> magical dark
// torch -> normal

function sourceOption(source) {
  return $('<option>')
    .attr('value', source.name)
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

function error() {
  console.log(arguments[1] + " in sources.json")
}

function darknessReady() {
  $('#light-sources').change(sourceChange);
  if ($('#light-sources option').length === 0) {
    $.getJSON('data/sources.json')
      .done(addSources)
      .fail(error);
  }
}
