'use strict';

var Twitter = require('twitter');

module.exports = function(bot, options) {

  var logger = bot.logger;

  if (!options.consumer_key || !options.consumer_secret || !options.access_token_key || !options.access_token_secret) {
    return logger.error('Can not start twitter stream, bad options');
  }

  var twitter = new Twitter({
    consumer_key: options.consumer_key,
    consumer_secret: options.consumer_secret,
    access_token_key: options.access_token_key,
    access_token_secret: options.access_token_secret
  });

  function createTrackers() {
    function createTracker(tracker) {
      logger.info('Creating tracker', tracker);

      twitter.stream('statuses/filter', {track: tracker.track}, function(stream) {
        stream.on('data', function(tweet) {
          bot.sendRichText(tracker.channel, `<http://twitter.com/${tweet.user.screen_name}|@${tweet.user.screen_name}> : ${tweet.text}`);
        });

        stream.on('error', function(error) {
          logger.debug('Twitter error on tracker', tracker);
        });
      });
    }

    options.trackers.forEach(createTracker);
  }

  createTrackers();
};
