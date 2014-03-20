describe('Darkness', function() {
  it('adds sources from a list', function() {
    addSources([{name: "one"}]);
    expect($('#light-sources option[value=one]')).toExist();
  });

  describe('when the selected source changes', function() {
    beforeEach(function() {
      addSources([
        {name: "magic", spellLevel: 1},
        {name: "nonmagic"}
      ]);
    });

    it('shows the spell level control if the selected option is magical', function() {
      sourceChange();
      expect($('.magic-control')).toBeVisible();
    });

    it('hides the spell level control if the selected option is not magical', function() {
      $('#light-sources').val('nonmagic').change();
      sourceChange();
      expect($('.magic-control')).toBeHidden();
    });

    it('sets the slider to the default spell level', function() {
      sourceChange();
      expect($('.magic-control input').val()).toEqual("1");
    });
  });
});
