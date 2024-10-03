// const cron = require("node-cron");
// const { EodModel } = require("./database/eod.user");
// const { fetchUser } = require("./service/user.service");
// const { UserModel } = require("./database/user.model");
// const { bot } = require("./bot");
// const { chatId } = require("./bot.mssage");

// // Schedule a task to run daily at 6:39 PM
// const initCron = () => {
//   cron.schedule("39 18 * * **", async () => {
//     console.log("==================== CRON JOB RUNNING ====================");
//     console.log("Running the task at 6:39 PM every day");
//     // Your code here
//     let resultPop = [];
//     const users = await UserModel.find();
//     const startOfDay = moment().startOf("day").toDate(); // Start of today
//     const endOfDay = moment().endOf("day").toDate(); // End of today
//     console.log(users, "=====================");
//     for (let user of users) {
//       const eod = await EodModel.find({
//         user: user._id,
//         createdAt: { $gte: startOfDay, $lt: endOfDay },
//       });
//       if (eod.length == 0) {
//         resultPop.push(user);
//       }
//     }
//     console.log({ resultPop }, "=====================");
//     for (let user of resultPop) {
//       bot.telegram.sendMessage(
//         chatId,
//         `User ${user.name} has not submitted EOD for today \n 🤘🤘Chin Tapak dam dam🤘🤘.... \n @${user.userName}`
//       );
//     }
//   });

//   cron.schedule("* * * * *", async () => {
//     try {
//       console.log("Crom initiated");
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// };

// module.exports = { initCron };
