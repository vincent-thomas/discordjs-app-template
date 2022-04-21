import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { Command } from "../../models/command";

export default class extends Command {
  name = "auth";
  description = "authenticate with the bot";
  // options(command: SlashCommandBuilder) {
  //   return command
  //     .addStringOption((option) =>
  //       option.setName("test").setDescription("description").setRequired(false)
  //     )
  //     .addRoleOption((option) =>
  //       option.setName("role").setDescription("description").setRequired(false)
  //     );
  // }

  async run(interaction: CommandInteraction) {
    interaction.reply("test");
  }
}
