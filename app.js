// --- Data Structures ---
const POIs = [
    {
        "id": 0,
        "name": "The Parthenon",
        "lat": 37.9715,
        "lng": 23.7269,
        "image": "images/parthenon.png",
        "description": "Built in the 5th century BC, the Parthenon is the ultimate symbol of Classical Greece. Dedicated to Athena Parthenos, the patron goddess of Athens, it showcases architectural perfection with optical illusions that make its columns look perfectly straight.",
        "audioText": "Welcome to the Parthenon, the ultimate symbol of classical architectural achievement. Standing atop the rocky citadel of the Acropolis, this temple was constructed between 447 and 432 BC at the height of the Athenian Empire under the leadership of the statesman Pericles. Dedicated to Athena Parthenos, the patron goddess of the city, the Parthenon was built to house a colossal 12-meter-tall chryselephantine (gold and ivory) cult statue sculpted by Phidias, though the statue itself was lost in antiquity. Architecturally, the temple represents the peak of the Doric order. The design by Iktinos and Kallikrates incorporates sophisticated optical corrections known as entasis. To the naked eye, columns appear perfectly straight, but they actually swell slightly in the center and lean imperceptibly inward. Additionally, the horizontal steps of the temple base curve upward toward the middle. Without these curves, the columns would appear to bow outward and the base would seem to sink. Through these mathematical refinements, the Greeks achieved a visual harmony that has influenced Western design for over two millennia.",
        "quiz": {
            "question": "Which architectural trick was used in the construction of the Parthenon columns?",
            "options": [
                "Entasis (subtle swelling in the middle)",
                "Fluting with hollow cores",
                "Constructing columns from single massive blocks",
                "Perfect 90-degree straight vertical angles"
            ],
            "answer": 0,
            "feedback": "Correct! 'Entasis' describes the optical correction where columns swell slightly to look straight to the human eye."
        },
        "reward": {
            "title": "20% off Traditional Greek Frappe",
            "provider": "Dioskouroi Cafe, Plaka",
            "code": "PARTHENON20"
        }
    },
    {
        "id": 1,
        "name": "Erechtheion & Caryatids",
        "lat": 37.9722,
        "lng": 23.7264,
        "image": "images/erechtheion.png",
        "description": "An ancient temple dedicated to both Athena and Poseidon. The southern porch features the Caryatids - six beautiful marble maidens acting as columns holding up the roof.",
        "audioText": "Observe the Erechtheion, a highly complex temple completed in 406 BC. Unlike the symmetrical Parthenon, the Erechtheion features an irregular plan, built on a slope to accommodate several sacred spots. It was dedicated to both Athena Polias and Poseidon-Erechtheus. According to myth, this is the very site of the contest between the two gods to become the patron of Athens. Poseidon struck the rock with his trident, bringing forth a salt spring, while Athena planted an olive tree, offering peace and trade. The citizens chose Athena, but built this double temple to honor both. On the south porch, stand the six Caryatids. These sculpted marble maidens serve as columns supporting the heavy roof, gracefully distributing the weight through their folded garments. The sculptors designed their hair in thick, braided tresses to strengthen the thinnest structural point—the neck. The figures standing today are high-quality replicas; five of the original maidens reside in the nearby Acropolis Museum, while the sixth remains in the British Museum in London.",
        "quiz": {
            "question": "What are the Caryatids?",
            "options": [
                "Priests of Poseidon",
                "Sculptured female figures serving as architectural supports",
                "Secret hidden tunnels beneath the temple",
                "The sacred olive trees planted by Athena"
            ],
            "answer": 1,
            "feedback": "Correct! The Caryatids are female figures that support the entablature instead of columns."
        },
        "reward": {
            "title": "Free Loukoumades with any drink",
            "provider": "LUKUMADES, Monastiraki",
            "code": "SWEETCARYATID"
        }
    },
    {
        "id": 2,
        "name": "Temple of Olympian Zeus",
        "lat": 37.9693,
        "lng": 23.7331,
        "image": "images/olympian_zeus.png",
        "description": "Also known as the Olympeion, this colossal ruined temple in the center of Athens was dedicated to Zeus, king of the Olympian gods. Its construction began in the 6th century BC but was not completed until the reign of Emperor Hadrian in the 2nd century AD.",
        "audioText": "You are looking at the Temple of Olympian Zeus, or the Olympeion. This colossal temple was once the largest in Greece, built to honor the king of the gods. Its construction began in 515 BC under the Peisistratid tyrants, who wanted to demonstrate their power. However, construction was abandoned when democracy was established. For centuries, it stood incomplete, a monumental shell that became a symbol of overambition. It was not finished until the Roman Emperor Hadrian, a dedicated admirer of Greek culture, completed the structure in 131 AD, over 600 years after work first began. Originally, the temple featured 104 monumental Corinthian columns arranged in double rows, each column standing 17 meters tall. Today, only 15 columns remain standing. A 16th column was blown down by a violent storm in 1852 and still lies in segments on the grass, showing the massive drum structure of these ancient marble giants.",
        "quiz": {
            "question": "Which Roman Emperor finally completed the Temple of Olympian Zeus?",
            "options": [
                "Julius Caesar",
                "Emperor Augustus",
                "Emperor Hadrian",
                "Emperor Nero"
            ],
            "answer": 2,
            "feedback": "Correct! Emperor Hadrian completed the construction in 131 AD, dedicating it to Zeus and himself."
        },
        "reward": {
            "title": "15% off traditional Souvlaki meal",
            "provider": "O Thanasis, Monastiraki",
            "code": "OLYMPIANZEUS15"
        }
    },
    {
        "id": 3,
        "name": "Temple of Hephaestus",
        "lat": 37.9756,
        "lng": 23.7215,
        "image": "images/hephaestus.png",
        "description": "The most well-preserved ancient Greek temple in the world. Dedicated to Hephaestus, the god of metalworking, and Athena Ergane, the goddess of pottery and crafts, it overlooks the Ancient Agora.",
        "audioText": "Welcome to the Temple of Hephaestus, situated on the hill of Agoraios Kolonos. Built around 449 BC, this temple remains the most complete classical Greek temple standing today. It was dedicated to Hephaestus, the god of fire, metalworking, and craftsmanship, and Athena Ergane, the goddess of pottery and trade. The location was highly practical, as this district of Athens was the industrial heart of the city, populated by blacksmiths, potters, and metal foundry workers who prayed to these deities. The temple is built of Pentelic marble in the Doric style. It owes its remarkable state of preservation to its conversion into a Christian church, the Church of Saint George, in the 7th century AD. This protected it from being dismantled for building materials or marble-burning during the Middle Ages and the Ottoman period. Walking around the temple, you can see beautifully carved friezes showing the labors of Hercules and Theseus.",
        "quiz": {
            "question": "Why is the Temple of Hephaestus so exceptionally well-preserved?",
            "options": [
                "It was buried underground for centuries",
                "It was built using special iron-plated marble",
                "It was converted into a Christian church in the 7th century",
                "It was built much later during the Renaissance"
            ],
            "answer": 2,
            "feedback": "Correct! Converting the temple into the Church of Saint George protected it from destruction and looting over the centuries."
        },
        "reward": {
            "title": "Free Glass of Greek Wine with dinner",
            "provider": "Strofi Tavern, Acropolis area",
            "code": "HEPHAESTUSWINE"
        }
    },
    {
        "id": 4,
        "name": "Panathenaic Stadium",
        "lat": 37.9683,
        "lng": 23.7411,
        "image": "images/panathenaic_stadium.png",
        "description": "Known as Kallimarmaro (meaning 'beautiful marble'), it is the only stadium in the world built entirely of marble. It hosted the first modern Olympic Games in 1896.",
        "audioText": "Stand before the Panathenaic Stadium, known to Greeks as Kallimarmaro, which means 'beautiful marble.' This is the only stadium in the world constructed entirely of white Pentelic marble. In the 4th century BC, a simple wooden stadium stood here in a natural ravine to host the athletic contests of the Panathenaic Games, which celebrated Athens' patron goddess. In 144 AD, the wealthy senator and benefactor Herodes Atticus rebuilt the entire structure in solid marble, creating a seating capacity of 50,000. Following the rise of Christianity, the stadium fell into ruin, and much of its marble was reused in city walls. It was fully reconstructed in the late 19th century, funded by George Averoff, to host the first modern Olympic Games in 1896. Today, it remains a monument of international sports history and is the location where the Olympic flame is handed over to host cities.",
        "quiz": {
            "question": "What makes the Panathenaic Stadium globally unique?",
            "options": [
                "It is the oldest circular theater",
                "It is the only stadium built entirely of marble",
                "It contains the ruins of the Olympic flame temple",
                "It has an underground training arena for gladiators"
            ],
            "answer": 1,
            "feedback": "Correct! The Panathenaic Stadium is constructed entirely out of white Pentelic marble, earning it the nickname Kallimarmaro."
        },
        "reward": {
            "title": "15% off Greek handmade leather sandals",
            "provider": "The Poet Sandalmaker, Psirri",
            "code": "MARBLESTADIUM"
        }
    },
    {
        "id": 5,
        "name": "Tower of the Winds",
        "lat": 37.9742,
        "lng": 23.7268,
        "image": "images/tower_winds.png",
        "description": "An octagonal Pentelic marble clocktower in the Roman Agora in Athens, considered the world's first meteorological station. Built by astronomer Andronicus of Cyrrhus around 50 BC.",
        "audioText": "Look at the octagonal Tower of the Winds, or Horologion of Andronikos Kyrrhestes, built around 50 BC in the Roman Agora. This marble tower is considered the world's first meteorological station and weather dial. Each of the eight sides of the tower points toward a wind direction, featuring a carved relief of a wind god, such as Boreas for the cold north wind and Zephyrus for the warm west wind. Originally, a bronze Triton weather vane on the roof turned to point to the prevailing wind. Inside, a water clock, or clepsydra, ran on water piped down from the Acropolis spring, keeping time on cloudy days. On sunny days, merchants in the Agora could tell the time using the sundials carved onto the external marble walls below each frieze, showing the high level of scientific skill in late Hellenistic Greece.",
        "quiz": {
            "question": "What was the primary function of the Tower of the Winds?",
            "options": [
                "A temple to the wind god Aeolus",
                "The world's first meteorological station and water clock",
                "A watchtower to look out for pirates",
                "A royal tomb for Roman governors"
            ],
            "answer": 1,
            "feedback": "Correct! It functioned as a weather vane, sundial array, and a water clock for the Roman Agora."
        },
        "reward": {
            "title": "Free traditional Greek dessert with coffee",
            "provider": "Asty Cafe, Roman Agora",
            "code": "WINDTOWER50"
        }
    },
    {
        "id": 6,
        "name": "Hadrian's Library",
        "lat": 37.9756,
        "lng": 23.7261,
        "image": "images/hadrian_library.png",
        "description": "A colossal library constructed by Roman Emperor Hadrian in 132 AD. It followed the typical Roman Forum architectural style, with a single monumental entrance, reading rooms, and a peaceful inner courtyard.",
        "audioText": "Stand before the Corinthian columns of Hadrian's Library, built in 132 AD by the Roman Emperor Hadrian. Known as a philhellene for his deep love of Greek arts and letters, Hadrian designed this library to be the city's intellectual center. It was built like a Roman forum, with a single propylon entrance, high walls to keep out street noise, and an inner courtyard with a pool and gardens for quiet walks. The library stored thousands of papyrus scrolls in special wall niches. It also included reading rooms, lecture halls, and translation spaces. In the Byzantine period, three churches were built inside the courtyard, and parts of the original library walls were incorporated into their structures, helping preserve the Roman marble columns you see today.",
        "quiz": {
            "question": "Which Roman Emperor constructed this cultural library?",
            "options": [
                "Emperor Augustus",
                "Emperor Hadrian",
                "Emperor Constantine",
                "Emperor Trajan"
            ],
            "answer": 1,
            "feedback": "Correct! Emperor Hadrian built this grand library as part of his extensive urban contribution to Athens."
        },
        "reward": {
            "title": "20% discount on local philosophy guides",
            "provider": "Pnyx Bookstore, Monastiraki",
            "code": "HADRIANBOOKS"
        }
    },
    {
        "id": 7,
        "name": "Theatre of Dionysus",
        "lat": 37.9703,
        "lng": 23.7277,
        "image": "images/theatre_dionysus.png",
        "description": "Considered the world's first theatre. Dedicated to Dionysus, the god of wine and plays, it hosted the famous Dionysia festivals where masterpieces of Sophocles, Euripides, and Aristophanes debuted.",
        "audioText": "Welcome to the Theatre of Dionysus, situated on the south slope of the Acropolis. This is the birthplace of Western drama and theatrical performance. In the 5th century BC, during the Golden Age, citizens sat on simple wooden benches on the hillside to watch the plays of Aeschylus, Sophocles, Euripides, and Aristophanes during the City Dionysia festival. The theater was rebuilt in stone in the 4th century BC, with a capacity of 17,000. The marble seats in the front row, featuring detailed carvings, were reserved for priests, judges, and high-ranking officials. The circular space in the center, called the orchestra, was where the chorus performed. Here, the concepts of tragedy and comedy were first defined, shaping performing arts and storytelling for centuries to come.",
        "quiz": {
            "question": "Who was the Greek god that this ancient theatre was dedicated to?",
            "options": [
                "Apollo, god of music",
                "Zeus, king of the gods",
                "Dionysus, god of wine and theatre",
                "Hermes, the messenger god"
            ],
            "answer": 2,
            "feedback": "Correct! The theatre was dedicated to Dionysus, and hosted dramatic contests in his honor."
        },
        "reward": {
            "title": "15% off tickets to modern Greek tragedy plays",
            "provider": "Athens Open Air Stage, Plaka",
            "code": "DIONYSUSPLAY"
        }
    },
    {
        "id": 8,
        "name": "Odeon of Herodes Atticus",
        "lat": 37.9708,
        "lng": 23.7246,
        "image": "images/odeon_herodes.png",
        "description": "A stone theater completed in 161 AD by Herodes Atticus in memory of his wife. Today it still hosts world-class theatrical performances.",
        "audioText": "Stand before the Odeon of Herodes Atticus, or Herodeion, built on the southern slope of the Acropolis in 161 AD. This amphitheater was constructed by the wealthy Roman senator Herodes Atticus as a tribute to his late wife, Aspasia Annia Regilla. The theater originally featured a wooden roof made of expensive Lebanon cedar, which provided outstanding acoustics, and a three-story front facade. It was primarily used for musical concerts and could host 5,000 spectators. Severely damaged during the Herulian invasion in 267 AD, it lay in ruins until the mid-20th century. Today, fully restored, it serves as the prestigious main stage for the Athens Epidaurus Festival.",
        "quiz": {
            "question": "In whose memory did Herodes Atticus build this theater?",
            "options": [
                "His patron god Apollo",
                "His wife Aspasia Annia Regilla",
                "His daughter Athena",
                "Emperor Marcus Aurelius"
            ],
            "answer": 1,
            "feedback": "Correct! It was built in memory of his beloved wife, Regilla."
        },
        "reward": {
            "title": "10% off entry to the Athens Concert Hall",
            "provider": "Megaron Box Office",
            "code": "ODEONMUSIC"
        }
    },
    {
        "id": 9,
        "name": "Hadrian's Arch",
        "lat": 37.9702,
        "lng": 23.7322,
        "image": "images/hadrians_arch.png",
        "description": "A monumental gateway resembling a Roman triumphal arch, built to celebrate the arrival of Roman Emperor Hadrian and separate the old and new city of Athens.",
        "audioText": "Observe Hadrian's Arch, a monumental gateway constructed in 131 AD. This triumphal arch spans an ancient road that linked the historic district of Athens with the new city constructed under Emperor Hadrian's rule. Look closely at the inscriptions on the arch. On the side facing the Acropolis, it reads: 'This is Athens, the ancient city of Theseus.' Conversely, on the side facing the Temple of Zeus, the inscription says: 'This is the city of Hadrian, and not of Theseus.' It represents a literal monument to the transition between ancient Greek heritage and Roman imperial expansion.",
        "quiz": {
            "question": "What did Hadrian's Arch separate?",
            "options": [
                "The sacred temple and the marketplace",
                "The old city of Theseus and the new city of Hadrian",
                "Athens and the rival state of Sparta",
                "The residential area and the cemetery"
            ],
            "answer": 1,
            "feedback": "Correct! The arch served as a divide between the classical Greek city and Hadrian's new Roman extension."
        },
        "reward": {
            "title": "Free Greek Coffee with breakfast",
            "provider": "Acropolis View Cafe",
            "code": "HADRIANARCH"
        }
    },
    {
        "id": 10,
        "name": "Philopappos Monument",
        "lat": 37.9675,
        "lng": 23.7214,
        "image": "images/philopappos_monument.png",
        "description": "An ancient mausoleum dedicated to Marcus Julius Antiochus Philopappos, a prince of the Kingdom of Commagene. Located on the Hill of the Muses, it offers sweeping views of the Acropolis.",
        "audioText": "Stand at the summit of the Hill of the Muses before the Philopappos Monument. Erected between 114 and 116 AD, this marble tomb honors Philopappos, a beloved consul of Rome and exiled prince of Commagene who lived in Athens as a benefactor. The monument's facade features statues of Philopappos and his royal ancestors. The hill has historic military significance; from here, the Venetian general Francesco Morosini bombarded the Acropolis in 1687, causing the tragic explosion of the Parthenon. Today, it remains a serene sanctuary popular for flying kites during Clean Monday.",
        "quiz": {
            "question": "Which hill is the Philopappos Monument located on?",
            "options": [
                "Lycabettus Hill",
                "Areopagus Hill",
                "Hill of the Muses (Philopappos Hill)",
                "Pnyx Hill"
            ],
            "answer": 2,
            "feedback": "Correct! The monument sits atop the Hill of the Muses, offering spectacular panoramas of Athens."
        },
        "reward": {
            "title": "10% off local organic herb blends",
            "provider": "Plaka Spice Bazaar",
            "code": "MUSEHILL"
        }
    },
    {
        "id": 11,
        "name": "Areopagus Hill (Mars Hill)",
        "lat": 37.9725,
        "lng": 23.7237,
        "image": "images/areopagus_hill.jpg",
        "description": "A prominent rock outcrop northwest of the Acropolis. In classical times, it functioned as the high court of appeal for Athens. It is also famous as the location where Apostle Paul delivered his sermon.",
        "audioText": "Climb up the ancient marble steps of Areopagus Hill, named after Ares, the god of war. In ancient times, this rock was the seat of the Areopagus council, a judicial court that judged serious crimes and homicides. In 51 AD, the Apostle Paul stood on this very hill and delivered his famous 'Sermon on the Unknown God' to Athenian philosophers, introducing Christianity to Greece. The rock remains highly polished by millions of feet over millennia, serving as a quiet lookout to watch the sun set behind the city.",
        "quiz": {
            "question": "Who delivered a famous sermon on Areopagus Hill in 51 AD?",
            "options": [
                "Socrates",
                "Apostle Paul",
                "Pericles",
                "Alexander the Great"
            ],
            "answer": 1,
            "feedback": "Correct! Apostle Paul preached the Christian Gospel to the Athenians here."
        },
        "reward": {
            "title": "Free organic Greek herbal tea",
            "provider": "Aura Cafe, Plaka",
            "code": "MARSHILL51"
        }
    },
    {
        "id": 12,
        "name": "Pnyx Hill",
        "lat": 37.9719,
        "lng": 23.7194,
        "image": "images/pnyx_hill.jpg",
        "description": "The official meeting place of the Athenian democratic assembly (Ekklesia) starting in 507 BC. It represents the physical birthplace of democracy.",
        "audioText": "Stand on the flat stone platform of Pnyx Hill. Here, starting in the late 6th century BC, the citizens of Athens gathered to make democratic decisions. This is the birthplace of democracy. Famous speakers like Pericles, Demosthenes, and Themistocles stood on the stone orator's platform, speaking to crowds of up to 6,000 citizens. It is a symbol of free speech and equal rights, looking directly across at the Acropolis.",
        "quiz": {
            "question": "What historic group gathered on Pnyx Hill to debate and vote?",
            "options": [
                "The Spartan generals",
                "The Olympian priesthood",
                "The Athenian democratic assembly (Ekklesia)",
                "The Roman Senate"
            ],
            "answer": 2,
            "feedback": "Correct! Pnyx served as the assembly ground for the citizens of Athens."
        },
        "reward": {
            "title": "15% off historic tour guides",
            "provider": "Athens City Center Tours",
            "code": "EKKLESIA"
        }
    },
    {
        "id": 13,
        "name": "Choragic Monument of Lysicrates",
        "lat": 37.971,
        "lng": 23.7299,
        "image": "images/choragic_monument_of_lysicrates.jpg",
        "description": "A monument erected by the choregos Lysicrates in 334 BC in Plaka to commemorate the award-winning performance he sponsored at the Theatre of Dionysus.",
        "audioText": "Explore the circular Choragic Monument of Lysicrates, located in the heart of Plaka. In ancient Athens, wealthy patrons called choregoi funded theatrical performances. If their production won, they were awarded a bronze trophy. Lysicrates built this exquisite marble structure to display his prize. It is the first historic building to use the Corinthian order on its exterior walls. Lord Byron wrote poetry inside this monument when it was part of a French Capuchin monastery in the 19th century.",
        "quiz": {
            "question": "What was the purpose of a Choragic monument?",
            "options": [
                "To store grain for winter",
                "To display a theatrical sponsor's award trophy",
                "To worship the sun god Helios"
            ],
            "answer": 1,
            "feedback": "Correct! These monuments displayed the bronze tripods awarded to winning patrons of the theater."
        },
        "reward": {
            "title": "10% off a theatrical dinner experience",
            "provider": "Dionysos Zonar's",
            "code": "CHOREGOS"
        }
    },
    {
        "id": 14,
        "name": "Socrates' Prison",
        "lat": 37.9692,
        "lng": 23.7208,
        "image": "images/socrates_prison.png",
        "description": "A set of rock-cut chambers on Philopappos Hill, traditionally linked by folklore to the prison cell where Socrates was held before his execution.",
        "audioText": "Walk to the foot of Philopappos Hill and find the rock-cut cave structure known as Socrates' Prison. While historians debate if the famous philosopher was actually jailed in this precise spot, the caves date back to the 5th century BC and served as ancient dwelling rooms or tombs. Socrates was sentenced to death by drinking poison hemlock in 399 BC, choosing philosophical principles over exile. This site stands as a monument to the price of free intellectual inquiry.",
        "quiz": {
            "question": "How did the philosopher Socrates choose to die?",
            "options": [
                "By sword duel",
                "By drinking poison hemlock",
                "Exiled in a boat at sea",
                "Starvation inside the cave"
            ],
            "answer": 1,
            "feedback": "Correct! Socrates drank the hemlock as mandated by the Athenian court sentence."
        },
        "reward": {
            "title": "Free philosophy booklet with a purchase",
            "provider": "Plaka Antiquarian Book Store",
            "code": "SOCRATESCAVE"
        }
    },
    {
        "id": 15,
        "name": "Syntagma Square & Parliament",
        "lat": 37.9756,
        "lng": 23.7348,
        "image": "images/syntagma_square.png",
        "description": "The central square of Athens, dominated by the Greek Parliament building and the Tomb of the Unknown Soldier, famous for the changing of the Evzones guards.",
        "audioText": "Welcome to Syntagma Square, the heart of modern Athens. The name Syntagma means 'Constitution Square', commemorating the uprising of 1843 when citizens demanded a constitution from King Otto. The neoclassical building overlooking the square is the Hellenic Parliament. In front of it lies the Tomb of the Unknown Soldier, guarded 24/7 by the Evzones, elite members of the Presidential Guard. Watch their high-stepping, synchronized changing of the guard ceremony, performed in traditional white kilts and pom-pom shoes called tsarouhia.",
        "quiz": {
            "question": "What does the word 'Syntagma' translate to in English?",
            "options": [
                "Victory",
                "Constitution",
                "Marketplace",
                "Royal Palace"
            ],
            "answer": 1,
            "feedback": "Correct! 'Syntagma' refers to the constitution demanded by the Greek public in 1843."
        },
        "reward": {
            "title": "Free dessert with meal",
            "provider": "Avenue Bistro, Syntagma",
            "code": "SYNTAGMA1843"
        }
    },
    {
        "id": 16,
        "name": "Monastiraki Square",
        "lat": 37.9761,
        "lng": 23.7257,
        "image": "images/monastiraki_square.png",
        "description": "A bustling historic square in Athens, characterized by the Tzistarakis Mosque, the Byzantine Church of Pantanassa, and the nearby Flea Market.",
        "audioText": "Step into Monastiraki Square, a vibrant crossroads where Byzantine, Ottoman, Roman, and modern Greek history coexist. The Tzistarakis Mosque stands on one side, built in 1759, while the center features the small Church of Pantanassa, dating to the 10th century. The name Monastiraki means 'little monastery', reflecting this historic church. Today, it is famous for its lively open-air flea market and views up towards the north face of the Acropolis.",
        "quiz": {
            "question": "What does the name 'Monastiraki' mean?",
            "options": [
                "Ancient Agora",
                "Mosque square",
                "Little monastery",
                "Stony path"
            ],
            "answer": 2,
            "feedback": "Correct! Monastiraki was named after the monastery complex that originally occupied the square."
        },
        "reward": {
            "title": "10% off traditional Greek street food",
            "provider": "Bairaktaris Souvlaki, Monastiraki",
            "code": "LITTLEMONASTERY"
        }
    },
    {
        "id": 17,
        "name": "Church of Panagia Kapnikarea",
        "lat": 37.97639,
        "lng": 23.72862,
        "image": "images/church_of_panagia_kapnikarea.jpg",
        "description": "One of the oldest Greek Orthodox churches in Athens, built around 1050 AD on the busy commercial pedestrian street of Ermou.",
        "audioText": "Stand in the middle of Ermou Street, a busy modern shopping boulevard, and admire the Byzantine Church of Panagia Kapnikarea. Built around 1050 AD over an ancient pagan temple dedicated to Athena or Demeter, the church survived multiple fires and city planning proposals that wanted to demolish it in the 19th century. Its distinctive architectural style is the cross-in-square, complete with beautiful brickwork and a small side chapel added later.",
        "quiz": {
            "question": "Around which century was the Kapnikarea Church constructed?",
            "options": [
                "5th Century BC",
                "11th Century AD (around 1050)",
                "15th Century AD",
                "19th Century AD"
            ],
            "answer": 1,
            "feedback": "Correct! The church was built in the mid-11th century during the Byzantine Golden Age of Athens."
        },
        "reward": {
            "title": "10% discount on standard souvenir cards",
            "provider": "Ermou souvenir station",
            "code": "KAPNIKAREA"
        }
    },
    {
        "id": 18,
        "name": "Zappeion Hall",
        "lat": 37.9715,
        "lng": 23.7363,
        "image": "images/zappeion_hall.jpg",
        "description": "A grand neoclassical building inside the National Gardens, built by architect Theophil Hansen for the first modern Olympic Games.",
        "audioText": "Stroll through the National Gardens to the Zappeion Hall. Finished in 1888, it was funded by Evangelos Zappas to revive the Olympic legacy. During the 1896 Olympic Games, it served as the official fencing hall. It has hosted key modern political milestones, including the signing of Greece's accession to the European Community in 1979.",
        "quiz": {
            "question": "Which sport was hosted inside Zappeion Hall during the 1896 Olympics?",
            "options": [
                "Marathon running",
                "Fencing",
                "Gymnastics",
                "Wrestling"
            ],
            "answer": 1,
            "feedback": "Correct! Fencing matches were held inside the central atrium of the Zappeion."
        },
        "reward": {
            "title": "Free espresso upgrade",
            "provider": "Zappeion Garden Cafe",
            "code": "ZAPPEION1896"
        }
    },
    {
        "id": 19,
        "name": "Aristotle's Lyceum",
        "lat": 37.9733,
        "lng": 23.7436,
        "image": "images/aristotle_s_lyceum.jpg",
        "description": "The ancient school founded by philosopher Aristotle in 335 BC. Scholars here were called Peripatetics because they walked while debating philosophy.",
        "audioText": "Walk the peaceful pathways of Aristotle's Lyceum, discovered during building excavations in 1996. Here, Aristotle established his gymnasium and school, teaching sciences, rhetoric, and philosophy. The students were nicknamed the Peripatetic school because they walked along the colonnades during discussions. It represents the foundation of scientific academy formats.",
        "quiz": {
            "question": "Why were Aristotle's students called Peripatetics?",
            "options": [
                "Because they only wore white robes",
                "Because they walked around while discussing philosophy",
                "Because they studied birds",
                "Because they did not eat meat"
            ],
            "answer": 1,
            "feedback": "Correct! 'Peripatetic' is derived from the Greek verb to walk around."
        },
        "reward": {
            "title": "15% discount on philosophy books",
            "provider": "Athens Lyceum Shop",
            "code": "PERIPATETIC"
        }
    },
    {
        "id": 20,
        "name": "Kerameikos Archaeological Site",
        "lat": 37.9781,
        "lng": 23.7175,
        "image": "images/kerameikos_archaeological_site.jpg",
        "description": "The ancient potters' quarter of Athens and the city's most important historical cemetery, showing ancient tombs and city gates.",
        "audioText": "Discover Kerameikos, the ancient potter’s quarter from which the English word 'ceramics' originates. It was also the city’s primary cemetery, situated outside the old Dipylon gates. Pericles delivered his famous Funeral Oration here to honor the citizens who died during the Peloponnesian War, praising the virtues of democratic governance.",
        "quiz": {
            "question": "Which modern word is derived from the site 'Kerameikos'?",
            "options": [
                "Chrome",
                "Ceramics",
                "Caramel",
                "Chronicle"
            ],
            "answer": 1,
            "feedback": "Correct! The potters' mud clay quarter gave rise to 'ceramics'."
        },
        "reward": {
            "title": "10% discount on handmade clay pottery",
            "provider": "Kerameikos Art Workshop",
            "code": "POTTERSCLAY"
        }
    },
    {
        "id": 21,
        "name": "Academy of Athens",
        "lat": 37.9808,
        "lng": 23.7342,
        "image": "images/academy_athens.png",
        "description": "The national academy of Greece, built in the neoclassical style by Theophil Hansen. The entrance is flanked by large statues of Plato and Socrates.",
        "audioText": "Look up at the magnificent facade of the Academy of Athens, widely regarded as one of the finest neoclassical buildings in the world. Built in 1887, it features columns carrying statues of Athena and Apollo, while figures of Socrates and Plato guard the steps. The architecture mimics classical styling to celebrate the rebirth of Greek academic independence.",
        "quiz": {
            "question": "Which two philosophers are sculpted at the entrance of the Academy?",
            "options": [
                "Aristotle and Alexander",
                "Socrates and Plato",
                "Epicurus and Zeno",
                "Diogenes and Pythagoras"
            ],
            "answer": 1,
            "feedback": "Correct! Socrates and Plato sit in quiet contemplation at the entrance steps."
        },
        "reward": {
            "title": "Free bookmark with purchase",
            "provider": "Academy Bookstore",
            "code": "ACADEMY1887"
        }
    },
    {
        "id": 22,
        "name": "National Library of Greece",
        "lat": 37.9814,
        "lng": 23.7336,
        "image": "images/national_library_of_greece.jpg",
        "description": "The historic neoclassical building of the National Library, designed by Theophil Hansen as part of the neoclassical Trilogy of Athens.",
        "audioText": "Stand before the Vallianeio Hall, the historic home of the National Library. It is the third building in the Neoclassical Trilogy. Built entirely of Pentelic marble on a base of local limestone, its monumental double staircase is inspired by the temple of Hephaestus, housing the nation's early collection of historic manuscripts.",
        "quiz": {
            "question": "What building inspired the entrance design of the National Library?",
            "options": [
                "The Parthenon",
                "The Temple of Hephaestus",
                "Hadrian's Arch",
                "The Roman Colosseum"
            ],
            "answer": 1,
            "feedback": "Correct! The central temple facade is modeled directly on the Temple of Hephaestus."
        },
        "reward": {
            "title": "Free postcard pack",
            "provider": "Trilogy Gift Shop",
            "code": "NATIONALLIBRARY"
        }
    },
    {
        "id": 23,
        "name": "University of Athens (Propylaea)",
        "lat": 37.9811,
        "lng": 23.7339,
        "image": "images/university_of_athens_propylaea.jpg",
        "description": "The central building of the University of Athens, featuring a beautiful painted portico depicting the rebirth of Greek arts and sciences.",
        "audioText": "This is the central building of the historic University, the first university in the independent Eastern Mediterranean, founded in 1837. The beautiful fresco painted under the portico depicts King Otto surrounded by the muses and classical personifications of the sciences, signaling Greece's modern cultural renaissance.",
        "quiz": {
            "question": "In which year was the University of Athens founded?",
            "options": [
                "1837",
                "1912",
                "1453",
                "1950"
            ],
            "answer": 0,
            "feedback": "Correct! It was founded in 1837 under the newly formed Greek Kingdom."
        },
        "reward": {
            "title": "10% off student coffee blends",
            "provider": "Panepistimio Hub Cafe",
            "code": "UNIVERSE1837"
        }
    },
    {
        "id": 24,
        "name": "Lycabettus Hill",
        "lat": 37.9819,
        "lng": 23.7431,
        "image": "images/lycabettus_hill.png",
        "description": "The highest point in Athens, offering panoramic views of the entire Aegean basin and featuring the whitewashed Chapel of St. George at the summit.",
        "audioText": "Ascend Lycabettus Hill, rising 277 meters above Athens. According to mythology, Athena dropped this giant limestone rock when she was startled by bad news while carrying it to the Acropolis. At the top sits the 19th-century Chapel of St. George. The summit provides the ultimate view of the Acropolis lit up at night, all the way to the port of Piraeus.",
        "quiz": {
            "question": "According to myth, who dropped the rock that became Lycabettus Hill?",
            "options": [
                "Zeus",
                "Athena",
                "Hercules",
                "Poseidon"
            ],
            "answer": 1,
            "feedback": "Correct! Athena dropped the limestone mountain in surprise upon hearing news of a crow."
        },
        "reward": {
            "title": "10% off at the summit cafe",
            "provider": "Lycabettus Horizon",
            "code": "LYCABETTUS"
        }
    },
    {
        "id": 25,
        "name": "National Archaeological Museum",
        "lat": 37.9891,
        "lng": 23.7327,
        "image": "images/national_archaeological_museum.jpg",
        "description": "The largest and most important archaeological museum in Greece, housing treasures like the Mask of Agamemnon and the Antikythera Mechanism.",
        "audioText": "Welcome to the National Archaeological Museum. Founded in 1829, it houses the richest collection of Greek antiquities in the world. Its galleries contain iconic discoveries, including the gold Mask of Agamemnon from Mycenae, the bronze Poseidon of Artemision, and the mysterious Antikythera Mechanism, the world's oldest analog computer.",
        "quiz": {
            "question": "Which famous ancient mechanical computer is housed in this museum?",
            "options": [
                "The Roman Abacus",
                "The Antikythera Mechanism",
                "The Clepsydra dial",
                "The Astrolabe of Alexandria"
            ],
            "answer": 1,
            "feedback": "Correct! The famous Antikythera mechanism (circa 150-100 BC) is displayed in the main collections."
        },
        "reward": {
            "title": "10% off museum guide booklets",
            "provider": "Museum Souvenir Shop",
            "code": "ANTIKYTHERA"
        }
    },
    {
        "id": 26,
        "name": "First Cemetery of Athens",
        "lat": 37.963,
        "lng": 23.7383,
        "image": "images/first_cemetery_of_athens.jpg",
        "description": "The oldest official cemetery of modern Athens. It is essentially an open-air sculpture museum containing elaborate tombs of prominent Greek historical figures.",
        "audioText": "Walk through the quiet paths of the First Cemetery of Athens, opened in 1837. This is not just a burial ground, but a grand outdoor gallery of marble sculpture. It is the final resting place of heroes of the Greek Revolution, politicians, poets, and artists like Sophia Schliemann. The most famous tomb features the sleeping maiden sculpture, a masterpiece by Halepas.",
        "quiz": {
            "question": "Which famous sculptor carved the 'Sleeping Maiden' monument here?",
            "options": [
                "Phidias",
                "Giannoulis Halepas",
                "Praxiteles",
                "El Greco"
            ],
            "answer": 1,
            "feedback": "Correct! The masterpiece sculpture was crafted by the romantic sculptor Giannoulis Halepas."
        },
        "reward": {
            "title": "Free historic map brochure",
            "provider": "Mets District Tourism",
            "code": "HALEPAS"
        }
    },
    {
        "id": 27,
        "name": "Ancient Agora of Athens",
        "lat": 37.975,
        "lng": 23.7225,
        "image": "images/ancient_agora_of_athens.jpg",
        "description": "The administrative, commercial, and social heart of ancient Athens, where Socrates debated and democracy was practiced daily.",
        "audioText": "Stand in the middle of the Ancient Agora, the public square of classical Athens. Unlike the Acropolis, which was the sacred citadel, the Agora was the heart of daily life. Citizens gathered here to shop, discuss politics, vote, and trade. Philosophers like Socrates and Zeno walked these paths to debate ideas, founding schools of thought like Stoicism in the covered porches or stoas.",
        "quiz": {
            "question": "Which philosophical school was named after the covered porches (Stoas) in the Agora?",
            "options": [
                "Epicureanism",
                "Stoicism",
                "Skepticism",
                "Cynicism"
            ],
            "answer": 1,
            "feedback": "Correct! Zeno of Citium taught his philosophy in the Stoa Poikile, leading to the name Stoicism."
        },
        "reward": {
            "title": "10% off traditional Greek mezze",
            "provider": "Agora Traditional Bistro",
            "code": "STOICAGORA"
        }
    },
    {
        "id": 28,
        "name": "Roman Agora of Athens",
        "lat": 37.9744,
        "lng": 23.7262,
        "image": "images/roman_agora.png",
        "description": "The ancient commercial center of Athens under Roman rule, funded by Julius Caesar and Augustus, featuring the Gate of Athena Archegetis.",
        "audioText": "Welcome to the Roman Agora, the commercial hub established under Roman patronage in the late 1st century BC. Funded by Julius Caesar and completed under Augustus, this open marketplace shifted economic life away from the older Greek Agora. Enter through the Gate of Athena Archegetis, a monumental portico with four Doric columns. The Roman Agora was designed with a central courtyard surrounded by colonnades that housed shops and offices, where olive oil, wine, and imported Roman goods were traded. It represents the architectural expansion and globalization of Athens as a free city within the early Roman Empire.",
        "quiz": {
            "question": "Which Roman leaders funded the construction of the Roman Agora?",
            "options": [
                "Julius Caesar and Augustus",
                "Nero and Caligula",
                "Hadrian and Trajan",
                "Constantine and Justinian"
            ],
            "answer": 0,
            "feedback": "Correct! Julius Caesar initiated the funding, and it was finished during Augustus's rule."
        },
        "reward": {
            "title": "10% off Roman Agora tour books",
            "provider": "Agora Book Hub",
            "code": "ROMANAGORA"
        }
    },
    {
        "id": 29,
        "name": "Hadrian's Reservoir (Dexameni)",
        "lat": 37.979,
        "lng": 23.7417,
        "image": "images/olympian_zeus.png",
        "description": "An ancient Roman reservoir built by Emperor Hadrian at the foot of Lycabettus Hill, which supplied fresh water to Athens for over a thousand years.",
        "audioText": "Stand near the ancient Dexameni, the water reservoir constructed by Roman Emperor Hadrian in 140 AD. Sourced from the slopes of Mount Parnitha via a 20-kilometer stone aqueduct, this reservoir sat at the base of Lycabettus Hill, storing fresh water to distribute to the citizens of Athens. The reservoir was highly engineered, featuring vaulted stone chambers that kept the water cool. It supplied water to the city throughout the Byzantine and Ottoman eras. Today, the square surrounding the reservoir remains a historic meeting spot for Greek poets and writers, hosting a peaceful open-air cinema in the summer months.",
        "quiz": {
            "question": "Where did Hadrian's aqueduct source its fresh water from?",
            "options": [
                "Mount Parnitha",
                "The Aegean Sea",
                "The River Ilissos",
                "The springs of Delphi"
            ],
            "answer": 0,
            "feedback": "Correct! The aqueduct transported fresh water from Mount Parnitha directly to Dexameni."
        },
        "reward": {
            "title": "Free mineral water with meal",
            "provider": "Dexameni Bistro",
            "code": "DEXAMENIWATER"
        }
    },
    {
        "id": 30,
        "name": "Church of the Holy Apostles",
        "lat": 37.9739,
        "lng": 23.7233,
        "image": "images/holy_apostles.png",
        "description": "A late 10th-century Byzantine church in the Ancient Agora, famous for its architectural style and beautifully preserved frescoes.",
        "audioText": "Explore the Church of the Holy Apostles Solaki, one of the oldest and most beautiful Byzantine churches in Athens, dating back to the late 10th century. Located in the southeast corner of the Ancient Agora, it is the only building that survived the modern archaeological excavation of the Agora. The church is built in the cross-in-square style, with a central dome supported by four columns, and its walls show decorative brickwork that mimics Kufic script. Inside, you can admire the 17th-century frescoes, which depict scenes of the apostles, preserved during restorations in the 1950s.",
        "quiz": {
            "question": "Why is the Church of the Holy Apostles Solaki unique in the Ancient Agora?",
            "options": [
                "It is the only building that survived modern excavations",
                "It was built entirely of gold leaf",
                "It was constructed by Roman soldiers",
                "It is located on top of the Parthenon"
            ],
            "answer": 0,
            "feedback": "Correct! It is the sole monument left intact during the Agora clearance projects."
        },
        "reward": {
            "title": "15% off Byzantine Art books",
            "provider": "Solaki Book Shop",
            "code": "APOSTLES10"
        }
    },
    {
        "id": 31,
        "name": "Little Metropolis Church",
        "lat": 37.97515,
        "lng": 23.7302,
        "image": "images/little_metropolis.png",
        "description": "A tiny, exquisite 12th-century Byzantine church built entirely of ancient Greek marble blocks and reliefs, located next to the modern Cathedral.",
        "audioText": "Look closely at the Little Metropolis, officially known as the Church of Saint Eleutherios. This tiny Byzantine church, built in the late 12th century, is an architectural marvel. Instead of new brick, it was constructed entirely of ancient Greek marble blocks, reliefs, and friezes scavenged from older pagan temples. Over 90 ancient reliefs are embedded in its external walls, creating a fascinating visual mixture of classical mythology and Christian themes. It remains one of the most unique examples of recycled architecture in the medieval Mediterranean.",
        "quiz": {
            "question": "What is unique about the construction materials of the Little Metropolis?",
            "options": [
                "It was built using recycled ancient Greek marble and reliefs",
                "It is made of volcanic black glass",
                "It was imported entirely from Egypt",
                "It was constructed from timber logs"
            ],
            "answer": 0,
            "feedback": "Correct! The builders used ancient pagan marble blocks (spolia) to construct the church."
        },
        "reward": {
            "title": "Free candle souvenir",
            "provider": "Mitropolis Ecclesiastical Shop",
            "code": "TINYMETROPOLIS"
        }
    },
    {
        "id": 32,
        "name": "Metropolitan Cathedral of Athens",
        "lat": 37.97529,
        "lng": 23.73007,
        "image": "images/metropolitan_cathedral.png",
        "description": "The main cathedral church of the Archbishop of Athens, built in the 19th century in the Greco-Byzantine style.",
        "audioText": "Stand before the Metropolitan Cathedral of Athens, the center of the Greek Orthodox Church in the capital. Construction began in 1842 under King Otto, using marble from 72 ruined Byzantine churches to complete its grand structure. The cathedral's interior is decorated with gold leaf and traditional Byzantine icons. It has hosted the state weddings, funerals, and coronations of the modern Greek state, serving as a monument to the nation's 19th-century independence.",
        "quiz": {
            "question": "Where did much of the marble for the Metropolitan Cathedral come from?",
            "options": [
                "Directly from the Parthenon ruins",
                "Imported from Carrara, Italy",
                "From 72 demolished Byzantine churches",
                "From Mount Vesuvius quarries"
            ],
            "answer": 2,
            "feedback": "Correct! Materials from 72 ruined medieval chapels were collected to complete the cathedral."
        },
        "reward": {
            "title": "10% off traditional icon replicas",
            "provider": "Cathedral Square Crafts",
            "code": "MITROPOLI"
        }
    },
    {
        "id": 33,
        "name": "Stoa of Attalos",
        "lat": 37.975,
        "lng": 23.7238,
        "image": "images/hephaestus.png",
        "description": "A monumental covered walkway in the Ancient Agora, fully reconstructed in the 1950s to house the Ancient Agora Museum.",
        "audioText": "Walk under the double columns of the Stoa of Attalos, originally built around 150 BC by King Attalos the Second of Pergamum as a gift to Athens. This two-story covered hall served as a shopping mall and meeting place for ancient Athenians. Destructed by the Herulians in 267 AD, it was fully reconstructed by the American School of Classical Studies in the 1950s. Today, it houses the Agora Museum, displaying objects of daily life and democratic voting tokens.",
        "quiz": {
            "question": "Who gifted the original Stoa of Attalos to the city of Athens?",
            "options": [
                "Julius Caesar",
                "King Attalos II of Pergamum",
                "Pericles",
                "Alexander the Great"
            ],
            "answer": 1,
            "feedback": "Correct! King Attalos II built the stoa to show gratitude for his education in Athens."
        },
        "reward": {
            "title": "15% off Agora Museum guides",
            "provider": "Stoa Bookstore",
            "code": "ATTALOS"
        }
    },
    {
        "id": 34,
        "name": "Kerameikos Archaeological Museum",
        "lat": 37.9778,
        "lng": 23.7169,
        "image": "images/hephaestus.png",
        "description": "A small museum housing the most important tomb discoveries, marble statues, and clay vases found in the Kerameikos cemetery.",
        "audioText": "Enter the Kerameikos Museum, which houses the rich discoveries of the city's ancient cemetery. The exhibits include marble grave monuments, detailed funerary statues, and painted clay vases. Look for the famous marble bull, which stood as a guardian monument over the tomb of Dionysius of Kollytos. The museum displays the historical evolution of burial rituals and pottery arts over a thousand years.",
        "quiz": {
            "question": "Which animal statue served as a famous tomb guardian monument in Kerameikos?",
            "options": [
                "A bronze eagle",
                "A marble bull",
                "A stone lion",
                "A silver snake"
            ],
            "answer": 1,
            "feedback": "Correct! The marble bull of Dionysius of Kollytos is one of the museum's most famous monuments."
        },
        "reward": {
            "title": "10% off custom postcard sets",
            "provider": "Kerameikos Shop",
            "code": "KERAMEIKOSMUSEUM"
        }
    },
    {
        "id": 35,
        "name": "Monastery of Daphni",
        "lat": 38.0129,
        "lng": 23.6359,
        "image": "images/erechtheion.png",
        "description": "A UNESCO World Heritage site, famous for its Byzantine architecture and well-preserved 11th-century gold mosaics.",
        "audioText": "Visit the Daphni Monastery, a UNESCO World Heritage monument located northwest of Athens. Built in the 11th century over an ancient temple of Apollo, this Byzantine church is famous for its architecture and gold mosaics. The mosaic in the central dome depicts Christ Pantokrator, looking down on the congregation. The monastery survived Crusader occupations, earthquakes, and wars, remaining a monument to Byzantine art.",
        "quiz": {
            "question": "Which UNESCO World Heritage monument lies just northwest of Athens?",
            "options": [
                "Daphni Monastery",
                "The Parthenon Museum",
                "The Sanctuary of Delphi",
                "Knossos Palace"
            ],
            "answer": 0,
            "feedback": "Correct! Daphni Monastery is celebrated globally for its high-quality gold mosaic art."
        },
        "reward": {
            "title": "10% off local organic olive oil",
            "provider": "Daphni Cooperatives",
            "code": "DAPHNIMOSAIC"
        }
    },
    {
        "id": 36,
        "name": "Sanctuary of Demeter (Eleusis)",
        "lat": 38.042,
        "lng": 23.5392,
        "image": "images/olympian_zeus.png",
        "description": "The sanctuary site of the Eleusinian Mysteries, the most sacred secret religious rites of the ancient Greek world, dedicated to Demeter and Persephone.",
        "audioText": "Explore the ruins of the Sanctuary of Demeter in Eleusis. This was the home of the Eleusinian Mysteries, the most secret and sacred religious rituals of ancient Greece. Initiates walked the Sacred Way from Athens to Eleusis to participate in rituals that promised happiness in the afterlife. The details of the rites remain secret to this day, but the ruins of the Telesterion hall show the scale of this ancient spiritual center.",
        "quiz": {
            "question": "Which goddess was the Sanctuary of Eleusis primarily dedicated to?",
            "options": [
                "Athena, goddess of war",
                "Demeter, goddess of agriculture",
                "Aphrodite, goddess of love",
                "Hera, queen of the gods"
            ],
            "answer": 1,
            "feedback": "Correct! The mysteries celebrated Demeter's grief and the return of her daughter Persephone."
        },
        "reward": {
            "title": "15% off Eleusis historical guidebooks",
            "provider": "Eleusis Antiquities Shop",
            "code": "ELEUSISMYST"
        }
    },
    {
        "id": 37,
        "name": "Amphiaraion of Oropos",
        "lat": 38.2917,
        "lng": 23.8456,
        "image": "images/hephaestus.png",
        "description": "An ancient healing sanctuary and oracle dedicated to the hero Amphiaraus, located in a quiet pine-filled ravine near Oropos.",
        "audioText": "Journey to the Amphiaraion of Oropos, a healing sanctuary founded in the late 5th century BC. Dedicated to the hero and seer Amphiaraus, this site served as both an oracle and a medical center, similar to Epidaurus. Patients slept in a long colonnade, hoping to receive healing dreams from the gods. The ruins include a small theater, a temple, and an ancient water clock.",
        "quiz": {
            "question": "What was the primary function of the Amphiaraion of Oropos?",
            "options": [
                "A military fortress",
                "An oracle and healing sanctuary",
                "A silver refinery",
                "A naval shipyard"
            ],
            "answer": 1,
            "feedback": "Correct! The site was famous for dream-based oracle healing."
        },
        "reward": {
            "title": "10% off local organic honey",
            "provider": "Oropos Beekeepers Association",
            "code": "AMPHIARAUS"
        }
    },
    {
        "id": 38,
        "name": "Tumulus of Marathon",
        "lat": 38.1175,
        "lng": 23.9737,
        "image": "images/panathenaic_stadium.png",
        "description": "The burial mound containing the ashes of the 192 Athenian soldiers who died defending Greece at the Battle of Marathon in 490 BC.",
        "audioText": "Stand before the Tumulus of Marathon, a 9-meter-tall burial mound that marks the grave of the 192 Athenian soldiers who died in 490 BC. Here, a small Athenian force defeated the invading Persian army. According to legend, Pheidippides ran 42 kilometers from the battlefield to Athens to announce the victory, inspiring the modern marathon race. The mound remains a symbol of liberty.",
        "quiz": {
            "question": "How many Athenian soldiers are buried under the Tumulus of Marathon?",
            "options": [
                "192",
                "10,000",
                "300",
                "1,200"
            ],
            "answer": 0,
            "feedback": "Correct! Exactly 192 Athenian hoplites were cremated and buried together on the battlefield."
        },
        "reward": {
            "title": "15% off Marathon Running gear",
            "provider": "Marathon Sports Hub",
            "code": "PHEIDIPPIDES"
        }
    },
    {
        "id": 39,
        "name": "Sanctuary of Artemis (Vravrona)",
        "lat": 37.9265,
        "lng": 23.9936,
        "image": "images/hephaestus.png",
        "description": "An ancient sanctuary dedicated to Artemis Brauronia, where young Athenian girls participated in initiation ceremonies called the Arkteia.",
        "audioText": "Explore the Sanctuary of Artemis in Vravrona, situated on the eastern coast of Attica. Dedicated to Artemis, the goddess of the hunt, childbirth, and wild nature, this site hosted the Arkteia. During this festival, young Athenian girls dressed as bears to participate in initiation rites. The well-preserved colonnade of the temple courtyard stands in a quiet wetland area.",
        "quiz": {
            "question": "Which animal did young girls dress as during the Arkteia rituals at Vravrona?",
            "options": [
                "Bears",
                "Doves",
                "Deers",
                "Lions"
            ],
            "answer": 0,
            "feedback": "Correct! The girls were called 'arktoi' (bears) during the sacred ceremony."
        },
        "reward": {
            "title": "Free organic herbal soap",
            "provider": "Vravrona Herb Farm",
            "code": "BRAURONIA"
        }
    },
    {
        "id": 40,
        "name": "Thorikos Ancient Theater",
        "lat": 37.7381,
        "lng": 24.0538,
        "image": "images/theatre_dionysus.png",
        "description": "The oldest surviving theater in the world, featuring a unique ellipsoidal shape and located near the ancient industrial town of Thorikos.",
        "audioText": "Visit the Thorikos Theater, constructed in the late 6th century BC. This is considered the oldest surviving theater in the world. Unlike later classical theaters, it features a unique ellipsoidal shape rather than a perfect semicircle, reflecting its early design. It was built near the ancient mining town of Thorikos to host theatrical festivals and community assemblies.",
        "quiz": {
            "question": "What is unique about the design of the Thorikos Theater?",
            "options": [
                "It has an ellipsoidal, non-semicircular shape",
                "It is built underground",
                "It is made of bronze plates",
                "It has a sliding roof"
            ],
            "answer": 0,
            "feedback": "Correct! Its early ellipsoidal layout shows how theater architecture evolved before standard semicircles."
        },
        "reward": {
            "title": "10% off regional map guides",
            "provider": "Lavrio Travel Desk",
            "code": "THORIKOS"
        }
    },
    {
        "id": 41,
        "name": "Lavrion Silver Mines",
        "lat": 37.7088,
        "lng": 24.0205,
        "image": "images/olympian_zeus.png",
        "description": "The ancient silver mines of Athens, whose vast wealth funded the Athenian naval fleet that defeated the Persians at Salamis.",
        "audioText": "Stand near the ancient silver mines of Lavrion, the source of classical Athens' wealth. In 483 BC, a rich vein of silver was discovered here. The statesman Themistocles convinced the citizens to use the profits to build a fleet of 200 triremes. This navy defeated the Persian fleet at the Battle of Salamis, saving Greece and securing Athens' Golden Age.",
        "quiz": {
            "question": "What did the Athenian leader Themistocles build using the silver profits from Lavrion?",
            "options": [
                "The Parthenon temple",
                "A naval fleet of 200 triremes",
                "The city walls of Sparta",
                "A giant golden statue of Zeus"
            ],
            "answer": 1,
            "feedback": "Correct! The silver-funded fleet won the Battle of Salamis, establishing Athenian naval dominance."
        },
        "reward": {
            "title": "15% off mineral and rock tours",
            "provider": "Lavrion Mineralogical Museum",
            "code": "SILVERMINES"
        }
    },
    {
        "id": 42,
        "name": "Kaisariani Monastery",
        "lat": 37.9607,
        "lng": 23.7985,
        "image": "images/erechtheion.png",
        "description": "A beautiful 11th-century Byzantine monastery located on the pine-covered slopes of Mount Hymettus, famous for its water springs.",
        "audioText": "Explore the Kaisariani Monastery, located in a pine forest on the slopes of Mount Hymettus. Built in the late 11th century, this church is dedicated to the Presentation of the Virgin. The site was built over an ancient temple of Aphrodite. The monastery is famous for its natural spring water, which flows from a marble ram's head into the central courtyard.",
        "quiz": {
            "question": "Which mountain range is Kaisariani Monastery located on?",
            "options": [
                "Mount Hymettus",
                "Mount Parnitha",
                "Mount Penteli",
                "Mount Olympus"
            ],
            "answer": 0,
            "feedback": "Correct! The monastery sits in a forested valley on Mount Hymettus."
        },
        "reward": {
            "title": "Free organic tea with any order",
            "provider": "Hymettus Forest Kiosk",
            "code": "KAISARIANI"
        }
    },
    {
        "id": 43,
        "name": "Asteriou Monastery",
        "lat": 37.9696,
        "lng": 23.8112,
        "image": "images/erechtheion.png",
        "description": "A historic, secluded Byzantine monastery on Mount Hymettus, featuring a fortified architectural design.",
        "audioText": "Visit the Asteriou Monastery, situated higher up on Mount Hymettus. Founded in the 10th century, this secluded monastery has a fortified design with high walls, built to protect the monks from pirate raids. Its small church features Byzantine frescoes, and the quiet courtyard offers a peaceful escape from the busy city below.",
        "quiz": {
            "question": "Around which century was the fortified Asteriou Monastery founded?",
            "options": [
                "10th Century AD",
                "18th Century AD",
                "5th Century BC",
                "15th Century AD"
            ],
            "answer": 0,
            "feedback": "Correct! It was founded in the 10th century during the middle Byzantine era."
        },
        "reward": {
            "title": "10% off hand-painted icon replicas",
            "provider": "Asteriou Monastic Workshop",
            "code": "ASTERIOU"
        }
    },
    {
        "id": 44,
        "name": "Mount Parnitha National Park",
        "lat": 38.1733,
        "lng": 23.7175,
        "image": "images/parthenon.png",
        "description": "The highest mountain peak near Athens, offering dense pine forests, hiking paths, and the historic Bafi Refuge.",
        "audioText": "Escape to Mount Parnitha, the highest mountain near Athens, rising 1,413 meters. This national park features dense pine forests, gorges, and wildlife, including red deer. The mountain has played a key role in Athens' history, housing fortresses that guarded the northern passes into Attica. Today, it is popular for hiking and features the Bafi Refuge.",
        "quiz": {
            "question": "Which animal is famous for living wild in Mount Parnitha National Park?",
            "options": [
                "Red deer",
                "Brown bears",
                "Wild leopards",
                "Monk seals"
            ],
            "answer": 0,
            "feedback": "Correct! A population of protected red deer lives in the mountain's pine forests."
        },
        "reward": {
            "title": "Free hot chocolate with pastry",
            "provider": "Bafi Mountain Refuge",
            "code": "PARNITHAPARK"
        }
    },
    {
        "id": 45,
        "name": "Temple of Poseidon at Sounion",
        "lat": 37.6501,
        "lng": 24.0245,
        "image": "images/olympian_zeus.png",
        "description": "A world-famous temple perched on the cliffs of Cape Sounion, built in 440 BC and dedicated to the god of the sea.",
        "audioText": "Stand at the edge of Cape Sounion before the Temple of Poseidon, built in 440 BC. Perched 60 meters above the Aegean Sea, this temple was dedicated to Poseidon, the god of the sea. It was a landmark for ancient sailors returning to Athens. Look closely at the marble columns; you can find the graffiti left by the English poet Lord Byron in 1810.",
        "quiz": {
            "question": "Which famous English poet carved his name on a temple column at Sounion?",
            "options": [
                "Lord Byron",
                "John Keats",
                "Percy Bysshe Shelley",
                "William Wordsworth"
            ],
            "answer": 0,
            "feedback": "Correct! Lord Byron carved his name on one of the white marble columns during his grand tour."
        },
        "reward": {
            "title": "15% off seafood lunch with view",
            "provider": "Sounion Cape Restaurant",
            "code": "SOUNIONCAP"
        }
    },
    {
        "id": 46,
        "name": "Choragic Monument of Thrasyllus",
        "lat": 37.9708,
        "lng": 23.7275,
        "image": "images/theatre_dionysus.png",
        "description": "An ancient monument built on the south slope of the Acropolis to celebrate a theatrical victory at the Theatre of Dionysus in 320 BC.",
        "audioText": "Look up at the cliff above the Theatre of Dionysus to see the Monument of Thrasyllus, built in 320 BC. Built into a natural cave, this monument celebrated Thrasyllus's victory as a choregos. It featured a marble facade with Corinthian pilasters. Later converted into the Chapel of Panagia Spiliotissa, it remains a unique monument built directly into the rock face.",
        "quiz": {
            "question": "What natural feature was the Monument of Thrasyllus built into?",
            "options": [
                "A natural cave",
                "A deep riverbed",
                "A volcanic crater",
                "A pine-covered hill summit"
            ],
            "answer": 0,
            "feedback": "Correct! The monument frames a cave, which was later used as a Christian chapel."
        },
        "reward": {
            "title": "10% off tickets to summer theater events",
            "provider": "Dionysia Stage Plaka",
            "code": "THRASYLLUS"
        }
    },
    {
        "id": 47,
        "name": "Pedestal of Agrippa",
        "lat": 37.97153,
        "lng": 23.72574,
        "image": "images/parthenon.png",
        "description": "A tall marble pedestal standing in front of the Propylaea, built to carry a bronze chariot statue honoring the Roman general Marcus Vipsanius Agrippa.",
        "audioText": "Observe the tall marble pedestal standing in front of the Propylaea entrance. Built in the 2nd century BC, it originally carried a monument to a Hellenistic king. In 27 BC, the Athenians rededicated the monument to Marcus Vipsanius Agrippa, the son-in-law of Roman Emperor Augustus, placing a bronze chariot statue on top to thank him for his civic gifts.",
        "quiz": {
            "question": "Who was the Roman general honored with a statue on this tall pedestal?",
            "options": [
                "Marcus Vipsanius Agrippa",
                "Julius Caesar",
                "Mark Antony",
                "General Pompey"
            ],
            "answer": 0,
            "feedback": "Correct! The monument was rededicated to Agrippa to celebrate his contributions to Athens."
        },
        "reward": {
            "title": "Free map of the Acropolis complex",
            "provider": "Acropolis Entrance Desk",
            "code": "AGRIPPA"
        }
    },
    {
        "id": 48,
        "name": "Agia Dynami Church",
        "lat": 37.9752,
        "lng": 23.7321,
        "image": "images/tower_winds.png",
        "description": "A tiny 16th-century Byzantine church in Syntagma, built over an ancient temple of Heracles and now enclosed by a modern office building.",
        "audioText": "Find the tiny Church of Agia Dynami on Mitropoleos Street. Built in the 16th century over an ancient temple of Heracles, this church is famous for its location. During Athens' rapid development, the church was preserved, and a modern hotel building was constructed around and over it. It stands as a symbol of historical preservation amidst modern growth.",
        "quiz": {
            "question": "Which ancient temple was the Agia Dynami church built over?",
            "options": [
                "Temple of Heracles",
                "Temple of Athena",
                "Temple of Zeus",
                "Temple of Hermes"
            ],
            "answer": 0,
            "feedback": "Correct! The church sits directly on the foundations of an ancient temple dedicated to Heracles."
        },
        "reward": {
            "title": "10% off traditional Greek cookies",
            "provider": "Mitropoleos Bakery",
            "code": "AGIADYNAMI"
        }
    },
    {
        "id": 49,
        "name": "St. Demetrius Loumbardiaris",
        "lat": 37.9696,
        "lng": 23.7208,
        "image": "images/hephaestus.png",
        "description": "A beautiful 12th-century wooden-roofed Byzantine chapel on Philopappos Hill, restored by architect Dimitris Pikionis.",
        "audioText": "Visit the Chapel of Saint Demetrius Loumbardiaris, located in the trees on Philopappos Hill. The name Loumbardiaris means 'the Cannoneer,' commemorating a 1656 miracle. According to legend, the Ottoman commander of the Acropolis planned to shell the church with a cannon (loumbarda), but a sudden lightning strike destroyed the battery.",
        "quiz": {
            "question": "What does the nickname 'Loumbardiaris' translate to?",
            "options": [
                "The Shepherd",
                "The Cannoneer",
                "The Saint of the Hill",
                "The Golden Gate"
            ],
            "answer": 1,
            "feedback": "Correct! It commemorates the cannon (loumbarda) that failed to fire on the church."
        },
        "reward": {
            "title": "Free bottled spring water",
            "provider": "Loumbardiaris kiosk",
            "code": "CANNONEER"
        }
    },
    {
        "id": 50,
        "name": "Stoa of Eumenes",
        "lat": 37.9705,
        "lng": 23.7257,
        "image": "images/theatre_dionysus.png",
        "description": "A monumental two-story colonnade on the south slope of the Acropolis, built by King Eumenes II of Pergamum to shelter theater audiences.",
        "audioText": "Walk along the Stoa of Eumenes, a 163-meter-long colonnade built around 160 BC by King Eumenes II of Pergamum. This two-story structure connected the Theatre of Dionysus with the site where the Odeon of Herodes Atticus was later built. It served to shelter theater audiences from rain and sun, and was a popular place for social walks.",
        "quiz": {
            "question": "What was the primary function of the Stoa of Eumenes?",
            "options": [
                "A military barracks",
                "A sheltered walkway for theater audiences",
                "A silver refinery",
                "A temple to Apollo"
            ],
            "answer": 1,
            "feedback": "Correct! The stoa offered shelter and walking space for spectators during theater festivals."
        },
        "reward": {
            "title": "10% off classical theater booklets",
            "provider": "Eumenes Books Plaka",
            "code": "EUMENES"
        }
    },
    {
        "id": 51,
        "name": "The Pelasgian Wall",
        "lat": 37.9712,
        "lng": 23.725,
        "image": "images/parthenon.png",
        "description": "The ancient Mycenaean fortification wall of the Acropolis, constructed in the 13th century BC using massive stone blocks.",
        "audioText": "Observe the remains of the Pelasgian Wall, the oldest fortification on the Acropolis, dating back to the Mycenaean period in the 13th century BC. Built using massive limestone blocks without mortar, this wall was so large that later classical Greeks believed it was built by the mythical Cyclopes, leading to the term 'Cyclopean masonry.'",
        "quiz": {
            "question": "What type of historic masonry is the Pelasgian Wall made of?",
            "options": [
                "Modern brick and mortar",
                "Cyclopean masonry (massive stone blocks)",
                "Reinforced concrete",
                "Carved wooden logs"
            ],
            "answer": 1,
            "feedback": "Correct! The massive stone blocks were traditionally attributed to the legendary Cyclopes."
        },
        "reward": {
            "title": "Free historical postcard",
            "provider": "Acropolis Museum Shop",
            "code": "PELASGIAN"
        }
    },
    {
        "id": 52,
        "name": "Asclepieion of Athens",
        "lat": 37.9709,
        "lng": 23.7266,
        "image": "images/theatre_dionysus.png",
        "description": "The healing sanctuary dedicated to the god Asclepius, featuring a sacred spring and incubation halls for curing illnesses.",
        "audioText": "Visit the Asclepieion, the healing sanctuary founded in 419 BC during a plague. Dedicated to Asclepius, the god of medicine, the sanctuary included a temple, a sacred spring, and incubation halls. Patients slept in these halls, hoping the god would visit them in their dreams to heal their illnesses and prescribe cures.",
        "quiz": {
            "question": "Which god of medicine was the Asclepieion dedicated to?",
            "options": [
                "Apollo",
                "Asclepius",
                "Hermes",
                "Zeus"
            ],
            "answer": 1,
            "feedback": "Correct! Asclepius was the Greek god of healing and medicine."
        },
        "reward": {
            "title": "15% off organic herbal extracts",
            "provider": "Plaka Apothecary",
            "code": "ASCLEPIUS"
        }
    },
    {
        "id": 53,
        "name": "The Metroum (Ancient Agora)",
        "lat": 37.9751,
        "lng": 23.7221,
        "image": "images/hephaestus.png",
        "description": "The ancient sanctuary of the Mother of the Gods, which also served as the official state archives repository of Athens.",
        "audioText": "Stand near the foundations of the Metroum in the Ancient Agora. Built in the late 5th century BC, this building was dedicated to the Mother of the Gods (Rhea or Cybele). It also served as the official state archives repository. The city's laws, treaties, and court testimonies were written on papyrus and stored here under her protection.",
        "quiz": {
            "question": "What administrative function did the Metroum serve in Athens?",
            "options": [
                "A grain market",
                "The state archives repository",
                "A treasury vault",
                "A public prison"
            ],
            "answer": 1,
            "feedback": "Correct! The Metroum housed the official historical laws and archives of the state."
        },
        "reward": {
            "title": "10% off history guides",
            "provider": "Agora Museum Shop",
            "code": "METROUM"
        }
    },
    {
        "id": 54,
        "name": "Ancient Bouleuterion",
        "lat": 37.975,
        "lng": 23.7219,
        "image": "images/hephaestus.png",
        "description": "The meeting house of the Athenian Council of 500 (Boule), who prepared the agenda for the general assembly.",
        "audioText": "Explore the ruins of the Bouleuterion, the council house of the Boule. This council of 500 citizens was chosen by lot each year. They met daily in this building to draft laws and prepare the agenda for the general assembly on the Pnyx, serving as a core institution of ancient Athenian democracy.",
        "quiz": {
            "question": "How were the members of the Athenian Council (Boule) chosen?",
            "options": [
                "By military rank",
                "By lottery (drawn by lot)",
                "By royal inheritance",
                "By wealthy donation size"
            ],
            "answer": 1,
            "feedback": "Correct! Athenian democracy relied on selection by lottery to ensure equal representation."
        },
        "reward": {
            "title": "15% off democracy history books",
            "provider": "Plaka Book Emporium",
            "code": "BOULEUTERION"
        }
    },
    {
        "id": 55,
        "name": "The Tholos (Agora)",
        "lat": 37.9748,
        "lng": 23.722,
        "image": "images/hephaestus.png",
        "description": "A circular building in the Agora that served as the headquarters and dining hall of the standing committee of the Senate.",
        "audioText": "Observe the circular foundation of the Tholos, built in 470 BC. This building was the headquarters of the prytaneis, the standing committee of the council. To ensure the government could respond to emergencies, a third of the committee stayed inside the Tholos 24 hours a day, sleeping and dining at the city's expense.",
        "quiz": {
            "question": "What was the unique shape of the Tholos building?",
            "options": [
                "Square",
                "Circular (round)",
                "Triangular",
                "Octagonal"
            ],
            "answer": 1,
            "feedback": "Correct! The Tholos was famous for its circular ground plan."
        },
        "reward": {
            "title": "Free bottled beverage with lunch",
            "provider": "Tholos Traditional Grill",
            "code": "THOLOSROUND"
        }
    },
    {
        "id": 56,
        "name": "Altar of the Twelve Gods",
        "lat": 37.9757,
        "lng": 23.7229,
        "image": "images/hephaestus.png",
        "description": "An ancient altar in the Agora that was considered the zero-point milestone from which all road distances in Greece were measured.",
        "audioText": "Stand near the remains of the Altar of the Twelve Gods, built in 522 BC. This altar was a place of sanctuary for refugees. It also served as the zero-point milestone of Athens. All distances along the road network of the Greek world were measured from this exact spot, similar to Rome's golden milestone.",
        "quiz": {
            "question": "What geographic function did the Altar of the Twelve Gods serve?",
            "options": [
                "A naval lighthouse",
                "The zero-point milestone for measuring road distances",
                "A silver refinery vault",
                "A border gate with Sparta"
            ],
            "answer": 1,
            "feedback": "Correct! It was the central point used to measure all distances in ancient Greece."
        },
        "reward": {
            "title": "Free city walking map",
            "provider": "Agora Information Desk",
            "code": "ZEROPOINT"
        }
    },
    {
        "id": 57,
        "name": "South Stoa I",
        "lat": 37.9744,
        "lng": 23.7228,
        "image": "images/hephaestus.png",
        "description": "A long double-aisled colonnade in the Agora, which housed the offices of the city magistrates and hosted public banquets.",
        "audioText": "Explore the remains of South Stoa I, built in the late 5th century BC. This double-aisled colonnade contained 15 rooms, which housed the offices of the city magistrates (the metronomoi who checked weights and measures). The rooms also hosted public banquets, and archaeologists found dining couches and coins during excavations.",
        "quiz": {
            "question": "Which officers had their administration rooms inside South Stoa I?",
            "options": [
                "Naval admirals",
                "The city magistrates (metronomoi)",
                "The royal bodyguards",
                "The priesthood of Apollo"
            ],
            "answer": 1,
            "feedback": "Correct! The magistrates checked market standards from these offices."
        },
        "reward": {
            "title": "10% off traditional Greek snacks",
            "provider": "South Stoa Tavern",
            "code": "SOUTHSTOA"
        }
    },
    {
        "id": 58,
        "name": "Acropolis Museum",
        "lat": 37.9689,
        "lng": 23.7285,
        "image": "images/acropolis_museum.png",
        "description": "Modern museum housing the artifacts of the Acropolis, located at the foot of the Acropolis.",
        "audioText": "Explore the Acropolis Museum, showcasing the statue of Athena and the Parthenon friezes, offering a journey through ancient Athenian history.",
        "quiz": {
            "question": "What is the most famous sculpture displayed in the Acropolis Museum?",
            "options": [
                "Statue of Athena Parthenos",
                "Kouroi statues",
                "Statue of Poseidon",
                "Winged Victory of Samothrace"
            ],
            "answer": 0,
            "feedback": "Correct! The museum features the reconstructed Statue of Athena Parthenos."
        },
        "reward": {
            "title": "10% off museum cafe",
            "provider": "Acropolis Museum Café",
            "code": "ACROPOLISMUSEUM"
        }
    },
    {
        "id": 59,
        "name": "Museum of Cycladic Art",
        "lat": 37.9757,
        "lng": 23.7423,
        "image": "images/cycladic_art.png",
        "description": "Museum dedicated to the ancient Cycladic civilization, famous for its marble figurines.",
        "audioText": "Visit the Museum of Cycladic Art to see iconic marble idols from the Bronze Age, illustrating early Aegean culture.",
        "quiz": {
            "question": "What material are the famous Cycladic figurines made of?",
            "options": [
                "Marble",
                "Bronze",
                "Gold",
                "Terracotta"
            ],
            "answer": 0,
            "feedback": "Correct! The Cycladic figurines are carved from marble."
        },
        "reward": {
            "title": "Free entry ticket for a child",
            "provider": "Museum of Cycladic Art",
            "code": "CYCLADICCHILD"
        }
    },
    {
        "id": 60,
        "name": "Benaki Museum",
        "lat": 37.9754,
        "lng": 23.739,
        "image": "images/benaki_museum.png",
        "description": "Comprehensive museum covering Greek art from prehistoric to modern times.",
        "audioText": "Explore the Benaki Museum, home to a vast collection ranging from ancient pottery to contemporary artworks.",
        "quiz": {
            "question": "Which period does the Benaki Museum NOT cover?",
            "options": [
                "Prehistoric",
                "Byzantine",
                "Modern",
                "Space Age"
            ],
            "answer": 3,
            "feedback": "Correct! The Benaki Museum focuses on Greek history, not space exploration."
        },
        "reward": {
            "title": "15% off museum shop",
            "provider": "Benaki Museum Store",
            "code": "BENAKI15"
        }
    },
    {
        "id": 61,
        "name": "National Museum of Contemporary Art (EMST)",
        "lat": 37.963,
        "lng": 23.7253,
        "image": "images/emst.png",
        "description": "Museum showcasing contemporary Greek and international art.",
        "audioText": "Visit the EMST, Athens' premier venue for contemporary artistic expression, featuring rotating exhibitions.",
        "quiz": {
            "question": "What does EMST stand for?",
            "options": [
                "Εθνικό Μουσείο Σύγχρονης Τέχνης",
                "Εθνικό Μουσείο Σκληρων Τεχνών",
                "Εθνικό Μουσείο Συναυλιών και Θεάτρων",
                "Εθνική Μονή Σταυρού Τέχνης"
            ],
            "answer": 0,
            "feedback": "Correct! EMST is the National Museum of Contemporary Art."
        },
        "reward": {
            "title": "Free guided tour",
            "provider": "EMST Tours",
            "code": "EMSTGUIDE"
        }
    },
    {
        "id": 62,
        "name": "Anafiotika",
        "lat": 37.9724,
        "lng": 23.7281,
        "image": "images/anafiotika.png",
        "description": "A picturesque, historic neighborhood of whitewashed houses on the slopes of the Acropolis, reminiscent of a Cycladic island.",
        "audioText": "Wander through Anafiotika, the hidden gem of Plaka, with its narrow alleys and white cottages offering stunning views of the city.",
        "quiz": {
            "question": "Anafiotika’s architecture resembles which Greek island?",
            "options": [
                "Santorini",
                "Mykonos",
                "Naxos",
                "Ios"
            ],
            "answer": 0,
            "feedback": "Correct! The whitewashed style is reminiscent of Santorini."
        },
        "reward": {
            "title": "5% off coffee at a local café",
            "provider": "Kafenio Anafiotika",
            "code": "ANAFOCOFFEE"
        }
    },
    {
        "id": 63,
        "name": "Byzantine and Christian Museum",
        "lat": 37.97472,
        "lng": 23.74444,
        "image": "images/byzantine_museum.png",
        "description": "One of the world's most important museums of Byzantine art, housed in the historic Villa Ilissia, featuring a vast collection of icons, scriptures, and frescoes.",
        "audioText": "Welcome to the Byzantine and Christian Museum of Athens. Established in 1914, this museum is housed in the Villa Ilissia, a lovely mid-19th-century palace built for the Duchess of Plaisance. The museum is dedicated to the collection, study, and conservation of Byzantine and post-Byzantine art from the 3rd century AD to the modern era. Its treasures include over 30,000 items, including portable icons, wall paintings, liturgical textiles, manuscripts, ceramics, and mosaics. Walking through its peaceful gardens and galleries, you can trace how classical antiquity evolved into the spiritual art of the Byzantine Empire.",
        "quiz": {
            "question": "In which historic 19th-century residence is the Byzantine and Christian Museum housed?",
            "options": [
                "Villa Ilissia",
                "The Palace of Ilion",
                "The Old Parliament House",
                "Hadrian's Palace"
            ],
            "answer": 0,
            "feedback": "Correct! The museum is housed in the Villa Ilissia, constructed for the Duchess of Plaisance in 1848."
        },
        "reward": {
            "title": "15% off at the Museum Café and Gardens",
            "provider": "Ilissia Café, Byzantine Museum",
            "code": "BYZANTINE15"
        }
    },
    {
        "id": 64,
        "name": "War Museum of Athens",
        "lat": 37.97528,
        "lng": 23.74528,
        "image": "images/war_museum.png",
        "description": "Dedicated to the military history of Greece, showcasing weapons, uniforms, armor, and aircraft from antiquity to modern times.",
        "audioText": "Stand before the War Museum of Athens, inaugurated in 1975. The museum's mission is to collect, preserve, and exhibit military relics and documentation, honoring Greece's struggles for freedom throughout history. The exhibits span all periods, from the prehistoric and classical eras—featuring hoplite armor and ancient spearheads—through the Byzantine era, the Greek War of Independence of 1821, the Balkan Wars, and both World Wars. In the courtyard outside, you can explore historic military aircraft, artillery guns, and naval torpedoes that served in the Greek armed forces.",
        "quiz": {
            "question": "Which historical period is covered by the displays in the War Museum?",
            "options": [
                "Only World War II",
                "From antiquity to modern times",
                "Only the Greek War of Independence",
                "Only the Roman Era"
            ],
            "answer": 1,
            "feedback": "Correct! The War Museum covers military history from prehistoric times to the modern era."
        },
        "reward": {
            "title": "Free historical military postcard set",
            "provider": "Athens War Museum Gift Shop",
            "code": "WARMUSEUM"
        }
    },
    {
        "id": 65,
        "name": "Numismatic Museum of Athens",
        "lat": 37.9778,
        "lng": 23.7354,
        "image": "images/numismatic_museum.png",
        "description": "Housed in the majestic Iliou Melathron, the former residence of Heinrich Schliemann, it features one of the world's greatest collections of ancient and modern coins.",
        "audioText": "Welcome to the Numismatic Museum of Athens, housed in the Iliou Melathron, or the 'Palace of Troy.' This stunning neoclassical mansion was designed by Ernst Ziller in 1880 as the private residence of Heinrich Schliemann, the archaeologist who excavated Troy and Mycenae. The museum houses a collection of over 500,000 coins, medals, weights, and stamps dating from the 6th century BC to the present day. Ancient Greek coins form the core of the collection, illustrating the spread of trade and artistic styles across the Mediterranean.",
        "quiz": {
            "question": "Who was the original owner of the mansion (Iliou Melathron) housing the Numismatic Museum?",
            "options": [
                "Emperor Hadrian",
                "Heinrich Schliemann",
                "Lord Byron",
                "King Otto"
            ],
            "answer": 1,
            "feedback": "Correct! The mansion was built for Heinrich Schliemann, the famous excavator of Troy."
        },
        "reward": {
            "title": "10% off coin replica souvenirs",
            "provider": "Numismatic Museum Shop",
            "code": "NUMISMATIC10"
        }
    },
    {
        "id": 66,
        "name": "Hellenic Motor Museum",
        "lat": 37.9913,
        "lng": 23.7299,
        "image": "images/motor_museum.png",
        "description": "A unique museum displaying a vast collection of classic, vintage, and modern automobiles, charting the history of the wheel.",
        "audioText": "Explore the Hellenic Motor Museum, located near the National Archaeological Museum. Occupying three floors of the modern Capitol Mall building, it showcases a rotation of more than 110 classic and vintage cars. The collection, compiled by Theodore Charagionis, includes antique models from the late 19th century, classic sports cars, and legendary performance vehicles. A spiral ramp inside the building guides visitors through the history of the wheel, starting from ancient stone wheels up to modern racing tires.",
        "quiz": {
            "question": "What does the Hellenic Motor Museum primarily display?",
            "options": [
                "Historic steam trains",
                "Vintage and classic automobiles",
                "Ancient Greek warships",
                "Bicycles and horse carriages"
            ],
            "answer": 1,
            "feedback": "Correct! The museum houses a beautiful private collection of classic and vintage motorcars."
        },
        "reward": {
            "title": "15% off admission tickets",
            "provider": "Hellenic Motor Museum Box Office",
            "code": "WHEELHISTORY"
        }
    },
    {
        "id": 67,
        "name": "National Gallery – Alexandros Soutsos Museum",
        "lat": 37.97556,
        "lng": 23.74917,
        "image": "images/national_gallery.png",
        "description": "The premier art museum of Greece, showcasing an extensive collection of post-Byzantine and modern Greek paintings, sculptures, and drawings.",
        "audioText": "Stand before the newly renovated National Gallery of Greece, founded in 1900. It houses a collection of over 20,000 works of art, including paintings, sculptures, drawings, and prints. The permanent collection focuses on post-Byzantine Greek art, documenting how local painting styles transitioned from religious Byzantine iconography to Western European artistic movements after Greek independence. You will find masterpieces by El Greco, Nikolaos Gyzis, and Yannis Tsarouchis, reflecting the cultural identity of modern Greece.",
        "quiz": {
            "question": "Which famous post-Byzantine master painter has works exhibited in the National Gallery?",
            "options": [
                "El Greco",
                "Michelangelo",
                "Leonardo da Vinci",
                "Vincent van Gogh"
            ],
            "answer": 0,
            "feedback": "Correct! Masterpieces by El Greco (Domenikos Theotokopoulos) are among the most famous works displayed at the National Gallery."
        },
        "reward": {
            "title": "10% off art prints and books",
            "provider": "National Gallery Bookstore",
            "code": "ARTGALLERY10"
        }
    },
    {
        "id": 68,
        "name": "Rhamnous Archaeological Site",
        "lat": 38.2178,
        "lng": 24.0258,
        "image": "images/rhamnous.png",
        "description": "The best-preserved ancient Athenian deme, overlooking the sea, featuring the sanctuary of Nemesis, goddess of divine retribution.",
        "audioText": "Welcome to the archaeological site of Rhamnous. Located in a remote, pristine landscape overlooking the Euboean Gulf, this was one of the most important demes of ancient Attica. Rhamnous is celebrated for its Sanctuary of Nemesis, the goddess of retribution who punished human arrogance. According to legend, the Persians brought a large block of Parian marble, intending to carve a victory monument after conquering Athens. However, after their defeat at Marathon, the sculptor Agoracritus carved this very marble block into the cult statue of Nemesis, showing the goddess's justice. The site also includes well-preserved ancient houses, fortifications, and graves, offering a rare glimpse into a classical provincial town.",
        "quiz": {
            "question": "Which goddess of retribution was primarily worshipped at Rhamnous?",
            "options": [
                "Nemesis",
                "Aphrodite",
                "Artemis",
                "Athena"
            ],
            "answer": 0,
            "feedback": "Correct! Nemesis, the goddess of divine retribution, was the patron deity of Rhamnous."
        },
        "reward": {
            "title": "15% off local history books",
            "provider": "Marathon Cultural Bookstore",
            "code": "NEMESIS15"
        }
    },
    {
        "id": 69,
        "name": "Aigosthena Fortress",
        "lat": 38.1528,
        "lng": 23.2306,
        "image": "images/aigosthena.png",
        "description": "A spectacular ancient fortress with towering stone walls and towers, representing the pinnacle of ancient military architecture.",
        "audioText": "Stand before the massive walls of Aigosthena. Situated on the slopes of Mount Kithairon overlooking the Corinthian Gulf, this is the best-preserved ancient fortress in Greece. Built in the late 4th century BC, Aigosthena served as a crucial border fortress between Attica and Megaris. The fortress features a monumental stone citadel with several tall towers. The main three-story tower stands almost entirely to its original height of nearly 18 meters, featuring openings for archers and ancient catapults. Exploring this remote site shows the incredible engineering skill ancient Greeks brought to defensive warfare.",
        "quiz": {
            "question": "In which century BC was the Aigosthena Fortress constructed?",
            "options": [
                "1st Century BC",
                "4th Century BC",
                "8th Century BC",
                "12th Century BC"
            ],
            "answer": 1,
            "feedback": "Correct! The fortress was built in the late 4th century BC to defend the strategic border."
        },
        "reward": {
            "title": "Free local organic olive oil sample",
            "provider": "Porto Germeno Cooperatives",
            "code": "AIGOSTHENA"
        }
    },
    {
        "id": 70,
        "name": "Sanctuary of Aphaia",
        "lat": 37.7547,
        "lng": 23.5312,
        "image": "images/aphaia.png",
        "description": "A magnificent Doric temple on Aegina Island, forming the ancient Sacred Triangle with the Parthenon and Sounion.",
        "audioText": "Visit the Sanctuary of Aphaia, perched on a pine-covered hill on Aegina Island. Built around 500 BC, this Doric temple is dedicated to Aphaia, a local goddess associated with fertility and agricultural cycles. The temple is famous for its elegant columns made of local limestone, coated with thin marble stucco. Architecturally, it represents the transition between archaic and classical style. Together with the Parthenon in Athens and the Temple of Poseidon at Cape Sounion, the Temple of Aphaia forms an equilateral triangle, known in antiquity as the Sacred Triangle, highlighting the mathematical harmony of ancient Greek sacred geography.",
        "quiz": {
            "question": "Which three temples form the ancient equilateral 'Sacred Triangle' of Attica?",
            "options": [
                "Parthenon, Temple of Poseidon (Sounion), and Temple of Aphaia",
                "Temple of Zeus, Temple of Hephaestus, and Erechtheion",
                "Delphi Temple, Olympia Temple, and Epidaurus Temple"
            ],
            "answer": 0,
            "feedback": "Correct! The Parthenon, Sounion, and Aphaia temples form a perfect geometric alignment."
        },
        "reward": {
            "title": "10% off traditional Aegina Pistachios",
            "provider": "Aegina Artisanal Pistachio Shop",
            "code": "APHAIAEG"
        }
    },
    {
        "id": 71,
        "name": "Lake Vouliagmeni",
        "lat": 37.8075,
        "lng": 23.7856,
        "image": "images/lake_vouliagmeni.png",
        "description": "A natural thermal spa lake fed by underground springs, situated in a collapsed limestone cave along the Athenian Riviera.",
        "audioText": "Welcome to Lake Vouliagmeni, a geological wonder of the Athenian Riviera. This brackish lake is fed by natural thermal springs flowing from deep underground, maintaining a year-round temperature between 22 and 29 degrees Celsius. The lake was formed in prehistoric times when a massive underground hot spring cavern collapsed. The resulting basin is flanked by a high cliff and connects to the sea via underwater tunnels. The lake is home to small Doctor Fish, which gently exfoliate the skin of bathers. It has served as a natural therapeutic spa for centuries.",
        "quiz": {
            "question": "What geological event formed the basin of Lake Vouliagmeni?",
            "options": [
                "The collapse of a massive hot spring cavern roof",
                "A sudden volcanic eruption",
                "An impact from a prehistoric meteor",
                "An artificial excavation by Roman soldiers"
            ],
            "answer": 0,
            "feedback": "Correct! The lake was formed when the roof of a large hot cavern collapsed."
        },
        "reward": {
            "title": "15% off thermal bath entry",
            "provider": "Lake Vouliagmeni Reception",
            "code": "THERMALSPA"
        }
    },
    {
        "id": 72,
        "name": "Marathon Dam",
        "lat": 38.1506,
        "lng": 23.9031,
        "image": "images/marathon_dam.png",
        "description": "The only marble-faced dam in the world, built in the 1920s with white Pentelic marble to secure the water supply of Athens.",
        "audioText": "Observe the Marathon Dam, a landmark of modern engineering and civic pride. Constructed between 1926 and 1929 by the American Ulen company, this dam is unique as the only dam in the world faced entirely with white Pentelic marble—the very same marble used by the ancient Greeks to build the Parthenon. This choice of facing material was made to show respect for the classical heritage of Athens. The dam created Lake Marathon, which served as the capital's main water reservoir for decades, solving a chronic water shortage that had plagued the city since antiquity.",
        "quiz": {
            "question": "What unique material was used to face the Marathon Dam?",
            "options": [
                "White Pentelic marble",
                "Imported red granite",
                "Volcanic basalt blocks",
                "Bronze plates"
            ],
            "answer": 0,
            "feedback": "Correct! The dam is faced with Pentelic marble to echo the classical architecture of Athens."
        },
        "reward": {
            "title": "Free coffee with a panoramic view",
            "provider": "Lake Marathon Café",
            "code": "MARATHONDAM"
        }
    },
    {
        "id": 73,
        "name": "Koutouki Cave",
        "lat": 37.9602,
        "lng": 23.8315,
        "image": "images/koutouki_cave.png",
        "description": "A spectacular subterranean cave in Paiania filled with rich stalactite, stalagmite, and stone curtain formations.",
        "audioText": "Step underground into Koutouki Cave, located on the eastern slopes of Mount Hymettus. Discovered accidentally in 1926 by a local farmer whose goat fell through a hole, this cave consists of a single large chamber measuring approximately 60 by 60 meters. The cave features a dense forest of limestone formations, including towering stalactites, stalagmites, columns, and delicate stone curtains. The cave was developed for tourism in the 1960s, and today modern lighting highlights the natural red, yellow, and white colors of the mineral deposits.",
        "quiz": {
            "question": "How was the Koutouki Cave discovered in 1926?",
            "options": [
                "A farmer's goat fell through a hole in the ground",
                "Archaeologists searching for ancient tombs found it",
                "A military excavation for a bunker revealed it",
                "An earthquake cracked the mountain open"
            ],
            "answer": 0,
            "feedback": "Correct! A lost goat falling through the natural vertical shaft led to the cave's discovery."
        },
        "reward": {
            "title": "10% off regional guides",
            "provider": "Paiania Tourism Office",
            "code": "KOUTOUKI"
        }
    },
    {
        "id": 74,
        "name": "Eleutherae Ancient Fortress",
        "lat": 38.1800,
        "lng": 23.3768,
        "image": "images/eleutherae.png",
        "description": "A spectacular 4th-century BC border fortress guarding the pass between Attica and Boeotia, with well-preserved stone walls and towers.",
        "audioText": "Welcome to the ancient fortress of Eleutherae, also known as Gyphtokastro. Perched on a rocky ridge guarding the main pass between Attica and Boeotia, this fortress stands as a testament to classical military architecture. Built in the 4th century BC, it features walls over two meters thick and is reinforced by multiple rectangular towers. The positioning allowed garrisoned soldiers to monitor troop movements in the valley below. Today, walking along its stone battlements offers an immersive view into the strategic defense networks that protected the ancient city-state of Athens.",
        "quiz": {
            "question": "What strategic pass does the Eleutherae Fortress guard?",
            "options": [
                "The pass between Attica and Boeotia",
                "The entrance to the Peloponnese",
                "The path to Mount Olympus",
                "The shipping channel of Evia"
            ],
            "answer": 0,
            "feedback": "Correct! The fortress was built to control the strategic pass between Attica and Boeotia."
        },
        "reward": {
            "title": "10% off regional wine and snacks",
            "provider": "Cithaeron Mountain Inn",
            "code": "ELEUTHERAE"
        }
    },
    {
        "id": 75,
        "name": "Phyle Fortress",
        "lat": 38.1362,
        "lng": 23.6346,
        "image": "images/phyle.png",
        "description": "A historic fortress on Mount Parnitha where general Thrasybulus gathered democratic forces to overthrow the Thirty Tyrants.",
        "audioText": "Explore the historic ruins of Phyle Fortress, situated on a dramatic cliff on the southern slopes of Mount Parnitha. Built in the 4th century BC, the fortress played a pivotal role in Athenian history. In 404 BC, following Athens' defeat in the Peloponnesian War, a Spartan-backed oligarchy known as the Thirty Tyrants ruled the city. The democratic general Thrasybulus fled to Phyle with a small band of supporters, using this remote fortress as his base to launch a campaign that successfully restored democracy. The site preserves beautiful ashlar masonry and offers panoramic views of the Athenian basin.",
        "quiz": {
            "question": "Which historical leader used Phyle Fortress as his base to restore democracy in 404 BC?",
            "options": [
                "General Thrasybulus",
                "Pericles",
                "Themistocles",
                "Solon"
            ],
            "answer": 0,
            "feedback": "Correct! General Thrasybulus gathered democratic forces here to overthrow the oligarchy."
        },
        "reward": {
            "title": "Free local herb guide brochure",
            "provider": "Parnitha National Park Information Center",
            "code": "DEMOCRACY404"
        }
    },
    {
        "id": 76,
        "name": "Mount Penteli Ancient Quarries",
        "lat": 38.0494,
        "lng": 23.8824,
        "image": "images/penteli_quarries.png",
        "description": "The historic source of white Pentelic marble used to build the Parthenon, featuring the mystical Daveli Cave.",
        "audioText": "Stand in the ancient marble quarries of Mount Penteli, the source of the famous white Pentelic marble. It was from these steep rock faces that ancient stonemasons quarried the marble blocks used to construct the Parthenon, the Propylaea, and countless classical statues. The site includes the Daveli Cave, named after a 19th-century bandit who hid here. The cave entrance features two small Byzantine chapels built directly into the rock face during the Middle Ages. You can still see ancient cut marks in the stone and the slides used to transport massive marble blocks down the mountain.",
        "quiz": {
            "question": "What famous classical building was constructed using marble from the Penteli quarries?",
            "options": [
                "The Parthenon",
                "The Roman Colosseum",
                "The Temple of Artemis at Ephesus",
                "The Knossos Palace"
            ],
            "answer": 0,
            "feedback": "Correct! The Parthenon was built using Pentelic marble, famous for its white color and golden-iron patina."
        },
        "reward": {
            "title": "15% off marble souvenir carvings",
            "provider": "Penteli Stonemasons Association",
            "code": "PENTELIC"
        }
    },
    {
        "id": 77,
        "name": "Piraeus Archaeological Museum & Ship Sheds",
        "lat": 37.9367,
        "lng": 23.6442,
        "image": "images/piraeus_museum.png",
        "description": "A museum housing famous classical bronze statues and the ruins of ancient stone ship sheds where Athenian triremes were parked.",
        "audioText": "Welcome to Piraeus, the historic naval port of classical Athens. The Archaeological Museum of Piraeus houses an extraordinary collection of artifacts, most notably the famous Piraeus Bronzes—including larger-than-life statues of Athena and Apollo discovered accidentally by municipal workers in 1959. Outside the museum, near Zea Harbour, you can explore the remains of the ancient stone ship sheds, or neosoikoi. These sloping slips housed the Athenian navy's triremes, the fast warships that defended democratic Athens and secured its maritime empire.",
        "quiz": {
            "question": "What unique ancient treasures are displayed in the Piraeus Archaeological Museum?",
            "options": [
                "The famous Piraeus Bronze statues",
                "The gold Mask of Agamemnon",
                "The Antikythera Mechanism",
                "The Elgin Marbles"
            ],
            "answer": 0,
            "feedback": "Correct! The museum houses the rare, beautifully preserved classical bronze statues found in Piraeus harbor in 1959."
        },
        "reward": {
            "title": "10% off harbor cruises",
            "provider": "Zea Yachting Agency",
            "code": "PIRAEUSNAVY"
        }
    },
    {
        "id": 78,
        "name": "Schinias National Park",
        "lat": 38.1503,
        "lng": 24.0150,
        "image": "images/schinias.png",
        "description": "A beautiful coastal national park with a rare pine forest, wetland, and the historic marsh where the Persians retreated.",
        "audioText": "Explore Schinias National Park, one of the most important natural wetlands in Attica. The park features a unique coastal forest of stone pine trees running alongside a sandy beach, bordered by a large freshwater marsh. Historically, this area is the site of the Battle of Marathon in 490 BC. According to accounts by Herodotus, the defeated Persian forces retreated into these very wetlands, where they became trapped and suffered heavy losses. Today, the park is a protected sanctuary for hundreds of bird species and a popular spot for windsurfing and nature walks.",
        "quiz": {
            "question": "Which historic battle took place in the area of Schinias National Park?",
            "options": [
                "Battle of Marathon",
                "Battle of Thermopylae",
                "Battle of Salamis",
                "Peloponnesian War"
            ],
            "answer": 0,
            "feedback": "Correct! The Battle of Marathon in 490 BC took place on the plains and marshes of Schinias."
        },
        "reward": {
            "title": "Free kayak rental for one hour",
            "provider": "Schinias Watersports Club",
            "code": "SCHINIASMARSH"
        }
    },
    {
        "id": 79,
        "name": "Saint John the Hunter Monastery",
        "lat": 37.9942,
        "lng": 23.8214,
        "image": "images/st_john_hunter.png",
        "description": "A beautiful 12th-century Byzantine monastery perched on a high ridge of Mount Hymettus, offering spectacular panoramic views.",
        "audioText": "Stand before the Monastery of Saint John the Hunter, also known as Aghios Ioannis Kynigos. Perched on a high ridge on the northern edge of Mount Hymettus, this 12th-century Byzantine monastery has served as a place of spiritual retreat and safety for centuries. Its small church features typical Byzantine brickwork and a dome supported by ancient column drums. The monastery's position offers panoramic views over both the Athens basin to the west and the Mesogeia plain to the east, making it a favorite starting point for hikers exploring the mountain's trails.",
        "quiz": {
            "question": "On which mountain ridge is the Monastery of Saint John the Hunter located?",
            "options": [
                "Mount Hymettus",
                "Mount Penteli",
                "Mount Parnitha",
                "Mount Olympus"
            ],
            "answer": 0,
            "feedback": "Correct! The monastery is perched on the northern ridge of Mount Hymettus."
        },
        "reward": {
            "title": "10% off local organic mountain herbs",
            "provider": "Hymettus Monastic Apothecary",
            "code": "HUNTER12"
        }
    },
    {
        "id": 80,
        "name": "Plato's Academy Archaeological Park",
        "lat": 37.9922,
        "lng": 23.7083,
        "image": "images/academy_athens.png",
        "description": "The physical birthplace of Western higher learning, where Plato founded his famous school in 387 BC.",
        "audioText": "Welcome to Plato's Academy Archaeological Park. Here, in a grove of olive trees outside the ancient walls of Athens, the philosopher Plato established the Academy in 387 BC. It was not a school in the modern sense, but a sanctuary for intellectual exploration and debate. The Academy flourished for over 900 years, attracting scholars from across the Greek world, including Plato's most famous student, Aristotle. Walking through these quiet ruins, you stand at the very foundations of Western philosophy, science, and education.",
        "quiz": {
            "question": "In which year did Plato found the Academy?",
            "options": ["387 BC", "507 BC", "146 BC", "335 BC"],
            "answer": 0,
            "feedback": "Correct! Plato founded the Academy in 387 BC, establishing a center of learning that lasted for centuries."
        },
        "reward": {
            "title": "10% off philosophy books",
            "provider": "Academy Bookstore",
            "code": "PLATO387"
        }
    },
    {
        "id": 81,
        "name": "Kynosarges Archaeological Site",
        "lat": 37.9628,
        "lng": 23.7314,
        "image": "images/aristotle_s_lyceum.jpg",
        "description": "The ancient gymnasium dedicated to Heracles, famous as the birthplace of Cynic Philosophy under Antisthenes.",
        "audioText": "Explore the ruins of Kynosarges, situated south of the Acropolis. In ancient times, this area housed a famous gymnasium dedicated to Heracles, which was reserved for people of mixed Athenian and foreign ancestry. It was here, in the early 4th century BC, that the philosopher Antisthenes began teaching his followers. His teachings laid the foundation for Cynic philosophy, which advocated for a life of virtue lived in accordance with nature, free from societal conventions. The name Kynosarges means 'white dog,' commemorating a myth of a dog stealing a sacrifice.",
        "quiz": {
            "question": "Which philosophical school was founded at Kynosarges?",
            "options": ["Cynic philosophy", "Stoic philosophy", "Epicurean philosophy", "Platonic philosophy"],
            "answer": 0,
            "feedback": "Correct! Antisthenes taught at Kynosarges, leading to the birth of Cynic philosophy."
        },
        "reward": {
            "title": "Free guide booklet on philosophy",
            "provider": "Koukaki Cultural Center",
            "code": "CYNICGYM"
        }
    },
    {
        "id": 82,
        "name": "Tomb of Sophocles",
        "lat": 38.1403,
        "lng": 23.7917,
        "image": "images/first_cemetery_of_athens.jpg",
        "description": "The ancient burial mound of the great tragic playwright Sophocles, situated in his ancestral deme near Varibobi.",
        "audioText": "Stand before the Tomb of Sophocles, located near the modern suburb of Varibobi. This large earth and stone burial mound marks the final resting place of one of ancient Greece's greatest tragic playwrights. Sophocles, who wrote masterpieces like Oedipus Rex and Antigone, died in 406 BC at the age of 90. According to legend, the Spartan general Lysander, who was besieging Athens, allowed the playwright's funeral procession to pass safely through military lines out of respect for his genius. The tomb is a monument to the high status of playwrights in classical society.",
        "quiz": {
            "question": "Which famous play was written by the tragic playwright Sophocles?",
            "options": ["Oedipus Rex", "The Iliad", "The Frogs", "Medea"],
            "answer": 0,
            "feedback": "Correct! Sophocles wrote Oedipus Rex, one of the most famous tragedies in theatrical history."
        },
        "reward": {
            "title": "15% off classic theater tickets",
            "provider": "Athens Municipal Theater",
            "code": "SOPHOCLES15"
        }
    },
    {
        "id": 83,
        "name": "Temple of Apollo Zoster",
        "lat": 37.8139,
        "lng": 23.7744,
        "image": "images/hephaestus.png",
        "description": "A 6th-century BC temple discovered in 1924 under the sand of a popular beach, dedicated to Apollo.",
        "audioText": "Observe the Temple of Apollo Zoster, located on the Astir beach in Vouliagmeni. Constructed in the late 6th century BC, this temple was lost for centuries until it was discovered in 1924 by orphanage children playing in the sand. The sanctuary was dedicated to Apollo Zoster, meaning 'Apollo of the Girdle.' According to mythology, when Leto was pregnant with Apollo and Artemis, she believed she was about to give birth here and loosened her golden girdle. The temple remains a unique example of an ancient sacred site preserved on the modern coastline.",
        "quiz": {
            "question": "What does the name 'Zoster' mean in the temple's title?",
            "options": ["Girdle or belt", "Sun god", "Archer", "Golden chariot"],
            "answer": 0,
            "feedback": "Correct! 'Zoster' means girdle, commemorating where Leto loosened her girdle before giving birth."
        },
        "reward": {
            "title": "Free entry to Astir Beach area",
            "provider": "Astir Beach Reception",
            "code": "APOLLOZOSTER"
        }
    },
    {
        "id": 84,
        "name": "Archaeological Site of Kolona",
        "lat": 37.7492,
        "lng": 23.4242,
        "image": "images/hephaestus.png",
        "description": "The prehistoric acropolis of Aegina Island, dominated by a single standing column of a Temple of Apollo.",
        "audioText": "Visit the archaeological site of Kolona, the historic acropolis of Aegina Island. Occupied continuously since the Neolithic era, the hill contains layers of ancient fortifications and residential streets. Today, the site is dominated by a single, tall limestone column (kolona) standing on the hilltop. This column is the sole survivor of a grand Doric Temple of Apollo built around 510 BC. The hill offers spectacular views of the Saronic Gulf and houses a museum showing Aegina's early prehistoric pottery and bronze treasures.",
        "quiz": {
            "question": "Which god was the main classical temple at Kolona dedicated to?",
            "options": ["Apollo", "Zeus", "Athena", "Poseidon"],
            "answer": 0,
            "feedback": "Correct! The single standing column is the ruin of the Temple of Apollo."
        },
        "reward": {
            "title": "10% off entry to the Kolona Museum",
            "provider": "Kolona Archaeological Site",
            "code": "KOLONAPOLLO"
        }
    },
    {
        "id": 85,
        "name": "Phaleron Delta Ancient Cemetery (Phaleron Captives)",
        "lat": 37.9405,
        "lng": 23.6883,
        "image": "images/first_cemetery_of_athens.jpg",
        "description": "A massive archaic cemetery famous for the discovery of bound skeletons linked to Cylon's ancient conspiracy.",
        "audioText": "Stand near the Phaleron Delta, the location of a massive ancient cemetery dating from the 8th to the 4th centuries BC. The site gained global attention during excavations when archaeologists discovered a set of skeletons bound in iron shackles. Known as the 'Phaleron Captives,' these individuals were executed and buried in mass graves. Historians link these executions to Cylon's failed coup attempt in 632 BC, when supporters of the noble Cylon were slaughtered. The site offers a grim look into political violence and capital punishment in archaic Athens.",
        "quiz": {
            "question": "What historic discovery was made at the Phaleron Delta Cemetery?",
            "options": ["Shackled skeletons (captives)", "A golden royal chariot", "The tomb of Pericles", "The lost library of Aristotle"],
            "answer": 0,
            "feedback": "Correct! The discovery of bound skeletons shed new light on ancient capital punishment and historical events."
        },
        "reward": {
            "title": "Free historical guide leaflet",
            "provider": "Phaleron Library",
            "code": "CAPTIVES"
        }
    },
    {
        "id": 86,
        "name": "Ancient Deme of Halai Aixonides",
        "lat": 37.8394,
        "lng": 23.7558,
        "image": "images/ancient_agora_of_athens.jpg",
        "description": "An archaeological site in Voula showing the marketplace and residential streets of a classical coastal deme.",
        "audioText": "Explore the ruins of the Ancient Deme of Halai Aixonides, located in modern Voula. This classical township was one of the key coastal demes of Athens. Archaeological excavations have uncovered the remains of the deme's marketplace (agora), a small theater, residential houses, and salt-pans. The deme played an important economic role in producing salt and exporting fish to Athens. Walking through these stone foundations highlights the daily life of ancient citizens who lived outside the main city center.",
        "quiz": {
            "question": "What economic product was the deme of Halai Aixonides famous for producing?",
            "options": ["Salt", "Silver coins", "Bronze weapons", "Purple dye"],
            "answer": 0,
            "feedback": "Correct! The coastal deme was known for its salt-pans and fishing industry."
        },
        "reward": {
            "title": "10% off sea-salt seasoning blends",
            "provider": "Voula Organic Market",
            "code": "HALAISALT"
        }
    },
    {
        "id": 87,
        "name": "The Dema Wall",
        "lat": 38.0694,
        "lng": 23.6931,
        "image": "images/parthenon.png",
        "description": "A massive 4.5 km long ancient fortification wall built in the 4th century BC to defend the pass between Athens and Boeotia.",
        "audioText": "Observe the Dema Wall, a monumental defensive fortification spanning the narrow pass between Mount Aegaleo and Mount Parnitha. Constructed in the 4th century BC, this stone and earth wall is 4.5 kilometers long. It was designed to block invading armies from Boeotia or the Peloponnese from marching directly into the plain of Athens. The wall features multiple towers, gates, and crenellations. It stands as a prime example of Athens' investment in large-scale frontier fortifications to protect its democratic state from regional rivals.",
        "quiz": {
            "question": "What was the primary purpose of the Dema Wall?",
            "options": [
                "To block invading armies from entering the Athenian plain",
                "To serve as an aqueduct to supply water",
                "To mark the border of a sacred temple sanctuary",
                "To act as a track for ancient athletic races"
            ],
            "answer": 0,
            "feedback": "Correct! The Dema Wall was a fortification built to defend the northern mountain pass."
        },
        "reward": {
            "title": "Free hiking map of the Fyli region",
            "provider": "Fyli Municipality Information Office",
            "code": "DEMAWALL"
        }
    },
    {
        "id": 88,
        "name": "Agrileza Silver Workshops",
        "lat": 37.6744,
        "lng": 24.015,
        "image": "images/olympian_zeus.png",
        "description": "The ancient industrial workshops where Lavrion silver ore was washed and processed by slaves in antiquity.",
        "audioText": "Welcome to the Agrileza ancient silver workshops, located in the Lavreotiki national park. Here, the silver ore mined from the earth was crushed and washed using stone tables. The washing tables allowed the heavy silver-bearing lead particles to settle while the lighter stone was washed away. This industrial process was carried out under brutal conditions by thousands of enslaved laborers. The wealth generated here funded the expansion of the Athenian navy and built the monumental buildings of Athens' Golden Age, linking the glory of democracy to the exploitation of slave labor.",
        "quiz": {
            "question": "What industrial process was carried out at the Agrileza workshops?",
            "options": ["Washing and separating silver ore", "Minting silver coins", "Smelting iron weapons", "Carving marble columns"],
            "answer": 0,
            "feedback": "Correct! The workshops used flat stone tables to wash and concentrate silver ore."
        },
        "reward": {
            "title": "15% off Lavrion Mine tours",
            "provider": "Lavreotiki Historical Tours",
            "code": "AGRILEZA15"
        }
    },
    {
        "id": 89,
        "name": "The Diateichisma Wall",
        "lat": 37.9708,
        "lng": 23.7203,
        "image": "images/parthenon.png",
        "description": "A late 4th-century BC defensive wall built along the ridges of the Pnyx and Nymphs hills to shorten Athens' defense perimeter.",
        "audioText": "Walk along the remnants of the Diateichisma Wall, situated along the ridges of the Pnyx, Nymphs, and Muses hills. Built in the late 4th century BC following the Macedonian victory at Chaeronea, this fortification wall was constructed to shorten the defensive perimeter of Athens. By cutting across these hills, the Athenians could defend their city with fewer soldiers. The wall was built using massive stone blocks and featured defensive towers. Today, its foundations are visible along the popular walking paths of Philopappou Hill.",
        "quiz": {
            "question": "Why was the Diateichisma Wall constructed?",
            "options": [
                "To shorten the city's defensive perimeter",
                "To supply spring water to the Acropolis",
                "To build a grand stadium for races",
                "To create a marketplace divider"
            ],
            "answer": 0,
            "feedback": "Correct! The wall was built to consolidate defenses and shorten the city walls."
        },
        "reward": {
            "title": "10% off coffee with a view",
            "provider": "Philopappou Hill Kiosk",
            "code": "DIATEICHISMA"
        }
    },
    {
        "id": 90,
        "name": "Cave of Pan",
        "lat": 38.1561,
        "lng": 23.9458,
        "image": "images/koutouki_cave.png",
        "description": "A mystical cave of stalactites near Marathon where worship of Pan began after the Battle of Marathon.",
        "audioText": "Step into the Cave of Pan, located in the gorge of Oinoi near Marathon. This natural stalactite cave became a sacred sanctuary dedicated to the goat-god Pan. According to legend, during the Battle of Marathon in 490 BC, Pan caused 'panic' among the invading Persian soldiers, helping the Greeks secure their victory. In gratitude, the Athenians established his cult in this cave. The cave features a narrow entrance leading to multiple chambers filled with stalactites, where ancient worshippers left clay lamps and figurines.",
        "quiz": {
            "question": "Which god was worshipped in this stalactite cave near Marathon?",
            "options": ["Pan, the goat-god", "Zeus, the king of gods", "Apollo, the sun god", "Poseidon, the sea god"],
            "answer": 0,
            "feedback": "Correct! The cave was dedicated to Pan to thank him for his help in the Battle of Marathon."
        },
        "reward": {
            "title": "Free organic goat cheese snack with lunch",
            "provider": "Marathon Country Tavern",
            "code": "PANIC490"
        }
    },
    {
        "id": 91,
        "name": "Sanctuary of Zeus Ombrios",
        "lat": 37.9483,
        "lng": 23.8156,
        "image": "images/olympian_zeus.png",
        "description": "A mountain-top sanctuary on Hymettus where ancient farmers offered sacrifices to Zeus for rain.",
        "audioText": "Climb to the Sanctuary of Zeus Ombrios, located on a high ridge of Mount Hymettus. The name Ombrios means 'the Rainbringer.' In ancient times, this high peak was a sacred site where Athenian farmers came during droughts to pray, make vows, and offer sacrifices to Zeus, asking him to send rain for their crops. Archaeologists have discovered thousands of ancient pottery vessels and offering tables at this site, illustrating the deep connection between ancient religion and agricultural survival.",
        "quiz": {
            "question": "What does the epithet 'Ombrios' mean in Zeus's title at this sanctuary?",
            "options": ["The Rainbringer", "The Thunderer", "The Earthshaker", "The Protector"],
            "answer": 0,
            "feedback": "Correct! Zeus Ombrios was worshipped specifically as the sender of rain."
        },
        "reward": {
            "title": "10% off Mount Hymettus wildflower honey",
            "provider": "Hymettus Honey Stall",
            "code": "RAINBRINGER"
        }
    },
    {
        "id": 92,
        "name": "Valanaris Waterfall",
        "lat": 38.0347,
        "lng": 23.9786,
        "image": "images/lake_vouliagmeni.png",
        "description": "A beautiful, hidden natural waterfall and stream creating a lush green oasis on the slopes of Penteli.",
        "audioText": "Discover the Valanaris Waterfall, a hidden natural gem located on the eastern slopes of Mount Penteli near Drafi. Fed by a small mountain stream, the water falls over a six-meter cliff, forming a natural pool surrounded by trees. The name Valanaris comes from the oak trees (valanidies) that once covered the area. This stream flows year-round, creating a lush green oasis in the dry Attica landscape that serves as a sanctuary for local birds, frogs, and tortoises.",
        "quiz": {
            "question": "Where does the name 'Valanaris' originate from?",
            "options": ["From the oak trees (valanidies)", "From an ancient stream god", "From a marble quarry owner", "From a Byzantine general"],
            "answer": 0,
            "feedback": "Correct! The name honors the oak forest that historically covered the mountain."
        },
        "reward": {
            "title": "Free bottled organic juice",
            "provider": "Drafi Oasis Kiosk",
            "code": "VALANARIS"
        }
    },
    {
        "id": 93,
        "name": "Kaisariani Botanical Garden",
        "lat": 37.961,
        "lng": 23.7972,
        "image": "images/aristotle_s_lyceum.jpg",
        "description": "A conservation park on Mount Hymettus dedicated to preserving native Greek herbs and wildflowers.",
        "audioText": "Stroll through the Kaisariani Botanical Garden, situated next to the historic monastery on Mount Hymettus. Established to preserve the native flora of Attica, the garden contains a vast collection of aromatic, medicinal, and historic plants, including wild thyme, sage, oregano, and rare orchids. In antiquity, the honey produced on Mount Hymettus from these aromatic herbs was famous across the Mediterranean. The garden offers peaceful walking paths and serves as a living museum of Greek botanical heritage.",
        "quiz": {
            "question": "What product from Mount Hymettus was famous in antiquity due to its aromatic herbs?",
            "options": ["Wildflower honey", "White marble", "Red wine", "Olive oil"],
            "answer": 0,
            "feedback": "Correct! The honey of Hymettus was famous for its flavor, derived from the mountain's aromatic herbs."
        },
        "reward": {
            "title": "10% off local organic herb blends",
            "provider": "Kaisariani Herb Shop",
            "code": "HERBGARDEN"
        }
    },
    {
        "id": 94,
        "name": "Temple of Artemis Agrotera",
        "lat": 37.9697,
        "lng": 23.7369,
        "image": "images/hephaestus.png",
        "description": "The ruined foundations of an ancient temple overlooking the Ilissos River where the goddess of the hunt was worshipped.",
        "audioText": "Observe the ruins of the Temple of Artemis Agrotera, located in the Mets district near the Panathenaic Stadium. Constructed in the 5th century BC, this temple was dedicated to Artemis of the Hunt (Agrotera). According to historical accounts, the Athenians sacrificed 500 goats at this temple each year to thank Artemis for her aid in their victory over the Persians at the Battle of Marathon. The temple was built in the elegant Ionic style, but today only its foundations remain visible.",
        "quiz": {
            "question": "Which battle's victory did the Athenians celebrate with annual sacrifices at this temple?",
            "options": ["Battle of Marathon", "Battle of Salamis", "Battle of Thermopylae", "Peloponnesian War"],
            "answer": 0,
            "feedback": "Correct! The sacrifices commemorated the victory at Marathon in 490 BC."
        },
        "reward": {
            "title": "Free organic herbal tea with breakfast",
            "provider": "Mets District Café",
            "code": "AGROTERA"
        }
    },
    {
        "id": 95,
        "name": "Choragic Monument of Nikias",
        "lat": 37.9703,
        "lng": 23.7251,
        "image": "images/theatre_dionysus.png",
        "description": "A monumental gateway on the south slope of the Acropolis constructed by Nikias to celebrate a theatrical victory.",
        "audioText": "Stand near the ruins of the Choragic Monument of Nikias, located on the south slope of the Acropolis. Built in 320 BC by the wealthy sponsor Nikias, this monument celebrated his victory in a dramatic contest at the Theatre of Dionysus. It was designed like a small temple with Doric columns. In the 3rd century AD, following a destructive invasion, the monument was dismantled, and its marble blocks were reused to construct the Beulé Gate, which served as the fortified entrance to the Acropolis.",
        "quiz": {
            "question": "What fortified Acropolis structure was built using the dismantled stones of this monument?",
            "options": ["The Beulé Gate", "The Propylaea", "The Erechtheion", "The Parthenon steps"],
            "answer": 0,
            "feedback": "Correct! The stones of Nikias's monument were reused to construct the defensive Beulé Gate."
        },
        "reward": {
            "title": "10% off entry to the Acropolis slopes",
            "provider": "South Slope Ticket Office",
            "code": "NIKIAS320"
        }
    },
    {
        "id": 96,
        "name": "Temple of Apollo Erithaseos",
        "lat": 38.0833,
        "lng": 23.8167,
        "image": "images/hephaestus.png",
        "description": "The archaeological remains of a rustic sanctuary of Apollo nestled in the northern suburb of Kifisia.",
        "audioText": "Visit the site of the Temple of Apollo Erithaseos in Kifisia. Nestled in a wooded valley, this ancient sanctuary was dedicated to Apollo in his role as a rustic deity of harvest and agriculture. Archaeologists have uncovered the temple foundations, ancient boundary stones, and inscriptions recording religious laws. The site demonstrates how the worship of major Olympic gods extended into the rural demes of Attica, providing local farmers with a place of worship and community.",
        "quiz": {
            "question": "What role did Apollo serve at this rustic sanctuary in Kifisia?",
            "options": ["Deity of harvest and agriculture", "God of naval warfare", "Patron of theater and comedy", "Messenger of the underworld"],
            "answer": 0,
            "feedback": "Correct! Apollo was worshipped here as a rural protector of crops and harvest."
        },
        "reward": {
            "title": "Free standard coffee with pastry",
            "provider": "Kifisia Plaza Café",
            "code": "ERITHASEOS"
        }
    },
    {
        "id": 97,
        "name": "Archaeological Museum of Megara",
        "lat": 37.995,
        "lng": 23.3422,
        "image": "images/national_archaeological_museum.jpg",
        "description": "A museum displaying ancient sculptures, gravestones, and votive offerings from the independent city-state of Megara.",
        "audioText": "Enter the Archaeological Museum of Megara, housed in a historic 19th-century building in Megara town. The museum displays discoveries from the ancient city-state of Megara and its surroundings, spanning from the geometric period to Roman times. The exhibits include marble sculptures, detailed grave monuments, and clay figurines. Look for the marble victory monuments and pottery illustrating Megara's history as a major colonial power that founded cities like Byzantium.",
        "quiz": {
            "question": "Which famous historic city did colonizers from Megara establish?",
            "options": ["Byzantium (later Constantinople)", "Rome", "Alexandria", "Carthage"],
            "answer": 0,
            "feedback": "Correct! Megarian colonists founded Byzantium in 657 BC."
        },
        "reward": {
            "title": "10% off museum guide booklets",
            "provider": "Megara Museum Gift Shop",
            "code": "MEGARAMUSEUM"
        }
    },
    {
        "id": 98,
        "name": "Monastery of Kleiston",
        "lat": 38.1256,
        "lng": 23.6303,
        "image": "images/erechtheion.png",
        "description": "A historic 11th-century Byzantine monastery built on the edge of a deep gorge on Mount Parnitha.",
        "audioText": "Explore the Monastery of Kleiston, located on a cliff overlooking the deep gorge of Gouras on Mount Parnitha. Founded in the late 11th century, this historic monastery was named Kleiston, meaning 'the enclosed,' due to its dramatic location surrounded by high mountains. The monastery features a small Byzantine church, a central courtyard, and fortified walls that protected it from raids. It offers a tranquil escape and acts as a historic starting point for hikes into the national park.",
        "quiz": {
            "question": "Around which century was the Monastery of Kleiston founded?",
            "options": ["11th Century AD", "5th Century BC", "15th Century AD", "19th Century AD"],
            "answer": 0,
            "feedback": "Correct! The monastery was established during the middle Byzantine era in the 11th century."
        },
        "reward": {
            "title": "Free guide brochure of Mount Parnitha trails",
            "provider": "Kleiston Information Kiosk",
            "code": "KLEISTON11"
        }
    },
    {
        "id": 99,
        "name": "Tower of Markellos",
        "lat": 37.7472,
        "lng": 23.4286,
        "image": "images/tower_winds.png",
        "description": "A pink Venetian watchtower on Aegina Island that served as the seat of the first Greek government.",
        "audioText": "Stand before the Tower of Markellos in Aegina town. This distinctive pink-colored watchtower was constructed in the late 17th century by the Venetians to defend the harbor from pirate attacks. In 1826, during the Greek War of Independence, the tower served as the headquarters and seat of the first Greek revolutionary government under Ioannis Kapodistrias, before Athens was liberated. Today, the tower stands as a historical monument to the birth of the modern Greek state.",
        "quiz": {
            "question": "What administrative role did the Tower of Markellos serve in 1826?",
            "options": [
                "The seat of the first Greek revolutionary government",
                "A vault for storing silver bullion",
                "The private residence of King Otto",
                "A naval customs station"
            ],
            "answer": 0,
            "feedback": "Correct! The tower served as the capital seat for the first Greek government under Kapodistrias."
        },
        "reward": {
            "title": "10% off local traditional sweets",
            "provider": "Aegina Port Bakery",
            "code": "MARKELLOS"
        }
    },
    {
        "id": 100,
        "name": "National Historical Museum",
        "lat": 37.9775,
        "lng": 23.7328,
        "image": "images/national_historical_museum.jpg",
        "description": "Housed in the Old Parliament House, this museum covers Greek history from the fall of Constantinople in 1453 through the 20th century.",
        "audioText": "Step inside the Old Parliament House, home to the National Historical Museum. Established in 1882, the museum documents the modern history of the Greek nation. The collection includes weapons, personal items of revolutionary heroes, traditional costumes, and documents from the Byzantine period, the Ottoman era, and the Greek War of Independence of 1821. Standing in the grand assembly hall where historic debates took place, you are surrounded by the legacy of the people who shaped modern Greek democracy.",
        "quiz": {
            "question": "Which King of Greece was assassinated in Thessaloniki, and has his ceremonial sword displayed in this museum?",
            "options": [
                "King George I",
                "King Otto",
                "King Constantine I",
                "King Paul"
            ],
            "answer": 0,
            "feedback": "Correct! The ceremonial sword of King George I, who was assassinated in 1913, is one of the museum's prominent relics."
        },
        "reward": {
            "title": "10% off museum guidebooks",
            "provider": "National Historical Museum Shop",
            "code": "PARLIAMENT10"
        }
    },
    {
        "id": 101,
        "name": "National Observatory of Athens",
        "lat": 37.9733,
        "lng": 23.7183,
        "image": "images/national_observatory.jpg",
        "description": "Situated on the Hill of the Nymphs, this is the oldest research institution in Greece and the Balkans, founded in 1842.",
        "audioText": "Welcome to the National Observatory of Athens, located on the Hill of the Nymphs. Founded in 1842 by the Greek benefactor Georgios Sinas and designed by Danish architect Theophil Hansen, this neoclassical building served as the birthplace of modern scientific research in Greece. The Hill of the Nymphs has astronomical links dating back to antiquity, as it was the location where Meton made some of the earliest recorded observations of the summer solstice in 432 BC. Today, the observatory remains a center of research, housing historical telescopes, astronomical maps, and clocks.",
        "quiz": {
            "question": "Which hill is the National Observatory of Athens situated upon?",
            "options": [
                "Hill of the Nymphs",
                "Lycabettus Hill",
                "Areopagus Hill",
                "Philopappos Hill"
            ],
            "answer": 0,
            "feedback": "Correct! The observatory is situated on the historic Hill of the Nymphs, which has hosted astronomical study since ancient times."
        },
        "reward": {
            "title": "15% off evening telescope tours",
            "provider": "Observatory Box Office",
            "code": "OBSERVATORY15"
        }
    },
    {
        "id": 102,
        "name": "Technopolis (Gazi)",
        "lat": 37.9783,
        "lng": 23.7144,
        "image": "images/technopolis.jpg",
        "description": "A major industrial museum and cultural hub housed in a former 19th-century gasworks factory in the Gazi district.",
        "audioText": "Explore Technopolis in the Gazi district. This major cultural venue occupies a former coal gas factory built in 1857 under Ottoman rule, which supplied Athens with gas light for over 120 years. Reopened as a museum in 1999, the factory retains its original industrial equipment, high chimneys, gasifiers, and iron reservoirs. The site stands as a preservation of industrial architecture, showing how old factories can be converted into modern cultural hubs.",
        "quiz": {
            "question": "What type of utility did the Gazi factory supply to Athens before its conversion?",
            "options": [
                "Coal gas for street lighting and heating",
                "Silver minting for national currency",
                "Steam locomotives for railways",
                "Textile weaving for military uniforms"
            ],
            "answer": 0,
            "feedback": "Correct! The Gazi factory produced coal gas to illuminate the streets of Athens starting in the 19th century."
        },
        "reward": {
            "title": "10% off exhibition tickets",
            "provider": "Technopolis Entrance Desk",
            "code": "GAZITECH10"
        }
    },
    {
        "id": 103,
        "name": "Roman Baths at Zappeion",
        "lat": 37.9705,
        "lng": 23.7366,
        "image": "images/roman_baths_zappeion.jpg",
        "description": "A well-preserved Roman bath complex excavated during the construction of the Athens Metro, located outside the National Gardens.",
        "audioText": "Look at the excavated ruins of the Roman Baths by the Zappeion. Discovered in the late 19th century and fully excavated during the building of the Athens Metro in 1996, this complex dates to the 3rd century AD. The bathhouse featured a typical Roman layout with a cold room (frigidarium), warm room (tepidarium), and hot room (caldarium), heated by underfloor brick pillars known as hypocausts. The baths were situated outside the ancient city walls, serving locals and travelers visiting the nearby Olympeion.",
        "quiz": {
            "question": "During which modern infrastructure project were these Roman baths excavated?",
            "options": [
                "The construction of the Athens Metro",
                "The expansion of the National Gardens",
                "The building of the Zappeion Exhibition Hall",
                "The laying of the city tramway line"
            ],
            "answer": 0,
            "feedback": "Correct! The baths were fully uncovered and preserved during excavations for the Athens Metro."
        },
        "reward": {
            "title": "15% off spa wellness packages",
            "provider": "Athens Hammam Baths",
            "code": "ROMANSPAPACK"
        }
    },
    {
        "id": 104,
        "name": "Stoa Poikile (Painted Stoa)",
        "lat": 37.9758,
        "lng": 23.7224,
        "image": "images/stoa_poikile.jpg",
        "description": "Located in the Ancient Agora, this painted colonnade is the birthplace of Stoic philosophy founded by Zeno of Citium.",
        "audioText": "Welcome to the site of the Stoa Poikile, or Painted Stoa, built in the 5th century BC. This public colonnade was famous for the paintings that decorated its walls, showing historical and mythological battles like the Battle of Marathon. Around 300 BC, the philosopher Zeno of Citium gathered his students here to debate ideas. Because they met at the Stoa, his followers became known as the Stoics. The Stoa Poikile is thus the birthplace of Stoic philosophy, which emphasizes virtue, reason, and self-control.",
        "quiz": {
            "question": "Which major philosophical school held its classes at the Painted Stoa?",
            "options": [
                "Stoicism",
                "Epicureanism",
                "Skepticism",
                "Cynicism"
            ],
            "answer": 0,
            "feedback": "Correct! Stoicism takes its name from this very Stoa where Zeno of Citium taught."
        },
        "reward": {
            "title": "20% off philosophy book titles",
            "provider": "Agora Book Center",
            "code": "STOICISM300"
        }
    },
    {
        "id": 105,
        "name": "Odeon of Agrippa",
        "lat": 37.9751,
        "lng": 23.7229,
        "image": "images/odeon_agrippa.jpg",
        "description": "A large ancient concert hall built in the Ancient Agora by Marcus Vipsanius Agrippa, famous for its surviving colossal giant statues.",
        "audioText": "Stand before the colossal statues of the Odeon of Agrippa. Constructed around 15 BC by the Roman general Marcus Vipsanius Agrippa, this massive two-story concert hall could seat 1,000 spectators and featured a timber roof. The roof collapsed in the 2nd century AD, and the building was rebuilt with a smaller capacity. During the reconstruction, colossal pillars carved as giants with fish tails (Tritons) and human figures were added to the entrance facade, three of which still stand today.",
        "quiz": {
            "question": "What mythical figures are sculpted on the colossal pillars remaining at the entrance of this Odeon?",
            "options": [
                "Giants and Tritons (sea gods)",
                "Caryatids and Centaurs",
                "Sphinxes and Griffins",
                "Gorgons and Harpies"
            ],
            "answer": 0,
            "feedback": "Correct! The massive figures represent giants and sea-god Tritons, which supported the porch roof."
        },
        "reward": {
            "title": "10% off concert hall entries",
            "provider": "Athens Symphony Hall",
            "code": "AGRIPPAPLAY"
        }
    },
    {
        "id": 106,
        "name": "Agia Irene Church (Aeolou)",
        "lat": 37.9769,
        "lng": 23.7289,
        "image": "images/agia_irene.jpg",
        "description": "The historic church on Aeolou street that served as the metropolitan cathedral of Athens before the construction of the Metropolis.",
        "audioText": "Step into Agia Irene Church, located on Aeolou street. Constructed between 1847 and 1850 by the architect Lysandros Kaftanzoglou on the site of a ruined Byzantine church, Agia Irene is a masterpiece of neoclassical church design. In the early years of the modern Greek kingdom, it served as the metropolitan cathedral of Athens. It hosted key political and religious ceremonies, including the coronation of King Otto and the funeral of the national hero Theodoros Kolokotronis.",
        "quiz": {
            "question": "Which historic event was hosted in Agia Irene church in 1843?",
            "options": [
                "The coronation of King Otto",
                "The declaration of the Greek Revolution",
                "The signing of the Treaty of Lausanne",
                "The launch of the first modern Olympic Games"
            ],
            "answer": 0,
            "feedback": "Correct! Agia Irene served as the royal church and hosted the coronation celebrations of King Otto."
        },
        "reward": {
            "title": "Free Greek coffee upgrade",
            "provider": "Aeolou Street Bakery",
            "code": "AGIAIRENE"
        }
    },
    {
        "id": 107,
        "name": "Hadrian’s Aqueduct (Dexameni)",
        "lat": 37.9791,
        "lng": 23.7420,
        "image": "images/hadrian_aqueduct.jpg",
        "description": "The remaining stone archway at the base of Lycabettus Hill that marked the reservoir entry point of Hadrian's 2nd-century Roman aqueduct.",
        "audioText": "Observe the Roman stone archway at Dexameni Square. Built by the Roman Emperor Hadrian and completed under Antoninus Pius in 140 AD, this was the entrance to the Hadrianic Aqueduct's reservoir. The aqueduct carried fresh spring water from Mount Parnitha to the city, running entirely underground for over 20 kilometers. It was so well designed that it supplied Athens with clean drinking water for centuries, showing the engineering skill of Roman city planners.",
        "quiz": {
            "question": "Which mountain did Hadrian's Aqueduct collect water from?",
            "options": [
                "Mount Parnitha",
                "Mount Olympus",
                "Mount Hymettus",
                "Mount Penteli"
            ],
            "answer": 0,
            "feedback": "Correct! The aqueduct collected fresh water from springs on Mount Parnitha, routing it underground to Athens."
        },
        "reward": {
            "title": "Free organic juice bottle",
            "provider": "Dexameni Bistro Cafe",
            "code": "HADRIANWATER"
        }
    },
    {
        "id": 108,
        "name": "Sacred Gate (Kerameikos)",
        "lat": 37.9786,
        "lng": 23.7167,
        "image": "images/sacred_gate.jpg",
        "description": "The gateway from which the Sacred Way ran, leading initiates from Athens directly to the Eleusinian Mysteries.",
        "audioText": "Explore the ruins of the Sacred Gate in the Kerameikos. Built in the 5th century BC as part of the Themistoclean city wall, this gate served as the starting point of the Sacred Way, or Iera Odos. Each year, a procession of initiates walked along this road from Athens to the Sanctuary of Demeter in Eleusis to participate in the Eleusinian Mysteries, which offered initiates hope for a happy afterlife. The gate is situated next to the Eridanos riverbed, which still flows through the site today.",
        "quiz": {
            "question": "Which ancient road started at the Sacred Gate in Kerameikos?",
            "options": [
                "The Sacred Way (Iera Odos)",
                "The Panathenaic Way",
                "The Roman Appian Way",
                "The Marathon Highway"
            ],
            "answer": 0,
            "feedback": "Correct! The Sacred Way connected the city of Athens directly with the mysteries sanctuary in Eleusis."
        },
        "reward": {
            "title": "10% off entry tickets",
            "provider": "Kerameikos Archaeological Museum",
            "code": "SACREDGATE"
        }
    },
    {
        "id": 109,
        "name": "Temple of Ares (Agora)",
        "lat": 37.9754,
        "lng": 23.7226,
        "image": "images/temple_ares.jpg",
        "description": "A classical temple dedicated to the god of war, which was completely dismantled and moved from rural Pallene to the Agora during Augustus's reign.",
        "audioText": "Look at the foundations of the Temple of Ares in the Agora. This temple was originally constructed around 440 BC in the rural deme of Pallene. During the reign of the Roman Emperor Augustus, the entire temple was dismantled, and each marble block was numbered. The blocks were moved to the Agora and reconstructed here, where it was rededicated to Ares, the god of war, and Augustus's grandson. This reflects the Roman practice of relocating classic monuments to urban centers.",
        "quiz": {
            "question": "How did the Temple of Ares arrive in the Ancient Agora?",
            "options": [
                "It was dismantled and relocated from rural Pallene",
                "It was built from scratch using marble imported from Rome",
                "It was a gift from the citizens of Sparta",
                "It was originally a temple to Athena converted to Ares"
            ],
            "answer": 0,
            "feedback": "Correct! The temple was moved block-by-block from Pallene to the Agora under Roman direction."
        },
        "reward": {
            "title": "15% off historic tour guides",
            "provider": "Agora Center Tours",
            "code": "TEMPLEOFWAR"
        }
    },
    {
        "id": 110,
        "name": "Church of Agioi Asomatoi",
        "lat": 37.9778,
        "lng": 23.7214,
        "image": "images/agioi_asomatoi.jpg",
        "description": "A 11th-century Byzantine church in Thiseio, known for its traditional cross-in-square brick design and Islamic-inspired decorative friezes.",
        "audioText": "Stand before the Church of Agioi Asomatoi in Thiseio. Constructed in the late 11th century, this small church dedicated to the bodiless angels is a beautiful example of Byzantine architecture. The walls feature typical Athenian brickwork, and the external decorations include clay tiles inspired by Arabic calligraphy, showing cultural connections with the wider Mediterranean. The church was restored in 1960 to remove later additions, returning it to its original medieval form.",
        "quiz": {
            "question": "Which cultural style inspired the decorative clay tiles on the church's exterior?",
            "options": [
                "Arabic calligraphy (Kufic-inspired decoration)",
                "Roman mosaic portraits",
                "Ancient Egyptian hieroglyphs",
                "Gothic pointed arch carvings"
            ],
            "answer": 0,
            "feedback": "Correct! The Byzantine builders incorporated Islamic-inspired Kufic designs into the clay brick decorations."
        },
        "reward": {
            "title": "Free historic guide brochure",
            "provider": "Thiseio District Tourism",
            "code": "ASOMATOI"
        }
    },
    {
        "id": 111,
        "name": "Tomb of the Unknown Soldier (Relief)",
        "lat": 37.9754,
        "lng": 23.7363,
        "image": "images/unknown_soldier_relief.jpg",
        "description": "The central military monument at Syntagma, depicting a dying ancient Greek hoplite, dedicated to all soldiers who died for Greece.",
        "audioText": "Observe the carved relief behind the Tomb of the Unknown Soldier in Syntagma Square. Unveiled in 1932, the relief sculpture depicts a dying ancient Greek hoplite wearing a helmet and carrying a shield, connecting modern struggles for independence with classical history. The monument is inscribed with phrases from Pericles's Funeral Oration, reminding visitors of the sacrifice made by those who defended their freedom.",
        "quiz": {
            "question": "What type of warrior is depicted in the central relief carving of this monument?",
            "options": [
                "An ancient Greek hoplite",
                "A Byzantine knight",
                "A modern revolutionary soldier",
                "A Roman gladiator"
            ],
            "answer": 0,
            "feedback": "Correct! The relief depicts a dying classical hoplite, linking ancient and modern military sacrifices."
        },
        "reward": {
            "title": "10% off traditional Greek mezze",
            "provider": "Syntagma Square Bistro",
            "code": "HOPLITETOMB"
        }
    },
    {
        "id": 112,
        "name": "Tomb of Heinrich Schliemann",
        "lat": 37.9625,
        "lng": 23.7388,
        "image": "images/schliemann_tomb.jpg",
        "description": "The monumental tomb in the First Cemetery designed like a Trojan temple, honoring the pioneer archaeologist who excavated Troy.",
        "audioText": "Visit the tomb of Heinrich Schliemann in the First Cemetery of Athens. Designed by the German architect Ernst Ziller in 1892, this marble mausoleum resembles a classical temple. The marble frieze running around the tomb depicts scenes from Homer's Iliad and Schliemann's excavations at Troy and Mycenae. Schliemann, a pioneer of field archaeology, spent his life searching for historical evidence behind ancient myths, discovering the ruins of Troy and the Mycenaean golden treasures.",
        "quiz": {
            "question": "Which ancient archaeological site did Heinrich Schliemann famously discover and excavate?",
            "options": [
                "Troy (and Mycenae)",
                "Pompeii",
                "Alexandria",
                "Knossos Palace"
            ],
            "answer": 0,
            "feedback": "Correct! Schliemann excavated Troy and Mycenae, confirming the historical reality behind Homer's poems."
        },
        "reward": {
            "title": "15% off archaeology booklets",
            "provider": "Bookshop of First Cemetery",
            "code": "SCHLIEMANN"
        }
    },
    {
        "id": 113,
        "name": "Tomb of Theodoros Kolokotronis",
        "lat": 37.9627,
        "lng": 23.7380,
        "image": "images/kolokotronis_tomb.jpg",
        "description": "The final resting place of the supreme commander of the Greek forces in the Greek War of Independence of 1821.",
        "audioText": "Stand before the tomb of Theodoros Kolokotronis, one of the most prominent leaders of the Greek War of Independence against the Ottoman Empire. Known as the 'Old Man of the Morea,' Kolokotronis led Greek forces to crucial victories, such as the Battle of Dervenakia. His marble tomb is topped by a bronze bust of the general wearing his iconic helmet. He remains a national symbol of liberty and military strategy.",
        "quiz": {
            "question": "What nickname was Theodoros Kolokotronis known by during the War of Independence?",
            "options": [
                "The Old Man of the Morea (Peloponnese)",
                "The Liberator of Athens",
                "The General of the Sea",
                "The Knight of Mystras"
            ],
            "answer": 0,
            "feedback": "Correct! Kolokotronis was affectionately called 'The Old Man of the Morea' due to his leadership in the Peloponnese."
        },
        "reward": {
            "title": "Free historic postcard pack",
            "provider": "Mets Cultural Association",
            "code": "KOLOKOTRONIS"
        }
    },
    {
        "id": 114,
        "name": "Roman Bath of the Ancient Agora",
        "lat": 37.9748,
        "lng": 23.7235,
        "image": "images/roman_bath_agora.jpg",
        "description": "A 5th-century Roman bathhouse located next to the Stoa of Attalos, showcasing underfloor heating systems.",
        "audioText": "Observe the ruins of the Roman Bath inside the Ancient Agora. Dating to the late Roman and early Byzantine period in the 5th century AD, this bathhouse shows how public life evolved in Athens. You can see the circular brick pillars of the hypocaust, which supported the raised floor. Hot air from a furnace was circulated underneath to heat the water and the steam rooms, providing citizens with a warm social space.",
        "quiz": {
            "question": "What was the purpose of the circular brick pillars visible in these ruins?",
            "options": [
                "To support a raised floor and circulate hot air (hypocaust)",
                "To store public grain supplies",
                "To serve as columns holding up a grand temple roof",
                "To act as defensive towers against barbarian raids"
            ],
            "answer": 0,
            "feedback": "Correct! The brick pillars supported the floor, creating a hypocaust space for heating the baths."
        },
        "reward": {
            "title": "10% off traditional Greek herbal tea",
            "provider": "Agora Herb Kiosk",
            "code": "HYPOCAUST"
        }
    },
    {
        "id": 115,
        "name": "Lysicrates Square (Street of Tripods)",
        "lat": 37.9712,
        "lng": 23.7301,
        "image": "images/lysicrates_square.jpg",
        "description": "The historic street leading from the Agora to the Theater of Dionysus, once lined with monuments displaying theatrical awards.",
        "audioText": "Walk through Lysicrates Square in Plaka. This square lies along the ancient Street of the Tripods, which was the main road connecting the Agora with the Theatre of Dionysus. In ancient times, wealthy citizens who sponsored winning theatrical plays were awarded bronze tripods. They displayed these trophies on top of elaborate marble monuments built along this street, of which the Choragic Monument of Lysicrates is the sole survivor.",
        "quiz": {
            "question": "What did the ancient monuments built along the Street of the Tripods traditionally display?",
            "options": [
                "Bronze tripod trophies awarded for theatrical victories",
                "Statues of winning Olympic athletes",
                "Sacrificial altars to the twelve Olympic gods",
                "Public laws carved in bronze tablets"
            ],
            "answer": 0,
            "feedback": "Correct! The street was lined with choragic monuments built to display theatrical trophies."
        },
        "reward": {
            "title": "15% off Greek tragedy dinners",
            "provider": "Plaka Theater Bistro",
            "code": "TRIPODSTREET"
        }
    },
    {
        "id": 116,
        "name": "Tower of the Winds (Clepsydra Inlet)",
        "lat": 37.9741,
        "lng": 23.7270,
        "image": "images/tower_winds_clepsydra.jpg",
        "description": "The outdoor water-pipe ruins that routed spring water directly down from the Acropolis to power the internal water clock inside the Tower.",
        "audioText": "Look at the circular annex on the south side of the Tower of the Winds. This structure served as the water reservoir for the internal water clock, or clepsydra. Fresh water was routed down through an aqueduct from the Klepsydra spring on the Acropolis. The water flowed into the reservoir and fed the clock mechanism, which measured time by water displacement on days when the sun did not shine on the external sundials.",
        "quiz": {
            "question": "How did the internal clock inside the Tower of the Winds keep time on cloudy days?",
            "options": [
                "Using a water-powered clock (clepsydra)",
                "Using a mechanical pendulum",
                "Using a large sand hourglass",
                "Using oil-burning lamps"
            ],
            "answer": 0,
            "feedback": "Correct! The Tower of the Winds housed a water clock fed by spring water from the Acropolis."
        },
        "reward": {
            "title": "Free coffee with dessert purchase",
            "provider": "Agora Clock Cafe",
            "code": "CLEPSYDRA"
        }
    },
    {
        "id": 117,
        "name": "Areopagus Hill (Paul's Sermon Plaque)",
        "lat": 37.9723,
        "lng": 23.7239,
        "image": "images/areopagus_plaque.jpg",
        "description": "The bronze plaque mounted at the base of Mars Hill, containing the exact Greek transcript of the Apostle Paul's famous sermon in 51 AD.",
        "audioText": "Observe the bronze plaque installed at the base of Areopagus Hill. The plaque contains the text of the Apostle Paul's Sermon on the Unknown God, as recorded in the Biblical book of Acts, chapter 17. During his visit to Athens in 51 AD, Paul debated with Stoic and Epicurean philosophers in the Agora, who invited him to speak at the high court on the Areopagus. His speech introduced Christianity to the intellectual center of the Greek world.",
        "quiz": {
            "question": "Which Biblical passage is transcribed on the bronze plaque at Mars Hill?",
            "options": [
                "Acts chapter 17 (Paul's Sermon to the Athenians)",
                "Gospel of Matthew (The Sermon on the Mount)",
                "Letter to the Galatians",
                "Revelation chapter 1"
            ],
            "answer": 0,
            "feedback": "Correct! The plaque contains the Greek text of Acts 17, detailing Paul's address to the Athenians."
        },
        "reward": {
            "title": "Free organic tea with muffin",
            "provider": "Mars Hill Corner Cafe",
            "code": "PAULSERMON"
        }
    },
    {
        "id": 118,
        "name": "National Garden (Roman Mosaic Floor)",
        "lat": 37.9725,
        "lng": 23.7378,
        "image": "images/national_garden_mosaic.jpg",
        "description": "The exposed remains of an ancient Roman villa's mosaic floor, discovered inside the National Gardens.",
        "audioText": "Stroll inside the National Gardens to find the ruins of a Roman villa's mosaic floor. Dating to the 4th century AD, the mosaic was discovered during the landscaping of the royal gardens in the 19th century. The floor features complex geometric patterns and circular motifs typical of late Roman domestic architecture. The discovery shows that this quiet park area was once a wealthy residential district outside the historic Athens city walls.",
        "quiz": {
            "question": "What type of structure did the mosaic floor in the National Garden originally belong to?",
            "options": [
                "A wealthy Roman residential villa",
                "A public temple to Apollo",
                "A military guard post",
                "An ancient olive oil refinery"
            ],
            "answer": 0,
            "feedback": "Correct! The mosaic floor belonged to the central courtyard of a luxurious Roman villa."
        },
        "reward": {
            "title": "Free espresso upgrade",
            "provider": "National Garden Kiosk",
            "code": "GARDENMOSAIC"
        }
    },
    {
        "id": 119,
        "name": "Pnyx Hill Orator's Bema",
        "lat": 37.9717,
        "lng": 23.7196,
        "image": "images/pnyx_bema.jpg",
        "description": "The three-stepped stone speaker's platform from which Pericles and Demosthenes addressed the assembly of democratic Athens.",
        "audioText": "Stand before the orator's platform, or Bema, on Pnyx Hill. Carved directly out of the living rock, this three-stepped podium served as the stage where the citizens of democratic Athens stood to address the assembly, or Ekklesia. From this stone platform, famous statesmen like Themistocles, Pericles, and Demosthenes delivered speeches that shaped the history of Greece. The platform faces the Acropolis, allowing speakers and audiences to view the temple of their patron goddess.",
        "quiz": {
            "question": "What is the ancient Greek term for the stone orator's platform on the Pnyx?",
            "options": [
                "Bema",
                "Agora",
                "Stoa",
                "Propylaea"
            ],
            "answer": 0,
            "feedback": "Correct! The 'Bema' was the designated speaking platform for public addresses in democratic assemblies."
        },
        "reward": {
            "title": "15% off historic tour tickets",
            "provider": "Athens Democratic Tours",
            "code": "PNYXBEMA"
        }
    },
    {
        "id": 120,
        "name": "Museum of the Ancient Agora",
        "lat": 37.9752,
        "lng": 23.7238,
        "image": "images/agora_museum.jpg",
        "description": "Located inside the reconstructed Stoa of Attalos, this museum contains artifacts directly related to Athenian democracy, such as voting tokens and lottery machines.",
        "audioText": "Step inside the Museum of the Ancient Agora, housed within the magnificent reconstructed Stoa of Attalos. The museum's collection is unique because it focuses directly on the daily civic life and democratic institutions of ancient Athens. Here you can see bronze ballots used by jurors to cast their votes, clay water clocks used to time speeches in court, and the kleroterion—a stone machine used to randomly select jurors and magistrates. These artifacts offer concrete evidence of how the Greeks turned abstract democratic ideals into physical, practical tools of government.",
        "quiz": {
            "question": "What random-allotment device, used for selecting jurors by lottery, is displayed in this museum?",
            "options": [
                "Kleroterion",
                "Clepsydra",
                "Ostrakon",
                "Pnyx dial"
            ],
            "answer": 0,
            "feedback": "Correct! The Kleroterion was a stone slab with slots used with colored balls to randomly assign citizens to public offices and juries."
        },
        "reward": {
            "title": "10% off museum guidebooks",
            "provider": "Agora Museum Bookstore",
            "code": "KLEROTERION"
        }
    },
    {
        "id": 121,
        "name": "Monument of the Eponymous Heroes",
        "lat": 37.9752,
        "lng": 23.7220,
        "image": "images/eponymous_heroes.jpg",
        "description": "A public monument in the Agora featuring statues representing the ten tribes of Athens. It served as the official public noticeboard for legislative proposals and military drafts.",
        "audioText": "Observe the long stone base of the Monument of the Eponymous Heroes. In ancient Athens, the reformer Cleisthenes divided the citizens into ten tribes, each named after a legendary hero. This monument displayed bronze statues of those ten heroes. Its primary function was civic; the sides of the monument served as the official public noticeboard. Proposed laws, court notices, and military conscription lists were written on whitened wooden boards and placed here. Every citizen walking through the Agora would stop by this monument to read the latest state news.",
        "quiz": {
            "question": "What civic function did the Monument of the Eponymous Heroes serve?",
            "options": [
                "Official public noticeboard for laws and military drafts",
                "A treasury vault for the city's gold reserves",
                "A temple for worshipping the founding kings",
                "A marketplace for trading olive oil"
            ],
            "answer": 0,
            "feedback": "Correct! It was the central point where citizens read official notices, proposed laws, and draft lists."
        },
        "reward": {
            "title": "10% off city walking tour guides",
            "provider": "Athens Democracy Tours",
            "code": "EPONYMOUS"
        }
    },
    {
        "id": 122,
        "name": "Street of Tombs (Kerameikos)",
        "lat": 37.9782,
        "lng": 23.7163,
        "image": "images/street_of_tombs.jpg",
        "description": "The main ceremonial avenue in the ancient cemetery, lined with grand marble monuments and relief sculptures erected by wealthy Athenian families.",
        "audioText": "Walk along the Street of Tombs in the Kerameikos. This was the main avenue of the city's ancient cemetery, reserved for the graves of Athens' wealthiest and most prominent citizens. As you walk, observe the large marble monuments, or steles, decorated with reliefs showing the deceased in everyday scenes—often saying farewell to their families or holding cherished items. These monuments were not only memorials but also status symbols, demonstrating the wealth, lineage, and civic contributions of the families who erected them.",
        "quiz": {
            "question": "What type of monumental stone slabs were used to mark graves on this street?",
            "options": [
                "Steles (relief-carved stone slabs)",
                "Obelisks",
                "Pyramids",
                "Sarcophagi vaults"
            ],
            "answer": 0,
            "feedback": "Correct! 'Steles' are upright stone slabs carved with reliefs and inscriptions to mark graves."
        },
        "reward": {
            "title": "15% off Kerameikos guide booklets",
            "provider": "Kerameikos Bookshop",
            "code": "STREETTOMBS"
        }
    },
    {
        "id": 123,
        "name": "Tzistarakis Mosque",
        "lat": 37.9760,
        "lng": 23.7259,
        "image": "images/tzistarakis_mosque.jpg",
        "description": "An 18th-century Ottoman mosque in Monastiraki Square. According to legend, the builder used a column from the Temple of Olympian Zeus for its plaster, bringing a curse of famine.",
        "audioText": "Look at the Tzistarakis Mosque, which dominates Monastiraki Square. Built in 1759 by the Ottoman governor of Athens, Mustapha Agha Tzistarakis, the mosque represents the city's Ottoman heritage. A local legend states that the governor destroyed an ancient column—either from the Temple of Olympian Zeus or the Library of Hadrian—to burn it for lime to make the mosque's plaster. The destruction of ancient monuments was considered sacrilege, and when a plague broke out shortly after, the citizens blamed the governor's actions, leading to his removal.",
        "quiz": {
            "question": "Which ancient monument's column was supposedly destroyed to make lime for this mosque?",
            "options": [
                "The Temple of Olympian Zeus (or Hadrian's Library)",
                "The Parthenon temple",
                "The Erechtheion porch",
                "Hadrian's Arch"
            ],
            "answer": 0,
            "feedback": "Correct! The governor was accused of destroying a column from the Temple of Olympian Zeus (or Hadrian's Library) to make lime, causing local outrage."
        },
        "reward": {
            "title": "10% off traditional Greek sweets",
            "provider": "Monastiraki Traditional Bakery",
            "code": "TZISTARAKIS"
        }
    },
    {
        "id": 124,
        "name": "Adrianou Street (Plaka)",
        "lat": 37.9743,
        "lng": 23.7288,
        "image": "images/adrianou_street.jpg",
        "description": "The oldest street in Athens still in continuous use, maintaining the exact same layout and alignment since antiquity.",
        "audioText": "Stroll down Adrianou Street, the commercial spine of the Plaka district. This street is historically significant as the oldest continuously used street in Athens, keeping its ancient layout and direction for over 2,500 years. In antiquity, it linked the residential quarters of Athens with the Agora and the Academy. Today, walking along Adrianou, you follow in the footsteps of ancient merchants, philosophers, and citizens who have traversed this pathway through the centuries.",
        "quiz": {
            "question": "What makes Adrianou Street unique among Athenian roadways?",
            "options": [
                "It is the oldest street in continuous use",
                "It was built entirely of white marble",
                "It is the widest avenue in the historic center",
                "It was designed as an ancient racetrack"
            ],
            "answer": 0,
            "feedback": "Correct! Adrianou Street has maintained its exact alignment and function since the classical era."
        },
        "reward": {
            "title": "10% off local handmade items",
            "provider": "Plaka Souvenir Station",
            "code": "ADRIANOU"
        }
    },
    {
        "id": 125,
        "name": "Syntagma Metro Station Exhibition",
        "lat": 37.9754,
        "lng": 23.7358,
        "image": "images/syntagma_metro.jpg",
        "description": "A museum-like exhibition inside the metro station displaying a geological cross-section of Athens and artifacts found during subway construction.",
        "audioText": "Enter Syntagma Metro Station and observe the large archaeological exhibition on display. During the construction of the Athens Metro system in the 1990s, workers excavated thousands of historic artifacts. Inside the station, a massive glass wall displays a cross-section of the city's soil layers, showing ancient tombs, water pipes, and walls from different periods, ranging from the classical era to the Byzantine age. It represents a literal timeline of Athenian history preserved under the modern city.",
        "quiz": {
            "question": "What is showcased behind the large glass panel inside the Syntagma Metro station?",
            "options": [
                "A geological cross-section showing archaeological layers and ancient graves",
                "A collection of modern paintings depicting the Olympics",
                "The engine of the first Greek steam train",
                "A map of the ancient sewer networks"
            ],
            "answer": 0,
            "feedback": "Correct! The station displays a preserved stratigraphic wall showing the layers of soil and ruins accumulated over millennia."
        },
        "reward": {
            "title": "Free public transit map booklet",
            "provider": "Syntagma Info Kiosk",
            "code": "METROARCHAE"
        }
    },
    {
        "id": 126,
        "name": "Pikionis Landscaping (Philopappos)",
        "lat": 37.9698,
        "lng": 23.7210,
        "image": "images/pikionis_path.jpg",
        "description": "The beautifully paved stone pathways and rest areas winding up the hills, designed in the 1950s by renowned architect Dimitris Pikionis using recycled masonry.",
        "audioText": "Walk along the stone pathways winding up Philopappos Hill and the slopes of the Acropolis. Designed in the 1950s by the prominent Greek architect Dimitris Pikionis, this landscaping project is a masterpiece of organic architecture. Pikionis paved the paths using stone blocks, marble fragments, and ceramic tiles salvaged from demolished neoclassical houses of Athens, weaving them into designs that harmonize with the natural landscape. The paths are designed to encourage slow, thoughtful walks, offering viewpoints of the ancient ruins.",
        "quiz": {
            "question": "What material did architect Dimitris Pikionis use to pave the pathways on Philopappos Hill?",
            "options": [
                "Recycled stone, marble, and tile fragments from demolished houses",
                "Modern smooth asphalt and concrete blocks",
                "Imported red granite from Egypt",
                "Laminated wooden planks"
            ],
            "answer": 0,
            "feedback": "Correct! Pikionis created a collage of recycled stones and marbles from demolished buildings to link history with modern landscaping."
        },
        "reward": {
            "title": "Free architecture postcard",
            "provider": "Philopappos Rest Pavilion",
            "code": "PIKIONIS"
        }
    },
    {
        "id": 127,
        "name": "Lycabettus Open Air Theatre",
        "lat": 37.9825,
        "lng": 23.7445,
        "image": "images/lycabettus_theater.jpg",
        "description": "A modern amphitheater constructed in 1965 in a former quarry at the summit, designed by Takis Zenetos and famous for hosting legendary concerts.",
        "audioText": "Look at the Lycabettus Open Air Theatre, situated in a former quarry near the summit of Lycabettus Hill. Built in 1965 at the initiative of actress Anna Synodinou and designed by the modernist architect Takis Zenetos, the theater features a lightweight steel structure that resembles a shell nestled in the rocks. It became one of Athens' premier cultural venues, hosting historic concerts by Greek and international musicians, and offers a panoramic backdrop of the city below.",
        "quiz": {
            "question": "In what type of site was the Lycabettus Open Air Theatre constructed?",
            "options": [
                "An inactive stone quarry",
                "An ancient pine grove",
                "A natural volcanic crater",
                "An old military ammunition dump"
            ],
            "answer": 0,
            "feedback": "Correct! The theater was built inside a hollow quarry at the top of the hill, creating a dramatic acoustic setting."
        },
        "reward": {
            "title": "10% off concert merchandise",
            "provider": "Lycabettus Summit Shop",
            "code": "ZENETOS65"
        }
    },
    {
        "id": 128,
        "name": "Sanctuary of Zeus Polieus (Acropolis)",
        "lat": 37.9721,
        "lng": 23.7278,
        "image": "images/zeus_polieus.jpg",
        "description": "The open-air sanctuary on the Acropolis where the ancient ritual of Bouphonia (the murder of the ox) took place.",
        "audioText": "Observe the cut foundations of the Sanctuary of Zeus Polieus, located at the eastern end of the Acropolis. This was an open-air sanctuary dedicated to Zeus as the protector of the city. The site is famous for the ritual of Bouphonia, which took place during the Diipolia festival. In this ceremony, an ox ate grain from the altar of Zeus and was sacrificed. The priest who struck the ox immediately dropped his axe and fled. In a subsequent symbolic trial, the axe itself was found guilty of murder and thrown into the sea, illustrating the sacredness of the animal's life.",
        "quiz": {
            "question": "Which object was put on trial and found guilty of murder during the Bouphonia ritual?",
            "options": [
                "The sacrificial axe used to strike the ox",
                "The priest who ran away",
                "The altar where the grain was placed",
                "The crown of the temple priest"
            ],
            "answer": 0,
            "feedback": "Correct! The axe was blamed, tried, and thrown into the sea to absolve the citizens of guilt for the animal's death."
        },
        "reward": {
            "title": "15% off Acropolis history books",
            "provider": "Acropolis Slope Bookshop",
            "code": "BOUPHONIA"
        }
    },
    {
        "id": 129,
        "name": "Tomb of Melina Mercouri",
        "lat": 37.9631,
        "lng": 23.7385,
        "image": "images/melina_mercouri_tomb.jpg",
        "description": "The final resting place of the legendary Greek actress, activist, and Minister of Culture who pioneered the campaign for the return of the Parthenon Marbles.",
        "audioText": "Stand before the tomb of Melina Mercouri, located in the First Cemetery of Athens. Mercouri was a world-famous actress who starred in films like 'Never on Sunday' before entering politics. As the first female Minister of Culture of Greece, she initiated the international campaign demanding the return of the Parthenon Marbles from the British Museum to Athens. Her tomb is visited by admirers from around the world who honor her contribution to Greece's cultural heritage.",
        "quiz": {
            "question": "Which cultural campaign did Melina Mercouri initiate as Minister of Culture?",
            "options": [
                "The return of the Parthenon Marbles from the British Museum",
                "The funding of the first modern Olympic stadium",
                "The excavation of the Ancient Agora",
                "The restoration of the Byzantine monasteries"
            ],
            "answer": 0,
            "feedback": "Correct! She began the campaign for the return of the Parthenon sculptures, declaring that they are the essence of Greek identity."
        },
        "reward": {
            "title": "10% off entry tickets",
            "provider": "Athens Open Air Theater",
            "code": "MELINAMARBLE"
        }
    },
    {
        "id": 130,
        "name": "Plato's Academy Sacred House",
        "lat": 37.9926,
        "lng": 23.7088,
        "image": "images/academy_sacred_house.jpg",
        "description": "The ruins of an Early Helladic house discovered inside the park of Plato's Academy, showing habitation long before the school was founded.",
        "audioText": "Explore the ruins of the Sacred House inside the archaeological park of Plato's Academy. Excavated in the mid-20th century, this building dates to the Early Helladic period, around 2500 BC. The structure, featuring mud-brick walls and a hearth, shows that this district of Athens was inhabited long before Plato established his Academy here in 387 BC. The site was preserved by later generations as a sacred space, showing the long history of the area.",
        "quiz": {
            "question": "Around which millennium BC was the Sacred House at Plato's Academy built?",
            "options": [
                "3rd Millennium BC (around 2500 BC)",
                "1st Millennium BC (around 500 BC)",
                "1st Millennium AD (around 800 AD)",
                "2nd Millennium BC (around 1500 BC)"
            ],
            "answer": 0,
            "feedback": "Correct! The house dates to the Bronze Age in the 3rd Millennium BC, showing early habitation on the academy grounds."
        },
        "reward": {
            "title": "Free philosophy booklet",
            "provider": "Academy Park Information Center",
            "code": "SACREDHOUSE"
        }
    },
    {
        "id": 131,
        "name": "Temple of Apollo Patroos",
        "lat": 37.9753,
        "lng": 23.7222,
        "image": "images/apollo_patroos.jpg",
        "description": "A small Ionic temple in the Agora dedicated to Apollo as the father and protector of the Ionian Greeks.",
        "audioText": "Observe the foundations of the Temple of Apollo Patroos, built in the 4th century BC. This temple was dedicated to Apollo in his role as 'Patroos,' meaning father or ancestor. According to myth, Apollo was the father of Ion, the founder of the Ionian race, to which the Athenians belonged. The temple housed a famous cult statue of Apollo playing the lyre, sculpted by Euphranor. It was an important site where citizens registered their citizenship, linking civic identity with religious worship.",
        "quiz": {
            "question": "What did the title 'Patroos' signify when applied to Apollo at this temple?",
            "options": [
                "Apollo as the father and ancestor of the Ionian Greeks",
                "Apollo as the god of poetry and music",
                "Apollo as the healer of plagues",
                "Apollo as the archer of light"
            ],
            "answer": 0,
            "feedback": "Correct! 'Patroos' refers to Apollo as the mythical ancestor and father of the Athenians."
        },
        "reward": {
            "title": "10% off traditional Greek mezze",
            "provider": "Apollo Tavern Plaka",
            "code": "PATROOS"
        }
    },
    {
        "id": 132,
        "name": "Roman Agora East Propylon",
        "lat": 37.9745,
        "lng": 23.7268,
        "image": "images/roman_agora_east.jpg",
        "description": "The monumental eastern gateway of the Roman Agora, constructed of grey Hymettian marble in the Ionic style.",
        "audioText": "Stand before the ruins of the East Propylon, the eastern monumental entrance to the Roman Agora. Built in the late 1st century BC under Roman patronage, this gateway was constructed using grey marble from the nearby Mount Hymettus. The propylon featured four Ionic columns and led directly to the commercial street that connected the market with the rest of the Roman city. It stands in contrast to the western Gate of Athena Archegetis, showing the Roman combination of Greek architectural styles.",
        "quiz": {
            "question": "What type of marble was used to construct the columns of the East Propylon?",
            "options": [
                "Grey Hymettian marble",
                "White Pentelic marble",
                "Green Karystian marble",
                "Red Peloponnesian marble"
            ],
            "answer": 0,
            "feedback": "Correct! The gateway was built using grey marble from Mount Hymettus, known for its distinctive color."
        },
        "reward": {
            "title": "15% off regional travel guides",
            "provider": "East Agora Tourism Desk",
            "code": "HYMETTIAN"
        }
    },
    {
        "id": 133,
        "name": "Shrine of the Nymphs (Hill of Nymphs)",
        "lat": 37.9730,
        "lng": 23.7180,
        "image": "images/shrine_nymphs.jpg",
        "description": "The ancient sanctuary cut into the bedrock near the observatory, where inscriptions dedicated to the Nymphs and Demeter were found.",
        "audioText": "Explore the rock-cut niches of the Shrine of the Nymphs, located near the National Observatory. This ancient outdoor sanctuary was cut into the limestone bedrock of the hill during the classical period. Archaeologists found inscriptions carved on the rock dedicated to the Nymphs, the nature deities of water and forests, and to Demeter, the goddess of agriculture. The rock-cut niches were used by worshippers to place small statues, clay offerings, and oil lamps, showing the simple nature of rural worship.",
        "quiz": {
            "question": "What were the rock-cut niches at this sanctuary used for by ancient worshippers?",
            "options": [
                "To place small statues, clay offerings, and oil lamps",
                "To store public grain and olive oil",
                "To lock up prisoners of war",
                "To channel clean drinking water"
            ],
            "answer": 0,
            "feedback": "Correct! Worshippers placed their offerings (votive statues, lamps, coins) inside these niches to honor the Nymphs."
        },
        "reward": {
            "title": "Free organic tea with pastry",
            "provider": "Nymphs Hill Cafe",
            "code": "NYMPHSHRINE"
        }
    },
    {
        "id": 134,
        "name": "First Cemetery (Tomb of Andreas Syngros)",
        "lat": 37.9622,
        "lng": 23.7392,
        "image": "images/syngros_tomb.jpg",
        "description": "The monumental neoclassical mausoleum built for the wealthy banker and philanthropist Andreas Syngros, designed by Ernst Ziller.",
        "audioText": "Observe the mausoleum of Andreas Syngros, located in the First Cemetery of Athens. Built in the late 19th century and designed by the prominent German architect Ernst Ziller, this marble tomb is a masterpiece of neoclassical funerary architecture. Syngros was a wealthy banker and philanthropist who funded major civic projects in Athens, including the completion of the Corinth Canal and the building of hospitals. The tomb, designed like a classical temple, reflects the wealth and architectural tastes of late 19th-century Athens.",
        "quiz": {
            "question": "Which architect designed this neoclassical mausoleum for Andreas Syngros?",
            "options": [
                "Ernst Ziller",
                "Theophil Hansen",
                "Lysandros Kaftanzoglou",
                "Dimitris Pikionis"
            ],
            "answer": 0,
            "feedback": "Correct! Ernst Ziller, who designed many of Athens' iconic neoclassical mansions, designed this temple-like tomb."
        },
        "reward": {
            "title": "Free historic map brochure",
            "provider": "First Cemetery Visitors Desk",
            "code": "ZILLERTOMB"
        }
    },
    {
        "id": 135,
        "name": "Panagia Grigoroussa Church",
        "lat": 37.9751,
        "lng": 23.7275,
        "image": "images/panagia_grigoroussa.jpg",
        "description": "A historic Byzantine church in Plaka, dedicated to the Virgin Mary 'who answers prayers quickly.'",
        "audioText": "Step inside the Church of Panagia Grigoroussa in Plaka. Rebuilt in the 19th century on the foundations of an 11th-century Byzantine church, its name translates to 'the quick-answering' Virgin Mary, reflecting the local belief that she grants prayers rapidly. The church is a quiet sanctuary in the middle of Plaka, preserving historic icons and murals that show the evolution of Orthodox art from the Byzantine era to the modern period.",
        "quiz": {
            "question": "What does the nickname 'Grigoroussa' translate to in English?",
            "options": [
                "She who answers quickly / Swift helper",
                "The Queen of Angels",
                "The protector of sailors",
                "The silent guardian"
            ],
            "answer": 0,
            "feedback": "Correct! The name refers to the quickness with which the Virgin Mary is believed to answer prayers."
        },
        "reward": {
            "title": "Free traditional Greek coffee",
            "provider": "Grigoroussa Bakery Plaza",
            "code": "GRIGOROUSSA"
        }
    },
    {
        "id": 136,
        "name": "University of Athens Great Hall",
        "lat": 37.9812,
        "lng": 23.7340,
        "image": "images/university_hall.jpg",
        "description": "The grand ceremonial hall inside the neoclassical University, decorated with gold-leaf ornaments and murals depicting history.",
        "audioText": "Look at the Great Hall, or Aula, of the University of Athens. Situated inside the central building designed by Christian Hansen, the hall is the ceremonial heart of the university. The interior features gold-leaf details, ionic columns, and a large painted frieze depicting the rebirth of sciences and arts in Greece. The hall has hosted key political events, academic ceremonies, and speeches by visiting international leaders, representing the intellectual heritage of modern Greece.",
        "quiz": {
            "question": "What is the name of the main ceremonial assembly hall of the University?",
            "options": [
                "The Aula",
                "The Agora Assembly",
                "The Metroum",
                "The Propylaea"
            ],
            "answer": 0,
            "feedback": "Correct! The 'Aula' is the official name of the university's grand ceremonial hall."
        },
        "reward": {
            "title": "10% off university publications",
            "provider": "University Bookstore",
            "code": "UNIVERSITYAULA"
        }
    },
    {
        "id": 137,
        "name": "Mycenaean Golden Gallery",
        "lat": 37.9890,
        "lng": 23.7325,
        "image": "images/mycenaean_gallery.jpg",
        "description": "Room 4 of the National Archaeological Museum, containing the treasure trove of gold masks, cups, and daggers excavated by Schliemann.",
        "audioText": "Welcome to the Mycenaean Golden Gallery, Room 4 of the National Archaeological Museum. This gallery houses the treasures of the Mycenaean civilization, which dominated Greece in the late Bronze Age. The centerpiece of the collection is the golden 'Mask of Agamemnon,' discovered in a shaft grave at Mycenae by Heinrich Schliemann in 1876. The gallery also displays gold cups, bronze daggers decorated with hunting scenes, and jewelry, showing the artistry of this ancient civilization.",
        "quiz": {
            "question": "Which famous golden mask is the centerpiece of the Mycenaean Gallery?",
            "options": [
                "The Mask of Agamemnon",
                "The Mask of Priam",
                "The Mask of Theseus",
                "The Mask of Minos"
            ],
            "answer": 0,
            "feedback": "Correct! The 'Mask of Agamemnon' is the most famous Bronze Age gold artifact displayed in the gallery."
        },
        "reward": {
            "title": "10% off museum guidebooks",
            "provider": "Museum Bookstore",
            "code": "AGAMEMNON"
        }
    },
    {
        "id": 138,
        "name": "Cape Sounion Geological Cliffs",
        "lat": 37.6498,
        "lng": 24.0242,
        "image": "images/sounion_cliffs.jpg",
        "description": "The sheer cliffs of Cape Sounion dropping into the Aegean, where King Aegeus leapt to his death, giving the Aegean Sea its name.",
        "audioText": "Stand at the edge of the cliffs of Cape Sounion. These sheer limestone cliffs drop 60 meters into the water below. According to Greek myth, King Aegeus of Athens stood on these cliffs watching for the return of his son Theseus, who had sailed to Crete to fight the Minotaur. Theseus forgot to change his ship's black sails to white to signal his victory. Believing his son was dead, Aegeus threw himself from these cliffs into the water, which was named the Aegean Sea in his memory.",
        "quiz": {
            "question": "According to Greek mythology, who leapt from these cliffs to give the Aegean Sea its name?",
            "options": [
                "King Aegeus",
                "Theseus",
                "King Minos",
                "Icarus"
            ],
            "answer": 0,
            "feedback": "Correct! King Aegeus threw himself from the Sounion cliffs, naming the sea after himself."
        },
        "reward": {
            "title": "15% off sunset dinner orders",
            "provider": "Sounion Sunset Tavern",
            "code": "AEGEANSEA"
        }
    },
    {
        "id": 139,
        "name": "Tomb of Sophia Schliemann",
        "lat": 37.9624,
        "lng": 23.7387,
        "image": "images/sophia_schliemann_tomb.jpg",
        "description": "Located beside her husband Heinrich's tomb, it honors the Greek philanthropist and archaeologist who worked alongside him.",
        "audioText": "Visit the tomb of Sophia Schliemann, located beside her husband Heinrich's monument. Born Sophia Engastromenos in Athens, she married Heinrich Schliemann and worked alongside him during his excavations at Troy and Mycenae, famously wearing the ancient golden jewels discovered there. Following his death, she continued to fund archaeological research and supported charitable organizations in Athens, contributing to the development of public health and education.",
        "quiz": {
            "question": "Who is buried alongside Heinrich Schliemann in his neoclassical tomb?",
            "options": [
                "His wife, Sophia Schliemann",
                "His architect Ernst Ziller",
                "His patron Georgios Sinas",
                "His assistant Wilhelm Dorpfeld"
            ],
            "answer": 0,
            "feedback": "Correct! His wife Sophia Schliemann is buried with him, honoring her partnership in his archaeological career."
        },
        "reward": {
            "title": "Free historic guide brochure",
            "provider": "First Cemetery Info Office",
            "code": "SOPHIATOMB"
        }
    },
    {
        "id": 140,
        "name": "Church of Agia Marina (Nymphs Hill)",
        "lat": 37.9737,
        "lng": 23.7185,
        "image": "images/agia_marina.jpg",
        "description": "A picturesque church on the Hill of the Nymphs, built partially over an ancient cave-sanctuary containing rock-cut inscriptions and 13th-century murals.",
        "audioText": "Stand before the Church of Agia Marina on the Hill of the Nymphs. The present-day church, built in 1922, features a distinctive dome and stone architecture. However, its most unique feature lies inside: it is constructed directly over a much older cave-sanctuary cut into the rock. This ancient cave was used in Byzantine times as a chapel, and archaeologists have discovered 13th-century religious murals painted on the damp rock walls. Long before that, the cave and surrounding hill were associated with ancient rural fertility deities, showing how sacred spots were reused through the centuries.",
        "quiz": {
            "question": "What type of ancient site was the Church of Agia Marina built over?",
            "options": [
                "An ancient cave-sanctuary",
                "A Roman military barracks",
                "A subterranean storage vault",
                "An ancient silver refinery"
            ],
            "answer": 0,
            "feedback": "Correct! The church incorporates a medieval Byzantine cave chapel cut directly into the hill's rock."
        },
        "reward": {
            "title": "10% off local guidebook guides",
            "provider": "Nymphs Hill Gift Shop",
            "code": "AGIAMARINA"
        }
    },
    {
        "id": 141,
        "name": "Bath House of the Winds",
        "lat": 37.9745,
        "lng": 23.7276,
        "image": "images/bath_house_winds.jpg",
        "description": "The only surviving public bathhouse of Athens from the Ottoman period, operating from the 15th century until 1965, located near the Roman Agora.",
        "audioText": "Explore the Bath House of the Winds, situated in Plaka. Built in the late 15th century shortly after the Ottoman conquest, this is the only public bathhouse, or hammam, that survives in Athens. It followed the typical three-stage Roman bath layout: a changing room, a warm room, and a hot room heated by underfloor furnaces. The hammam was a vital social center for both men and women during the Ottoman and early modern periods, operating continuously for nearly 500 years until it was closed in 1965 and converted into a museum.",
        "quiz": {
            "question": "During which historical period was this surviving public bathhouse established?",
            "options": [
                "Ottoman Period",
                "Classical Greek Era",
                "Roman Imperial Age",
                "Byzantine Period"
            ],
            "answer": 0,
            "feedback": "Correct! The bathhouse was established under Ottoman rule in the 15th century and served the public for five centuries."
        },
        "reward": {
            "title": "15% off spa entrance tickets",
            "provider": "Athens Turkish Baths",
            "code": "HAMMAMWINDS"
        }
    },
    {
        "id": 142,
        "name": "The Pompeion (Kerameikos)",
        "lat": 37.9784,
        "lng": 23.7165,
        "image": "images/pompeion.jpg",
        "description": "A monumental building located between the Sacred and Dipylon Gates, used to store ceremonial equipment and organize the Panathenaic Procession.",
        "audioText": "Stand near the foundations of the Pompeion, located in the Kerameikos archaeological site. Built in the late 5th century BC, this large building with a central columned courtyard served a crucial civic function. It was the place where ceremonial items were stored and where the citizens gathered to organize the Panathenaic Procession. During this grand annual festival, the citizens carried a new sacred robe, or peplos, across the city to the statue of Athena on the Acropolis. The Pompeion was destroyed during the Roman sack of Athens in 86 BC, but its ruins show the scale of ancient festivals.",
        "quiz": {
            "question": "Which grand annual festival procession was organized inside the Pompeion?",
            "options": [
                "Panathenaic Procession",
                "Eleusinian Mysteries Procession",
                "Dionysian Drama Procession",
                "Olympic Torch Procession"
            ],
            "answer": 0,
            "feedback": "Correct! The Pompeion was the staging ground where the Panathenaic procession was prepared before marching along the Panathenaic Way."
        },
        "reward": {
            "title": "10% off museum guidebooks",
            "provider": "Kerameikos Entrance Shop",
            "code": "POMPEION"
        }
    },
    {
        "id": 143,
        "name": "Royal Stoa (Stoa Basileios)",
        "lat": 37.9756,
        "lng": 23.7219,
        "image": "images/royal_stoa.jpg",
        "description": "The headquarters of the King Archon in the Agora, where the laws of Solon were displayed and where Socrates was formally indicted.",
        "audioText": "Look at the foundations of the Royal Stoa, or Stoa Basileios, located at the northwest corner of the Agora. Built in the late 6th century BC, this small but highly important building was the headquarters of the King Archon, the magistrate who oversaw religious matters and laws. The stone columns displayed the laws of Solon, which laid the foundation of Athenian democracy. Most famously, this is the building where Socrates came in 399 BC to receive his formal indictment for impiety and corrupting the youth, leading to the trial that ended his life.",
        "quiz": {
            "question": "Which famous philosopher was indicted for impiety at the Royal Stoa?",
            "options": [
                "Socrates",
                "Plato",
                "Aristotle",
                "Epicurus"
            ],
            "answer": 0,
            "feedback": "Correct! Socrates was indicted here in 399 BC before going to trial."
        },
        "reward": {
            "title": "15% off philosophy books",
            "provider": "Agora Book Center",
            "code": "ROYALSTOA"
        }
    },
    {
        "id": 144,
        "name": "Agios Nikolaos Ragavas Church",
        "lat": 37.9729,
        "lng": 23.7291,
        "image": "images/agios_nikolaos_ragavas.jpg",
        "description": "An 11th-century Byzantine church in Plaka. Its bell was the first to ring in 1944 to celebrate the liberation of Athens from Axis occupation.",
        "audioText": "Visit the Church of Agios Nikolaos Ragavas, situated in Plaka near the Acropolis. Constructed in the 11th century during the Byzantine Golden Age of Athens, the church features elegant stone construction, decorative bricks, and a small Byzantine dome. The church has a special place in modern Greek history: its bell was the first to ring on October 12, 1944, to announce the withdrawal of German forces and the liberation of Athens. It stands as a monument to both Byzantine heritage and modern freedom.",
        "quiz": {
            "question": "Which historic event in 1944 did the bell of this church first celebrate?",
            "options": [
                "The liberation of Athens from Axis occupation",
                "The end of the Greek Civil War",
                "The return of the royal family",
                "The signing of the Constitution"
            ],
            "answer": 0,
            "feedback": "Correct! The church bell was the first to ring out across Athens to announce the city's liberation in 1944."
        },
        "reward": {
            "title": "Free traditional pastry with coffee",
            "provider": "Ragavas Square Bakery",
            "code": "RAGAVAS1944"
        }
    },
    {
        "id": 145,
        "name": "The Fallen Column (Olympian Zeus)",
        "lat": 37.9691,
        "lng": 23.7334,
        "image": "images/fallen_column.jpg",
        "description": "The massive column that was blown down by a violent storm in 1852, lying in neat stone segments across the grass ever since.",
        "audioText": "Observe the segments of the fallen column lying on the grass within the sanctuary of Olympian Zeus. On October 26, 1852, a violent storm and gale swept across Athens, blowing down one of the temple's 17-meter-tall Corinthian columns. The column did not break into random pieces; instead, its massive marble drums collapsed in a neat, chronological row, showing the structural construction of these colossal ancient pillars. It has been left exactly where it fell, offering visitors a unique look at the inner drums of ancient architecture.",
        "quiz": {
            "question": "In which year was this massive column blown down by a violent storm?",
            "options": [
                "1852",
                "1912",
                "1759",
                "1687"
            ],
            "answer": 0,
            "feedback": "Correct! The column fell during a severe storm in 1852, leaving its drums arranged on the ground."
        },
        "reward": {
            "title": "10% off traditional souvlaki",
            "provider": "O Thanasis Restaurant",
            "code": "FALLENCOLUMN"
        }
    },
    {
        "id": 146,
        "name": "Tomb of Yannoulis Halepas",
        "lat": 37.9626,
        "lng": 23.7383,
        "image": "images/halepas_tomb.jpg",
        "description": "The final resting place in the First Cemetery of the legendary Greek sculptor who carved the famous 'Sleeping Maiden' monument.",
        "audioText": "Visit the tomb of Yannoulis Halepas, located in the First Cemetery of Athens. Halepas was one of the most prominent sculptors of modern Greece, known for his expressive marble works. His most famous sculpture is the 'Sleeping Maiden' (Koimomeni), a realistic marble figure of a young girl lying in sleep, which serves as a grave monument in this cemetery. Halepas struggled with mental illness for decades before returning to sculpture later in life, and his tomb is a place of pilgrimage for lovers of romantic art.",
        "quiz": {
            "question": "Which famous sculpture did Yannoulis Halepas carve?",
            "options": [
                "The Sleeping Maiden (Koimomeni)",
                "The Winged Victory",
                "The bronze statue of Poseidon",
                "The bust of Pericles"
            ],
            "answer": 0,
            "feedback": "Correct! The 'Sleeping Maiden' is a landmark of modern Greek sculpture, located inside this very cemetery."
        },
        "reward": {
            "title": "Free historic guide brochure",
            "provider": "First Cemetery Information Desk",
            "code": "HALEPASART"
        }
    },
    {
        "id": 147,
        "name": "Tomb of George Averoff",
        "lat": 37.9620,
        "lng": 23.7395,
        "image": "images/averoff_tomb.jpg",
        "description": "A grand marble mausoleum honoring the wealthy benefactor who funded the reconstruction of the Panathenaic Stadium for the 1896 Olympics.",
        "audioText": "Stand before the mausoleum of George Averoff, one of Greece's greatest national benefactors. Averoff was a wealthy businessman who funded the reconstruction of the Panathenaic Stadium in solid white marble, allowing Athens to host the first modern Olympic Games in 1896. His tomb is a monumental structure decorated with reliefs and statues, reflecting his status and contribution to the modern Greek state. His legacy is also preserved in the naval cruiser Georgios Averoff, which served as the flagship of the Greek navy.",
        "quiz": {
            "question": "Which stadium's reconstruction did George Averoff famously fund?",
            "options": [
                "Panathenaic Stadium (Kallimarmaro)",
                "The Olympic Stadium of Athens (OAKA)",
                "The Stadium of Olympia",
                "The Roman Stadium of Herodes Atticus"
            ],
            "answer": 0,
            "feedback": "Correct! Averoff funded the marble reconstruction of the Panathenaic Stadium for the 1896 Olympics."
        },
        "reward": {
            "title": "15% off athletic merchandise",
            "provider": "Kallimarmaro Souvenir Shop",
            "code": "AVEROOFF1896"
        }
    },
    {
        "id": 148,
        "name": "Tomb of Andreas Papandreou",
        "lat": 37.9628,
        "lng": 23.7390,
        "image": "images/papandreou_tomb.jpg",
        "description": "The tomb of the highly influential three-time Prime Minister of Greece and founder of the Panhellenic Socialist Movement (PASOK).",
        "audioText": "Observe the tomb of Andreas Papandreou, one of the most dominant political figures of late 20th-century Greece. Papandreou, a former economics professor in the United States, returned to Greece and founded the Panhellenic Socialist Movement, or PASOK, in 1974. He served as Prime Minister for three terms, introducing major social and legal reforms, including the legalization of civil marriage and the recognition of the national resistance during WWII. His funeral in 1996 was attended by hundreds of thousands of citizens, showing his influence on modern Greek society.",
        "quiz": {
            "question": "What political party did Andreas Papandreou famously found in 1974?",
            "options": [
                "PASOK (Panhellenic Socialist Movement)",
                "New Democracy",
                "Syriza",
                "Liberal Party"
            ],
            "answer": 0,
            "feedback": "Correct! He founded PASOK, which became one of the main political parties in modern Greece."
        },
        "reward": {
            "title": "Free historic guide map booklet",
            "provider": "Mets District Tourism Desk",
            "code": "PAPANDREOU"
        }
    },
    {
        "id": 149,
        "name": "Phaleron Captives Grave Site",
        "lat": 37.9408,
        "lng": 23.6885,
        "image": "images/phaleron_captives.jpg",
        "description": "The archaeological discovery of 80 chained skeletons in the Phaleron Delta, believed to be the executed followers of Cylon's failed coup (632 BC).",
        "audioText": "Learn about the Phaleron Captives, one of the most dramatic archaeological discoveries in Greece. Excavated in 2016 in the Phaleron Delta, this mass grave contains the skeletons of 80 young men who were executed and buried in chains. Historians believe these captives were the followers of Cylon, a noble who attempted a coup to become tyrant of Athens in 632 BC. The coup failed, and despite seeking sanctuary, his followers were executed. The discovery offers a look at political violence and law enforcement in early archaic Athens.",
        "quiz": {
            "question": "Which ancient conspiracy coup are these chained skeletons linked to?",
            "options": [
                "Cylonian Conspiracy (failed coup of 632 BC)",
                "The conspiracy of the Tyrannicides",
                "The Sicilian Expedition revolt",
                "The Peisistratid coup"
            ],
            "answer": 0,
            "feedback": "Correct! The skeletons are widely believed to be the executed supporters of Cylon's failed coup."
        },
        "reward": {
            "title": "15% off regional history guides",
            "provider": "Phaleron Cultural Center",
            "code": "CYLONCOUP"
        }
    },
    {
        "id": 150,
        "name": "Plato's Academy Gymnasium Ruins",
        "lat": 37.9920,
        "lng": 23.7080,
        "image": "images/academy_gymnasium.jpg",
        "description": "The excavated remains of the ancient exercise ground where Plato's students practiced sports and discussed philosophy.",
        "audioText": "Explore the ruins of the Gymnasium inside the park of Plato's Academy. In ancient Greece, a gymnasium was not just a sports facility, but a place for intellectual discussion, combining physical and mental training. When Plato founded his school in 387 BC, he used this quiet park and its gymnasium buildings to teach his students, walking along the pathways while discussing ethics, mathematics, and politics. The concrete foundations you see today show the layout of this ancient school.",
        "quiz": {
            "question": "What type of facility were these ruins originally used as before Plato's school?",
            "options": [
                "A Gymnasium (exercise ground)",
                "A naval shipyard",
                "A theatrical stage",
                "A silver refinery vault"
            ],
            "answer": 0,
            "feedback": "Correct! The site was originally a public gymnasium before Plato established his Academy nearby."
        },
        "reward": {
            "title": "Free philosophy booklet",
            "provider": "Academy Park Info Kiosk",
            "code": "ACADEMYGYM"
        }
    },
    {
        "id": 151,
        "name": "Tomb of the Lacedaemonians",
        "lat": 37.9788,
        "lng": 23.7160,
        "image": "images/lacedaemonian_tomb.jpg",
        "description": "The mass grave in the Kerameikos containing the remains of Spartan officers who fell fighting the Athenians in 403 BC.",
        "audioText": "Observe the mass grave known as the Tomb of the Lacedaemonians. Located in the Kerameikos cemetery, this tomb contains the remains of Spartan (Lacedaemonian) soldiers and officers who died in 403 BC during the fighting that followed the Peloponnesian War. The Spartan dead, including two generals, were buried here with public honors by the Athenians, showing the respect given to enemy soldiers in ancient Greece. An inscription carved on the stone still marks the location.",
        "quiz": {
            "question": "Which city-state did the soldiers buried in this mass grave belong to?",
            "options": [
                "Sparta (Lacedaemonia)",
                "Thebes",
                "Corinth",
                "Argos"
            ],
            "answer": 0,
            "feedback": "Correct! The tomb houses the remains of Spartan soldiers who fell in battle near Athens."
        },
        "reward": {
            "title": "10% off museum entry tickets",
            "provider": "Kerameikos Archaeological Desk",
            "code": "SPARTANTOMB"
        }
    },
    {
        "id": 152,
        "name": "Sanctuary of Pandion (Acropolis)",
        "lat": 37.9710,
        "lng": 23.7275,
        "image": "images/sanctuary_pandion.jpg",
        "description": "The ancient open-air sanctuary on the southeast corner of the Acropolis summit, dedicated to Pandion, a legendary king of Athens.",
        "audioText": "Stand near the ruins of the Sanctuary of Pandion, located on the southeast corner of the Acropolis summit. This open-air sanctuary, dating to the 5th century BC, was dedicated to Pandion, one of the mythical founding kings of Athens who was later worshipped as a hero. The sanctuary consisted of a wall enclosing a courtyard where sacrifices took place. It was the location where the members of the Pandionis tribe gathered during festivals, showing how kinship and state organization were linked with Acropolis worship.",
        "quiz": {
            "question": "To which legendary Athenian king was this sanctuary dedicated?",
            "options": [
                "King Pandion",
                "King Theseus",
                "King Cecrops",
                "King Erechtheus"
            ],
            "answer": 0,
            "feedback": "Correct! The sanctuary was dedicated to Pandion, one of the legendary kings of ancient Athens."
        },
        "reward": {
            "title": "15% off Acropolis souvenirs",
            "provider": "Acropolis Museum Store",
            "code": "PANDION"
        }
    },
    {
        "id": 153,
        "name": "Stoa of Attalos Colonnade",
        "lat": 37.9751,
        "lng": 23.7239,
        "image": "images/stoa_attalos_columns.jpg",
        "description": "The impressive double-story covered walkway in the Agora, built by King Attalos II of Pergamum as a gift to the city of Athens.",
        "audioText": "Walk under the shaded columns of the Stoa of Attalos. Built around 150 BC by King Attalos II of Pergamum as a tribute to his education in Athens, this double-story colonnade is 115 meters long and featured 21 shops on each floor. Reconstructed in the 1950s by the American School of Classical Studies, the building showcases the combination of Doric columns on the ground floor and Ionic columns on the upper level, serving as a center of commerce and daily life.",
        "quiz": {
            "question": "Which King of Pergamum presented this stoa as a gift to Athens?",
            "options": [
                "King Attalos II",
                "King Eumenes II",
                "King Lysimachus",
                "King Mithridates"
            ],
            "answer": 0,
            "feedback": "Correct! King Attalos II built this stoa to express his gratitude to the city where he studied philosophy."
        },
        "reward": {
            "title": "10% off history guides",
            "provider": "Agora Museum Shop",
            "code": "ATTALOS2"
        }
    },
    {
        "id": 154,
        "name": "Hadrian's Arch (Theseus Inscription)",
        "lat": 37.9702,
        "lng": 23.7323,
        "image": "images/hadrian_arch_inscription.jpg",
        "description": "The classical inscription on the west facade of the arch which reads: 'This is Athens, the ancient city of Theseus.'",
        "audioText": "Look closely at the west facade of Hadrian's Arch, facing the Acropolis. Carved into the marble above the archway is a Greek inscription: 'This is Athens, the ancient city of Theseus.' Conversely, the east side facing the Temple of Zeus reads: 'This is the city of Hadrian, and not of Theseus.' These inscriptions served as a symbolic boundary marker, separating the old classical city founded by the mythical hero Theseus from the new Roman extension built by Emperor Hadrian.",
        "quiz": {
            "question": "Which mythical founder of Athens is named on the west inscription of the arch?",
            "options": [
                "Theseus",
                "Cecrops",
                "Erechtheus",
                "Aegeus"
            ],
            "answer": 0,
            "feedback": "Correct! The inscription names Theseus as the founder of the ancient city of Athens."
        },
        "reward": {
            "title": "Free Greek coffee with pastry",
            "provider": "Hadrian Arch View Cafe",
            "code": "THESEUSARCH"
        }
    },
    {
        "id": 155,
        "name": "Odeon of Agrippa Tritons Porch",
        "lat": 37.9750,
        "lng": 23.7228,
        "image": "images/odeon_tritons.jpg",
        "description": "The monumental entrance gate of the concert hall featuring detailed giant statues representing the sea god Triton.",
        "audioText": "Observe the giant statues standing on the tall stone pedestals in the Agora. These figures, half-human and half-fish, represent the sea god Triton. They originally served as columns supporting the grand entrance porch of the Odeon of Agrippa, constructed around 15 BC. Following a fire in the 2nd century AD, the building was reconstructed, and these colossal figures were added to the facade, standing as a landmark of Roman-era architectural styling in the Agora.",
        "quiz": {
            "question": "Which sea-god is represented by the fish-tailed giant statues at the porch?",
            "options": [
                "Triton",
                "Poseidon",
                "Nereus",
                "Proteus"
            ],
            "answer": 0,
            "feedback": "Correct! The statues represent Tritons, the mythical sea-messengers and sons of Poseidon."
        },
        "reward": {
            "title": "15% off tickets to concert events",
            "provider": "Athens Classical Concerts",
            "code": "TRITONPORCH"
        }
    },
    {
        "id": 156,
        "name": "Gazi Retort House (Technopolis)",
        "lat": 37.9782,
        "lng": 23.7142,
        "image": "images/gazi_retort_house.jpg",
        "description": "The central industrial hall of the Gazi factory where coal was heated to high temperatures to extract the gas.",
        "audioText": "Step inside the Retort House, the heart of the Gazi gas factory. Built in the late 19th century, this building housed the large brick furnaces and iron retorts where coal was heated to high temperatures without oxygen. This process extracted the coal gas, which was then purified and stored in the large gasometers nearby. The Retort House retains its original metal frameworks, coal hoppers, and furnaces, showing the industrial technology that powered Athens' development.",
        "quiz": {
            "question": "What raw material was heated inside the Retort House to extract gas?",
            "options": [
                "Coal",
                "Wood",
                "Crude oil",
                "Natural gas"
            ],
            "answer": 0,
            "feedback": "Correct! Coal was heated inside the retorts to extract the gas used for street lighting."
        },
        "reward": {
            "title": "10% off exhibition entrance",
            "provider": "Gazi Industrial Museum",
            "code": "RETORTHOUSE"
        }
    },
    {
        "id": 157,
        "name": "National Museum Cycladic Figurines",
        "lat": 37.9892,
        "lng": 23.7328,
        "image": "images/cycladic_figurines.jpg",
        "description": "The gallery inside the National Museum displaying Bronze Age white marble idols, famous for their flat, minimalist, modern look.",
        "audioText": "Explore the Cycladic Art gallery inside the National Archaeological Museum. The collection features prehistoric white marble figurines carved in the Cyclades islands during the 3rd Millennium BC. These figures, mostly representing stylized female forms with folded arms and tilted heads, are famous for their flat, minimalist design. Originally painted with bright colors, their clean marble look has inspired modern artists like Picasso and Modigliani.",
        "quiz": {
            "question": "What material was used to carve these prehistoric Cycladic figurines?",
            "options": [
                "White Marble",
                "Bronze",
                "Clay",
                "Terracotta"
            ],
            "answer": 0,
            "feedback": "Correct! The figurines were carved from local white marble found on the Cyclades islands."
        },
        "reward": {
            "title": "10% off souvenir figurines",
            "provider": "Museum Souvenir Shop",
            "code": "CYCLADICMARBLE"
        }
    },
    {
        "id": 158,
        "name": "Cape Sounion Sanctuary Precinct",
        "lat": 37.6502,
        "lng": 24.0248,
        "image": "images/sounion_sanctuary.jpg",
        "description": "The fortified boundary wall and temple ruins protecting the sacred clifftop sanctuary of Poseidon from naval raids.",
        "audioText": "Walk along the fortified walls surrounding the Temple of Poseidon at Sounion. Built during the Peloponnesian War in 413 BC, these stone walls protected the temple and the garrison from naval attacks. The precinct included ship sheds at the base of the cliffs and military quarters, showing how the sacred sanctuary served a vital role in defending the sea routes that carried grain and silver to Athens.",
        "quiz": {
            "question": "Which Olympian god of the sea was this clifftop precinct dedicated to?",
            "options": [
                "Poseidon",
                "Apollo",
                "Zeus",
                "Hermes"
            ],
            "answer": 0,
            "feedback": "Correct! The temple and fortified precinct at Sounion were dedicated to Poseidon, the god of the sea."
        },
        "reward": {
            "title": "15% off seafood orders",
            "provider": "Sounion Port Restaurant",
            "code": "SOUNIONSEA"
        }
    },
    {
        "id": 159,
        "name": "Temple of Ares Relocation Block",
        "lat": 37.9753,
        "lng": 23.7227,
        "image": "images/temple_ares_blocks.jpg",
        "description": "The exposed foundations showing Roman numbers carved on the stone blocks, used to guide reassembly after transport from Pallene.",
        "audioText": "Observe the foundation blocks of the Temple of Ares in the Agora. If you look closely, you can see Roman letters and numbers carved into the stone. These marks were made by Roman builders when they dismantled the temple in the rural town of Pallene. Each block was numbered to show its position in the temple architecture, acting as a guide to reassemble the building correctly when it was transported and rebuilt in the Agora.",
        "quiz": {
            "question": "What did the Roman builders carve on the temple stones to guide their reassembly?",
            "options": [
                "Roman letters and numbers",
                "Names of building sponsors",
                "Prayers to the god Ares",
                "Images of historic battles"
            ],
            "answer": 0,
            "feedback": "Correct! The stones were marked with letters and numbers to guide the reassembly of the relocated temple."
        },
        "reward": {
            "title": "10% off history publications",
            "provider": "Agora Bookstore Desk",
            "code": "ARESMARKS"
        }
    }
];

