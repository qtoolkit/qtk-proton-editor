describe('rect', function() {
  it('test rect contstructor', () => {
    var r = new foo.Rect(100, 200, 300, 400);
    assert(r.x === 100 && r.y === 200 && r.w === 300 && r.h === 400);
  });
  
  it('test rect isfoo.RectIn', () => {
    var r = new foo.Rect(0, 0, 300, 400);
    assert(r.isPointIn(100, 100));
    assert(!r.isPointIn(1000, 100));
  });
  
  it('test rect arem', () => {
    var r = new foo.Rect(100, 200, 300, 400);
    assert(r.area() === 120000);
  });
});
