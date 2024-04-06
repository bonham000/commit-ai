import inquirer from "inquirer";
import { ADDITIONAL_COMMIT_MESSAGE_OPTIONS } from "src/config";
import gitCommit from "src/utils/gitCommit";
import invariant from "tiny-invariant";

const COMMIT_OPTIONS = [
  "Use AI-generated commit message.",
  ...ADDITIONAL_COMMIT_MESSAGE_OPTIONS,
] as const;

type CommitOption = (typeof COMMIT_OPTIONS)[number];

export default async function chooseCommitMessage(
  generatedMessage: string,
): Promise<void> {
  console.info(`AI-generated commit message:\n\n"${generatedMessage}"\n`);
  const questions = [
    {
      choices: COMMIT_OPTIONS,
      message: "Select a commit message for your recent changes:",
      name: "choice",
      pageSize: 20,
      type: "list",
    },
  ];

  const answers = await inquirer.prompt(questions);
  const choice = answers.choice as CommitOption;
  switch (choice) {
    case "Use AI-generated commit message.":
      return gitCommit(generatedMessage);
    default:
      invariant(COMMIT_OPTIONS.includes(choice));
      return gitCommit(choice);
  }
}
