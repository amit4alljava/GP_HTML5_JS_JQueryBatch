describe("Add Testing", function() {


  it("Add two integers", function() {
    a= 100;
    b = 200;
    var expectedResult = 3300;
    var result = add(a,b);
    expect(expectedResult).toBe(result);
  });

  it("Add two functions", function() {
    a= function(){ return 1000};
    b = function(){ return 2000};
    var expectedResult = 3000;
    var result = add(a,b);
    expect(expectedResult).toBe(result);
  });


});
