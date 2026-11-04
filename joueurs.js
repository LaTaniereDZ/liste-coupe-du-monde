const gardiens = [
    { nom: "LUCA ZIDANE", club: "Leganes", photo: "photos/zidane.png", logo: "logos/leganes.png" },
    { nom: "GAYA MERBAH", club: "JS Kabylie", photo: "photos/merbah.png", logo: "logos/jsk.png" },
    { nom: "OUSSAMA BENBOT", club: "USM Alger", photo: "photos/benbot.png", logo: "logos/usma.png" },
    { nom: "FARID CHAAL", club: "CR Belouizdad", photo: "photos/chaal.png", logo: "logos/crb.png" },
    { nom: "MELVIN MASTIL", club: "FC Lausanne-Sport", photo: "photos/mastil.png", logo: "logos/lausanne.png" },
    { nom: "RAYANE YESLI", club: "Olympique Akbou", photo: "photos/yesli.png", logo: "logos/olympique_akbou.png" },
    { nom: "KILLIAN BELAZZOUG", club: "Stade Rennais", photo: "photos/belazzoug.png", logo: "logos/stade_rennais.png" },
    { nom: "ABDELATIF RAMDANE", club: "MC Alger", photo: "photos/ramdane.png", logo: "logos/mca.png" },
{ nom: "MOHAMMED EL KOUBI", club: "Paradou AC", photo: "photos/elkoubi.png", logo: "logos/paradou.png" }
];

const defenseurs = [
    { nom: "AHMED TOUBA", club: "Le Havre AC", photo: "photos/touba.png", logo: "logos/lehavre.png" },
    { nom: "SOHAIB NAIR", club: "AS Saint-Étienne", photo: "photos/nair.png", logo: "logos/asse.png" },
    { nom: "SAMIR CHERGUI", club: "Paris FC", photo: "photos/chergui.png", logo: "logos/paris_fc.png" },
    { nom: "RAMY BENSEBAINI", club: "Borussia Dortmund", photo: "photos/bensebaini.png", logo: "logos/bvb.png" },
    { nom: "MOHAMED TOUGAI", club: "Ah Ahli SC", photo: "photos/tougai.png", logo: "logos/ahahli.png" },
    { nom: "MEHDI DORVAL", club: "US Catanzaro", photo: "photos/dorval.png", logo: "logos/catanzaro.png" },
    { nom: "SAADI RADOUANI", club: "USM Alger", photo: "photos/radouani.png", logo: "logos/usma.png" },
    { nom: "RAYAN AIT NOURI", club: "Manchester City", photo: "photos/ait_nouri.png", logo: "logos/mancity.png" },
    { nom: "KÉVIN VAN DEN KERKHOF", club: "Royal Charleroi SC", photo: "photos/guitoun.png", logo: "logos/charleroi.png" },
    { nom: "ACHREF ABADA", club: "USM Alger", photo: "photos/abada.png", logo: "logos/usma.png" },
    { nom: "RAFIK BELGHALI", club: "Torino", photo: "photos/belghali.png", logo: "logos/torino.png" },
    { nom: "NAOUFEL KHACEF", club: "CR Belouizdad", photo: "photos/khacef.png", logo: "logos/crb.png" },
    { nom: "ZINEDDINE BELAID", club: "Al-Taawoun FC", photo: "photos/belaid.png", logo: "logos/altaawoun.png" },
    { nom: "JAOUEN HADJAM", club: "Brighton", photo: "photos/hadjam.png", logo: "logos/brighton.png" },
   { nom: "KELYANN BEZAHAF", club: "Olympique de Marseille", photo: "photos/bezahaf.png", logo: "logos/om.png" }
    { nom: "MOHAMED AZZI", club: "CSKA Moscou", photo: "photos/azzi.png", logo: "CSKA.png" }
];

