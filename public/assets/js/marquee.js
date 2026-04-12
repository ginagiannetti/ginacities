const marqBanners = [
  { href: "https://lemontchi.neocities.org/home",         img: "/assets/banners/lemontchibutton.gif",        alt: "lemontchi",            event: "Clicked Lemontchi" },
  { href: "https://breadavota.cafe/bakery/#fidough",       img: "/assets/banners/breadavotabutton.gif",       alt: "breadavota",           event: "Clicked breadavota" },
  { href: "https://samsolarsystem.neocities.org/Virtualpets", img: "/assets/banners/samsolarsystem.gif",     alt: "sams solar system",    event: "Clicked samsolarsystem" },
  { href: "https://aerith.me/",                           img: "/assets/banners/aerith.png",                 alt: "aerith",               event: "Clicked aerith" },
  { href: "https://betapopsicle.neocities.org/blog",      img: "/assets/banners/betapopsiclebutton_1.gif",   alt: "beta popsicle",        event: "Clicked betapopsicle" },
  { href: "https://dannydebito.nekoweb.org/",             img: "/assets/banners/dannydebito.jpg",            alt: "danny debito",         event: "Clicked dannydebito" },
  { href: "https://starbug.neocities.org/shinies",        img: "/assets/banners/starbug.png",                alt: "starbug",              event: "Clicked spacecadet" },
  { href: "https://burningfrogpantz.neocities.org/",      img: "/assets/banners/burningfrogpantz.gif",       alt: "burningfrogpantz",     event: "Clicked burningfrogpantz" },
  { href: "https://2000sdreamvault.neocities.org/Home",   img: "/assets/banners/2000sDreamVaultButton1.png", alt: "2000sdreamvault",      event: "Clicked 2000sdreamvault" },
  { href: "https://mchamomilla.nekoweb.org/",             img: "/assets/banners/mcbutton.gif",               alt: "mchamomilla",          event: "Clicked mchamomilla" },
  { href: "https://dakotamarshall.net/",                  img: "/assets/banners/bonealisa.apng",             alt: "dakotamarshall",       event: "Clicked dakotamarshall" },
  { href: "https://moodybynature.stupid.pizza/site_data/other/pets.html", img: "/assets/banners/stupidpizza.gif", alt: "stupid pizza",  event: "Clicked stupidpizza" },
  { href: "https://peachyvoid.com/",                      img: "/assets/banners/peachyvoid.gif",             alt: "peachyvoid",           event: "Clicked peachyvoid" },
  { href: "https://apollo-the-chaotic-gremlin.neocities.org/", img: "/assets/banners/apollo.png",           alt: "apollo-the-chaotic-gremlin", event: "Clicked apollothechaoticgremlin" },
];

const marqTextOnly = [
  { href: "https://dirtstarr.neocities.org/",               label: "dirtstarr",          event: "Clicked dirtstarr" },
  { href: "https://eberlins.neocities.org/",                label: "eberlinks",          event: "Clicked eberlins" },
  { href: "https://eggtuna.neocities.org/",                 label: "eggtuna",            event: "Clicked eggtuna" },
  { href: "https://ravenway.neocities.org/",                label: "ravenway",           event: "Clicked ravenway" },
  { href: "https://whooami.neocities.org/",                 label: "whooami",            event: "Clicked whooami" },
  { href: "https://passiveregulator.neocities.org/",        label: "passiveregulator",   event: "Clicked passiveregulator" },
  { href: "https://onlyvamps.blogspot.com/",                label: "only vamps",         event: "Clicked onlyvamps" },
  { href: "https://puppywitchwurld333.neocities.org/about", label: "puppywitchwurld333", event: "Clicked puppywitchwurld333" },
  { href: "https://loquetuttynodijo.blogspot.com/",         label: "loquetuttynodijo",   event: "Clicked loquetuttynodijo" },
  { href: "https://biancawins.neocities.org/cats/",         label: "bianca wins",        event: "Clicked biancawins" },
  { href: "https://nxtorious-hxly-mall.tumblr.com/dog/",   label: "Nxtorious",          event: "Clicked nxtorious" },
  { href: "https://kassina.neocities.org/",                 label: "Kassina",            event: "Clicked kassina" },
];

function buildMarquee() {
  const track = document.getElementById('marq-track');

  function makeItems() {
    return [
      ...marqBanners.map(b => {
        const a = document.createElement('a');
        a.href = b.href;
        a.target = '_blank';
        a.dataset.umamiEvent = b.event;
        a.dataset.umamiEventLocation = 'GinaCities Dog Section';
        const img = document.createElement('img');
        img.src = b.img;
        img.alt = b.alt;
        img.loading = 'lazy';
        img.height = 31;
        a.appendChild(img);
        return a;
      }),
      ...marqTextOnly.map(b => {
        const a = document.createElement('a');
        a.href = b.href;
        a.target = '_blank';
        a.className = 'pill';
        a.style.fontSize = '16px';
        a.style.marginBottom = '5px';
        a.textContent = b.label;
        a.dataset.umamiEvent = b.event;
        a.dataset.umamiEventLocation = 'GinaCities Dog Section';
        return a;
      }),
    ];
  }

  [...makeItems(), ...makeItems()].forEach(el => track.appendChild(el));
}

buildMarquee();