// NOTE: This is written in ES2016ish JS
// so that it can be used both by scripts,
// and by the app itself.

const axios = require('axios');

const createEvent = client => async ({
  event_date,
  event_title,
  event_url,
  event_location,
  presentation_format,
  presentation_title,
  presentation_url
}) =>
  client.post(`/Events`, {
    fields: {
      event_date,
      event_title,
      event_url,
      event_location,
      presentation_format,
      presentation_title,
      presentation_url
    }
  });

const listEvents = client => async () => client.get('/Events');

const createClient = (appId, key) => {
  if (!appId) throw new Error('Please provide an App ID to createClient');
  if (!key) throw new Error('Please provide an API key to createClient');
  const client = axios.create({
    baseURL: `https://api.airtable.com/v0/${appId}/`,
    headers: { Authorization: `Bearer ${key}` }
  });

  return {
    createEvent: createEvent(client),
    listEvents: listEvents(client)
  };
};

module.exports = {
  createClient,
  createEvent,
  listEvents
};
