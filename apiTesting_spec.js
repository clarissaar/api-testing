var frisby = require('frisby');

var URL_ROOT = 'http://jsonplaceholder.typicode.com';

frisby.create('can get list of posts')
    .get(URL_ROOT + '/posts')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .toss();

frisby.create('can create a post')
    .post(URL_ROOT + '/posts', {
        userId: 11,
        id: 56,
        title: "test",
        body: "test"
    },
        {json: true})
    .expectHeaderContains('Content-Type', 'json')
    .expectJSON({
        userId: 11,
        id: 56,
        title: "test",
        body: "test"
    })
   .toss()

frisby.create('can delete a post')
    .delete(URL_ROOT + '/posts/56', {},
        {json: true})
    .expectStatus(200)
    .expectHeaderContains('Content-Type', 'json')
    .toss();