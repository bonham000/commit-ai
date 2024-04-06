import { execSync } from "child_process";
import invariant from "tiny-invariant";

export default function gitCommit(commitMessage: string): void {
  const message = commitMessage.replaceAll(`"`, `'`).replaceAll("`", "'");
  invariant(message.endsWith("."), "Commit message should end with a period.");
  invariant(
    !message.includes(`"`),
    `Commit message should not include double quotes, received: ${message}`,
  );
  execSync(`git add . && git commit -m "${message}"`);
}
