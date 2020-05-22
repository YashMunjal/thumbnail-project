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
      imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--J6qf2Ctw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/gd97g4kdyk1bpdeyfqst.png'
    }
    const response = await request(server).post('api/tool/resize-image').send(payload);
  })
})