const {products} = require('../models')

class ProductsRepository{
    async list(){
        try {
            return await products.findAll({
                attributes: {
                    exclude: [],
                }
            })
        }catch(err){
            console.log('erro', err);
        }
        //coloca dentro do exclude os campos que vc nao quer que apareça
    }

    async create(currentProduto){
        return await products.create(currentProduto);
    }

    async update(produtoName, currentProduto){
        return await products.update(currentProduto,{
            where: {
                name: produtoName
            }
        });
    }

    async getByName(productName){
        return await products.findOne({ where: { name: productName } });
    }

    async deleteById(produtoId){
        return await products.destroy({
            where: {
                id: produtoId
            }
        })
    }
}

module.exports = ProductsRepository;