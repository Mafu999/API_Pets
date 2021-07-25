const CatsDao = require('../dao/cats-dao')
module.exports= (app, bd)=>{

    const DaoCats = new CatsDao(bd)

    app.get('/pets/cats', async (req, res)=>{
        try{
            const respostaVerCats = await DaoCats.verCats()
            res.send(respostaVerCats)
        }catch(error){
            res.send(error)
        }
    })
}