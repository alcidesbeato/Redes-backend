const {locals} = require('../models')

class LocalRepository{
    async list(){
        try {
            return await locals.findAll({
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
        return await locals.create(currentLocal);
    }

    async update(localId, currentLocal){
        console.log('currentLocal', currentLocal);
        return await locals.update(currentLocal,{
            where: {
                id: localId
            }
        });

    }

    async get(localId){
        return await locals.findOne({ where: { id: localId } });
    }

    async deleteById(localId){
        return await locals.destroy({
            where: {
                id: localId
            }
        })
    }
}

module.exports = LocalRepository;