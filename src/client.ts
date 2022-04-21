import { Client, Interaction } from "discord.js";

import * as events from "./events";
import * as commands from "./commands";

const Events: any = events;
const Commands: any = commands;

const DISCORD_TOKEN =
  "OTUwMTQ3MjY3MTIwMjMwNDAx.YiUrmQ.X3l5uR30AeU6BMg1aPPcaaWk8DQ";

export class AppClient extends Client {
  constructor() {
    super({
      intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_PRESENCES",
      ],
    });
  }

  public async start() {
    await this.login(DISCORD_TOKEN);

    this.on("interactionCreate", async (interaction: Interaction) => {
      if (!interaction.isCommand()) return;
      const { commandName } = interaction;
      new Commands[commandName].default().run(interaction, this);
    });

    Object.keys(Events).forEach((event: any) => {
      this.on(new Events[event].default().event, (...props: any[]) => {
        new Events[event].default().run(...props, this);
      });
    });
  }
}
