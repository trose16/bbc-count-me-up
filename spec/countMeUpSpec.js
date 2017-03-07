describe('CountMeUp', function() {

  var countMeUp;

  beforeEach(function() {
    countMeUp = new CountMeUp();
  });

  it('should store a list of candidates', function() {
    expect(countMeUp.candidates).toEqual([]);
  });


});
