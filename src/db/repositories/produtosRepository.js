const {produtos} = require('../models')

class ProdutoRepository{
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
        return await produtos.create(currentProduto);
    }

    async update(produtoId, currentProduto){
        return await produtos.update(currentProduto,{
            where: {
                id: produtoId
            }
        });
    }

    async getId(produtoId){
        return await produtos.findOne({ where: { id: produtoId } });
    }

    async deleteById(produtoId){
        return await produtos.destroy({
            where: {
                id: produtoId
            }
        })
    }
}

module.exports = ProdutoRepository;