// module.exports = (req, res, next) => {
//   const { restaurantId, menuItemId } = req.params
//   const from = req.user.id
//   const to = menuItemId ? menuItemId : restaurantId
//   const modelName = menuItemId ? 'MenuItem' : 'Restaurant'

//   req.nestedDetails = { from, to, modelName }
//   next()
// }
