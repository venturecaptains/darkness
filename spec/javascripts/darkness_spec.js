describe('Darkness', function() {
  it('adds sources from a list', function() {
    addSources([{name: "one", lightlevel: 1}]);
    expect($('#light-sources option[value=one]')).toExist();
  });
});
