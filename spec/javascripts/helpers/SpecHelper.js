var body;

function resetBody() {
  $('body').replaceWith(body.clone());
}

beforeEach(function() {
  if (body === undefined) {
    jasmine.getFixtures().fixturesPath = 'public'
    body = $('<body>').append($(jasmine.getFixtures().read('index.html')));
    resetBody();
  }
});
