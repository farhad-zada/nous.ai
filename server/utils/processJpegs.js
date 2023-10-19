// const sharp = require('sharp')

// // TODO:  test  this
// module.exports = async (req) => {
//   //TODO: we do not need to pass all the request to this function. Optimize it
//   try {
//     const jpegBuffers = await Promise.all(
//       req.media.jpegs.map((m) => {
//         return sharp(m.buffer)
//           .toFormat('jpeg')
//           .jpeg()
//           .toBuffer()
//       }),
//     )

//     for (let i = 0; i < jpegBuffers.length; i++) {
//       req.media.jpegs[i].buffer = jpegBuffers[i]
//     }

//     return req
//   } catch (err) {
//     throw new Error(err.message)
//   }
// }
