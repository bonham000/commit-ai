import { AI_MODEL } from "src/config";
import chooseCommitMessage from "src/utils/chooseCommitMessage";
import getGitDiff from "src/utils/getGitDiff";
import openai from "src/utils/openai";

export default async function generateCommitMessage(): Promise<void> {
  try {
    const diff = getGitDiff();
    const prompt = `Here is the output from running \`git diff\` on some code changes I just made. Can you generate a concise one-line commit message for these changes? The commit message should be a single complete sentence, ending with a period and containing no double quotes (use single quotes instead).\n\n${diff}`;
    const completion = await openai.chat.completions.create({
      messages: [
        {
          content:
            "You are an senior software developer mentoring new software engineers.",
          role: "system",
        },
        { content: prompt, role: "user" },
      ],
      model: AI_MODEL,
    });
    const message = completion.choices[0].message.content!;
    void chooseCommitMessage(message);
  } catch (error) {
    console.error("An error occurred generating the commit message:");
    console.error(error);
    process.exit(1);
  }
}
