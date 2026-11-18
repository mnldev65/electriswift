const catalogoAparelhosPorCategoria = {
    climatizacao: {
        titulo: "Climatização & Ventilação",
        aparelhos: [
            { id: 101, nome: "Ar-condicionado (9.000 / 12.000 BTU)", potencia: 1200, horas: 8, dias: 30 },
            { id: 102, nome: "Ventilador de teto", potencia: 120, horas: 6, dias: 30 },
            { id: 103, nome: "Ventilador de mesa / coluna", potencia: 50, horas: 8, dias: 30 },
            { id: 104, nome: "Aquecedor de ambiente", potencia: 1500, horas: 4, dias: 15 }
        ]
    },
    cozinha: {
        titulo: "Cozinha & Eletrodomésticos",
        aparelhos: [
            { id: 201, nome: "Geladeira (Duplex / Grande)", potencia: 150, horas: 24, dias: 30 },
            { id: 202, nome: "Geladeira (Simples)", potencia: 100, horas: 24, dias: 30 },
            { id: 203, nome: "Freezer (Horizontal / Vertical)", potencia: 200, horas: 24, dias: 30 },
            { id: 204, nome: "Micro-ondas", potencia: 1200, horas: 0.5, dias: 30 },
            { id: 205, nome: "Forno elétrico de bancada", potencia: 1500, horas: 1, dias: 20 },
            { id: 206, nome: "Airfryer (Fritadeira sem óleo)", potencia: 1400, horas: 1, dias: 30 },
            { id: 207, nome: "Cafeteira elétrica", potencia: 600, horas: 0.5, dias: 30 },
            { id: 208, nome: "Sanduicheira / Grill", potencia: 750, horas: 0.3, dias: 20 },
            { id: 209, nome: "Liquidificador", potencia: 400, horas: 0.2, dias: 20 }
        ]
    },
    lavanderia: {
        titulo: "Lavanderia & Limpeza",
        aparelhos: [
            { id: 301, nome: "Máquina de lavar roupas", potencia: 600, horas: 1, dias: 12 },
            { id: 302, nome: "Tanquinho de lavar", potencia: 300, horas: 1.5, dias: 12 },
            { id: 303, nome: "Secadora de roupas", potencia: 2000, horas: 1, dias: 12 },
            { id: 304, nome: "Ferro de passar roupa", potencia: 1000, horas: 2, dias: 8 },
            { id: 305, nome: "Aspirador de pó", potencia: 1200, horas: 0.5, dias: 8 }
        ]
    },
    banheiro: {
        titulo: "Banheiros & Higiene",
        aparelhos: [
            { id: 401, nome: "Chuveiro elétrico (Posição Inverno)", potencia: 5500, horas: 0.5, dias: 30 },
            { id: 402, nome: "Secador de cabelo", potencia: 1400, horas: 0.2, dias: 20 },
            { id: 403, nome: "Chapinha / Modelador de cachos", potencia: 40, horas: 0.3, dias: 20 }
        ]
    },
    sala: {
        titulo: "Sala & Entretenimento",
        aparelhos: [
            { id: 501, nome: "Televisão (Smart TV LED)", potencia: 100, horas: 5, dias: 30 },
            { id: 502, nome: "Console de Videogame", potencia: 150, horas: 3, dias: 20 },
            { id: 503, nome: "Aparelho de som / Home Theater", potencia: 80, horas: 2, dias: 15 },
            { id: 504, nome: "Roteador Wi-Fi (Ligado direto)", potencia: 15, horas: 24, dias: 30 }
        ]
    },
    escritorio: {
        titulo: "Escritório & Informática",
        aparelhos: [
            { id: 601, nome: "Computador Desktop (Gamer/Trabalho)", potencia: 350, horas: 6, dias: 25 },
            { id: 602, nome: "Notebook", potencia: 65, horas: 6, dias: 25 },
            { id: 603, nome: "Monitor externo adicional", potencia: 30, horas: 6, dias: 25 },
            { id: 604, nome: "Impressora", potencia: 50, horas: 0.2, dias: 10 }
        ]
    },
    iluminacao: {
    titulo: "Iluminação Geral",
        aparelhos: [
            { id: 701, nome: "Lâmpadas LED (Residência inteira)", potencia: 100, horas: 6, dias: 30 },
            { id: 702, nome: "Iluminação externa (varanda/garagem)", potencia: 40, horas: 5, dias: 30 },
            { id: 703, nome: "Fita LED / LED decorativo", potencia: 15, horas: 5, dias: 30 },
            { id: 704, nome: "Lâmpadas inteligentes (standby)", potencia: 1, horas: 24, dias: 30 },
            { id: 705, nome: "Luz de emergência / sensor de presença", potencia: 5, horas: 24, dias: 30 }
        ]
    },
    outros: {
        titulo: "Outros & Diversos",
        aparelhos: [
            { id: 801, nome: "Portão eletrônico", potencia: 300, horas: 0.1, dias: 30 },
            { id: 802, nome: "Bomba d'água (Poço / Cisterna)", potencia: 500, horas: 1, dias: 15 }
        ]
    }
};

