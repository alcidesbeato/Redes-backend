const ProductsRepository = require("../db/repositories/produtosRepository");

class productsService{
    productsRepository = new ProductsRepository();
    async list(name){
        return await this.productsRepository.list(name);
    }

    async create(product){
        return await this.productsRepository.create(product);
    }

    async updateByName(productName, product){
        const productsExiste = await this.productsRepository.getByName(productName);
        if(!productsExiste){
            throw new Error('Nao existe um product com esse nome.');
        }
        await this.productsRepository.update(productName,product);

        return await this.productsRepository.getByName(productName);
    }

    async deleteById(productId){
        const productsExiste = await this.productsRepository.getById(productId);
        if(!productsExiste){
            throw new Error('Nao existe um product com esse id.');
        }
        await this.productsRepository.deleteById(productId);
    }

}
module.exports = productsService;