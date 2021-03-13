//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const should = chai.should();
const username_twitter = 'amandaputrimau3'

chai.use(chaiHttp);
//Our parent block
describe('Tweets', () => {


    /*
     * Test the /GET api/v1/:username/
     */
    describe('/GET username not found', () => {
        it('it should GET error from that username', (done) => {
            chai.request(server)
                .get(`/api/v1/zzz`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.success.should.be.eql(false)
                    done();
                });
        });
    });
    /*
     * Test the /GET api/v1/:username/
     */
    describe('/GET username profile', () => {
        it('it should GET profile page from that username', (done) => {
            chai.request(server)
                .get(`/api/v1/${username_twitter}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Object');
                    done();
                });
        });
    });


    /*
     * Test the /GET api/v1/:username/tweets
     */
    describe('/GET tweet', () => {
        it('it should GET 100 tweets from that username', (done) => {
            chai.request(server)
                .get(`/api/v1/${username_twitter}/tweets`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Object');
                    res.body.Data.length.should.be.eql(100);
                    done();
                });
        });
    });

    /*
     * Test the /GET api/v1/:username/tweets/1
     */
    describe('/GET tweet page one', () => {
        it('it should GET 10 tweets from that username', (done) => {
            chai.request(server)
                .get(`/api/v1/${username_twitter}/tweets/1`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Object');
                    res.body.Data.length.should.be.eql(10);
                    done();
                });
        });
    });

    /*
     * Test the /GET api/v1/:username/tweets/2
     */
    describe('/GET tweet page two', () => {
        it('it should GET 10 tweets from that username', (done) => {
            chai.request(server)
                .get(`/api/v1/${username_twitter}/tweets/2`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Object');
                    res.body.Data.length.should.be.eql(10);
                    done();
                });
        });
    });

    /*
     * Test the /GET api/v1/:username/tweets/2
     */
    describe('/GET tweet page three', () => {
        it('it should GET 10 tweets from that username', (done) => {
            chai.request(server)
                .get(`/api/v1/${username_twitter}/tweets/3`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Object');
                    res.body.Data.length.should.be.eql(10);
                    done();
                });
        });
    });

});