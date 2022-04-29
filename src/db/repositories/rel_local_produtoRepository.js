const {rel_est_local_prod} = require('../models')

class Rel_est_local_prodRepository{
    async list(){
        try {
            return await rel_est_local_prod.findAll({
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
        return await rel_est_local_prod.create(currentProduto);
    }

    async update(produtoName, currentProduto){
        return await rel_est_local_prod.update(currentProduto,{
            where: {
                name: rel_est_local_prod_Name
            }
        });
    }

    async getByName(productName){
        return await rel_est_local_prod.findOne({ where: { name: productName } });
    }

    async deleteById(produtoId){
        return await rel_est_local_prod.destroy({
            where: {
                id: rel_est_local_prod_Id
            }
        })
    }
}

module.exports = Rel_est_local_prodRepository;