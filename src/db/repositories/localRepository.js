const {local} = require('../models')

class LocalRepository{
    async list(){
        try {
            return await local.findAll({
                attributes: {
                    exclude: [],
                }
            })
        }catch(err){
            console.log('erro', err);
        }
        //coloca dentro do exclude os campos que vc nao quer que apareça
    }

    async create(currentLocal){
        return await local.create(currentLocal);
    }

    async update(localName, currentLocal){
        return await local.update(currentLocal,{
            where: {
                name: localName
            }
        });
    }

    async getByName(localName){
        return await local.findOne({ where: { name: localName } });
    }

    async deleteById(localId){
        return await local.destroy({
            where: {
                id: localId
            }
        })
    }
}

module.exports = LocalRepository;