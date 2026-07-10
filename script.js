/* ==================== LOGO ====================
   Cole a URL da sua logo aqui dentro das aspas. Se deixar vazio,
   o site mostra o texto "SAROE" no lugar. */
const LOGO_URL = "";

/* ==================== NUMERO_WHATSAPP ====================
   Formato internacional, só dígitos (Brasil = 55 + DDD + número). */
const NUMERO_WHATSAPP = "5537988033471";

/* ==================== IMAGENS DE DESTAQUE ====================
   As 3 fotos pequenas ao lado de "Destaques da temporada", e as
   2 fotos de "Mulher" / "Homem". Cole os links das fotos aqui. */
const IMAGENS_SITE = {
  destaque1: "",
  destaque2: "",
  destaque3: "",
  forwhoMulher: "",
  forwhoHomem: "",
};

/* ==================== PRODUTOS ====================
   Gerado a partir das suas fotos. Cada produto tem uma lista de
   "cores" (cada uma com nome + imagem) e uma lista de
   "categorias" (pode estar em mais de uma, ex: unissex aparece
   em feminino, masculino e unissex ao mesmo tempo).
   O "preco" está vazio de propósito — edite aqui quando definir. */
const PRODUTOS = [{"nome": "Adizero Adios Pro 4", "marca": "Adidas", "categorias": ["esportivo"], "preco": "", "cores": [{"nome": "Off White E Pérola", "imagem": "imagens/adidas-adizero-adios-pro-4/off-white-e-perola.jpg"}, {"nome": "Off White E Marrom", "imagem": "imagens/adidas-adizero-adios-pro-4/off-white-e-marrom.jpg"}, {"nome": "Branco, Preto E Laranja", "imagem": "imagens/adidas-adizero-adios-pro-4/branco-preto-e-laranja.jpg"}, {"nome": "Branco E Prata", "imagem": "imagens/adidas-adizero-adios-pro-4/branco-e-prata.jpg"}, {"nome": "Off White E Bronze", "imagem": "imagens/adidas-adizero-adios-pro-4/off-white-e-bronze.jpg"}]}, {"nome": "Adizero Evo SL", "marca": "Adidas", "categorias": ["esportivo"], "preco": "", "cores": [{"nome": "Off E Bronze", "imagem": "imagens/adidas-adizero-evo-sl/off-e-bronze.jpg"}, {"nome": "Preto E Branco", "imagem": "imagens/adidas-adizero-evo-sl/preto-e-branco.jpg"}, {"nome": "Off, Cinza E Laranja", "imagem": "imagens/adidas-adizero-evo-sl/off-cinza-e-laranja.jpg"}, {"nome": "Laranja E Pink", "imagem": "imagens/adidas-adizero-evo-sl/laranja-e-pink.jpg"}, {"nome": "Off E Bordô", "imagem": "imagens/adidas-adizero-evo-sl/off-e-bordo.jpg"}]}, {"nome": "Gazelle", "marca": "Adidas", "categorias": ["unissex", "feminino", "masculino"], "preco": "", "cores": [{"nome": "Branco", "imagem": "imagens/adidas-gazelle/branco.jpg"}, {"nome": "Café E Goiaba", "imagem": "imagens/adidas-gazelle/cafe-e-goiaba.jpg"}, {"nome": "Branco E Preto", "imagem": "imagens/adidas-gazelle/branco-e-preto.jpg"}, {"nome": "Bege E Azul", "imagem": "imagens/adidas-gazelle/bege-e-azul.jpg"}, {"nome": "Off E Azul Bebê", "imagem": "imagens/adidas-gazelle/off-e-azul-bebe.jpg"}, {"nome": "Preto E Branco", "imagem": "imagens/adidas-gazelle/preto-e-branco.jpg"}, {"nome": "Bordô", "imagem": "imagens/adidas-gazelle/bordo.jpg"}, {"nome": "Bege E Caramelo", "imagem": "imagens/adidas-gazelle/bege-e-caramelo.jpg"}]}, {"nome": "Samba", "marca": "Adidas", "categorias": ["unissex", "feminino", "masculino"], "preco": "", "cores": [{"nome": "Tradicional", "imagem": "imagens/adidas-samba/tradicional.jpg"}, {"nome": "Verde", "imagem": "imagens/adidas-samba/verde.jpg"}]}, {"nome": "Samba XLG", "marca": "Adidas", "categorias": ["feminino"], "preco": "", "cores": [{"nome": "Pérola", "imagem": "imagens/adidas-samba-xlg/perola.jpg"}]}, {"nome": "SL 72", "marca": "Adidas", "categorias": ["unissex", "feminino", "masculino"], "preco": "", "cores": [{"nome": "Marrom", "imagem": "imagens/adidas-sl-72/marrom.jpg"}]}, {"nome": "Tokyo", "marca": "Adidas", "categorias": ["feminino"], "preco": "", "cores": [{"nome": "Branco E Ouro", "imagem": "imagens/adidas-tokyo/branco-e-ouro.jpg"}, {"nome": "Branco E Bordô", "imagem": "imagens/adidas-tokyo/branco-e-bordo.jpg"}, {"nome": "Animal Print", "imagem": "imagens/adidas-tokyo/animal-print.jpg"}, {"nome": "Off E Caramelo", "imagem": "imagens/adidas-tokyo/off-e-caramelo.jpg"}, {"nome": "Preto E Branco", "imagem": "imagens/adidas-tokyo/preto-e-branco.jpg"}, {"nome": "Branco E Azul Bebê", "imagem": "imagens/adidas-tokyo/branco-e-azul-bebe.jpg"}, {"nome": "Branco E Rosê", "imagem": "imagens/adidas-tokyo/branco-e-rose.jpg"}]}, {"nome": "Clogs", "marca": "MiuMiu", "categorias": ["feminino"], "preco": "", "cores": [{"nome": "Preto", "imagem": "imagens/miumiu-clogs/preto.jpg"}, {"nome": "Caramelo", "imagem": "imagens/miumiu-clogs/caramelo.jpg"}, {"nome": "Off White", "imagem": "imagens/miumiu-clogs/off-white.jpg"}]}, {"nome": "Screener Plataforma", "marca": "MiuMiu", "categorias": ["feminino"], "preco": "", "cores": [{"nome": "Preto", "imagem": "imagens/miumiu-screener-plataforma/preto.jpg"}, {"nome": "Cinza E Grafite", "imagem": "imagens/miumiu-screener-plataforma/cinza-e-grafite.jpg"}, {"nome": "Marrom", "imagem": "imagens/miumiu-screener-plataforma/marrom.jpg"}]}, {"nome": "9060", "marca": "New Balance", "categorias": ["unissex", "feminino", "masculino"], "preco": "", "cores": [{"nome": "Cinza E Flamingo", "imagem": "imagens/new-balance-9060/cinza-e-flamingo.jpg"}, {"nome": "Cinza E Off", "imagem": "imagens/new-balance-9060/cinza-e-off.jpg"}, {"nome": "Branco E Preto", "imagem": "imagens/new-balance-9060/branco-e-preto.jpg"}, {"nome": "Marsala", "imagem": "imagens/new-balance-9060/marsala.jpg"}, {"nome": "Nude Marrom", "imagem": "imagens/new-balance-9060/nude-marrom.jpg"}, {"nome": "Cinza E Rosa", "imagem": "imagens/new-balance-9060/cinza-e-rosa.jpg"}, {"nome": "Off E Bordô", "imagem": "imagens/new-balance-9060/off-e-bordo.jpg"}, {"nome": "Rosê Felpudo", "imagem": "imagens/new-balance-9060/rose-felpudo.jpg"}, {"nome": "Off E Grafite", "imagem": "imagens/new-balance-9060/off-e-grafite.jpg"}, {"nome": "Azul Bebê E Rosê", "imagem": "imagens/new-balance-9060/azul-bebe-e-rose.jpg"}, {"nome": "Chocolate", "imagem": "imagens/new-balance-9060/chocolate.jpg"}, {"nome": "Taupe", "imagem": "imagens/new-balance-9060/taupe.jpg"}, {"nome": "Palha", "imagem": "imagens/new-balance-9060/palha.jpg"}]}, {"nome": "Retrô Abzorb 2000", "marca": "New Balance", "categorias": ["unissex", "feminino", "masculino"], "preco": "", "cores": [{"nome": "Coffee", "imagem": "imagens/new-balance-retro-abzorb-2000/coffee.jpg"}]}, {"nome": "Air Force", "marca": "Nike", "categorias": ["unissex", "feminino", "masculino"], "preco": "", "cores": [{"nome": "Branco Luxo", "imagem": "imagens/nike-air-force/branco-luxo.jpg"}, {"nome": "Tricô Off E Caramelo", "imagem": "imagens/nike-air-force/trico-off-e-caramelo.jpg"}, {"nome": "Caramelo", "imagem": "imagens/nike-air-force/caramelo.jpg"}, {"nome": "Cinza Bordado", "imagem": "imagens/nike-air-force/cinza-bordado.jpg"}, {"nome": "Branco E Marinho", "imagem": "imagens/nike-air-force/branco-e-marinho.jpg"}, {"nome": "Grafite E Preto", "imagem": "imagens/nike-air-force/grafite-e-preto.jpg"}]}, {"nome": "Dunk Low Pro", "marca": "Nike", "categorias": ["unissex", "feminino", "masculino"], "preco": "", "cores": [{"nome": "Barely Green", "imagem": "imagens/nike-dunk-low-pro/barely-green.jpg"}, {"nome": "Cinza E Branco", "imagem": "imagens/nike-dunk-low-pro/cinza-e-branco.jpg"}, {"nome": "Branco E Preto", "imagem": "imagens/nike-dunk-low-pro/branco-e-preto.jpg"}, {"nome": "Cinza Reverse", "imagem": "imagens/nike-dunk-low-pro/cinza-reverse.jpg"}, {"nome": "Cacao Wow", "imagem": "imagens/nike-dunk-low-pro/cacao-wow.jpg"}]}, {"nome": "Jordan Low", "marca": "Nike", "categorias": ["unissex", "feminino", "masculino"], "preco": "", "cores": [{"nome": "Preto, Off E Vermelho", "imagem": "imagens/nike-jordan-low/preto-off-e-vermelho.jpg"}]}, {"nome": "SB Malor", "marca": "Nike", "categorias": ["masculino"], "preco": "", "cores": [{"nome": "Marrom", "imagem": "imagens/nike-sb-malor/marrom.jpg"}]}]
;

