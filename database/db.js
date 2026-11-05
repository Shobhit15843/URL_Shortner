import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


async function main() {
  await mongoose.connect(process.env.mongo_id);

  console.log("✅ db connected");
}

main().catch((err) => {
  console.log("❌ connect nhi hua");
  console.log(err);
});
export default main;