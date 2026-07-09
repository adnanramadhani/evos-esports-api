const axios = require('axios');
const cheerio = require('cheerio');

async function getRoster() {
  const { data } = await axios.get('https://liquipedia.net/mobilelegends/EVOS_Esports');
  const $ = cheerio.load(data);
  let players = [];
  $('.roster-card-name').each((i, el) => players.push($(el).text().trim()));
  return { team: "EVOS Esports", players };
}
module.exports = { getRoster };
