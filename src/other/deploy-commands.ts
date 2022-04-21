import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

import { SlashCommandBuilder } from "@discordjs/builders";

import * as Commands from "../commands";
import { Command } from "../models/command";

const commands: any[] = [];

const CLIENT_ID = "";
const GUILD_ID = "";
const DISCORD_TOKEN =
  "OTUwMTQ3MjY3MTIwMjMwNDAx.YiUrmQ.X3l5uR30AeU6BMg1aPPcaaWk8DQ";

Object.keys(Commands).forEach((commandName: string) => {
  const command: Command = new (Commands as any)[commandName].default();
  const bareCommand = new SlashCommandBuilder();
  if (command.name) {
    bareCommand.setName(command.name);
  }
  if (command.description) {
    bareCommand.setDescription(command.description);
  }
  if (command.options) {
    commands.push(command.options(bareCommand));
  } else {
    commands.push(bareCommand);
  }
});

const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);
rest
  .put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
    body: commands,
  })
  .then(() => console.log("done registering"));
