'use strict';

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: true,
    });

    return Order;
};