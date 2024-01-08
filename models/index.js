const Users = require('./Users');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(Users, {
  foreignKey: 'usersId',
  onDelete: 'CASCADE'
});

Blog.hasMany(Comment, {
  foreignKey: 'blogId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Users, {
  foreignKey: 'usersId',
  onDelete: 'CASCADE'
});

module.exports = {
  Users,
  Comment,
  Blog
};