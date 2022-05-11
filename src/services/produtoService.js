const ProdutosRepository = require("../db/repositories/produtosRepository");

class ProdutosService{
   produtosRepository = new ProdutosRepository();
    async list(name){
        return await this.produtosRepository.list(name);
    }

    async create(produto){
        return await this.produtosRepository.create(produto);
    }

    async updateByName(produtoName, produto){
        const produtosExiste = await this.produtosRepository.getByName(produtoName);
        if(!produtosExiste){
            throw new Error('nao existe um produto com esse nome');
        }
        await this.produtosRepository.update(produtoName,produto);

        return await this.produtosRepository.getByName(produtoName);
    }

    async deleteById(produtoId){
        const produtosExiste = await this.produtosRepository.getById(produtoId);
        if(!produtosExiste){
            throw new Error('nao existe um produto com esse id');
        }
        await this.produtosRepository.deleteById(produtoId);
    }

}
module.exports = ProdutosService;