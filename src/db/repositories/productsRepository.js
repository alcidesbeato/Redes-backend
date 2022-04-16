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

    async create(currentUsuario){
        return await products.create(currentUsuario);
    }

    async update(usuarioName, currentUsuario){
        return await products.update(currentUsuario,{
            where: {
                name: usuarioName
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