export default defineEventHandler((event) => {
  return {
    // message: event.method, for get event name
    // getQuery(event) return query parameters
    message: getQuery(event),
  };
});
