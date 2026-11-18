const catalogoAparelhosPorCategoria = {
    climatizacao: {
        titulo: "Climatização & Ventilação",
        aparelhos: [
            { id: 101, nome: "Ar-condicionado (9.000 / 12.000 BTU)", potencia: 1200, horas: 8, dias: 30, qtde: 1 },
            { id: 102, nome: "Ventilador de teto", potencia: 120, horas: 6, dias: 30, qtde: 1 },
            { id: 103, nome: "Ventilador de mesa / coluna", potencia: 50, horas: 8, dias: 30, qtde: 1 },
            { id: 104, nome: "Aquecedor de ambiente", potencia: 1500, horas: 4, dias: 15, qtde: 1 }
        ]
    },
    cozinha: {
        titulo: "Cozinha & Eletrodomésticos",
        aparelhos: [
            { id: 201, nome: "Geladeira (Duplex / Grande)", potencia: 150, horas: 24, dias: 30, qtde: 1 },
            { id: 202, nome: "Geladeira (Simples)", potencia: 100, horas: 24, dias: 30, qtde: 1 },
            { id: 203, nome: "Freezer (Horizontal / Vertical)", potencia: 200, horas: 24, dias: 30, qtde: 1 },
            { id: 204, nome: "Micro-ondas", potencia: 1200, horas: 0.5, dias: 30, qtde: 1 },
            { id: 205, nome: "Forno elétrico de bancada", potencia: 1500, horas: 1, dias: 20, qtde: 1 },
            { id: 206, nome: "Airfryer (Fritadeira sem óleo)", potencia: 1400, horas: 1, dias: 30, qtde: 1 },
            { id: 207, nome: "Cafeteira elétrica", potencia: 600, horas: 0.5, dias: 30, qtde: 1 },
            { id: 208, nome: "Sanduicheira / Grill", potencia: 750, horas: 0.3, dias: 20, qtde: 1 },
            { id: 209, nome: "Liquidificador", potencia: 400, horas: 0.2, dias: 20, qtde: 1 }
        ]
    },
    lavanderia: {
        titulo: "Lavanderia & Limpeza",
        aparelhos: [
            { id: 301, nome: "Máquina de lavar roupas", potencia: 600, horas: 1, dias: 12, qtde: 1 },
            { id: 302, nome: "Tanquinho de lavar", potencia: 300, horas: 1.5, dias: 12, qtde: 1 },
            { id: 303, nome: "Secadora de roupas", potencia: 2000, horas: 1, dias: 12, qtde: 1 },
            { id: 304, nome: "Ferro de passar roupa", potencia: 1000, horas: 2, dias: 8, qtde: 1 },
            { id: 305, nome: "Aspirador de pó", potencia: 1200, horas: 0.5, dias: 8, qtde: 1 }
        ]
    },
    banheiro: {
        titulo: "Banheiros & Higiene",
        aparelhos: [
            { id: 401, nome: "Chuveiro elétrico (Posição Inverno)", potencia: 5500, horas: 0.5, dias: 30, qtde: 1 },
            { id: 402, nome: "Secador de cabelo", potencia: 1400, horas: 0.2, dias: 20, qtde: 1 },
            { id: 403, nome: "Chapinha / Modelador de cachos", potencia: 40, horas: 0.3, dias: 20, qtde: 1 }
        ]
    },
    sala: {
        titulo: "Sala & Entretenimento",
        aparelhos: [
            { id: 501, nome: "Televisão (Smart TV LED)", potencia: 100, horas: 5, dias: 30, qtde: 1 },
            { id: 502, nome: "Console de Videogame", potencia: 150, horas: 3, dias: 20, qtde: 1 },
            { id: 503, nome: "Aparelho de som / Home Theater", potencia: 80, horas: 2, dias: 15, qtde: 1 },
            { id: 504, nome: "Roteador Wi-Fi (Ligado direto)", potencia: 15, horas: 24, dias: 30, qtde: 1 }
        ]
    },
    escritorio: {
        titulo: "Escritório & Informática",
        aparelhos: [
            { id: 601, nome: "Computador Desktop (Gamer/Trabalho)", potencia: 350, horas: 6, dias: 25, qtde: 1 },
            { id: 602, nome: "Notebook", potencia: 65, horas: 6, dias: 25, qtde: 1 },
            { id: 603, nome: "Monitor externo adicional", potencia: 30, horas: 6, dias: 25, qtde: 1 },
            { id: 604, nome: "Impressora", potencia: 50, horas: 0.2, dias: 10, qtde: 1 }
        ]
    },
    iluminacao: {
        titulo: "Iluminação Geral",
        aparelhos: [
            { id: 701, nome: "Lâmpadas LED (Residência inteira)", potencia: 100, horas: 6, dias: 30, qtde: 1 },
            { id: 702, nome: "Iluminação externa (varanda/garagem)", potencia: 40, horas: 5, dias: 30, qtde: 1 },
            { id: 703, nome: "Fita LED / LED decorativo", potencia: 15, horas: 5, dias: 30, qtde: 1 },
            { id: 704, nome: "Lâmpadas inteligentes (standby)", potencia: 1, horas: 24, dias: 30, qtde: 1 },
            { id: 705, nome: "Luz de emergência / sensor de presença", potencia: 5, horas: 24, dias: 30, qtde: 1 }
        ]
    },
    outros: {
        titulo: "Outros & Diversos",
        aparelhos: [
            { id: 801, nome: "Portão eletrônico", potencia: 300, horas: 0.1, dias: 30, qtde: 1 },
            { id: 802, nome: "Bomba d'água (Poço / Cisterna)", potencia: 500, horas: 1, dias: 15, qtde: 1 }
        ]
    }
};

