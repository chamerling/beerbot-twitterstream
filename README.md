# beerbot-twitterstream [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Beerbot listener for hubl.in


## Install

```sh
$ npm install --save beerbot-twitterstream
```

## Usage

Take a look at the Beerbot documentation on how to configure a beerbot plugin.
You need to add a beerbot-twitterstream hash like this one:

```javascript
var options = {
  name: 'beerbot-twitterstream',
  // get keys and secret from dev.twitter.com
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',

  trackers: [
    {
      track: 'javascript',
      channel: '#twitter'
    },
    {
      track: 'hublin',
      channel: '#openpaas'
    }
  ]
};
```

The plugin will create as many real time trackers as defined and publishes tweets to the specified channel when a tweet with the matching track term is published on twitter.
 
## License

MIT © [Christophe Hamerling](http://chamerling.github.io)


[npm-image]: https://badge.fury.io/js/beerbot-twitterstream.svg
[npm-url]: https://npmjs.org/package/beerbot-twitterstream
[travis-image]: https://travis-ci.org/chamerling/beerbot-twitterstream.svg?branch=master
[travis-url]: https://travis-ci.org/chamerling/beerbot-twitterstream
[daviddm-image]: https://david-dm.org/chamerling/beerbot-twitterstream.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/chamerling/beerbot-twitterstream
