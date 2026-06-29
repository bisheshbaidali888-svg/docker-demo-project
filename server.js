const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = 3000;


const mongoUri = 'mongodb://admin:password@localhost:27018';
let db;

async function connectDB() {
    try {
        const client = await MongoClient.connect(mongoUri);
        db = client.db('useraccount');
        console.log('MongoDB connected!');
    } catch (err) {
        console.log('Retry garxa...', err.message);
        setTimeout(connectDB, 3000);
    }
}

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/get-profile', async (req, res) => {
    try {
        const user = await db.collection('users').findOne({});
        res.json(user || {});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/update-profile', async (req, res) => {
    try {
        const { name, email, interests } = req.body;
        await db.collection('users').updateOne(
            {},
            { $set: { name, email, interests } },
            { upsert: true }
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});