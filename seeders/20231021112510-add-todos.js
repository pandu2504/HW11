'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'Ronaldo',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('todos', [
    {
      title: 'Bangun Tidur',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Main Game',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Makan',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Belajar',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Tidur',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', null, {});
  }
};