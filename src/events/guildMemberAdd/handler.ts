import { GuildMember } from "discord.js";
import { AppClient } from "../../client";
import { Event } from "../../models/event";

export default class extends Event {
  event = "guildMemberAdd";
  run = async (member: GuildMember, client: AppClient) => {
    const channel = await member.createDM(true);
    await channel.send("hello!");
  };
}
