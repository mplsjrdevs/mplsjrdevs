import { createEvent, listEvents } from '../../lib/airtable';
import eventData from '../../static/eventData';

const DEMO_ID = 'demo_id';

const mockClient = {
  get: _path =>
    Promise.resolve({
      data: eventData.map((d, i) => ({ fields: d, id: `${DEMO_ID}_${i}` }))
    }),
  post: (_path, data) =>
    Promise.resolve({ data: { fields: data, id: DEMO_ID } })
};

it('can create an event', async () => {
  const res = await createEvent(mockClient)({});
  expect(res.data).toBeDefined();
  expect(res.data.id).toBeDefined();
  expect(res.data.fields).toBeDefined();
});

it('can list events', async () => {
  const res = await listEvents(mockClient)(eventData[0]);
  expect(res.data).toBeDefined();
  expect(res.data).toBeInstanceOf(Array);
  expect(res.data[0].fields).toBeDefined();
});