/* ==================== MARCAS ====================
   Nome de cada marca e (opcional) o link da foto/logo dela. */
const MARCAS = [
  { nome:"Nike", imagem:"" },
  { nome:"Adidas", imagem:"" },
  { nome:"New Balance", imagem:"" },
  { nome:"MiuMiu", imagem:"" },
];

const CATEGORIAS = [
  { id:"todos", label:"Todos" },
  { id:"feminino", label:"Feminino" },
  { id:"masculino", label:"Masculino" },
  { id:"unissex", label:"Unissex" },
  { id:"esportivo", label:"Esportivos" },
];

const phIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 16l-5.5-5.5L7 19"/></svg>`;

function placeholder(texto){
  return `<div class="ph">${phIcon}<span>${texto}</span></div>`;
}

function media(url, texto){
  return url
    ? `<div class="media"><img src="${url}" alt="${texto}"></div>`
    : `<div class="media">${placeholder(texto)}</div>`;
}

function waLink(produto, cor){
  const corTxt = cor ? ` na cor ${cor}` : '';
  const msg = produto
    ? `Olá! Vi o ${produto.marca} ${produto.nome}${corTxt} no catálogo SAROE e quero saber sobre tamanhos e disponibilidade.`
    : `Olá! Vim do catálogo SAROE e queria saber mais sobre os tênis disponíveis.`;
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

document.getElementById('nav-whats').href = waLink();
document.getElementById('footer-whats').href = waLink();
document.getElementById('wa-float').href = waLink();

if(LOGO_URL){
  document.getElementById('logo-area').innerHTML = `<img src="${LOGO_URL}" alt="SAROE">`;
}

document.getElementById('hero-frame').innerHTML = media("", "Foto de destaque principal");
document.querySelector('[data-slot="destaque-1"]').innerHTML = media(IMAGENS_SITE.destaque1, "Foto destaque");
document.querySelector('[data-slot="destaque-2"]').innerHTML = media(IMAGENS_SITE.destaque2, "Foto destaque");
document.querySelector('[data-slot="destaque-3"]').innerHTML = media(IMAGENS_SITE.destaque3, "Foto destaque");
document.querySelector('[data-slot="forwho-mulher"]').insertAdjacentHTML('afterbegin', media(IMAGENS_SITE.forwhoMulher, "Foto feminino"));
document.querySelector('[data-slot="forwho-homem"]').insertAdjacentHTML('afterbegin', media(IMAGENS_SITE.forwhoHomem, "Foto masculino"));

document.getElementById('marcas-grid').innerHTML = MARCAS.map(m => `
  <div class="marca-item">
    <div class="marca-circle">${media(m.imagem, m.nome)}</div>
    <span class="nome">${m.nome}</span>
  </div>
`).join('');

const filtersEl = document.getElementById('filters');
let filtroAtual = 'todos';

function renderFiltros(){
  filtersEl.innerHTML = CATEGORIAS.map(c =>
    `<button class="filter-btn ${c.id===filtroAtual?'active':''}" data-cat="${c.id}">${c.label}</button>`
  ).join('');
  filtersEl.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filtroAtual = btn.dataset.cat;
      renderFiltros();
      renderGrid();
    });
  });
}

