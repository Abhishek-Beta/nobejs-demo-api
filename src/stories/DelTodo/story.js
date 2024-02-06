const knex = requireKnex();
const findKeysFromRequest = requireUtil("findKeysFromRequest");

const prepare = ({ reqQuery, reqBody, reqParams }) => {
  const payload = findKeysFromRequest(reqQuery, ["id"]);
  console.log(payload);
  return payload;
};

const authorize = ({ prepareResult }) => {
  // if (0) {
  //   throw {
  //     statusCode: 401,
  //     message: "Unauthorized",
  //   };
  // }

  return true;
};

const handle = async ({ reqQuery,prepareResult, storyName }) => {
  try {
    const delTodo = await knex("items").where({id:reqQuery.id}).del()
    if(delTodo){
      const todosList = await knex("items").select('id','name')
      return todosList
    }
  } catch (error) {
    throw error
  }
};

const respond = ({ handleResult }) => {
  return handleResult;
};

module.exports = {
  prepare,
  authorize,
  handle,
  respond,
};
