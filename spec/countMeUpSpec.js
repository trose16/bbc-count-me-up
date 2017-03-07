decribe('CountMeUp', function() {

  var countMeUp;

  beforeEach(function() {
    countMeUp = new CountMeUp();
  });

  it('should track candidates', function() {
    expect(countMeUp.candidates).toBe([]);
  })


});
