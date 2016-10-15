describe('point', function() {
  it('test point contstructor', () => {
    var p = new foo.Point(100, 200);
    assert(p.x === 100 && p.y === 200);

    return false;
  });
});
