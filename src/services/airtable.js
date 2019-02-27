import Airtable from 'airtable';
import eventData from '../static/eventData';

const appId = process.env.REACT_APP_AIRTABLE_APP_ID;
const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

// Allow developers to rely on local data if they wish.
const isDev = process.env.NODE_ENV === 'development';
const hasAirtableCreds = apiKey && appId;
const needsLocalData = isDev && !hasAirtableCreds;

const createClient = (appId, apiKey) => {
  const base = new Airtable({ apiKey }).base(appId);

  return {
    listEvents: () =>
      base('Events')
        .select({
          view: 'Grid view', // Airtable's default view
          fields: [
            'event_date',
            'event_title',
            'event_url',
            'event_location',
            'presentation_format',
            'presentation_title',
            'presentation_url',
            'presenters'
          ]
        })
        .firstPage(),
    listPresenters: () =>
      base('Presenters')
        .select({
          view: 'Grid view', // Airtable's default view
          fields: ['name', 'url']
        })
        .firstPage()
  };
};

let client;

if (needsLocalData) {
  // Mock API client that returns local data
  client = {
    listEvents: () => Promise.resolve(eventData.map(e => ({ fields: e })))
  };
} else {
  if (!appId)
    throw new Error(
      'Please provide an REACT_APP_AIRTABLE_APP_ID environment variable.'
    );
  if (!apiKey)
    throw new Error(
      'Please provide an REACT_APP_AIRTABLE_API_KEY environment variable.'
    );
  client = createClient(appId, apiKey);
}

export default client;
