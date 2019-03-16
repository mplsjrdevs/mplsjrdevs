// NOTE: This is written in ES2016ish JS
// so that it can be used both by scripts,
// and by the app itself.

const axios = require('axios');

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_APP_ID = process.env.AIRTABLE_APP_ID;

if (!AIRTABLE_API_KEY)
  throw new Error('Please provide an AIRTABLE_API_KEY environment variable.');

const createEvent = client => ({
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

const createClient = (key, appId) => {
  const client = axios.create({
    baseURL: `https://api.airtable.com/v0/${appId}/`,
    headers: { Authorization: `Bearer ${key}` }
  });

  return {
    createEvent: createEvent(client)
  };
};

module.exports = createClient(AIRTABLE_API_KEY, AIRTABLE_APP_ID);
