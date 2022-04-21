import { Event } from "../../models/event";

export default class extends Event {
  event = "ready";

  run = async () => {
    console.log("ready");
  };
}
