const LocalRepository = require("../db/repositories/localRepository");

class LocalService{
    localRepository = new LocalRepository();

    async list(name){
        return await this.localRepository.list(name);
    }

    async create(local){
        return await this.localRepository.create(local);
    }

    async update(localId, local){
        //console.log('local', local);
        const localExiste = await this.localRepository.get(localId);
        if(!localExiste){
            throw new Error('nao existe um local com esse nome');
        }
        await this.localRepository.update(localId, local);

        return await this.localRepository.get(localId);
    }

}
module.exports = LocalService;