describe("my create method", function(){
  it("duplicates an object", function(){
    var todo = {
      task: "laundry",
      done: false
    };
    var todo1 = create(todo);
    expect(todo1).toEqual(todo);
  });
});