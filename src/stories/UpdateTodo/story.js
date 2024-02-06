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

const handle = async({ reqQuery, prepareResult, storyName }) => {
  try {
    const updateTodo = await knex("items").where({id:reqQuery.id}).update({name:reqQuery.name})
    if(updateTodo){
      const todosList = await knex("items").select('id','name')
      return todosList
    }
  } catch (error) {
    
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
