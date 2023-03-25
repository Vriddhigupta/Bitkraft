const amqp = require("amqplib");

const rabbitSettings = {
  protocol: "amqp",
  hostname: "localhost",
  port: 5672,
  username: "mohammed",
  password: "mohammed",
  vhost: "/",
  authMechanism: ["PLAIN", "AMQPLAIN", "EXTERNAL"],
};
var connection;
const connectRabbit = async () => {
  try {
    connection = await amqp.connect(rabbitSettings);
    console.log("RabbitMQ connection established");
  } catch (e) {
    console.error(e);
  }
};

module.exports = { connectRabbit, connection };
