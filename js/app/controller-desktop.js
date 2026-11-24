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
            { id: 401, nome: "Chuveiro elétrico", potencia: 5500, horas: 0.5, dias: 30, qtde: 1 },
            { id: 402, nome: "Secador de cabelo", potencia: 1400, horas: 0.2, dias: 20, qtde: 1 },
            { id: 403, nome: "Chapinha / Modelador de cachos", potencia: 40, horas: 0.3, dias: 20, qtde: 1 }
        ]
    },
    sala: {
        titulo: "Sala & Entretenimento",
        aparelhos: [
            { id: 501, nome: "Televisão (Smart TV)", potencia: 100, horas: 5, dias: 30, qtde: 1 },
            { id: 502, nome: "Console de Videogame", potencia: 150, horas: 3, dias: 20, qtde: 1 },
            { id: 503, nome: "Aparelho de som / Home Theater", potencia: 80, horas: 2, dias: 15, qtde: 1 },
            { id: 504, nome: "Roteador Wi-Fi (Ligado direto)", potencia: 15, horas: 24, dias: 30, qtde: 1 }
        ]
    },
    escritorio: {
        titulo: "Escritório & Informática",
        aparelhos: [
            { id: 601, nome: "Computador Desktop", potencia: 350, horas: 6, dias: 25, qtde: 1 },
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
let temporizadoresEdicao = {};

document.addEventListener("DOMContentLoaded", () => {
    const inputBusca = document.getElementById("input-busca-aparelho");
    const containerResultados = document.getElementById("lista-resultados-busca");
    const containerAdicionados = document.getElementById("aparelhos-adicionados-container");
    const spanTotalGeral = document.getElementById("consumo-total-geral");
    const btnVerResultados = document.getElementById("btn-ver-resultados");
    const btnAbrirModal = document.getElementById("btn-abrir-modal-filtro");
    const btnFecharModal = document.getElementById("btn-fechar-modal-filtro");
    const modalFiltro = document.getElementById("modal-filtro-categorias");
    const inputTarifa = document.getElementById("input-tarifa-kwh");

    function obterTarifaAtual() {
        const valor = parseFloat(inputTarifa?.value);
        return !isNaN(valor) && valor > 0 ? valor : 0.85;
    }

    function calcularConsumoItem(item) {
        return ((item.potencia / 1000) * item.horas * item.dias) * item.qtde;
    }

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

    if (inputTarifa) {
        inputTarifa.addEventListener("input", () => {
            recalcularTotalGeral();
        });
    }

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
                if (aparelho.nome.toLowerCase().includes(termo)) {
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

    function agendarRecalculo(item, spanConsumo) {
        if (temporizadoresEdicao[item.uuid]) {
            clearTimeout(temporizadoresEdicao[item.uuid]);
        }

        spanConsumo.style.opacity = "0.5";

        temporizadoresEdicao[item.uuid] = setTimeout(() => {
            const novoConsumo = calcularConsumoItem(item);
            spanConsumo.textContent = `${novoConsumo.toFixed(2)} kWh/mês`;
            spanConsumo.style.opacity = "1";
            recalcularTotalGeral();
        }, 3000);
    }

    function atualizarPainelResidencia() {
        containerAdicionados.innerHTML = "";
        let consumoTotalGeral = 0;

        aparelhosNaResidencia.forEach(item => {
            const consumoMensal = calcularConsumoItem(item);
            consumoTotalGeral += consumoMensal;

            const bloqueadoAttr = !item.editando ? "disabled" : "";

            const card = document.createElement("div");
            card.classList.add("aparelho-card-horizontal");

            card.innerHTML = `
            <strong>${item.nome}</strong>
                <div class="conatiner-aparelho">
                    <div class="card-info-basica">
                        <label>
                            Potência (W):
                            <input type="number" class="input-potencia" min="1" step="1" value="${item.potencia}" ${bloqueadoAttr}>
                        </label>
                        <label>
                            Quantidade:
                            <input type="number" class="input-qtde" min="1" step="1" value="${item.qtde}" ${bloqueadoAttr}>
                        </label>
                    </div>

                    <div class="card-horas-wrapper">
                        <label>
                            Horas por dia:
                            <input type="number" class="input-horas" min="0.5" max="24" step="0.5" value="${item.horas}" ${bloqueadoAttr}>
                        </label>
                    </div>

                    <div class="card-calendario-wrapper">
                        <button
                            type="button"
                            class="btn-calendario-item"
                            ${bloqueadoAttr}>
                            <img
                                src="./assets/calendar.png"
                                class="calendario-btn"
                                alt="botão de calendario interativo"/>
                        </button>
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
                </div>
            `;

            const btnEditar = card.querySelector(".btn-toggle-edicao");
            const inputPotencia = card.querySelector(".input-potencia");
            const inputQtde = card.querySelector(".input-qtde");
            const inputHoras = card.querySelector(".input-horas");
            const btnCalendario = card.querySelector(".btn-calendario-item");
            const btnRemover = card.querySelector(".btn-remover-item");
            const spanConsumo = card.querySelector(".card-consumo-individual");

            btnEditar.addEventListener("click", () => {
                item.editando = !item.editando;
                atualizarPainelResidencia();
            });

            inputPotencia.addEventListener("input", (e) => {
                const val = parseFloat(e.target.value);
                item.potencia = !isNaN(val) && val >= 0 ? val : 0;
                agendarRecalculo(item, spanConsumo);
            });

            inputQtde.addEventListener("input", (e) => {
                const val = parseInt(e.target.value, 10);
                item.qtde = !isNaN(val) && val >= 1 ? val : 1;
                agendarRecalculo(item, spanConsumo);
            });

            inputHoras.addEventListener("input", (e) => {
                let val = parseFloat(e.target.value);
                if (isNaN(val)) val = 0;
                if (val > 24) {
                    val = 24;
                    e.target.value = 24;
                }
                item.horas = val;
                agendarRecalculo(item, spanConsumo);
            });

            btnCalendario.addEventListener("click", () => {
                abrirCalendarioDesktop(item);
            });

            btnRemover.addEventListener("click", () => {
                if (temporizadoresEdicao[item.uuid]) clearTimeout(temporizadoresEdicao[item.uuid]);
                aparelhosNaResidencia = aparelhosNaResidencia.filter(obj => obj.uuid !== item.uuid);
                atualizarPainelResidencia();
            });

            containerAdicionados.appendChild(card);
        });

        recalcularTotalGeral(consumoTotalGeral);

        if (aparelhosNaResidencia.length > 0) {
            btnVerResultados.removeAttribute("disabled");
        } else {
            btnVerResultados.setAttribute("disabled", "true");
        }
    }

    function recalcularTotalGeral(totalPreCalculado = null) {
        const totalKwh = totalPreCalculado !== null
            ? totalPreCalculado
            : aparelhosNaResidencia.reduce((acc, item) => acc + calcularConsumoItem(item), 0);

        const tarifa = obterTarifaAtual();
        const custoEstimado = totalKwh * tarifa;

        spanTotalGeral.textContent = `${totalKwh.toFixed(2)} kWh`;
    }

    const modalCalendarioDesktop = document.getElementById("modal-calendario-desktop");
    const selectMesDesktop = document.getElementById("mes-referencia-desktop");
    const gradeDiasDesktop = document.getElementById("grade-dias-desktop");
    const contadorDiasDesktop = document.getElementById("contador-dias-desktop");
    const btnTodosDiasDesktop = document.getElementById("btn-todos-dias-desktop");
    const btnCancelarCalendarioDesktop = document.getElementById("btn-cancelar-calendario-desktop");
    const btnConfirmarCalendarioDesktop = document.getElementById("btn-confirmar-calendario-desktop");

    let uuidAparelhoAtivoCalendario = null;
    let diasMarcadosTemporarios = [];

    function atualizarTextoContadorDias() {
        if (!contadorDiasDesktop) return;
        contadorDiasDesktop.textContent = `Total: ${diasMarcadosTemporarios.length} dias selecionados`;
    }

    function desenharGradeDiasDesktop(quantidadeDiasMes) {
        if (!gradeDiasDesktop) return;
        gradeDiasDesktop.innerHTML = "";

        for (let dia = 1; dia <= quantidadeDiasMes; dia++) {
            const estaMarcado = diasMarcadosTemporarios.includes(dia);
            const botaoDia = document.createElement("button");
            botaoDia.type = "button";
            botaoDia.className = estaMarcado ? "dia-btn-desktop selecionado" : "dia-btn-desktop";
            botaoDia.textContent = String(dia);

            botaoDia.addEventListener("click", () => {
                const posicao = diasMarcadosTemporarios.indexOf(dia);
                if (posicao > -1) {
                    diasMarcadosTemporarios.splice(posicao, 1);
                    botaoDia.classList.remove("selecionado");
                } else {
                    diasMarcadosTemporarios.push(dia);
                    botaoDia.classList.add("selecionado");
                }
                atualizarTextoContadorDias();
            });

            gradeDiasDesktop.appendChild(botaoDia);
        }

        atualizarTextoContadorDias();
    }

    function abrirCalendarioDesktop(aparelho) {
        if (!aparelho || !aparelho.editando || !modalCalendarioDesktop) return;

        uuidAparelhoAtivoCalendario = aparelho.uuid;
        const totalMes = aparelho.mesReferencia || 30;

        if (selectMesDesktop) {
            selectMesDesktop.value = String(totalMes);
        }

        if (Array.isArray(aparelho.diasSelecionadosLista) && aparelho.diasSelecionadosLista.length > 0) {
            diasMarcadosTemporarios = aparelho.diasSelecionadosLista.filter(d => d <= totalMes);
        } else {
            diasMarcadosTemporarios = totalMes >= 1 ? [1] : [];
        }

        desenharGradeDiasDesktop(totalMes);
        modalCalendarioDesktop.style.display = "flex";
    }

    function fecharCalendarioDesktop() {
        if (modalCalendarioDesktop) {
            modalCalendarioDesktop.style.display = "none";
        }
        uuidAparelhoAtivoCalendario = null;
        diasMarcadosTemporarios = [];
    }

    if (selectMesDesktop) {
        selectMesDesktop.addEventListener("change", (evento) => {
            const novoTotalDias = Number(evento.target.value) || 30;
            diasMarcadosTemporarios = diasMarcadosTemporarios.filter(dia => dia <= novoTotalDias);
            desenharGradeDiasDesktop(novoTotalDias);
        });
    }

    if (btnTodosDiasDesktop) {
        btnTodosDiasDesktop.addEventListener("click", () => {
            const totalDias = Number(selectMesDesktop ? selectMesDesktop.value : 30) || 30;
            diasMarcadosTemporarios = Array.from({ length: totalDias }, (_, i) => i + 1);
            desenharGradeDiasDesktop(totalDias);
        });
    }

    if (btnCancelarCalendarioDesktop) {
        btnCancelarCalendarioDesktop.addEventListener("click", fecharCalendarioDesktop);
    }

    if (modalCalendarioDesktop) {
        modalCalendarioDesktop.addEventListener("click", (evento) => {
            if (evento.target === modalCalendarioDesktop) {
                fecharCalendarioDesktop();
            }
        });
    }

    if (btnConfirmarCalendarioDesktop) {
        btnConfirmarCalendarioDesktop.addEventListener("click", () => {
            const aparelhoAlvo = aparelhosNaResidencia.find(obj => obj.uuid === uuidAparelhoAtivoCalendario);
            if (aparelhoAlvo) {
                aparelhoAlvo.mesReferencia = Number(selectMesDesktop ? selectMesDesktop.value : 30) || 30;
                aparelhoAlvo.diasSelecionadosLista = [...diasMarcadosTemporarios];
                aparelhoAlvo.dias = diasMarcadosTemporarios.length;
                atualizarPainelResidencia();
            }
            fecharCalendarioDesktop();
        });
    }

    const secaoEtapa01 = document.querySelector(".container-etapa01");
    const secaoEtapa02 = document.querySelector(".Etapa02");

    const elTotalKwh = document.getElementById("res-desktop-total-kwh");
    const elTotalCusto = document.getElementById("res-desktop-total-custo");
    const elBadgeEconomia = document.getElementById("res-desktop-badge-economia");
    const elEconomiaValor = document.getElementById("res-desktop-economia-valor");
    const elEconomiaPerc = document.getElementById("res-desktop-economia-perc");
    const elTop3Lista = document.getElementById("res-desktop-top3-lista");
    const elListaAparelhosResumo = document.getElementById("res-desktop-lista-aparelhos");
    const canvasGraficoDesktop = document.getElementById("grafico-cenarios-desktop");

    let instanciaGraficoDesktop = null;

    if (secaoEtapa02) {
        secaoEtapa02.style.display = "none";
    }

    function formatarMoedaBR(valor) {
        return `R$ ${Number(valor || 0).toFixed(2).replace(".", ",")}`;
    }

    function calcularDadosEtapa02() {
        const tarifa = obterTarifaAtual();

        const detalhados = aparelhosNaResidencia.map(item => {
            const kwhAtual = calcularConsumoItem(item);
            const custoAtual = kwhAtual * tarifa;
            const horasOtimizadas = Math.max(Number(item.horas || 0) * 0.8, 0.1);
            const kwhOtimizado = ((item.potencia / 1000) * horasOtimizadas * item.dias) * item.qtde;
            const economiaKwh = Math.max(kwhAtual - kwhOtimizado, 0);
            const economiaReais = economiaKwh * tarifa;

            return {
                ...item,
                kwhAtual,
                custoAtual,
                kwhOtimizado,
                economiaReais
            };
        });

        const totalKwh = detalhados.reduce((acc, d) => acc + d.kwhAtual, 0);
        const totalCusto = totalKwh * tarifa;
        const totalKwhOtimizado = detalhados.reduce((acc, d) => acc + d.kwhOtimizado, 0);
        const economiaTotalReais = Math.max(totalCusto - (totalKwhOtimizado * tarifa), 0);
        const economiaPerc = totalCusto > 0 ? Math.round((economiaTotalReais / totalCusto) * 100) : 0;

        const top3 = [...detalhados]
            .sort((a, b) => b.economiaReais - a.economiaReais)
            .slice(0, 3);

        return {
            detalhados,
            totalKwh,
            totalCusto,
            totalKwhOtimizado,
            economiaTotalReais,
            economiaPerc,
            top3
        };
    }

    function renderizarGraficoDesktop(dados) {
        if (!canvasGraficoDesktop) return;

        if (typeof Chart === "undefined") {
            console.warn("Chart.js nao foi carregado. Verifique a tag <script> no HTML.");
            return;
        }

        if (instanciaGraficoDesktop) {
            instanciaGraficoDesktop.destroy();
            instanciaGraficoDesktop = null;
        }

        const labelsAparelhos = dados.detalhados.map(item => item.nome);
        const serieAtual = dados.detalhados.map(item => Number(item.kwhAtual.toFixed(2)));
        const serieOtimizada = dados.detalhados.map(item => Number(item.kwhOtimizado.toFixed(2)));

        const ctx = canvasGraficoDesktop.getContext("2d");
        instanciaGraficoDesktop = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labelsAparelhos,
                datasets: [
                    {
                        label: "Cenário Atual",
                        data: serieAtual,
                        backgroundColor: "#10B981",
                        borderRadius: 6
                    },
                    {
                        label: "Cenário Otimizado",
                        data: serieOtimizada,
                        backgroundColor: "#0B3B24",
                        borderRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: "top",
                        labels: {
                            color: "#1E293B",
                            font: {
                                weight: "600"
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.dataset.label}: ${context.parsed.y.toFixed(2)} kWh/mês`
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#1E293B",
                            font: {
                                weight: "600"
                            },
                            maxRotation: 25,
                            minRotation: 0
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#64748B",
                            callback: (valor) => `${valor} kWh`
                        }
                    }
                }
            }
        });
    }

    function renderizarEtapa02() {
        const dados = calcularDadosEtapa02();

        if (elTotalKwh) elTotalKwh.textContent = `${dados.totalKwh.toFixed(2)} kWh`;
        if (elTotalCusto) elTotalCusto.textContent = formatarMoedaBR(dados.totalCusto);

        const textoEconomiaMes = `${formatarMoedaBR(dados.economiaTotalReais)} / mes`;
        if (elBadgeEconomia) elBadgeEconomia.textContent = textoEconomiaMes;
        if (elEconomiaValor) elEconomiaValor.textContent = textoEconomiaMes;
        if (elEconomiaPerc) {
            elEconomiaPerc.textContent = `Reducao de ate ${dados.economiaPerc}% em sua conta de luz.`;
        }

        if (elTop3Lista) {
            elTop3Lista.innerHTML = "";
            dados.top3.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.nome} (${formatarMoedaBR(item.economiaReais)}/mes)`;
                elTop3Lista.appendChild(li);
            });
        }

        if (elListaAparelhosResumo) {
            elListaAparelhosResumo.innerHTML = "";
            dados.detalhados.forEach(item => {
                const linha = document.createElement("div");
                linha.classList.add("item-resumo-linha");
                linha.innerHTML = `
                <div>
                    <strong>${item.nome}</strong>
                    <div><sm
                    all>${item.potencia}W • Qtd: ${item.qtde}</sm></div>
                </div>
                <div><small>${item.horas}h/dia • ${item.dias} dias</small></div>
                <div><strong>${item.kwhAtual.toFixed(2)} kWh</strong></div>
                <div><strong>${formatarMoedaBR(item.custoAtual)}</strong></div>
            `;
                elListaAparelhosResumo.appendChild(linha);
            });
        }

        renderizarGraficoDesktop(dados);
    }

    function abrirEtapa02() {
        if (aparelhosNaResidencia.length === 0) {
            alert("Adicione pelo menos um aparelho antes de ver os resultados.");
            return;
        }

        renderizarEtapa02();

        if (secaoEtapa01) {
            secaoEtapa01.style.display = "none";
        }

        if (secaoEtapa02) {
            secaoEtapa02.style.display = "block";
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (btnVerResultados) {
        btnVerResultados.addEventListener("click", abrirEtapa02);
    }

    const btnReiniciarHeader = document.getElementById("drawer-restart-btn");

    if (btnReiniciarHeader) {
        btnReiniciarHeader.addEventListener("click", () => {
            Object.values(temporizadoresEdicao).forEach(timerId => clearTimeout(timerId));
            temporizadoresEdicao = {};
            aparelhosNaResidencia = [];

            if (instanciaGraficoDesktop) {
                instanciaGraficoDesktop.destroy();
                instanciaGraficoDesktop = null;
            }

            atualizarPainelResidencia();

            if (secaoEtapa02) {
                secaoEtapa02.style.display = "none";
            }
            if (secaoEtapa01) {
                secaoEtapa01.style.display = "";
            }

            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});