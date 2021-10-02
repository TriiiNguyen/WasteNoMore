const User = require('./User');
const Gardens = require('./Garden');

// Will only need the below code if we want to allow users to "favorite" their favorite gardens. Only when we create an assoication between the users and the gardens.

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Gardens };
