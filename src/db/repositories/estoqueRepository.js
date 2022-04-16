const {estoque} = require('../models')

class EstoqueRepository{
    async list(){
        try {
            return await estoque.findAll({
                attributes: {
                    exclude: [],
                }
            })
        }catch(err){
            console.log('erro', err);
        }
        //coloca dentro do exclude os campos que vc nao quer que apareça
    }

    async create(currentEstoque){
        return await estoque.create(currentEstoque);
    }

    async update(estoqueName, currentEstoque){
        return await estoque.update(currentEstoque,{
            where: {
                name: estoqueName
            }
        });
    }

    async getByName(estoqueName){
        return await estoque.findOne({ where: { name: estoqueName } });
    }

    async deleteById(estoqueId){
        return await estoque.destroy({
            where: {
                id: estoqueId
            }
        })
    }
}

module.exports = EstoqueRepository;