const app = require('../lib/app').default
const server = app().callback()
const request = require('supertest');


describe('Login', () => {
  it(`Should return status success status code 200`, async () => {
    const payload = {
      username: 'test@email.com',
      password: 'myPassword'
    }
    const response = await request(server).post('/api/auth/login').send(payload);
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('success')
  })
})

describe('Image Processing', () => {

  beforeEach(() => {
    jest.resetModules() // this is important - it clears the cache
    process.env.NODE_ENV = 'test';
  });


  it(`Should return resized image`, async () => {
    const payload = {
      imageUrl: 'http://www.google.com/images/srpr/logo11w.png'
    }
    const response = await request(server).post('/api/tool/resize-image').send(payload);
    response.header['content-type']
  })
})