import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("Mongo DB Connection On");
  } catch (error) {
    console.log(error);
    throw new Error("Error Connecting To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
    console.log("Mongo DB Connection Off");
  } catch (error) {
    console.log(error);
    throw new Error("Error Disconnecting From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
