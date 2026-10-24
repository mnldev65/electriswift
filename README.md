# ElectriSwift ⚡

**Entenda o consumo de energia da sua casa e descubra onde é possível economizar.**

ElectriSwift é uma aplicação web responsiva em desenvolvimento que ajuda pessoas a estimar o consumo de energia de aparelhos domésticos, calcular custos aproximados e comparar cenários de uso.

> **Aviso:** os valores apresentados pelo ElectriSwift são estimativas calculadas a partir dos dados informados pelo usuário. Eles não substituem a conta da concessionária e podem não incluir impostos, bandeiras tarifárias, taxas ou regras específicas da distribuidora.

## 🎯 Objetivo

Construir uma ferramenta simples e fácil de usar que transforme informações sobre aparelhos e hábitos de uso em estimativas compreensíveis de consumo mensal e custo.

## ✨ Funcionalidades planejadas

### Primeira versão (MVP)

- [ ] Apresentar a proposta do ElectriSwift e permitir iniciar o uso.
- [ ] Cadastrar aparelhos com nome, potência em watts (W), horas de uso por dia e dias de uso por mês.
- [ ] Listar e remover aparelhos cadastrados.
- [ ] Informar a tarifa de energia em reais por quilowatt-hora (R$/kWh).
- [ ] Calcular consumo mensal estimado por aparelho e total (kWh).
- [ ] Estimar custo por aparelho e custo total mensal.
- [ ] Comparar o cenário atual com um cenário de economia ajustando o uso dos aparelhos.
- [ ] Apresentar resultados de forma clara em telas que se adaptam a desktop e celular.
- [ ] Guardar os dados no navegador usando `localStorage`, depois que as funções principais estiverem funcionando.

### Melhorias futuras

- [ ] Gráficos mais completos e histórico mensal.
- [ ] Exportação ou impressão de um resumo.
- [ ] Sugestões de economia personalizadas a partir dos dados cadastrados.
- [ ] Testes automatizados e melhorias de acessibilidade.

Essas melhorias não fazem parte do primeiro objetivo obrigatório; serão consideradas conforme o aprendizado e o tempo disponível.

## 🖥️ Telas e fluxo de uso

O projeto começará como uma aplicação de página única: as áreas principais ficam organizadas dentro da mesma aplicação, e a navegação leva o usuário à seção desejada. Não é necessário criar cinco sites ou páginas HTML diferentes.

1. **Tela inicial** — apresenta o propósito do ElectriSwift e um botão para começar.
2. **Aparelhos** — permite adicionar aparelhos e consultar ou remover itens da lista.
3. **Resultados** — mostra consumo mensal estimado em kWh, custo aproximado e a contribuição de cada aparelho.
4. **Comparação de cenários** — compara o consumo atual com uma alternativa de uso reduzido e mostra a possível economia estimada.
5. **Resumo final** — reúne os principais números e dicas simples para ajudar a interpretar os resultados.

### Navegação em desktop

A navegação principal ficará no cabeçalho. A área de conteúdo usará o espaço horizontal para organizar formulários, cartões de resumo e listas lado a lado quando houver largura suficiente.

### Navegação em mobile

O conteúdo ficará em uma coluna, com formulários e cartões ocupando a largura disponível. Os botões serão fáceis de tocar e a navegação será compacta, podendo usar uma barra inferior. Não deve ser necessário rolar horizontalmente para ler os resultados.

### Fluxo principal

`Tela inicial → Aparelhos → Resultados → Comparação de cenários → Resumo final`

O usuário também poderá voltar às telas de aparelhos e resultados para corrigir dados e conferir novamente os cálculos.

## 🧮 Como os cálculos funcionarão

Para cada aparelho:

**Consumo mensal estimado (kWh)**

`(potência em W ÷ 1.000) × horas de uso por dia × dias de uso por mês`

**Custo mensal estimado (R$)**

`consumo mensal estimado em kWh × tarifa informada em R$/kWh`

O total da casa será a soma dos valores de todos os aparelhos cadastrados. Para a primeira versão, o cenário econômico será calculado com base na alteração de horas de uso dos aparelhos escolhidos.

## 🧰 Tecnologias

- **HTML5** — estrutura semântica do conteúdo.
- **CSS3** — aparência, layout e adaptação a diferentes tamanhos de tela.
- **JavaScript** — validação dos formulários, cálculos e interação.
- **localStorage (planejado)** — persistência dos dados no próprio navegador, sem conta ou backend.
- **Git e GitHub** — versionamento e publicação do código.

A primeira versão não exige React, servidor, autenticação nem banco de dados remoto. Essas tecnologias poderão ser estudadas em projetos posteriores, quando houver uma necessidade concreta.

## 📁 Estrutura inicial dos arquivos

```text
electriswift/
├── index.html   # Estrutura da aplicação
├── style.css    # Estilos e layout responsivo
├── script.js    # Interações e cálculos
└── README.md    # Documentação do projeto
```

Os arquivos poderão ser separados em pastas à medida que o projeto crescer. No início, manter a estrutura simples facilitará o aprendizado.

## ▶️ Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o `index.html` no navegador. Durante o desenvolvimento, também será possível usar uma extensão como Live Server.

## ♿ Responsividade e acessibilidade

- Usar HTML semântico e rótulos associados aos campos dos formulários.
- Permitir navegar e preencher campos com teclado.
- Manter contraste de texto e botões legível.
- Informar erros de preenchimento de forma clara.
- Usar unidades e textos que não dependam apenas de cores para comunicar informação.
- Testar o layout em telas largas e estreitas.

## 🗺️ Plano de desenvolvimento

1. Definir o HTML semântico das telas e seus campos.
2. Criar o CSS base e os layouts para desktop e mobile.
3. Implementar cadastro, listagem e remoção de aparelhos.
4. Adicionar validação e cálculos de consumo e custo.
5. Implementar comparação de cenários e resumo.
6. Salvar e recuperar dados no `localStorage`.
7. Testar situações normais e entradas inválidas, revisar acessibilidade e documentar o uso.

## 📌 Estado do projeto

**Planejamento e design inicial.** As funcionalidades acima são objetivos de desenvolvimento; não devem ser consideradas implementadas até serem codificadas e testadas.

## 📄 Licença

A licença deste projeto ainda não foi escolhida. Mesmo que o repositório no GitHub seja público, isso não significa automaticamente que outras pessoas têm permissão para reutilizar, modificar ou redistribuir o código.

Antes de publicar o projeto como software de código aberto, vamos escolher uma licença e adicionar um arquivo chamado `LICENSE` à raiz do repositório.

Uma opção comum para projetos de portfólio é a licença MIT, que permite usar, modificar e distribuir o código, desde que os avisos de direitos autorais e da licença sejam mantidos. Só vamos adotá-la se essa for a permissão que você deseja conceder.

Para conhecer os termos, consulte a [explicação sobre a licença MIT](https://choosealicense.com/licenses/mit/).