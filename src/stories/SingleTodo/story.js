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

const handle = async({ prepareResult, storyName,reqParams }) => {
  try {
    const singleTodo = await knex("items").where({id:reqParams.id}).first()
    return singleTodo
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
