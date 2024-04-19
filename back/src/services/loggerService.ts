import chalk from "chalk";

export default class Logger {
  private static dateTime(): string {
    const date = new Date();
    return `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  public static info(args: any) {
    console.log(
      chalk.blue(
        `${this.dateTime()} [INFO]:`,
        typeof args === "string" ? chalk.blueBright(args) : args
      )
    );
  }
  public static error(args: any) {
    console.log(
      chalk.red(
        `${this.dateTime()} [ERROR]:`,
        typeof args === "string" ? chalk.red(args) : args
      )
    );
  }
  public static success(args: any) {
    console.log(
      chalk.green(
        `${this.dateTime()} [SUCCESS]:`,
        typeof args === "string" ? chalk.green(args) : args
      )
    );
  }
  public static warn(args: any) {
    console.log(
      chalk.yellow(
        `${this.dateTime()} [INFO]:`,
        typeof args === "string" ? chalk.yellow(args) : args
      )
    );
  }
}
