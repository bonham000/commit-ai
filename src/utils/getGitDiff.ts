import { execSync } from "child_process";

export default function getGitDiff(): string {
  return execSync("git diff").toString();
}
