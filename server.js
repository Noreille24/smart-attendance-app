const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.get('/api/status', (req, res) => {
    res.json({ message: "Smart Attendance API is running succesfully!" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});