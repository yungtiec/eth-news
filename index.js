const myGoogleNews = require('./my-google-news'),
    db = require('./db'),
    Promise = require('bluebird'),
    moment = require('moment'),
    CronJob = require('cron').CronJob;
const News = db.model('news'),
    sourceType = JSON.parse(JSON.stringify(require('./source-type')));

myGoogleNews.resultsPerPage = 25; // max 100
let googleQuery = 'ethereum'; //search Query
let googleNewsPromise = Promise.promisify(myGoogleNews);
let scrapeGoogleNews = () => {
    return googleNewsPromise(googleQuery, 1)
        .then(res => {
            return Promise.map(res.links, function(item) {
                console.log(item);
                let sourceWithSpecialChar = encodeURIComponent(item.source.trim()),
                    source = decodeURIComponent(sourceWithSpecialChar.substr(0, sourceWithSpecialChar.length - 9));
                return News.findOrCreate({
                    where: {
                        title: item.title.toLowerCase()
                    }
                }).spread((news, created) => {
                    if (created) {
                        return news.update({
                            link: item.link,
                            source: item.source,
                            date: item.date,
                            type: sourceType[source]
                        });
                    }
                    return news;
                });
            });
        })
        .then(() => {
            console.log(moment().format('HH:mm MMM DD, YYYY'), 'finished scraping');
        })
        .catch(err => console.error(err));
};
// let morningScrape = new CronJob({
//     cronTime: '00 30 9 * * *',
//     onTick: function() {
//         scrapeGoogleNews();
//     },
//     start: true
// }), eveningScrape = new CronJob({
//     cronTime: '00 30 18 * * *',
//     onTick: function() {
//         scrapeGoogleNews();
//     },
//     start: true
// });
scrapeGoogleNews()