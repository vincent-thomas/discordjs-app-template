import { Guild } from "discord.js";
import { Event } from "../../models/event";

export default class extends Event {
  event = "guildDelete";

  run = async (guild: Guild) => {
    console.log("bot got kicked from server " + guild.name);
  };
}
