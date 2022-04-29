const RelacionamentoRepository = require("../db/repositories/rel_local_produtoRepository");

class relacionamentoService{
    relacionamentoRepository = new RelacionamentoRepository();
    async list(name){
        return await this.relacionamentoRepository.list(name);
    }

    async create(product){
        return await this.relacionamentoRepository.create(product);
    }

    async updateByName(productName, product){
        const productsExiste = await this.relacionamentoRepository.getByName(productName);
        if(!productsExiste){
            throw new Error('Nao existe um product com esse nome.');
        }
        await this.relacionamentoRepository.update(productName,product);

        return await this.relacionamentoRepository.getByName(productName);
    }

    async deleteById(productId){
        const productsExiste = await this.relacionamentoRepository.getById(productId);
        if(!productsExiste){
            throw new Error('Nao existe um product com esse id.');
        }
        await this.relacionamentoRepository.deleteById(productId);
    }

}
module.exports = relacionamentoService;