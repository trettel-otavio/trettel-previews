# Guia de Estilo — Site Psiquiatra

> Baseado na estética do Serenity Minds, adaptado para site institucional de psiquiatra. Agendamento via WhatsApp.

---

## Identidade

- **Nicho:** Psiquiatria — atendimento individual
- **Estética:** Orgânica e acolhedora — tons terrosos e verdes-musgo que transmitem calma, confiança e cuidado humano
- **Feeling:** Clean, com bastante respiro visual, foto real da médica, tipografia suave

---

## Paleta de Cores

### Primárias

| Nome | Hex | Uso |
|---|---|---|
| Verde Floresta | `#2D4A35` | CTA, botões primários, destaques, ícones |
| Verde Profundo | `#1C2B20` | Headlines, textos de alto peso |
| Verde Sálvia | `#6B8F71` | Elementos de suporte, ícones secundários |

### Fundos

| Nome | Hex | Uso |
|---|---|---|
| Branco Suave | `#FAFAF8` | Background geral da página |
| Off-white Creme | `#F7F5F0` | Seções alternadas, cards |
| Bege Médio | `#E0DDD5` | Bordas, divisores |

### Textos

| Nome | Hex | Uso |
|---|---|---|
| Texto Principal | `#1C2B20` | Headlines, títulos |
| Texto Médio | `#5A5A52` | Corpo de texto |
| Texto Suave | `#6B6B62` | Captions, labels, metadados |

### Acento

| Nome | Hex | Uso |
|---|---|---|
| Verde Claro | `#E8F0E9` | Background de tags e badges |
| Âmbar Dourado | `#E8B14A` | Avaliações com estrela |

---

## Tipografia

| Nível | Tamanho | Peso | Cor | Uso |
|---|---|---|---|---|
| Display / H1 | 56–72px | 600 | `#1C2B20` | Hero headline |
| H2 Seção | 36–44px | 600 | `#1C2B20` | Títulos de seção |
| H3 Card | 22–28px | 500 | `#1C2B20` | Títulos de card |
| H4 Label | 16px | 500 | `#2D4A35` | Labels, categorias |
| Body | 15–16px | 400 | `#5A5A52` | Parágrafo principal |
| Small / Meta | 12–13px | 400 | `#6B6B62` | Captions, metadados |

- **Line-height body:** 1.7
- **Line-height headlines:** 1.1–1.2
- **Família sugerida:** DM Sans, Outfit ou Plus Jakarta Sans

---

## Espaçamento

```
8px   — gaps internos de componentes
12px  — entre elementos de um card
16px  — entre grupos dentro de uma seção
24px  — entre cards
48px  — padding vertical de seções
64px  — seções com mais respiro
96px  — hero
```

---

## Border Radius

| Valor | Uso |
|---|---|
| `4px` | Badges pequenos |
| `8px` | Botões, inputs |
| `12px` | Cards |
| `999px` | Tags, chips |

---

## Componentes

### Botão Primário — WhatsApp CTA

```css
background: #2D4A35;
color: #ffffff;
padding: 10px 20px;
border-radius: 8px;
font-size: 14px;
font-weight: 500;
border: none;
/* Label sugerido: "Agendar pelo WhatsApp" */
/* Incluir ícone do WhatsApp à esquerda */
```

### Botão Secundário

```css
background: transparent;
color: #2D4A35;
padding: 10px 20px;
border-radius: 8px;
font-size: 14px;
font-weight: 500;
border: 1.5px solid #2D4A35;
```

### Tag / Chip de Especialidade

```css
background: #E8F0E9;
color: #2D4A35;
padding: 4px 12px;
border-radius: 999px;
font-size: 12px;
font-weight: 500;
```

### Card de Serviço / Especialidade

```css
background: #F7F5F0;
border-radius: 12px;
padding: 16px 20px;
/* Ícone: 36x36px, border-radius 8px, background #2D4A35, ícone branco */
/* Título: 14px, weight 500, color #1C2B20 */
/* Descrição: 12px, color #6B6B62, line-height 1.5 */
```

### Card de Depoimento

```css
background: #FAFAF8;
border: 0.5px solid #E0DDD5;
border-radius: 12px;
padding: 16px 20px;
/* Texto: 13px, font-style italic, color #3A3A32, line-height 1.6 */
/* Nome: 12px, weight 500, color #1C2B20 */
/* Avatar: 28x28px, border-radius 50%, background #6B8F71 */
```

### FAQ — Accordion

