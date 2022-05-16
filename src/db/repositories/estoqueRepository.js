const {estoques} = require('../models')

class EstoqueRepository{
    async list(){
        try {
            return await estoques.findAll({
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
        return await estoques.create(currentEstoque);
    }

    async createProduto(currentEstoque){
        const estoqueNovo = {
            'id': (currentEstoque.id + 10),
            'nome': currentEstoque.nome,
            'quantidade' : currentEstoque.quantidade
        }
        return await estoques.create(estoqueNovo);
    }

    async update(estoqueId, currentEstoque){
        return await estoques.update(currentEstoque,{
            where: {
                id: estoqueId
            }
        });
    }

    async get(estoqueId){
        return await estoques.findOne({ where: { id: estoqueId } });
    }

    async deleteById(estoqueId){
        return await estoques.destroy({
            where: {
                id: estoqueId
            }
        })
    }
}

module.exports = EstoqueRepository;