let map;
let userMarker;
let poiMarkers = [];
let userLocation = { lat: 37.9710, lng: 23.7240 }; // Start slightly south-west of Acropolis
let isSimulatedMode = true;
let shouldPanToUser = false;
let activePOI = null;
let synth = window.speechSynthesis;
let utterance = null;
let isAudioPlaying = false;
let audioTimer = null;
let currentPlayTime = 0;
let audioDuration = 60; // Default simulated audio length in seconds

// User stats loaded from local storage
let userStats = {
    points: 0,
    explored: [],
    rewards: []
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadUserData();
    setupNavigation();
    initMap();
    setupGPS();
    setupMediaDrawer();
    renderPOIList();
    updateDashboardStats();
});

// --- User Data Persistence ---
function loadUserData() {
    const saved = localStorage.getItem("echoes_greece_user");
    if (saved) {
        try {
            userStats = JSON.parse(saved);
        } catch (e) {
            console.error("Error reading storage:", e);
        }
    }
}

// Save to local storage
function saveUserData() {
    localStorage.setItem("echoes_greece_user", JSON.stringify(userStats));
    updateDashboardStats();
}

// --- Navigation Controller ---
function setupNavigation() {
    const navButtons = document.querySelectorAll(".nav-item");
    const tabPanes = document.querySelectorAll(".tab-pane");

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");
            
            navButtons.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(targetTab).classList.add("active");

            // Recalculate Leaflet map sizes if returning to map tab
            if (targetTab === "tab-map" && map) {
                setTimeout(() => map.invalidateSize(), 150);
            }
        });
    });
}

