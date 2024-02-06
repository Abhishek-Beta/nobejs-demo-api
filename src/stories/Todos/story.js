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

const handle = async ({ prepareResult, storyName }) => {
  try {
    const todosList = await knex("items").select('id','name')
    console.log(todosList);
    return todosList
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
