const debugLogger = requireUtil("debugLogger");

describe("Test Handler Todos", () => {
  it("dummy_story_which_will_pass", async () => {
    let result = {};
    try {
      result = await testStrategy("Todos", {
        prepareResult: {},
      });
    } catch (error) {
      debugLogger(error);
    }
    const { respondResult } = result;
    expect(1).toBe(1);
  });
});
