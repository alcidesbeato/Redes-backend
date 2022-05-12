const {produtos} = require('../models')

class ProdutosRepository{
    async list(){
        try {
            return await produtos.findAll({
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
        try{
            console.log('1', currentProduto );
            return await produtos.create(currentProduto);
        }catch(err){
            console.log('error', err);
        }
    }

    async update(produtoName, currentProduto){
        return await produtos.update(currentProduto,{
            where: {
                name: produtoName
            }
        });
    }

    async getByName(productName){
        return await produtos.findOne({ where: { name: productName } });
    }

    async deleteById(produtoId){
        return await produtos.destroy({
            where: {
                id: produtoId
            }
        })
    }
}

module.exports = ProdutosRepository;