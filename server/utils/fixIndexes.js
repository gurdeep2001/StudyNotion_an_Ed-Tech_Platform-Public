// const mongoose = require("mongoose");
// const User = require("../models/User"); // Adjust path if needed

// async function dropIndex() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to DB");

//     // Drop username index if it exists
//     const indexes = await User.collection.getIndexes();
//     if (indexes["username_1"]) {
//       await User.collection.dropIndex("username_1");
//       console.log("Dropped index: username_1");
//     } else {
//       console.log("No username index found");
//     }

//     // Sync indexes again
//     await User.syncIndexes();
//     console.log("Indexes synchronized");
//   } catch (error) {
//     console.error("Error dropping index:", error);
//   } finally {
//     mongoose.disconnect();
//     console.log("Disconnected from DB");
//   }
// }

// dropIndex(); 
