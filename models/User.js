const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { beforeCreate, beforeUpdate } = require('./Comment');
const { timeStamp } = require('console');
class User extends Model{

    checkPassword(loginPW){
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        },
     },
};
hooks: {
async beforeCreate(newUserData){
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return newUserData;
},
async beforeUpdate(updatedUserData){
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return updatedUserData;
}
}
{
sequelize,
timeStamp: false,
freezeTableName: true,
modelName: 'user'
});
module.exports = User;