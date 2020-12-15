import User from "./user";
import Classes from "./classes";

export default () => {
  return {
    users: new User(),
    classes: new Classes(),
  };
};
