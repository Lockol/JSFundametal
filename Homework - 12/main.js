const getGreetingMessage = (username) => {
  const currentHour = new Date().getHours();
  let timeOfDay;

  if (currentHour < 6) {
    timeOfDay = "Night";
  } else if (currentHour < 12) {
    timeOfDay = "Morning";
  } else if (currentHour < 18) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }

  const greetingMessage = `Date of request: ${new Date()} \nGood ${timeOfDay}, ${username}`;

  return greetingMessage;
};

module.exports = {
  getGreetingMessage,
};