```css
/* Item */
border-bottom: 0.5px solid #E0DDD5;
padding: 16px 0;

/* Pergunta */
font-size: 15px;
font-weight: 500;
color: #1C2B20;

/* Resposta */
font-size: 14px;
color: #5A5A52;
line-height: 1.7;
margin-top: 8px;
```

### Navegação

```css
background: #FAFAF8;
padding: 14px 20px;
border-bottom: 0.5px solid #E0DDD5;

/* Logo / Nome da médica */
font-weight: 600;
font-size: 16px;
color: #2D4A35;

/* Links */
font-size: 13px;
color: #5A5A52;

/* CTA Nav */
background: #2D4A35;
color: #ffffff;
padding: 7px 16px;
border-radius: 6px;
font-size: 13px;
font-weight: 500;
/* Label: "Agendar" */
```

---

## Seções

### 1. Hero
- Background: `#FAFAF8`
- Headline grande + subtítulo com proposta de valor clara
- Botão CTA WhatsApp com ícone
- Foto real da médica (recortada ou em moldura arredondada)
- Elemento decorativo orgânico (blob/shape) em verde suave ao fundo

### 2. Sobre a Médica
- Background alternado: `#F7F5F0`
- Foto da médica + bloco de texto com formação, CRM, abordagem
- Tags de especialidades (chips verdes)
- Tom pessoal e acolhedor, não apenas currículo

### 3. Serviços / Especialidades
- Background: `#FAFAF8`
- Grid de cards (2 colunas no desktop, 1 no mobile)
- Exemplos: Transtornos de ansiedade, Depressão, TDAH, Transtorno bipolar, etc.
- Cada card: ícone + título + descrição curta

### 4. Como Funciona o Atendimento
- Background: `#F7F5F0`
- 3 a 4 steps simples com ícone + título + descrição curta
- Exemplos de steps:
  1. Entre em contato pelo WhatsApp
  2. Agendamos sua consulta
  3. Consulta presencial ou online
  4. Acompanhamento contínuo
- Botão CTA ao final da seção

### 5. Depoimentos
- Background: `#FAFAF8`
- Grid de 2–3 cards de depoimento
- Nomes fictícios ou com iniciais por privacidade (ex: "M. S., 34 anos")
- Sem fotos reais de pacientes — usar avatar com iniciais

### 6. FAQ
- Background: `#F7F5F0`
- Accordion com 4–6 perguntas frequentes
- Exemplos:
  - Qual a diferença entre psiquiatra e psicólogo?
  - A consulta é presencial ou online?
  - Aceita plano de saúde?
  - Como funciona o sigilo médico?
  - Preciso de encaminhamento?

### 7. Contato / Agendamento
- Background: `#2D4A35` (seção escura de fechamento)
- Headline centralizada + frase de encorajamento
- Botão grande de WhatsApp (branco ou creme)
- Informações de contato: cidade, telefone, e-mail (se aplicável)
- Horários de atendimento

### Footer
- Background: `#F7F5F0`
- Nome/logo + CRM + links de navegação rápida
- Ícones sociais (Instagram, se aplicável)
- Aviso legal: *"Este site tem caráter informativo e não substitui consulta médica."*

---

## Tom de Voz

### Usa
- Linguagem acolhedora, humana e empática
- 2ª pessoa direta ("Você merece…", "Sua saúde mental importa")
- Frases curtas e sem jargão clínico excessivo
- Verbos de cuidado e transformação: *cuidar, acolher, tratar, evoluir*
- Validação emocional antes da informação técnica

### Evita
- Linguagem fria ou excessivamente clínica
- Diagnósticos ou promessas de cura
- Longos blocos de texto sem respiro
- Tom impessoal ou burocrático

---

## Ícones e Imagens

- **Ícones:** Outline, orgânicos, 24–36px (Phosphor Icons ou Lucide)
- **Foto da médica:** Ambiente claro, sorriso acessível, fundo neutro ou consultório
- **Formas decorativas:** Blobs orgânicos em verde claro como elementos de fundo
- **Avatares de depoimento:** Círculo com iniciais — nunca fotos reais de pacientes

---

## Observações Legais

- Incluir número do CRM visível no footer
- Aviso de que o site não substitui consulta médica
- Não usar termos como "cura garantida" ou afirmações terapêuticas absolutas
- Depoimentos devem preservar o anonimato dos pacientes (CFM)

---

*Guia adaptado para site de psiquiatra · Maio 2026*
