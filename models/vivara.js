const data =
[
    {
    id: 1,
    image1: 'produto001.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Perfume Masculino V - Eau de Parfum 100ml',
    preco: '310',
    volume: '100ml',
    material: '',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino'],
    garantia: '3 meses'
},
{
    id: 2,
    image1: 'produto001.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Perfume Masculino V - Eau de Parfum 100ml',
    preco: '310',
    volume: '100ml',
    material: '',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino'],
    garantia: '3 meses'
},
{
    id: 3,
    image1: 'produto001.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Perfume Masculino V - Eau de Parfum 100ml',
    preco: '310',
    volume: '100ml',
    material: '',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino'],
    garantia: '3 meses'
},
{
    id: 4,
    image1: 'produto001.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Perfume Masculino V - Eau de Parfum 100ml',
    preco: '310',
    volume: '100ml',
    material: '',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino'],
    garantia: '3 meses'
},
{
    id: 5,
    image1: 'produto001.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Perfume Masculino V - Eau de Parfum 100ml',
    preco: '310',
    volume: '100ml',
    material: '',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino'],
    garantia: '3 meses'
},
{
    id: 6,
    image1: 'produto001.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Perfume Masculino V - Eau de Parfum 100ml',
    preco: '310',
    volume: '100ml',
    material: '',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino'],
    garantia: '3 meses'
},
]

const vivara = {
    //1 - pegar todos os pets
    getAll: () =>{
        return data
    },
    //2 - pegar pelo tipo do produto
    getFromType:(tipo) =>{
        return data.filter(item =>{
            for(let i = 0; i < item.tipo.length; i++){
                if(item.tipo[i] === tipo){
                    return true
                 } else{
                     false
            }
        }})
    },
    // // 3 - pegar pelo nome do pet
    // getFromName: (name) =>{
    //     return data.filter(item => {
    //         if(item.name.indexOf(name) > -1){
    //             return true
    //         } else{
    //             return false
    //         }
    //     })
    // }
}
module.exports.vivara = vivara