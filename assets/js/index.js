console.log('arquivo externo');

let livros = [
    {
        nome: '1984',
        imagem: 'assets/img/1984-poster.jpg',
        nota: 5  
    },
    {
        nome: 'O menino do pijama listrado',
        imagem: 'assets/img/pijama-poster.jpg',
        nota: 4 
    },
    {
        nome: 'Fortaleza Digital',
        imagem: 'assets/img/fortaleza-poster.jpg',
        nota: 4 
    }
];

let sectionLivros = document.querySelector('.livros .container');

for (let livro of livros) {
    sectionLivros.append(`nome: ${livro.nome} | nota: ${livro.nota} --`)
}


