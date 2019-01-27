import { createClient } from '../../lib/airtable';

const AIRTABLE_APP_ID = process.env.AIRTABLE_APP_ID;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

if (!AIRTABLE_APP_ID)
  throw new Error('Please provide an AIRTABLE_APP_ID environment variable.');
if (!AIRTABLE_API_KEY)
  throw new Error('Please provide an AIRTABLE_API_KEY environment variable.');

export default createClient(AIRTABLE_APP_ID.AIRTABLE_API_KEY);
