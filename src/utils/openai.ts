import OpenAI, { ClientOptions } from "openai";
import { OPEN_AI_API_KEY } from "src/config";
import invariant from "tiny-invariant";

invariant(
  OPEN_AI_API_KEY != null && OPEN_AI_API_KEY !== "",
  "OPEN_AI_API_KEY must be defined in src/config.ts, did you add this file (it is git-ignored).",
);

const options: ClientOptions = {
  apiKey: OPEN_AI_API_KEY,
  organization: "org-O1S8JkwrIGNRbFEsLl6spK6D",
};

const openai = new OpenAI(options);

export default openai;
