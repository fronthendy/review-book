console.log('arquivo externo');

let livros = [{
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
    },
    {
        nome: 'Deserto dos Tártaros',
        imagem: 'assets/img/deserto-poster.jpg',
        nota: 2

    }
];

let sectionLivros = document.querySelector('.livros .container');

let htmlLivros = "";

livros.forEach((livro, id) => {
    htmlLivros += `<article>
    <div  onclick="abrirModal(${id})" class="img-poster" style="background-image: url(${livro.imagem})"></div>
    <div class="descricao">
        <h1><a href="#" onclick="abrirModal(${id})">${livro.nome}</a></h1>
        <div class="stars" onclick="abrirModal(${id})">
            ${'<span class="star-filled"></span>'.repeat(livro.nota)}
            ${'<span class="star-outline"></span>'.repeat(5 - livro.nota)}
        </div>
    </div>
</article>`;
})

sectionLivros.innerHTML = htmlLivros;

let modalTitulo = document.querySelector('.modal .titulo');
let modalPoster = document.querySelector('.modal .poster');
let modalForm = document.querySelector('.modal form');

function abrirModal(id) {
    modalTitulo.innerText = livros[id].nome;
    modalPoster.src = "http://127.0.0.1:8000" + livros[id].imagem;
    document.querySelector('body').classList.add('modal-ativo');
    modalForm.action = "http://127.0.0.1:8000/api/produtos/review/" + livros[id].id;
}

function fecharModal() {
    document.querySelector('body').classList.remove('modal-ativo');
}

document.addEventListener('keydown', function (evento) {
    console.log(evento.keyCode);

    if (evento.keyCode == 27) {
        fecharModal();
    }
});


var request = new Request('http://127.0.0.1:8000/api/produtos');

fetch('http://127.0.0.1:8000/api/produtos', {
        mode: 'cors'
    }).then((response) => response.json())
    .then((response) => {
        livros = response;
        for (var key in response) {
            var obj = response[key];
            console.log(obj)
            htmlLivros += `<article>
                <div  onclick="abrirModal(${key})" class="img-poster" style="background-image: url(http://127.0.0.1:8000${obj.imagem})"></div>
                <div class="descricao">
                    <h1><a href="#" onclick="abrirModal(${key})">${obj.nome}</a></h1>
                    <div class="stars" onclick="abrirModal(${key})">
                        ${'<span class="star-filled"></span>'.repeat(obj.nota)}
                        ${'<span class="star-outline"></span>'.repeat(5 - obj.nota)}
                    </div>
                </div>
            </article>`;
        }
        sectionLivros.innerHTML = htmlLivros;
    });