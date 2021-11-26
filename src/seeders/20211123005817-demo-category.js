'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('categories', [{
      description: 'Classic 1 - Solteiro Extra',
      createddAt: new Date(),
      updateddAt: new Date()
    }]);

    var products = [];
    for (let index = 0; index < 200; index++) {
      var aux = {
        name: "Lençol avulso",
        description: "Kit de cama 210 fios",
        price_new: 298.00,
        price_old: 98.00,
        quantity: 200,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      products.push(aux);      

    }

    //console.log(products.length)

    await queryInterface.bulkInsert('products', products);  

    var productsDb = await queryInterface.sequelize.query(
      'Select * From Products;', {
      type: queryInterface.sequelize.QueryTypes.SELECT
    }
    ).then(products => {
      return products;
    });

    var files = [];

    for (let i = 0; i < productsDb.length; i++) {

      
      var aux = {
        name: 'img1.JPG',
        description: 'img1',
        size: 9530,
        key: '5bae9083a6636b6d86f8ad2e3ff279ee-img1.jpg',
        url: 'D:\\Sistema\\Nodejs\\coteminas\\api\\tmp\\uploads\\c6287d14364e029f0238502b93a7a9b1-img1.JPG',
        type: 1,
        product_id: productsDb[i].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
      files.push(aux);
      
      var aux = {
        name: 'img2.JPG',
        description: 'img2',
        size: 9530,
        key: '5bae9083a6636b6d86f8ad2e3ff279ee-img2.jpg',
        url: 'D:\\Sistema\\Nodejs\\coteminas\\api\\tmp\\uploads\\c6287d14364e029f0238502b93a7a9b1-img2.JPG',
        type: 1,
        product_id: productsDb[i].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
      files.push(aux);

      var aux = {
        name: 'img3.JPG',
        description: 'img3',
        size: 9530,
        key: '5bae9083a6636b6d86f8ad2e3ff279ee-img3.jpg',
        url: 'D:\\Sistema\\Nodejs\\coteminas\\api\\tmp\\uploads\\c6287d14364e029f0238502b93a7a9b1-img3.JPG',
        type: 1,
        product_id: productsDb[i].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
      files.push(aux);

      var aux = {
        name: 'img4.JPG',
        description: 'img4',
        size: 9530,
        key: '5bae9083a6636b6d86f8ad2e3ff279ee-img4.jpg',
        url: 'D:\\Sistema\\Nodejs\\coteminas\\api\\tmp\\uploads\\c6287d14364e029f0238502b93a7a9b1-img4.JPG',
        type: 1,
        product_id: productsDb[i].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
      files.push(aux);

    }

    await queryInterface.bulkInsert('files', files); 


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Category', null, {});

    await queryInterface.bulkDelete('Product', null, {});
  }
};
