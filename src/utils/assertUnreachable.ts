export const assertUnreachable = (x: never, err?: Error | string): never => {
  if (err != null) {
    throw typeof err === "string" ? new Error(err) : err;
  }

  throw new Error(
    `Received a value which should not exist: ${JSON.stringify(x)}`,
  );
};
