// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', function handler(request, reply) {
  reply.send({ hello: 'world' });
});

fastify.get('*', function (request, reply) {
  console.log(request.headers);

  const response = {
    documentation: 'https://opencagedata.com/api',
    licenses: [
      {
        name: 'see attribution guide',
        url: 'https://opencagedata.com/credits',
      },
    ],
    rate: {
      limit: 2500,
      remaining: 2499,
      reset: 1700092800,
    },
    results: [
      {
        bounds: {
          northeast: {
            lat: 51.9528202,
            lng: 7.6325938,
          },
          southwest: {
            lat: 51.9525445,
            lng: 7.6323594,
          },
        },
        components: {
          'ISO_3166-1_alpha-2': 'DE',
          'ISO_3166-1_alpha-3': 'DEU',
          'ISO_3166-2': ['DE-NW'],
          _category: 'building',
          _type: 'building',
          city: 'M\u00fcnster',
          city_district: 'M\u00fcnster-Mitte',
          continent: 'Europe',
          country: 'Germany',
          country_code: 'de',
          house_number: '7',
          neighbourhood: 'Josef',
          political_union: 'European Union',
          postcode: '48153',
          road: 'Friedrich-Ebert-Stra\u00dfe',
          state: 'North Rhine-Westphalia',
          state_code: 'NW',
          suburb: 'Innenstadtring',
        },
        confidence: 10,
        formatted: 'Friedrich-Ebert-Stra\u00dfe 7, 48153 M\u00fcnster, Germany',
        geometry: {
          lat: 51.9526599,
          lng: 7.632473,
        },
      },
    ],
    status: {
      code: 200,
      message: 'OK',
    },
    stay_informed: {
      blog: 'https://blog.opencagedata.com',
      mastodon: 'https://en.osm.town/@opencage',
    },
    thanks: 'For using an OpenCage API',
    timestamp: {
      created_http: 'Wed, 15 Nov 2023 10:06:50 GMT',
      created_unix: 1700042810,
    },
    total_results: 1,
  };

  reply.send(response);
});
// Run the server!
fastify.listen({ port: 80 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
