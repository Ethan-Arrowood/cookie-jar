const fastify = require('fastify')()
const path = require('path');

const PORT = process.env.PORT || 3001;

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'client/build/')
})

fastify.get('/api/status', (req, reply) => reply.send('Healthy'))

fastify.get('/home', (req, reply) => reply.sendFile('index.html'))

fastify.listen(PORT, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})