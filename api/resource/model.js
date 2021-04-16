// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
  // get all resources
  get() {
    return db("resources");
  },
  async create(resource) {
    const [id] = await db("resources").insert({
      resource_name: resource.resource_name,
      resource_description: resource.resource_description,
    });
    return db("resources").where("resource_id", id).first();
  },
};
