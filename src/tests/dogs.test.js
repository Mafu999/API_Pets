const request = require('supertest')

test('/pets/dogs', async()=>{   
    await request('http://localhost:4021')
    .get('/pets/dogs')
    .expect(200)
    .then((res)=> console.log('Passou no teste')) 
})


test('/pets/dogs/newDog', async()=>{
    await request('http://localhost:4021')
    .post('/pets/dogs/newDogs')
    .send({
        
            "RACA": "beagle",
            "FOTO": "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
            "IDADE": "3",
            "NOME": "Sonia",
            "GENERO": "Female",
            "RUA": "Rua campo de piratininga",
            "NUMERO": "299",
            "CIDADE": "São Bernardo",
            "ESTADO": "São Paulo",
            "TELEFONE": "(11) 4002-8922"
          
    })
    .expect(200)
    .then((res)=> console.log('Passou no teste')) 
})