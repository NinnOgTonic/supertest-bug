import * as express from 'express'
import * as request from 'supertest'

import { generateExpressApp } from './app'

describe('Supertest failing to invoke middleware', () => {
  let expressApp: express.Express | undefined

  beforeEach(() => {
    expressApp = generateExpressApp()
  })

  afterEach(() => {
    expressApp = undefined
  })

  describe('/', () => {
    it('Request does not fail properly', async () => {
      const res = await request(expressApp).get('/')

      console.error('This is never reached with a correct res', res)
    })
  })
})
