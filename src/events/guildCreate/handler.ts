import { Guild } from "discord.js";
import { Event } from "../../models/event";

export default class extends Event {
  event = "guildCreate";

  run = async (guild: Guild) => {
    console.log("bot joined server " + guild.name);
  };
}
