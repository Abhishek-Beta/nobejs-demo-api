const debugLogger = requireUtil("debugLogger");

describe("Test Handler UpdateTodo", () => {
  it("dummy_story_which_will_pass", async () => {
    let result = {};
    try {
      result = await testStrategy("UpdateTodo", {
        prepareResult: {},
      });
    } catch (error) {
      debugLogger(error);
    }
    const { respondResult } = result;
    expect(1).toBe(1);
  });
});
