import * as bodyParser from 'body-parser'
import * as express from 'express'

export function generateExpressApp() {
  const app = express()

  app.use(bodyParser.json())

  app.get('/', async (req, res) => {
    throw new Error("Why isn' this propagated?")
  })

  app.use(
    (
      err: any,
      req: express.Request,
      res: express.Response,
      next: (a: any) => void
    ) => {
      console.log('We made it!')
      // NB: Somehow supertest fails to trigger this middleware..
      debugger
      if (/*err instanceof ApiError*/ false) {
        res.status(err.statusCode).json({
          error: err.message,
          code: err.code
        })
      } else {
        console.error(err, err.stack)
        res.status(500).json({
          error: 'Something broke?',
          code: 'internal.error',
          exception: JSON.stringify(err),
          stack: err.stack
        })
      }

      next(err)
    }
  )

  return app
}
