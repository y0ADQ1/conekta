'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.createTable('products', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING(120),
                allowNull: false,
            },
            price: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DataTypes.DATE,
            },
            updatedAt: {
                type: Sequelize.DataTypes.DATE,
            },
        }),
    down: (queryInterface) => queryInterface.dropTable('products'),
};