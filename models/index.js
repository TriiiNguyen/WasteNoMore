const User = require('./User');
const Gardens = require('./Garden');

// Will only need the below code if we want to allow users to "favorite" their favorite gardens. Only when we create an assoication between the users and the gardens.

User.hasMany(Gardens, {
  foreignKey: 'host_id',
  onDelete: 'CASCADE',
  as: 'hostedGardens'
});

Gardens.belongsTo(User, {
  foreignKey: 'host_id',
  as: 'host'
});


User.belongsToMany(Gardens, {
  through: 'Favorited_Gardens',
  as: 'favoriteGardens'
});

Gardens.belongsToMany(User, {
  through: 'Favorited_Gardens',
  as: 'visitors'
});

module.exports = { User, Gardens };