let aparelhosNaResidencia = [];
let temporizadoresSliders = {};

document.addEventListener("DOMContentLoaded", () => {
    const inputBusca = document.getElementById("input-busca-aparelho");
    const containerResultados = document.getElementById("lista-resultados-busca");
    const containerAdicionados = document.getElementById("aparelhos-adicionados-container");
    const spanTotalGeral = document.getElementById("consumo-total-geral");
    const btnVerResultados = document.getElementById("btn-ver-resultados");
    const btnAbrirModal = document.getElementById("btn-abrir-modal-filtro");
    const btnFecharModal = document.getElementById("btn-fechar-modal-filtro");
    const modalFiltro = document.getElementById("modal-filtro-categorias");

    btnAbrirModal.addEventListener("click", () => {
        modalFiltro.style.display = "flex";
    });

    btnFecharModal.addEventListener("click", () => {
        modalFiltro.style.display = "none";
        executarBusca();
    });

    modalFiltro.addEventListener("click", (e) => {
        if (e.target === modalFiltro) {
            modalFiltro.style.display = "none";
            executarBusca();
        }
    });

    inputBusca.addEventListener("input", () => {
        executarBusca();
    });

    function executarBusca() {
        const termo = inputBusca.value.toLowerCase().trim();
        const checkboxes = modalFiltro.querySelectorAll("input[type='checkbox']:checked");
        const categoriasSelecionadas = Array.from(checkboxes).map(cb => cb.value);

        if (termo === "" && categoriasSelecionadas.length === 0) {
            containerResultados.innerHTML = "";
            return;
        }

        let encontrados = [];

        Object.keys(catalogoAparelhosPorCategoria).forEach(chaveCat => {
            if (categoriasSelecionadas.length > 0 && !categoriasSelecionadas.includes(chaveCat)) {
                return;
            }

            const categoriaObj = catalogoAparelhosPorCategoria[chaveCat];
            categoriaObj.aparelhos.forEach(aparelho => {
                const combinaNome = aparelho.nome.toLowerCase().includes(termo);
                if (combinaNome) {
                    encontrados.push({ ...aparelho, categoriaTitulo: categoriaObj.titulo });
                }
            });
        });

        renderizarResultados(encontrados, termo);
    }

    function renderizarResultados(lista, termoBuscado) {
        containerResultados.innerHTML = "";

        if (lista.length === 0) {
            containerResultados.innerHTML = `
                <div class="sem-resultado">
                    <p>Nenhum aparelho encontrado.</p>
                    <button type="button" id="btn-personalizado" class="btn-adicionar-catalogo">
                        Adicionar "${termoBuscado || 'Item Personalizado'}"
                    </button>
                </div>
            `;
            document.getElementById("btn-personalizado").addEventListener("click", () => {
                adicionarItemPersonalizado(termoBuscado);
            });
            return;
        }

        lista.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("resultado-item-card");
            div.innerHTML = `
                <span>${item.nome} (${item.potencia}W) - <small>${item.categoriaTitulo}</small></span>
                <button type="button" class="btn-adicionar-catalogo" data-id="${item.id}">Adicionar</button>
            `;
            div.querySelector("button").addEventListener("click", () => {
                adicionarAoPainel(item);
            });
            containerResultados.appendChild(div);
        });
    }

    function adicionarAoPainel(aparelho) {
        const novoItem = {
            ...aparelho,
            uuid: Date.now(),
            editando: false
        };
        aparelhosNaResidencia.push(novoItem);
        inputBusca.value = "";
        containerResultados.innerHTML = "";
        atualizarPainelResidencia();
    }

    function adicionarItemPersonalizado(nome) {
        const novoItem = {
            id: Date.now(),
            nome: nome.trim() !== "" ? nome : "Aparelho Personalizado",
            potencia: 1000,
            qtde: 1,
            horas: 2,
            dias: 30,
            uuid: Date.now(),
            editando: true
        };
        aparelhosNaResidencia.push(novoItem);
        inputBusca.value = "";
        containerResultados.innerHTML = "";
        atualizarPainelResidencia();
    }

    function atualizarPainelResidencia() {
        containerAdicionados.innerHTML = "";
        let consumoTotalGeral = 0;

        aparelhosNaResidencia.forEach(item => {
            const consumoMensal = ((item.potencia / 1000) * item.horas * item.dias) * item.qtde;
            consumoTotalGeral += consumoMensal;

            const card = document.createElement("div");
            card.classList.add("aparelho-card-horizontal");
            
            card.innerHTML = `
                <div class="card-info-basica">
                    <strong>${item.nome}</strong>
                    <span>Potência: ${item.potencia} W</span>
                </div>
                
                <div class="card-slider-wrapper">
                    <label>Horas por dia: <span class="val-horas">${item.horas}h</span></label>
                    <input type="range" min="0.5" max="24" step="0.5" value="${item.horas}" 
                        class="slider-horas" ${!item.editando ? 'disabled' : ''}>
                </div>

                <div class="card-consumo-individual">
                    ${consumoMensal.toFixed(2)} kWh/mês
                </div>

                <div class="card-acoes">
                    <button type="button" class="btn-toggle-edicao">
                        ${item.editando ? 'Terminar' : 'Editar'}
                    </button>
                    <button type="button" class="btn-remover-item">Excluir</button>
                </div>
            `;

            const btnEditar = card.querySelector(".btn-toggle-edicao");
            const slider = card.querySelector(".slider-horas");
            const btnRemover = card.querySelector(".btn-remover-item");
            const spanConsumo = card.querySelector(".card-consumo-individual");

            btnEditar.addEventListener("click", () => {
                item.editando = !item.editando;
                atualizarPainelResidencia();
            });

            slider.addEventListener("input", (e) => {
                const novaHora = parseFloat(e.target.value);
                item.horas = novaHora;
                card.querySelector(".val-horas").textContent = `${item.horas}h`;

                if (temporizadoresSliders[item.uuid]) {
                    clearTimeout(temporizadoresSliders[item.uuid]);
                }

                spanConsumo.style.opacity = "0.5";

                temporizadoresSliders[item.uuid] = setTimeout(() => {
                    const novoConsumo = ((item.potencia / 1000) * item.horas * item.dias) * item.qtde;
                    spanConsumo.textContent = `${novoConsumo.toFixed(2)} kWh/mês`;
                    spanConsumo.style.opacity = "1";
                    recalcularTotalGeral();
                }, 3000);
            });

            btnRemover.addEventListener("click", () => {
                if (temporizadoresSliders[item.uuid]) clearTimeout(temporizadoresSliders[item.uuid]);
                aparelhosNaResidencia = aparelhosNaResidencia.filter(obj => obj.uuid !== item.uuid);
                atualizarPainelResidencia();
            });

            containerAdicionados.appendChild(card);
        });

        spanTotalGeral.textContent = `${consumoTotalGeral.toFixed(2)} kWh`;

        if (aparelhosNaResidencia.length > 0) {
            btnVerResultados.removeAttribute("disabled");
        } else {
            btnVerResultados.setAttribute("disabled", "true");
        }
    }

    function recalcularTotalGeral() {
        let total = aparelhosNaResidencia.reduce((acc, item) => {
            return acc + (((item.potencia / 1000) * item.horas * item.dias) * item.qtde);
        }, 0);
        spanTotalGeral.textContent = `${total.toFixed(2)} kWh`;
    }
});