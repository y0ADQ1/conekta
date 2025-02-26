'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Taco de Suadero 12K',
        price: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gordita de Chicharron Prensado 12K',
        price: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chettos Flaming Hot 6K',
        price: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pozole 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tamal 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ceviche 12K',
        price: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Churro 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Horchata 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flan 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guacamole 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elote 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cochinita Pibil 6K',
        price: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Barbacoa 12K',
        price: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sopa de Tortilla 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Agua de Jamaica 2K',
        price: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};