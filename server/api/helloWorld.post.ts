export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    message: "Hello POST :" + body.message,
  };
});
