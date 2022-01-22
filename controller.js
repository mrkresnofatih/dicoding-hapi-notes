const { service } = require('./service');

const controller = [
  {
    method: 'POST',
    path: '/notes',
    handler: (request, h) => {
      const data = service.addNote(request.payload)
      return h.response(data).code(201)
    }
  },
  {
    method: 'GET',
    path: '/notes',
    handler: (_, h) => {
      const data = service.getNotes()
      return h.response(data).code(200)
    }
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: (request, h) => {
      const { id } = request.params
      const data = service.getNote(id)
      return h.response(data).code(200)
    }
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: (request, h) => {
      const { id } = request.params
      const data = service.editNote(request.payload, id)
      let responseCode =  200
      if (data.status === "fail") {
        responseCode = 404
        return h.response(data).code(responseCode)
      }
      return h.response(data).code(responseCode)
    }
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: (request, h) => {
      const { id } = request.params
      const data = service.deleteNote(id)
      let responseCode = 200
      if (data.status === "fail") {
        responseCode = 404
        return h.response(data).code(responseCode)
      }
      return h.response(data).code(responseCode)
    }
  }
]

module.exports = { controller }