const milieux = [
    { nom: "ISMAEL BENNACER", club: "Dinamo Zagreb", photo: "photos/bennacer.png", logo: "logos/dinamo.png" },
    { nom: "YASSINE TITRAOUI", club: "RC Lens", photo: "photos/titraoui.png", logo: "logos/rclens.png" },
    { nom: "FARES CHAIBI", club: "Eintracht Frankfurt", photo: "photos/chaibi.png", logo: "logos/frankfurt.png" },
    { nom: "NABIL BENTALEB", club: "Lille OSC", photo: "photos/bentaleb.png", logo: "logos/losc.png" },
    { nom: "HIMAD ABDELLI", club: "Olympique de Marseille", photo: "photos/abdelli.png", logo: "logos/om.png" },
    { nom: "ADIL AOUCHICHE", club: "FC Schalke 04", photo: "photos/aouchiche.png", logo: "logos/schalke.png" },
    { nom: "ADEM ZORGANE", club: "Union Saint Gilloise", photo: "photos/zorgane.png", logo: "logos/usg.png" },
    { nom: "IBRAHIM MAZA", club: "Bayer Leverkusen", photo: "photos/maza.png", logo: "logos/leverkusen.png" },
    { nom: "HICHAM BOUDAOUI", club: "OGC Nice", photo: "photos/boudaoui.png", logo: "logos/nice.png" },
    { nom: "HOUSSEM AOUAR", club: "Al-Ittihad Club", photo: "photos/aouar.png", logo: "logos/al_ittihad.png" },
    { nom: "RAMIZ ZERROUKI", club: "FC Twente", photo: "photos/zerrouki.png", logo: "logos/fctwente.png" },
    { nom: "ILAN KEBBAL", club: "Paris FC", photo: "photos/kebbal.png", logo: "logos/paris_fc.png" }
];

const attaquants = [
    { nom: "BAGHDAD BOUNEDJAH", club: "Al-Shamal SC", photo: "photos/bounedjah.png", logo: "logos/al_shamal.png" },
    { nom: "REDOUANE BERKANE", club: "Al-Wakrah SC", photo: "photos/berkane.png", logo: "logos/al_wakrah.png" },
    { nom: "ANIS HADJ MOUSSA", club: "Feyenoord", photo: "photos/hadj_moussa.png", logo: "logos/feyenoord.png" },
    { nom: "ADIL BOULBINA", club: "Diriyah Club", photo: "photos/boulbina.png", logo: "logos/diriyah.png" },
    { nom: "BACHIR BELLOUMI", club: "Hull City", photo: "photos/belloumi.png", logo: "logos/hullcity.png" },
    { nom: "MOHAMMED AMOURA", club: "OGC Nice", photo: "photos/amoura.png", logo: "logos/nice.png" },
    { nom: "SAID BENRAHMA", club: "Neom SC", photo: "photos/benrahma.png", logo: "logos/neom.png" },
    { nom: "BADREDINE BOUANANI", club: "Glasgow Rangers", photo: "photos/bouanani.png", logo: "logos/rangers.png" },
    { nom: "FARES GHEDJEMIS", club: "Frosinone", photo: "photos/ghedjemis.png", logo: "logos/frosinone.png" },
    { nom: "AMINE CHIAKHA", club: "Rosenborg", photo: "photos/chiakha.png", logo: "logos/rosenborg.png" },
    { nom: "AMINE GOUIRI", club: "Olympique de Marseille", photo: "photos/gouiri.png", logo: "logos/om.png" },
    { nom: "MONSEF BAKRAR", club: "Al Ahly", photo: "photos/bakrar.png", logo: "logos/alahly.png" },
    { nom: "ABDE REBBACH", club: "Alavés", photo: "photos/rebbach.png", logo: "logos/alaves.png" },
    { nom: "CAMIEL NEGHLI", club: "Millwall FC", photo: "photos/neghli.png", logo: "logos/millwall.png" },
    { nom: "RAYAN KOLLI", club: "Queens Park Rangers", photo: "photos/kolli.png", logo: "logos/qpr.png" },
    { nom: "KAÏL BOUDACHE", club: "Olympique Lyonnais", photo: "photos/boudache.png", logo: "logos/ol.png" }
];
