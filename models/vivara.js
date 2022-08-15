const data =
[
    {
    id: 1,
    image1: 'produto0001.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Perfume Masculino V - Eau de Parfum 100ml',
    preco: '310',
    volume: '100ml',
    material: '',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['alianca', 'casamento'],
    garantia: '3 meses'
},
{
    id: 2,
    image1: 'produto0002.webp',
    image2: 'produto001-b.webp' ,
    nome: 'Aliança de Casamento Prata Ouro Amarelo',
    preco: '149',
    volume: '',
    material: ['Ouro Amarelo', 'Prata'],
    cor: 'Amarelo',
    largura: '5mm',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino'],
    garantia: '12 meses'
},
{
    id: 3,
    image1: 'produto0003.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Relógio Calvin Klein Masculino Aço',
    preco: '125',
    volume: '',
    material: 'Aço',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino', 'relogio'],
    garantia: '3 meses'
},
{
    id: 4,
    image1: 'produto0004.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Corrente Life Espiga',
    preco: '32',
    volume: '',
    material: 'prata',
    cor: 'prata',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['acessorios', 'masculino', 'corrente' , 'joias'],
    garantia: '12 meses'
},
{
    id: 5,
    image1: 'produto0005.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Anel Ouro Branco e Diamantes',
    preco: '429',
    volume: '',
    material: 'ouro branco',
    cor: 'prata',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['joias', 'aneis'],
    garantia: '3 meses'
},
{
    id: 6,
    image1: 'produto0006.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Anel Policroma Ouro Rosé Prasiolita',
    preco: '659',
    volume: '',
    material: '',
    cor: 'prata',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['joias', 'anel'],
    garantia: '12 meses'
},
{
    id: 7,
    image1: 'produto0007.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Brinco Ouro Branco e Diamantes',
    preco: '465',
    volume: '',
    material: 'ouro branco',
    cor: 'preto',
    largura: '',
    espessura: '',
    classificacao: '',
    tipo: ['joias', 'brinco'],
    garantia: '12 meses'
},
{
    id: 8,
    image1: 'produto0008.webp',
    image2:  'produto001-b.webp' ,
    nome: 'Pulseira Ouro Rosê',
    preco: '1199',
    volume: '',
    material: 'Ouro Rosê',
    cor: 'Rosê',
    largura: '6mm',
    espessura: '',
    classificacao: '',
    tipo: ['joias', 'pulseira'],
    garantia: '12 meses'
}
]

const vivara = {
   
    getAll: () =>{
        return data
    }
}
module.exports.vivara = vivara;