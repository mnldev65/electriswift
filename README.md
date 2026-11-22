# ElectriSwift ⚡

**Entenda o consumo de energia da sua casa e descubra onde é possível economizar.**

O **ElectriSwift** é uma aplicação web responsiva em desenvolvimento que ajuda pessoas a estimar o consumo de energia de aparelhos domésticos, calcular custos aproximados e comparar cenários de uso.

> **Aviso:** Os valores apresentados pelo ElectriSwift são estimativas calculadas a partir dos dados informados pelo usuário. Eles não substituem a conta da concessionária e podem não incluir impostos, bandeiras tarifárias, taxas ou regras específicas da distribuidora.

## 🎯 Objetivo

Construir uma ferramenta moderna, intuitiva e fácil de usar que transforme informações sobre aparelhos e hábitos de uso em estimativas compreensíveis de consumo mensal e custo financeiro.

## 🚀 Status do Projeto & Progresso

O projeto encontra-se em **desenvolvimento ativo**, com a arquitetura de interface e layout da **Etapa 1 (Cadastro de Aparelho)** finalizados tanto na versão Mobile quanto no Desktop!

### 📱 Versão Mobile
- [x] **Tela Inicial:** Apresentação da proposta e botão de início.
- [x] **Sobre (`about.html`):** Explicação técnica do projeto e da lógica computacional.
- [x] **Seleção Rápida de Aparelhos (Etapa 1):** Interface em cards para escolha de eletrodomésticos comuns ou personalizados.
- [x] **Configurar Utilização (Etapa 2):** Definição da tarifa de energia (R$/kWh), quantidade, tempo de uso diário e dias no mês.
- [x] **Resultados da Simulação (Etapa 3):** Exibição do consumo total em kWh, custo estimado e detalhamento por aparelho.
- [x] **Comparação de Cenários (Etapa 4):** Análise comparativa entre o uso atual e o cenário otimizado com gráficos de barras (Chart.js).
- [ ] **Resumo Final (Etapa 5):** Síntese final e recomendações de economia.

### 🖥️ Versão Desktop
- [x] **Landing Page (`index.html`):** Apresentação do propósito e acesso à aplicação.
- [x] **Sobre (`about.html`):** Explicação técnica do projeto e da lógica computacional.(será melhorado nas próximas fases)
- [x] **Cadastrar Aparelho (`appDesktop.html` - Etapa 01):** Interface em *Split Screen* com busca inteligente por nome, filtro por categorias via modal com checkboxes e suporte a cadastro de aparelho personalizado.
- [x] **Gerenciamento Dinâmico & Edição (`controller-desktop.js`):** Cards horizontais por aparelho com modo de edição controlado (`Editar`/`Terminar`), ajuste de potência (W), quantidade, horas de uso diário e modal de calendário interativo para seleção de dias no mês.
- [x] **Cálculo em Tempo Real & Tarifa:** Estimativa individual e geral em kWh com configuração de tarifa (R$/kWh) e atraso (*debounce*) no recálculo durante edições.
- [ ] **Visualização de Resultados & Etapas Subsequentes:** Ação do botão "Ver Resultados" e etapas seguintes em desenvolvimento/planejamento

### ⚙️ Geral & Infraestrutura
- [x] Deploy e hospedagem automática configurados no **GitHub Pages**.
- [x] Lógica JavaScript para captação e validação dos dados dos formulários. (somente na versão mobile, mas será acrescentado no desktop futuramente)
- [x] Cálculo dinâmico de consumo mensal (kWh) e estimativa financeira (R$). (somente na versão mobile, mas será acrescentado no desktop futuramente)
- [ ] Persistência de dados com `localStorage`.

## 🌐 Acesse o Projeto Online

