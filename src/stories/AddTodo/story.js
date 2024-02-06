const knex = requireKnex();
const findKeysFromRequest = requireUtil("findKeysFromRequest");

const prepare = ({ reqQuery, reqBody, reqParams }) => {
  const payload = findKeysFromRequest(reqQuery, ["id", "name"]);
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

const handle = async({ reqQuery,prepareResult, storyName }) => {
  try {
    console.log(reqQuery);
    const addTodo = await knex("items").insert({id:reqQuery.id, name:reqQuery.name})
    if(addTodo)
      return true
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
