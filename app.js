// --- Configuration Constants ---
const CONFIG = {
    // Geolocation
    POI_TRIGGER_DISTANCE_METERS: 60,
    GPS_HIGH_ACCURACY_TIMEOUT: 10000,
    GPS_LOW_ACCURACY_TIMEOUT: 15000,
    
    // Map
    DEFAULT_MAP_CENTER: [37.9720, 23.728],
    DEFAULT_MAP_ZOOM: 15,
    POI_DETAIL_ZOOM: 16,
    
    // Audio
    AUDIO_SPEECH_RATE: 0.95,
    AUDIO_UPDATE_INTERVAL: 1000,
    
    // Quiz
    QUIZ_FEEDBACK_DELAY: 2500,
    QUIZ_CORRECT_POINTS: 50,
    
    // UI
    MAP_RESIZE_DELAY: 150,
    POI_DESCRIPTION_MAX_LENGTH: 100
};

// --- Data Structures ---
const POIs = [
    {
        "id": 0,
        "name": "The Parthenon",
        "lat": 37.9715,
        "lng": 23.7267,
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
            "codeHash": "061072f3e7f02b6c8cc4772271ffd117d4bfc26deb747b91a2bc1aa6c495bcd6"
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
            "codeHash": "4dac3a95b8e95dc4e42b22631a9063d8cb19d87a9a722f32ba8e2cb3313e946b"
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
            "codeHash": "65c7e1e75aced303e4d5cb9e06e780de0c9f8e1232ce23d367e1ee91d82a5d04"
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
            "codeHash": "64e01f99c63adbe986808ba096cc5e54c57d306371a0be56d47b89a2ba60c64e"
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
            "codeHash": "ef62b444944ba68787f4dfea813bf8df107fa277cbed778295ceacb1a46b1edd"
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
            "codeHash": "616c08f07d15dec0aecaad465ce9cc88ebf1209c4a61e0723597c06e6d7f6216"
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
            "codeHash": "c1f0e6372823a6467a7754828e8bf2222464fc0b02f028a47b3eabe34f18ff97"
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
            "codeHash": "e1bf40b7d69820e20aae6898c978b6051d9e947fbbaa359efe618fa23f23718d"
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
            "codeHash": "4c02c0b5f9ec85da2ee5c4b9f264dd5c546a360a8eb5d648ffb7bd36df5b9029"
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
            "codeHash": "7ff4d4976cf0a13861ba70269029f1989054e75b7dc313e7625c157e1c6e0802"
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
            "codeHash": "d849406e0fe2f44fe54e851fc16d4dccd7829980de32d5de5cad698db0b931ca"
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
            "codeHash": "0304a2dfac99e8fae3bcd22001dd545fa3b9d64c146de0944f8ce4889d2c65fd"
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
            "codeHash": "550ad0f72dd828fcc720640bbc19ab033f40a6162a2e4e9ba63710161586dcd8"
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
            "codeHash": "8815b5be81d54d392539cd2b67fb609b4d1e8e44a78a32dbc7b895344ed68a8f"
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
            "codeHash": "a2bca3d125b66051a0aeed8d1f9e43e6d79efc8451e97ac50a74713e96178d4f"
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
            "codeHash": "9e6f6a7cb03cb32f76641ae836ee877bf6c523b664504b4a897ffb81450e1028"
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
            "codeHash": "f2c1f2c58b6992bb9bf2efb9a019590d492ad9921c8bce205e2731c3c3d8361a"
        }
    },
    {
        "id": 17,
        "name": "Church of Panagia Kapnikarea",
        "lat": 37.9763,
        "lng": 23.7286,
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
            "codeHash": "739d2785d20fef5ebd9ad36a5a067981005664fd862666331b41c04bdbbda4b0"
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
            "codeHash": "7d9b9a90058b129f58c1fabe14d564c5ac9187ad9dcc1232227ffd757c443e37"
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
            "codeHash": "64e4e38409afc989cd66d73280a3d4493fade0cecd12afff80cdd79476882f35"
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
            "codeHash": "0beb047fe89225c7b4dae1eb5f3601d4274e586f0db69055862ab28fc01b0744"
        }
    },
    {
        "id": 21,
        "name": "Academy of Athens",
        "lat": 37.991748,
        "lng": 23.780473,
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
            "codeHash": "a3e398d2b6f297275725fa3ae919d52fbb23ab9e19cf29b8dcad149a22b08f0b"
        }
    },
    {
        "id": 22,
        "name": "National Library of Greece",
        "lat": 37.940277,
        "lng": 23.69239,
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
            "codeHash": "b20ed49c7a707eb2f0034188c55dde05cffe9ee84b9f47dcc2449bef17a666d7"
        }
    },
    {
        "id": 23,
        "name": "University of Athens (Propylaea)",
        "lat": 37.971736,
        "lng": 23.725197,
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
            "codeHash": "07ba405b301ecc76d98bd545e6b548326089c243e2752a65a6f84b9c50f24e87"
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
            "codeHash": "e8d4969d343c4a5a55b9efbc80066e6d631240699bd164a1e7e988d5194176db"
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
            "codeHash": "2b11581ff0625f996e8001d80eb6b72f4572b45f55f3d673096bad58fb9bd40c"
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
            "codeHash": "aa79babffa2af4c9907213866ff9d3febaf26e5bac0b45aa8f224bcf9519fd17"
        }
    },
    {
        "id": 27,
        "name": "Ancient Agora of Athens",
        "lat": 37.975021,
        "lng": 23.724193,
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
            "codeHash": "5d02cbf99c38d2076ba10b2e9d6467163c80d9e59a46fa876afa88a29a344941"
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
            "codeHash": "a97df1563c2c32d2de2064ad99a823b577426fc991f1e3dfecdc332dedd9e388"
        }
    },
    {
        "id": 29,
        "name": "Hadrian's Reservoir (Dexameni)",
        "lat": 37.979,
        "lng": 23.7417,
        "image": "images/lake_vouliagmeni.png",
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
            "codeHash": "91542a1a6240fc56ce3781df786d6353f35bc0302a385096e069004f209e3f8f"
        }
    },
    {
        "id": 30,
        "name": "Church of the Holy Apostles",
        "lat": 37.97465,
        "lng": 23.7224,
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
            "codeHash": "53dda29b79cc283f4cc5dba6a70359cced95e134f3777b69c93b080315f1119e"
        }
    },
    {
        "id": 31,
        "name": "Little Metropolis Church",
        "lat": 37.9751,
        "lng": 23.7303,
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
            "codeHash": "1f3825f493b98d838d4c2f13c032fc904c55abd60b239e56b5dcb6f3c55df43c"
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
            "codeHash": "da7679020b1d298aed1e5ff6a75ac76f574b2be2d13a62b47bcf9318d3f45778"
        }
    },
    {
        "id": 33,
        "name": "Stoa of Attalos",
        "lat": 37.975,
        "lng": 23.7238,
        "image": "images/stoa_of_attalos.jpg",
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
            "codeHash": "d21500895b057acaa689cce08cc5d8669c1f1756ecd059b56ae491967922d396"
        }
    },
    {
        "id": 34,
        "name": "Kerameikos Archaeological Museum",
        "lat": 37.9778,
        "lng": 23.7169,
        "image": "images/kerameikos_archaeological_site.jpg",
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
            "codeHash": "49fafd875d11c072544c78c811922f8f82fbca20f99e96daae73b6c7e74b272c"
        }
    },
    {
        "id": 35,
        "name": "Monastery of Daphni",
        "lat": 38.0129,
        "lng": 23.6359,
        "image": "images/monastery_daphni.jpg",
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
            "codeHash": "2f9e1978d9bb5054addc9f7142c91236eaf150a233ea0d1cb975236335f56eba"
        }
    },
    {
        "id": 36,
        "name": "Sanctuary of Demeter (Eleusis)",
        "lat": 38.0416,
        "lng": 23.5383,
        "image": "images/eleusis_sanctuary.jpg",
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
            "codeHash": "fd7ae9a11ed23646be4d5395dc49ee9bd1ce455fc659e2397083fd643b8a66b6"
        }
    },
    {
        "id": 37,
        "name": "Amphiaraion of Oropos",
        "lat": 38.29139,
        "lng": 23.84556,
        "image": "images/amphiaraion_oropos.jpg",
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
            "codeHash": "6b7dd086a7008927859b6346f46e0c5c1f49b57f8687fac75d08972d8f7ee7a6"
        }
    },
    {
        "id": 38,
        "name": "Tumulus of Marathon",
        "lat": 38.11791,
        "lng": 23.97833,
        "image": "images/tumulus_marathon_new.jpg",
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
            "codeHash": "1338d7d1579acfe7dccbd223d2816d30cbdf82f1f72766dcb003229213162dd6"
        }
    },
    {
        "id": 39,
        "name": "Thorikos Ancient Theater",
        "lat": 37.7381,
        "lng": 24.0538,
        "image": "images/theatre_thorikos.jpg",
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
            "codeHash": "63ea561db03cfe3d191f23db5b61de96c2814e2ddbb9321ef2b98ced6d216e91"
        }
    },
    {
        "id": 40,
        "name": "Lavrion Silver Mines",
        "lat": 37.712,
        "lng": 24.015,
        "image": "images/penteli_quarries.png",
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
            "codeHash": "e47528ea692f22fd974ac5bc319849f0d29b2d3a5e1c8fb26fe167fb8e3fcf6c"
        }
    },
    {
        "id": 41,
        "name": "Kaisariani Monastery",
        "lat": 37.9607,
        "lng": 23.7985,
        "image": "images/kaisariani_monastery.jpg",
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
            "codeHash": "09f3089650febb1c352bd7996c584d9224daf72a7ed9f9ebfac598ebc40a8659"
        }
    },
    {
        "id": 42,
        "name": "Asteriou Monastery",
        "lat": 38.012979,
        "lng": 23.635926,
        "image": "images/asteriou_monastery.jpg",
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
            "codeHash": "fd2d9e59599071791e32d195e210e9ce836520fa7a41a0bc70ee124b249d819f"
        }
    },
    {
        "id": 43,
        "name": "Mount Parnitha National Park",
        "lat": 38.173062,
        "lng": 23.721956,
        "image": "images/lycabettus_hill.png",
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
            "codeHash": "1b5e17a61f13ee9d0706a619749b142e27e10f4440c1f7503a3d2c6c3f19086c"
        }
    },
    {
        "id": 44,
        "name": "Temple of Poseidon at Sounion",
        "lat": 37.6501,
        "lng": 24.0245,
        "image": "images/temple_poseidon_sounion.jpg",
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
            "codeHash": "36d9a065af638ae4fc68fea587016a3dbe806c416fef6f7119e4f3f062f2c61d"
        }
    },
    {
        "id": 45,
        "name": "Choragic Monument of Thrasyllus",
        "lat": 37.97108,
        "lng": 23.729938,
        "image": "images/choragic_monument_of_lysicrates.jpg",
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
            "codeHash": "c81c5560fa9c416d6f86644be74fbb8b35cf180dae89a1849fd90bae1730f0d8"
        }
    },
    {
        "id": 46,
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
            "codeHash": "556568fa71af5492b4447d77e48f168e21415909d4e7958991e5bbe5881fbc02"
        }
    },
    {
        "id": 47,
        "name": "Agia Dynami Church",
        "lat": 37.99131,
        "lng": 23.663996,
        "image": "images/church_of_panagia_kapnikarea.jpg",
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
            "codeHash": "e7e73197fa1f323723e07710f5717eda3da2f40cac2b478ab9917811909b904f"
        }
    },
    {
        "id": 48,
        "name": "St. Demetrius Loumbardiaris",
        "lat": 37.9696,
        "lng": 23.7208,
        "image": "images/church_of_panagia_kapnikarea.jpg",
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
            "codeHash": "69cf2edbf360072bd36b5fa60360a3cf8714b76417867456959b68bfabca7941"
        }
    },
    {
        "id": 49,
        "name": "Stoa of Eumenes",
        "lat": 37.9705,
        "lng": 23.7257,
        "image": "images/stoa_of_eumenes.jpg",
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
            "codeHash": "e99911134e911e0a620a5c818f4188f73c57f90bd28b0e8a3b31ea41e325781e"
        }
    },
    {
        "id": 50,
        "name": "The Pelasgian Wall",
        "lat": 37.981068,
        "lng": 23.728715,
        "image": "images/pelasgian_wall.jpg",
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
            "codeHash": "6a9f15a95b112fa00b72278fc218891e92b08b2b88576fd26ba85cc65a09ed4a"
        }
    },
    {
        "id": 51,
        "name": "Asclepieion of Athens",
        "lat": 37.975565,
        "lng": 23.734832,
        "image": "images/asclepieion_athens.jpg",
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
            "codeHash": "a509b45b04080d528be4e77734132064adb31bccae74be659756de8dfe9f82cd"
        }
    },
    {
        "id": 52,
        "name": "The Metroum (Ancient Agora)",
        "lat": 37.975021,
        "lng": 23.724193,
        "image": "images/metroum_agora.jpg",
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
            "codeHash": "c0141808aad2e78b5fc7f01682945c456747348aa1c31de62f0a0c8a45b2f432"
        }
    },
    {
        "id": 53,
        "name": "Ancient Bouleuterion",
        "lat": 37.9754,
        "lng": 23.7231,
        "image": "images/bouleuterion.jpg",
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
            "codeHash": "53d93bf8fe4aaee2bf8c7ef4ef9d9f44d463c25f8d8d64ce6ee7a9d236e2d81a"
        }
    },
    {
        "id": 54,
        "name": "The Tholos (Agora)",
        "lat": 37.975021,
        "lng": 23.724193,
        "image": "images/tholos_agora.jpg",
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
            "codeHash": "ba30aafe5badf3d9759c0dac9b9db7b60e54b40f0c7b219d872bd0a0a4f3fd8a"
        }
    },
    {
        "id": 55,
        "name": "Altar of the Twelve Gods",
        "lat": 37.9757,
        "lng": 23.7229,
        "image": "images/altar_twelve_gods.jpg",
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
            "codeHash": "4cdf4a850d51f3c314fcb2a5af3c85e0e9e25753746c1afa1fa65b9691aba20c"
        }
    },
    {
        "id": 56,
        "name": "South Stoa I",
        "lat": 37.9744,
        "lng": 23.7228,
        "image": "images/south_stoa_i.jpg",
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
            "codeHash": "dd556a8b8d40b2112e314769f3b28c63faeb5e4834037ace0dce72b21b8ff8cc"
        }
    },
    {
        "id": 57,
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
            "codeHash": "97e144515dfe7ab5ee107ee4200ee3d8b0b92537dfef9825ab4b8b0de4d90022"
        }
    },
    {
        "id": 58,
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
            "codeHash": "f8d21e76a3a92d1c144c6ec9be7be59a8fd1161fe6b9d3b7d01f36994a0b2579"
        }
    },
    {
        "id": 59,
        "name": "Benaki Museum",
        "lat": 37.974474,
        "lng": 23.708603,
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
            "codeHash": "fb735bd9f4f302cce0e8dc560dde549f3b88bedb6328d360d0165fb8ba4b90b4"
        }
    },
    {
        "id": 60,
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
            "codeHash": "2693895237926577d31d4bb9e26b2145e5ebe0d4ce329b00ad6eff103f6abe90"
        }
    },
    {
        "id": 61,
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
            "codeHash": "d8bdc2d8a3f80f6bbbfe1a295814036457b40bf32e025e78238624ec22dcab69"
        }
    },
    {
        "id": 62,
        "name": "Byzantine and Christian Museum",
        "lat": 37.97472,
        "lng": 23.74444,
        "image": "images/byzantine_christian_museum.jpg",
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
            "codeHash": "8782351b6beb8f218d359ed993d2726e6da4327da69d06a850e36792f0130480"
        }
    },
    {
        "id": 63,
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
            "codeHash": "506624712e79eb0b6fa13dec49143aeee67a54baf1f6e01bd08fe3066afcce5b"
        }
    },
    {
        "id": 64,
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
            "codeHash": "9196425a4b01f5195bd6c701815d127594d6b493e6936a113cc9eb95972f3917"
        }
    },
    {
        "id": 65,
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
            "codeHash": "002ed84ca669f31136230ea8eb079f4f79c44e2df0a3b3f12772e2b4d1daf7c9"
        }
    },
    {
        "id": 66,
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
            "codeHash": "f265dc443a69248f4c55521fe22ef259b22cdae8d5d727cea555003130ca0f80"
        }
    },
    {
        "id": 67,
        "name": "Rhamnous Archaeological Site",
        "lat": 38.2192,
        "lng": 24.0269,
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
            "codeHash": "36802436e30fc36e011f7879315a375dbabf163a3b88e418ea282edb735af273"
        }
    },
    {
        "id": 68,
        "name": "Aigosthena Fortress",
        "lat": 38.1471,
        "lng": 23.228613,
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
            "codeHash": "3200f17c3d049aabb60fc9896967772ce219c2108c2d5301780ebfaab69f1303"
        }
    },
    {
        "id": 69,
        "name": "Sanctuary of Aphaia",
        "lat": 37.7547,
        "lng": 23.5325,
        "image": "images/sanctuary_aphaia.jpg",
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
            "codeHash": "a70d5961c6c9d414f9286e14f2ed62b3bc24464e3434f8a8db1f5fd6f533815d"
        }
    },
    {
        "id": 70,
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
            "codeHash": "900b6a9569d78901d541bcc46241a941a467903f6b1bb011be7f091a23267f36"
        }
    },
    {
        "id": 71,
        "name": "Marathon Dam",
        "lat": 38.150436,
        "lng": 23.948612,
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
            "codeHash": "308838e0c91f3f7f06b3f410342fdba2bdb63b6c5e02fd6d538837196e2f84cf"
        }
    },
    {
        "id": 72,
        "name": "Koutouki Cave",
        "lat": 38.019034,
        "lng": 23.80512,
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
            "codeHash": "74df928a72e72501155015587d3d9ddc034af941dee36dce822211d7aa7aaa50"
        }
    },
    {
        "id": 73,
        "name": "Eleutherae Ancient Fortress",
        "lat": 38.1814,
        "lng": 23.3769,
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
            "codeHash": "f509b20af401682192f608ca494fa7dc92558d92bb287411ec474b9f8b414198"
        }
    },
    {
        "id": 74,
        "name": "Phyle Fortress",
        "lat": 38.14,
        "lng": 23.637,
        "image": "images/phyle_fortress.jpg",
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
            "codeHash": "2194f911398255647072e504a08cc927ba71e244c5cbc520c48afe4c65af6064"
        }
    },
    {
        "id": 75,
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
            "codeHash": "ed3b0e45b96a0de2c3c9d1e2a9030d4d572c578cb0e6179d494fbc44890aad89"
        }
    },
    {
        "id": 76,
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
            "codeHash": "b2ce7b14e60dc715728b170a05ad71da9b978c4bc20fc9fe09688afbf2d4eaf0"
        }
    },
    {
        "id": 77,
        "name": "Schinias National Park",
        "lat": 38.1207,
        "lng": 23.985,
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
            "codeHash": "1fd4fd4a2692d3fa2da1532414fd1c4d5ed246c4a5d94778812ba7ecf3381361"
        }
    },
    {
        "id": 78,
        "name": "Saint John the Hunter Monastery",
        "lat": 37.95215,
        "lng": 23.82744,
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
            "codeHash": "5f63cc5dde64fd120ecce654e4080e59dbe55d1acd7cc19f32fdaedc5f6fe979"
        }
    },
    {
        "id": 79,
        "name": "Plato's Academy Archaeological Park",
        "lat": 37.9922,
        "lng": 23.7083,
        "image": "images/academy_athens.png",
        "description": "The physical birthplace of Western higher learning, where Plato founded his famous school in 387 BC.",
        "audioText": "Welcome to Plato's Academy Archaeological Park. Here, in a grove of olive trees outside the ancient walls of Athens, the philosopher Plato established the Academy in 387 BC. It was not a school in the modern sense, but a sanctuary for intellectual exploration and debate. The Academy flourished for over 900 years, attracting scholars from across the Greek world, including Plato's most famous student, Aristotle. Walking through these quiet ruins, you stand at the very foundations of Western philosophy, science, and education.",
        "quiz": {
            "question": "In which year did Plato found the Academy?",
            "options": [
                "387 BC",
                "507 BC",
                "146 BC",
                "335 BC"
            ],
            "answer": 0,
            "feedback": "Correct! Plato founded the Academy in 387 BC, establishing a center of learning that lasted for centuries."
        },
        "reward": {
            "title": "10% off philosophy books",
            "provider": "Academy Bookstore",
            "codeHash": "7828ecec87d75f6c00ebc73fdd69ddba6b10af27c6e74a1b9df5efa5c62a919c"
        }
    },
    {
        "id": 80,
        "name": "Kynosarges Archaeological Site",
        "lat": 37.968,
        "lng": 23.745,
        "image": "images/aristotle_s_lyceum.jpg",
        "description": "The ancient gymnasium dedicated to Heracles, famous as the birthplace of Cynic Philosophy under Antisthenes.",
        "audioText": "Explore the ruins of Kynosarges, situated south of the Acropolis. In ancient times, this area housed a famous gymnasium dedicated to Heracles, which was reserved for people of mixed Athenian and foreign ancestry. It was here, in the early 4th century BC, that the philosopher Antisthenes began teaching his followers. His teachings laid the foundation for Cynic philosophy, which advocated for a life of virtue lived in accordance with nature, free from societal conventions. The name Kynosarges means 'white dog,' commemorating a myth of a dog stealing a sacrifice.",
        "quiz": {
            "question": "Which philosophical school was founded at Kynosarges?",
            "options": [
                "Cynic philosophy",
                "Stoic philosophy",
                "Epicurean philosophy",
                "Platonic philosophy"
            ],
            "answer": 0,
            "feedback": "Correct! Antisthenes taught at Kynosarges, leading to the birth of Cynic philosophy."
        },
        "reward": {
            "title": "Free guide booklet on philosophy",
            "provider": "Koukaki Cultural Center",
            "codeHash": "002e9c6f23904201aa77a0b138b97bfe14ddd1405c9820855087f6f211f8b3f3"
        }
    },
    {
        "id": 81,
        "name": "Tomb of Sophocles",
        "lat": 37.975351,
        "lng": 23.736366,
        "image": "images/first_cemetery_of_athens.jpg",
        "description": "The ancient burial mound of the great tragic playwright Sophocles, situated in his ancestral deme near Varibobi.",
        "audioText": "Stand before the Tomb of Sophocles, located near the modern suburb of Varibobi. This large earth and stone burial mound marks the final resting place of one of ancient Greece's greatest tragic playwrights. Sophocles, who wrote masterpieces like Oedipus Rex and Antigone, died in 406 BC at the age of 90. According to legend, the Spartan general Lysander, who was besieging Athens, allowed the playwright's funeral procession to pass safely through military lines out of respect for his genius. The tomb is a monument to the high status of playwrights in classical society.",
        "quiz": {
            "question": "Which famous play was written by the tragic playwright Sophocles?",
            "options": [
                "Oedipus Rex",
                "The Iliad",
                "The Frogs",
                "Medea"
            ],
            "answer": 0,
            "feedback": "Correct! Sophocles wrote Oedipus Rex, one of the most famous tragedies in theatrical history."
        },
        "reward": {
            "title": "15% off classic theater tickets",
            "provider": "Athens Municipal Theater",
            "codeHash": "5bdc693ff0bd8fb3cbb6fe63bf8717ca92378db4acc9838c4ccf4a861b805248"
        }
    },
    {
        "id": 82,
        "name": "Temple of Apollo Zoster",
        "lat": 37.810009,
        "lng": 23.77373,
        "image": "images/temple_apollo_zoster.jpg",
        "description": "A 6th-century BC temple discovered in 1924 under the sand of a popular beach, dedicated to Apollo.",
        "audioText": "Observe the Temple of Apollo Zoster, located on the Astir beach in Vouliagmeni. Constructed in the late 6th century BC, this temple was lost for centuries until it was discovered in 1924 by orphanage children playing in the sand. The sanctuary was dedicated to Apollo Zoster, meaning 'Apollo of the Girdle.' According to mythology, when Leto was pregnant with Apollo and Artemis, she believed she was about to give birth here and loosened her golden girdle. The temple remains a unique example of an ancient sacred site preserved on the modern coastline.",
        "quiz": {
            "question": "What does the name 'Zoster' mean in the temple's title?",
            "options": [
                "Girdle or belt",
                "Sun god",
                "Archer",
                "Golden chariot"
            ],
            "answer": 0,
            "feedback": "Correct! 'Zoster' means girdle, commemorating where Leto loosened her girdle before giving birth."
        },
        "reward": {
            "title": "Free entry to Astir Beach area",
            "provider": "Astir Beach Reception",
            "codeHash": "27d4d22e9840f3f8635496e0aa8e447e11e912ae740722d39f34be8b091262a9"
        }
    },
    {
        "id": 83,
        "name": "Archaeological Site of Kolona",
        "lat": 37.7478,
        "lng": 23.4246,
        "image": "images/kolona_archaeological.jpg",
        "description": "The prehistoric acropolis of Aegina Island, dominated by a single standing column of a Temple of Apollo.",
        "audioText": "Visit the archaeological site of Kolona, the historic acropolis of Aegina Island. Occupied continuously since the Neolithic era, the hill contains layers of ancient fortifications and residential streets. Today, the site is dominated by a single, tall limestone column (kolona) standing on the hilltop. This column is the sole survivor of a grand Doric Temple of Apollo built around 510 BC. The hill offers spectacular views of the Saronic Gulf and houses a museum showing Aegina's early prehistoric pottery and bronze treasures.",
        "quiz": {
            "question": "Which god was the main classical temple at Kolona dedicated to?",
            "options": [
                "Apollo",
                "Zeus",
                "Athena",
                "Poseidon"
            ],
            "answer": 0,
            "feedback": "Correct! The single standing column is the ruin of the Temple of Apollo."
        },
        "reward": {
            "title": "10% off entry to the Kolona Museum",
            "provider": "Kolona Archaeological Site",
            "codeHash": "a53be4c7367dd37e1f8defb8e2219d688bc9bdda7803114b76923b3c9bbab434"
        }
    },
    {
        "id": 84,
        "name": "Phaleron Delta Ancient Cemetery (Phaleron Captives)",
        "lat": 37.928762,
        "lng": 23.694219,
        "image": "images/first_cemetery_of_athens.jpg",
        "description": "A massive archaic cemetery famous for the discovery of bound skeletons linked to Cylon's ancient conspiracy.",
        "audioText": "Stand near the Phaleron Delta, the location of a massive ancient cemetery dating from the 8th to the 4th centuries BC. The site gained global attention during excavations when archaeologists discovered a set of skeletons bound in iron shackles. Known as the 'Phaleron Captives,' these individuals were executed and buried in mass graves. Historians link these executions to Cylon's failed coup attempt in 632 BC, when supporters of the noble Cylon were slaughtered. The site offers a grim look into political violence and capital punishment in archaic Athens.",
        "quiz": {
            "question": "What historic discovery was made at the Phaleron Delta Cemetery?",
            "options": [
                "Shackled skeletons (captives)",
                "A golden royal chariot",
                "The tomb of Pericles",
                "The lost library of Aristotle"
            ],
            "answer": 0,
            "feedback": "Correct! The discovery of bound skeletons shed new light on ancient capital punishment and historical events."
        },
        "reward": {
            "title": "Free historical guide leaflet",
            "provider": "Phaleron Library",
            "codeHash": "da2c4a5020cc6f699484e03f543c129a9e4404926d192e4e4ee8497c56830c97"
        }
    },
    {
        "id": 85,
        "name": "Ancient Deme of Halai Aixonides",
        "lat": 37.969914,
        "lng": 23.71918,
        "image": "images/halai_aixonides.jpg",
        "description": "An archaeological site in Voula showing the marketplace and residential streets of a classical coastal deme.",
        "audioText": "Explore the ruins of the Ancient Deme of Halai Aixonides, located in modern Voula. This classical township was one of the key coastal demes of Athens. Archaeological excavations have uncovered the remains of the deme's marketplace (agora), a small theater, residential houses, and salt-pans. The deme played an important economic role in producing salt and exporting fish to Athens. Walking through these stone foundations highlights the daily life of ancient citizens who lived outside the main city center.",
        "quiz": {
            "question": "What economic product was the deme of Halai Aixonides famous for producing?",
            "options": [
                "Salt",
                "Silver coins",
                "Bronze weapons",
                "Purple dye"
            ],
            "answer": 0,
            "feedback": "Correct! The coastal deme was known for its salt-pans and fishing industry."
        },
        "reward": {
            "title": "10% off sea-salt seasoning blends",
            "provider": "Voula Organic Market",
            "codeHash": "58f351aeb83ac25e3d6d246e9b115486820537a454704b76d20567e53246fe16"
        }
    },
    {
        "id": 86,
        "name": "The Dema Wall",
        "lat": 38.073466,
        "lng": 23.669041,
        "image": "images/dema_wall.jpg",
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
            "codeHash": "ba1f93880403c45b16a927583818fd40b22a3e764f20d9f765ba201f0a4993d9"
        }
    },
    {
        "id": 87,
        "name": "Agrileza Silver Workshops",
        "lat": 37.6744,
        "lng": 24.015,
        "image": "images/penteli_quarries.png",
        "description": "The ancient industrial workshops where Lavrion silver ore was washed and processed by slaves in antiquity.",
        "audioText": "Welcome to the Agrileza ancient silver workshops, located in the Lavreotiki national park. Here, the silver ore mined from the earth was crushed and washed using stone tables. The washing tables allowed the heavy silver-bearing lead particles to settle while the lighter stone was washed away. This industrial process was carried out under brutal conditions by thousands of enslaved laborers. The wealth generated here funded the expansion of the Athenian navy and built the monumental buildings of Athens' Golden Age, linking the glory of democracy to the exploitation of slave labor.",
        "quiz": {
            "question": "What industrial process was carried out at the Agrileza workshops?",
            "options": [
                "Washing and separating silver ore",
                "Minting silver coins",
                "Smelting iron weapons",
                "Carving marble columns"
            ],
            "answer": 0,
            "feedback": "Correct! The workshops used flat stone tables to wash and concentrate silver ore."
        },
        "reward": {
            "title": "15% off Lavrion Mine tours",
            "provider": "Lavreotiki Historical Tours",
            "codeHash": "b9d4fa031013def6f30ae7dd43ff45b5a870cfeb4d4e05f412ddb87358303d4c"
        }
    },
    {
        "id": 88,
        "name": "The Diateichisma Wall",
        "lat": 37.981068,
        "lng": 23.728715,
        "image": "images/diateichisma_wall.jpg",
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
            "codeHash": "8537da1329df78be616d22aa828097fb82b873dc22b16e848276c23c847ea746"
        }
    },
    {
        "id": 89,
        "name": "Cave of Pan",
        "lat": 38.011272,
        "lng": 23.631127,
        "image": "images/koutouki_cave.png",
        "description": "A mystical cave of stalactites near Marathon where worship of Pan began after the Battle of Marathon.",
        "audioText": "Step into the Cave of Pan, located in the gorge of Oinoi near Marathon. This natural stalactite cave became a sacred sanctuary dedicated to the goat-god Pan. According to legend, during the Battle of Marathon in 490 BC, Pan caused 'panic' among the invading Persian soldiers, helping the Greeks secure their victory. In gratitude, the Athenians established his cult in this cave. The cave features a narrow entrance leading to multiple chambers filled with stalactites, where ancient worshippers left clay lamps and figurines.",
        "quiz": {
            "question": "Which god was worshipped in this stalactite cave near Marathon?",
            "options": [
                "Pan, the goat-god",
                "Zeus, the king of gods",
                "Apollo, the sun god",
                "Poseidon, the sea god"
            ],
            "answer": 0,
            "feedback": "Correct! The cave was dedicated to Pan to thank him for his help in the Battle of Marathon."
        },
        "reward": {
            "title": "Free organic goat cheese snack with lunch",
            "provider": "Marathon Country Tavern",
            "codeHash": "dab45d150fc2d019abc496f08e130895153ff2b2fe21b5a59ec17f62ae6d1d7d"
        }
    },
    {
        "id": 90,
        "name": "Sanctuary of Zeus Ombrios",
        "lat": 37.984296,
        "lng": 23.284779,
        "image": "images/olympian_zeus.png",
        "description": "A mountain-top sanctuary on Hymettus where ancient farmers offered sacrifices to Zeus for rain.",
        "audioText": "Climb to the Sanctuary of Zeus Ombrios, located on a high ridge of Mount Hymettus. The name Ombrios means 'the Rainbringer.' In ancient times, this high peak was a sacred site where Athenian farmers came during droughts to pray, make vows, and offer sacrifices to Zeus, asking him to send rain for their crops. Archaeologists have discovered thousands of ancient pottery vessels and offering tables at this site, illustrating the deep connection between ancient religion and agricultural survival.",
        "quiz": {
            "question": "What does the epithet 'Ombrios' mean in Zeus's title at this sanctuary?",
            "options": [
                "The Rainbringer",
                "The Thunderer",
                "The Earthshaker",
                "The Protector"
            ],
            "answer": 0,
            "feedback": "Correct! Zeus Ombrios was worshipped specifically as the sender of rain."
        },
        "reward": {
            "title": "10% off Mount Hymettus wildflower honey",
            "provider": "Hymettus Honey Stall",
            "codeHash": "ed740445e63fc1785d7ae08e09b7b1aed4a76553b77a10b47c71279c5466d2b0"
        }
    },
    {
        "id": 91,
        "name": "Valanaris Waterfall",
        "lat": 38.0956,
        "lng": 23.8845,
        "image": "images/lake_vouliagmeni.png",
        "description": "A beautiful, hidden natural waterfall and stream creating a lush green oasis on the slopes of Penteli.",
        "audioText": "Discover the Valanaris Waterfall, a hidden natural gem located on the eastern slopes of Mount Penteli near Drafi. Fed by a small mountain stream, the water falls over a six-meter cliff, forming a natural pool surrounded by trees. The name Valanaris comes from the oak trees (valanidies) that once covered the area. This stream flows year-round, creating a lush green oasis in the dry Attica landscape that serves as a sanctuary for local birds, frogs, and tortoises.",
        "quiz": {
            "question": "Where does the name 'Valanaris' originate from?",
            "options": [
                "From the oak trees (valanidies)",
                "From an ancient stream god",
                "From a marble quarry owner",
                "From a Byzantine general"
            ],
            "answer": 0,
            "feedback": "Correct! The name honors the oak forest that historically covered the mountain."
        },
        "reward": {
            "title": "Free bottled organic juice",
            "provider": "Drafi Oasis Kiosk",
            "codeHash": "cf84456fd74be705fb7f4e60b515b9ea7122b56359eb9c1b61f1510501f4a1a8"
        }
    },
    {
        "id": 92,
        "name": "Kaisariani Botanical Garden",
        "lat": 38.010599,
        "lng": 23.642736,
        "image": "images/aristotle_s_lyceum.jpg",
        "description": "A conservation park on Mount Hymettus dedicated to preserving native Greek herbs and wildflowers.",
        "audioText": "Stroll through the Kaisariani Botanical Garden, situated next to the historic monastery on Mount Hymettus. Established to preserve the native flora of Attica, the garden contains a vast collection of aromatic, medicinal, and historic plants, including wild thyme, sage, oregano, and rare orchids. In antiquity, the honey produced on Mount Hymettus from these aromatic herbs was famous across the Mediterranean. The garden offers peaceful walking paths and serves as a living museum of Greek botanical heritage.",
        "quiz": {
            "question": "What product from Mount Hymettus was famous in antiquity due to its aromatic herbs?",
            "options": [
                "Wildflower honey",
                "White marble",
                "Red wine",
                "Olive oil"
            ],
            "answer": 0,
            "feedback": "Correct! The honey of Hymettus was famous for its flavor, derived from the mountain's aromatic herbs."
        },
        "reward": {
            "title": "10% off local organic herb blends",
            "provider": "Kaisariani Herb Shop",
            "codeHash": "8b561aa691955c44229c5815ea44ac6bc21d34f9cb16b374c35195d227693b76"
        }
    },
    {
        "id": 93,
        "name": "Temple of Artemis Agrotera",
        "lat": 37.967538,
        "lng": 23.735485,
        "image": "images/rhamnous.png",
        "description": "The ruined foundations of an ancient temple overlooking the Ilissos River where the goddess of the hunt was worshipped.",
        "audioText": "Observe the ruins of the Temple of Artemis Agrotera, located in the Mets district near the Panathenaic Stadium. Constructed in the 5th century BC, this temple was dedicated to Artemis of the Hunt (Agrotera). According to historical accounts, the Athenians sacrificed 500 goats at this temple each year to thank Artemis for her aid in their victory over the Persians at the Battle of Marathon. The temple was built in the elegant Ionic style, but today only its foundations remain visible.",
        "quiz": {
            "question": "Which battle's victory did the Athenians celebrate with annual sacrifices at this temple?",
            "options": [
                "Battle of Marathon",
                "Battle of Salamis",
                "Battle of Thermopylae",
                "Peloponnesian War"
            ],
            "answer": 0,
            "feedback": "Correct! The sacrifices commemorated the victory at Marathon in 490 BC."
        },
        "reward": {
            "title": "Free organic herbal tea with breakfast",
            "provider": "Mets District Café",
            "codeHash": "2b9ed13db705a280cbcf2840365dc575a66b8ad6b67b2faf2c456266230188b9"
        }
    },
    {
        "id": 94,
        "name": "Choragic Monument of Nikias",
        "lat": 37.970239,
        "lng": 23.726959,
        "image": "images/choragic_monument_of_lysicrates.jpg",
        "description": "A monumental gateway on the south slope of the Acropolis constructed by Nikias to celebrate a theatrical victory.",
        "audioText": "Stand near the ruins of the Choragic Monument of Nikias, located on the south slope of the Acropolis. Built in 320 BC by the wealthy sponsor Nikias, this monument celebrated his victory in a dramatic contest at the Theatre of Dionysus. It was designed like a small temple with Doric columns. In the 3rd century AD, following a destructive invasion, the monument was dismantled, and its marble blocks were reused to construct the Beulé Gate, which served as the fortified entrance to the Acropolis.",
        "quiz": {
            "question": "What fortified Acropolis structure was built using the dismantled stones of this monument?",
            "options": [
                "The Beulé Gate",
                "The Propylaea",
                "The Erechtheion",
                "The Parthenon steps"
            ],
            "answer": 0,
            "feedback": "Correct! The stones of Nikias's monument were reused to construct the defensive Beulé Gate."
        },
        "reward": {
            "title": "10% off entry to the Acropolis slopes",
            "provider": "South Slope Ticket Office",
            "codeHash": "aa260a8fe78212f2d9c78a7df52b483dec76fa949b4a4af55bf58bd0f0a6dddf"
        }
    },
    {
        "id": 95,
        "name": "Temple of Apollo Erithaseos",
        "lat": 37.975557,
        "lng": 23.722124,
        "image": "images/temple_apollo_erithaseos.jpg",
        "description": "The archaeological remains of a rustic sanctuary of Apollo nestled in the northern suburb of Kifisia.",
        "audioText": "Visit the site of the Temple of Apollo Erithaseos in Kifisia. Nestled in a wooded valley, this ancient sanctuary was dedicated to Apollo in his role as a rustic deity of harvest and agriculture. Archaeologists have uncovered the temple foundations, ancient boundary stones, and inscriptions recording religious laws. The site demonstrates how the worship of major Olympic gods extended into the rural demes of Attica, providing local farmers with a place of worship and community.",
        "quiz": {
            "question": "What role did Apollo serve at this rustic sanctuary in Kifisia?",
            "options": [
                "Deity of harvest and agriculture",
                "God of naval warfare",
                "Patron of theater and comedy",
                "Messenger of the underworld"
            ],
            "answer": 0,
            "feedback": "Correct! Apollo was worshipped here as a rural protector of crops and harvest."
        },
        "reward": {
            "title": "Free standard coffee with pastry",
            "provider": "Kifisia Plaza Café",
            "codeHash": "cd65af9e1099c804a44186990329c23f1d0815269b26a241d564aebd3fba6581"
        }
    },
    {
        "id": 96,
        "name": "Archaeological Museum of Megara",
        "lat": 37.989012,
        "lng": 23.732958,
        "image": "images/national_archaeological_museum.jpg",
        "description": "A museum displaying ancient sculptures, gravestones, and votive offerings from the independent city-state of Megara.",
        "audioText": "Enter the Archaeological Museum of Megara, housed in a historic 19th-century building in Megara town. The museum displays discoveries from the ancient city-state of Megara and its surroundings, spanning from the geometric period to Roman times. The exhibits include marble sculptures, detailed grave monuments, and clay figurines. Look for the marble victory monuments and pottery illustrating Megara's history as a major colonial power that founded cities like Byzantium.",
        "quiz": {
            "question": "Which famous historic city did colonizers from Megara establish?",
            "options": [
                "Byzantium (later Constantinople)",
                "Rome",
                "Alexandria",
                "Carthage"
            ],
            "answer": 0,
            "feedback": "Correct! Megarian colonists founded Byzantium in 657 BC."
        },
        "reward": {
            "title": "10% off museum guide booklets",
            "provider": "Megara Museum Gift Shop",
            "codeHash": "386c11ffd59f8918c94b2663224afb7dfbb2ee94afd0d90b23d8ff080e33a51d"
        }
    },
    {
        "id": 97,
        "name": "Monastery of Kleiston",
        "lat": 38.1244,
        "lng": 23.6692,
        "image": "images/kleiston_parnitha.jpg",
        "description": "A historic 11th-century Byzantine monastery built on the edge of a deep gorge on Mount Parnitha.",
        "audioText": "Explore the Monastery of Kleiston, located on a cliff overlooking the deep gorge of Gouras on Mount Parnitha. Founded in the late 11th century, this historic monastery was named Kleiston, meaning 'the enclosed,' due to its dramatic location surrounded by high mountains. The monastery features a small Byzantine church, a central courtyard, and fortified walls that protected it from raids. It offers a tranquil escape and acts as a historic starting point for hikes into the national park.",
        "quiz": {
            "question": "Around which century was the Monastery of Kleiston founded?",
            "options": [
                "11th Century AD",
                "5th Century BC",
                "15th Century AD",
                "19th Century AD"
            ],
            "answer": 0,
            "feedback": "Correct! The monastery was established during the middle Byzantine era in the 11th century."
        },
        "reward": {
            "title": "Free guide brochure of Mount Parnitha trails",
            "provider": "Kleiston Information Kiosk",
            "codeHash": "5978cbd20befb65bc4d3bfe36b364e0369e6672b8409ce47487703d5c3657039"
        }
    },
    {
        "id": 98,
        "name": "Tower of Markellos",
        "lat": 37.7472,
        "lng": 23.4286,
        "image": "images/tower_markellos.jpg",
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
            "codeHash": "67e57ff6b7498562a824047a163c458824b44d27c4065a96372e54484f6d9472"
        }
    },
    {
        "id": 99,
        "name": "National Historical Museum",
        "lat": 37.989012,
        "lng": 23.732958,
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
            "codeHash": "fcc4c5649b7b47ec745157bb41b168e43bc914921bfd500de8c74abbb17798d4"
        }
    },
    {
        "id": 100,
        "name": "National Observatory of Athens",
        "lat": 37.970038,
        "lng": 23.765237,
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
            "codeHash": "1406cdc7ad5ea08fb084bdb3376bb5b377f82b6546f371d3d9ed60fdd1e13362"
        }
    },
    {
        "id": 101,
        "name": "Technopolis (Gazi)",
        "lat": 37.978564,
        "lng": 23.711477,
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
            "codeHash": "666d7321bae4a95679f99932530e9ced069cc38d38f6f9a83ad9e2049658f9a2"
        }
    },
    {
        "id": 102,
        "name": "Roman Baths at Zappeion",
        "lat": 37.971591,
        "lng": 23.733842,
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
            "codeHash": "608da01b4369bfbf0fb580718168db78dd77abd4c1afb173022166351c6fe3b5"
        }
    },
    {
        "id": 103,
        "name": "Stoa Poikile (Painted Stoa)",
        "lat": 37.975516,
        "lng": 23.73495,
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
            "codeHash": "caa12196a0c6251656f1e8076c4985890b9ab630b12fa98475f6c3a3dabbd7a9"
        }
    },
    {
        "id": 104,
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
            "codeHash": "5358ce7211f3c9ada368587cb85d0568158adb0029734c445c7ad4752b74f62b"
        }
    },
    {
        "id": 105,
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
            "codeHash": "9f237196784dfc375b99259919cf4ac7afa90ed25e54f19dd41829e008cee2c5"
        }
    },
    {
        "id": 106,
        "name": "Hadrian’s Aqueduct (Dexameni)",
        "lat": 37.979046,
        "lng": 23.741741,
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
            "codeHash": "933b9a5593134c2980e19ee0a6558be820c276155cea4c38989eb144c572082e"
        }
    },
    {
        "id": 107,
        "name": "Sacred Gate (Kerameikos)",
        "lat": 37.978176,
        "lng": 23.718355,
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
            "codeHash": "6afcdd12c4f098b9b2544af2a3893f37bf07eeac0d32122f023911aa6468bb73"
        }
    },
    {
        "id": 108,
        "name": "Temple of Ares (Agora)",
        "lat": 37.97259,
        "lng": 23.724641,
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
            "codeHash": "3dd469d4e34cfd2dba6f7e5bc1473965472fd5a20a91c149e98c2d6cd9d36cb6"
        }
    },
    {
        "id": 109,
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
            "codeHash": "8e790367e50cfa1154588b076d66899093677ad07653be6067013b33b7c501a9"
        }
    },
    {
        "id": 110,
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
            "codeHash": "60a66a09624872fd5a965822a55546d188406d4854e2daf7903ef5087f4badc7"
        }
    },
    {
        "id": 111,
        "name": "Tomb of Heinrich Schliemann",
        "lat": 37.964349,
        "lng": 23.736103,
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
            "codeHash": "cbd8ab87f1f8f384ebe08848eeb55dea968df4affec706cdff680d1e147332c9"
        }
    },
    {
        "id": 112,
        "name": "Tomb of Theodoros Kolokotronis",
        "lat": 37.977984,
        "lng": 23.733043,
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
            "codeHash": "221341c384728150771ac245202e237a38ad54b30cf75d66358c40b56e08ae5d"
        }
    },
    {
        "id": 113,
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
            "codeHash": "e21e9b2331d8e42d54f83b17edd9c9944758588e4acea56852ec77a24c3d6498"
        }
    },
    {
        "id": 114,
        "name": "Lysicrates Square (Street of Tripods)",
        "lat": 37.983551,
        "lng": 23.728159,
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
            "codeHash": "6756a0f3090dc0e45208130088c5742d17fca63ca817447ccacbb07b048c3726"
        }
    },
    {
        "id": 115,
        "name": "Tower of the Winds (Clepsydra Inlet)",
        "lat": 37.9741,
        "lng": 23.727,
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
            "codeHash": "b69e587dc086d14560b0352e829fb2bf0ca1b2913058f50297fca784178b9d21"
        }
    },
    {
        "id": 116,
        "name": "Areopagus Hill (Paul's Sermon Plaque)",
        "lat": 37.972247,
        "lng": 23.723349,
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
            "codeHash": "8b9b1f9c851641f7f4dccdb41f4bfb44e3499dc5e4266f9fe236ee078333bfc9"
        }
    },
    {
        "id": 117,
        "name": "National Garden (Roman Mosaic Floor)",
        "lat": 37.975516,
        "lng": 23.73495,
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
            "codeHash": "c539ecb65587389e74bd1d9bddc4203d2a5e99b5e9c8cbdada2d92dc74cc84a5"
        }
    },
    {
        "id": 118,
        "name": "Pnyx Hill Orator's Bema",
        "lat": 37.971543,
        "lng": 23.719381,
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
            "codeHash": "fe234a8f2efd80bd3a809248ddf2586324d48d1caa03c8b832271ac5a47915a3"
        }
    },
    {
        "id": 119,
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
            "codeHash": "45ea3c923b9d47ac6e085b5daaf887564e919046c14daf488afaf4f87bfd2cb4"
        }
    },
    {
        "id": 120,
        "name": "Monument of the Eponymous Heroes",
        "lat": 37.9752,
        "lng": 23.722,
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
            "codeHash": "0733cd7b024984f42ea2c5c9b36e45f631cb7b752dae3f2f3af91512b5a4b7d7"
        }
    },
    {
        "id": 121,
        "name": "Street of Tombs (Kerameikos)",
        "lat": 37.978634,
        "lng": 23.718221,
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
            "codeHash": "c65f8710893f7ab0a4c5d252d32f3c18f1da01fc57bba4ff2c1a8e8a8d8397c4"
        }
    },
    {
        "id": 122,
        "name": "Tzistarakis Mosque",
        "lat": 37.976,
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
            "codeHash": "9380f155b0f3b91f233b3879a5221d6fe1f0b0f3e5249c71cfec59f2ab2e5a82"
        }
    },
    {
        "id": 123,
        "name": "Adrianou Street (Plaka)",
        "lat": 37.976828,
        "lng": 23.720842,
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
            "codeHash": "dea5af24912c7e6384c9875f0240717ece6600fa8106417b3cc8c583af09f841"
        }
    },
    {
        "id": 124,
        "name": "Syntagma Metro Station Exhibition",
        "lat": 37.975516,
        "lng": 23.73495,
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
            "codeHash": "2de88d599f481f93c42e62eb33d93c969bd42e6420f128e7e1fce4bf6d9d4ca1"
        }
    },
    {
        "id": 125,
        "name": "Pikionis Landscaping (Philopappos)",
        "lat": 37.96894,
        "lng": 23.720219,
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
            "codeHash": "f4aec251fac32d52581da79a1936828dc1f6e514be8e25adb7db12a82b3d97ba"
        }
    },
    {
        "id": 126,
        "name": "Lycabettus Open Air Theatre",
        "lat": 37.977713,
        "lng": 23.783292,
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
            "codeHash": "1d0ef4414dab6e978e54a7cbf6ac263e6a8eb7e12769f29d5b378b52c33b7e3e"
        }
    },
    {
        "id": 127,
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
            "codeHash": "4e018f77dba78387b136cb72a77d3b98bd96ea648c958b046327c25e5c0ca6cf"
        }
    },
    {
        "id": 128,
        "name": "Tomb of Melina Mercouri",
        "lat": 37.969856,
        "lng": 23.731426,
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
            "codeHash": "da56d753030f270741624b735336f2954ba2165c6a58d884a08375e211f093ed"
        }
    },
    {
        "id": 129,
        "name": "Plato's Academy Sacred House",
        "lat": 37.991368,
        "lng": 23.708381,
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
            "codeHash": "bb83ffcee32384712090107cc259a9cd38ff5adc5242941cdaee6b82d7c2e4f9"
        }
    },
    {
        "id": 130,
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
            "codeHash": "7c57e7bd427e36107f3d7763acc38956ee9b1c78b5ca3d1b88e756574873284e"
        }
    },
    {
        "id": 131,
        "name": "Roman Agora East Propylon",
        "lat": 37.975021,
        "lng": 23.724193,
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
            "codeHash": "3b7bd13abad6abd118385c7e45127d401c06361ea7111908e70244831e2543d8"
        }
    },
    {
        "id": 132,
        "name": "Shrine of the Nymphs (Hill of Nymphs)",
        "lat": 38.081139,
        "lng": 23.825844,
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
            "codeHash": "64b070e305d525eddf45c36e8073b12c135db6573579ca97a056dee5d8b0c09b"
        }
    },
    {
        "id": 133,
        "name": "First Cemetery (Tomb of Andreas Syngros)",
        "lat": 37.963017,
        "lng": 23.738324,
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
            "codeHash": "19cc43d5996c342395463c007bffa6352d2ed95841f8f155a56b8e4b5bc4927e"
        }
    },
    {
        "id": 134,
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
            "codeHash": "883fac0ab62d11704b7d2274ce4ce540272048009d4539630443e1421a4aabc8"
        }
    },
    {
        "id": 135,
        "name": "University of Athens Great Hall",
        "lat": 37.970038,
        "lng": 23.765237,
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
            "codeHash": "d054e7f749975850dfc20bf9818fdaf5326ed38e5f3eed0497a070f872a586cb"
        }
    },
    {
        "id": 136,
        "name": "Mycenaean Golden Gallery",
        "lat": 37.989012,
        "lng": 23.732958,
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
            "codeHash": "69c6ad746b142494540dc8c88a78ef900c0a619530f593170f1a29d82392e99c"
        }
    },
    {
        "id": 137,
        "name": "Cape Sounion Geological Cliffs",
        "lat": 37.650212,
        "lng": 24.02459,
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
            "codeHash": "4b4ddb424fd1414f5174188d414f406c0ab61f5d5a632df7ac374034f65623e6"
        }
    },
    {
        "id": 138,
        "name": "Tomb of Sophia Schliemann",
        "lat": 37.990214,
        "lng": 23.769401,
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
            "codeHash": "05ca9534a46e28c9959170de3974683b348c5df4396ab60da66e269021eacab8"
        }
    },
    {
        "id": 139,
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
            "codeHash": "f4ece7d37baa0702eb65abf5e3adf5e63e758827543fb04c4c079a09e2b139b2"
        }
    },
    {
        "id": 140,
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
            "codeHash": "38184c5564a7b26ceb20189d6bf3975fb81cdf933e8ccaebe9d6097ac29f1a62"
        }
    },
    {
        "id": 141,
        "name": "The Pompeion (Kerameikos)",
        "lat": 37.978634,
        "lng": 23.718221,
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
            "codeHash": "e0109d2d4f96ec351c46fcc885f3b1de5babd65b9b25ff7671c82b84f2740377"
        }
    },
    {
        "id": 142,
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
            "codeHash": "802b866f777f26c7112d8caa2781d66c32b98c2eabc022fe5b9cd106473d79e1"
        }
    },
    {
        "id": 143,
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
            "codeHash": "c71f7a9868bb38d818281d3065a60f73c1f96018e9a2578dac3f86de48852ba0"
        }
    },
    {
        "id": 144,
        "name": "The Fallen Column (Olympian Zeus)",
        "lat": 37.969437,
        "lng": 23.733096,
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
            "codeHash": "c4f1ff08bb36a4a8054f68f0d07e021c7359a9edc17b54ccaef421cf7847f72e"
        }
    },
    {
        "id": 145,
        "name": "Tomb of Yannoulis Halepas",
        "lat": 38.017333,
        "lng": 23.741095,
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
            "codeHash": "020caff11614df9e47295f3f9eb57e82f03aa5fbd7555e316785e2bdf95ed448"
        }
    },
    {
        "id": 146,
        "name": "Tomb of George Averoff",
        "lat": 37.969344,
        "lng": 23.73928,
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
            "codeHash": "334808e4b8801bd379b99a78d232cf07a76e34faf90c3eda3bcb34cb7439fb53"
        }
    },
    {
        "id": 147,
        "name": "Tomb of Andreas Papandreou",
        "lat": 37.963017,
        "lng": 23.738324,
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
            "codeHash": "7016dbf1e2c1dfec97e4c3ddfe7cb6755c40f8283bc9a6c4c38da1ea416e8e06"
        }
    },
    {
        "id": 148,
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
            "codeHash": "16cd0aae88e224ccae240579cae3d5809d79ac710eae0764e1c4e2132071de86"
        }
    },
    {
        "id": 149,
        "name": "Plato's Academy Gymnasium Ruins",
        "lat": 37.992,
        "lng": 23.708,
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
            "codeHash": "af0b2173db684cef31b964af151736b1e2d0c2346bef3ccabe7ca562e37ce4a8"
        }
    },
    {
        "id": 150,
        "name": "Tomb of the Lacedaemonians",
        "lat": 37.978946,
        "lng": 23.718124,
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
            "codeHash": "7a16dbb7becfd9f4c6b5adb89dc2e28dab9f2500cb169397edd1e6ee11ed6318"
        }
    },
    {
        "id": 151,
        "name": "Sanctuary of Pandion (Acropolis)",
        "lat": 38.401755,
        "lng": 23.794579,
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
            "codeHash": "e35bf3a18c95ae2bd8ebdca3d2fee50aa66f6d8ae7132f701da1d8e3cf731ad2"
        }
    },
    {
        "id": 152,
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
            "codeHash": "4dcd2c8e03bba7174929c37b7d47a6b2bb7c348245159b510f198cb9d26bda4c"
        }
    },
    {
        "id": 153,
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
            "codeHash": "28fd8b2a44a2a898fe7e74f32712e422ec697c92d6c17d28bc0ee9f201f76cee"
        }
    },
    {
        "id": 154,
        "name": "Odeon of Agrippa Tritons Porch",
        "lat": 37.975,
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
            "codeHash": "243d0a794184b422e81f0665eb0d8261ca7c9170b45b58c01c2cf5a1c92db873"
        }
    },
    {
        "id": 155,
        "name": "Gazi Retort House (Technopolis)",
        "lat": 37.978564,
        "lng": 23.711477,
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
            "codeHash": "376d5aec8782c9665355776b740a9bd02ced9893bbe769910039cb5ce40ebf17"
        }
    },
    {
        "id": 156,
        "name": "National Museum Cycladic Figurines",
        "lat": 37.989012,
        "lng": 23.732958,
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
            "codeHash": "1df6abc8c9d96343e971dc1e1d7fea4102382ed8b6d3c07e10c09ca23d7cfbcb"
        }
    },
    {
        "id": 157,
        "name": "Cape Sounion Sanctuary Precinct",
        "lat": 37.650212,
        "lng": 24.02459,
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
            "codeHash": "33f9f8522b95d8a156c5f0fdef74aef48ae897976d3c93d2b13dea30a941822f"
        }
    },
    {
        "id": 158,
        "name": "Temple of Ares Relocation Block",
        "lat": 37.975516,
        "lng": 23.73495,
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
            "codeHash": "29f1d71be72993818fde4ae7364b80494af8fad5692f96c376df12ba80451536"
        }
    },
    {
        "id": 159,
        "name": "Metropolitan Cathedral (Saint Philothei Shrine)",
        "lat": 37.975311,
        "lng": 23.730072,
        "image": "images/cathedral_philothei.jpg",
        "description": "The reliquary containing the holy remains of Saint Philothei, the patron saint of Athens, housed inside the Metropolitan Cathedral.",
        "audioText": "Step inside the Metropolitan Cathedral of Athens, also known as the Metropolis. Near the altar, you will find the silver reliquary containing the remains of Saint Philothei, the patron saint of Athens. Born into a wealthy Athenian family in 1522 under Ottoman rule, she became a nun and used her vast inheritance to build schools, shelters, and hospitals. She is most celebrated for establishing a underground network to help Greek and foreign women escape slavery, which led to her arrest and martyrdom in 1589. She remains a symbol of humanitarian aid, freedom, and courage.",
        "quiz": {
            "question": "Which historic role did Saint Philothei play in 16th-century Athens?",
            "options": [
                "Established shelters and helped women escape slavery",
                "Designed the architecture of the cathedral",
                "Served as the first female mayor of the city",
                "Translated classical philosophy texts"
            ],
            "answer": 0,
            "feedback": "Correct! Saint Philothei used her wealth to establish shelters, hospitals, and escape networks for slaves."
        },
        "reward": {
            "title": "Free historic guide brochure",
            "provider": "Cathedral Information Desk",
            "codeHash": "5f9f0371af3b728977b05688304371b7d605252ed48d90233e301e0e2e54bbca"
        }
    },
    {
        "id": 160,
        "name": "Tomb of George Seferis",
        "lat": 38.061488,
        "lng": 23.855691,
        "image": "images/seferis_tomb.jpg",
        "description": "The simple white marble tomb in the First Cemetery of George Seferis, the Nobel laureate poet and diplomat.",
        "audioText": "Visit the grave of George Seferis in the First Cemetery of Athens. Seferis was one of the most important Greek poets of the 20th century, receiving the Nobel Prize in Literature in 1963 for his works that combined classical Greek themes with modern lyricism. He also served as a diplomat, representing Greece during critical periods. His funeral in 1971, during the military dictatorship, turned into a massive public demonstration for freedom as the crowd sang his banned poem, 'Refusal.' His tomb stands as a monument to poetry and civic resistance.",
        "quiz": {
            "question": "In which year did George Seferis receive the Nobel Prize in Literature?",
            "options": [
                "1963",
                "1979",
                "1950",
                "1988"
            ],
            "answer": 0,
            "feedback": "Correct! Seferis won the Nobel Prize in Literature in 1963, representing the generation of poets who revived modern Greek letters."
        },
        "reward": {
            "title": "15% off poetry anthologies",
            "provider": "Mets Literary Bookshop",
            "codeHash": "14b24945acbce1c2b787cd3c2b6b92919abc18df276b4d9f03d331e89dfb7839"
        }
    },
    {
        "id": 161,
        "name": "Church of Saint John the Theologian",
        "lat": 37.972922,
        "lng": 23.728777,
        "image": "images/st_john_theologian.jpg",
        "description": "A beautiful 11th-century Byzantine church in Plaka, famous for its elegant brickwork and well-preserved medieval murals.",
        "audioText": "Stand before the Church of Saint John the Theologian, located at the intersection of Erotokritou and Clepsydras streets in Plaka. Built in the late 11th century, this small, cross-in-square Byzantine church is one of the most charming medieval monuments in Athens. The walls feature elegant Athenian brickwork, and the interior preserves outstanding 13th-century frescoes, including depictions of the Virgin Mary and saints. The church has survived fires and urban reconstruction, keeping its medieval character intact.",
        "quiz": {
            "question": "Around which century was the Church of Saint John the Theologian constructed?",
            "options": [
                "11th Century AD",
                "5th Century BC",
                "15th Century AD",
                "19th Century AD"
            ],
            "answer": 0,
            "feedback": "Correct! The church was built during the middle Byzantine era in the late 11th century."
        },
        "reward": {
            "title": "Free traditional Greek coffee",
            "provider": "Plaka Square Cafe",
            "codeHash": "c898caa12b26d0f994093708e0ce98d15ce4acd491779aded94bf5db65d6277c"
        }
    },
    {
        "id": 162,
        "name": "Sanctuary of Aphrodite Pandemos",
        "lat": 37.972249,
        "lng": 23.72702,
        "image": "images/aphrodite_pandemos.jpg",
        "description": "The ruins of the ancient sanctuary dedicated to Aphrodite Pandemos, the goddess of love for all the people, on the Acropolis slope.",
        "audioText": "Explore the ruins of the Sanctuary of Aphrodite Pandemos, located on the southwest slope of the Acropolis. Established by Theseus to celebrate the unification of the Athenian demes, the title 'Pandemos' signifies Aphrodite as the goddess of love for 'all the people,' representing civic harmony and democratic unity. The sanctuary featured a temple decorated with relief carvings of doves. Today, only stone foundations and inscriptions remain, showing how religious worship was linked with political unity.",
        "quiz": {
            "question": "What did the title 'Pandemos' signify for the goddess Aphrodite at this sanctuary?",
            "options": [
                "Love for all the people (representing civic unity)",
                "Goddess of the sea and sailors",
                "Protector of military fortifications",
                "Goddess of hunting and wildlife"
            ],
            "answer": 0,
            "feedback": "Correct! 'Pandemos' means 'common to all the people,' symbolizing Aphrodite's role in bringing the unified citizens together in love and harmony."
        },
        "reward": {
            "title": "10% off organic herb blends",
            "provider": "Acropolis Slope Apothecary",
            "codeHash": "42a03d2ac5d07087a9c4b7ca5a77353a3eaf444bfb106c251f407396838acff1"
        }
    },
    {
        "id": 163,
        "name": "Heliaia (Ancient Supreme Court)",
        "lat": 37.975516,
        "lng": 23.73495,
        "image": "images/heliaia.jpg",
        "description": "The ruins of the Heliaia, the largest and most important public courthouse of ancient democratic Athens.",
        "audioText": "Observe the large rectangular foundations of the Heliaia, situated at the southern end of the Agora. Built in the 6th century BC, this was the largest public court in Athens, where cases were decided by popular juries. Juries were exceptionally large—ranging from 201 to 1,501 citizens chosen by lot—to prevent bribery. The trials were timed using water clocks, and jurors cast their votes using bronze ballots. Standing before these foundations, you are looking at the location where some of the most historic legal battles of democratic Athens took place.",
        "quiz": {
            "question": "Why did the Athenian courts use exceptionally large popular juries?",
            "options": [
                "To prevent bribery and corruption",
                "Because there were no judges",
                "To allow tourists to participate",
                "To represent the different cities of Greece"
            ],
            "answer": 0,
            "feedback": "Correct! Having hundreds of jurors chosen at the last minute by lottery made it nearly impossible to bribe or influence the court."
        },
        "reward": {
            "title": "15% off history publications",
            "provider": "Agora Court Bookshop",
            "codeHash": "27c8afffd114f81ecdd6f3771838a11b39d507895776acbd0271518e0eac7d6d"
        }
    },
    {
        "id": 164,
        "name": "Philopappos Hill Quarry Paths",
        "lat": 37.967363,
        "lng": 23.721368,
        "image": "images/philopappos_quarry.jpg",
        "description": "Traces of ancient marble quarries and rock-cut pathways visible along the western slopes of Philopappos Hill.",
        "audioText": "Walk along the western slopes of Philopappos Hill and observe the rock faces. This area was once an ancient stone quarry, from which limestone and schist were extracted to build the houses and public monuments of Athens. If you look closely at the rock, you can still see the markings left by ancient chisels and wedges. The pathways here were cut directly into the rock to transport the stone blocks down to the city, illustrating the ancient industrial activity that supported Athens' construction.",
        "quiz": {
            "question": "What activity left the vertical markings visible on the rock faces of this hill?",
            "options": [
                "Ancient stone quarrying and extraction",
                "Erosion from ancient water aqueducts",
                "Military fortifications built during the Persian war",
                "Carved religious inscriptions to the muses"
            ],
            "answer": 0,
            "feedback": "Correct! The markings are the traces left by ancient stonemasons extracting blocks from the quarry."
        },
        "reward": {
            "title": "Free historic guide brochure",
            "provider": "Philopappos Paths Kiosk",
            "codeHash": "16d2d990c9611fccabd0b0d8ae519a78fc4497605a676a3745e2af9e1733d306"
        }
    },
    {
        "id": 165,
        "name": "Church of the Pantanassa (Monastiraki)",
        "lat": 37.975058,
        "lng": 23.730017,
        "image": "images/pantanassa_church.jpg",
        "description": "The 10th-century Byzantine church in Monastiraki Square, which originally served as the chapel of a large monastery complex.",
        "audioText": "Observe the small Byzantine church standing in Monastiraki Square, dedicated to the Dormition of the Virgin Mary. Built in the 10th century, this church was historically known as the Pantanassa. Following the Greek war of independence, the surrounding monastery buildings were dismantled, leaving only the small chapel standing. The citizens began calling it the 'Monastiraki' or 'little monastery,' which eventually gave the entire square and district its modern name.",
        "quiz": {
            "question": "Which historic church gave the Monastiraki district its modern name?",
            "options": [
                "Church of the Pantanassa (little monastery)",
                "Church of Kapnikarea",
                "Metropolitan Cathedral of Athens",
                "Agia Irene Church"
            ],
            "answer": 0,
            "feedback": "Correct! The Pantanassa monastery chapel was nicknamed 'Monastiraki,' which eventually named the entire neighborhood."
        },
        "reward": {
            "title": "Free traditional Greek coffee",
            "provider": "Monastiraki Square Cafe",
            "codeHash": "51622fe98eace4f6fd169fac0c50e7784e1d31a77a35e895fa5f7864d4f95fdd"
        }
    },
    {
        "id": 166,
        "name": "Tomb of Dexileos (Kerameikos)",
        "lat": 37.978634,
        "lng": 23.718221,
        "image": "images/dexileos_tomb.jpg",
        "description": "The famous grave monument in the Kerameikos commemorating the young Athenian cavalryman Dexileos, who fell in battle in 394 BC.",
        "audioText": "Stand before the Monument of Dexileos in the Kerameikos. This classical grave relief, carved in 394 BC, commemorates Dexileos, a 20-year-old Athenian cavalryman who died fighting in the Corinthian War. The relief depicts Dexileos on a rearing horse, striking down a fallen Spartan enemy. The monument is historically significant because the inscription records his exact birth and death years, showing that even during intense wars, individual soldiers were honored with detailed, artistic memorials by their families.",
        "quiz": {
            "question": "What military role did the young Dexileos serve during the Corinthian War?",
            "options": [
                "A cavalryman on horseback",
                "A hoplite infantryman",
                "A trireme naval commander",
                "An archer in the light forces"
            ],
            "answer": 0,
            "feedback": "Correct! Dexileos is famously depicted as a mounted cavalry officer striking down a Spartan enemy."
        },
        "reward": {
            "title": "10% off museum entry tickets",
            "provider": "Kerameikos Museum Desk",
            "codeHash": "dd6d28989f1dbdab97e300e02769176e3a3c2b1da6814c48b1ab7b98ae406db5"
        }
    },
    {
        "id": 167,
        "name": "National Garden Botanical Museum",
        "lat": 37.975516,
        "lng": 23.73495,
        "image": "images/botanical_museum.jpg",
        "description": "The historic neoclassical pavilion inside the National Garden displaying plant specimens and historical landscaping records.",
        "audioText": "Stroll to the neoclassical pavilion inside the National Garden, which houses the Botanical Museum. Built in the 19th century during the creation of the Royal Gardens by Queen Amalia, the museum displays a collection of seeds, pressed leaves, and wood specimens from the park's diverse flora. It also preserves historical documents and maps showing how this lush green park was designed, illustrating the botanical history of the city's central green space.",
        "quiz": {
            "question": "Which queen of Greece famously established the Royal Gardens (now National Garden) in the 19th century?",
            "options": [
                "Queen Amalia",
                "Queen Olga",
                "Queen Sophia",
                "Queen Frederica"
            ],
            "answer": 0,
            "feedback": "Correct! Queen Amalia oversaw the landscaping and planting of the Royal Gardens starting in 1838."
        },
        "reward": {
            "title": "Free organic herbal tea",
            "provider": "National Garden Coffee Stand",
            "codeHash": "ad476296a6e0c168544c187329aa2b303bc07ea9a2441056fa434e1ba483c75d"
        }
    },
    {
        "id": 168,
        "name": "Antikythera Mechanism Gallery",
        "lat": 37.989012,
        "lng": 23.732958,
        "image": "images/antikythera_gallery.jpg",
        "description": "The dedicated display inside the National Archaeological Museum showcasing the fragments of the world's oldest analog computer.",
        "audioText": "Welcome to the gallery displaying the Antikythera Mechanism. Discovered by sponge divers in a shipwreck off the island of Antikythera in 1901, this complex bronze device dates to the 2nd century BC. It is widely considered the world's oldest analog computer, featuring a system of more than 30 interlocking gearwheels. The mechanism was used by ancient astronomers to calculate astronomical positions, solar eclipses, and the calendar cycle of the Olympic Games, showing the advanced level of Greek engineering.",
        "quiz": {
            "question": "What primary function did the Antikythera Mechanism serve?",
            "options": [
                "Calculating astronomical positions and solar eclipses",
                "Measuring depth and speed of warships",
                "Refining silver and gold bullion purity",
                "Weighing agricultural cargo at ports"
            ],
            "answer": 0,
            "feedback": "Correct! The mechanism was an analog computer designed to track the movements of the sun, moon, and planets."
        },
        "reward": {
            "title": "15% off science history booklets",
            "provider": "Museum Book Store",
            "codeHash": "2b8eb70aaf1b1f049fa39bd9624f659cad0109fd35e0709f3d2796cb89d3bc3f"
        }
    },
    {
        "id": 169,
        "name": "Gazi Purifier Building (Technopolis)",
        "lat": 37.978564,
        "lng": 23.711477,
        "image": "images/gazi_purifier.jpg",
        "description": "The industrial purifier hall inside Technopolis where gas was filtered and chemically cleaned before storage.",
        "audioText": "Step near the Gazi Purifier Building inside Technopolis. Constructed in the late 19th century, this building served a critical role in the gas manufacturing process. The coal gas produced in the furnaces contained impurities like sulfur and tar, which would clog pipes and release toxic fumes. In this building, the gas was passed through chemical filters containing lime and iron oxide to purify it before it was routed to the gasometers. The preserved equipment shows the chemical engineering methods of the industrial revolution.",
        "quiz": {
            "question": "What chemical filter substance was used to clean impurities from the coal gas?",
            "options": [
                "Lime and iron oxide",
                "Liquid charcoal and salt",
                "Sulfuric acid and lead",
                "Crushed marble dust"
            ],
            "answer": 0,
            "feedback": "Correct! Lime and iron oxide filters were used to scrub sulfur and other toxic impurities from the gas."
        },
        "reward": {
            "title": "10% off exhibition tickets",
            "provider": "Technopolis Ticket Office",
            "codeHash": "7598e97cb1cc0321ced8576c5a631eba1587606267503d91c0dd1d4c46848899"
        }
    },
    {
        "id": 170,
        "name": "Plato's Academy Peristyle Building",
        "lat": 37.991368,
        "lng": 23.708381,
        "image": "images/academy_peristyle.jpg",
        "description": "The ruins of the square peristyle building inside Plato's Academy park, traditionally linked to the school's central teaching halls.",
        "audioText": "Observe the rectangular foundations of the Peristyle Building inside Plato's Academy park. Dating to the Hellenistic period, this structure featured a square central courtyard surrounded by colonnades, or peristyles. Historians believe this building served as the central classroom and meeting hall for the philosophers who studied at the Academy. Standing before these stone foundations, you are looking at the birthplace of academic institutions, where scholars gathered to debate geometry, ethics, and logic.",
        "quiz": {
            "question": "What architectural layout characterizes the Peristyle Building?",
            "options": [
                "A square central courtyard surrounded by colonnades",
                "A circular dome built over a water spring",
                "A tall watchtower with defensive walls",
                "A long single-aisled marketplace stoa"
            ],
            "answer": 0,
            "feedback": "Correct! A peristyle refers to a continuous porch formed by a row of columns surrounding a courtyard."
        },
        "reward": {
            "title": "Free philosophy booklet",
            "provider": "Academy Park Information Desk",
            "codeHash": "c45ec4f1320fc29498dd7d81880bbed508352e1de1f95fcba5cfed20bc192ea1"
        }
    },
    {
        "id": 171,
        "name": "Tomb of Odysseas Elytis",
        "lat": 37.978867,
        "lng": 23.741605,
        "image": "images/elytis_tomb.jpg",
        "description": "The simple white marble grave in the First Cemetery of Odysseas Elytis, the Nobel laureate poet of the Aegean.",
        "audioText": "Visit the grave of Odysseas Elytis in the First Cemetery of Athens. One of the most celebrated Greek poets, Elytis received the Nobel Prize in Literature in 1979. His poetry is famous for celebrating the light, landscape, and sea of the Aegean, with his masterpiece, 'Axion Esti,' becoming a national anthem of hope and resilience set to music by Mikis Theodorakis. His tomb is a simple marble grave inscribed with his verse, representing the poetic spirit of modern Greece.",
        "quiz": {
            "question": "In which year did Odysseas Elytis receive the Nobel Prize in Literature?",
            "options": [
                "1979",
                "1963",
                "1950",
                "1996"
            ],
            "answer": 0,
            "feedback": "Correct! Elytis won the Nobel Prize in Literature in 1979, noted for his poetry depicting the Aegean sun."
        },
        "reward": {
            "title": "15% off poetry booklets",
            "provider": "Mets Books and Prints",
            "codeHash": "36f275ef729ffc30b16148e32822b62d12271aaba3f9815a700c7d7fef665c9f"
        }
    },
    {
        "id": 172,
        "name": "Stoa of the Herms (Agora)",
        "lat": 37.975854,
        "lng": 23.724106,
        "image": "images/stoa_herms.jpg",
        "description": "The archaeological site of the Stoa of the Herms, where ancient marble boundary posts were displayed in the Agora.",
        "audioText": "Observe the ruins of the Stoa of the Herms, located at the northern edge of the Agora. Built in the 5th century BC, this colonnade was famous for housing a large number of Herms—marble pillars topped with a bust of the god Hermes, which served as boundary markers and protectors of public spaces. The Herms were highly revered by citizens. In 415 BC, on the eve of the Sicilian Expedition, the citizens awoke to find that nearly all the Herms in the city had been mutilated, causing a massive religious scandal and political panic.",
        "quiz": {
            "question": "Which god was represented on the marble pillars (Herms) housed in this stoa?",
            "options": [
                "Hermes, the messenger god and protector of boundaries",
                "Apollo, god of light and arts",
                "Zeus, king of the gods",
                "Ares, god of war"
            ],
            "answer": 0,
            "feedback": "Correct! Herms were pillars topped with the head of Hermes, serving as civic boundary markers."
        },
        "reward": {
            "title": "10% off city walking maps",
            "provider": "Agora Information Center",
            "codeHash": "a7328dc678d42f9cfbf1905bde81caac23aa784f5563419ceb6701a93d25fce5"
        }
    },
    {
        "id": 173,
        "name": "Hadrian's Arch (Hadrian Inscription)",
        "lat": 37.9702,
        "lng": 23.7324,
        "image": "images/hadrian_arch_east.jpg",
        "description": "The classical inscription on the east facade of the arch which reads: 'This is the city of Hadrian, and not of Theseus.'",
        "audioText": "Observe the east facade of Hadrian's Arch, facing the Temple of Olympian Zeus. Carved above the archway is the Greek inscription: 'This is the city of Hadrian, and not of Theseus.' This inscription stands in direct contrast to the west side. It represents a bold declaration by the Roman Emperor Hadrian, marking the newly constructed Roman quarters of Athens as his own imperial city, distinct from the ancient classical city founded by Theseus.",
        "quiz": {
            "question": "Which Roman Emperor declared his ownership of the new quarters on this side of the arch?",
            "options": [
                "Emperor Hadrian",
                "Emperor Augustus",
                "Emperor Constantine",
                "Emperor Nero"
            ],
            "answer": 0,
            "feedback": "Correct! Hadrian declared the new extension of Athens as his city, marking the Roman expansion."
        },
        "reward": {
            "title": "Free Greek coffee with breakfast",
            "provider": "Hadrian View Cafe",
            "codeHash": "a009a7063188661e922d9d70f6217944ccbdb54a290a6a4988c4375d8e62d63b"
        }
    },
    {
        "id": 174,
        "name": "Odeon of Agrippa Giants Pillars",
        "lat": 37.975,
        "lng": 23.7229,
        "image": "images/agrippa_giants.jpg",
        "description": "The monumental structural pillars carved as human figures (Giants) that stood at the entrance of the Odeon of Agrippa.",
        "audioText": "Look closely at the tall stone pillars carved as human figures in the Agora. These represent Giants, the mythical earth-born enemies of the gods. Together with the fish-tailed Tritons, these colossal figures served as decorative pillars supporting the entrance porch of the rebuilt Odeon of Agrippa in the 2nd century AD. The carving detail, showing muscular human torsos, illustrates the Roman revival of classical sculpture styles to decorate public concert halls.",
        "quiz": {
            "question": "What mythical figures are represented by the human-torso pillars at the Odeon?",
            "options": [
                "Giants (earth-born enemies of the gods)",
                "Caryatids (female figures)",
                "Centaurs (half-horse figures)",
                "Satyrs (goat-like figures)"
            ],
            "answer": 0,
            "feedback": "Correct! The pillars represent Giants, contrasting with the fish-tailed Tritons next to them."
        },
        "reward": {
            "title": "15% off classical concert tickets",
            "provider": "Athens Concert Stage",
            "codeHash": "829d1d8d71a74cfe9ae30ae08a9f2931e756eda7cfffb827ad37131880ce27e4"
        }
    },
    {
        "id": 175,
        "name": "Sacred Way Milestone (Kerameikos)",
        "lat": 37.978634,
        "lng": 23.718221,
        "image": "images/sacred_way_milestone.jpg",
        "description": "The remains of the ancient stone milestone that marked the start of the Sacred Way inside the Kerameikos.",
        "audioText": "Observe the stone milestone ruins inside the Kerameikos, near the Sacred Gate. In ancient times, this marker marked the start of the Sacred Way, or Iera Odos, which ran for 22 kilometers from Athens to Eleusis. The milestone served as a zero point for travelers, letting them measure the distance traveled along the road. It stands as a monument to the road networks that connected ancient Greek cities.",
        "quiz": {
            "question": "What was the total distance of the Sacred Way from Athens to Eleusis?",
            "options": [
                "22 kilometers",
                "42 kilometers",
                "5 kilometers",
                "100 kilometers"
            ],
            "answer": 0,
            "feedback": "Correct! The road ran for approximately 22 kilometers (14 miles) to the sanctuary at Eleusis."
        },
        "reward": {
            "title": "10% off regional guide booklets",
            "provider": "Kerameikos Guide Office",
            "codeHash": "eab1f9abaf77e12595bcbc9b6ea64b47c8f4a1b88a7d36693122bd366fb6bd8f"
        }
    },
    {
        "id": 176,
        "name": "Stoa of Attalos Upper Floor View",
        "lat": 37.975854,
        "lng": 23.724106,
        "image": "images/attalos_upper_view.jpg",
        "description": "The upper colonnade of the Stoa of Attalos, offering panoramic views of the Agora and the temple of Hephaestus.",
        "audioText": "Climb to the upper floor of the Stoa of Attalos. The upper colonnade features Ionic columns, which are smaller and more detailed than the Doric columns on the ground floor. From this high viewpoint, you can look out across the entire Ancient Agora, seeing the foundations of the public buildings, the pathways, and the Temple of Hephaestus on the hill. In ancient times, citizens gathered here to watch festivals and civic processions below.",
        "quiz": {
            "question": "Which column style is used in the upper colonnade of the Stoa of Attalos?",
            "options": [
                "Ionic order",
                "Doric order",
                "Corinthian order",
                "Tuscan order"
            ],
            "answer": 0,
            "feedback": "Correct! The upper colonnade uses the Ionic order, while the ground level uses the Doric order."
        },
        "reward": {
            "title": "10% off museum guidebooks",
            "provider": "Agora Museum Desk Shop",
            "codeHash": "47a99504175662feecbf91ddf3da15ee660129c742877990386f6fe1c7ce3226"
        }
    },
    {
        "id": 177,
        "name": "Temple of Olympian Zeus Propylon",
        "lat": 37.9698,
        "lng": 23.733,
        "image": "images/zeus_propylon.jpg",
        "description": "The ruins of the monumental marble gateway built by Hadrian to serve as the main entrance to the temple precinct.",
        "audioText": "Stand near the ruins of the Propylon of the Temple of Olympian Zeus. Built in the 2nd century AD by the Roman Emperor Hadrian, this monumental marble gateway served as the main entrance to the massive walled temple precinct. The propylon featured Corinthian columns and detailed carvings, representing the grand gateway built to welcome visitors to the largest temple in Greece.",
        "quiz": {
            "question": "Which Roman Emperor constructed this monumental marble gateway?",
            "options": [
                "Emperor Hadrian",
                "Emperor Augustus",
                "Emperor Nero",
                "Emperor Trajan"
            ],
            "answer": 0,
            "feedback": "Correct! Hadrian built the propylon as part of his completion of the temple precinct."
        },
        "reward": {
            "title": "15% off traditional souvlaki",
            "provider": "O Thanasis Souvlaki",
            "codeHash": "48e289f36ed0a7e1c83c680f3fe5830665c5c14f9d8f8edf4aeaa900290cbd2a"
        }
    },
    {
        "id": 178,
        "name": "Tomb of Constantine Kanaris",
        "lat": 37.963017,
        "lng": 23.738324,
        "image": "images/kanaris_tomb.jpg",
        "description": "The grave in the First Cemetery of Constantine Kanaris, the Greek admiral and hero of the War of Independence who served as Prime Minister.",
        "audioText": "Visit the tomb of Constantine Kanaris in the First Cemetery. Kanaris was an admiral and hero of the Greek War of Independence, famous for his daring fire ship attacks that destroyed the Ottoman flagship at Chios in 1822. He later entered politics, serving as Prime Minister of Greece multiple times. His tomb is decorated with symbols of naval victory, honoring his courage and contribution to the birth of the modern Greek nation.",
        "quiz": {
            "question": "Which naval tactic was Constantine Kanaris most famous for using during the War of Independence?",
            "options": [
                "Daring fire ship attacks",
                "Submarine torpedo blockades",
                "Ironclad steamship bombardments",
                "Naval landing operations"
            ],
            "answer": 0,
            "feedback": "Correct! Kanaris was celebrated for using fire ships (ships filled with combustibles) to destroy enemy vessels."
        },
        "reward": {
            "title": "Free historic guide brochure",
            "provider": "First Cemetery Information Office",
            "codeHash": "8d402cd5a11343523e61f30c67a0ecb2be2c59df715a5b22286cd8ccd0ae33aa"
        }
    },
    {
        "name": "Stavros Niarchos Foundation Cultural Center (SNFCC)",
        "lat": 37.9398,
        "lng": 23.6922,
        "description": "A stunning modern cultural complex housing the National Library of Greece and the Greek National Opera.",
        "audioText": "Welcome to the Stavros Niarchos Foundation Cultural Center, a masterpiece of modern architecture designed by Renzo Piano. This sustainable complex includes the Greek National Opera, the National Library of Greece, and a massive 210,000 square meter public park. Notice the Energy Canopy, a massive solar roof that provides shade and generates power. The SNFCC has redefined modern Athens as a beacon of education, sustainability, and the arts.",
        "quiz": {
            "question": "Which renowned architect designed the SNFCC?",
            "options": [
                "Renzo Piano",
                "Zaha Hadid",
                "Norman Foster",
                "Santiago Calatrava"
            ],
            "answer": 0,
            "feedback": "Correct! Renzo Piano designed the SNFCC, ensuring it met high sustainability standards."
        },
        "reward": {
            "title": "15% off at Canal Cafe",
            "provider": "SNFCC Dining",
            "codeHash": "045622393ac671c6587b45b94054b5c45c5b1a34feb9872648846981ce1766b3"
        },
        "id": 179
    },
    {
        "name": "Eugenides Foundation Planetarium",
        "lat": 37.9405,
        "lng": 23.6934,
        "description": "One of the largest and best-equipped digital planetariums in the world.",
        "audioText": "You are standing near the Eugenides Planetarium. Established in 1956, the new digital planetarium is one of the largest in the world, with a massive 278 square meter dome. It provides spectacular immersive journeys through space, utilizing ultra-high-definition digital projection systems. The foundation's goal is to enhance scientific and technical education in Greece.",
        "quiz": {
            "question": "What is the primary educational focus of the Eugenides Foundation?",
            "options": [
                "Scientific and technical education",
                "Classical Greek history",
                "Ancient mythology",
                "Marine biology"
            ],
            "answer": 0,
            "feedback": "Correct! It focuses on scientific and technical education for the youth."
        },
        "reward": {
            "title": "10% off at the Science Shop",
            "provider": "Planetarium Gift Shop",
            "codeHash": "f25b41cf6a10bb4ffe78d7c31b9d1bad9ce11c2065020561259357eebab3567a"
        },
        "id": 180
    },
    {
        "name": "Megaron Athens Concert Hall",
        "lat": 37.9806,
        "lng": 23.7533,
        "description": "A world-class performing arts venue with exceptional acoustics.",
        "audioText": "Welcome to Megaron, the Athens Concert Hall. Inaugurated in 1991, this venue boasts some of the best acoustics in the world. It hosts classical music, opera, ballet, and major conferences. The Megaron has become a focal point for the performing arts in Greece, elevating Athens to the ranks of major global cultural capitals.",
        "quiz": {
            "question": "In what year was the Megaron Athens Concert Hall inaugurated?",
            "options": [
                "1991",
                "1985",
                "2004",
                "1975"
            ],
            "answer": 0,
            "feedback": "Correct! It opened its doors to the public in 1991."
        },
        "reward": {
            "title": "Free guided tour of the Concert Hall",
            "provider": "Megaron Info Desk",
            "codeHash": "1dd384eddfc986e12edd55005d64d24644a51a0f97c7cb8a3bb4e15e73a2ed38"
        },
        "id": 181
    },
    {
        "name": "Hellenic Maritime Museum",
        "lat": 37.9317,
        "lng": 23.6447,
        "description": "The largest maritime museum in Greece, exploring the nation's rich naval history.",
        "audioText": "Explore the Hellenic Maritime Museum located at the Zea Marina in Piraeus. This museum traces the naval history of the Greeks from prehistoric times to the present day. You can see models of ancient triremes, navigational instruments, and artifacts from the Greek War of Independence, highlighting the unbreakable bond between the Greeks and the sea.",
        "quiz": {
            "question": "Where is the Hellenic Maritime Museum located?",
            "options": [
                "Zea Marina in Piraeus",
                "Syntagma Square",
                "Cape Sounion",
                "Flisvos Marina"
            ],
            "answer": 0,
            "feedback": "Correct! It is located at Zea Marina, a historic harbor in Piraeus."
        },
        "reward": {
            "title": "20% off admission",
            "provider": "Hellenic Maritime Museum",
            "codeHash": "a3fc148796d351f28299a550c3518af6048794cb74e33147e91f47da16a57976"
        },
        "id": 182
    },
    {
        "name": "Averof Battleship Museum",
        "lat": 37.9332,
        "lng": 23.6841,
        "description": "A legendary armored cruiser that served as the flagship of the Hellenic Navy.",
        "audioText": "You are looking at the Georgios Averof, a legendary armored cruiser that served as the flagship of the Hellenic Navy. It played a crucial role in the Balkan Wars of 1912 to 1913, helping Greece secure naval dominance in the Aegean Sea. Remarkably, it is one of the only active museum ships in the world that is still technically in commission.",
        "quiz": {
            "question": "During which major conflict did the Averof secure Greek naval dominance?",
            "options": [
                "The Balkan Wars",
                "World War II",
                "The Greek War of Independence",
                "The Cold War"
            ],
            "answer": 0,
            "feedback": "Correct! The Averof was instrumental during the Balkan Wars (1912-1913)."
        },
        "reward": {
            "title": "Free commemorative postcard",
            "provider": "Averof Gift Shop",
            "codeHash": "9c333912dc86c7393b21407c30cf6121983ff81c2609a017c7be17dfa61275a1"
        },
        "id": 183
    },
    {
        "name": "Benaki Museum of Islamic Art",
        "lat": 37.9774,
        "lng": 23.7198,
        "description": "A stunning collection of Islamic art spanning from India to Spain.",
        "audioText": "Welcome to the Benaki Museum of Islamic Art. Located in the historical center of Athens, this museum houses over 8,000 works of art from the Middle East, Iran, Turkey, North Africa, and India. The collection spans from the dawn of Islam up to the 19th century, featuring exquisite ceramics, textiles, and woodcarvings. Don't miss the 17th-century reception room from a Cairo mansion.",
        "quiz": {
            "question": "Which specific 17th-century room is a highlight of the museum?",
            "options": [
                "A reception room from a Cairo mansion",
                "A bathhouse from Istanbul",
                "A royal tent from Persia",
                "A courtyard from Cordoba"
            ],
            "answer": 0,
            "feedback": "Correct! The museum features a spectacular reconstructed reception room from 17th-century Cairo."
        },
        "reward": {
            "title": "10% off museum publications",
            "provider": "Benaki Museum Shop",
            "codeHash": "7dac42358373540988d0a694bb1642639db19da81206d4bef10a205981419224"
        },
        "id": 184
    },
    {
        "name": "Kotsanas Museum of Ancient Greek Technology",
        "lat": 37.9789,
        "lng": 23.738,
        "description": "An interactive exhibition of the incredible technological inventions of the ancient Greeks.",
        "audioText": "Discover the high-tech world of antiquity at the Kotsanas Museum of Ancient Greek Technology. This unique museum features fully functional models of ancient inventions, from the automatic doors of Heron to the alarm clock of Plato and the analog computer known as the Antikythera Mechanism. It proves that ancient Greek technology was far more advanced than most people realize.",
        "quiz": {
            "question": "Which ancient philosopher's alarm clock is featured in the museum?",
            "options": [
                "Plato",
                "Aristotle",
                "Socrates",
                "Pythagoras"
            ],
            "answer": 0,
            "feedback": "Correct! The museum features a working model of Plato's hydraulic alarm clock."
        },
        "reward": {
            "title": "15% off a DIY ancient invention kit",
            "provider": "Kotsanas Museum Shop",
            "codeHash": "08c1384c3dae481c189ba4f561b0b2acd8cfa963697ebdcc73bbad8be08f94ff"
        },
        "id": 185
    },
    {
        "name": "Ilias Lalaounis Jewelry Museum",
        "lat": 37.9692,
        "lng": 23.7275,
        "description": "A museum dedicated to the art of jewelry and the decorative arts.",
        "audioText": "You are at the Ilias Lalaounis Jewelry Museum, founded by the renowned Greek jeweler Ilias Lalaounis. The museum showcases over 4,000 pieces of jewelry and micro-sculptures inspired by ancient Greek, Byzantine, and various global cultures. Lalaounis was famous for reviving ancient gold-smithing techniques like granulation and filigree to create modern masterpieces.",
        "quiz": {
            "question": "Which ancient gold-smithing technique did Ilias Lalaounis famously revive?",
            "options": [
                "Granulation and filigree",
                "Electroplating",
                "Diamond cutting",
                "Lost-wax casting"
            ],
            "answer": 0,
            "feedback": "Correct! Lalaounis revived intricate ancient techniques like granulation and filigree."
        },
        "reward": {
            "title": "Free exhibition guide",
            "provider": "Lalaounis Museum Desk",
            "codeHash": "b21ac344ffb9d6030632d2d88ad2a5a39161ca0da7ceb4ed732630db46e6704a"
        },
        "id": 186
    },
    {
        "name": "Museum of Greek Folk Musical Instruments",
        "lat": 37.9744,
        "lng": 23.7275,
        "description": "A delightful collection of traditional Greek musical instruments spanning three centuries.",
        "audioText": "Welcome to the Museum of Greek Folk Musical Instruments, located in an 1840s mansion in Plaka. The collection displays 1,200 popular musical instruments dating from the 18th century to the present. You can listen to the authentic sounds of bouzoukis, lyras, and gaidas (bagpipes) through headphones at the display cases, experiencing the soul of Greek folk traditions.",
        "quiz": {
            "question": "What is the 'gaida' displayed in this museum?",
            "options": [
                "A traditional Greek bagpipe",
                "A stringed lute",
                "A type of drum",
                "A wooden flute"
            ],
            "answer": 0,
            "feedback": "Correct! The gaida is a traditional Greek bagpipe."
        },
        "reward": {
            "title": "10% off traditional music CDs",
            "provider": "Folk Museum Shop",
            "codeHash": "a4b38ea51527c57a6552eff3262e8d4362da5824d479967450b0008d5c088558"
        },
        "id": 187
    },
    {
        "name": "Basil & Elise Goulandris Foundation",
        "lat": 37.9693,
        "lng": 23.7432,
        "description": "A spectacular museum showcasing world-class modern and contemporary art.",
        "audioText": "You are at the Basil and Elise Goulandris Foundation in Pagrati. This extraordinary museum houses one of the most important private collections of modern and contemporary art in the world. Visitors can admire masterpieces by Picasso, Van Gogh, Monet, Degas, and Rodin, alongside prominent Greek artists like Tsarouchis and Moralis, all beautifully displayed in a state-of-the-art facility.",
        "quiz": {
            "question": "Which of these famous artists has works displayed at the Goulandris Foundation?",
            "options": [
                "Vincent Van Gogh",
                "Leonardo da Vinci",
                "Michelangelo",
                "Rembrandt"
            ],
            "answer": 0,
            "feedback": "Correct! The museum features an incredible collection including works by Van Gogh, Picasso, and Monet."
        },
        "reward": {
            "title": "10% off at the Museum Cafe",
            "provider": "Goulandris Cafe",
            "codeHash": "81f99851beb8b252d809b7b07c7e6bdf5460c20c035afe952bbd55f86d598c61"
        },
        "id": 188
    },
    {
        "name": "Goulandris Natural History Museum",
        "lat": 38.0733,
        "lng": 23.8164,
        "description": "A leading institution dedicated to the study, conservation, and protection of the natural environment.",
        "audioText": "Welcome to the Goulandris Natural History Museum in Kifissia. Founded in 1964, the museum is dedicated to educating the public about the rich biodiversity of Greece and the Mediterranean. Its striking exhibits include massive botanical, zoological, geological, and paleontological collections, including impressive full-scale dinosaur replicas and prehistoric fossils found in Greek soil.",
        "quiz": {
            "question": "In what year was the Goulandris Natural History Museum founded?",
            "options": [
                "1964",
                "1980",
                "1950",
                "2001"
            ],
            "answer": 0,
            "feedback": "Correct! The museum was established in 1964 to promote environmental awareness."
        },
        "reward": {
            "title": "Free botanical bookmark",
            "provider": "Goulandris Museum Shop",
            "codeHash": "fda956b3a58c402ecd23f2ab08e784f3923989fb98575ec80ce7f61fca040c56"
        },
        "id": 189
    },
    {
        "name": "Epigraphic Museum",
        "lat": 37.9885,
        "lng": 23.7324,
        "description": "The largest museum in the world dedicated to ancient inscriptions.",
        "audioText": "You are standing at the Epigraphic Museum, the largest of its kind in the world. It houses over 14,000 ancient inscriptions, mostly in Greek, carved on stone. These inscribed slabs are the primary documents of ancient history, recording laws, decrees, treaties, and public accounts. It is a true archive of the ancient world, preserving the very words of the Athenians.",
        "quiz": {
            "question": "Approximately how many ancient inscriptions are housed in the Epigraphic Museum?",
            "options": [
                "Over 14,000",
                "About 5,000",
                "Under 1,000",
                "Exactly 50,000"
            ],
            "answer": 0,
            "feedback": "Correct! The museum safeguards over 14,000 ancient stone inscriptions."
        },
        "reward": {
            "title": "10% off history books",
            "provider": "Museum Bookstore",
            "codeHash": "2f6d176393b882c4763fedb87cc062734afcbf39c1267d1bbe3e78f17eb52795"
        },
        "id": 190
    },
    {
        "name": "Herakleidon Museum",
        "lat": 37.9767,
        "lng": 23.7176,
        "description": "A museum blending art, mathematics, and science through interactive exhibits.",
        "audioText": "Welcome to the Herakleidon Museum in Thissio. Originally focused on fine arts and artists like M.C. Escher, the museum now specializes in the intersection of science, art, and mathematics. Its interactive exhibitions explore themes like 'Eureka: Science, Art and Technology of the Ancient Greeks', making complex scientific principles accessible and fun for visitors of all ages.",
        "quiz": {
            "question": "Which famous artist, known for his mathematically inspired woodcuts, was heavily featured in the museum's early years?",
            "options": [
                "M.C. Escher",
                "Pablo Picasso",
                "Salvador Dali",
                "Jackson Pollock"
            ],
            "answer": 0,
            "feedback": "Correct! The museum was originally famous for its extensive M.C. Escher exhibitions."
        },
        "reward": {
            "title": "15% off an interactive puzzle",
            "provider": "Herakleidon Gift Shop",
            "codeHash": "7a918cef981a308dad13f108aff2140277a4695e804b3c73d69c3b0f7e98ad30"
        },
        "id": 191
    },
    {
        "name": "Vorres Museum",
        "lat": 37.954,
        "lng": 23.8643,
        "description": "A beautiful cultural foundation showcasing Greek contemporary art and folk tradition.",
        "audioText": "You are visiting the Vorres Museum in Paiania. Divided into two main sections, the museum features a gallery of contemporary Greek art, and a complex of traditional village houses, showcasing folk art, antique furniture, and historical artifacts. The beautiful gardens seamlessly blend modern sculptures with traditional Greek architecture, creating a peaceful cultural oasis.",
        "quiz": {
            "question": "What are the two main sections of the Vorres Museum?",
            "options": [
                "Contemporary Art and Folk Tradition",
                "Ancient History and Space Exploration",
                "Maritime History and Botany",
                "Numismatics and Epigraphy"
            ],
            "answer": 0,
            "feedback": "Correct! The museum contrasts a modern art gallery with traditional Greek folk houses."
        },
        "reward": {
            "title": "10% off local art prints",
            "provider": "Vorres Museum Shop",
            "codeHash": "4ba61fd3307c7499cb484879d48941a71bb29d1b2105c6bff8971cb3da0bc461"
        },
        "id": 192
    },
    {
        "name": "Mineralogical Museum of Lavrion",
        "lat": 37.7139,
        "lng": 24.0531,
        "description": "A showcase of the stunning and rare minerals from the Lavrion mining district.",
        "audioText": "Welcome to the Mineralogical Museum of Lavrion. The Lavrion region is world-famous among geologists for its incredibly diverse and colorful minerals, many of which are unique to this area. The museum displays hundreds of rare specimens, including beautiful crystals of smithsonite, azurite, and annabergite, reflecting the rich geological wealth that funded ancient Athens.",
        "quiz": {
            "question": "Why is the Lavrion region famous among geologists worldwide?",
            "options": [
                "Its highly diverse and rare mineral crystals",
                "Its large diamond deposits",
                "Its active volcanoes",
                "Its dinosaur fossils"
            ],
            "answer": 0,
            "feedback": "Correct! Lavrion is renowned for having over 600 different types of minerals, some found nowhere else on Earth."
        },
        "reward": {
            "title": "Free mineral identification card",
            "provider": "Museum Desk",
            "codeHash": "14e609e025b9314d8ee7deb43054437a57823abe74023014a7334f218e6b22ee"
        },
        "id": 193
    },
    {
        "name": "Lavrion Technological and Cultural Park",
        "lat": 37.718,
        "lng": 24.0558,
        "description": "An industrial heritage site built on the ruins of the historic French Mining Company.",
        "audioText": "You are at the Lavrion Technological and Cultural Park. This site preserves the impressive industrial facilities of the French Mining Company, which operated here from 1873 to 1989. Today, the park is a hub for research, education, and culture. Walking among the restored industrial buildings and old machinery provides a fascinating look into the industrial revolution in Greece.",
        "quiz": {
            "question": "Which foreign mining company operated the facilities preserved at this park from 1873 to 1989?",
            "options": [
                "The French Mining Company",
                "The British Mining Guild",
                "The German Industrial Corp",
                "The Italian Excavation Society"
            ],
            "answer": 0,
            "feedback": "Correct! It was operated by the French Mining Company of Lavrion."
        },
        "reward": {
            "title": "15% off guided industrial tour",
            "provider": "Park Information Center",
            "codeHash": "ace48c7c08b41d99b9da7691fd0efab684700bc84158619365574afdc8572e3d"
        },
        "id": 194
    },
    {
        "name": "Archaeological Museum of Marathon",
        "lat": 38.1213,
        "lng": 23.9482,
        "description": "A museum preserving the artifacts from the famed Battle of Marathon and nearby ancient sites.",
        "audioText": "Welcome to the Archaeological Museum of Marathon. This museum houses artifacts from the legendary Battle of Marathon in 490 BC, including weapons and pottery found in the Tomb of the Athenians. It also features beautiful statues and finds from the nearby Sanctuary of the Egyptian Gods and the Cave of Pan, offering a comprehensive look at the history of the Marathon plain.",
        "quiz": {
            "question": "In what year did the famous Battle of Marathon take place?",
            "options": [
                "490 BC",
                "480 BC",
                "323 BC",
                "146 BC"
            ],
            "answer": 0,
            "feedback": "Correct! The Battle of Marathon, a decisive Greek victory against the Persians, occurred in 490 BC."
        },
        "reward": {
            "title": "Free bookmark of Miltiades",
            "provider": "Marathon Museum Shop",
            "codeHash": "c1f30e06a1eb724aa09e514a4f82048377a87d50a31c65298c19041badb7c817"
        },
        "id": 195
    },
    {
        "name": "Archaeological Museum of Lavrion",
        "lat": 37.7144,
        "lng": 24.056,
        "description": "Displays antiquities from the ancient silver mining region of Lavreotiki.",
        "audioText": "You are visiting the Archaeological Museum of Lavrion. The museum highlights the ancient silver mining industry that powered the Athenian Empire. Exhibits include ancient mining tools, lead ingots, and beautiful pottery found in the local settlements and cemeteries. It tells the story of the thousands of slaves who lived and worked in the mines to extract silver for the Athenian owls.",
        "quiz": {
            "question": "What precious metal was primarily mined in the Lavrion region during antiquity?",
            "options": [
                "Silver",
                "Gold",
                "Copper",
                "Iron"
            ],
            "answer": 0,
            "feedback": "Correct! Lavrion was famous for its rich silver mines."
        },
        "reward": {
            "title": "10% off museum replicas",
            "provider": "Lavrion Museum Shop",
            "codeHash": "855a03274fe36351ebaa9186986f01b869a06166eb119b2c325823cb53a3d725"
        },
        "id": 196
    },
    {
        "name": "Archaeological Museum of Brauron",
        "lat": 37.9254,
        "lng": 23.9934,
        "description": "A delightful museum dedicated to the cult of Artemis and the young girls who served her.",
        "audioText": "Welcome to the Archaeological Museum of Brauron, located near the Sanctuary of Artemis. The museum displays beautiful statues of little boys and girls known as 'arktoi' or little bears. In ancient times, young Athenian girls were sent to Brauron to serve Artemis before they reached marriageable age. The museum's collection gives a touching glimpse into the lives of children in ancient Greece.",
        "quiz": {
            "question": "What animal were the young girls serving Artemis at Brauron referred to as?",
            "options": [
                "Little bears (Arktoi)",
                "Little owls",
                "Little deer",
                "Little doves"
            ],
            "answer": 0,
            "feedback": "Correct! The young girls were called 'Arktoi', meaning little bears, in honor of Artemis."
        },
        "reward": {
            "title": "Free postcard of an Arktoi statue",
            "provider": "Brauron Museum Shop",
            "codeHash": "6c5fcaf041a5b2d62dba06e6545137bd7697a2aada9dd69300f646c272162e24"
        },
        "id": 197
    },
    {
        "name": "Sanctuary of the Egyptian Gods (Brexiza)",
        "lat": 38.1182,
        "lng": 23.9782,
        "description": "An impressive Roman-era sanctuary built by Herodes Atticus dedicated to Isis and Serapis.",
        "audioText": "You are standing at the Sanctuary of the Egyptian Gods in the marshy area of Brexiza, near Marathon. This unique sanctuary was built in the 2nd century AD by the wealthy Athenian benefactor Herodes Atticus. It was dedicated to the Egyptian deities Isis and Serapis. The site features a stepped pyramid-like structure and was originally adorned with large statues exhibiting a blend of Egyptian and Greek artistic styles.",
        "quiz": {
            "question": "Which wealthy Athenian benefactor built this sanctuary?",
            "options": [
                "Herodes Atticus",
                "Pericles",
                "Hadrian",
                "Themistocles"
            ],
            "answer": 0,
            "feedback": "Correct! Herodes Atticus built the sanctuary on his vast estate in Marathon."
        },
        "reward": {
            "title": "15% off guidebooks on Roman Greece",
            "provider": "Local Tourism Office",
            "codeHash": "1edeb003cfd5c7f96c651ce619cefc6a54c9ade79f0aa09b8fb186a2d441da74"
        },
        "id": 198
    },
    {
        "name": "Temple of Artemis at Loutsa",
        "lat": 37.9644,
        "lng": 24.0041,
        "description": "The coastal ruins of an ancient Doric temple dedicated to Artemis Tauropolos.",
        "audioText": "Welcome to the coastal ruins of the Temple of Artemis Tauropolos in modern-day Loutsa. According to myth, this is where Orestes and Iphigenia landed after escaping from Tauris, carrying the sacred wooden statue of Artemis. The Doric temple was built in the 5th century BC right on the shoreline. Today, its foundations lie peacefully next to the sea, offering a serene glimpse into ancient coastal worship.",
        "quiz": {
            "question": "According to myth, who brought the sacred wooden statue of Artemis to this location?",
            "options": [
                "Orestes and Iphigenia",
                "Theseus and Ariadne",
                "Jason and Medea",
                "Odysseus and Penelope"
            ],
            "answer": 0,
            "feedback": "Correct! Myth says Orestes and his sister Iphigenia brought the statue here from Tauris."
        },
        "reward": {
            "title": "10% off seafood at nearby tavernas",
            "provider": "Loutsa Beach Restaurants",
            "codeHash": "9f97a7ad41dd77262623660a1fefaafef77b97bbdb0e0a9901e9d5ed5620a15d"
        },
        "id": 199
    },
    {
        "name": "Municipal Theatre of Piraeus",
        "lat": 37.9431,
        "lng": 23.6473,
        "description": "A magnificent neoclassical building that serves as the cultural heart of Piraeus.",
        "audioText": "You are looking at the Municipal Theatre of Piraeus, a stunning neoclassical masterpiece completed in 1895. Designed by architect Ioannis Lazarimos, the building features a monumental propylon with four Corinthian columns. It is considered one of the leading theatrical stages in Greece and remains the cultural epicenter of the port city of Piraeus, hosting plays, concerts, and major events.",
        "quiz": {
            "question": "What architectural style is the Municipal Theatre of Piraeus built in?",
            "options": [
                "Neoclassical",
                "Gothic",
                "Baroque",
                "Brutalist"
            ],
            "answer": 0,
            "feedback": "Correct! The theatre is a prime example of Greek Neoclassical architecture."
        },
        "reward": {
            "title": "10% off theatre tickets",
            "provider": "Piraeus Box Office",
            "codeHash": "202c13a068b2bf0cd7106f226eefb775cb8049dee10ecb0dfa7162da888b38d7"
        },
        "id": 200
    },
    {
        "name": "Kastella Hill / Profitis Ilias",
        "lat": 37.9388,
        "lng": 23.6558,
        "description": "A picturesque hill in Piraeus offering sweeping panoramic views of the Saronic Gulf.",
        "audioText": "Climb up Kastella Hill, historically known as Munichia. Topped by the church of Profitis Ilias, this elegant neighborhood features beautiful 19th-century neoclassical mansions and steep, narrow streets. From the summit, you are rewarded with a breathtaking panoramic view of the Saronic Gulf, the ports of Mikrolimano and Zea, and the entire Athenian coastline spreading out below you.",
        "quiz": {
            "question": "What was the ancient name of Kastella Hill?",
            "options": [
                "Munichia",
                "Phaleron",
                "Salamis",
                "Aegina"
            ],
            "answer": 0,
            "feedback": "Correct! In antiquity, the hill and its adjacent harbor were known as Munichia."
        },
        "reward": {
            "title": "Free coffee with any dessert",
            "provider": "Kastella Hilltop Cafe",
            "codeHash": "35b1e473fae68daca71f6a767a29962afa947cf4cb16e1554c5375694fd04397"
        },
        "id": 201
    },
    {
        "name": "Diomedes Botanical Garden",
        "lat": 38.0108,
        "lng": 23.6494,
        "description": "The largest botanical garden in Greece and the Eastern Mediterranean.",
        "audioText": "Welcome to the Diomedes Botanical Garden in Haidari. Spanning nearly 1,900 stremmata, it is the largest botanical garden in Greece. It is home to thousands of plant species from around the world. A unique highlight is the 'Historic Plants' section, which features flora mentioned in ancient Greek mythology and the Bible, such as the hemlock that poisoned Socrates and the mythical mandrake.",
        "quiz": {
            "question": "Which notorious plant, used to execute Socrates, is featured in the Historic Plants section?",
            "options": [
                "Hemlock",
                "Nightshade",
                "Oleander",
                "Wolfsbane"
            ],
            "answer": 0,
            "feedback": "Correct! Conium maculatum, or poison hemlock, is grown in the historic section."
        },
        "reward": {
            "title": "Free seed packet of Greek herbs",
            "provider": "Botanical Garden Kiosk",
            "codeHash": "f25d90ff5e0e36b58be59ab32ef5755421684bcc36fccc1fe9749e41e233915b"
        },
        "id": 202
    },
    {
        "name": "Attica Zoological Park",
        "lat": 37.9818,
        "lng": 23.9103,
        "description": "Greece's premier zoological park, home to over 2,000 animals.",
        "audioText": "You are at the Attica Zoological Park in Spata. Founded in 2000, it is the only large-scale zoo in Greece. It houses over 2,000 animals representing 290 species from all five continents. The zoo places a strong emphasis on the conservation of endangered species and educating the public about global biodiversity, featuring expansive habitats for big cats, primates, and marine mammals.",
        "quiz": {
            "question": "In what year did the Attica Zoological Park open to the public?",
            "options": [
                "2000",
                "1990",
                "2010",
                "1985"
            ],
            "answer": 0,
            "feedback": "Correct! The park opened its doors in the year 2000."
        },
        "reward": {
            "title": "15% off zoo entry",
            "provider": "Attica Zoo Ticketing",
            "codeHash": "d7b178f5f82045ef1d7efe61c8a51121bdcb687871c3d4db1a0d503da6c985bf"
        },
        "id": 203
    },
    {
        "name": "Schinias Olympic Rowing Centre",
        "lat": 38.1517,
        "lng": 24.0136,
        "description": "The stunning rowing and canoeing venue constructed for the 2004 Athens Olympics.",
        "audioText": "Welcome to the Schinias Olympic Rowing and Canoeing Centre. Built for the 2004 Athens Olympic Games, this massive 2,250-meter-long artificial lake is integrated into the beautiful Schinias National Park. Despite initial environmental concerns, the facility was designed to help restore the surrounding wetlands. Today, it remains an active training facility for athletes and a quiet retreat for nature lovers.",
        "quiz": {
            "question": "For which major event was the Schinias Rowing Centre constructed?",
            "options": [
                "2004 Athens Olympics",
                "1896 First Modern Olympics",
                "1997 World Athletics Championships",
                "2010 European Games"
            ],
            "answer": 0,
            "feedback": "Correct! It was custom-built for the 2004 Olympic Games."
        },
        "reward": {
            "title": "10% off kayak rentals",
            "provider": "Schinias Water Sports",
            "codeHash": "e58fdf2ec753546afe39d1d83caaab737ee75696491b9455fde6495435370890"
        },
        "id": 204
    },
    {
        "name": "Mikrolimano Marina",
        "lat": 37.9385,
        "lng": 23.6592,
        "description": "A charming, lively marina famous for its seafood restaurants and elegant yachts.",
        "audioText": "Stroll along the docks of Mikrolimano, meaning 'Little Port' in Greek. Known in antiquity as the port of Munichia, today it is a bustling, picturesque marina in Piraeus. The waterfront is lined with premium seafood restaurants and cafes, where visitors sit to enjoy fresh fish and ouzo while watching the luxurious yachts and small fishing boats bob gently in the Aegean waters.",
        "quiz": {
            "question": "What does the name 'Mikrolimano' translate to in English?",
            "options": [
                "Little Port",
                "Blue Bay",
                "Fisherman's Cove",
                "Ancient Harbor"
            ],
            "answer": 0,
            "feedback": "Correct! 'Mikro' means little, and 'limano' means port."
        },
        "reward": {
            "title": "Free meze platter with any seafood order",
            "provider": "Mikrolimano Tavernas",
            "codeHash": "db3320c0fd6a8b3e3e012b0dfa7c1dc8808d1bdbe45448b433515e9f0a771083"
        },
        "id": 205
    },
    {
        "name": "Flisvos Marina",
        "lat": 37.9318,
        "lng": 23.6852,
        "description": "Athens' premier mega-yacht destination, featuring high-end shopping and dining.",
        "audioText": "Welcome to Flisvos Marina in Palaio Faliro. Upgraded significantly for the 2004 Olympics, Flisvos is now the ultimate mega-yacht destination in Greece. Featuring a wide promenade, upscale boutiques, and stylish seaside bars, it offers a cosmopolitan atmosphere. It is the perfect place to watch a magnificent Athenian sunset over the Saronic Gulf.",
        "quiz": {
            "question": "What type of vessels is Flisvos Marina primarily known for hosting today?",
            "options": [
                "Mega-yachts",
                "Commercial cargo ships",
                "Traditional wooden fishing boats",
                "Naval destroyers"
            ],
            "answer": 0,
            "feedback": "Correct! Flisvos Marina is highly regarded as a top-tier mega-yacht destination."
        },
        "reward": {
            "title": "10% off at Flisvos Marina Cafes",
            "provider": "Marina Dining",
            "codeHash": "df2fd51052a3b0e1208b1f9c4b3d7518c69708257d3ccb6fcc51fe98b8c1cb42"
        },
        "id": 206
    },
    {
        "name": "Monastery of Saint Ephraim",
        "lat": 38.0933,
        "lng": 23.9575,
        "description": "A highly revered Orthodox monastery in Nea Makri, attracting thousands of pilgrims.",
        "audioText": "You are visiting the Monastery of Saint Ephraim in Nea Makri. The monastery, originally built in the 10th century, is dedicated to Saint Ephraim, a martyr who lived and died here during the Ottoman occupation. Today, it is one of the most important pilgrimage sites in Attica. Inside, the saint's holy relics are preserved, and believers flock here to pray for healing and miracles.",
        "quiz": {
            "question": "What is the primary reason thousands of believers visit this monastery?",
            "options": [
                "To pray at the holy relics of Saint Ephraim for miracles",
                "To see ancient Greek statues",
                "To view the first printed Greek Bible",
                "To admire Byzantine mosaics"
            ],
            "answer": 0,
            "feedback": "Correct! Pilgrims visit to venerate the relics of Saint Ephraim, seeking healing."
        },
        "reward": {
            "title": "Free religious icon card",
            "provider": "Monastery Gift Shop",
            "codeHash": "0d0e0700c95a44dd9508ec5b7da6c6b29f12cd8149fdd32c7e7552733dcd09d7"
        },
        "id": 207,
        "image": "images/st_ephraim_nea_makri.jpg"
    },
    {
        "name": "Penteli Monastery",
        "lat": 38.0568,
        "lng": 23.8824,
        "description": "A historic 16th-century monastery nestled in the pine forests of Mount Pentelicus.",
        "audioText": "Welcome to the Holy Monastery of the Dormition of the Virgin Mary, commonly known as Penteli Monastery. Founded in 1578 by Saint Timotheos, it is surrounded by the lush pine forests of Mount Pentelicus. During the Ottoman occupation, it served as a secret school, teaching Greek language and history. The monastery played a significant intellectual and spiritual role in preserving Greek identity.",
        "quiz": {
            "question": "What secret activity took place at the Penteli Monastery during the Ottoman occupation?",
            "options": [
                "It operated a secret school teaching Greek",
                "It forged weapons for the revolution",
                "It minted illegal currency",
                "It housed a printing press"
            ],
            "answer": 0,
            "feedback": "Correct! The monastery famously hosted a 'Krifo Scholio' (secret school) to preserve the Greek language."
        },
        "reward": {
            "title": "15% off local mountain honey",
            "provider": "Monastery Produce Shop",
            "codeHash": "5a27b2af3f783867defa480bf61534786484e750a7ee5f87d431bb3129c5d61d"
        },
        "id": 208
    },
    {
        "name": "Monastery of Saint Nectarios",
        "lat": 37.7475,
        "lng": 23.483,
        "description": "A massive, beautiful monastery dedicated to one of the most widely known modern Orthodox saints.",
        "audioText": "Welcome to the Monastery of Agios Nektarios. Saint Nektarios, who lived from 1846 to 1920, is one of the most recently canonized saints in the Greek Orthodox Church, known as a great miracle worker and healer. This vast, modern church and monastery complex is one of the largest in the Balkans and attracts thousands of pilgrims daily seeking spiritual comfort and physical healing.",
        "quiz": {
            "question": "For what specific spiritual grace is Saint Nectarios primarily known by the faithful?",
            "options": [
                "As a miracle worker and healer",
                "As the patron saint of sailors",
                "As the protector of lost objects",
                "As a warrior saint"
            ],
            "answer": 0,
            "feedback": "Correct! He is highly venerated as a miraculous healer."
        },
        "reward": {
            "title": "Free holy oil vial",
            "provider": "Monastery Kiosk",
            "codeHash": "2ce641aaa30699b6e29fee4c62ac53d36602e2bd5a9a2dfd5d67a22177694ba7"
        },
        "id": 209
    },
    {
        "name": "Cave of Euripides",
        "lat": 37.8864,
        "lng": 23.4619,
        "description": "A secluded cave on the island of Salamis where the great tragedian wrote his masterpieces.",
        "audioText": "Welcome to the Cave of Euripides, located high on a hillside in southern Salamis overlooking the Saronic Gulf. The famous Athenian playwright Euripides retreated to this peaceful, secluded cave to write his great tragedies, far from the bustling noise of the city. Archaeological excavations here in 1997 actually uncovered a skyphos—a wine cup—with letters spelling out his name, confirming the legend.",
        "quiz": {
            "question": "What remarkable artifact was found here in 1997 proving Euripides used this cave?",
            "options": [
                "A wine cup bearing his name",
                "A golden mask of tragedy",
                "A marble statue of Apollo",
                "The original manuscript of Medea"
            ],
            "answer": 0,
            "feedback": "Correct! Archaeologists found a black-glazed skyphos with part of his name inscribed."
        },
        "reward": {
            "title": "Free dramatic arts bookmark",
            "provider": "Salamis Tourist Info",
            "codeHash": "29a5439194542dd8a9e7bfa92e2f17f43cb4de95ef8cfdd6a4deeb3fa51f2b19"
        },
        "id": 210
    },
    {
        "name": "Monastery of Faneromeni",
        "lat": 37.9866,
        "lng": 23.4281,
        "description": "A historic 17th-century monastery featuring exquisite frescoes of the Last Judgment.",
        "audioText": "You are visiting the Monastery of Panagia Faneromeni on the northwest coast of Salamis. Founded in the 17th century by Saint Laurentios, the monastery played a vital role during the 1821 Greek Revolution, serving as a hospital and a secret meeting place for freedom fighters. Its katholikon (main church) is renowned for its incredible, sprawling frescoes covering almost every inch of the interior, including a vivid depiction of the Last Judgment.",
        "quiz": {
            "question": "What role did the Monastery of Faneromeni play during the 1821 Greek Revolution?",
            "options": [
                "It served as a hospital and secret meeting place",
                "It was a naval base",
                "It operated a gunpowder mill",
                "It minted revolutionary coins"
            ],
            "answer": 0,
            "feedback": "Correct! It was a safe haven and hospital for Greek revolutionaries."
        },
        "reward": {
            "title": "10% off beeswax candles",
            "provider": "Monastery Shop",
            "codeHash": "73fc59be455fb2c2c5c05c0c0c925317826938b72b5667da7f8101e767e61ae5"
        },
        "id": 211,
        "image": "images/faneromeni_salamis.jpg"
    },
    {
        "name": "Sanctuary of Poseidon at Kalaureia",
        "lat": 37.5255,
        "lng": 23.4735,
        "description": "The ruins of the ancient religious center of the Kalaurian amphictyony on the island of Poros.",
        "audioText": "Welcome to the Sanctuary of Poseidon, located in the hills of Kalaureia on the island of Poros. In antiquity, this was the center of a powerful maritime league known as an amphictyony. It is perhaps most famous as the place where the great Athenian orator Demosthenes sought asylum from the Macedonians in 322 BC. Rather than surrender to Antipater's men, Demosthenes committed suicide here by drinking poison.",
        "quiz": {
            "question": "Which famous Athenian orator committed suicide at this sanctuary to avoid capture by the Macedonians?",
            "options": [
                "Demosthenes",
                "Pericles",
                "Socrates",
                "Cicero"
            ],
            "answer": 0,
            "feedback": "Correct! Demosthenes drank poison from his pen here rather than be captured."
        },
        "reward": {
            "title": "Free panoramic postcard",
            "provider": "Poros Port Kiosk",
            "codeHash": "f98b01e2225a229aafc4b6dbefaaf772dca88d87c4d8a565eb9faa1b66bcd8e0"
        },
        "id": 212
    },
    {
        "name": "Poros Clock Tower",
        "lat": 37.4988,
        "lng": 23.4542,
        "description": "The iconic landmark of Poros, built on the highest peak of the town.",
        "audioText": "You are standing at the base of the iconic Clock Tower of Poros. Built in 1927, this landmark sits atop the volcanic rock of Sphaeria, the rocky outcrop where the town of Poros is built. The short climb through the charming, narrow streets filled with neoclassical mansions is rewarded with a spectacular view of the narrow strait separating the island from the mountains of the Peloponnese.",
        "quiz": {
            "question": "In what year was the iconic Poros Clock Tower built?",
            "options": [
                "1927",
                "1821",
                "1950",
                "1896"
            ],
            "answer": 0,
            "feedback": "Correct! The tower was constructed relatively recently, in 1927."
        },
        "reward": {
            "title": "15% off lemonade at the port",
            "provider": "Poros Cafe",
            "codeHash": "abb9a05c701874f45dfe5980163795e2c1b523aa94603b2de822bba344eaa551"
        },
        "id": 213
    },
    {
        "name": "Historical Archives Museum of Hydra",
        "lat": 37.3503,
        "lng": 23.4665,
        "description": "A museum showcasing the immense wealth and naval power of Hydra during the Greek Revolution.",
        "audioText": "Welcome to the Historical Archives Museum of Hydra. Located right by the picturesque port, this museum documents the island's incredible maritime history. Before and during the 1821 Revolution, Hydra was incredibly wealthy and boasted a massive, privately owned commercial fleet. When the war broke out, the Hydriot merchants converted their merchant ships into powerful warships, playing a decisive role in liberating Greece.",
        "quiz": {
            "question": "How did the wealthy Hydriot merchants contribute to the Greek Revolution?",
            "options": [
                "By converting their merchant ships into warships",
                "By fighting as cavalry on the mainland",
                "By building a massive land fortress",
                "By purchasing foreign mercenaries"
            ],
            "answer": 0,
            "feedback": "Correct! They turned their massive commercial fleet into an unstoppable navy."
        },
        "reward": {
            "title": "10% off naval history books",
            "provider": "Museum Shop",
            "codeHash": "3cfeb2bd57d6a7c237288960ab321cb26adbee3e2a1a0efb9c9317891642123b"
        },
        "id": 214
    },
    {
        "name": "Lazaros Koundouriotis Historical Mansion",
        "lat": 37.3481,
        "lng": 23.465,
        "description": "The striking yellow mansion of a wealthy shipowner who financed the Greek War of Independence.",
        "audioText": "You are looking at the Lazaros Koundouriotis Historical Mansion, easily recognizable by its vibrant yellow color standing high above the port of Hydra. Lazaros Koundouriotis was one of the wealthiest shipowners of his time, and he famously spent his entire fortune financing the Greek Revolution. Today, the mansion operates as a branch of the National Historical Museum, preserving the elegant lifestyle of the 19th-century Greek maritime aristocracy.",
        "quiz": {
            "question": "What is visually distinctive about the Koundouriotis Mansion on the hillside of Hydra?",
            "options": [
                "Its vibrant yellow color",
                "It is painted entirely black",
                "It has a large glass dome",
                "It is built underground"
            ],
            "answer": 0,
            "feedback": "Correct! The bright yellow ochre color makes it stand out against the rocky landscape."
        },
        "reward": {
            "title": "Free entrance to the upper gallery",
            "provider": "Koundouriotis Mansion",
            "codeHash": "3f9e23577832a13b6de29811f4848313be63e5ebf318d8fab988b8396e2e5125"
        },
        "id": 215
    },
    {
        "name": "Bouboulina's Museum",
        "lat": 37.2655,
        "lng": 23.161,
        "description": "The ancestral home of Laskarina Bouboulina, the legendary female naval commander of the Greek Revolution.",
        "audioText": "Welcome to the Bouboulina Museum on the island of Spetses. This was the home of Laskarina Bouboulina, a heroine of the Greek War of Independence and the first woman in world naval history to achieve the rank of Admiral. She used her massive fortune to build ships, including her flagship the Agamemnon, and personally led naval blockades against the Ottoman Empire.",
        "quiz": {
            "question": "What was the name of Laskarina Bouboulina's famous flagship?",
            "options": [
                "Agamemnon",
                "Argo",
                "Averof",
                "Olympia"
            ],
            "answer": 0,
            "feedback": "Correct! Her flagship, the Agamemnon, was one of the largest Greek warships of the time."
        },
        "reward": {
            "title": "15% off local Spetses sweets (amygdalota)",
            "provider": "Spetses Bakery",
            "codeHash": "88f6271cdd0df1ed545c6d5eea144b16877f35e48b19069cf69b08ff1107acbc"
        },
        "id": 216
    },
    {
        "name": "Fountain of Theagenes",
        "lat": 37.9942,
        "lng": 23.3422,
        "description": "A remarkably well-preserved ancient water reservoir and fountain house in the city of Megara.",
        "audioText": "You are exploring the Fountain of Theagenes in Megara. Constructed in the 5th century BC, it is one of the largest and most impressive ancient fountain houses in Greece. Its massive roof was supported by 35 octagonal Doric pillars, and it featured a sophisticated plumbing system to draw water from the nearby mountains. It highlights the advanced civic engineering of ancient Greek city-states.",
        "quiz": {
            "question": "How many octagonal Doric pillars were used to support the roof of the reservoir?",
            "options": [
                "35",
                "10",
                "100",
                "4"
            ],
            "answer": 0,
            "feedback": "Correct! The roof was supported by 35 impressive octagonal pillars."
        },
        "reward": {
            "title": "Free map of Ancient Megara",
            "provider": "Megara Tourism Kiosk",
            "codeHash": "e43700a6580ffeb84c34d6a131773d2e24990c9573c2c47f721f46305065b420"
        },
        "id": 217
    },
    {
        "name": "Museum of the City of Athens",
        "lat": 37.9796,
        "lng": 23.7317,
        "description": "Housed in the former royal palace of King Otto, this museum chronicles the modern history of Athens.",
        "audioText": "You are visiting the Museum of the City of Athens, housed in two interconnected mansions on Klafthmonos Square. The older mansion was actually the first residence of King Otto and Queen Amalia when Athens became the capital in 1834. The museum features beautiful period furniture, royal memorabilia, and a spectacular model of Athens from 1842, showing just how small the city once was.",
        "quiz": {
            "question": "Who were the first royal residents of the older mansion that houses the museum?",
            "options": [
                "King Otto and Queen Amalia",
                "King George I and Queen Olga",
                "Emperor Hadrian",
                "Lord Byron"
            ],
            "answer": 0,
            "feedback": "Correct! It was the temporary palace for Greece's first modern King, Otto."
        },
        "reward": {
            "title": "Free historic city map",
            "provider": "Museum Desk",
            "codeHash": "2575f0a74f01d0e929fe4b8ebfc394ef3dc81512bdfa71b5908d423b63c91e31"
        },
        "id": 218
    },
    {
        "name": "B. & M. Theocharakis Foundation",
        "lat": 37.9765,
        "lng": 23.7369,
        "description": "A cultural center dedicated to music and the visual arts, located opposite the Greek Parliament.",
        "audioText": "Welcome to the B. & M. Theocharakis Foundation for the Fine Arts and Music. Located in a beautifully restored 1920s eclectic building right across from the National Gardens, the foundation hosts temporary exhibitions of modern art, classical music concerts, and educational workshops. The café on the upper floors offers a splendid view of the Greek Parliament and Syntagma Square.",
        "quiz": {
            "question": "What two artistic disciplines is the Theocharakis Foundation primarily dedicated to?",
            "options": [
                "Fine Arts and Music",
                "Cinema and Theater",
                "Photography and Dance",
                "Sculpture and Architecture"
            ],
            "answer": 0,
            "feedback": "Correct! The foundation focuses on the visual arts and music."
        },
        "reward": {
            "title": "10% off at Café Merlin",
            "provider": "Theocharakis Foundation",
            "codeHash": "bcba4ea12665d153aad80dc7e9a2742226698060936dfda28905973a36fb81e4"
        },
        "id": 219
    },
    {
        "name": "Athens Olympic Museum",
        "lat": 38.0402,
        "lng": 23.7891,
        "description": "A modern museum celebrating the global history of the Olympic Games, focusing on Greece's foundational role.",
        "audioText": "You are at the Athens Olympic Museum, a striking modern facility connected to the Golden Hall. The museum takes visitors on a chronological journey from the ancient Olympic Games in Olympia, to the revival of the modern Games in Athens in 1896, right up to the triumphant return of the Olympics to Athens in 2004. It features authentic torches, medals, and interactive athletic exhibits.",
        "quiz": {
            "question": "In what year were the first modern Olympic Games held in Athens?",
            "options": [
                "1896",
                "1904",
                "1888",
                "1924"
            ],
            "answer": 0,
            "feedback": "Correct! The modern Olympics were successfully revived in Athens in 1896."
        },
        "reward": {
            "title": "15% off official Olympic merchandise",
            "provider": "Olympic Museum Shop",
            "codeHash": "ad9260aa6ca433b7500c6778e864ede5e7ca0bc4cdb084ceac097bcc03bd3266"
        },
        "id": 220
    },
    {
        "name": "Tatoi Royal Palace",
        "lat": 38.1633,
        "lng": 23.7938,
        "description": "The abandoned, forested summer estate of the former Greek Royal Family.",
        "audioText": "Welcome to Tatoi, the sprawling former summer estate of the Greek Royal Family, located on the densely forested slopes of Mount Parnitha. Acquired by King George I in 1871, this 10,000-acre estate features the royal palace, beautiful gardens, and the royal cemetery where many Greek kings are buried. Today, the estate is being slowly restored as a major cultural and environmental park.",
        "quiz": {
            "question": "Which Greek King initially acquired the Tatoi estate in 1871?",
            "options": [
                "King George I",
                "King Otto",
                "King Constantine II",
                "King Alexander"
            ],
            "answer": 0,
            "feedback": "Correct! King George I purchased the estate to serve as a summer retreat."
        },
        "reward": {
            "title": "Free map of the Tatoi hiking trails",
            "provider": "Tatoi Friends Association",
            "codeHash": "0cdecec0562865006ad456697fe860668648b3fd94fa7761481be38e7d20469c"
        },
        "id": 221,
        "image": "images/tatoi_forest.jpg"
    },
    {
        "name": "Lake Beletsi",
        "lat": 38.1762,
        "lng": 23.7689,
        "description": "A picturesque, small artificial lake hidden in the pine forests of Mount Parnitha.",
        "audioText": "You are at Lake Beletsi, a hidden gem nestled at an altitude of 600 meters on the eastern slopes of Mount Parnitha. This small artificial lake was created accidentally in the 1970s during infrastructure work. Today, it has become a vital wetland surrounded by dense pine forest, serving as a sanctuary for migratory birds, swans, and a massive population of turtles.",
        "quiz": {
            "question": "How was Lake Beletsi formed?",
            "options": [
                "Accidentally during infrastructure work in the 1970s",
                "By a massive earthquake",
                "It is an ancient volcanic crater",
                "It was dug by the ancient Athenians"
            ],
            "answer": 0,
            "feedback": "Correct! It was inadvertently created when debris blocked a mountain stream."
        },
        "reward": {
            "title": "Free bag of duck feed",
            "provider": "Lake Beletsi Kiosk",
            "codeHash": "a5806b5388e042055fdc289d76921492d9285f383ea31fb519f5ddfe9e127b15"
        },
        "id": 222,
        "image": "images/lake_beletsi.jpg"
    },
    {
        "name": "Mpafi Refuge",
        "lat": 38.1682,
        "lng": 23.7228,
        "description": "A popular mountain refuge offering stunning views and traditional food high up in Parnitha National Park.",
        "audioText": "Welcome to the Mpafi Refuge, located at an altitude of 1,161 meters in the heart of the Parnitha National Park. Operated by the Hellenic Alpine Club of Athens, it serves as the ultimate starting point for hikers exploring the mountain's dense fir forests. Here, you can enjoy traditional bean soup and warm tea while observing the majestic red deer that frequently roam right up to the refuge.",
        "quiz": {
            "question": "What large wild animal is frequently spotted roaming near the Mpafi Refuge?",
            "options": [
                "Red deer",
                "Brown bears",
                "Wild horses",
                "Wolves"
            ],
            "answer": 0,
            "feedback": "Correct! Parnitha is famous for its thriving population of wild red deer."
        },
        "reward": {
            "title": "10% off traditional bean soup (fasolada)",
            "provider": "Mpafi Refuge Kitchen",
            "codeHash": "dda4a401b7b4e1a1c0852bf0eb6605b181b6e8c13b2eb870ed61a305c390f5ad"
        },
        "id": 223,
        "image": "images/bafi_refuge.jpg"
    },
    {
        "name": "Davelis Cave",
        "lat": 38.0722,
        "lng": 23.8761,
        "description": "A massive, mysterious cave on Mount Pentelicus famous for paranormal legends and ancient worship.",
        "audioText": "You are standing at the entrance of Davelis Cave on the southwestern slopes of Mount Pentelicus. In antiquity, this cave was a sanctuary dedicated to the god Pan and the Nymphs. In the 19th century, it was famously used as a hideout by the notorious bandit Davelis. Today, the cave is shrouded in modern urban legends involving paranormal activity and electromagnetic anomalies.",
        "quiz": {
            "question": "Which ancient deities were worshipped in this cave long before it became a bandit's hideout?",
            "options": [
                "Pan and the Nymphs",
                "Zeus and Hera",
                "Ares and Athena",
                "Hades and Persephone"
            ],
            "answer": 0,
            "feedback": "Correct! The cave served as a sanctuary to Pan and the Nymphs in antiquity."
        },
        "reward": {
            "title": "Free headlamp rental",
            "provider": "Penteli Spelunking Club",
            "codeHash": "a490d02eee64ebfc290bcd598ccfee9fa03778ae3d4ab0278403749bd73449b4"
        },
        "id": 224,
        "image": "images/davelis_cave.jpg"
    },
    {
        "name": "Syngrou Estate",
        "lat": 38.0664,
        "lng": 23.8114,
        "description": "A vast, beautiful forest estate spanning 950 acres in the northern suburbs of Athens.",
        "audioText": "Welcome to the Syngrou Estate in Kifissia. Bequeathed to the Greek Agricultural Society by Iphigenia Syngrou in 1921, this massive 950-acre park is the only surviving natural forest within the Athens basin. It features a spectacular neo-Gothic Orthodox church, the only one of its kind in Greece, and miles of peaceful walking and cycling trails through dense pine and almond trees.",
        "quiz": {
            "question": "What unique architectural style is the Orthodox church within the estate built in?",
            "options": [
                "Neo-Gothic",
                "Byzantine",
                "Neoclassical",
                "Brutalist"
            ],
            "answer": 0,
            "feedback": "Correct! The Church of St. Andrew is the only neo-Gothic Orthodox church in Greece."
        },
        "reward": {
            "title": "15% off bicycle rental",
            "provider": "Syngrou Park Bikes",
            "codeHash": "1ec4a1b466f0082d440d7f2ab6aa9c8146f7ee3a7aaa3bc40ccab57dd0bc6902"
        },
        "id": 225
    },
    {
        "name": "OAKA Olympic Athletic Center of Athens",
        "lat": 38.0378,
        "lng": 23.7844,
        "description": "The massive, futuristic stadium complex redesigned by Santiago Calatrava for the 2004 Olympics.",
        "audioText": "Welcome to OAKA, the Olympic Athletic Center of Athens. Originally built in 1982, the complex was radically redesigned by world-renowned architect Santiago Calatrava for the 2004 Athens Olympics. Its defining feature is the breathtaking glass and steel roof structure over the main stadium, weighing 18,000 tons. Today, it remains the largest sporting venue in Greece.",
        "quiz": {
            "question": "Which famous architect designed the spectacular steel and glass roof over the main stadium?",
            "options": [
                "Santiago Calatrava",
                "Renzo Piano",
                "Zaha Hadid",
                "Frank Gehry"
            ],
            "answer": 0,
            "feedback": "Correct! The visionary Spanish architect Santiago Calatrava designed the roof."
        },
        "reward": {
            "title": "15% off guided architectural tour",
            "provider": "OAKA Info Center",
            "codeHash": "e8eb696ad65c0ab030fecf3cdf5cb499994afb1f7d36b18f08f036c501550a30"
        },
        "id": 226
    },
    {
        "name": "AEK OPAP Arena (Agia Sophia Stadium)",
        "lat": 38.0411,
        "lng": 23.7411,
        "description": "The spectacular, newly built home stadium of AEK Athens F.C., featuring Byzantine-inspired architecture.",
        "audioText": "You are looking at the OPAP Arena, the stunning new home of AEK Athens F.C. in Nea Filadelfeia. Opened in 2022, the stadium's unique architecture is heavily inspired by the Byzantine Empire, featuring fortress-like walls, arches, and a monumental double-headed eagle statue at the entrance. It serves as both a world-class football venue and a monument to the Greek refugees of Asia Minor.",
        "quiz": {
            "question": "What historical empire heavily inspired the architecture of the OPAP Arena?",
            "options": [
                "The Byzantine Empire",
                "The Roman Empire",
                "The Ottoman Empire",
                "The Persian Empire"
            ],
            "answer": 0,
            "feedback": "Correct! The arches, towers, and double-headed eagle all symbolize the Byzantine Empire."
        },
        "reward": {
            "title": "10% off at the AEK FC Store",
            "provider": "AEK Official Store",
            "codeHash": "6406f6948a238a4265a312dbb78389ff098059aaf91661055ccbce2171c43e44"
        },
        "id": 227
    },
    {
        "name": "Pedion tou Areos",
        "lat": 37.9933,
        "lng": 23.7344,
        "description": "One of the largest public parks in Athens, designed in honor of the heroes of the 1821 Revolution.",
        "audioText": "Welcome to Pedion tou Areos, or the 'Field of Ares'. Designed in 1934 to honor the heroes of the Greek War of Independence, it is one of the largest public parks in Athens. The park's main avenue features 21 marble busts of revolutionary heroes, and the impressive equestrian statue of King Constantine I stands at the main entrance, welcoming Athenians seeking a green escape.",
        "quiz": {
            "question": "What is the English translation of 'Pedion tou Areos'?",
            "options": [
                "Field of Ares",
                "Garden of Athena",
                "Valley of the Gods",
                "Park of Peace"
            ],
            "answer": 0,
            "feedback": "Correct! It translates to the 'Field of Ares', the Greek god of war."
        },
        "reward": {
            "title": "Free coffee at the park kiosk",
            "provider": "Alsos Cafe",
            "codeHash": "f6e6cbfec69579fca0432501b8b9aae3279b304b804a795469e3719998b45fca"
        },
        "id": 228
    },
    {
        "name": "Museum of Illusions Athens",
        "lat": 37.9768,
        "lng": 23.7214,
        "description": "A wildly popular, interactive museum filled with mind-bending optical illusions.",
        "audioText": "Welcome to the Museum of Illusions in the Monastiraki neighborhood. This interactive space is designed to trick your senses and challenge your perception. Featuring mind-bending optical illusions, holograms, the dizzying Vortex Tunnel, and the famous Infinity Room, the museum provides a fun, educational experience about vision, perception, and the human brain's fascinating flaws.",
        "quiz": {
            "question": "Which of the following is a famous interactive exhibit at the Museum of Illusions?",
            "options": [
                "The Vortex Tunnel",
                "The Tunnel of Love",
                "The Echo Chamber",
                "The Hall of Mirrors"
            ],
            "answer": 0,
            "feedback": "Correct! The Vortex Tunnel challenges your balance and visual perception."
        },
        "reward": {
            "title": "15% off mind-bending puzzles",
            "provider": "Museum of Illusions Shop",
            "codeHash": "32c0f2f634cff4183c61fa45ffcd285c3277ba5d5f95d6f9315e71f6070c94e4"
        },
        "id": 229
    },
    {
        "name": "Hellenic IT Museum",
        "lat": 37.9542,
        "lng": 23.6811,
        "description": "The first and only museum in Greece dedicated to the history of Information Technology.",
        "audioText": "You are visiting the Hellenic IT Museum in Moschato. Established in 2008, it is the only museum in Greece dedicated exclusively to the history of computing. Its vast collection features over 4,000 artifacts from the 1970s to the 1990s, including rare mainframe components, vintage Apple and IBM personal computers, floppy disks, and the clunky mobile phones that started the digital revolution.",
        "quiz": {
            "question": "What specific era of computing does the Hellenic IT Museum primarily focus on?",
            "options": [
                "The 1970s to the 1990s",
                "The 1800s to the 1920s",
                "The 2000s to the present",
                "Ancient Greek computing mechanisms"
            ],
            "answer": 0,
            "feedback": "Correct! The museum preserves the pivotal early decades of modern personal computing."
        },
        "reward": {
            "title": "Free retro computer sticker pack",
            "provider": "IT Museum Desk",
            "codeHash": "7523269980c77676f0561014cf63f8cb68d28fe36265f39a1435f0a153b86e98"
        },
        "id": 230
    },
    {
        "name": "Maria Callas Museum",
        "lat": 37.9765,
        "lng": 23.7305,
        "description": "A beautiful new museum honoring the life and career of the legendary Greek soprano.",
        "audioText": "Welcome to the Maria Callas Museum, situated in a beautifully restored neoclassical building on Mitropoleos Street. Opened in 2023, the museum is dedicated to 'La Divina', the greatest opera singer of the 20th century. Through interactive audio exhibits, rare recordings, personal letters, and spectacular stage costumes, visitors can intimately experience the dramatic life and unparalleled voice of Maria Callas.",
        "quiz": {
            "question": "By what famous Italian nickname was Maria Callas widely known?",
            "options": [
                "La Divina",
                "La Prima Donna",
                "La Soprano",
                "La Voce"
            ],
            "answer": 0,
            "feedback": "Correct! She was famously referred to as 'La Divina' (The Divine One)."
        },
        "reward": {
            "title": "10% off opera recordings",
            "provider": "Callas Museum Shop",
            "codeHash": "38c1fb82d067052fc1ff4be707771a504354211624b7196cde5d0a037f8d99ab"
        },
        "id": 231
    },
    {
        "name": "OTE Telecommunications Museum",
        "lat": 38.0931,
        "lng": 23.8055,
        "description": "A fascinating journey through the history of telecommunications in Greece.",
        "audioText": "You are at the OTE Telecommunications Museum in Nea Erythraia. Operated by the Hellenic Telecommunications Organization, the museum traces the history of human communication. Exhibits range from ancient Greek fire-beacons and the hydraulic telegraph of Aeneas, to 19th-century Morse code transmitters, early rotary dial telephones, and the massive switchboards operated by the first female telephone operators.",
        "quiz": {
            "question": "Which ancient method of communication is featured in the museum's exhibits?",
            "options": [
                "The hydraulic telegraph of Aeneas",
                "The homing pigeon network",
                "The bronze megaphone",
                "The solar mirror relay"
            ],
            "answer": 0,
            "feedback": "Correct! The museum explores early methods like the ingenious hydraulic telegraph."
        },
        "reward": {
            "title": "Free vintage telephone postcard",
            "provider": "OTE Museum Desk",
            "codeHash": "e4770295be1c47b9b9ccd19ac6dac54a6b107a0aa71bfe57139740a5b15edb74"
        },
        "id": 232
    },
    {
        "name": "Jewish Museum of Greece",
        "lat": 37.9733,
        "lng": 23.7328,
        "description": "A poignant museum documenting the 2,300-year history of the Jewish communities in Greece.",
        "audioText": "Welcome to the Jewish Museum of Greece, located near Syntagma Square. This highly impactful museum documents the rich 2,300-year history of the Romaniote and Sephardic Jewish communities in Greece. The exhibits feature religious artifacts, traditional costumes, and reconstructed synagogue interiors, alongside a deeply moving section dedicated to the Greek Jews who perished during the Holocaust.",
        "quiz": {
            "question": "What are the two primary Jewish communities historically present in Greece?",
            "options": [
                "Romaniote and Sephardic",
                "Ashkenazi and Hasidic",
                "Beta Israel and Yemenite",
                "Karaite and Bukharan"
            ],
            "answer": 0,
            "feedback": "Correct! The Romaniote (Greek-speaking) and Sephardic (Ladino-speaking) are the historic communities of Greece."
        },
        "reward": {
            "title": "10% off history publications",
            "provider": "Jewish Museum Shop",
            "codeHash": "90a27f8a047227808f2c31db27b52c0f285ed78432164bd67e190148f10ccd0e"
        },
        "id": 233
    },
    {
        "name": "Mycenaean Tholos Tomb at Thorikos",
        "lat": 37.739,
        "lng": 24.054,
        "image": "images/mycenaean_tholos_thorikos.jpg",
        "description": "A monumental Bronze Age beehive-shaped burial chamber (1600-1200 BC) that served as the final resting place for Mycenaean elite.",
        "audioText": "You are standing near one of the most impressive Mycenaean tholos tombs in Attica, carved into Velatouri Hill during the Bronze Age between 1600 and 1200 BC. This beehive-shaped burial chamber was built using the corbelling technique, where limestone blocks were carefully stacked in overlapping circles to form a magnificent dome. Such monumental tombs were reserved for the ruling elite of Mycenaean society. The tomb's location near ancient silver mines suggests that the wealth buried here came from mining operations that made Thorikos prosperous for millennia.",
        "quiz": {
            "question": "What construction technique was used to build the dome of the Mycenaean tholos tomb?",
            "options": [
                "Corbelling with overlapping stone circles",
                "Concrete poured into wooden molds",
                "Mud bricks with timber supports",
                "Carved from a single massive rock"
            ],
            "answer": 0,
            "feedback": "Correct! The corbelling technique created the distinctive beehive shape by stacking stones in progressively smaller circles."
        },
        "reward": {
            "title": "Free postcard of Mycenaean architecture",
            "provider": "Thorikos Visitor Center",
            "codeHash": "60303ae22b998861bce3b28f33eec1be758a213c86c93c076dbe9f558c11c752"
        },
        "id": 234
    },
    {
        "name": "Sanctuary of Artemis at Brauron",
        "lat": 37.92611,
        "lng": 23.99361,
        "image": "images/sanctuary_artemis_brauron.jpg",
        "description": "One of Greece's most sacred sites, where young girls served as 'bears' in rituals honoring Artemis, goddess of the hunt and wilderness.",
        "audioText": "You have arrived at Brauron, one of ancient Greece's most important religious sanctuaries, dedicated to Artemis, the goddess of hunting, wilderness, and childbirth. This sacred site was active from the 8th century BC until flooding forced its abandonment in the 3rd century BC. The most fascinating aspect of Brauron was the Arkteia festival, where young Athenian girls aged 5 to 10, dressed in saffron robes, performed ritual dances as 'bears' to honor the goddess. The impressive Pi-shaped stoa you see had dining rooms where these girls lived during their service. The Classical Doric temple stood on a platform above a sacred spring, where countless votive offerings were deposited over the centuries.",
        "quiz": {
            "question": "What was the Arkteia festival at Brauron?",
            "options": [
                "A ritual where young girls served as 'bears' honoring Artemis",
                "An annual hunting competition for warriors",
                "A dramatic performance celebrating Zeus",
                "A harvest festival for farmers"
            ],
            "answer": 0,
            "feedback": "Correct! Young Athenian girls performed as ritual 'bears' in this unique coming-of-age ceremony dedicated to Artemis."
        },
        "reward": {
            "title": "Free entry to Brauron Archaeological Museum",
            "provider": "Ministry of Culture - Brauron",
            "codeHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        },
        "id": 235
    },
    {
        "name": "Sacred Spring of Brauron",
        "lat": 37.9261,
        "lng": 23.9937,
        "image": "images/sacred_spring_brauron.jpg",
        "description": "The ancient holy water source at the heart of Brauron, where worshippers left offerings to Artemis from the 8th century BC onward.",
        "audioText": "You are at the Sacred Spring of Brauron, the very heart and earliest focus of worship at this sanctuary. Water has always been sacred in Greek religion, and this natural spring drew worshippers from at least the 8th century BC. Excavations have revealed countless votive offerings thrown into the spring waters over centuries—mirrors, jewelry, figurines, and pottery—all gifts to Artemis seeking her protection in childbirth, successful hunts, or safe passage through adolescence. The spring's constant flow of pure water represented the life-giving power of the goddess herself. The temple and later buildings were all positioned around this holy fountain, the spiritual center from which the entire sanctuary grew.",
        "quiz": {
            "question": "Why was the Sacred Spring so important to the sanctuary?",
            "options": [
                "It was the earliest focus of worship and symbolized Artemis's life-giving power",
                "It was the only source of drinking water in the region",
                "It flowed with wine instead of water during festivals",
                "It was believed to grant immortality"
            ],
            "answer": 0,
            "feedback": "Correct! The sacred spring was the spiritual heart of Brauron, representing the goddess's vital, life-giving essence."
        },
        "reward": {
            "title": "Complimentary herbal tea at Vravrona Café",
            "provider": "Vravrona Traditional Café",
            "codeHash": "3c59dc048e8850243be8079a5c74d079e0b6c2cde5e7c24b2d1c18db0d9c3e4a"
        },
        "id": 236
    },
    {
        "name": "Sanctuary of Athena Pallenis",
        "lat": 38,
        "lng": 23.89,
        "image": "images/sanctuary_athena_pallenis.jpg",
        "description": "A mid-5th century BC Doric temple where the federation of Attic townships met, similar in design to the famous Hephaestus temple.",
        "audioText": "Welcome to the Sanctuary of Athena Pallenis, an important federal sanctuary in the Mesogeia plain. This mid-5th century BC Doric hexastyle temple, meaning it had six columns across the front, served as a meeting place for the ancient federation of Attic townships. The temple's design closely resembles the well-preserved Hephaestus temple in Athens, with its harmonious proportions and limestone foundations. Archaeological excavations have uncovered inscribed statue bases and votive reliefs that tell us this was a center of regional political and religious life. The citizens of Pallene and surrounding demes gathered here to honor Athena as their protector and to make collective decisions affecting their communities.",
        "quiz": {
            "question": "What does 'hexastyle' mean in temple architecture?",
            "options": [
                "A temple with six columns across its front",
                "A temple dedicated to six gods",
                "A temple with six interior chambers",
                "A temple built in six months"
            ],
            "answer": 0,
            "feedback": "Correct! Hexastyle describes a temple façade with six columns, a common classical Greek design."
        },
        "reward": {
            "title": "10% discount at Pallini History Museum shop",
            "provider": "Pallini Cultural Foundation",
            "codeHash": "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
        },
        "id": 237
    },
    {
        "name": "Ancient Deme of Sphettos",
        "lat": 37.8962,
        "lng": 23.874,
        "image": "images/deme_sphettos_koropi.jpg",
        "description": "One of the twelve original townships unified by Theseus, with remains on the Kastro tou Christou hill in modern Koropi.",
        "audioText": "You are exploring Sphettos, one of the twelve ancient townships, or demes, that according to legend were unified by the hero Theseus to form the city of Athens. Located on the Kastro tou Christou hill in what is now Koropi, Sphettos was an important community in the fertile Mesogeia plain. Archaeological investigations have uncovered stone foundations of houses, public buildings, and numerous inscribed statue bases and votive reliefs that document the civic and religious life of this deme through the classical and Hellenistic periods. As a deme, Sphettos had its own assembly, officials, and local cults, giving its citizens a strong sense of local identity even while they were part of greater Athens.",
        "quiz": {
            "question": "What is a 'deme' in ancient Greek society?",
            "options": [
                "A township or local district with its own assembly and officials",
                "A military fortress guarding the frontier",
                "A temple dedicated to multiple gods",
                "A trading post on the coast"
            ],
            "answer": 0,
            "feedback": "Correct! Demes were the basic units of Athenian democracy, each with local governance and identity."
        },
        "reward": {
            "title": "Free map of ancient Attic demes",
            "provider": "Koropi Historical Society",
            "codeHash": "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
        },
        "id": 238
    },
    {
        "name": "Ore Washeries at Souriza Valley",
        "lat": 37.71,
        "lng": 24.03,
        "image": "images/ore_washeries_souriza.jpg",
        "description": "Sophisticated ancient ore processing facilities with stone basins and channels where silver ore was washed and separated.",
        "audioText": "You are visiting the ore washeries of Souriza Valley, remarkable examples of ancient industrial technology. After silver ore was extracted from the mines, it had to be processed to separate the valuable metal from worthless rock. Here at Souriza, you can see the remains of hydraulic washing installations from the Classical period, with stone basins and carefully engineered channels that used flowing water to separate lighter waste rock from heavier silver-bearing ore. This ancient beneficiation process required sophisticated understanding of water management and ore properties. Multiple washeries operated simultaneously in this valley, processing tons of ore to feed the nearby smelting furnaces. These industrial sites are as much a testament to Greek engineering genius as their famous temples.",
        "quiz": {
            "question": "What was the purpose of the ore washeries?",
            "options": [
                "To use water to separate valuable silver ore from waste rock",
                "To provide drinking water for mine workers",
                "To wash the silver coins after minting",
                "To clean the miners' tools and equipment"
            ],
            "answer": 0,
            "feedback": "Correct! The washeries used water flow to separate heavier silver ore from lighter worthless rock."
        },
        "reward": {
            "title": "Free silver jewelry cleaning at Lavrio Artisan Shop",
            "provider": "Lavrio Silver Workshop",
            "codeHash": "cc0cdd8b88d73f670e97c0e7bb4e0b2a3e3f4c2e0be3e5d7e3b3f5a7c0cc7e0c"
        },
        "id": 239
    },
    {
        "name": "Fortified Acropolis of Thorikos",
        "lat": 37.739,
        "lng": 24.0545,
        "image": "images/acropolis_thorikos.jpg",
        "description": "A prehistoric hilltop settlement fortified from the Neolithic period through the Bronze Age, commanding views of the Aegean.",
        "audioText": "You have climbed to the Fortified Acropolis of Thorikos, perched on the summit of Velatouri Hill with panoramic views of the Aegean Sea. This hilltop was continuously inhabited from the Neolithic period around 3200 BC through the Late Bronze Age until about 1050 BC. The defensive walls you see fragments of protected a thriving prehistoric community that controlled the valuable mineral resources of this region. Archaeological excavations have revealed houses, storage facilities, and artifacts spanning over two millennia. The strategic location allowed the settlement to monitor sea approaches and protect the mining operations below. After the Bronze Age collapse, the population moved down the hillside, but this acropolis remained a symbol of Thorikos's ancient origins.",
        "quiz": {
            "question": "How long was the Acropolis of Thorikos continuously inhabited?",
            "options": [
                "Over 2,000 years, from around 3200 to 1050 BC",
                "Only during the Classical period",
                "About 100 years in the Bronze Age",
                "It was never permanently inhabited"
            ],
            "answer": 0,
            "feedback": "Correct! This acropolis had an extraordinarily long occupation from the Neolithic through the end of the Bronze Age."
        },
        "reward": {
            "title": "Panoramic photo print at Thorikos viewpoint",
            "provider": "Thorikos Heritage Site",
            "codeHash": "d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2"
        },
        "id": 240
    },
    {
        "name": "Temple of Demeter at Thorikos",
        "lat": 37.737,
        "lng": 24.052,
        "image": "images/temple_demeter_thorikos.jpg",
        "description": "A Classical period sanctuary with a monumental Doric stoa dedicated to Demeter, goddess of agriculture and the harvest.",
        "audioText": "Welcome to the Temple of Demeter at Thorikos, a sanctuary honoring the goddess of agriculture, grain, and the harvest. Located on the Adami plain below the acropolis, this Classical period sanctuary featured a monumental Doric stoa—a long colonnaded building with limestone columns and foundations that can still be traced today. Demeter was vital to ancient communities because she controlled the fertility of the earth and the success of crops. The sanctuary would have been especially important in a mining town like Thorikos, where farmers worked the fields around the mines and needed the goddess's blessing for good harvests. Ritual offerings and communal feasts in honor of Demeter brought the community together in gratitude and hope.",
        "quiz": {
            "question": "Who was Demeter in Greek mythology?",
            "options": [
                "The goddess of agriculture, grain, and the harvest",
                "The goddess of wisdom and warfare",
                "The goddess of the hunt and wilderness",
                "The goddess of love and beauty"
            ],
            "answer": 0,
            "feedback": "Correct! Demeter was the goddess who controlled the fertility of the earth and the success of crops."
        },
        "reward": {
            "title": "Free sample of local honey at Thorikos Farm Shop",
            "provider": "Lavreotiki Agricultural Cooperative",
            "codeHash": "8e35c2cd3bf6641bdb0e2050b76932cbb2e6034a0ddacc1d9bea82a6ba57f7f0"
        },
        "id": 241
    },
    {
        "name": "Acharnae - Largest Ancient Deme",
        "lat": 38.08194,
        "lng": 23.73147,
        "image": "images/acharnae_deme.jpg",
        "description": "The largest deme of ancient Attica, famous for its charcoal burners and fierce warriors, immortalized in Aristophanes' comedy 'The Acharnians'.",
        "audioText": "Welcome to Acharnae, the largest and most populous of all Athenian demes, located in the northwestern Attic plain near Mount Parnes. At the start of the Peloponnesian War, Acharnae could field 3,000 hoplites—a tenth of Athens' entire infantry! The Acharnians were famous as charcoal burners who supplied Athens with fuel from the oak forests of Parnes, but they were also renowned as fierce and hot-tempered warriors. The playwright Aristophanes chose them as the subject of his comedy 'The Acharnians,' where he portrays them as tough, rough country folk eager for war against Sparta. The area has yielded rich archaeological finds, including a magnificent Mycenaean tholos tomb known as the Tomb of Menidi, which contained gold jewelry and fine pottery showing that this region was important even in the Bronze Age. The Spartans deliberately ravaged Acharnae during their invasions, knowing it would most enrage the Athenians. Today, the modern suburb of Acharnes preserves the ancient name.",
        "quiz": {
            "question": "What made Acharnae the largest deme of ancient Attica?",
            "options": [
                "Its large population that could field 3,000 hoplites",
                "Its geographic size covering most of Attica",
                "Its wealthy aristocratic families",
                "Its position as the capital before Athens"
            ],
            "answer": 0,
            "feedback": "Correct! Acharnae's ability to contribute one-tenth of Athens' infantry demonstrates its exceptional population size."
        },
        "reward": {
            "title": "Traditional charcoal-grilled souvlaki voucher",
            "provider": "Acharnes Traditional Taverna",
            "codeHash": "8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c"
        },
        "id": 242
    },
    {
        "name": "Paeania - Demosthenes' Birthplace",
        "lat": 37.958506,
        "lng": 23.8552995,
        "image": "images/paeania_deme.jpg",
        "description": "The ancient deme on the eastern slopes of Mount Hymettus, birthplace of Demosthenes, the greatest orator of ancient Greece.",
        "audioText": "You are in Paeania, an ancient deme on the eastern side of Mount Hymettus, famous as the birthplace of Demosthenes, the greatest orator in Greek history. Born here in 384 BC, Demosthenes overcame a speech impediment through rigorous training—famously practicing with pebbles in his mouth and reciting speeches over the roar of the sea. He became Athens' fiercest defender against the rising power of Macedon under Philip II and his son Alexander. His powerful 'Philippic' orations warned Athenians of the threat to their freedom, though ultimately Philip conquered Greece. Paeania was actually divided into two parts: Upper Paeania and Lower Paeania, both belonging to the tribe Pandionis. The area was prosperous, with fertile land for farming and easy access to both Athens and the coast. Archaeological remains include house foundations on terraces and inscriptions documenting the deme's civic life. The modern town of Paiania preserves the ancient name and is famous today for its beautiful Koutouki Cave.",
        "quiz": {
            "question": "What is Paeania most famous for in ancient history?",
            "options": [
                "Being the birthplace of the orator Demosthenes",
                "The site of a major battle",
                "A temple to Zeus",
                "The first democracy in Greece"
            ],
            "answer": 0,
            "feedback": "Correct! Demosthenes, born in Paeania in 384 BC, became Athens' greatest orator and defender against Macedonian expansion."
        },
        "reward": {
            "title": "Free entry to Vorres Museum of Folk Art",
            "provider": "Paiania Cultural Center",
            "codeHash": "0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e"
        },
        "id": 243
    },
    {
        "name": "Ancient Salamis and Naval Battle Site",
        "lat": 37.95,
        "lng": 23.57,
        "image": "images/salamis_ancient_city.jpg",
        "description": "The ancient city and harbor where the Greek fleet gathered before defeating the Persians in the most decisive naval battle of antiquity in 480 BC.",
        "audioText": "You are on the island of Salamis, site of one of the most consequential battles in human history. In September 480 BC, the narrow straits between this island and the mainland witnessed the Battle of Salamis, where the outnumbered Greek fleet decisively defeated the massive Persian navy of Xerxes. The Greek commander Themistocles brilliantly lured the Persian ships into these confined waters where their numbers became a disadvantage. The Greeks, fighting for their homes and freedom, destroyed 200 Persian vessels while losing only 40 of their own. The Persian king Xerxes watched in horror from a golden throne on Mount Aegaleos as his fleet was annihilated. This victory saved Greece from conquest and allowed the flowering of classical Greek civilization. The ancient city of Salamis, whose ruins lie in Ampelakia Bay, was the legendary birthplace of the hero Ajax and the playwright Euripides. Today, Salamis is home to the Greek Navy's headquarters, continuing the island's 2,500-year naval tradition.",
        "quiz": {
            "question": "Why was the Battle of Salamis so decisive?",
            "options": [
                "The Greek victory saved Greece from Persian conquest",
                "It was the first naval battle in history",
                "The Spartans defeated Athens",
                "Alexander the Great began his conquests"
            ],
            "answer": 0,
            "feedback": "Correct! Salamis was the turning point that prevented Persian domination and preserved Greek independence and culture."
        },
        "reward": {
            "title": "Ferry ride discount to Salamis Island",
            "provider": "Salamis Ferry Services",
            "codeHash": "1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f"
        },
        "id": 244
    },
    {
        "name": "Dekeleia - Spartan Stronghold",
        "lat": 38.11,
        "lng": 23.7786,
        "image": "images/dekeleia_fortress.jpg",
        "description": "The strategic fortress captured by Sparta in 413 BC that crippled Athens throughout the final decade of the Peloponnesian War.",
        "audioText": "You are at Dekeleia, a site that changed the course of the Peloponnesian War. In 413 BC, on the advice of the Athenian traitor Alcibiades, the Spartan king Agis II seized and fortified this strategic deme just 120 stadia from Athens. From this base, the Spartans could ravage the Attic countryside year-round, forcing the Athenians to abandon their farms and cutting off their access to the silver mines of Laurion and the land route to the grain port of Oropos. Over 20,000 Athenian slaves, many skilled craftsmen, escaped to the Spartans here. The occupation of Dekeleia was more damaging to Athens than all the previous invasions combined, as Thucydides tells us. It was visible from Athens itself—a constant reminder of Sparta's presence. The fortress remained in Spartan hands until Athens' final defeat in 404 BC. The ancient Dekeleians had enjoyed special privileges in Sparta since helping the Dioscuri rescue Helen from Theseus, and they maintained these rights even after this painful occupation.",
        "quiz": {
            "question": "How did Dekeleia's occupation damage Athens?",
            "options": [
                "Year-round raids, loss of mines, escape of slaves, and cut supply routes",
                "It was the site of Athens' final surrender",
                "The Spartans burned the Parthenon",
                "It blocked Athens' access to the sea"
            ],
            "answer": 0,
            "feedback": "Correct! The permanent Spartan garrison at Dekeleia inflicted continuous economic and psychological damage on Athens throughout the war's final phase."
        },
        "reward": {
            "title": "Historical walking tour of Tatoi Estate",
            "provider": "Tatoi Heritage Foundation",
            "codeHash": "2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a"
        },
        "id": 245
    },
    {
        "name": "Ancient Walls of Piraeus",
        "lat": 37.9475,
        "lng": 23.6512,
        "image": "images/piraeus_ancient_walls.jpg",
        "description": "The mighty fortifications built by Themistocles and Conon that protected Athens' port and the famous Long Walls connecting it to the city.",
        "audioText": "You are standing at the ancient fortifications of Piraeus, some of the finest examples of Greek military architecture surviving today. After the Persian Wars, the visionary statesman Themistocles recognized that Athens' future lay in sea power. He fortified Piraeus with massive walls and connected it to Athens with the Long Walls—twin fortification lines running five kilometers that created a secure corridor allowing Athens to receive supplies by sea even when enemies controlled the countryside. These walls were about 60 feet high and broad enough for two carts to pass. After Athens' defeat in 404 BC, the Spartans tore down the Long Walls amid celebration, but in 394 BC, Conon rebuilt them and added the impressive coastal fortifications you see preserved here. The walls are built in the emplekton technique: two parallel faces of large squared limestone blocks with rubble fill between them. Over 2.5 kilometers of these walls survive along the peninsula, including several towers. Their preservation is remarkable, making this one of the best places to understand ancient Greek fortification engineering.",
        "quiz": {
            "question": "What were the Long Walls and why were they important?",
            "options": [
                "Walls connecting Athens to Piraeus, securing supply lines by sea",
                "The perimeter walls around the Acropolis",
                "The walls of the Parthenon temple",
                "Defensive walls between Athens and Sparta"
            ],
            "answer": 0,
            "feedback": "Correct! The Long Walls ensured Athens could never be starved out as long as it controlled the sea."
        },
        "reward": {
            "title": "Harbor cruise with historical narration",
            "provider": "Piraeus Port Authority",
            "codeHash": "3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b"
        },
        "id": 246
    },
    {
        "name": "Aphidna - Where Helen Was Hidden",
        "lat": 38.1871,
        "lng": 23.8792,
        "image": "images/aphidna_fortress.jpg",
        "description": "One of the twelve original townships of Attica, famous in myth as where Theseus hid Helen of Troy before the Dioscuri rescued her.",
        "audioText": "You are at Aphidna, one of the legendary twelve ancient towns that Theseus unified to create Athens. This site is forever linked to one of Greek mythology's most famous stories: the abduction of Helen. According to legend, before Helen became the cause of the Trojan War, the hero Theseus kidnapped the young Helen and brought her here to Aphidna, entrusting her to his friend Aphidnus. When Helen's brothers, the Dioscuri—Castor and Pollux—came searching for her, the people of neighboring Dekeleia revealed where she was hidden. The Dioscuri stormed Aphidna, rescued their sister, and in gratitude granted the Dekeleians eternal privileges in Sparta. Archaeological reality shows that Aphidna was indeed important: a Middle Bronze Age tumulus with rich burials dates to 2000-1600 BC, and a Classical fortress crowned the Kotroni hill, guarding the northern approaches to Athens. Recent surveys have revealed extensive remains of the ancient settlement on the hillside terraces, showing this was a substantial community controlling a strategic position near the Marathon reservoir.",
        "quiz": {
            "question": "Why is Aphidna famous in Greek mythology?",
            "options": [
                "Theseus hid Helen here before her brothers rescued her",
                "It was the birthplace of Zeus",
                "The Trojan Horse was built here",
                "Hercules completed one of his labors here"
            ],
            "answer": 0,
            "feedback": "Correct! The myth of Helen's rescue from Aphidna by the Dioscuri was famous throughout ancient Greece."
        },
        "reward": {
            "title": "Free visit to Marathon Dam and Lake viewpoint",
            "provider": "EYDAP Water Company",
            "codeHash": "4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c"
        },
        "id": 247
    },
    {
        "name": "Naval Base of Sounion",
        "lat": 37.6524,
        "lng": 24.0228,
        "image": "images/sounion_naval_base.jpg",
        "description": "Ancient rock-cut ship sheds where Athenian warships were maintained, protecting the vital sea lanes to the silver mines and Athens.",
        "audioText": "You are at the naval base of Sounion, a fascinating example of ancient Greek maritime infrastructure. Cut directly into the bedrock on the northwestern side of Cape Sounion are two parallel ship sheds that housed light patrol vessels called triremes. The main chamber measures 20.5 meters long and 11.5 meters wide, with two slanting trenches carved into the floor where ships could be hauled up for maintenance and storage. A smaller single slipway lies nearby, now partially submerged beneath the rising sea. This naval base was part of Athens' strategic defense network, positioned to guard the approaches to Piraeus and the vital silver-mining region of Laurion. Fast patrol ships based here could intercept pirates or enemy raiders threatening Athenian commerce. The rock-cut construction was difficult and expensive, requiring skilled stoneworkers, but it created permanent facilities that needed no wooden structures to rot or burn. These installations were incorporated into the fortress walls of Sounion and remained in use throughout the Classical and Hellenistic periods. Underwater surveys have revealed submerged walls and structures that once lined the ancient harbor.",
        "quiz": {
            "question": "What were ship sheds used for in ancient Greek naval bases?",
            "options": [
                "Hauling warships out of water for maintenance and storage",
                "Training new sailors in rowing techniques",
                "Building new warships from scratch",
                "Storing grain and supplies for the fleet"
            ],
            "answer": 0,
            "feedback": "Correct! Ship sheds protected expensive warships from marine organisms and weather when not in use."
        },
        "reward": {
            "title": "Scuba diving intro session in Sounion bay",
            "provider": "Cape Sounion Dive Center",
            "codeHash": "5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d"
        },
        "id": 248
    },
    {
        "name": "Anagyrous - Southern Coastal Deme",
        "lat": 37.83,
        "lng": 23.7976,
        "image": "images/anagyrous_deme.jpg",
        "description": "An ancient fishing deme near Cape Zoster with a sanctuary to the Mother of the Gods, famous for its seafood in antiquity.",
        "audioText": "You are at Anagyrous, an ancient coastal deme situated in southern Attica near the promontory called Zoster. This was primarily a fishing community, and ancient sources tell us that Anagyrous was especially celebrated for its excellent seafood and fisheries. Pausanias mentions that there was a temple here dedicated to the Mother of the Gods, a deity associated with fertility and protection. The deme's coastal location made it prosperous but also vulnerable to pirate raids and enemy fleets. Archaeological excavations on Lathouriza hill have revealed a substantial settlement from the Archaic and Classical periods, including a sanctuary with a double temple, a circular platform, houses, and an enclosure wall. Rich grave offerings from the area, now in the National Archaeological Museum, show that wealthy families lived here in the 7th and 6th centuries BC. The modern area of Vari and Varkiza preserves something of the ancient character—still known for beaches and seafood restaurants. The name Anagyrous itself comes from a thorny shrub that grew abundantly in the area and had an unpleasant smell when disturbed—giving rise to the Greek proverb about 'stirring up Anagyrous' when someone made trouble unnecessarily.",
        "quiz": {
            "question": "What was Anagyrous particularly famous for in ancient times?",
            "options": [
                "Its excellent fisheries and seafood",
                "Silver mining operations",
                "Marble quarries",
                "Wine production"
            ],
            "answer": 0,
            "feedback": "Correct! As a coastal deme, Anagyrous was renowned for its fishing and was celebrated for the quality of its seafood."
        },
        "reward": {
            "title": "Fresh fish lunch at seaside taverna",
            "provider": "Vari Seafood Restaurant",
            "codeHash": "6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e"
        },
        "id": 249
    },
    {
        "name": "Oinoe Fortress - Border Stronghold",
        "lat": 38.168,
        "lng": 23.449,
        "image": "images/oinoe_fortress.jpg",
        "description": "The fortified border deme guarding the pass through Mount Cithaeron, famously besieged by Spartans at the start of the Peloponnesian War.",
        "audioText": "You are at Oinoe, one of the most remote frontier demes of Attica, guarding the narrow pass through Mount Cithaeron that connected Athens with Thebes and Plataea. The fortress you see, known today as Ghyftokastro or 'Gypsy Castle,' occupies a commanding height on the Attic side of the pass. In 431 BC, at the very outbreak of the Peloponnesian War, the Spartan king Archidamus led his army into Attica and laid siege to Oinoe. Though it was just a small frontier fort, the Spartans wasted precious time trying to take it, giving the Athenians crucial extra days to evacuate their farms and retreat behind Athens' walls. Thucydides describes the siege machines they brought against it, but Oinoe held firm. The fortress was eventually captured by the Boeotians in 411 BC, though Athens recovered it afterward. The rectangular circuit wall, about 3.9 meters thick, has seven visible towers—four on the north side, two on the east, and one on the west. The south wall has been confirmed by excavations but is not visible. The location meant that whoever held Oinoe controlled movement between Attica and Boeotia, making it strategically vital far beyond its size.",
        "quiz": {
            "question": "Why was Oinoe strategically important?",
            "options": [
                "It controlled the pass between Attica and Boeotia through Mount Cithaeron",
                "It was the largest city in northern Attica",
                "It contained the royal treasury",
                "All Athenian soldiers trained there"
            ],
            "answer": 0,
            "feedback": "Correct! Oinoe's position guarding the mountain pass gave it strategic importance far beyond its small size."
        },
        "reward": {
            "title": "Mountain hiking trail map and compass",
            "provider": "Mazi Archaeological Project",
            "codeHash": "9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"
        },
        "id": 250
    },
    {
        "name": "Aixone - Coastal Fishing Deme",
        "lat": 37.866334,
        "lng": 23.7548945,
        "image": "images/aixone_deme.jpg",
        "description": "An ancient seaside deme with a sanctuary to Hebe, goddess of youth, located in what is now the suburb of Glyfada.",
        "audioText": "You are in Aixone, an ancient coastal deme that occupied the area of modern Glyfada, one of Athens' most fashionable southern suburbs. In ancient times, Aixone was celebrated for its fisheries—being on the coast between Halimus and Cape Zoster meant abundant fishing opportunities. The deme belonged to the Kekropis tribe and was home to a sanctuary of Hebe, the goddess of youth who served as cupbearer to the gods on Mount Olympus. Archaeological excavations have revealed the deme center near the Church of Agios Nikolaos, with finds including deme decrees, inscriptions, and evidence of Classical and Hellenistic settlement. A remarkable discovery has been a wealthy cemetery dating to the Late Geometric and Archaic periods, which produced some of the finest early Attic black-figure pottery now displayed in the National Archaeological Museum. These elaborate funeral offerings show that at least one rich aristocratic family made Aixone their home in the 7th and 6th centuries BC. To the west of the settlement lay the port and ancient salt pits where salt was extracted from seawater—another source of the deme's prosperity. The name persists in the area called Voula-Varkiza nearby.",
        "quiz": {
            "question": "What goddess had a sanctuary at Aixone?",
            "options": [
                "Hebe, goddess of youth and cupbearer of the gods",
                "Athena, goddess of wisdom",
                "Artemis, goddess of the hunt",
                "Demeter, goddess of agriculture"
            ],
            "answer": 0,
            "feedback": "Correct! Hebe, daughter of Zeus and Hera, was honored at Aixone with her own sanctuary."
        },
        "reward": {
            "title": "Beach club day pass with lunch",
            "provider": "Glyfada Beach Resort",
            "codeHash": "0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c"
        },
        "id": 251
    },
    {
        "name": "Prasiae - Ancient Port Settlement",
        "lat": 37.8652,
        "lng": 24.0376,
        "image": "images/prasiae_port.jpg",
        "description": "An eastern coastal deme with an excellent natural harbor, departure point for sacred processions to Delos, now called Porto Rafti.",
        "audioText": "You are at Prasiae, an ancient port settlement occupying the shores of one of the best natural harbors on the eastern coast of Attica—the bay now called Porto Rafti. The harbor is deep and capacious, over a mile wide at its entrance, and protected by several islands including the rocky islet that gives the modern name Porto Rafti, or 'Tailor's Port,' from a large Roman-era marble statue that vaguely resembles a seated tailor. In ancient times, Prasiae was important as the departure point for the Theoria, the sacred procession that sailed from here to the sanctuary of Apollo on Delos. Pausanias mentions a temple of Apollo here, as well as the tomb of Erysichthon, son of King Cecrops, who died at this spot on his return from Delos. The bay's strategic value was recognized in Hellenistic times when the fortified peninsula of Koroni, jutting into the bay, was garrisoned—possibly by Ptolemaic forces during the Chremonidean War. Archaeological surveys continue to reveal remains of the ancient deme settlement on the northern and southern shores of the bay. The harbor remained important through Byzantine and Venetian times and even served as a haven for Greek ships during the War of Independence.",
        "quiz": {
            "question": "What was the Theoria that departed from Prasiae?",
            "options": [
                "The sacred procession that sailed to Apollo's sanctuary on Delos",
                "The annual Olympic Games delegation",
                "A military expedition against Persia",
                "A trading fleet to Egypt"
            ],
            "answer": 0,
            "feedback": "Correct! The Theoria was the sacred delegation that Athens sent regularly to honor Apollo at his birthplace on Delos."
        },
        "reward": {
            "title": "Sailing lesson in Porto Rafti bay",
            "provider": "Porto Rafti Sailing Club",
            "codeHash": "1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d"
        },
        "id": 252
    },
    {
        "name": "Theatre of Ikarion - Birthplace of Tragedy",
        "lat": 38.095558,
        "lng": 23.900489,
        "image": "images/theatre_ikarion.jpg",
        "description": "The legendary birthplace of Greek tragedy, where Thespis created the first actor and transformed dithyramb into drama in the 6th century BC.",
        "audioText": "Welcome to Ikarion, the legendary birthplace of Greek tragedy and one of the most historically significant sites in the history of Western theater. According to ancient tradition, it was here in the 6th century BC that Thespis—the first tragic actor whose name gives us the word 'thespian'—revolutionized performance by stepping out of the chorus to speak as an individual character. This innovation transformed the choral dithyramb honoring Dionysus into true drama. The theater you see is small and austere, with a rectangular orchestra limited on one side by five stone seats of honor called prohedriai and on the other by a terrace. Despite its modest size, inscriptions prove that organized dramatic festivals were held here as early as the 5th century BC. The site also includes a Pythion temple dedicated to Apollo, and a semicircular monument honoring the choregoi who funded performances. The myth tells that the local hero Ikarios welcomed the god Dionysus and was taught the cultivation of grapes and wine-making. American excavations in 1888-89 revealed the inscription 'The Pythion of the Ikarians,' confirming this as the deme's civic and religious center. Standing here, you can almost hear the earliest tragic verses echoing across 2,500 years.",
        "quiz": {
            "question": "Who was Thespis and why is Ikarion significant?",
            "options": [
                "Thespis was the first tragic actor who created individual character performance here",
                "Thespis was a god worshipped at this theater",
                "Thespis built the Parthenon",
                "Thespis founded the Olympic Games"
            ],
            "answer": 0,
            "feedback": "Correct! Thespis revolutionized theater by introducing the first actor, transforming choral performance into drama."
        },
        "reward": {
            "title": "Free entry to Dionysos Municipal Cultural Center",
            "provider": "Municipality of Dionysos",
            "codeHash": "4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a"
        },
        "id": 253
    },
    {
        "name": "Church of Agioi Theodoroi",
        "lat": 37.9772,
        "lng": 23.732,
        "image": "images/agioi_theodoroi.jpg",
        "description": "One of Athens' most important Byzantine monuments, built in 1049-1065 by the Byzantine official Nikolaos Kalomalos, near Klathmonos Square.",
        "audioText": "You are at the Church of Agioi Theodoroi, one of the most important and beautiful Byzantine monuments in central Athens. Located near Klathmonos Square, this church stands as a testament to middle Byzantine architectural excellence. According to inscriptions preserved on the western wall, the church was erected by the spatharocandidatus Nikolaos Kalomalos—a Byzantine official whose title indicates he was a member of the palace guard. A second inscription gives us the foundation date of either 1049 or 1065, placing it firmly in the golden age of Byzantine Athens. The church is a classic example of the cross-in-square type with a dome, featuring the elegant proportions and refined details characteristic of 11th-century Constantinopolitan style. The masonry uses the cloisonné technique—alternating courses of brick and stone—with decorative brick patterns creating visual interest on the exterior walls. When King Otto brought the Bavarian architect Leo von Klenze to plan the new Athens after Greek independence, many Byzantine churches were threatened with demolition to make way for modern streets. The Church of Agioi Theodoroi was saved thanks to the intervention of King Otto himself and Queen Amalia, who recognized its historical and artistic value. Restoration works in the 19th century preserved this jewel for future generations. The church remains active today, its ancient stones witnessing the daily life of modern Athens flowing around it.",
        "quiz": {
            "question": "Who built the Church of Agioi Theodoroi and when?",
            "options": [
                "Byzantine official Nikolaos Kalomalos in 1049-1065",
                "Emperor Constantine in 330 AD",
                "King Otto in 1834",
                "Pericles in the 5th century BC"
            ],
            "answer": 0,
            "feedback": "Correct! The spatharocandidatus Nikolaos Kalomalos built this church in the mid-11th century, as documented by inscriptions."
        },
        "reward": {
            "title": "Byzantine Athens walking tour guidebook",
            "provider": "Hellenic Ministry of Culture",
            "codeHash": "7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d"
        },
        "id": 254
    },
    {
        "name": "Church of Soteira Lykodemou (Russian Church)",
        "lat": 37.9753,
        "lng": 23.733,
        "image": "images/soteira_lykodemou_russian.jpg",
        "description": "The largest surviving Byzantine church in Athens (11th century), now serving the Russian Orthodox community. Famous copy of Hosios Loukas monastery.",
        "audioText": "You are at the Church of Soteira Lykodemou, also known as the Russian Church or Church of the Holy Trinity—the largest surviving Byzantine church in Athens. Built in the first half of the 11th century, with inscriptions dating to 1031, this magnificent church originally served as the katholikon of a large convent. The name 'Soteira Lykodemou' means 'the Virgin Saviouress of Lykodemos,' with Lykodemos probably being the family name of one of its founders. What makes this church architecturally extraordinary is that it is clearly the earliest and most faithful copy of the great katholikon of the Hosios Loukas monastery—one of the masterpieces of Byzantine architecture. The Athenian church features measurements almost exactly three-quarters those of Hosios Loukas, replicating its design, proportions, and decorative program. The church follows the typically middle Byzantine cross-in-square plan, with a dome resting on an octagonal base supported by eight piers. The masonry is of exceptional quality, with dressed stones separated by double courses of bricks. The exterior is decorated with pseudo-Kufic brick designs similar to those at Hosios Loukas, some placed individually and others forming a continuous frieze on three sides. In 1778, the Ottoman governor Hadji Ali Haseki demolished the rest of the convent to build city walls. After Greek independence, the church fell into ruins until 1847, when Tsar Nicholas I acquired it for Athens' Russian community. The reconstruction in 1850-55 largely preserved the original Byzantine design, and today it remains the spiritual center for Russian Orthodox worshippers in Athens.",
        "quiz": {
            "question": "What makes Soteira Lykodemou architecturally significant?",
            "options": [
                "It is the largest Byzantine church in Athens and a copy of Hosios Loukas monastery",
                "It was the first church built in Greece",
                "It contains the throne of the Byzantine Emperor",
                "It was designed by Leonardo da Vinci"
            ],
            "answer": 0,
            "feedback": "Correct! This 11th-century church is Athens' largest Byzantine monument and faithfully replicates the famous Hosios Loukas."
        },
        "reward": {
            "title": "Russian Orthodox heritage tour and concert",
            "provider": "Holy Trinity Russian Church",
            "codeHash": "8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e"
        },
        "id": 255
    },
    {
        "name": "Ancient Oropos - Border Harbor City",
        "lat": 38.3195,
        "lng": 23.79,
        "image": "images/oropos_city.jpg",
        "description": "A strategic border town and harbor constantly contested by Athens and Thebes, serving as the vital crossing point to Euboea.",
        "audioText": "You are at ancient Oropos, a town whose geographic position made it one of the most contested places in ancient Greece. Situated on the border between Attica and Boeotia, overlooking the narrow strait to Euboea, Oropos controlled a vital crossing point and the direct road to Athens through Dekeleia—one of Athens' main supply routes. The harbor called Delphinion lay at the mouth of the Asopos River, while the city itself stood at what is now Skala Oropou. Because of this strategic importance, control of Oropos passed back and forth between Athens and Thebes throughout the Classical period. When Athens held it, the grain and cattle crossing from Euboea were secure; when Thebes took it, Athens was cut off from these vital supplies. The territory was important enough that there were even periods when Oropos enjoyed brief autonomy as a buffer state. Archaeological excavations have revealed an important Early Iron Age settlement that may have been the Homeric Graia, along with Hellenistic and Roman remains now buried under the modern town. The nearby Amphiareion sanctuary brought religious pilgrims and healing seekers, adding to Oropos' importance. Inscriptions and tomb monuments reused in local churches attest to the town's long prosperity despite its constantly shifting political allegiance.",
        "quiz": {
            "question": "Why was Oropos constantly fought over by Athens and Thebes?",
            "options": [
                "It controlled the vital crossing to Euboea and Athens' supply route",
                "It had the richest silver mines in Greece",
                "It was the birthplace of Zeus",
                "It contained the Olympic Games stadium"
            ],
            "answer": 0,
            "feedback": "Correct! Oropos' strategic position controlling access to Euboea and the road to Athens made it highly contested."
        },
        "reward": {
            "title": "Ferry discount to Eretria, Euboea",
            "provider": "Oropos Port Authority",
            "codeHash": "0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a"
        },
        "id": 256
    },
    {
        "name": "Ancient Megara - Dorian Rival City",
        "lat": 37.99639,
        "lng": 23.34444,
        "image": "images/ancient_megara.jpg",
        "description": "A powerful Dorian city-state that founded the colonies of Byzantium and Chalcedon, rival of Athens with impressive Theagenes Fountain.",
        "audioText": "You are in Megara, one of the great Dorian city-states that rivaled Athens in the Archaic period. Though the modern town overlies most ancient remains, this was once a powerful maritime state that punched far above its weight. During the age of colonization in the 8th and 7th centuries BC, Megara founded some of the most important Greek colonies: Megara Hyblaea in Sicily, Selinus in Sicily, Chalcedon on the Asian side of the Bosporus, and most famously Byzantium—the future Constantinople and Istanbul. The city occupied a strategic buffer position between Attica and Corinth, with harbors on both the Saronic and Corinthian Gulfs. Megara experienced a tyranny under Theagenes in the 7th century BC and later came into bitter conflict with Athens over control of the island of Salamis. The most visible ancient monument is the Theagenes Fountain, a remarkable 5th-century BC structure with a large rectangular cistern supported by rows of octagonal columns—perhaps designed by the famous engineer Eupalinos who also built Samos' aqueduct. The city had two acropolises on the hills of Alkathos and Karia. Megara's rivalry with Athens was so intense that in 432 BC, Pericles issued the Megarian Decree excluding them from Athenian markets, one of the triggers of the Peloponnesian War.",
        "quiz": {
            "question": "What was Megara most famous for in the Archaic period?",
            "options": [
                "Founding major colonies including Byzantium and Chalcedon",
                "Inventing democracy",
                "Building the Parthenon",
                "Defeating the Persians at Marathon"
            ],
            "answer": 0,
            "feedback": "Correct! Megara was a major colonizing power, founding cities that became hugely important, especially Byzantium."
        },
        "reward": {
            "title": "Guided tour of Theagenes Fountain archaeological site",
            "provider": "Megara Archaeological Museum",
            "codeHash": "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"
        },
        "id": 257
    },
    {
        "name": "Theatre at Amphiareion",
        "lat": 38.291581,
        "lng": 23.845344,
        "image": "images/amphiareion_theatre.jpg",
        "description": "A well-preserved ancient theater at the healing sanctuary where dramatic and musical contests were held during the Greater Amphiareia festival.",
        "audioText": "You are at the remarkably well-preserved theater of the Amphiareion sanctuary. Built into the hillside beside the ravine, this theater hosted dramatic and musical contests every four years as part of the Greater Amphiareia festival, established in 332 BC. Unlike the main sanctuary's focus on healing and oracular dreams, the theater provided entertainment and cultural competition that drew visitors from across Greece. The theater's stone seats are exceptionally well-preserved, allowing you to sit exactly where ancient spectators sat over 2,300 years ago. The orchestra area and lower seating tiers remain largely intact. Theater performances were an integral part of ancient Greek religious festivals—the arts of tragedy, comedy, and music were offerings to the gods as much as sacrifices and processions. Here at the Amphiareion, theatrical contests honored the hero Amphiaraos while providing respite for the sick and weary who came seeking healing. Inscriptions found at the site record the names of victorious actors and musicians, showing that competitions here attracted serious performers. The theater's location in this peaceful wooded glen, with the sacred spring and temple nearby, made attending performances a complete sensory and spiritual experience. The acoustics remain excellent, so if you speak or clap from the orchestra, you'll hear how sound carried to the upper rows.",
        "quiz": {
            "question": "What was the purpose of the theater at the Amphiareion?",
            "options": [
                "Hosting dramatic and musical contests during the Greater Amphiareia festival",
                "Training gladiators for Roman games",
                "Holding political assemblies only",
                "Serving as a marketplace"
            ],
            "answer": 0,
            "feedback": "Correct! The theater was part of the sanctuary's festival program, with dramatic contests held every four years."
        },
        "reward": {
            "title": "Ancient drama performance ticket discount",
            "provider": "Amphiareion Cultural Foundation",
            "codeHash": "2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c"
        },
        "id": 258
    },
    {
        "name": "Church of Metamorphosis Sotiros (Transfiguration)",
        "lat": 37.9726,
        "lng": 23.7279,
        "image": "images/metamorphosis_sotiros.jpg",
        "description": "A beautiful small 11th-century Byzantine church in the picturesque Anafiotika neighborhood, on the northern foothills of the Acropolis.",
        "audioText": "You are at the Church of Metamorphosis Sotiros, the Church of the Transfiguration of Christ, nestled in the charming Anafiotika district on the northern slopes of the Acropolis. This is one of the most atmospheric locations in Athens—a neighborhood of whitewashed houses that feels like a Cycladic island village transported to the heart of the capital. The church dates from the third quarter of the 11th century, making it one of Athens' oldest Byzantine monuments. It is a small, intimate church belonging to the simple cross-in-square type without a narthex. From its original 11th-century form, the north side and the elegant dome survive beautifully. The other sides were altered during later expansions to enlarge the interior space for the growing congregation. Even during the Ottoman occupation (1456-1833), modifications were made—the pointed arch on the northern side is a characteristic feature of Ottoman-era architecture. The church's walls are built with the classic cloisonné system of masonry, with alternating courses of brick and stone. The exterior is decorated with charming ceramic elements including pseudo-Kufic designs (imitations of Arabic letters), diamond shapes, and zigzag patterns. The dome is the typical 'Athenian' type—octagonal, elegant, and tall, with marble columns at the corners and lobed windows. On the southern side, a rectangular chapel carved into the living rock adds to the site's unique character. The church celebrates on August 6th, the Feast of the Transfiguration. Finding this little jewel tucked among the houses of Anafiotika feels like discovering a secret treasure.",
        "quiz": {
            "question": "What makes the location of Metamorphosis Sotiros special?",
            "options": [
                "It is nestled in the Anafiotika neighborhood that resembles a Cycladic island village",
                "It is the tallest church in Athens",
                "It floats on water",
                "It was built by Alexander the Great"
            ],
            "answer": 0,
            "feedback": "Correct! This 11th-century church sits in the picturesque Anafiotika, a unique neighborhood with island-style architecture on the Acropolis slopes."
        },
        "reward": {
            "title": "Anafiotika neighborhood walking tour",
            "provider": "Athens Cultural Center",
            "codeHash": "9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f"
        },
        "id": 259
    },
    {
        "name": "Church of Agios Georgios (Omorfokklisia - Beautiful Church)",
        "lat": 37.975,
        "lng": 23.719,
        "image": "images/omorfokklisia.jpg",
        "description": "Known as the 'Beautiful Church' (Omorfokklisia), this 11th-12th century Byzantine church near the Ancient Agora exemplifies elegant Athenian architecture.",
        "audioText": "You are at the Church of Agios Georgios, affectionately known as Omorfokklisia—literally 'the Beautiful Church'—and indeed, it lives up to its name. Located in the Thiseio area near the Ancient Agora and with views toward the Acropolis, this Byzantine gem dates from the 11th to 12th centuries. The church earned its popular name from its harmonious proportions and refined architectural details that capture the essence of Athenian Byzantine style. It follows the classic cross-in-square plan with a dome, displaying the elegant simplicity and mathematical precision that characterized middle Byzantine church architecture. The exterior showcases well-preserved decorative brickwork—the cloisonné masonry technique with alternating courses of brick and stone, punctuated by ornamental brick patterns that create visual rhythm across the facades. These decorative elements, including meander patterns, sawtooth courses, and dog-tooth friezes, demonstrate the sophistication of Byzantine builders who turned functional construction into an art form. The church's location is particularly evocative, standing in a neighborhood where ancient, Byzantine, and modern Athens intersect. Just steps away lie the ruins of the Ancient Agora where Socrates once walked, while the Acropolis rises majestically in the background. The church remains active in the life of the local community, continuing a tradition of worship that spans nearly a millennium. Its name—'Beautiful Church'—reflects not just aesthetic appreciation but also the affection Athenians have felt for this graceful building through the centuries.",
        "quiz": {
            "question": "Why is this church called 'Omorfokklisia'?",
            "options": [
                "Because its harmonious proportions and elegant architecture earned it the name 'Beautiful Church'",
                "Because it was painted in beautiful colors",
                "Because it was built by someone named Omorfo",
                "Because it has the most expensive decorations"
            ],
            "answer": 0,
            "feedback": "Correct! 'Omorfokklisia' means 'Beautiful Church' in Greek, reflecting the building's elegant Byzantine proportions and refined details."
        },
        "reward": {
            "title": "Byzantine architecture photography workshop",
            "provider": "Athens Photography Society",
            "codeHash": "0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a"
        },
        "id": 260
    },
    {
        "name": "Hagia Triada Cathedral, Piraeus",
        "lat": 37.9443,
        "lng": 23.6453,
        "image": "images/hagia_triada_piraeus.jpg",
        "description": "The largest church in Piraeus and metropolitan seat. Neo-Byzantine cathedral (1979) with capacity for 3,100, featuring a massive dome and ornate marble iconostasis.",
        "audioText": "You are at the Hagia Triada Cathedral, the Sacred Cathedral Temple of the Holy Trinity, the largest and most important church in Piraeus. As the metropolitan seat of the Holy Metropolis of Piraeus, this magnificent Neo-Byzantine structure serves as the spiritual heart of Greece's historic port city. Though the current building was completed in 1979, a church has stood on this site since 1839. The story of this cathedral is one of destruction and resurrection—during World War II, on January 11, 1944, Allied bombing demolished the earlier church, tragically burying refugees who had sought shelter within its walls. Yet from these ruins arose an even grander vision. The present cathedral was designed by Georgios Nomikos and consecrated in 1964, with final completion in 1979. Archaeological excavations during construction revealed the ancient Emporium beneath—pottery, gold coins, mosaics, and inscriptions from Piraeus' illustrious past. These precious finds are now displayed in the chapel of Saints Cyril and Methodius, literally incorporating ancient history into the sacred space. The cathedral follows Byzantine architectural principles: a three-aisled church with the central aisle dedicated to the Holy Trinity, the right to Saints Peter and Paul, and the left to Saint Skepi. The massive dome, resting on eight spherical triangles and eight arches, spans 40 meters in diameter with 40 windows flooding the interior with divine light. The cathedral can accommodate 3,100 worshippers. Every surface speaks of craftsmanship—the external doors are forged brass, the iconostasis is intricate marble work by the Afon Doukas brothers, and the wood-carved iconostasis doors are by Theofilos Nomikos. The cathedral serves not only religious functions but also hosts concerts and cultural events.",
        "quiz": {
            "question": "What makes Hagia Triada Cathedral significant in Piraeus?",
            "options": [
                "It is the largest church and metropolitan seat, rebuilt after WWII bombing with 3,100 capacity",
                "It is the oldest church in Greece",
                "It was built by Alexander the Great",
                "It houses the Olympic flame"
            ],
            "answer": 0,
            "feedback": "Correct! Hagia Triada is Piraeus' largest church and metropolitan seat, rebuilt in grand Neo-Byzantine style after WWII destruction."
        },
        "reward": {
            "title": "Concert ticket at Hagia Triada Cathedral",
            "provider": "Metropolis of Piraeus",
            "codeHash": "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"
        },
        "id": 261
    },
    {
        "name": "Agios Spyridon Church, Piraeus",
        "lat": 37.942,
        "lng": 23.6472,
        "image": "images/agios_spyridon_piraeus.jpg",
        "description": "The patron saint church of Piraeus, tracing origins to 11th-12th century monastery. Historic site of Greek War of Independence resistance.",
        "audioText": "You are at the Church of Agios Spyridon, dedicated to the patron saint of Piraeus. This church traces back to the 11th or 12th century, when a fortified monastery stood here on the northeastern side of Porto Draco. During Frankish and Ottoman rule, this was a defensive monastery with walls and defenders who repeatedly repelled pirate raids. The monastery accommodated up to 70 guests. During the Greek War of Independence in 1821, it became a refuge for the homeless but was captured by Turkish-Albanian leader Omer Vryonis. Allied bombardment in 1826 led to liberation but also destruction. Governor Kapodistrias arrived in 1828, and monks returned to rebuild. Piraeus' reconstruction began around this monastery. The renowned architect Cleanthes designed a grand church with two bell towers and 1,000-person capacity. Today, Agios Spyridon remains Piraeus' spiritual patron, embodying centuries of resilience and faith through occupation, war, and rebirth.",
        "quiz": {
            "question": "What role did Agios Spyridon monastery play in 1821?",
            "options": [
                "Refuge during Greek War of Independence before being captured and destroyed",
                "First democracy in Greece",
                "Olympic Games stadium",
                "Roman fortress"
            ],
            "answer": 0,
            "feedback": "Correct! The monastery sheltered people during the 1821 revolution but was captured and destroyed in the liberation fighting."
        },
        "reward": {
            "title": "Piraeus maritime history tour",
            "provider": "Church of Agios Spyridon",
            "codeHash": "2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c"
        },
        "id": 262
    },
    {
        "name": "Saint Nikolaos Church, Piraeus",
        "lat": 37.9405,
        "lng": 23.641,
        "image": "images/st_nikolaos_piraeus.jpg",
        "description": "Impressive 19th century neoclassical Orthodox church designed by I. Lazarimos, architect of Piraeus Municipal Theater. Patron saint of sailors.",
        "audioText": "You are at the Church of Saint Nicholas in Piraeus, an impressive neoclassical Orthodox church built in the late 19th century. The architect was I. Lazarimos, the same visionary who designed the Piraeus Municipal Theater, and you can see his elegant sensibility in every line of this building. Saint Nicholas, the patron saint of sailors, is the perfect dedicatee for a church in Greece's greatest port city. For centuries, sailors departing from Piraeus have sought Saint Nicholas' blessing before venturing onto the Aegean. The church stands in the square of the same name, directly opposite the Piraeus Port Authority exhibition center and the customs office—a location that keeps it at the heart of the city's maritime life. The neoclassical style was the architectural language of the newly independent Greek state in the 19th century, consciously evoking the glory of ancient Greece while embracing European modernity. The church's proportions, columns, and pediments echo classical temples while clearly serving Christian worship. Inside, traditional Orthodox iconography adorns the walls, while the liturgical life continues uninterrupted, connecting modern Piraeus to its Byzantine heritage.",
        "quiz": {
            "question": "Who designed Saint Nikolaos Church and why is it significant?",
            "options": [
                "I. Lazarimos, architect of Municipal Theater, in neoclassical style for sailors' patron",
                "Alexander the Great for military purposes",
                "A Roman emperor as a pagan temple",
                "Modern architects in 2000s"
            ],
            "answer": 0,
            "feedback": "Correct! Lazarimos created this neoclassical masterpiece honoring Saint Nicholas, patron of sailors in Greece's greatest port."
        },
        "reward": {
            "title": "Port of Piraeus historical tour",
            "provider": "Piraeus Cultural Foundation",
            "codeHash": "3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d"
        },
        "id": 263
    },
    {
        "name": "Cathedral of Panagia Pantovasilissa, Rafina",
        "lat": 38.0238,
        "lng": 24.0119,
        "image": "images/pantovasilissa_rafina.jpg",
        "description": "Modern metropolitan cathedral in Rafina, dedicated to the Virgin Mary as 'Queen of All.' Center of Orthodox life in the coastal port town.",
        "audioText": "You are at the Cathedral of Panagia Pantovasilissa in Rafina, the Virgin Mary as 'Queen of All.' This modern Orthodox cathedral serves as the spiritual heart of Rafina, one of Attica's important port towns. Rafina has grown dramatically from a small fishing village into a major port connecting Athens to the Cycladic islands. As the town expanded, so did the need for a grand cathedral worthy of its growing community. The Pantovasilissa serves as the metropolitan cathedral for the region, hosting major feast days and celebrations. The title 'Pantovasilissa' —Queen of All—reflects the Orthodox understanding of the Virgin Mary as the highest of all created beings, second only to Christ himself. The cathedral's architecture follows contemporary Orthodox design while incorporating traditional Byzantine elements. On feast days, especially August 15th for the Dormition and the church's patronal feast, the entire community gathers here. The cathedral also includes a chapel dedicated to the Dormition (Koimisis), affectionately called 'Panagiitsa' by locals, located near the cemetery. Rafina's transformation from fishing village to bustling port mirrors the church's growth from modest chapel to grand cathedral.",
        "quiz": {
            "question": "What does 'Pantovasilissa' mean?",
            "options": [
                "Queen of All, reflecting Virgin Mary's exalted status in Orthodox theology",
                "Port of Ships",
                "Ancient Harbor",
                "Mountain Church"
            ],
            "answer": 0,
            "feedback": "Correct! 'Pantovasilissa' means 'Queen of All,' honoring the Virgin Mary's supreme position among created beings."
        },
        "reward": {
            "title": "Ferry discount to Cyclades islands from Rafina",
            "provider": "Cathedral Parish Office",
            "codeHash": "4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e"
        },
        "id": 264
    },
    {
        "name": "Church of Agios Ioannis Theologian, Pallini",
        "lat": 38.0025,
        "lng": 23.8975,
        "image": "images/st_john_theologian_pallini.jpg",
        "description": "12th-13th century Byzantine church in Gerakas. Cross-in-square with dome, incorporating ancient stones from Temple of Athena Pallenis. Early 13th century frescoes.",
        "audioText": "You are at the Church of Agios Ioannis the Theologian in Gerakas, Pallini, one of the finest Byzantine monuments in eastern Attica's Mesogaia plain. Dating to the 12th-13th century, this church represents the classic Byzantine architectural type: a compact cross-in-square plan with a dome. Until the early 20th century, the octagonal dome was fully preserved, but today only the two western spherical triangles remain, testament to time's passage. What makes this church archaeologically fascinating is its construction material—the rough stones, bricks, and mortar incorporate ancient architectural elements, possibly from the significant Temple of Athena Pallenis that once dominated this area. The ancient goddess's sanctuary stones were literally built into the Christian church, a common Byzantine practice symbolizing Christianity's triumph over paganism. Inside, remarkably preserved frescoes from the early 13th century still adorn the walls, their colors and forms speaking across 800 years. A newly built church now stands beside the Byzantine structure, allowing the ancient monument to be preserved while serving the modern parish's needs. This church is one of the rare Byzantine monuments in Attica preserved without significant later additions.",
        "quiz": {
            "question": "What makes the Church of Agios Ioannis Theologian archaeologically significant?",
            "options": [
                "It incorporates ancient stones from Temple of Athena Pallenis and preserves 13th-century frescoes",
                "It was built last year",
                "It is made entirely of gold",
                "It floats in the air"
            ],
            "answer": 0,
            "feedback": "Correct! The church reused ancient temple stones and preserves exceptional Byzantine frescoes from the early 13th century."
        },
        "reward": {
            "title": "Byzantine Mesogaia heritage trail map",
            "provider": "Municipality of Pallini",
            "codeHash": "5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f"
        },
        "id": 265
    },
    {
        "name": "Church of Hagios Petros, Kalyvia Thorikou",
        "lat": 37.965,
        "lng": 23.935,
        "image": "images/hagios_petros_kalyvia.jpg",
        "description": "12th-13th century two-columned cross-in-square church in Ennea Pyrgoi area. Famous for frescoes including a halo-portrait of Bishop Michael Choniates.",
        "audioText": "You are at the Church of Hagios Petros in the Ennea Pyrgoi (Nine Towers) area of Kalyvia Thorikou, about 40 kilometers southeast of Athens. This 12th-13th century Byzantine church is a two-columned cross-in-square design, measuring 9.82 by 6.88 meters. The church incorporates many fragments of older buildings and tombstones in its rubble masonry, creating a palimpsest of Mesogaia's history. The wall paintings are contemporary with the church and include a remarkable feature: a sanctified portrait of Michael Choniates, the celebrated Bishop of Athens (1182-1204), shown in a halo! This unique fresco confirms the folk worship of this intellectual and spiritual leader whose activities and personality left an indelible mark on medieval Athens. In the north arch of the cross, you can see frescoes of Saints Mamas and Triphon, saints associated with agrarian production, cattle-breeding, and viniculture—entirely appropriate for the agricultural character of the Mesogaia plain. According to an inscription in the narthex, a group of artists decorated the church. The sanctified portrait of Michael Choniates represents a fascinating type of local veneration of a historic bishop.",
        "quiz": {
            "question": "What unique feature appears in Hagios Petros frescoes?",
            "options": [
                "A halo-portrait of Bishop Michael Choniates, showing local folk veneration",
                "A painting of the Olympic Games",
                "A portrait of Alexander the Great",
                "Modern graffiti"
            ],
            "answer": 0,
            "feedback": "Correct! The church contains a rare sanctified portrait of the famous medieval Bishop Michael Choniates with a halo."
        },
        "reward": {
            "title": "Ennea Pyrgoi Byzantine monuments tour",
            "provider": "Kalyvia Cultural Center",
            "codeHash": "6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a"
        },
        "id": 266
    },
    {
        "name": "Church of Panagia Mesosporitissa, Kalyvia",
        "lat": 37.9645,
        "lng": 23.9345,
        "image": "images/mesosporitissa_kalyvia.jpg",
        "description": "11th-12th century single-aisled basilica near Hagios Petros. Virgin Mary as 'protector of sowing,' celebrated November 21st. Athenian dome with cloisonné masonry.",
        "audioText": "You are at the Church of Panagia Mesosporitissa, the Presentation of the Virgin Mary, located one kilometer west of Kalyvia in the Ennea Pyrgoi area, close to the Church of Hagios Petros. The church celebrates on November 21st, the Presentation of the Virgin Mary, and gets its special epithet 'Mesosporitissa' because the Virgin Mary protected the sowing (sporos in Greek) that took place during that month in the agricultural calendar. This is a single-aisled basilica to which a barrel-vaulted narthex and a chapel were later added on the western and northern sides. Scholars date it to the 11th or 12th century. The dome is the characteristic 'Athenian' type—elegant, octagonal, and tall. The masonry combines rubble construction with the refined cloisonné technique (alternating brick and stone courses) in the apse and dome. The church features a low entrance and a stone arched shrine, a style encountered in many Attic churches including Hagios Petros, the chapel of Agios Nikolaos in Pentelis Cave, and others. Though most frescoes have been destroyed, some 18th-century paintings survive in the chapel. The Virgin Mary's role as protector of agriculture made this church vital to the farming communities of Mesogaia.",
        "quiz": {
            "question": "Why is the Virgin Mary called 'Mesosporitissa' at this church?",
            "options": [
                "She protected the sowing that occurred during her feast in November",
                "She lived in this village",
                "The church is in the middle of a field",
                "It means 'beautiful building'"
            ],
            "answer": 0,
            "feedback": "Correct! 'Mesosporitissa' means she protected the sowing (sporos), as her feast day falls during the planting season."
        },
        "reward": {
            "title": "Mesogaia agricultural heritage tour",
            "provider": "Kalyvia Historical Society",
            "codeHash": "7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b"
        },
        "id": 267
    },
    {
        "name": "Monastery of Saint Catherine, Pallini",
        "lat": 38.0053,
        "lng": 23.8994,
        "image": "images/st_catherine_pallini.jpg",
        "description": "Modern monastery (2024) housing largest church in Attica dedicated to Saint Paisios the Athonite. Cross-in-square with dome. Male monastic community.",
        "audioText": "You are at the Holy Monastery of Saint Catherine in Pallini, one of the newest monastic foundations in Attica, with a katholikon completed in 2024. Founded in 1993 during the tenure of Metropolitan Agathonikos, the monastery began when nun Aikaterini Pavlea donated funds for construction. Initially, only a guesthouse was completed and briefly operated as an orphanage, while the katholikon remained an unfinished concrete frame for years. As a parish congregation developed in a basement chapel, the community's desire to complete the monastery grew. In 2020, Metropolitan Nikolaos of Mesogaia and Lavreotiki secured funding from Athanasios and Marina Martinos through AEGEAS to complete the project. The katholikon is a classic cross-in-square church with dome and narthex, redesigned to enhance the complex and connect spaces. The Holy Metropolis dedicated the katholikon to Saint Paisios the Athonite, making it the largest church in Attica dedicated to this recently canonized saint, while the basement chapel honors Saint Catherine. The monastery has operated as a male monastic community since 2013. Despite its modern construction, it follows traditional Byzantine architectural principles and serves as a vibrant center of contemporary monasticism.",
        "quiz": {
            "question": "What makes the Monastery of Saint Catherine's katholikon unique?",
            "options": [
                "It is the largest church in Attica dedicated to recently canonized Saint Paisios, completed 2024",
                "It is the oldest church in Greece",
                "It was built by Romans",
                "It contains the Olympic flame"
            ],
            "answer": 0,
            "feedback": "Correct! This modern monastery houses Attica's largest church dedicated to the beloved contemporary saint Paisios the Athonite."
        },
        "reward": {
            "title": "Monastery spiritual retreat program",
            "provider": "Monastery of Saint Catherine",
            "codeHash": "8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c"
        },
        "id": 268
    },
    {
        "name": "Early Christian Basilica of Vravrona",
        "lat": 37.9263,
        "lng": 23.9941,
        "image": "images/basilica_vravrona.jpg",
        "description": "5th-6th century early Christian basilica ruins near the ancient Sanctuary of Artemis. Marks the transition from pagan to Christian worship in Attica.",
        "audioText": "You are at the ruins of the Early Christian Basilica of Vravrona, a 5th-6th century church built near the ancient Sanctuary of Artemis. This basilica represents one of history's most profound transitions—the transformation from pagan worship to Christian faith. For centuries, this area was sacred to Artemis, where young Athenian girls performed the mysterious Arkteia ritual, 'playing the bear' as a rite of passage. When Christianity became the Roman Empire's official religion in the 4th century, pagan sanctuaries were gradually abandoned or converted. Here at Vravrona, early Christians built their basilica adjacent to the ancient sanctuary, both honoring and superseding what came before. The basilica follows the classic early Christian architectural form: a rectangular building divided into three aisles by rows of columns, with a semicircular apse at the eastern end housing the altar. Though now in ruins, you can still trace the foundations, see fragments of column bases, and imagine the mosaic floors that once decorated the sacred space. Archaeological excavations have revealed the basilica's plan and construction techniques. Standing here, you witness the continuity of sacred space—this ground has been holy for over 2,500 years, from the Bronze Age cult of Artemis through early Christianity to the Byzantine period.",
        "quiz": {
            "question": "What historical transition does Vravrona's early Christian basilica represent?",
            "options": [
                "The shift from pagan Artemis worship to Christianity in the 5th-6th centuries",
                "The invention of democracy",
                "The start of the Olympic Games",
                "The building of the Parthenon"
            ],
            "answer": 0,
            "feedback": "Correct! The basilica marks the profound religious transformation as Christianity replaced the ancient cult of Artemis."
        },
        "reward": {
            "title": "Combined ticket: Vravrona Sanctuary & Museum",
            "provider": "Hellenic Ministry of Culture",
            "codeHash": "9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d"
        },
        "id": 269
    },
    {
        "name": "Chapel of Saint Marina, Mount Parnitha",
        "lat": 38.185,
        "lng": 23.695,
        "image": "images/st_marina_parnitha.jpg",
        "description": "Remote 12th century chapel behind Avlona village on northern Parnitha. Built in 1117 at cave where miraculous icon was found. Pilgrimage site July 17th.",
        "audioText": "You are at the remote Chapel of Saint Marina on the northern slopes of Mount Parnitha, behind the village of Avlona in the Vountima area near the river Martheza. This 12th-century chapel sits in a densely forested setting that evokes the beautiful landscapes of Mount Athos or Ireland—a true hidden sanctuary. According to local tradition, in the early 12th century a shepherd had a vision indicating the location of a cave containing a hidden miraculous icon of Saint Marina. After finding the icon, people risked their lives for three months to build this remote chapel in 1117 AD, next to the very cave where the icon was discovered. To enter the cave, one must climb forty stairs. The icon itself, depicting Saint Marina as a mature 15-year-old girl striking a demon with a hammer, is no longer at this remote location. During the Greek Civil War, recognizing the icon's value and its vulnerability, it was moved to the Chapel of Prophet Elias in Avlona, but even there it was stolen. Despite the icon's absence, pilgrims still make the difficult journey every year on July 16th for Great Vespers and July 17th for Divine Liturgy to celebrate Saint Marina's feast. The chapel's location in this pristine forest creates an atmosphere of profound spiritual isolation.",
        "quiz": {
            "question": "How was the Chapel of Saint Marina's location chosen?",
            "options": [
                "A shepherd's vision led to discovery of a miraculous icon in a cave in early 12th century",
                "It was randomly selected",
                "Romans built it as a fortress",
                "It marks where Alexander the Great camped"
            ],
            "answer": 0,
            "feedback": "Correct! A shepherd's vision revealed the cave with Saint Marina's miraculous icon, leading to the chapel's construction in 1117."
        },
        "reward": {
            "title": "Guided forest pilgrimage to Saint Marina",
            "provider": "Village of Avlona",
            "codeHash": "1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f"
        },
        "id": 270
    },
    {
        "name": "Church of Agia Triada, Mount Parnitha",
        "lat": 38.1559,
        "lng": 23.7203,
        "image": "images/agia_triada_parnitha.jpg",
        "description": "12th century church near Parnitha summit at 1,000m altitude. Dependency of Petraki Monastery. Three layers of wall paintings. Fir forest setting.",
        "audioText": "You are at the Church of Agia Triada, the Holy Trinity, near the summit of Mount Parnitha at approximately 1,000 meters altitude, deep within the zone of fir forest. This 12th-century church was a dependency of the Monastery of Petraki in Athens, which controlled several mountain monasteries. Almost nothing remains of the original monastery complex, but the church itself is thought to be quite early, dating from Byzantine times, as evidenced by its three layers of wall paintings from different periods. The church is small and simple, befitting its remote mountain location where monks sought isolation for prayer and contemplation. The setting is spectacular—surrounded by towering firs, with mountain air and silence broken only by wind and birds. During the Ottoman period, such remote mountain monasteries served as refuges for Greek culture and Orthodox faith. After Greek independence, many mountain dependencies were abandoned as monks moved to larger communities. Today, the church stands renovated, maintained by the Church, serving as a destination for hikers and pilgrims who climb Parnitha. The journey to reach Agia Triada is itself a form of pilgrimage, requiring commitment and physical effort that mirrors the spiritual ascent.",
        "quiz": {
            "question": "What indicates the Church of Agia Triada's early Byzantine origin?",
            "options": [
                "Three layers of wall paintings from different historical periods",
                "It was built last year",
                "It is made of plastic",
                "It contains modern computers"
            ],
            "answer": 0,
            "feedback": "Correct! The three distinct layers of frescoes from different eras prove the church's ancient Byzantine origins and long use."
        },
        "reward": {
            "title": "Mount Parnitha summit hiking certificate",
            "provider": "Greek Mountaineering Federation",
            "codeHash": "2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a"
        },
        "id": 271
    },
    {
        "name": "Metropolitan Cathedral of Megara",
        "lat": 37.9964,
        "lng": 23.3444,
        "image": "images/cathedral_megara.jpg",
        "description": "Seat of the Metropolis of Megara and Salamis. Episcopal center of the historic Dorian city that founded Byzantium. Traditional Orthodox cathedral.",
        "audioText": "You are at the Metropolitan Cathedral of Megara, the episcopal seat of the Holy Metropolis of Megara and Salamis. Megara is one of the most historically significant cities in Greece—a powerful Dorian city-state in antiquity that founded some of the most important Greek colonies, including Byzantium (modern Istanbul) and Chalcedon. The cathedral serves as the spiritual center for all of Megara and the island of Salamis. The Metropolis of Megara and Salamis was established in 1974 when the larger Metropolis of Attica and Megaridos was divided. The cathedral hosts the metropolitan throne and serves as the venue for major ecclesiastical events, ordinations, and celebrations. The surrounding area includes the metropolitan offices, library, school of Byzantine music, choir facilities, parish centers, and lecture theaters. Megara's ecclesiastical heritage is rich—the city boasts numerous monasteries under the metropolis, including several for monks and many for nuns. The cathedral's architecture follows traditional Orthodox design, creating a sacred space that connects modern Megara to its Byzantine past and ancient glory as a colonizing power that shaped the Mediterranean world.",
        "quiz": {
            "question": "Why is Megara historically significant?",
            "options": [
                "Dorian city-state that founded Byzantium (Constantinople) and other major colonies",
                "It was built last year",
                "It invented the Olympic Games",
                "It contains ancient Egyptian pyramids"
            ],
            "answer": 0,
            "feedback": "Correct! Megara founded Byzantium, one of history's most important cities, making it a major ancient colonizing power."
        },
        "reward": {
            "title": "Byzantine music concert at cathedral",
            "provider": "Metropolis of Megara and Salamis",
            "codeHash": "4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c"
        },
        "id": 272
    },
    {
        "name": "Monastery of Holy Trinity, Mirini",
        "lat": 38.005,
        "lng": 23.32,
        "image": "images/holy_trinity_mirini.jpg",
        "description": "Active men's monastery in Mirini, Megara region. Traditional Orthodox monastic complex with katholikon, cells, and courtyard. Under Metropolis of Megara.",
        "audioText": "You are at the Monastery of the Holy Trinity in Mirini, one of the active men's monasteries under the Metropolis of Megara and Salamis. This traditional Orthodox monastery follows the classic monastic layout: a katholikon (main church) at the center, surrounded by monks' cells, refectory, kitchen, and support buildings arranged around a peaceful courtyard. The monastery is dedicated to the Holy Trinity, the foundational Christian doctrine of God as Father, Son, and Holy Spirit—three persons in one essence. The monastic life here follows the ancient rhythms established by the Desert Fathers: communal prayer in the katholikon multiple times daily, manual work, hospitality to pilgrims, and private prayer in cells. The monks support themselves through various activities while maintaining their primary focus on prayer and spiritual life. The monastery serves as a spiritual refuge not just for the monks but for laypeople seeking guidance, confession, or simply a break from the world's noise. The location in the Megara region provides a rural setting conducive to contemplation. Visitors are welcome to attend services, venerate icons, and experience Orthodox monasticism's living tradition.",
        "quiz": {
            "question": "What is the primary purpose of Orthodox monasteries like Holy Trinity?",
            "options": [
                "Prayer, spiritual life, and maintaining ancient Christian monastic traditions",
                "Running hotels for tourists",
                "Manufacturing products",
                "Political activities"
            ],
            "answer": 0,
            "feedback": "Correct! Orthodox monasteries center on prayer and spiritual life, following traditions from the early Christian Desert Fathers."
        },
        "reward": {
            "title": "Monastery guest house accommodation",
            "provider": "Monastery of Holy Trinity",
            "codeHash": "5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d"
        },
        "id": 273
    },
    {
        "name": "Monastery of Saint Vlasios",
        "lat": 38.01,
        "lng": 23.315,
        "image": "images/st_vlasios_monastery.jpg",
        "description": "Men's monastery dedicated to Saint Blaise, patron of animals and livestock. Rural monastery in Megara region serving agricultural communities.",
        "audioText": "You are at the Monastery of Saint Vlasios (Saint Blaise), a men's monastery in the Megara region. Saint Vlasios is one of the most beloved saints in Greek Orthodoxy, venerated as the patron of animals, livestock, and throat ailments. According to tradition, Saint Blaise was a 4th-century bishop and physician in Armenia who performed many miraculous healings, including saving a boy from choking on a fishbone—hence his association with throat blessings. The custom of blessing throats on Saint Blaise's feast day (February 11th) continues in Orthodox churches worldwide. His patronage of animals made him especially important to the agricultural and pastoral communities of rural Greece. This monastery serves the farming regions around Megara, where livestock and agriculture have been the economic foundation for millennia. The monastic complex provides spiritual services to the surrounding villages, hosts feast day celebrations, and maintains the Orthodox presence in rural areas. The monks' life combines prayer with agricultural work, embodying the ancient monastic principle of 'ora et labora' (pray and work). The monastery's rural setting allows visitors to experience authentic Greek countryside spirituality.",
        "quiz": {
            "question": "Why is Saint Vlasios (Blaise) important to rural communities?",
            "options": [
                "He is patron saint of animals, livestock, and throat healings, vital to farming areas",
                "He invented farming",
                "He was a Roman emperor",
                "He built the Parthenon"
            ],
            "answer": 0,
            "feedback": "Correct! Saint Vlasios' patronage of animals and healing made him beloved in agricultural communities throughout Greece."
        },
        "reward": {
            "title": "Traditional Greek farm products from monastery",
            "provider": "Monastery of Saint Vlasios",
            "codeHash": "6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e"
        },
        "id": 274
    },
    {
        "name": "Monastery of Saint Paraskevi, Mazi",
        "lat": 38.0125,
        "lng": 23.3275,
        "image": "images/st_paraskevi_mazi.jpg",
        "description": "Men's monastery in Mazi dedicated to Saint Paraskevi, popular martyr saint. Western Attica monastic center with peaceful rural setting.",
        "audioText": "You are at the Monastery of Saint Paraskevi in Mazi, a men's monastery in western Attica. Saint Paraskevi is one of the most popular saints in Greek Orthodoxy, a 3rd-century martyr whose name means 'Preparation' or 'Friday' in Greek. According to tradition, she was born on a Friday and her parents named her Paraskevi in honor of Christ's Preparation Day (Friday, when Christ was crucified). She became a Christian missionary and miracle-worker, eventually martyred for refusing to worship pagan gods. Saint Paraskevi is especially venerated as the patron saint of eye ailments and blindness, and countless churches and holy springs bear her name across Greece. The monastery in Mazi serves as an important spiritual center for the region, hosting pilgrims especially on her feast day, July 26th. The monastic complex follows traditional architecture with the katholikon, cells, and support buildings arranged for communal life. The monks maintain the grounds, welcome visitors, and preserve the liturgical tradition. The peaceful rural setting allows the monks to combine prayer with agricultural work, supporting themselves while maintaining their spiritual focus. The monastery represents the continuity of Orthodox monasticism from ancient times to the present day.",
        "quiz": {
            "question": "What is Saint Paraskevi especially known for?",
            "options": [
                "Patronage of eye ailments and miraculous healings, martyred in 3rd century",
                "Building the Acropolis",
                "Inventing democracy",
                "Founding the Olympic Games"
            ],
            "answer": 0,
            "feedback": "Correct! Saint Paraskevi is beloved as patron of eye healing and one of Greece's most popular martyr saints."
        },
        "reward": {
            "title": "Blessed oil from Saint Paraskevi shrine",
            "provider": "Monastery of Saint Paraskevi",
            "codeHash": "7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"
        },
        "id": 275
    },
    {
        "name": "Monastery of Panagia Galaktotrofoussa",
        "lat": 38.0175,
        "lng": 23.3325,
        "image": "images/galaktotrofoussa_monastery.jpg",
        "description": "Men's monastery dedicated to Virgin Mary as 'Milk-Giver.' Miraculous icon venerated by mothers. Traditional monastery in western Attica countryside.",
        "audioText": "You are at the Monastery of Panagia Galaktotrofoussa, a men's monastery in the Megara region. The epithet 'Galaktotrofoussa' means 'Milk-Giver' or 'Milk-Nourisher,' referring to the Virgin Mary's role in nourishing the infant Christ. This iconographic type shows the Theotokos in her maternal aspect, emphasizing her humanity and the reality of Christ's incarnation. The Galaktotrofoussa icon has been especially venerated by mothers throughout Orthodox history, who pray for abundant milk to feed their children and for the health of infants. The monastery's dedication to this aspect of the Virgin reflects the deep connection between Orthodox spirituality and everyday life—the sacred interpenetrating the ordinary concerns of family and child-rearing. The monastic complex serves the surrounding communities, offering spiritual guidance, hosting feast day celebrations, and maintaining a place of prayer. The monks follow the traditional pattern of communal prayer, manual work, and hospitality. The rural setting allows for agricultural work that supports the monastery. Pilgrims visit especially on Marian feast days, bringing petitions for children's health and family well-being. The monastery demonstrates how Orthodox faith addresses all aspects of human life, from the most exalted mysteries to the most intimate family concerns.",
        "quiz": {
            "question": "What does 'Galaktotrofoussa' mean and who especially venerates this icon?",
            "options": [
                "'Milk-Giver' Virgin Mary icon, especially venerated by mothers for children's health",
                "A type of food",
                "A military fortress",
                "An ancient philosopher"
            ],
            "answer": 0,
            "feedback": "Correct! 'Galaktotrofoussa' shows Mary nourishing Christ, beloved by mothers praying for their children's well-being."
        },
        "reward": {
            "title": "Blessed bread (prosphoro) from monastery",
            "provider": "Monastery of Panagia Galaktotrofoussa",
            "codeHash": "8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a"
        },
        "id": 276
    },
    {
        "name": "Monastery of Saint Ierotheos, Megara",
        "lat": 37.995,
        "lng": 23.3425,
        "image": "images/st_ierotheos_megara.jpg",
        "description": "Women's monastery dating to 12th century Byzantine period. Dedicated to Saint Hierotheos, early Bishop of Athens. Historic female monastic center.",
        "audioText": "You are at the Monastery of Saint Ierotheos (Hierotheos) in Megara, a women's monastery with roots in the 12th-century Byzantine period. Saint Hierotheos was one of the earliest Bishops of Athens, a disciple of Saint Paul the Apostle and companion of Saint Dionysius the Areopagite. According to tradition, Hierotheos was present at the Dormition of the Virgin Mary and composed the first hymns sung at her funeral. This makes him one of the most ancient and venerated figures in Athenian Christian history. The monastery dedicated to him serves as an important center of female monasticism in the Megara region. The nuns follow the cenobitic (communal) rule, gathering for prayer multiple times daily in the katholikon, sharing meals in the refectory, and working together to support the monastery. Women's monasteries have played a crucial role in Greek Orthodox tradition, providing spaces for spiritual dedication outside marriage while also serving surrounding communities through hospitality, education, and charitable work. The monastery preserves Byzantine architectural elements and maintains ancient liturgical traditions. The peaceful atmosphere allows the nuns to dedicate themselves fully to prayer, manual work, and the preservation of Orthodox spirituality.",
        "quiz": {
            "question": "Who was Saint Ierotheos (Hierotheos)?",
            "options": [
                "Early Bishop of Athens, disciple of Paul, present at Virgin Mary's Dormition",
                "A Roman emperor",
                "Inventor of democracy",
                "Olympic athlete"
            ],
            "answer": 0,
            "feedback": "Correct! Saint Hierotheos was among the earliest Christian bishops, connected to both Saint Paul and the Virgin Mary."
        },
        "reward": {
            "title": "Handmade monastery crafts",
            "provider": "Monastery of Saint Ierotheos",
            "codeHash": "9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"
        },
        "id": 277
    },
    {
        "name": "Monastery of Saint Meletios, Kithairona",
        "lat": 38.1,
        "lng": 23.25,
        "image": "images/st_meletios_kithairona.jpg",
        "description": "Women's monastery on Mount Kithairon. Remote mountain hermitage for female monasticism. Wilderness setting on legendary mountain from Greek mythology.",
        "audioText": "You are at the Monastery of Saint Meletios on Mount Kithairon, one of the most remote and atmospheric women's monasteries in Attica. Mount Kithairon is steeped in Greek mythology—this is the mountain where the infant Oedipus was exposed, where the Bacchae held their frenzied rites to Dionysus, and where the tragic events of many ancient myths unfolded. The Christian monastery transformed this mythological landscape into a place of prayer and asceticism. Saint Meletios the Confessor was a 4th-century defender of Orthodox theology during the Arian controversy, eventually becoming Patriarch of Antioch. The monastery dedicated to him provides a wilderness setting ideal for female monasticism's contemplative life. The nuns live in isolation, following the ancient rhythms of monastic prayer, fasting, and manual work. The mountain location requires physical hardship to reach, making it a true ascetic environment. This remoteness protects the monastic life from worldly distractions. The monastery serves as a spiritual fortress where the nuns can dedicate themselves completely to God. Pilgrims who make the difficult journey to visit experience the authentic spirit of desert monasticism transplanted to the Greek mountains.",
        "quiz": {
            "question": "What makes Mount Kithairon historically significant?",
            "options": [
                "Legendary mountain from Greek mythology, now home to Christian monastery",
                "It was built last year",
                "It contains shopping malls",
                "It is underwater"
            ],
            "answer": 0,
            "feedback": "Correct! Kithairon was central to Greek myths including Oedipus, now transformed into a place of Christian asceticism."
        },
        "reward": {
            "title": "Mountain hiking pilgrimage blessing",
            "provider": "Monastery of Saint Meletios",
            "codeHash": "1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d"
        },
        "id": 278
    },
    {
        "name": "Monastery of Saint Gerasimos, Salamis",
        "lat": 37.97,
        "lng": 23.5,
        "image": "images/st_gerasimos_salamis.jpg",
        "description": "Women's monastery on Salamis island. Female monastic community in the Saronic Gulf. Island convent under Metropolis of Megara and Salamis.",
        "audioText": "You are at the Monastery of Saint Gerasimos on Salamis island, a women's monastery serving the island's spiritual needs. Saint Gerasimos of the Jordan was a 5th-century monk who lived in asceticism in the Judean desert near the Jordan River. According to his life story, he removed a thorn from a lion's paw, and the grateful lion became his companion, helping him with monastery tasks. This beautiful story of harmony between saint and nature has made Gerasimos beloved in Orthodox tradition. The monastery on Salamis provides a monastic community for women drawn to dedicated religious life. Island monasteries have a special character—the surrounding sea creates natural separation from the world while the island community remains close-knit. The nuns support themselves through various crafts and agricultural work while maintaining their prayer schedule. Salamis, famous as the site of the great naval battle where the Greeks defeated the Persians in 480 BC, now hosts several monasteries, showing how the island transformed from military glory to spiritual peace. The monastery welcomes pilgrims, especially on Saint Gerasimos' feast day, March 4th, celebrating the desert monk's example of simplicity and prayer.",
        "quiz": {
            "question": "What is Saint Gerasimos famous for?",
            "options": [
                "Desert monk who befriended a lion after removing a thorn from its paw",
                "Building the Parthenon",
                "Inventing ships",
                "Olympic athlete"
            ],
            "answer": 0,
            "feedback": "Correct! Saint Gerasimos' gentle relationship with a grateful lion shows harmony between holiness and nature."
        },
        "reward": {
            "title": "Monastery handcrafted icons",
            "provider": "Monastery of Saint Gerasimos",
            "codeHash": "2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e"
        },
        "id": 279
    },
    {
        "name": "Monastery of Saint John the Successor, Makrinos",
        "lat": 38.02,
        "lng": 23.34,
        "image": "images/st_john_makrinos.jpg",
        "description": "Women's monastery in Makrinos, Megara region. Female convent in rural Attica. Orthodox monastic community under metropolitan oversight.",
        "audioText": "You are at the Monastery of Saint John the Successor in Makrinos, a women's monastery in the Megara region. The title 'Successor' (Diadochos in Greek) refers to Saint John Climacus, the 6th-century monk and abbot of Saint Catherine's Monastery on Mount Sinai, author of 'The Ladder of Divine Ascent'—one of the most important spiritual texts in Orthodox Christianity. This work describes thirty steps of spiritual ascent toward union with God, each corresponding to a year of Christ's hidden life before his ministry. Saint John Climacus earned the title 'of the Ladder' (Klimakos) from this work, and 'Successor' because he succeeded previous great spiritual fathers. The monastery dedicated to him provides a contemplative environment for nuns following his spiritual teachings. The rural location in Makrinos offers the peace necessary for the monastic life's interior work. The nuns follow a daily schedule of communal prayer, private meditation, manual labor, and study. The monastery preserves ancient monastic traditions while serving modern spiritual seekers. Women visitors can stay in the guest house, attend services, and receive spiritual guidance. The monastery demonstrates how Byzantine monastic tradition continues vibrantly in contemporary Greece.",
        "quiz": {
            "question": "What is Saint John the Successor (Climacus) famous for?",
            "options": [
                "Writing 'The Ladder of Divine Ascent,' a foundational Orthodox spiritual text",
                "Building the Acropolis",
                "Inventing democracy",
                "Discovering America"
            ],
            "answer": 0,
            "feedback": "Correct! Saint John Climacus' 'Ladder' describes thirty steps of spiritual ascent, profoundly influencing Orthodox monasticism."
        },
        "reward": {
            "title": "Spiritual retreat weekend at monastery",
            "provider": "Monastery of Saint John",
            "codeHash": "3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f"
        },
        "id": 280
    },
    {
        "name": "Monastery of Prophet Elias, Villia",
        "lat": 38.1833,
        "lng": 23.6667,
        "image": "images/prophet_elias_villia.jpg",
        "description": "Women's monastery on mountain peak in northern Attica near Villia village. Prophet Elijah hermitage site. Female monastic community in mountain setting.",
        "audioText": "You are at the Monastery of Prophet Elias in Villia, a women's monastery occupying a mountain peak in northern Attica. Prophet Elijah is one of the greatest figures of the Old Testament—the prophet who called down fire from heaven, who was fed by ravens in the wilderness, and who was taken up to heaven in a chariot of fire. In Orthodox tradition, Elijah represents the prophetic tradition and ascetic life, making him the perfect patron for mountaintop monasteries. Throughout Greece, the highest peaks are crowned with chapels or monasteries dedicated to Prophet Elias, symbolizing his ascent to heaven and the spiritual heights monks seek to attain. This monastery near Villia village provides an authentic mountain monastic experience. The nuns live in simplicity, following ancient ascetic practices while welcoming pilgrims who climb to this elevated sanctuary. The Prophet Elias feast day, July 20th, draws crowds who make the pilgrimage to celebrate with Divine Liturgy and festivities. The mountain location offers spectacular views across northern Attica and Boeotia, creating a sense of being suspended between earth and heaven—the proper atmosphere for contemplating divine mysteries.",
        "quiz": {
            "question": "Why are mountaintop monasteries often dedicated to Prophet Elias?",
            "options": [
                "He ascended to heaven in a chariot of fire, symbolizing spiritual heights",
                "He lived in the sea",
                "He built the Parthenon",
                "He invented elevators"
            ],
            "answer": 0,
            "feedback": "Correct! Prophet Elijah's heavenly ascent makes him the perfect patron for monasteries on spiritual and physical heights."
        },
        "reward": {
            "title": "Prophet Elias feast day celebration invitation",
            "provider": "Monastery of Prophet Elias",
            "codeHash": "4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a"
        },
        "id": 281
    },
    {
        "name": "Monastery of Panagia Gorgoepikoos, Mandra",
        "lat": 38.07,
        "lng": 23.495,
        "image": "images/gorgoepikoos_mandra.jpg",
        "description": "Women's monastery in Mandra dedicated to Virgin Mary as 'Quick-to-Hear' prayers. Female convent in western Attica serving local communities.",
        "audioText": "You are at the Monastery of Panagia Gorgoepikoos in Mandra, a women's monastery dedicated to the Virgin Mary under the title 'Quick-to-Hear' or 'Swift-to-Hearken.' This epithet reflects the Orthodox belief that the Theotokos is especially responsive to prayers, swiftly interceding with her Son on behalf of those who call upon her. The Gorgoepikoos icon type shows the Virgin Mary and Christ Child in a tender embrace, emphasizing her maternal love and accessibility. This makes her especially beloved to Orthodox faithful who feel confident approaching her with their needs and troubles. The monastery in Mandra serves the surrounding western Attica communities, providing a place of prayer, retreat, and spiritual counsel. The nuns follow the traditional monastic rule, gathering for services multiple times daily while also engaging in manual work to support the monastery. They welcome women seeking spiritual guidance or respite from life's pressures. The monastery hosts special celebrations on Marian feast days, especially August 15th (Dormition) and March 25th (Annunciation). The community demonstrates how female monasticism continues to thrive in modern Greece, adapting to contemporary needs while preserving ancient traditions.",
        "quiz": {
            "question": "What does 'Gorgoepikoos' mean?",
            "options": [
                "'Quick-to-Hear' or 'Swift-to-Hearken,' showing Mary's responsiveness to prayers",
                "A type of food",
                "A military rank",
                "An ancient city"
            ],
            "answer": 0,
            "feedback": "Correct! 'Gorgoepikoos' emphasizes the Virgin Mary's swift and compassionate response to those who pray to her."
        },
        "reward": {
            "title": "Blessed icon of Panagia Gorgoepikoos",
            "provider": "Monastery of Panagia Gorgoepikoos",
            "codeHash": "5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b"
        },
        "id": 282
    },
    {
        "name": "Monastery of Saint Nicholas, Salamis",
        "lat": 37.955,
        "lng": 23.51,
        "image": "images/st_nicholas_salamis.jpg",
        "description": "Women's monastery on Salamis island dedicated to Saint Nicholas, patron of sailors. Island convent serving maritime communities of Saronic Gulf.",
        "audioText": "You are at the Monastery of Saint Nicholas on Salamis island, a women's monastery dedicated to the patron saint of sailors. Saint Nicholas of Myra, the 4th-century bishop whose generosity inspired the Santa Claus tradition, is universally beloved in Greek Orthodoxy, especially by seafaring communities. Every Greek ship carries an icon of Saint Nicholas, and coastal churches almost invariably honor him. On Salamis—the island famous for the great naval battle of 480 BC—Saint Nicholas' patronage is especially appropriate. The monastery serves both the monastic community and the island's inhabitants. The nuns maintain the traditional liturgical cycle, pray for sailors' safety, and welcome pilgrims who arrive by ferry from Piraeus. Island monasteries have a unique quality—the surrounding sea creates natural separation from mainland concerns while fostering close bonds within the island community. The monastery celebrates Saint Nicholas' feast day on December 6th with special services and traditional festivities. Salamis, strategically located in the Saronic Gulf, has transformed from ancient naval power to a place of spiritual peace, with its monasteries providing continuity from Byzantine times to the present. The monastery demonstrates how Orthodox faith remains woven into maritime Greek life.",
        "quiz": {
            "question": "Why is Saint Nicholas especially venerated on Salamis?",
            "options": [
                "As patron saint of sailors, he protects the island's maritime community",
                "He built the Parthenon",
                "He invented ships",
                "He was born on Salamis"
            ],
            "answer": 0,
            "feedback": "Correct! Saint Nicholas' patronage of sailors makes him beloved on this historic naval island in the Saronic Gulf."
        },
        "reward": {
            "title": "Saint Nicholas icon and maritime blessing",
            "provider": "Monastery of Saint Nicholas",
            "codeHash": "6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c"
        },
        "id": 283
    },
    {
        "name": "Church of Panagia, Salamis Town",
        "lat": 37.9644,
        "lng": 23.4975,
        "image": "images/panagia_salamis_town.jpg",
        "description": "Main parish church of Salamis town dedicated to Virgin Mary. Central Orthodox church serving island community in Saronic Gulf.",
        "audioText": "You are at the Church of Panagia in Salamis town, the main parish church serving the island's central community. Salamis has been inhabited continuously for over 3,000 years, and Orthodox churches have stood on this island since early Byzantine times. As the principal parish church, this serves as the spiritual heart of Salamis town, where locals gather for Sunday liturgies, feast days, baptisms, weddings, and funerals—marking every stage of life with sacred ritual. The church is dedicated simply to the Panagia, the All-Holy Virgin Mary, reflecting her central role in Orthodox piety. Salamis' history is extraordinary—this is where the outnumbered Greek fleet decisively defeated the Persian invasion in 480 BC, saving Greece and Western civilization. The narrow straits where Themistocles' strategy triumphed are visible from the island. Today, Salamis is a peaceful place where ferries connect it to Piraeus, and the church serves a community that blends ancient heritage with modern life. The church's architecture follows traditional Orthodox design with an iconostasis separating the nave from the sanctuary. The parish maintains Greek Orthodox traditions while adapting to contemporary island life, embodying how Orthodoxy remains central to Greek identity.",
        "quiz": {
            "question": "What makes Salamis island historically significant?",
            "options": [
                "Site of 480 BC naval battle where Greeks defeated Persian invasion",
                "It was built last year",
                "It contains pyramids",
                "It is made of gold"
            ],
            "answer": 0,
            "feedback": "Correct! The Battle of Salamis was one of history's most decisive naval victories, saving Greece from Persian conquest."
        },
        "reward": {
            "title": "Salamis historical sites tour ticket",
            "provider": "Church of Panagia Parish",
            "codeHash": "7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d"
        },
        "id": 284
    },
    {
        "name": "Cathedral of Lavrio",
        "lat": 37.7167,
        "lng": 24.0564,
        "image": "images/cathedral_lavrio.jpg",
        "description": "Modern Orthodox cathedral in Lavrio, historic silver mining town. Episcopal center serving southern Attica coastal communities and port.",
        "audioText": "You are at the Orthodox Cathedral of Lavrio (Laurion), the episcopal center of this historic mining town in southern Attica. Lavrio's history stretches back to ancient times when its silver mines funded Athens' golden age and powered the fleet that defeated Persia at Salamis. The mines made Athens wealthy enough to build the Parthenon and maintain its democracy. Modern Lavrio grew dramatically in the late 19th century when French and Greek companies reopened the ancient mines, bringing workers from across Greece and creating a cosmopolitan industrial town. The cathedral serves this community, providing spiritual anchor for a population shaped by mining, maritime trade, and now ferry connections to the Cyclades. The church's architecture reflects modern Orthodox design while maintaining traditional elements. As a regional cathedral, it hosts not only weekly liturgies but also major celebrations, episcopal visits, and community gatherings. Lavrio's transformation from ancient mining center to modern port city mirrors many Greek towns' evolution, and the cathedral represents continuity of faith through all these changes. The coastal location means many parishioners are involved in maritime trades, making the church a gathering place for sailors, miners, and their families.",
        "quiz": {
            "question": "What made ancient Lavrio (Laurion) historically important?",
            "options": [
                "Silver mines that funded Athens' golden age and fleet that defeated Persia",
                "It was built last year",
                "It contains pyramids",
                "It invented democracy"
            ],
            "answer": 0,
            "feedback": "Correct! Lavrio's silver mines were crucial to Athens' wealth, power, and victory over the Persian invasion."
        },
        "reward": {
            "title": "Lavrio mining museum and port tour",
            "provider": "Cathedral Parish Office",
            "codeHash": "8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e"
        },
        "id": 285
    },
    {
        "name": "Church of Agios Nikolaos, Koropi",
        "lat": 37.8978,
        "lng": 23.875,
        "image": "images/st_nikolaos_koropi.jpg",
        "description": "Regional parish church in Koropi, Mesogaia. Saint Nicholas Orthodox church serving farming community in eastern Attica plains.",
        "audioText": "You are at the Church of Agios Nikolaos in Koropi, a regional parish church serving this important town in the Mesogaia plain. Koropi has been a significant agricultural center for millennia, benefiting from the fertile soil and water resources of eastern Attica. The church dedicated to Saint Nicholas serves a community traditionally involved in farming, olive cultivation, and vineyards. While Saint Nicholas is universally known as patron of sailors, he is also venerated as protector of travelers, merchants, and those in need—making him appropriate for this inland agricultural town. The church functions as the community's spiritual center, hosting weekly Divine Liturgies, feast day celebrations, and the sacramental life that marks every stage from baptism to funeral. Koropi's proximity to Athens International Airport has transformed it from purely agricultural village to a more diverse community, but the church remains the heart of local identity. The architecture follows traditional Orthodox patterns with icons, chandeliers, and an iconostasis. The parish maintains Greek customs and traditions while serving a modernizing population. The church demonstrates how Orthodox faith continues to anchor Greek communities even as economic and social life evolves.",
        "quiz": {
            "question": "What traditional economic activity has shaped Koropi's community?",
            "options": [
                "Agriculture, especially olive cultivation and vineyards in the fertile Mesogaia plain",
                "Ship building",
                "Mining",
                "Tourism"
            ],
            "answer": 0,
            "feedback": "Correct! Koropi has been an agricultural center for millennia, blessed with fertile soil in the Mesogaia region."
        },
        "reward": {
            "title": "Local olive oil and wine tasting",
            "provider": "Church Parish Community",
            "codeHash": "9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f"
        },
        "id": 286
    },
    {
        "name": "Church of Panagia, Markopoulo",
        "lat": 37.885,
        "lng": 23.9333,
        "image": "images/panagia_markopoulo.jpg",
        "description": "Regional pilgrimage site in Markopoulo Mesogaias. Virgin Mary church with festival celebrations. Traditional Orthodox church in wine-producing region.",
        "audioText": "You are at the Church of Panagia in Markopoulo Mesogaias, a regional pilgrimage site in the heart of Attica's wine country. Markopoulo is famous for its vineyards, especially the indigenous Savatiano grape that produces the distinctive retsina wine. The church dedicated to the Panagia serves not just as a parish church but as a pilgrimage destination, especially during major Marian feast days. The most important celebration is August 15th, the Dormition of the Virgin, when the church hosts a grand panegyri (festival) with liturgy, procession, music, dancing, and traditional food. These celebrations maintain ancient customs, connecting modern Greeks to their Byzantine and even pagan festival heritage. The church's role extends beyond Sunday liturgies to mark the agricultural calendar—prayers for successful harvest, blessing of new wine, thanksgiving after grape-picking. This integration of sacred and agricultural life shows how Orthodoxy remains woven into everyday existence. The church preserves traditional iconography, liturgical practices, and the sense of the sacred pervading all aspects of life. Visitors experience authentic Greek village spirituality, where church, community, and land form an inseparable whole.",
        "quiz": {
            "question": "What makes Markopoulo's Church of Panagia significant?",
            "options": [
                "Regional pilgrimage site in wine country, hosting major festivals blending faith and agriculture",
                "It was built last week",
                "It contains modern art galleries",
                "It is underground"
            ],
            "answer": 0,
            "feedback": "Correct! The church integrates Orthodox devotion with agricultural life, especially grape harvest and wine production traditions."
        },
        "reward": {
            "title": "Traditional panegyri festival invitation",
            "provider": "Church of Panagia Parish",
            "codeHash": "0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a"
        },
        "id": 287
    },
    {
        "name": "Church of Panagia, Porto Rafti",
        "lat": 37.8833,
        "lng": 24.0167,
        "image": "images/panagia_porto_rafti.jpg",
        "description": "Coastal parish church in Porto Rafti seaside town. Virgin Mary church serving fishing village and beach resort community on Attica's east coast.",
        "audioText": "You are at the Church of Panagia in Porto Rafti, a coastal parish church serving this charming seaside town on Attica's east coast. Porto Rafti takes its name from the 'Tailor' (raftis in Greek)—a large ancient statue on a small island in the bay, probably representing a priest or deity. The town has evolved from a quiet fishing village to a popular beach resort while maintaining its traditional character. The church dedicated to the Panagia serves both year-round residents and summer visitors, creating a unique parish that swells during vacation season. Maritime communities have always shown special devotion to the Virgin Mary, seeing her as protector of those who venture onto the sea. The church hosts not just regular liturgies but also special services for Dormition (August 15), celebrated with particular enthusiasm in coastal towns. Porto Rafti's beautiful natural harbor has been used since ancient times, and archaeological remains dot the area. The church represents continuity—from ancient seafarers to Byzantine sailors to modern fishermen and tourists, this coastline has remained a place where people gather, work, and pray. The seaside location creates a special atmosphere where the sound of waves blends with liturgical chanting.",
        "quiz": {
            "question": "Why is the Virgin Mary especially venerated in coastal towns like Porto Rafti?",
            "options": [
                "Maritime communities see her as protector of those who venture onto the sea",
                "She invented fishing",
                "She built the harbor",
                "She was born there"
            ],
            "answer": 0,
            "feedback": "Correct! Coastal communities traditionally seek the Virgin Mary's protection for fishermen and all who depend on the sea."
        },
        "reward": {
            "title": "Seaside blessing ceremony participation",
            "provider": "Church of Panagia Parish",
            "codeHash": "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"
        },
        "id": 288
    },
    {
        "name": "Church of Prophet Elias, Avlona",
        "lat": 38.19,
        "lng": 23.69,
        "image": "images/prophet_elias_avlona.jpg",
        "description": "Mountain chapel in Avlona village, northern Attica. Prophet Elijah hilltop church with panoramic views. Traditional feast day celebrations July 20th.",
        "audioText": "You are at the Church of Prophet Elias in Avlona village, a mountain chapel in northern Attica near the foothills of Mount Parnitha. Following Greek tradition, this church to Prophet Elijah occupies an elevated position, symbolizing both the prophet's ascent to heaven and the spiritual heights believers strive to reach. From this vantage point, you can see across northern Attica toward Boeotia, creating a sense of standing between earth and sky. The chapel serves the village of Avlona and surrounding areas, but truly comes alive on the Prophet Elias feast day, July 20th, when crowds climb to celebrate with Divine Liturgy followed by traditional festivities—music, dancing, food, and fellowship. These mountaintop celebrations maintain customs stretching back to Byzantine times, blending Christian devotion with echoes of ancient mountain worship. The church is simple but beloved, embodying the Greek connection between natural landscape and sacred space. During the Greek Civil War, an icon from the remote Chapel of Saint Marina was temporarily kept here for safekeeping. Today, the church remains a spiritual landmark for the region, marking the agricultural calendar and bringing the community together on its patron feast.",
        "quiz": {
            "question": "Why are Prophet Elias churches traditionally built on hilltops?",
            "options": [
                "To symbolize Prophet Elijah's ascent to heaven and spiritual heights believers seek",
                "Because flat land is expensive",
                "To serve as military fortresses",
                "Because he lived on mountains"
            ],
            "answer": 0,
            "feedback": "Correct! Mountaintop locations honor Elijah's ascension and represent the spiritual elevation sought through prayer."
        },
        "reward": {
            "title": "July 20 feast day celebration invitation",
            "provider": "Village of Avlona",
            "codeHash": "2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c"
        },
        "id": 289
    },
    {
        "name": "Church of Agios Nikolaos, Keratea",
        "lat": 37.785,
        "lng": 23.9867,
        "image": "images/st_nikolaos_keratea.jpg",
        "description": "Regional church in Keratea, southern Mesogaia. Saint Nicholas Orthodox church serving village community in southeastern Attica.",
        "audioText": "You are at the Church of Agios Nikolaos in Keratea, a village church in southern Mesogaia, southeastern Attica. Keratea occupies a strategic position between the coast and interior, historically serving as a waypoint for travelers and merchants moving between Athens and the ports of southeastern Attica. Saint Nicholas, patron of travelers, merchants, and those in need, is the perfect dedicatee for a church in such a location. The church serves the local community, marking the rhythm of life through liturgical celebrations. Keratea maintains its traditional character despite proximity to Athens, and the church remains central to village identity. The parish gathers here for Sunday liturgies, major feast days like December 6th (Saint Nicholas' day), and the sacramental events that punctuate family life. The church preserves Orthodox liturgical tradition while adapting to modern needs. The iconostasis displays traditional iconography, and the liturgical cycle follows the ancient pattern. Village churches like this one embody the intimate scale of Orthodox parish life, where priest and parishioners know each other personally, and the church building itself carries memories of generations. This intimate spirituality contrasts with great cathedrals but offers its own profound experience of community and continuity.",
        "quiz": {
            "question": "Why is Saint Nicholas an appropriate patron for Keratea's church?",
            "options": [
                "As patron of travelers and merchants, he protects a waypoint village between coast and interior",
                "He built the village",
                "He invented roads",
                "He was born in Keratea"
            ],
            "answer": 0,
            "feedback": "Correct! Saint Nicholas' patronage of travelers fits Keratea's historical role as a strategic crossroads village."
        },
        "reward": {
            "title": "Village hiking trail map and local products",
            "provider": "Church Parish Community",
            "codeHash": "3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d"
        },
        "id": 290
    },
    {
        "name": "Church of Saint Dionysios, Piraeus",
        "lat": 37.948,
        "lng": 23.652,
        "image": "images/st_dionysios_piraeus.jpg",
        "description": "Modern Orthodox church in Piraeus dedicated to Saint Dionysius the Areopagite. Contemporary cathedral serving port city neighborhoods.",
        "audioText": "You are at the Church of Saint Dionysios in Piraeus, dedicated to Saint Dionysius the Areopagite—one of the most significant figures in early Christian Athens. According to the Acts of the Apostles, Dionysius was a member of the Areopagus (Athens' high court) who converted to Christianity after hearing Saint Paul preach on Mars Hill around 51 AD. He became the first Bishop of Athens, making him the founding father of Athenian Christianity. Later tradition attributed to him mystical theological writings that profoundly influenced Christian thought. The church in Piraeus honors this connection between Athens and early Christianity. As a modern church serving Piraeus neighborhoods, it demonstrates how new parishes continue to be established to serve Greece's urban populations. The architecture follows contemporary Orthodox design while maintaining traditional liturgical function. The parish provides not just Sunday liturgies but also catechism classes, youth programs, charitable work, and community services. Urban parishes like this one face unique challenges—serving transient populations, competing with secular entertainment, and maintaining Orthodox identity in cosmopolitan settings. Yet they also show Orthodoxy's continuing relevance to modern Greek life, adapting ancient tradition to contemporary needs.",
        "quiz": {
            "question": "Who was Saint Dionysius the Areopagite?",
            "options": [
                "Member of Athens high court converted by Saint Paul, first Bishop of Athens",
                "A Roman emperor",
                "Inventor of democracy",
                "Olympic athlete"
            ],
            "answer": 0,
            "feedback": "Correct! Saint Dionysius was Athens' first Christian convert from the elite, becoming the city's first bishop."
        },
        "reward": {
            "title": "Early Christianity in Athens lecture",
            "provider": "Church of Saint Dionysios",
            "codeHash": "4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e"
        },
        "id": 291
    },
    {
        "name": "Church of Prophet Elias, Piraeus",
        "lat": 37.9535,
        "lng": 23.6335,
        "image": "images/prophet_elias_piraeus.jpg",
        "description": "Hill church in Piraeus with panoramic port views. Prophet Elijah chapel overlooking maritime city and Saronic Gulf. Traditional hilltop sanctuary.",
        "audioText": "You are at the Church of Prophet Elias on a hill in Piraeus, overlooking the port and the Saronic Gulf. This elevated location follows the Greek tradition of placing churches dedicated to Prophet Elijah on high ground, symbolizing his ascent to heaven in a chariot of fire and the spiritual heights believers aspire to reach. From this vantage point, you command spectacular views across Greece's greatest port—the commercial harbor, passenger terminals, naval base, and yacht marina spread below, with ships departing for Greek islands and beyond. The church serves both as a neighborhood parish and as a pilgrimage destination, especially on the Prophet Elias feast day, July 20th, when Piraeans climb the hill to celebrate with liturgy and festivities. The maritime setting creates a unique atmosphere—the sound of ship horns blending with church bells, the sight of vessels entering and leaving harbor visible during services. Prophet Elijah, though an Old Testament figure, is deeply woven into Greek maritime culture. Sailors and fishermen seek his protection alongside Saint Nicholas. The church demonstrates how Orthodox faith pervades all aspects of Greek life, from mountaintops to seaports, connecting ancient prophetic tradition to contemporary urban existence.",
        "quiz": {
            "question": "What makes this hilltop location significant for a Prophet Elias church?",
            "options": [
                "Elevated position symbolizes Elijah's heavenly ascent and offers panoramic port views",
                "It was the cheapest land",
                "It contains buried treasure",
                "It is closest to the sea"
            ],
            "answer": 0,
            "feedback": "Correct! The hilltop honors Elijah's ascension while providing commanding views of Piraeus' maritime activities."
        },
        "reward": {
            "title": "Sunset port viewing and blessing",
            "provider": "Church of Prophet Elias",
            "codeHash": "5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f"
        },
        "id": 292
    },
    {
        "name": "Vouliagmeni Beach",
        "lat": 37.8143,
        "lng": 23.7814,
        "image": "images/vouliagmeni_beach.jpg",
        "description": "The chicest beach on the Athens Riviera, offering organized facilities, upscale beach clubs, and crystal-clear waters in the exclusive Vouliagmeni suburb.",
        "audioText": "Welcome to Vouliagmeni Beach, the most exclusive and sophisticated beach destination on the Athens Riviera. Located 20 kilometers south of central Athens, Vouliagmeni represents the pinnacle of Greek beach culture—where natural beauty meets refined amenities. The name 'Vouliagmeni' comes from the ancient Greek 'Boleagmenos,' meaning 'submerged,' referring to the geological events that shaped this dramatic coastline thousands of years ago. This sandy and pebble beach stretches along a protected bay, its turquoise waters sheltered from strong winds by the surrounding cliffs and peninsula. The beach is fully organized with hundreds of sun loungers, umbrellas arranged in perfect rows, beachfront cafes serving fresh seafood and cocktails, and facilities that rival any Mediterranean resort. Beyond swimming, you'll find tennis courts, basketball courts, beach volleyball areas, and water sports equipment for rent. The beach is family-friendly with shallow entry points and lifeguard services, yet sophisticated enough for couples seeking a romantic seaside escape. Just north of the main beach lies the famous Astir Beach, part of the Four Seasons resort, where entrance fees can exceed 50 euros but include access to private cabanas, infinity pools, and celebrity-spotting opportunities. For those seeking adventure rather than luxury, head south to the Limanakia coves—a chain of rocky inlets where locals cliff-jump into deep, crystalline water. Vouliagmeni is perfectly positioned for a full Athens Riviera experience: morning swim here, lunch in Vouliagmeni town, afternoon drive to Cape Sounion for sunset at the Temple of Poseidon. The beach is accessible by car via the coastal Poseidonos Avenue, by bus, or even by Athens' coastal tram. Whether you're an Athenian escaping the summer heat or a visitor discovering why Greeks worship the sea, Vouliagmeni Beach delivers the complete Mediterranean experience.",
        "quiz": {
            "question": "What makes Vouliagmeni Beach special on the Athens Riviera?",
            "options": [
                "It is the most upscale beach with full amenities, nearby exclusive resorts, and protected turquoise waters",
                "It is the only free beach in Attica",
                "It has ancient ruins underwater",
                "It is the largest beach in Greece"
            ],
            "answer": 0,
            "feedback": "Correct! Vouliagmeni is the Athens Riviera's most exclusive beach, combining natural beauty with luxury facilities and proximity to resorts like the Four Seasons Astir Palace."
        },
        "reward": {
            "title": "Beach day pass at Vouliagmeni Beach Club",
            "provider": "Vouliagmeni Beach Complex",
            "codeHash": "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"
        },
        "id": 293
    },
    {
        "name": "Varkiza Beach",
        "lat": 37.8297,
        "lng": 23.7958,
        "image": "images/varkiza_beach.jpg",
        "description": "One of the Athens Riviera's most popular family beaches, featuring 800 meters of golden sand, organized and free sections, water sports, and beachside dining.",
        "audioText": "Welcome to Varkiza Beach, the Athens Riviera's perfect balance between accessibility and quality—a beach that Athenians genuinely love. Stretching 800 meters along the Saronic Gulf, Varkiza offers something for everyone: organized sections with sun loungers and umbrellas, free public areas where you can spread your own towel, shallow entry points for children, and water sports for the adventurous. This is a genuine sandy beach—no pebbles, no rocks, just soft golden sand that's comfortable underfoot. The beach occupies a gentle southeast-facing bay, which means calm, swimmable waters most days and protection from the northern Meltemi winds that plague other beaches. Historically, Varkiza was a quiet fishing village, but in the post-war era it transformed into one of Athens' premier suburban beach destinations. During the Greek Civil War, the Varkiza Agreement of 1945 was signed here, attempting to end the conflict—though the peace didn't hold. Today, Varkiza is all about leisure and recreation. The organized section features volleyball courts, beach soccer areas, playgrounds for children, and even a small amphitheater for summer concerts. Water sports are abundant: you can rent kayaks, paddleboards, jet skis, or try parasailing. Along the coastal road behind the beach, you'll find dozens of tavernas, cafes, and beach bars serving everything from traditional Greek meze to modern fusion cuisine. The beach is incredibly accessible: just 22 kilometers from central Athens, reachable by car in 30-40 minutes, by bus in about an hour, or even by bicycle along the coastal path for the fitness-minded. Parking can be challenging on summer weekends, but arrive early or use public transport. For visitors staying in Athens, Varkiza makes an ideal day trip: morning swim and beach relaxation, lunch at a seaside taverna, afternoon exploration of nearby Vouliagmeni or a drive down to Cape Sounion. Greeks say that Varkiza strikes the perfect balance—sophisticated enough to feel special, accessible enough to visit regularly. It's a beach where families play, couples stroll at sunset, and lifelong friendships are formed under the summer sun.",
        "quiz": {
            "question": "What makes Varkiza Beach particularly family-friendly?",
            "options": [
                "800 meters of sandy beach with both organized and free sections, shallow water, water sports, and nearby dining",
                "It is the only beach with lifeguards in Attica",
                "It has ancient ruins to explore",
                "It is indoor and climate-controlled"
            ],
            "answer": 0,
            "feedback": "Correct! Varkiza's long sandy shoreline, mix of organized and free areas, calm shallow waters, recreational facilities, and abundant amenities make it ideal for all ages."
        },
        "reward": {
            "title": "Free beach volleyball court reservation at Varkiza",
            "provider": "Varkiza Beach Sports Center",
            "codeHash": "3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d"
        },
        "id": 294
    },
    {
        "name": "Limanakia Coves",
        "lat": 37.812,
        "lng": 23.7845,
        "image": "images/limanakia_coves.jpg",
        "description": "A chain of dramatic rocky coves with crystal-clear deep water, perfect for cliff jumping, snorkeling, and adventurous swimming—Athens' hidden coastal gems.",
        "audioText": "You've arrived at Limanakia—which translates to 'little harbors'—a spectacular series of rocky coves carved into the limestone cliffs south of Vouliagmeni. This is not a beach for lounging on soft sand; this is adventure swimming at its finest, where the Aegean Sea crashes against dramatic rock formations, creating natural swimming pools of impossibly clear, deep blue water. Limanakia consists of several distinct coves, numbered by locals: Limanakia 1 is the most accessible and therefore most crowded, especially on summer weekends when young Athenians arrive with coolers, speakers, and sunscreen. Limanakia 2 and 3 require a bit more scrambling over rocks but reward you with more space and privacy. The rocks are smooth limestone, worn by millennia of wave action, some flat enough for sunbathing, others perfect as jumping platforms. And yes, cliff jumping is the main attraction here. You'll see locals—ranging from fearless teenagers to surprisingly spry seniors—launching themselves from heights of 3, 5, even 10 meters into the deep water below. If you're nervous, start low and work your way up; if you're experienced, the highest points offer an adrenaline rush with stunning views mid-air. The water here is among the clearest on the Athens Riviera, thanks to the rocky seabed and absence of sand. Bring snorkeling gear and you'll discover an underwater world: schools of small silver fish, sea urchins clinging to rocks, occasionally even an octopus hiding in a crevice. But be cautious—there are no lifeguards here, no facilities, no shade except what you bring yourself. Wear water shoes to protect your feet from sharp rocks and sea urchins. Bring plenty of water and snacks, as there are no shops nearby. Parking is limited along the coastal road, so arrive early or be prepared to walk. Limanakia is best enjoyed outside peak summer weekends; come early morning or late afternoon for the best light and fewest crowds. If you want to experience how Greeks really swim—with a spirit of adventure, a disregard for comfort, and a love of pure, pristine water—Limanakia is your destination.",
        "quiz": {
            "question": "What makes Limanakia Coves unique compared to typical beaches?",
            "options": [
                "Rocky cliffs with crystal-clear deep water for cliff jumping and snorkeling—no sand, no facilities, pure adventure",
                "It has the widest sandy beach in Greece",
                "It is an artificial swimming pool",
                "It is only accessible by boat"
            ],
            "answer": 0,
            "feedback": "Correct! Limanakia is a chain of natural rocky coves offering adventurous swimming, cliff jumping, and pristine snorkeling conditions—raw nature without commercial amenities."
        },
        "reward": {
            "title": "Free snorkeling equipment rental at Vouliagmeni",
            "provider": "Athens Riviera Water Sports",
            "codeHash": "4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e"
        },
        "id": 295
    },
    {
        "name": "Lagonisi Beach",
        "lat": 37.7655,
        "lng": 23.9353,
        "image": "images/lagonisi_beach.jpg",
        "description": "An upscale coastal area featuring luxury resorts, picturesque coves, and clear waters—a favorite summer destination for Athenians with vacation homes.",
        "audioText": "Welcome to Lagonisi, whose name means 'Rabbit Island' in Greek, referring to the small rocky islet just offshore. This exclusive coastal area, 40 kilometers southeast of Athens on the road to Cape Sounion, represents the Athens Riviera at its most refined—where summer homes cling to hillsides, yachts bob in protected coves, and the pace of life slows to a Mediterranean crawl. Lagonisi isn't a single beach but rather a collection of beautiful swimming spots. The main public beach, Lagonisi Beach, offers a generous stretch of sand and pebbles with organized sections featuring sun loungers and beachfront cafes. The water here is notably clear, benefiting from the rocky seabed and good circulation. The beach is family-friendly but maintains an upscale feel, attracting well-heeled Athenians and international visitors. Just south, you'll find Kolpiskos Lagonisiou, a smaller, quieter strip of sand perfect for those seeking a less crowded experience—still with beach bar service but plenty of room to spread your own towel. Then there's the Grand Resort Lagonissi, a sprawling luxury hotel complex with its own private beaches, restaurants, spa, tennis courts, and even a swimming pool for those who prefer chlorinated water to the Aegean. Non-guests can access the resort beaches for a fee, gaining access to premium facilities and attentive service. Historically, this coastline remained relatively undeveloped until the mid-20th century, when wealthy Athenian families began building summer villas here, drawn by the combination of proximity to the capital and the feeling of escape. Today, Lagonisi represents a certain lifestyle: long lunches at seaside tavernas, afternoon swims, evening strolls along the shore. The coastal road offers stunning views, especially as you continue south toward Sounion, with the deep blue Aegean stretching to the horizon. Lagonisi works best as part of a broader Athens Riviera exploration: combine it with stops at Vouliagmeni, Varkiza, or continue to Cape Sounion for sunset. While it doesn't have the ancient sites or hiking of other destinations, Lagonisi perfects the art of Greek summer leisure—sun, sea, and sophisticated relaxation.",
        "quiz": {
            "question": "What characterizes Lagonisi as a destination?",
            "options": [
                "An upscale coastal area with luxury resorts, clear-water coves, and summer homes 40km from Athens on the Sounion route",
                "Greece's largest beach with cheap accommodations",
                "An ancient archaeological site",
                "A winter skiing resort"
            ],
            "answer": 0,
            "feedback": "Correct! Lagonisi is an exclusive beach area known for its Grand Resort Lagonissi, picturesque coves, clear waters, and appeal to affluent summer residents."
        },
        "reward": {
            "title": "20% discount at Lagonisi beachfront taverna",
            "provider": "Kolpiskos Beach Café",
            "codeHash": "6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a"
        },
        "id": 296
    },
    {
        "name": "Glyfada Beach",
        "lat": 37.8682,
        "lng": 23.7503,
        "image": "images/glyfada_beach.jpg",
        "description": "The most cosmopolitan beach suburb of Athens, combining sandy beaches with upscale shopping, dining, and nightlife—easily accessible by tram and metro.",
        "audioText": "You are in Glyfada, the Beverly Hills of Athens—a seaside suburb that perfectly combines beach culture with urban sophistication. Located just 15 kilometers south of the city center, Glyfada is where Athenians come not just to swim, but to see and be seen, to shop, dine, and embrace a lifestyle that's as much about leisure as it is about location. The beaches here are numerous and varied. Glyfada Beach itself is organized with rows of sun loungers, beach volleyball courts, and a lively beach bar scene. The sand is golden, the water clean, and the crowd diverse—families during the day, younger crowds toward evening. Best of all, Glyfada is genuinely accessible: the Athens tram runs directly here from Syntagma Square, making it possible to have breakfast in the city center and be swimming by mid-morning without ever needing a car. Beyond the beach, Glyfada offers something rare among Greek coastal towns: a true urban experience. The main shopping streets rival Athens itself, with international brands, Greek boutiques, and some of the best restaurants outside the city center. The marina hosts yachts from around the Mediterranean, while the nearby golf course is one of the few in the Athens area. Historically, Glyfada has been a playground for the wealthy since the 1960s, when it began transforming from a quiet coastal village into a destination for Athens' elite. Today, it maintains that upscale character while being far more accessible and democratic—anyone can enjoy the public beaches, walk the promenade, or grab a frappe at a beachfront cafe. Glyfada works well for visitors who want beach access without sacrificing city conveniences. Stay in central Athens and make this a day trip, or base yourself here and use it as a starting point for exploring the Athens Riviera. From Glyfada, Vouliagmeni is 10 minutes south, Cape Sounion less than an hour, and the Acropolis just 20 minutes back toward the city. It's the beach suburb that offers the best of both worlds—Aegean waves and cosmopolitan energy.",
        "quiz": {
            "question": "What makes Glyfada unique among Athens beaches?",
            "options": [
                "Combines sandy beaches with cosmopolitan shopping, dining, nightlife, and direct tram/metro access from central Athens",
                "It's the only beach with no water",
                "It's located inside the Acropolis",
                "It has ice and snow year-round"
            ],
            "answer": 0,
            "feedback": "Correct! Glyfada is Athens' most cosmopolitan beach suburb, offering not just beaches but high-end shopping, restaurants, marinas, and excellent public transport connections."
        },
        "reward": {
            "title": "Free welcome drink at Glyfada beach bar",
            "provider": "Balux Beach Bar",
            "codeHash": "7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b"
        },
        "id": 297
    },
    {
        "name": "Sounion Beach",
        "lat": 37.6517,
        "lng": 24.0231,
        "image": "images/sounion_beach.jpg",
        "description": "Sandy beach at the foot of Cape Sounion, offering swimming in the shadow of the ancient Temple of Poseidon—history and natural beauty combined.",
        "audioText": "Welcome to Sounion Beach, one of the most atmospheric swimming spots in Greece, where you can float in the Aegean Sea while gazing up at the Temple of Poseidon crowning the marble cliff above. This is the southernmost point of the Attica peninsula, 70 kilometers from Athens, where the land ends and the sea begins, where ancient Greeks believed Poseidon ruled the waves. The beach itself is sandy with some pebbles, curving along a protected bay that offers calm, swimmable water even when the Aegean is rough. The water is exceptionally clear thanks to the rocky seabed and limited development—this area has been protected due to the archaeological significance of the temple above. There are a few organized sections with sun loungers and a couple of simple tavernas serving fresh fish, but Sounion Beach remains relatively unspoiled compared to beaches closer to Athens. What makes swimming here unforgettable is the view: turn landward and you see the Temple of Poseidon, its remaining columns glowing golden in the afternoon light, perched 60 meters above the sea on sheer cliffs. This is the temple where Lord Byron carved his name in 1810 (vandalism even then!), where ancient Athenians made sacrifices before sea voyages, and where the mythical King Aegeus—father of the hero Theseus—threw himself into the sea upon believing his son had been killed by the Minotaur, thus giving the Aegean Sea its name. The surrounding coastline is dramatic: wind-sculpted rocks, hidden coves, and geology that spans millions of years. Visiting Sounion Beach works best as part of a sunset visit to the temple: arrive mid-afternoon, swim and relax on the beach, enjoy a late lunch at a taverna, then climb up to the temple around 7-8 PM to watch the sun sink into the Saronic Gulf—one of the most famous sunsets in Greece. The combination of archaeological grandeur, mythological significance, natural beauty, and that perfect swim makes Sounion a pilgrimage site for anyone exploring Attica. It's not just a beach—it's where history, mythology, and the eternal Greek relationship with the sea come together in one spectacular place.",
        "quiz": {
            "question": "What makes Sounion Beach historically and scenically special?",
            "options": [
                "It sits beneath the dramatic cliff-top Temple of Poseidon at Cape Sounion, combining ancient history with beautiful swimming",
                "It's the only beach in the world with palm trees",
                "It has an underwater volcano",
                "It's the starting point of the Marathon race"
            ],
            "answer": 0,
            "feedback": "Correct! Sounion Beach offers the unique experience of swimming in the Aegean while viewing the 2,400-year-old Temple of Poseidon above—myth, history, and nature united."
        },
        "reward": {
            "title": "Sunset viewing pass at Temple of Poseidon",
            "provider": "Hellenic Ministry of Culture",
            "codeHash": "8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c"
        },
        "id": 298
    },
    {
        "name": "Anavyssos Beach",
        "lat": 37.7217,
        "lng": 23.9622,
        "image": "images/anavyssos_beach.jpg",
        "description": "A windswept sandy beach famous for windsurfing and kitesurfing, featuring water sports facilities and traditional tavernas in a laid-back coastal village.",
        "audioText": "Welcome to Anavyssos Beach, the wind-rider's paradise of the Athens Riviera. Located between Lagonisi and Cape Sounion, about 45 kilometers south of Athens, Anavyssos is where the Meltemi winds that plague other beaches become a feature rather than a bug. This long, sandy beach with shallow waters is one of the premier windsurfing and kitesurfing destinations near Athens, attracting board-sport enthusiasts from across Greece and beyond. The village of Anavyssos retains a more authentic, less developed character than its northern neighbors. This was once a simple fishing village, and while tourism has arrived, it hasn't completely transformed the place. You'll still find traditional tavernas serving fresh fish caught that morning, family-run cafes where locals gather, and a slower pace of life. The beach itself is generously wide and long, mostly sandy with some pebbles, and the shallow entry makes it suitable for families despite the wind. During calm days, it's a pleasant swimming beach; when the wind picks up, the water transforms into a playground for wind and kite surfers, their colorful sails dotting the bay. Several water sports schools operate here, offering lessons and equipment rental for windsurfing, kitesurfing, and stand-up paddleboarding. Even if you're not into board sports, watching the skilled riders perform jumps and tricks can be mesmerizing. The surrounding area is relatively undeveloped, with low-rise buildings and plenty of open space—a refreshing change from the more built-up northern beaches. Anavyssos works well as a stop on the Cape Sounion route: swim and lunch here, then continue south for the sunset at the Temple of Poseidon. Alternatively, visit on a windy day when other beaches are unpleasant; here, the wind is part of the experience. Bring a windbreak if you're not into water sports, as the Meltemi can be persistent in July and August. For those seeking authentic Greek coastal life with an active, sporty atmosphere, Anavyssos delivers an experience that's less polished but more genuine than the resort towns to the north.",
        "quiz": {
            "question": "Why is Anavyssos Beach particularly popular with water sports enthusiasts?",
            "options": [
                "Consistent winds make it ideal for windsurfing and kitesurfing, with schools, equipment rental, and shallow sandy waters",
                "It has the highest waves in the Mediterranean",
                "It's an indoor pool with no wind",
                "It's only accessible by submarine"
            ],
            "answer": 0,
            "feedback": "Correct! Anavyssos benefits from the Meltemi winds that create perfect conditions for windsurfing and kitesurfing, making it an active water sports destination."
        },
        "reward": {
            "title": "Windsurfing lesson discount at Anavyssos",
            "provider": "Anavyssos Water Sports School",
            "codeHash": "9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d"
        },
        "id": 299
    },
    {
        "name": "Kavouri Beach",
        "lat": 37.8173,
        "lng": 23.7729,
        "image": "images/kavouri_beach.jpg",
        "description": "A free, family-friendly public beach on the Vouliagmeni peninsula, offering sandy shores and calm waters without entrance fees—ideal for budget-conscious visitors.",
        "audioText": "Welcome to Kavouri Beach, proof that the best things in life—and on the Athens Riviera—can indeed be free. Nestled on the western side of the Vouliagmeni peninsula, just north of exclusive Vouliagmeni Beach and Lake Vouliagmeni, Kavouri is a genuine public beach with no entrance fees, no required sun lounger rentals, just pure democratic access to the Aegean Sea. The beach is sandy with some pebbles, curving gently along a protected bay that keeps the waters calm and shallow—perfect for families with young children. The shoreline is long enough to accommodate crowds even on busy summer weekends, and there's usually space to lay your towel and stake out your spot. Kavouri attracts a different crowd than the organized beaches: locals who come regularly and know exactly where to find shade under the few trees, budget-conscious travelers who prefer to bring their own umbrellas and snacks, and families who appreciate the relaxed atmosphere without commercial pressures. While there are no organized facilities on the beach itself, you'll find basic amenities nearby: public toilets, a few cafes and tavernas across the coastal road, and plenty of free parking (at least on weekdays). The water quality is consistently good—this is still the same coastline that makes the Athens Riviera famous, after all. On calm days, bring snorkeling gear; the rocky areas at either end of the beach host small fish and occasionally sea urchins. Kavouri's location makes it an excellent alternative when the paid beaches are too crowded or too expensive. It's just a few minutes from Vouliagmeni, Varkiza, and the Limanakia coves, so you can easily combine a morning at Kavouri with an afternoon exploring other parts of the coast. The beach is accessible by car and by bus from Athens. Locals will tell you that Kavouri on a weekday morning is one of Athens' great secrets: you might have the entire beach to yourself, with nothing but the sound of small waves and seabirds. It's a reminder that even in one of Europe's most expensive beach areas, nature's beauty remains available to everyone willing to bring their own umbrella and embrace a do-it-yourself beach day.",
        "quiz": {
            "question": "What makes Kavouri Beach different from nearby Vouliagmeni beaches?",
            "options": [
                "It's completely free with no entrance fees, offering sandy shores and calm waters on a budget-friendly public beach",
                "It's the only beach with entry fees in Greece",
                "It's located inside a shopping mall",
                "It's a mountain lake with no sea access"
            ],
            "answer": 0,
            "feedback": "Correct! Kavouri is a free public beach on the Vouliagmeni peninsula, providing sandy shores, calm waters, and Aegean access without the fees of nearby organized beaches."
        },
        "reward": {
            "title": "Free coffee at Kavouri beachside café",
            "provider": "Kavouri Beach Café",
            "codeHash": "0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e"
        },
        "id": 300
    },
    {
        "name": "Mount Parnitha Summit (1,413m)",
        "lat": 38.1651,
        "lng": 23.7195,
        "image": "images/parnitha_summit.jpg",
        "description": "The highest mountain in Attica at 1,413 meters, offering challenging summit hikes through dense fir forests, red deer sightings, and panoramic views over Athens and the Saronic Gulf.",
        "audioText": "Welcome to the summit of Mount Parnitha, the wild heart of Attica and the highest peak in the greater Athens region at 1,413 meters above sea level. Standing here, with Athens sprawled below and the Aegean glittering in the distance, you've reached a place where nature still rules, where wolves howl at night, and where the air smells of Greek fir and wild herbs rather than exhaust fumes. Parnitha is not just a mountain—it's a protected National Park, the only one within such proximity to a major European capital. It covers 250 square kilometers of dense conifer forests, rocky peaks, ravines, caves, and over 800 plant species. The mountain is home to red deer—you'll often spot them if you hike early morning or late afternoon—as well as foxes, wild boars, and a recently returned wolf population. Overhead, birds of prey circle: golden eagles, peregrine falcons, and buzzards hunting in the thermals. The summit hike is challenging, typically starting from Bafi Refuge or Flampouri Refuge and climbing 600-900 vertical meters through multiple vegetation zones. You begin in dense pine and fir forests, progress through scrubland and rocky terrain, and finally reach the bare summit marked by a large metal cross and telecommunications equipment. On clear days, the view is staggering: Athens to the south, the Saronic Gulf and islands beyond, the mountains of the Peloponnese to the west, Mount Evia to the east. You can sometimes see all the way to the Aegean and Cyclades islands. Parnitha has a complex geological history, its limestone and marble strata thrust upward by tectonic forces millions of years ago. The mountain is riddled with caves—over 200 have been cataloged—and sinkholes. The slopes are crossed by hiking trails ranging from easy forest walks to technical summit climbs requiring proper equipment. A devastating wildfire in 2007 burned much of the southeastern face, but the forest has been recovering steadily, and reforested areas now mix with old-growth sections. Water is abundant by Attica standards: over 45 natural springs, the highest being Skipiza Spring at 1,200 meters, remain ice-cold even in August. Parnitha attracts serious hikers, mountain bikers, climbers, and nature lovers who want to experience genuine wilderness just 45 minutes from Syntagma Square. Bring proper hiking boots, plenty of water, snacks, and weather-appropriate clothing—conditions change rapidly, and the summit can be windy and cold even when Athens swelters below. Parnitha is where urban Athenians remember that Greece is still a land of mountains, forests, and wild places—where the ancient Greek reverence for nature still makes perfect sense.",
        "quiz": {
            "question": "What makes Mount Parnitha ecologically significant?",
            "options": [
                "It's a National Park and Attica's highest peak (1,413m) with dense fir forests, red deer, wolves, 800+ plant species, and 200+ caves",
                "It's completely flat with no vegetation",
                "It's an active volcano that erupts monthly",
                "It's entirely underwater"
            ],
            "answer": 0,
            "feedback": "Correct! Parnitha is Attica's only National Park, offering wilderness with conifer forests, large mammals including reintroduced wolves, extensive biodiversity, and challenging summit hikes."
        },
        "reward": {
            "title": "Free overnight stay at Bafi Mountain Refuge",
            "provider": "Hellenic Mountaineering Club",
            "codeHash": "3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b"
        },
        "id": 301
    },
    {
        "name": "Mount Penteli Summit (1,109m)",
        "lat": 38.0731,
        "lng": 23.8785,
        "image": "images/penteli_summit.jpg",
        "description": "Famous for its ancient marble quarries that built the Parthenon, this forested 1,109m mountain offers historic and scenic hiking trails with panoramic Athens views.",
        "audioText": "You are standing atop Mount Penteli, the mountain that quite literally built classical Athens. At 1,109 meters, Penteli may not be the highest peak in Attica, but it is arguably the most historically significant. The marble quarried from these slopes over 2,400 years ago became the Parthenon, the Erechtheion, the propylaea of the Acropolis, countless temples, theaters, and monuments across the ancient Greek world. That luminous white stone with its characteristic faint golden hue caused by iron traces—Pentelic marble—is one of the finest architectural stones ever quarried, prized for its beauty, durability, and how it catches and reflects light. From the summit, on a clear day, you can see Athens sprawling below, the Aegean Sea to the east, Mount Parnitha to the northwest, and Mount Hymettus to the south. The view encompasses virtually the entire Attic plain, making it clear why ancient Greeks considered mountains sacred—up here, you feel closer to the gods. The mountain itself is densely forested on its lower and middle slopes with Aleppo pines and Greek firs, providing shade and cooler temperatures even in summer. These forests are crisscrossed with hiking trails of varying difficulty. The most popular routes start from the 17th-century Penteli Monastery on the western slope, climbing through forest to the ancient quarry zones, then continuing to the summit. The quarries themselves are extraordinary. You can walk among vast exposed rock faces bearing the marks of ancient tools—chisels, wedges, even the grooves where ropes guided massive blocks down the mountain. Some column drums and architectural elements remain half-extracted, abandoned when the work was deemed flawed or when demand shifted. These abandoned stones are frozen moments in ancient industry, offering insights into Greek engineering and craftsmanship. The main quarries produced marble from the 6th century BC through the Roman period, employing hundreds of skilled workers and slaves. The geologist Marinos and archaeologist Korres have identified the specific sections that supplied the Parthenon's marble. The mountain was also associated with the god Pan and the nymphs; ancient texts mention sanctuaries and sacred caves dedicated to these deities. Today, Penteli is a popular escape for hikers, trail runners, and mountain bikers. The trails offer forest walks, historical exploration, and physical challenge. The upper slopes are more exposed and rocky, with scrub vegetation and Mediterranean wildflowers. Several waterfalls—including the Rapentosa and Valanaris falls—flow seasonally after rainfall, cascading through ravines on the northern slopes. Penteli Monastery itself is worth visiting: a functioning monastery with beautiful frescoes, a peaceful courtyard, and a small museum. The monks welcome respectful visitors. Combine a hike with a visit here, or explore the nearby Davelis Cave. Penteli is where history and nature intertwine—every step on these trails passes over rock that may have yielded the marble for the civilization's greatest architectural achievements.",
        "quiz": {
            "question": "Why is Mount Penteli historically essential to ancient Athens?",
            "options": [
                "Its quarries produced Pentelic marble that built the Parthenon and Acropolis monuments, visible today with ancient tool marks",
                "It was the first mountain ever climbed by humans",
                "It's where the Olympic Games were invented",
                "It's an extinct volcano from 50 million years ago"
            ],
            "answer": 0,
            "feedback": "Correct! Penteli's marble quarries supplied the luminous white stone for the Parthenon and major ancient monuments; the 1,109m mountain still shows extraction sites and abandoned blocks."
        },
        "reward": {
            "title": "Penteli Monastery visit + marble museum entry",
            "provider": "Holy Monastery of Penteli",
            "codeHash": "4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c"
        },
        "id": 302
    },
    {
        "name": "Mount Hymettus Summit (1,026m)",
        "lat": 37.9531,
        "lng": 23.8372,
        "image": "images/hymettus_summit.jpg",
        "description": "The closest major mountain to Athens, Hymettus offers accessible hiking, spectacular sunset city views, and the famous Hymettus honey from wild thyme and herbs.",
        "audioText": "Welcome to Mount Hymettus, the mountain that watches over Athens from the east, its ridge line a familiar silhouette to anyone who's spent time in the Greek capital. Rising to 1,026 meters at its highest point, Hymettus is not as tall as Parnitha or as historically laden as Penteli, but it is the most intimately connected to Athens—the mountain you see every day, the mountain ancient Athenians saw when they looked east from the Agora. Hymettus is known above all for two things: its honey and its sunsets. Since ancient times, the mountain's wild thyme, sage, and herbs have produced Hymettus honey—golden, fragrant, and legendary. The Greek poet Pindar called it 'the sweet hymettian flow,' and Plato, whose Academy stood at the mountain's western foot, surely tasted it. Modern beekeepers still harvest honey here, sold in Athens markets and considered among Greece's finest. As for sunsets, this is Athens' classic viewpoint: hike up in late afternoon, reach the summit or one of the many scenic overlooks, and watch the sun descend over the Saronic Gulf, Piraeus, Salamis island, and the Peloponnese beyond, casting the city below in gold and rose. The mountain's character is different from its neighbors. Hymettus is drier, more rugged, with less dense forest and more scrubland and exposed rock. The vegetation is typically Mediterranean: low bushes, wild herbs, phrygana scrub, and scattered pines. In spring, wildflowers carpet the slopes—poppies, orchids, crocuses, anemones. The mountain is limestone, riddled with small caves and sinkholes. Ancient myths placed nymphs and the god Pan here, and locals still tell stories of strange sounds echoing from the rocks. The hiking trails are numerous and well-marked, ranging from easy monastery visits to challenging summit climbs. The most popular starting point is Kaisariani Monastery at the western base—an 11th-century Byzantine jewel with frescoes, a lovely courtyard, and a sacred spring. From there, trails ascend through the Kaisariani Forest, one of the few remaining wooded sections on this otherwise bare mountain. The summit can be reached from several directions, and once there, you'll find a small chapel, telecommunications equipment, and that unbeatable 360-degree view: Athens and the Aegean to the west, Mount Penteli to the north, the East Attica plain and Marathon to the northeast, the southern suburbs and Apollo Coast stretching toward Cape Sounion. Hymettus is accessible, democratic, and beloved by Athenians who jog, hike, mountain bike, or simply drive up the access roads to escape the summer heat. It's only 20 minutes from the city center, making it the perfect after-work hike or weekend escape. The mountain has strategic significance too—it was fortified at various points in history, and during WWII it witnessed resistance operations. Today it offers something equally valuable: a reminder that even Europe's most historically layered capital can find wilderness, silence, and space to breathe just by looking eastward and climbing.",
        "quiz": {
            "question": "What is Mount Hymettus most famous for in Greek culture?",
            "options": [
                "Its legendary honey from wild thyme and herbs, plus spectacular sunset city views from the closest mountain to Athens (1,026m)",
                "It's the birthplace of democracy",
                "It contains the world's largest diamond mine",
                "It's completely covered in glaciers"
            ],
            "answer": 0,
            "feedback": "Correct! Hymettus has been celebrated since ancient times for its aromatic honey and as Athens' eastern viewpoint, offering accessible hikes and stunning panoramas just 20 minutes from downtown."
        },
        "reward": {
            "title": "Jar of authentic Hymettus wild thyme honey",
            "provider": "Hymettus Beekeepers Cooperative",
            "codeHash": "5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d"
        },
        "id": 303
    },
    {
        "name": "Rapentosa Waterfall, Mount Penteli",
        "lat": 38.1095,
        "lng": 23.8991,
        "image": "images/rapentosa_waterfall.jpg",
        "description": "A seasonal waterfall and lush ravine on Penteli's northern slopes, featuring a scenic stream hike through pine forest, plane trees, and hidden natural oasis near Athens.",
        "audioText": "Welcome to Rapentosa Waterfall, one of Attica's hidden gems—a seasonal cascade tucked into a verdant ravine on the northern slopes of Mount Penteli. In a region where water is precious and landscapes often dry and rocky, discovering a flowing stream, lush vegetation, and an actual waterfall feels like finding an enchanted grove. The name 'Rapentosa' comes from the small settlement near the trailhead, itself named after the stream that flows here. This is not a massive, thundering waterfall—Greece isn't Iceland—but rather an intimate, charming cascade where water tumbles over mossy rocks into a small pool surrounded by ferns, plane trees, pines, and reeds. The magic is as much about the journey as the destination: hiking up the ravine, following the stream, smelling the damp earth and wild herbs, feeling the temperature drop as you enter the microclimate created by water and vegetation. The waterfall is seasonal, flowing strongest in winter and spring after rains, slowing to a trickle or stopping completely by late summer. Visit in March through May for the best flow and to see wildflowers carpeting the ravine—poppies, orchids, anemones, and herbs. The hike begins near the village of Rapentosa or from Stamata, following the stream valley upward. The trail is moderate in difficulty, requiring decent footwear and some scrambling over rocks, but it's accessible for most fitness levels. The path follows the stream, crossing it several times, passing under the shade of tall pines that survived the devastating 2009 fires that scarred much of Penteli's northern slopes. As you ascend, the landscape shifts from fire-damaged areas to untouched sections where the ravine's moisture and topography created a natural firebreak. These green pockets feel miraculous—nature's resilience on display. The ravine is also home to birdlife, butterflies, and occasionally foxes and hares. The sound of running water attracts wildlife and creates a peaceful acoustic backdrop that's rare near Athens. At the waterfall itself, you'll find a small clearing where hikers rest, eat snacks, and enjoy the cool air. The pool is shallow and usually quite cold—fed by snowmelt and groundwater—but refreshing for brave swimmers or those who just want to dip their feet. Local families treat Rapentosa as a nature outing destination, combining the hike with picnics in the ravine. It's a place where children can play by the stream, adults can relax under the trees, and everyone can temporarily forget that Athens is just 30 kilometers away. The waterfall also connects hikers to the broader network of Penteli trails—from here, you can continue to the summit, explore the ancient marble quarries, or loop back via different routes. Rapentosa isn't well-known outside local hiking circles, which keeps it relatively uncrowded even on weekends. It's a reminder that Attica's mountains hold surprises: waterfalls, streams, green ravines, places where the Mediterranean landscape reveals its softer, wetter side. Bring water shoes if you plan to wade the stream, pack snacks, and don't forget your camera—the combination of water, forest, and light creates photogenic scenes around every bend.",
        "quiz": {
            "question": "When is the best time to visit Rapentosa Waterfall?",
            "options": [
                "March through May when seasonal flow is strongest after rains, wildflowers bloom, and the ravine is lush and green",
                "August when it's completely dry",
                "Only in winter during snowstorms",
                "Year-round as it's an indoor attraction"
            ],
            "answer": 0,
            "feedback": "Correct! Rapentosa is a seasonal waterfall fed by winter/spring rains, offering the best experience in early spring with peak water flow, green vegetation, and wildflower displays."
        },
        "reward": {
            "title": "Penteli hiking trails map + wildflower guide",
            "provider": "Athens Hiking Club",
            "codeHash": "0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c"
        },
        "id": 304
    },
    {
        "name": "Kaisariani Forest, Mount Hymettus",
        "lat": 37.9646,
        "lng": 23.7982,
        "image": "images/kaisariani_forest.jpg",
        "description": "A peaceful pine forest on Hymettus' western slopes surrounding the 11th-century Byzantine monastery, offering shaded hiking trails and escape from Athens heat.",
        "audioText": "Welcome to Kaisariani Forest, a green oasis on the western slopes of Mount Hymettus that has provided respite, inspiration, and spiritual solace for over a thousand years. Just 5 kilometers from central Athens, this forested area surrounds the Byzantine Monastery of Kaisariani, creating a pocket of tranquility that feels worlds away from the urban sprawl below. The forest is primarily Aleppo pine mixed with cypress trees, creating dense shade and that distinctive Mediterranean pine scent that Greeks associate with mountain escapes. The name 'Kaisariani' comes from the abundant springs here—'kaisaria' in Greek refers to springs or fountains—and indeed, the area has been valued for its water since ancient times. The Romans built aqueducts to carry Kaisariani's spring water to Athens, and the Byzantines chose this spot for their monastery precisely because of the reliable water source. The forest trails are numerous and well-used, popular with joggers, hikers, and families seeking a weekend nature outing. The paths wind through the pines, past small clearings with picnic tables, along remnants of ancient and Byzantine water channels, and eventually up the mountain toward Hymettus' higher elevations. The forest provides natural air conditioning—temperatures here are typically 5-8 degrees cooler than the city below, making it a beloved summer escape. At the heart of Kaisariani Forest stands the Monastery of Kaisariani, an 11th-century Byzantine jewel. The monastery complex includes a katholikon (main church) with remarkable frescoes from the 17th century depicting biblical scenes and saints, a courtyard with a massive plane tree, a refectory, cells, and auxiliary buildings. The spring that feeds the monastery flows from a ram's head fountain, continuously providing cool, clear water. The monastery functioned until the 1960s and is now preserved as a museum and historical monument, open to visitors who can explore the church, view the frescoes, and walk the peaceful courtyard. The combination of forest and monastery creates a unique experience: nature and spirituality intertwined, a tradition that goes back to Byzantine monasticism when monks sought isolated mountain locations for contemplation. Kaisariani Forest also has ecological importance as one of the few remaining forested areas on Hymettus' otherwise rocky, scrub-covered slopes. It provides habitat for birds, small mammals, insects, and a diversity of plants. In spring, wildflowers bloom among the trees, and the forest floor comes alive with color. The historical resonance of Kaisariani extends beyond Byzantine times—during World War II and the Greek Civil War, this forest witnessed tragic events, including Nazi executions of resistance fighters. A memorial near the monastery honors those who died. Today, Kaisariani represents peaceful recreation, but the memory of darker times adds depth to its story. Visiting Kaisariani Forest is easy: accessible by car or bus from central Athens in about 20 minutes, with parking near the monastery. Combine your monastery visit with a forest walk, or use Kaisariani as a starting point for longer hikes up Hymettus toward the summit. Bring water, wear comfortable shoes, and consider visiting early morning or late afternoon to avoid crowds and enjoy the best light filtering through the pines. Kaisariani proves that even in one of Europe's most densely populated urban areas, pockets of forest, history, and serenity survive—treasured by locals and increasingly discovered by visitors who want to experience Athens beyond the ancient ruins.",
        "quiz": {
            "question": "What makes Kaisariani Forest historically and naturally significant?",
            "options": [
                "It's a pine forest on Hymettus surrounding an 11th-century Byzantine monastery with frescoes, sacred springs, and shaded trails near Athens",
                "It's the world's largest jungle with tigers",
                "It's a desert with no trees or water",
                "It's an underwater coral reef"
            ],
            "answer": 0,
            "feedback": "Correct! Kaisariani combines natural beauty (cool pine forest, ancient springs) with cultural heritage (Byzantine monastery with 17th-century frescoes) just minutes from downtown Athens."
        },
        "reward": {
            "title": "Kaisariani Monastery entry + forest trail map",
            "provider": "Byzantine Museum of Athens",
            "codeHash": "3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f"
        },
        "id": 305
    },
    {
        "name": "Goura Gorge, Mount Parnitha",
        "lat": 38.1598,
        "lng": 23.7124,
        "image": "images/goura_gorge.jpg",
        "description": "A dramatic limestone gorge on Parnitha with steep cliffs, technical hiking trails, and spectacular geological formations—adventure hiking in Athens wilderness.",
        "audioText": "Welcome to Goura Gorge, one of Mount Parnitha's most dramatic natural features—a deep limestone canyon that offers adventurous hikers a challenging and spectacular route through Attica's wildest terrain. This is not a casual stroll; Goura Gorge demands proper footwear, physical fitness, route-finding skills, and respect for the mountain's power. But for those prepared, it delivers an unforgettable wilderness experience just 40 kilometers from Athens. The gorge cuts through Parnitha's limestone bedrock, carved over millennia by water erosion and tectonic forces. The result is a narrow canyon with walls rising 50-100 meters on either side, creating a claustrophobic yet awe-inspiring passage through the mountain's heart. The gorge floor is rocky and uneven, with boulders, scree, and occasional seasonal water flow. In winter and spring, a small stream runs through the gorge; by summer, it's usually dry except in the deepest sections. Hiking Goura Gorge typically begins from one of several access points—Bafi Refuge, Flampouri, or via forest trails connecting to the gorge's upper or lower entrances. The full traverse can take 4-6 hours depending on conditions, route choices, and fitness levels. The trail follows the gorge floor, requiring occasional scrambling over boulders, navigating around obstacles, and even some basic rock-climbing moves in certain sections (though no technical gear is required for the standard route). The gorge is famous among Greek hikers for its geological beauty: layered limestone strata visible in the canyon walls, showing millions of years of deposition and uplift; fossil imprints embedded in the rock; caves and overhangs where water has dissolved the limestone; and unique rock formations sculpted by erosion. The play of light within the narrow gorge creates constantly changing scenes—shafts of sunlight penetrating the shadows, highlighting textures and colors in the stone. The gorge also supports a specialized ecosystem. The shaded, sheltered environment provides habitat for plants that can't survive on Parnitha's exposed slopes: ferns, mosses, and shade-loving wildflowers. Raptors nest on the cliff faces—you might spot rock falcons or buzzards circling overhead. The gorge's water sources attract animals: foxes, deer, wild boars, and smaller mammals use the gorge as a travel corridor through the mountain. Goura Gorge has a reputation among hikers as both beautiful and potentially dangerous. Flash floods are possible during heavy rains, especially in autumn and winter storms, when the gorge can fill rapidly with water—never enter the gorge if rain is forecast or if you see storm clouds gathering. The terrain is rough, and ankle injuries are common, so proper hiking boots are essential. Navigation can be tricky in places where the route branches or becomes obscure—bring a detailed map, GPS, or experienced companions. Cell phone coverage is limited or absent in the gorge's depths. Despite (or because of) these challenges, Goura Gorge attracts hikers seeking authentic mountain adventure. There's a satisfaction in negotiating difficult terrain, in being surrounded by vertical rock walls under a ribbon of sky, in experiencing wilderness that feels genuinely remote despite proximity to Athens. The sense of accomplishment upon emerging from the gorge—tired, dusty, exhilarated—is what mountain hiking is all about. If you're planning to hike Goura Gorge, go with experienced companions or a hiking club that knows the route, check weather forecasts, bring plenty of water and snacks, wear sturdy boots, and be prepared to turn back if conditions are unsafe. This is Parnitha at its wildest—beautiful, challenging, and demanding respect from those who venture into its depths.",
        "quiz": {
            "question": "What makes Goura Gorge a challenging hiking destination?",
            "options": [
                "It's a dramatic limestone canyon with 50-100m cliffs, requiring scrambling, route-finding skills, and caution for flash floods",
                "It's a paved road with no elevation change",
                "It's an indoor shopping mall",
                "It's a flat beach with no obstacles"
            ],
            "answer": 0,
            "feedback": "Correct! Goura Gorge is Parnitha's most technical hiking route, offering adventure through a narrow canyon with geological beauty, but requiring proper preparation and safety awareness."
        },
        "reward": {
            "title": "Advanced Parnitha hiking routes guidebook",
            "provider": "Athens Mountaineering Club",
            "codeHash": "6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c"
        },
        "id": 306
    },
    {
        "name": "Skipiza Spring, Mount Parnitha",
        "lat": 38.1672,
        "lng": 23.7163,
        "image": "images/skipiza_spring.jpg",
        "description": "The highest natural spring in Attica at 1,200m, offering ice-cold mountain water, forest setting, and a refreshing stop on Parnitha summit hikes.",
        "audioText": "Welcome to Skipiza Spring, the highest natural spring in the entire Attica region at 1,200 meters altitude on Mount Parnitha. Even in the blazing heat of August, when Athens swelters at 38 degrees Celsius, the water flowing from Skipiza remains ice-cold, crystal clear, and seemingly infinite—a gift from the mountain's deep aquifers that has sustained hikers, shepherds, and wildlife for millennia. The name 'Skipiza' has uncertain etymology, possibly related to old Greek words for 'shade' or 'shelter,' fitting given the spring's location beneath tall fir trees that provide cooling shade. The spring emerges from limestone bedrock, flowing from a simple stone fountain structure built by earlier generations of hikers to capture and direct the water. The flow is consistent year-round, fed by groundwater from Parnitha's higher elevations and by snowmelt in late winter and spring. Tasting water directly from a mountain spring is one of hiking's simple pleasures. Skipiza's water is cold enough to numb your hands, pure enough to drink without treatment (though always use your judgment), and refreshing in a way that bottled water can never match. Hikers fill their bottles here, splash their faces, sit in the shade, and appreciate the mountain's generosity. The spring is a popular waypoint on several Parnitha routes. The most common approach is the Bafi-Skipiza-Summit trail: you start from Bafi Refuge, hike through dense forest for about 1.5-2 hours, reach Skipiza for a rest and water refill, then continue the final push to Karavola summit. The spring marks the transition from forested lower slopes to the more exposed upper mountain, making it a psychological as well as physical checkpoint. The area around Skipiza is beautiful: tall Greek firs (Abies cephalonica) create a cathedral-like forest, their straight trunks rising toward the sky, their canopy filtering sunlight into soft, dappled patterns. The forest floor is carpeted with pine needles, wildflowers in spring, and the occasional mushroom in autumn. Birds are abundant—crossbills, woodpeckers, nuthatches, and various songbirds forage in the trees, and you might spot red deer tracks in soft soil near the water. The spring also has cultural resonance for Greek hikers: it appears in countless trip reports, hiking club discussions, and mountain lore. Older hikers remember when reaching Skipiza was a milestone achievement before trails were well-marked, when navigating by landmark springs was essential. Even today, with GPS and trail apps, many hikers navigate Parnitha using traditional waypoints like Skipiza, maintaining connection with the mountain's human history. From an ecological perspective, springs like Skipiza are critical for Parnitha's ecosystem. They provide water for animals—deer, foxes, boars, birds, and insects all depend on these high-altitude sources, especially in summer when lower elevations dry out. The springs also support riparian vegetation (plants that need consistent moisture) that wouldn't survive on drier slopes. Visiting Skipiza is usually part of a larger Parnitha hike rather than a standalone destination, though some people do make the shorter trek from Bafi just to reach the spring and return. Bring an empty bottle to fill, respect the site by not littering, and take a moment to appreciate that you're drinking water that has journeyed through kilometers of mountain rock, filtered naturally, and emerged cold and pure—a reminder of nature's elegance and generosity. Skipiza Spring is proof that even in the age of bottled water and convenience stores, there's something irreplaceable about cupping your hands under a mountain spring and drinking water as humans have for thousands of years.",
        "quiz": {
            "question": "What makes Skipiza Spring significant for Mount Parnitha hikers?",
            "options": [
                "It's Attica's highest spring at 1,200m, providing ice-cold pure water year-round as a crucial waypoint on summit trails",
                "It's a hot thermal spring with healing properties",
                "It's the largest waterfall in Greece",
                "It's a man-made reservoir built in 2010"
            ],
            "answer": 0,
            "feedback": "Correct! Skipiza is a legendary mountain spring offering cold, pure water at high altitude, serving as both physical refreshment and traditional waypoint for Parnitha summit hikers."
        },
        "reward": {
            "title": "Reusable Parnitha mountain water bottle",
            "provider": "Hellenic Hiking Federation",
            "codeHash": "7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d"
        },
        "id": 307
    },
    {
        "name": "Panos Cave, Mount Parnitha",
        "lat": 38.1541,
        "lng": 23.7285,
        "image": "images/panos_cave.jpg",
        "description": "A small limestone cave on Parnitha accessible by hiking trails, offering geological interest, cool shelter, and connection to ancient worship of the god Pan.",
        "audioText": "Welcome to Panos Cave, a small but historically and geologically interesting cave on Mount Parnitha that connects today's hikers with ancient Greek mythology and religion. The name 'Panos' directly references Pan, the rustic god of shepherds, flocks, and wild nature—half-man, half-goat, player of the pan flute, who dwelled in caves and remote mountains. Whether this specific cave was an actual cult site is debated by archaeologists, but the tradition persists, and the name reflects the ancient Greek practice of associating mountain caves with divine presence. Panos Cave is not a show cave like Koutouki—there's no electric lighting, no guided tours, no walkways or safety rails. This is a natural cave in its relatively undisturbed state, accessible to hikers willing to scramble a bit off the main trail. The cave entrance is roughly 2-3 meters high and leads into a chamber perhaps 15-20 meters deep. The interior is dark (bring a headlamp or flashlight), cool (the constant temperature makes it a refreshing stop on hot summer hikes), and home to cave-adapted wildlife including bats, spiders, and insects. The cave's geology is typical of Parnitha's karst landscape: limestone dissolved by slightly acidic rainwater over hundreds of thousands of years, creating cavities and passages. Panos Cave is modest compared to Parnitha's larger cave systems (the mountain has over 200 cataloged caves), but its accessibility makes it interesting for non-specialist hikers curious about cave formation and underground ecosystems. Please note that entering caves always carries risks—watch for loose rocks, slippery surfaces, sudden drops, and wildlife. Never enter alone, always tell someone where you're going, and if you're not comfortable with caves, just visiting the entrance area and imagining the ancient context is rewarding enough. Ancient Greeks viewed caves as liminal spaces—thresholds between the world of humans and the divine. Caves were associated with gods (Pan, the nymphs, Dionysus), used as sanctuaries, and featured in myths as entrances to the underworld. Shepherds would leave small offerings at cave entrances, seeking Pan's protection for their flocks. The god Pan himself was believed to cause 'panic'—that sudden, irrational fear one might feel in wild, isolated places, especially in the eerie quiet of mountain forests. Standing at Panos Cave, it's easy to imagine ancient shepherds experiencing that same mix of awe and unease that mountains still inspire. The cave is accessed via hiking trails from several directions—Bafi Refuge, other Parnitha trailheads—and is sometimes incorporated into loop hikes that include other landmarks like Skipiza Spring or the summit. The cave's location offers nice views across Parnitha's forested slopes when you emerge back into daylight. From an ecological standpoint, caves like Panos provide critical habitat for bats, which are important for pest control and pollination in Parnitha's ecosystem. Greek bat species include the Mediterranean horseshoe bat and several mouse-eared bats, some of which roost in mountain caves. Please don't disturb bats if you see them—they're protected and sensitive to human disturbance. Visiting Panos Cave adds a layer of mythology and exploration to a Parnitha hike. It's a chance to engage with the mountain not just as scenic backdrop but as a place with deep cultural history, where ancient beliefs and natural wonders intersected. Whether you're interested in geology, mythology, history, or just curious about what's inside a mountain cave, Panos offers a tangible connection to Greece's layered past. And as you hike back down through Parnitha's fir forests, perhaps you'll understand why ancient Greeks believed that gods still walked these mountains, that nature was alive with divine presence, and that a cave was not just geology but a doorway to mystery.",
        "quiz": {
            "question": "What mythological significance does Panos Cave have?",
            "options": [
                "It's named after the god Pan and reflects ancient Greek beliefs in caves as sacred spaces where gods like Pan dwelled",
                "It was the home of Zeus and Hera",
                "It's where the Olympic Games were first held",
                "It's a modern cave discovered in 2025"
            ],
            "answer": 0,
            "feedback": "Correct! Panos Cave connects to ancient worship of Pan, the rustic god of wild nature, reflecting Greek beliefs that mountain caves were liminal spaces between human and divine realms."
        },
        "reward": {
            "title": "Greek mythology and nature guidebook",
            "provider": "Hellenic Speleological Society",
            "codeHash": "8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e"
        },
        "id": 308
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
let voicesLoaded = false;

// Load voices for speech synthesis (required for some browsers)
function loadVoices() {
    return new Promise((resolve) => {
        const voices = synth.getVoices();
        if (voices.length > 0) {
            voicesLoaded = true;
            resolve(voices);
        } else {
            synth.onvoiceschanged = () => {
                voicesLoaded = true;
                resolve(synth.getVoices());
            };
        }
    });
}

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
    
    // Load speech synthesis voices (required for text-to-speech)
    loadVoices();
    openSharedPOI();
    window.addEventListener("hashchange", openSharedPOI);

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .catch(() => {
                // Service Worker registration failed - app will still work without offline support
            });
    }
});

// --- User Data Persistence ---
function loadUserData() {
    const saved = localStorage.getItem("echoes_greece_user");
    if (saved) {
        try {
            userStats = JSON.parse(saved);
        } catch (e) {
            console.error("Error reading storage:", e);
            // Reset to default if corrupted
            userStats = { points: 0, explored: [], rewards: [] };
        }
    }
}

// Save to local storage
function saveUserData() {
    try {
        localStorage.setItem("echoes_greece_user", JSON.stringify(userStats));
        updateDashboardStats();
    } catch (e) {
        console.error("Error saving user data:", e);
        // Silently fail - may be quota exceeded or private browsing
    }
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
                setTimeout(() => map.invalidateSize(), CONFIG.MAP_RESIZE_DELAY);
            }
        });
    });
}

// --- Leaflet Map Controller ---
function initMap() {
    try {
        // Map setup centered at Athens historical center
        map = L.map('map-container', {
            zoomControl: false,
            attributionControl: false
        }).setView(CONFIG.DEFAULT_MAP_CENTER, CONFIG.DEFAULT_MAP_ZOOM);

        // OpenStreetMap tiles (reliable and free)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
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

        const popupContent = document.createElement("div");
        popupContent.className = "map-popup";

        const h4 = document.createElement("h4");
        h4.textContent = poi.name;
        popupContent.appendChild(h4);

        const p = document.createElement("p");
        p.textContent = "Click details to explore the stories.";
        popupContent.appendChild(p);

        const button = document.createElement("button");
        button.textContent = "Open Story";
        button.addEventListener("click", () => {
            triggerPOIById(poi.id);
        });
        popupContent.appendChild(button);

        marker.bindPopup(popupContent);

        poiMarkers.push({ id: poi.id, marker: marker });
    });

    // Map tap handler for simulation mode
    map.on('click', (e) => {
        if (isSimulatedMode) {
            updateUserLocation(e.latlng.lat, e.latlng.lng);
        }
    });
    } catch (e) {
        console.error("Error initializing map:", e);
        alert("Failed to load the map. Please refresh the page or try a different browser.");
    }
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
            map.setView([userLocation.lat, userLocation.lng], CONFIG.POI_DETAIL_ZOOM);
        }
    });
}

let watchId = null;
function startRealGeolocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser. Reverting to Simulation Mode.");
        const toggle = document.getElementById("gps-toggle");
        if (toggle) toggle.click();
        return;
    }

    const options = { enableHighAccuracy: true, timeout: CONFIG.GPS_HIGH_ACCURACY_TIMEOUT, maximumAge: 0 };

    function success(position) {
        try {
            updateUserLocation(position.coords.latitude, position.coords.longitude);
        } catch (e) {
            console.error("Error updating location:", e);
        }
    }

    function error(err) {
        console.warn("High accuracy GPS failed:", err);
        if (options.enableHighAccuracy) {
            // Fall back to low accuracy (Wi-Fi/IP location) which is fast and works indoors/on desktop
            options.enableHighAccuracy = false;
            options.timeout = CONFIG.GPS_LOW_ACCURACY_TIMEOUT;
            try {
                if (watchId) navigator.geolocation.clearWatch(watchId);
                watchId = navigator.geolocation.watchPosition(success, finalError, options);
            } catch (e) {
                console.error("Error setting up fallback geolocation:", e);
                finalError(err);
            }
        } else {
            finalError(err);
        }
    }

    function finalError(err) {
        console.error("Final Geolocation Error:", err);
        alert("Unable to retrieve GPS location. Reverting to Simulation Mode.");
        const toggle = document.getElementById("gps-toggle");
        if (toggle) toggle.click();
    }

    try {
        watchId = navigator.geolocation.watchPosition(success, error, options);
    } catch (e) {
        console.error("Error starting geolocation:", e);
        finalError(e);
    }
}

function updateUserLocation(lat, lng) {
    userLocation = { lat, lng };
    userMarker.setLatLng([lat, lng]);

    if (shouldPanToUser) {
        map.setView([lat, lng], CONFIG.POI_DETAIL_ZOOM);
        shouldPanToUser = false;
    }

    // Check distances to POIs
    let anyInRange = false;
    POIs.forEach(poi => {
        const distance = calculateDistance(lat, lng, poi.lat, poi.lng);
        if (distance < CONFIG.POI_TRIGGER_DISTANCE_METERS) {
            anyInRange = true;
            triggerPOI(poi);
        }
    });
    
    // Clear active POI if we walked out of range, so it can be re-triggered later
    if (!anyInRange) {
        activePOI = null;
    }
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

    const shareBtn = document.getElementById("share-poi-btn");
    if (shareBtn) {
        shareBtn.addEventListener("click", shareCurrentPOI);
    }

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

function parseSharedPoiId() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.has("poi")) {
            const n = parseInt(params.get("poi"), 10);
            if (Number.isInteger(n)) return n;
        }
        const hash = (window.location.hash || "").replace(/^#/, "");
        const match = hash.match(/^poi[=-]?(\d+)$/i);
        if (match) return parseInt(match[1], 10);
    } catch (e) {
        console.error("Error parsing shared POI:", e);
    }
    return null;
}

function openSharedPOI() {
    const id = parseSharedPoiId();
    if (id === null) return;
    const poi = POIs.find(p => p.id === id);
    if (!poi) return;
    activePOI = null;
    if (map) {
        map.setView([poi.lat, poi.lng], CONFIG.POI_DETAIL_ZOOM);
    }
    triggerPOI(poi);
}

function shareCurrentPOI() {
    if (!activePOI) return;
    const shareUrl = new URL(window.location.href);
    shareUrl.search = "?poi=" + activePOI.id;
    shareUrl.hash = "";
    const payload = {
        title: activePOI.name + " | Echoes of Athens",
        text: activePOI.description || "A stop on the free Attica audio guide.",
        url: shareUrl.toString()
    };
    if (navigator.share) {
        navigator.share(payload).catch(() => {});
        return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(payload.url).then(() => {
            alert("Link copied. Share it with a friend.");
        }).catch(() => {
            prompt("Copy this link:", payload.url);
        });
        return;
    }
    prompt("Copy this link:", payload.url);
}

function triggerPOI(poi) {
    if (activePOI && activePOI.id === poi.id) {
        // We already triggered this POI recently, do nothing to avoid annoying repeated popups.
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
        drawerImg.onerror = function() {
            // Fallback to placeholder if image fails to load
            this.src = 'images/placeholder.png';
            this.onerror = null; // Prevent infinite loop
        };
        drawerImg.classList.remove("hidden");
    } else {
        drawerImg.src = 'images/placeholder.png';
        drawerImg.classList.remove("hidden");
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
async function playAudio() {
    if (!activePOI) return;

    try {
        isAudioPlaying = true;
        document.getElementById("audio-viz").classList.add("playing");
        document.getElementById("play-icon").classList.add("hidden");
        document.getElementById("pause-icon").classList.remove("hidden");
        
        // Check if speech synthesis is available
        if (!window.speechSynthesis) {
            alert("Text-to-speech is not supported in your browser. Please try Chrome, Safari, or Edge.");
            stopAudio();
            return;
        }
        
        // Wait for voices to load (critical for Chrome and other browsers)
        if (!voicesLoaded) {
            await loadVoices();
        }
        
        // Reset Speech synthesis
        synth.cancel();
        
        // Preprocess text to expand years, numbers, and abbreviations
        const cleanText = preprocessAudioText(activePOI.audioText);
        utterance = new SpeechSynthesisUtterance(cleanText);
        
        // Force English language tag so browsers default to English TTS engine
        utterance.lang = 'en-US';
        utterance.rate = CONFIG.AUDIO_SPEECH_RATE; // Steady, cinematic guide tempo
        
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

        utterance.onerror = (event) => {
            console.error("Speech synthesis error:", event);
            stopAudio();
            // Only alert for non-canceled errors
            if (event.error !== 'canceled' && event.error !== 'interrupted') {
                alert("Audio playback failed. Please try again.");
            }
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
        }, CONFIG.AUDIO_UPDATE_INTERVAL);
    } catch (e) {
        console.error("Error in playAudio:", e);
        isAudioPlaying = false;
        stopAudio();
        alert("Unable to start audio narration.");
    }
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
    optionsDiv.replaceChildren();

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
                
                // Re-enable options after delay to retry
                setTimeout(() => {
                    allBtns.forEach(b => b.disabled = false);
                    btn.classList.remove("incorrect");
                    feedbackDiv.classList.add("hidden");
                }, CONFIG.QUIZ_FEEDBACK_DELAY);
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
        codeHash: poi.reward.codeHash
    });
    
    userStats.points += CONFIG.QUIZ_CORRECT_POINTS; // Extra XP for correct quiz
    saveUserData();
    renderRewardsTab();
}

// --- Dashboard Stats renderers ---
function renderPOIList() {
    const list = document.getElementById("poi-list-container");
    list.replaceChildren();

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

        if (poi.image) {
            const img = document.createElement("img");
            img.className = "poi-card-thumb";
            img.src = poi.image;
            img.alt = poi.name;
            img.onerror = function() {
                this.src = 'images/placeholder.png';
                this.onerror = null;
            };
            card.appendChild(img);
        } else {
            const img = document.createElement("img");
            img.className = "poi-card-thumb";
            img.src = 'images/placeholder.png';
            img.alt = poi.name;
            card.appendChild(img);
        }

        const infoDiv = document.createElement("div");
        infoDiv.className = "poi-card-info";

        const h4 = document.createElement("h4");
        h4.textContent = poi.name;
        infoDiv.appendChild(h4);

        const p = document.createElement("p");
        p.textContent = `${poi.description.substring(0, CONFIG.POI_DESCRIPTION_MAX_LENGTH)}...`;
        infoDiv.appendChild(p);

        card.appendChild(infoDiv);

        const statusDiv = document.createElement("div");
        statusDiv.className = "poi-card-status";
        statusDiv.textContent = statusIcon;
        card.appendChild(statusDiv);

        list.appendChild(card);
    });
}

function renderRewardsTab() {
    const container = document.getElementById("coupons-list-container");
    container.replaceChildren();

    POIs.forEach(poi => {
        const unlockedReward = userStats.rewards.find(r => r.poiId === poi.id);
        const card = document.createElement("div");
        
        const infoDiv = document.createElement("div");
        infoDiv.className = "coupon-info";

        const h4 = document.createElement("h4");
        infoDiv.appendChild(h4);

        const p = document.createElement("p");
        infoDiv.appendChild(p);

        card.appendChild(infoDiv);

        if (unlockedReward) {
            card.className = "coupon-card unlocked";
            h4.textContent = poi.reward.title;
            p.textContent = `🎫 At ${poi.reward.provider}`;

            const codeDiv = document.createElement("div");
            codeDiv.className = "coupon-code";
            const hashVal = poi.reward.codeHash || unlockedReward.codeHash || "";
            codeDiv.textContent = hashVal ? `Hash: ${hashVal.substring(0, 8)}...` : "N/A";
            card.appendChild(codeDiv);
        } else {
            card.className = "coupon-card";
            h4.textContent = `${poi.name} Reward`;
            p.textContent = "Solve the quiz at the site to unlock this voucher.";

            const lockedDiv = document.createElement("div");
            lockedDiv.className = "coupon-locked-badge";
            lockedDiv.textContent = "🔒 Locked";
            card.appendChild(lockedDiv);
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

// --- Cleanup Function (prevent memory leaks) ---
function cleanup() {
    // Stop geolocation watch
    if (watchId !== null) {
        try {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        } catch (e) {
            console.error("Error clearing geolocation watch:", e);
        }
    }
    
    // Stop any playing audio
    try {
        stopAudio();
    } catch (e) {
        console.error("Error stopping audio:", e);
    }
    
    // Save user data one last time
    try {
        saveUserData();
    } catch (e) {
        console.error("Error saving data on cleanup:", e);
    }
}

// Register cleanup on page unload
window.addEventListener('beforeunload', cleanup);

// Also cleanup on visibility change (mobile browsers)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        try {
            saveUserData();
        } catch (e) {
            console.error("Error saving on visibility change:", e);
        }
    }
});