O projeto já está publicado e pode ser visualizado diretamente pelo GitHub Pages:
👉 **[Acessar ElectriSwift no GitHub Pages](https://mnldev65.github.io/electriswift/)**

---

## 🖥️ Telas e fluxo de uso

Para garantir a melhor experiência em qualquer tela, o ElectriSwift adota fluxos adaptados ao contexto de cada dispositivo:

### 📱 Fluxo Mobile
Na versão mobile, a navegação é guiada por etapas sequenciais e intuitivas:

1. **Tela Inicial (Landing Page / `index.html`)** — Apresenta o propósito do ElectriSwift e direciona para a aplicação.
2. **Sobre (`about.html`)** — Explica a lógica computacional e os passos de cálculo do projeto.
3. **Seleção Rápida de Aparelhos** — Escolha rápida dos aparelhos através de cartões visuais.
4. **Configurar Utilização** — Ajuste da tarifa de energia, quantidade e tempo de uso diário.
5. **Resultados da Simulação** — Apresentação do consumo acumulado (kWh) e custo financeiro (R$).
6. **Comparação de Cenários** — Comparativo visual em gráficos entre o cenário atual e o otimizado.
7. **Resumo Final *(Planejado)*** — Reunião dos principais indicadores e dicas práticas.

*Fluxo:* `Tela inicial → Seleção de Aparelhos → Configurar Utilização → Resultados → Comparação de Cenários → Resumo Final`

### 🖥️ Fluxo Desktop
Na versão desktop, a experiência utiliza o conceito de *Split Screen* (com rolagem interna no painel direito para preservar a visualização do lado esquerdo) e organização em painel interativo:

1. **Tela Inicial (Landing Page / `index.html`)** — Apresenta a proposta e direciona para a aplicação.
2. **Sobre (`about.html`)** — Explica a lógica computacional e os passos de cálculo do projeto.
3. **Gerenciamento de Aparelhos (Etapa 01 / `appDesktop.html`)** — Busca por nome, filtro por categorias em pop-up com checkboxes, criação de item personalizado, configuração da tarifa (R$/kWh), edição de potência/quantidade/horas/calendário de dias por card e resumo de consumo estimado.
4. **Etapas futuras (ainda em planejamento)**
  - Exibição detalhada ao acionar **Ver Resultados**
  - Comparativo visual em gráficos entre o cenário atual e o otimizado
  - Reunião dos principais indicadores e dicas práticas

*Fluxo:* `Tela inicial → Gerenciamento de Aparelhos → Ver Resultados (e etapas seguintes em planejamento)`

---

## 🧮 Como os cálculos funcionarão

Para cada aparelho:

**Consumo mensal estimado (kWh)**

`(potência em W ÷ 1.000) × horas de uso por dia × dias de uso por mês`

**Custo mensal estimado (R$)**

`consumo mensal estimado em kWh × tarifa informada em R$/kWh`

O total da casa será a soma dos valores de todos os aparelhos cadastrados. Para a primeira versão, o cenário econômico será calculado com base na alteração de horas de uso dos aparelhos escolhidos.

---

## 🧰 Tecnologias Utilizadas

- **HTML5** — estrutura semântica.
- **CSS3** — Layout moderno com CSS Grid, Flexbox, variáveis nativas e estilização avançada de formulários.
- **JavaScript (Vanilla)** — Lógica de aplicação pura executada no cliente (Client-side) para validação de formulários, cálculos dinâmicos e transição de telas.
- **LocalStorage** — Persistência leve dos dados no navegador do usuário, sem necessidade de banco de dados backend.
- **Git & GitHub** — Versionamento de código, gestão de branches (`main`, `rascunho/hero-desktop`) e publicação remota via GitHub Pages.

A primeira versão não exige React, servidor, autenticação nem banco de dados remoto. Essas tecnologias poderão ser estudadas em projetos posteriores, quando houver uma necessidade concreta.
---

## 📁 Estrutura de Arquivos do Projeto

```text
electriswift/
├── assets/               # Imagens, ícones e ilustrações da aplicação
├── css/                  # Estilos organizados em módulos
│   ├── about.css
│   ├── app.css
│   ├── appDesktop.css
│   ├── layout.css
│   ├── style.css
│   └── tokens.css
├── js/                   # Scripts e lógica da aplicação
│   ├── app/
│   │   ├── app-controller.js
│   │   ├── controller-desktop.js
│   │   ├── main.js
│   │   └── state.js
│   ├── charts/
│   │   └── chart-manager.js
│   ├── data/
│   ├── domain/
│   ├── storage/
│   ├── tests/
│   ├── ui/
│   └── script.js
├── about.html            # Página de explicação técnica e sobre o projeto
├── app.html              # Interface principal da aplicação mobile
├── appDesktop.html       # Interface dedicada para visualização em Desktop
├── index.html            # Landing Page principal do projeto
└── README.md             # Documentação completa do projeto
```

## Licença

Atualmente, o ElectriSwift está em desenvolvimento e ainda não possui uma licença de software definida. Embora o repositório seja público no GitHub, isso não significa que o código esteja liberado para reutilização, modificação ou redistribuição por terceiros. Por enquanto, o código-fonte é disponibilizado publicamente para consulta e acompanhamento do desenvolvimento, sem concessão de uma licença aberta.

A definição da licença será avaliada futuramente, de acordo com os objetivos e a evolução do projeto.

**Observação:** as bibliotecas e dependências de terceiros utilizadas no projeto permanecem sujeitas às respectivas licenças.
