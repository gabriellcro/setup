const ul = document.querySelector("#ul");

const listItems = [
  {
    link: "https://www.amazon.com.br/https://www.kabum.com.br/produto/472908/monitor-gamer-lg-ultragear-lg-34-curvo-led-wqhd-ultrawide-160hz-1ms-displayport-e-hdmi-amd-freesync-premium-hdr10-99-srgb-34gp63a-b?gad_source=1&gclid=Cj0KCQjwlN6wBhCcARIsAKZvD5jvNwO0E5oMZ3VNqqLM_n8TouzQ36R2chWy33K1itcOzqBNI1pW6L8aAn3eEALw_wcBgp/product/B07PDHSJ1H/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "monitor_ultragear",
    title: "UltraGear LG 34 Curvo",
    tag: "monitor",
  },
  {
    link: "https://www.amazon.com.br/gp/https://pt.aliexpress.com/item/1005005665762317.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.1.5cb1JwduJwduC6&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40000.327270.0&scm_id=1007.40000.327270.0&scm-url=1007.40000.327270.0&pvid=5985a856-8f2e-4495-a540-910002a4c6fc&_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40000.327270.0,pvid:5985a856-8f2e-4495-a540-910002a4c6fc,tpp_buckets:668%232846%238110%231995&pdp_npi=4%40dis%21BRL%21483.99%21183.27%21%21%2191.00%2134.46%21%402101e80317128937696871461ee4e8%2112000036873323628%21rec%21BR%21%21AB&utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A&search_p4p_id=202404112049297251246927781165007005_0/B07PDHSJ1H/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "mouse_rapoomt760",
    title: "Mouse Rapoo MT760",
    tag: "mouse",
  },
  {
    link: "https://www.amazon.com.br/gp/product/B07PDHSJ1H/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "alexa",
    title: "Echo Dot 3ª Geração",
    tag: "automação",
  },
  {
    link: "https://www.amazon.com.br/gp/product/B09J8JDZ8G/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "apoio_de_pulso",
    title: "Apoio de Pulso",
    tag: "mousepad",
  },
  {
    link: "https://www.amazon.com.br/gp/product/B08CXL3YQ8/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "barra_de_luz",
    title: "Light Bar Baseus",
    tag: "iluminação",
  },
  {
    link: "https://www.amazon.com.br/gp/product/B0765KZ264/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1",
    img: "braço_articulado",
    title: "ELG F80N",
    tag: "suporte",
  },
  {
    link: "https://www.amazon.com.br/gp/product/B09N9Y7CGN/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&th=1",
    img: "deskpad",
    title: "KingPad Couro",
    tag: "deskpad",
  },
  {
    link: "https://www.amazon.com.br/gp/product/B08C1K6LB2/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    img: "fire_tv",
    title: "Fire TV Stick",
    tag: "streaming",
  },
  {
    link: "https://pt.aliexpress.com/item/1005004786288333.html?spm=a2g0o.order_list.order_list_main.50.4124caa4ORxD3s&gatewayAdapt=glo2bra",
    img: "fone_qcy",
    title: "QCY HT05 ANC",
    tag: "fone",
  },
  {
    link: "https://pt.aliexpress.com/item/1005006037814706.html?spm=a2g0o.order_list.order_list_main.34.4124caa4ORxD3s&gatewayAdapt=glo2bra",
    img: "led_rgb",
    title: "Fita Led RGB",
    tag: "iluminação",
  },
  {
    link: "https://www.madeiramadeira.com.br/escrivaninha-industrial-120cm-active-yescasa-664563.html",
    img: "mesa",
    title: "120cm Nogal",
    tag: "mesa",
  },
  {
    link: "https://www.amazon.com.br/gp/product/B07NYB3HMC/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1",
    img: "mouse_satechi_m1",
    title: "Satechi Mouse M1",
    tag: "mouse",
  },
  {
    link: "https://www.dell.com/pt-br/shop/notebooks/novo-notebook-inspiron-15/spd/inspiron-15-3530-laptop/i3530u1009w",
    img: "notebook_inspiron_15",
    title: "Dell Inspiron 15",
    tag: "laptop",
  },
  {
    link: "https://www.magazineluiza.com.br/ps-4-1tb-slim-gaming-console-novo-na-caixa-video-game/p/je9bh53988/ga/gps4/",
    img: "ps4",
    title: "PlayStation 4 1TB",
    tag: "console",
  },
  {
    link: "https://pt.aliexpress.com/item/1005004864476292.html?spm=a2g0o.order_list.order_list_main.55.4124caa4ORxD3s&gatewayAdapt=glo2bra",
    img: "smartwatch",
    title: "MASX Aurora one",
    tag: "smartwatch",
  },
  {
    link: "https://pt.aliexpress.com/item/1005005558731465.html?spm=a2g0o.order_list.order_list_main.39.4124caa4ORxD3s&gatewayAdapt=glo2bra",
    img: "suporte_ps4",
    title: "Suporte Vertical PS4",
    tag: "suporte",
  },
  {
    link: "https://pt.aliexpress.com/item/1005005532447665.html?spm=a2g0o.order_list.order_list_main.29.4124caa4ORxD3s&gatewayAdapt=glo2bra",
    img: "switch",
    title: "Baseus HD 4K 2x1",
    tag: "switch",
  },
  {
    link: "https://www.amazon.com.br/GALAXY-TAB-LITE-WIFI-32GB/dp/B09G897XCY/ref=asc_df_B09G897XCY/?tag=googleshopp00-20&linkCode=df0&hvadid=379817920556&hvpos=&hvnetw=g&hvrand=2237947502061000784&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001634&hvtargid=pla-1437863668737&psc=1&mcid=2f24e5422b78395eb776085db64b56ff",
    img: "tablet",
    title: "Galaxy A7 Lite",
    tag: "tablet",
  },
  {
    link: "https://www.amazon.com.br/gp/product/B075F3WMMC/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1",
    img: "teclado_logitech_k380",
    title: "Logitech K380",
    tag: "teclado",
  },
  
];

for (let item of listItems) {
  const li = document.createElement("li");
  li.innerHTML = createItem(item.link, item.img, item.title, item.tag);
  ul.appendChild(li);
}

function createItem(link, img, title, tag) {
  const item = `<a href="${link}" title="${title}" target="_blank" class="card">
      <div><img src="assets/img/${img}.png" alt="${title}"></div>
      <div><h2 class="title">${title}</h2></div>
      <div><span class="tag">${tag}</span></div>
    </a>`;

  return item;
}
