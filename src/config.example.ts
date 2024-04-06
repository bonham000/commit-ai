import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions";

// Add your API key here:
export const OPEN_AI_API_KEY = "<add-your-api-key-here" as string;

// Change this if you want, note that GPT 4 is more expensive.
export const AI_MODEL: ChatCompletionCreateParamsBase["model"] =
  "gpt-3.5-turbo";

// Change this list per your needs:
export const ADDITIONAL_COMMIT_MESSAGE_OPTIONS = [
  "Fix type errors.",
  "Fix code formatting/linting issues.",
  "Address code review comments.",
  "Update README and documentation.",
  "Misc. refactoring and improvements.",
  "Update dependencies",
];
