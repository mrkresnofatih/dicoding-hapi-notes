const { nanoid } = require('nanoid');

const postDtoToEntity = (postDto) => {
  const { title, tags, body } = postDto;
  const newId = nanoid(16)
  const time = new Date().toISOString()

  return {
    id: newId,
    createdAt: time,
    updatedAt: time,
    title,
    tags,
    body
  }
}

module.exports = { postDtoToEntity }
