
const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/dbconfig'); 

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,   
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,   
  },
  file: {
    type: DataTypes.STRING,  
    allowNull: true,         
  },
}, {
  tableName: 'Books',   
  timestamps: true,     
});

Book.sync();

module.exports = Book;
