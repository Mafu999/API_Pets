module.exports = class CatsDao{
    constructor(bd){
        this.bd = bd
    }

    verCats(){
        return new Promise((resolve, reject)=>{
            const queryCat = 'SELECT * FROM CATS'
            this.bd.all(queryCat, (error, response)=>{
                if(error) reject(`Erro ao acessar o banco de dados. ${error}`)
                else resolve(response)
            })
        })
    }
}