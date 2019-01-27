import { createClient } from '../lib/airtable';
import eventData from '../static/eventData';

const AIRTABLE_APP_ID = process.env.REACT_APP_AIRTABLE_APP_ID;
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;

// Allow developers to rely on local data if they wish.
const isDev = process.env.NODE_ENV === 'development';
const hasAirtableCreds = AIRTABLE_API_KEY && AIRTABLE_APP_ID;
const needsLocalData = isDev && !hasAirtableCreds;

let client;

if (needsLocalData) {
  // Mock API client that returns local data
  client = {
    listEvents: () =>
      Promise.resolve({
        data: { records: eventData.map(e => ({ fields: e })) }
      })
  };
} else {
  if (!AIRTABLE_APP_ID)
    throw new Error(
      'Please provide an REACT_APP_AIRTABLE_APP_ID environment variable.'
    );
  if (!AIRTABLE_API_KEY)
    throw new Error(
      'Please provide an REACT_APP_AIRTABLE_API_KEY environment variable.'
    );
  client = createClient(AIRTABLE_APP_ID, AIRTABLE_API_KEY);
}

export default client;
