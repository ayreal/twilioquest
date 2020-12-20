// This time, your function must return a different value based on the first argument to the getLaserSetting function. If the first argument is the string please, return OFF. If the first argument is anything else, return ON.

const getLaserSetting = (req) => (req === 'please' ? 'OFF' : 'ON');
