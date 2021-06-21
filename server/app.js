const dbPool = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const ENDPOINT = 'https://api.spacexdata.com/v3';

app.get('/capsules', async (req, res) => {
  try {
    const { status, data } = await axios.get(`${ENDPOINT}/capsules?sort=original_launch`);
    if (status === 200) {
      res.status(200);
      res.send(data);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(500);
    res.send("Error fetching capsules");
  }
});

app.get('/landing', (req, res) => {
  res.status(400).send("Please provide the landing pad id");
});

app.get('/landing/:padId', async (req, res) => {
  const { padId } = req.params;

  if (!padId) return res.status(400).send("Please provide the landing pad id");
  
  let landingPad;
  try {
    const rows = await dbPool.query('SELECT * FROM spaceData WHERE id = ?', [padId]);

    // check if landing pad exist in db
    if (rows.length) {
      const {id, spaceItem} = rows[0];
      const { full_name, status, location } = JSON.parse(spaceItem);

      landingPad = { id, full_name, status, location };
    } else {
      const landingPadRes = await axios.get(`${ENDPOINT}/landpads/${padId}`);
      const { id, full_name, status, location } = landingPadRes?.data;

      if (landingPadRes?.status === 200) {
        await dbPool.query('INSERT INTO spaceData SET ?',
          { id, spaceItem: JSON.stringify({ full_name, status, location }) }
        );
        landingPad = { id, full_name, status, location };
      } else {
        throw new Error();
      }
    }

    res.status(200);
    res.send(landingPad);
  } catch (error) {
    res.status(500);
    res.send("Error fetching landing pad");
  }
});

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);