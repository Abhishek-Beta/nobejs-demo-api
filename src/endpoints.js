module.exports = (app) => {
  app.get("/liveness", async (req, res) => {
    return res.code(200).send({ status: "I am alive" });
  });

  app.get("/readiness", async (req, res) => {
    return res.code(200).send({ status: "I am ready" });
  });

  return [
    {
      endpoints: [["get","/todos","Todos"],["get","/todos/:id","SingleTodo"],["post","/addtodo","AddTodo"],["post","/deltodo","DelTodo"],["post","/updatetodo","UpdateTodo"]],
    },
  ];
};

