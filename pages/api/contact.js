const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../../helpers/config");
const dbContext = require("../../helpers/databaseContext");

// route to /api/contact
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // Db config
    const { endpoint, key, databaseId, contactContainerId } = config;
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(contactContainerId);

    // data validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    try {
      // Refer https://docs.microsoft.com/en-us/azure/cosmos-db/sql/sql-api-nodejs-get-started?tabs=windows
      // Make sure database is already setup, else create it
      await dbContext.create(client, databaseId, contactContainerId);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Connecting to db failed!" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    try {
      // Insert an item
      const { resource: createdItem } = await container.items.create({
        newMessage,
      });
      console.log(`Created new item: ${createdItem}`);
      res
        .status(201)
        .json({ message: "Successfully stored message", contact: createdItem });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Inserting contact data failed!" });
      return;
    }
  }
}

export default handler;
