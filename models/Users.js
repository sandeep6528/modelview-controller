const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config');


class Users extends Model{

}
Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [4]
            }
          }
    },
    {
        sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Users'
    }
)
module.exports=Users