// --- Leaflet Map Controller ---
function initMap() {
    // Map setup centered at Athens historical center
    map = L.map('map-container', {
        zoomControl: false,
        attributionControl: false
    }).setView([37.9720, 23.728], 15);

    // Beautiful custom CartoDB Voyage tile layer (Aegean blue aesthetic)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(map);

    // Custom Icon for User Location
    const userIcon = L.divIcon({
        className: 'user-location-marker',
        html: `<div class="pulse-ring"></div><div class="user-dot"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    // Add user marker
    userMarker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon }).addTo(map);

    // Load POIs onto Map
    POIs.forEach(poi => {
        const marker = L.circleMarker([poi.lat, poi.lng], {
            radius: 12,
            fillColor: '#0d2f64',
            color: '#e5a93c',
            weight: 3,
            fillOpacity: 0.8
        }).addTo(map);

        marker.bindPopup(`
            <div class="map-popup">
                <h4>${poi.name}</h4>
                <p>Click details to explore the stories.</p>
                <button onclick="triggerPOIById(${poi.id})">Open Story</button>
            </div>
        `);

        poiMarkers.push({ id: poi.id, marker: marker });
    });

    // Map tap handler for simulation mode
    map.on('click', (e) => {
        if (isSimulatedMode) {
            updateUserLocation(e.latlng.lat, e.latlng.lng);
        }
    });
}

// --- Geolocation & Simulation Mode ---
function setupGPS() {
    const gpsToggleBtn = document.getElementById("gps-toggle");
    const gpsStatusText = document.getElementById("gps-status-text");

    gpsToggleBtn.addEventListener("click", () => {
        isSimulatedMode = !isSimulatedMode;
        if (isSimulatedMode) {
            gpsToggleBtn.classList.remove("active");
            gpsStatusText.textContent = "Simulated GPS";
            alert("Simulation Mode Active: Click anywhere on the map to walk there!");
        } else {
            gpsToggleBtn.classList.add("active");
            gpsStatusText.textContent = "Real GPS Active";
            shouldPanToUser = true;
            startRealGeolocation();
        }
    });

    // Recenter map on user location
    const recenterBtn = document.getElementById("recenter-btn");
    recenterBtn.addEventListener("click", () => {
        if (userLocation && map) {
            map.setView([userLocation.lat, userLocation.lng], 16);
        }
    });
}

let watchId = null;
function startRealGeolocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser. Reverting to Simulation Mode.");
        document.getElementById("gps-toggle").click();
        return;
    }

    const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

    function success(position) {
        updateUserLocation(position.coords.latitude, position.coords.longitude);
    }

    function error(err) {
        console.warn("High accuracy GPS failed:", err);
        if (options.enableHighAccuracy) {
            // Fall back to low accuracy (Wi-Fi/IP location) which is fast and works indoors/on desktop
            options.enableHighAccuracy = false;
            options.timeout = 15000;
            if (watchId) navigator.geolocation.clearWatch(watchId);
            watchId = navigator.geolocation.watchPosition(success, finalError, options);
        } else {
            finalError(err);
        }
    }

    function finalError(err) {
        console.error("Final Geolocation Error:", err);
        alert("Unable to retrieve GPS location. Reverting to Simulation Mode.");
        document.getElementById("gps-toggle").click();
    }

    watchId = navigator.geolocation.watchPosition(success, error, options);
}

function updateUserLocation(lat, lng) {
    userLocation = { lat, lng };
    userMarker.setLatLng([lat, lng]);

    if (shouldPanToUser) {
        map.setView([lat, lng], 16);
        shouldPanToUser = false;
    }

    // Check distances to POIs
    POIs.forEach(poi => {
        const distance = calculateDistance(lat, lng, poi.lat, poi.lng);
        if (distance < 60) { // Within 60 meters (optimized for fenced archaeological perimeters)
            triggerPOI(poi);
        }
    });
}

// Haversine distance calculator
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // meters
    const phi1 = lat1 * Math.PI / 180;
    const phi2 = lat2 * Math.PI / 180;
    const deltaPhi = (lat2 - lat1) * Math.PI / 180;
    const deltaLambda = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

// --- Story Drawer Controller ---
function setupMediaDrawer() {
    const closeBtn = document.getElementById("close-drawer");
    const playBtn = document.getElementById("audio-play-btn");
    const drawerImg = document.getElementById("drawer-image");
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");
    const lightboxCaption = document.getElementById("lightbox-caption");

    closeBtn.addEventListener("click", () => {
        document.getElementById("media-drawer").classList.remove("open");
        stopAudio();
    });

    playBtn.addEventListener("click", () => {
        if (isAudioPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });

    // Lightbox triggers
    drawerImg.addEventListener("click", () => {
        if (activePOI && activePOI.image) {
            lightboxImg.src = activePOI.image;
            lightboxCaption.textContent = activePOI.name;
            lightbox.classList.remove("hidden");
        }
    });

    lightboxClose.addEventListener("click", () => {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.add("hidden");
        }
    });
}

window.triggerPOIById = function(id) {
    const poi = POIs.find(p => p.id === id);
    if (poi) triggerPOI(poi);
};

function triggerPOI(poi) {
    if (activePOI && activePOI.id === poi.id) {
        // Drawer is already open for this POI
        document.getElementById("media-drawer").classList.add("open");
        return;
    }

    activePOI = poi;
    stopAudio();

    // Populate drawer values
    document.getElementById("drawer-title").textContent = poi.name;
    document.getElementById("drawer-poi-index").textContent = poi.id + 1;
    document.getElementById("drawer-description").textContent = poi.description;

    // Load Image if present
    const drawerImg = document.getElementById("drawer-image");
    if (poi.image) {
        drawerImg.src = poi.image;
        drawerImg.classList.remove("hidden");
    } else {
        drawerImg.classList.add("hidden");
    }

    // Load transcript text at the bottom
    document.getElementById("drawer-transcript").textContent = poi.audioText;

    // Load Quiz for this POI
    setupQuiz(poi);

    // Open media drawer
    document.getElementById("media-drawer").classList.add("open");

    // Add to explored list
    if (!userStats.explored.includes(poi.id)) {
        userStats.explored.push(poi.id);
        userStats.points += 20; // 20 XP points for finding the spot
        saveUserData();
    }
}

// Helper to expand dates, numbers, and abbreviations to ensure perfect English pronunciation
function preprocessAudioText(text) {
    let processed = text;
    // Replace BC/AD
    processed = processed.replace(/\bBC\b/g, 'B.C.');
    processed = processed.replace(/\bAD\b/g, 'A.D.');
    // Replace common ordinals
    processed = processed.replace(/\b5th\b/g, 'fifth');
    processed = processed.replace(/\b6th\b/g, 'sixth');
    processed = processed.replace(/\b10th\b/g, 'tenth');
    processed = processed.replace(/\b11th\b/g, 'eleventh');
    processed = processed.replace(/\b19th\b/g, 'nineteenth');
    processed = processed.replace(/\b20th\b/g, 'twentieth');
    // Replace specific years and numbers to prevent mispronunciation
    processed = processed.replace(/\b51\b/g, 'fifty-one');
    processed = processed.replace(/\b50\b/g, 'fifty');
    processed = processed.replace(/\b131\b/g, 'one hundred thirty-one');
    processed = processed.replace(/\b144\b/g, 'one hundred forty-four');
    processed = processed.replace(/\b277\b/g, 'two hundred seventy-seven');
    processed = processed.replace(/\b334\b/g, 'three hundred thirty-four');
    processed = processed.replace(/\b335\b/g, 'three hundred thirty-five');
    processed = processed.replace(/\b399\b/g, 'three hundred ninety-nine');
    processed = processed.replace(/\b449\b/g, 'four hundred forty-nine');
    processed = processed.replace(/\b507\b/g, 'five hundred seven');
    processed = processed.replace(/\b1050\b/g, 'ten fifty');
    processed = processed.replace(/\b1687\b/g, 'sixteen eighty-seven');
    processed = processed.replace(/\b1759\b/g, 'seventeen fifty-nine');
    processed = processed.replace(/\b1829\b/g, 'eighteen twenty-nine');
    processed = processed.replace(/\b1837\b/g, 'eighteen thirty-seven');
    processed = processed.replace(/\b1843\b/g, 'eighteen forty-three');
    processed = processed.replace(/\b1852\b/g, 'eighteen fifty-two');
    processed = processed.replace(/\b1887\b/g, 'eighteen eighty-seven');
    processed = processed.replace(/\b1888\b/g, 'eighteen eighty-eight');
    processed = processed.replace(/\b1896\b/g, 'eighteen ninety-six');
    processed = processed.replace(/\b1979\b/g, 'nineteen seventy-nine');
    processed = processed.replace(/\b1996\b/g, 'nineteen ninety-six');
    processed = processed.replace(/\b50,000\b/g, 'fifty thousand');
    processed = processed.replace(/\b17,000\b/g, 'seventeen thousand');
    processed = processed.replace(/\b5,000\b/g, 'five thousand');
    processed = processed.replace(/\b6,000\b/g, 'six thousand');
    processed = processed.replace(/\b24\/7\b/g, 'twenty-four seven');
    return processed;
}

// --- Audio Player Controller (Web Speech API Synthesis) ---
function playAudio() {
    if (!activePOI) return;

    isAudioPlaying = true;
    document.getElementById("audio-viz").classList.add("playing");
    document.getElementById("play-icon").classList.add("hidden");
    document.getElementById("pause-icon").classList.remove("hidden");

    // Reset Speech synthesis
    synth.cancel();
    
    // Preprocess text to expand years, numbers, and abbreviations
    const cleanText = preprocessAudioText(activePOI.audioText);
    utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Force English language tag so browsers default to English TTS engine
    utterance.lang = 'en-US';
    utterance.rate = 0.95; // Steady, cinematic guide tempo
    
    // Find the best English voice (prioritizing high-quality Google/Apple natural voices)
    const voices = synth.getVoices();
    let selectedVoice = null;
    
    // 1. Try to find a premium/natural English voice
    selectedVoice = voices.find(v => v.lang.startsWith('en') && 
        (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium')));
        
    // 2. Fall back to standard en-US/en-GB or any English voice
    if (!selectedVoice) selectedVoice = voices.find(v => v.lang.includes('en-US'));
    if (!selectedVoice) selectedVoice = voices.find(v => v.lang.includes('en-GB'));
    if (!selectedVoice) selectedVoice = voices.find(v => v.lang.startsWith('en'));
    
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    utterance.onend = () => {
        stopAudio();
    };

    utterance.onerror = () => {
        stopAudio();
    };

    synth.speak(utterance);

    // Setup simulated timeline duration bar
    currentPlayTime = 0;
    audioDuration = Math.ceil(activePOI.audioText.split(" ").length * 0.4); // 0.4 sec per word
    document.getElementById("audio-duration").textContent = formatTime(audioDuration);
    
    audioTimer = setInterval(() => {
        currentPlayTime++;
        document.getElementById("audio-time").textContent = formatTime(currentPlayTime);
        if (currentPlayTime >= audioDuration) {
            clearInterval(audioTimer);
        }
    }, 1000);
}

function pauseAudio() {
    isAudioPlaying = false;
    document.getElementById("audio-viz").classList.remove("playing");
    document.getElementById("play-icon").classList.remove("hidden");
    document.getElementById("pause-icon").classList.add("hidden");
    
    synth.pause();
    clearInterval(audioTimer);
}

function stopAudio() {
    isAudioPlaying = false;
    document.getElementById("audio-viz").classList.remove("playing");
    document.getElementById("play-icon").classList.remove("hidden");
    document.getElementById("pause-icon").classList.add("hidden");
    
    synth.cancel();
    clearInterval(audioTimer);
    currentPlayTime = 0;
    document.getElementById("audio-time").textContent = "0:00";
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- Quiz Engine ---
function setupQuiz(poi) {
    const container = document.getElementById("quiz-container");
    const optionsDiv = document.getElementById("quiz-options");
    const feedbackDiv = document.getElementById("quiz-feedback");

    feedbackDiv.classList.add("hidden");
    optionsDiv.innerHTML = "";

    // Set text
    document.getElementById("quiz-question").textContent = poi.quiz.question;

    // Check if user already solved it
    const isSolved = userStats.rewards.some(r => r.poiId === poi.id);

    poi.quiz.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn";
        btn.textContent = opt;
        btn.disabled = isSolved;

        if (isSolved && idx === poi.quiz.answer) {
            btn.classList.add("correct");
        }

        btn.addEventListener("click", () => {
            // Disable options
            const allBtns = optionsDiv.querySelectorAll(".quiz-opt-btn");
            allBtns.forEach(b => b.disabled = true);

            if (idx === poi.quiz.answer) {
                // Correct answer
                btn.classList.add("correct");
                feedbackDiv.textContent = poi.quiz.feedback;
                feedbackDiv.className = "quiz-feedback success";
                feedbackDiv.classList.remove("hidden");
                
                // Unlock reward
                unlockReward(poi);
            } else {
                // Incorrect
                btn.classList.add("incorrect");
                feedbackDiv.textContent = "Oops! That's incorrect. Try again next time!";
                feedbackDiv.className = "quiz-feedback error";
                feedbackDiv.classList.remove("hidden");
                
                // Re-enable options after 2.5 seconds to retry
                setTimeout(() => {
                    allBtns.forEach(b => b.disabled = false);
                    btn.classList.remove("incorrect");
                    feedbackDiv.classList.add("hidden");
                }, 2500);
            }
        });

        optionsDiv.appendChild(btn);
    });
}

function unlockReward(poi) {
    if (userStats.rewards.some(r => r.poiId === poi.id)) return;

    userStats.rewards.push({
        poiId: poi.id,
        title: poi.reward.title,
        provider: poi.reward.provider,
        code: poi.reward.code
    });
    
    userStats.points += 50; // Extra XP for correct quiz
    saveUserData();
    renderRewardsTab();
}

// --- Dashboard Stats renderers ---
function renderPOIList() {
    const list = document.getElementById("poi-list-container");
    list.innerHTML = "";

    POIs.forEach((poi, index) => {
        const card = document.createElement("div");
        card.className = "poi-card";
        card.addEventListener("click", () => {
            // Switch tabs first
            document.querySelector("[data-tab='tab-map']").click();
            // Center map on POI and open
            map.setView([poi.lat, poi.lng], 16);
            triggerPOI(poi);
        });

        const isDiscovered = userStats.explored.includes(poi.id);
        const statusIcon = isDiscovered ? "✅" : "🔒";
        const imgTag = poi.image ? `<img class="poi-card-thumb" src="${poi.image}" alt="${poi.name}">` : `<div class="poi-card-num">${index + 1}</div>`;

        card.innerHTML = `
            ${imgTag}
            <div class="poi-card-info">
                <h4>${poi.name}</h4>
                <p>${poi.description.substring(0, 100)}...</p>
            </div>
            <div class="poi-card-status">${statusIcon}</div>
        `;
        list.appendChild(card);
    });
}

function renderRewardsTab() {
    const container = document.getElementById("coupons-list-container");
    container.innerHTML = "";

    POIs.forEach(poi => {
        const unlockedReward = userStats.rewards.find(r => r.poiId === poi.id);
        const card = document.createElement("div");
        
        if (unlockedReward) {
            card.className = "coupon-card unlocked";
            card.innerHTML = `
                <div class="coupon-info">
                    <h4>${poi.reward.title}</h4>
                    <p>🎫 At ${poi.reward.provider}</p>
                </div>
                <div class="coupon-code">${poi.reward.code}</div>
            `;
        } else {
            card.className = "coupon-card";
            card.innerHTML = `
                <div class="coupon-info">
                    <h4>${poi.name} Reward</h4>
                    <p>Solve the quiz at the site to unlock this voucher.</p>
                </div>
                <div class="coupon-locked-badge">🔒 Locked</div>
            `;
        }
        container.appendChild(card);
    });
}

function updateDashboardStats() {
    document.getElementById("stat-points").textContent = userStats.points;
    document.getElementById("stat-completed").textContent = `${userStats.explored.length}/${POIs.length}`;
    renderRewardsTab();
    renderPOIList(); // Update tick marks on discover
}
