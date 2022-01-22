const { repository } = require('./repository');
const { postDtoToEntity } = require('./model');
const { responseHandler } = require('./reponseHandler');

const service = {
  addNote: (postDto) => {
    const newNote = postDtoToEntity(postDto)
    repository.push(newNote);
    return responseHandler.success({ noteId: newNote.id }, "Catatan berhasil ditambahkan")
  },
  getNotes: () => {
    return responseHandler.success({ notes: repository }, undefined);
  },
  getNote: (id) => {
    const foundNote = repository.filter((note) => note.id === id)[0]
    if (foundNote) {
      return responseHandler.success({ note: foundNote }, undefined)
    }
    return responseHandler.failure("Catatan tidak ditemukan")
  },
  editNote: (postDto, id) => {
    const index = repository.findIndex((note) => note.id === id)
    if (index !== -1) {
      const updatedNote = {
        ...repository[index],
        ...postDto,
        updatedAt: new Date().toISOString()
      }
      repository[index] = { ...updatedNote }
      return responseHandler.success(undefined, "Catatan berhasil diperbarui")
    } else {
      return responseHandler.failure("Gagal memperbarui catatan. Id tidak ditemukan")
    }
  },
  deleteNote: (id) => {
    const index = repository.findIndex((note) => note.id === id)
    if (index !== -1) {
      repository.splice(index, 1)
      return responseHandler.success(undefined, "Catatan berhasil dihapus")
    }
    return responseHandler.failure("Catatan gagal dihapus. Id tidak ditemukan")
  }
}

module.exports = { service }
