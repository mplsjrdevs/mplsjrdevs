const airtable = require('../src/services/airtable')
const data = require('../src/static/eventData')

const importEvents = async () => {
    console.log('=== beginning import ===')

    for (let e of data) {
        try {
            const res = await airtable.createEvent(e)
            if (!res || !res.data) throw new Error('Something bad happened.')
            console.log('Ostensibly successful event creation.')
            console.log('Response:', JSON.stringify(res.data, null, 2))
        } catch (e) {
            console.log('Something real bad happened')
            console.log('Error:', e)
        }
    }

    console.log('=== import complete ===')
}

importEvents()