function precoTag(p){
  return p.preco ? `R$ ${p.preco}` : 'Consulte';
}

function renderGrid(){
  const grid = document.getElementById('grid');
  const lista = filtroAtual === 'todos'
    ? PRODUTOS
    : PRODUTOS.filter(p => p.categorias.includes(filtroAtual));

  if(lista.length === 0){
    grid.innerHTML = `<div class="empty-msg">Nenhum tênis nessa categoria ainda. Volte em breve.</div>`;
    return;
  }

  grid.innerHTML = lista.map((p, pi) => `
    <div class="card" data-pi="${pi}" data-ci="0">
      <div class="card-media">
        ${media(p.cores[0].imagem, p.nome)}
        <span class="tag">${precoTag(p)}</span>
      </div>
      <div class="card-body">
        <span class="card-brand">${p.marca}</span>
        <span class="card-name">${p.nome}</span>
        ${p.cores.length > 1 ? `
          <div class="swatches">
            ${p.cores.map((c,ci) => `
              <button class="swatch ${ci===0?'active':''}" data-ci="${ci}" title="${c.nome}">
                <img src="${c.imagem}" alt="${c.nome}">
              </button>
            `).join('')}
          </div>
          <span class="cor-nome">${p.cores[0].nome}</span>
        ` : `<span class="cor-nome">${p.cores[0].nome}</span>`}
        <a class="card-btn" href="${waLink(p, p.cores[0].nome)}" target="_blank" rel="noopener">Comprar no WhatsApp</a>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const pi = Number(card.dataset.pi);
      const ci = Number(btn.dataset.ci);
      const p = lista[pi];
      const cor = p.cores[ci];
      card.querySelector('.card-media img').src = cor.imagem;
      card.querySelector('.cor-nome').textContent = cor.nome;
      card.querySelector('.card-btn').href = waLink(p, cor.nome);
      card.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

document.querySelectorAll('[data-filtro]').forEach(el=>{
  el.addEventListener('click', ()=>{
    filtroAtual = el.dataset.filtro;
    renderFiltros();
    renderGrid();
    if(!el.closest('#catalogo')){
      setTimeout(()=>document.getElementById('catalogo').scrollIntoView({behavior:'smooth'}), 30);
    }
  });
});

renderFiltros();
renderGrid();