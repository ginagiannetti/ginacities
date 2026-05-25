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
  { href: "https://dakotamarshall.net/",                  img: "/assets/banners/bonealisa.png",             alt: "dakotamarshall",       event: "Clicked dakotamarshall" },
  { href: "https://moodybynature.stupid.pizza/site_data/other/pets.html", img: "/assets/banners/stupidpizza.gif", alt: "stupid pizza",  event: "Clicked stupidpizza" },
  { href: "https://peachyvoid.com/",                      img: "/assets/banners/peachyvoid.gif",             alt: "peachyvoid",           event: "Clicked peachyvoid" },
  { href: "https://apollo-the-chaotic-gremlin.neocities.org/", img: "/assets/banners/apollo.png",           alt: "apollo-the-chaotic-gremlin", event: "Clicked apollothechaoticgremlin" },
  { href: "https://clubbugg.neocities.org/page3", img: "/assets/banners/clubbugg.gif", alt: "clubbugg", event: "Clicked clubbugg" },
  { href: "https://kaizocore.neocities.org/", img: "/assets/banners/kaizocore.jpg", alt: "kaizocore", event: "Clicked kaizocore" },
  { href: "https://thebutlersdesk.neocities.org/", img: "/assets/banners/butlersdesk.gif", alt: "thebutlersdesk", event: "Clicked thebutlersdesk" },
  { href: "https://okthen.neocities.org/cool-sites", img: "/assets/banners/okthen.gif", alt: "okthen", event: "Clicked okthen" },
  { href: "https://barkingfortheocean.nekoweb.org/fun", img: "/assets/banners/barking.gif", alt: "barkingfortheocean", event: "Clicked barkingfortheocean" },
  { href: "https://razaldia.neocities.org/links", img: "/assets/banners/razaldia.gif", alt: "razaldia", event: "Clicked razaldia" },
  { href: "https://turbuggy.neocities.org/collections/adoptables", img: "/assets/banners/turbuggy.gif", alt: "turbuggy", event: "Clicked turbuggy" },
  { href: "https://ocarinaofspacetime.neocities.org/", img: "/assets/banners/ocarina.gif", alt: "ocarina of space time", event: "Clicked ocarinaofspacetime" },
  { href: "https://ravenspen.neocities.org/AboutMe", img: "/assets/banners/ravens.png", alt: "ravens pen", event: "Clicked ravenspen" },
  { href: "https://natenate.neocities.org/", img: "/assets/banners/nate.png", alt: "natenate", event: "Clicked natenate" },
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
  { href: "https://fragmentedsand.neocities.org/",          label: "fragmented sand",    event: "Clicked fragmentedsand" },
  { href: "https://notasdeunlirio.blogspot.com/",          label: "notas de un lirio",    event: "Clicked notasdeunlirio" },
  { href: "https://elporkdelascosas.blogspot.com/",          label: "el pork de las cosas",    event: "Clicked elporkdelascosas" },
  { href: "https://notes-notions.blogspot.com/",          label: "notes notions",    event: "Clicked notesnotions" },
  { href: "https://merenguemaltostado.blogspot.com/",          label: "merengue mal tostado",    event: "Clicked merenguemaltostado" },
  { href: "https://madebyme.neocities.org/blog",          label: "made by me",    event: "Clicked madebyme" },
  { href: "https://princesstyun.blogspot.com/",          label: "princesstyun",    event: "Clicked princesstyun" },
  { href: "https://kirazzzblog.blogspot.com/",          label: "kira's essence",    event: "Clicked kirazzzblog" },
  { href: "https://kaykaysssss.blogspot.com/",          label: "kaykaysss",    event: "Clicked kaykaysss" },
  { href: "https://funnmisa.blogspot.com/",          label: "misa",    event: "Clicked misa" },
  { href: "https://selenethefox.neocities.org/",          label: "selene the fox",    event: "Clicked selenethefox" },
  { href: "https://creamblast.neocities.org/pets",          label: "cream blast",    event: "Clicked creamblast" },
  { href: "https://nxtorious-hxly-mall.tumblr.com/dog/",          label: "Nxtorious-Hxly-Mall",    event: "Clicked nxtorious" },
  { href: "https://scaryghost.neocities.org/",          label: "scary ghost",    event: "Clicked scaryghost" },
  { href: "https://thematterdog.neocities.org/",          label: "the matter dog",    event: "Clicked thematterdog" },
  { href: "https://jerseydevil.neocities.org/",          label: "the jersey devil",    event: "Clicked jerseydevil" },
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
  