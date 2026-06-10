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
            "codeHash": "a3e398d2b6f297275725fa3ae919d52fbb23ab9e19cf29b8dcad149a22b08f0b"
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
            "codeHash": "b20ed49c7a707eb2f0034188c55dde05cffe9ee84b9f47dcc2449bef17a666d7"
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
            "codeHash": "91542a1a6240fc56ce3781df786d6353f35bc0302a385096e069004f209e3f8f"
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
            "codeHash": "53dda29b79cc283f4cc5dba6a70359cced95e134f3777b69c93b080315f1119e"
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
            "codeHash": "d21500895b057acaa689cce08cc5d8669c1f1756ecd059b56ae491967922d396"
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
            "codeHash": "49fafd875d11c072544c78c811922f8f82fbca20f99e96daae73b6c7e74b272c"
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
            "codeHash": "2f9e1978d9bb5054addc9f7142c91236eaf150a233ea0d1cb975236335f56eba"
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
            "codeHash": "fd7ae9a11ed23646be4d5395dc49ee9bd1ce455fc659e2397083fd643b8a66b6"
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
            "codeHash": "6b7dd086a7008927859b6346f46e0c5c1f49b57f8687fac75d08972d8f7ee7a6"
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
            "codeHash": "1338d7d1579acfe7dccbd223d2816d30cbdf82f1f72766dcb003229213162dd6"
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
            "codeHash": "1fe472cdfcff44619a17c6fe3d193ba79932d5433d559c521170b920047ca7c2"
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
            "codeHash": "63ea561db03cfe3d191f23db5b61de96c2814e2ddbb9321ef2b98ced6d216e91"
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
            "codeHash": "e47528ea692f22fd974ac5bc319849f0d29b2d3a5e1c8fb26fe167fb8e3fcf6c"
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
            "codeHash": "09f3089650febb1c352bd7996c584d9224daf72a7ed9f9ebfac598ebc40a8659"
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
            "codeHash": "fd2d9e59599071791e32d195e210e9ce836520fa7a41a0bc70ee124b249d819f"
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
            "codeHash": "1b5e17a61f13ee9d0706a619749b142e27e10f4440c1f7503a3d2c6c3f19086c"
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
            "codeHash": "36d9a065af638ae4fc68fea587016a3dbe806c416fef6f7119e4f3f062f2c61d"
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
            "codeHash": "c81c5560fa9c416d6f86644be74fbb8b35cf180dae89a1849fd90bae1730f0d8"
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
            "codeHash": "556568fa71af5492b4447d77e48f168e21415909d4e7958991e5bbe5881fbc02"
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
            "codeHash": "e7e73197fa1f323723e07710f5717eda3da2f40cac2b478ab9917811909b904f"
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
            "codeHash": "69cf2edbf360072bd36b5fa60360a3cf8714b76417867456959b68bfabca7941"
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
            "codeHash": "e99911134e911e0a620a5c818f4188f73c57f90bd28b0e8a3b31ea41e325781e"
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
            "codeHash": "6a9f15a95b112fa00b72278fc218891e92b08b2b88576fd26ba85cc65a09ed4a"
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
            "codeHash": "a509b45b04080d528be4e77734132064adb31bccae74be659756de8dfe9f82cd"
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
            "codeHash": "c0141808aad2e78b5fc7f01682945c456747348aa1c31de62f0a0c8a45b2f432"
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
            "codeHash": "53d93bf8fe4aaee2bf8c7ef4ef9d9f44d463c25f8d8d64ce6ee7a9d236e2d81a"
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
            "codeHash": "ba30aafe5badf3d9759c0dac9b9db7b60e54b40f0c7b219d872bd0a0a4f3fd8a"
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
            "codeHash": "4cdf4a850d51f3c314fcb2a5af3c85e0e9e25753746c1afa1fa65b9691aba20c"
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
            "codeHash": "dd556a8b8d40b2112e314769f3b28c63faeb5e4834037ace0dce72b21b8ff8cc"
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
            "codeHash": "97e144515dfe7ab5ee107ee4200ee3d8b0b92537dfef9825ab4b8b0de4d90022"
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
            "codeHash": "f8d21e76a3a92d1c144c6ec9be7be59a8fd1161fe6b9d3b7d01f36994a0b2579"
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
            "codeHash": "fb735bd9f4f302cce0e8dc560dde549f3b88bedb6328d360d0165fb8ba4b90b4"
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
            "codeHash": "2693895237926577d31d4bb9e26b2145e5ebe0d4ce329b00ad6eff103f6abe90"
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
            "codeHash": "d8bdc2d8a3f80f6bbbfe1a295814036457b40bf32e025e78238624ec22dcab69"
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
            "codeHash": "8782351b6beb8f218d359ed993d2726e6da4327da69d06a850e36792f0130480"
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
            "codeHash": "506624712e79eb0b6fa13dec49143aeee67a54baf1f6e01bd08fe3066afcce5b"
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
            "codeHash": "9196425a4b01f5195bd6c701815d127594d6b493e6936a113cc9eb95972f3917"
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
            "codeHash": "002ed84ca669f31136230ea8eb079f4f79c44e2df0a3b3f12772e2b4d1daf7c9"
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
            "codeHash": "f265dc443a69248f4c55521fe22ef259b22cdae8d5d727cea555003130ca0f80"
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
            "codeHash": "36802436e30fc36e011f7879315a375dbabf163a3b88e418ea282edb735af273"
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
            "codeHash": "3200f17c3d049aabb60fc9896967772ce219c2108c2d5301780ebfaab69f1303"
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
            "codeHash": "a70d5961c6c9d414f9286e14f2ed62b3bc24464e3434f8a8db1f5fd6f533815d"
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
            "codeHash": "900b6a9569d78901d541bcc46241a941a467903f6b1bb011be7f091a23267f36"
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
            "codeHash": "308838e0c91f3f7f06b3f410342fdba2bdb63b6c5e02fd6d538837196e2f84cf"
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
            "codeHash": "74df928a72e72501155015587d3d9ddc034af941dee36dce822211d7aa7aaa50"
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
            "codeHash": "f509b20af401682192f608ca494fa7dc92558d92bb287411ec474b9f8b414198"
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
            "codeHash": "2194f911398255647072e504a08cc927ba71e244c5cbc520c48afe4c65af6064"
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
            "codeHash": "ed3b0e45b96a0de2c3c9d1e2a9030d4d572c578cb0e6179d494fbc44890aad89"
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
            "codeHash": "b2ce7b14e60dc715728b170a05ad71da9b978c4bc20fc9fe09688afbf2d4eaf0"
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
            "codeHash": "1fd4fd4a2692d3fa2da1532414fd1c4d5ed246c4a5d94778812ba7ecf3381361"
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
            "codeHash": "5f63cc5dde64fd120ecce654e4080e59dbe55d1acd7cc19f32fdaedc5f6fe979"
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
            "codeHash": "7828ecec87d75f6c00ebc73fdd69ddba6b10af27c6e74a1b9df5efa5c62a919c"
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
            "codeHash": "002e9c6f23904201aa77a0b138b97bfe14ddd1405c9820855087f6f211f8b3f3"
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
            "codeHash": "5bdc693ff0bd8fb3cbb6fe63bf8717ca92378db4acc9838c4ccf4a861b805248"
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
            "codeHash": "27d4d22e9840f3f8635496e0aa8e447e11e912ae740722d39f34be8b091262a9"
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
            "codeHash": "a53be4c7367dd37e1f8defb8e2219d688bc9bdda7803114b76923b3c9bbab434"
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
            "codeHash": "da2c4a5020cc6f699484e03f543c129a9e4404926d192e4e4ee8497c56830c97"
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
            "codeHash": "58f351aeb83ac25e3d6d246e9b115486820537a454704b76d20567e53246fe16"
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
            "codeHash": "ba1f93880403c45b16a927583818fd40b22a3e764f20d9f765ba201f0a4993d9"
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
            "codeHash": "b9d4fa031013def6f30ae7dd43ff45b5a870cfeb4d4e05f412ddb87358303d4c"
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
            "codeHash": "8537da1329df78be616d22aa828097fb82b873dc22b16e848276c23c847ea746"
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
            "codeHash": "dab45d150fc2d019abc496f08e130895153ff2b2fe21b5a59ec17f62ae6d1d7d"
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
            "codeHash": "ed740445e63fc1785d7ae08e09b7b1aed4a76553b77a10b47c71279c5466d2b0"
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
            "codeHash": "cf84456fd74be705fb7f4e60b515b9ea7122b56359eb9c1b61f1510501f4a1a8"
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
            "codeHash": "8b561aa691955c44229c5815ea44ac6bc21d34f9cb16b374c35195d227693b76"
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
            "codeHash": "2b9ed13db705a280cbcf2840365dc575a66b8ad6b67b2faf2c456266230188b9"
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
            "codeHash": "aa260a8fe78212f2d9c78a7df52b483dec76fa949b4a4af55bf58bd0f0a6dddf"
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
            "codeHash": "cd65af9e1099c804a44186990329c23f1d0815269b26a241d564aebd3fba6581"
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
            "codeHash": "386c11ffd59f8918c94b2663224afb7dfbb2ee94afd0d90b23d8ff080e33a51d"
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
            "codeHash": "5978cbd20befb65bc4d3bfe36b364e0369e6672b8409ce47487703d5c3657039"
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
            "codeHash": "67e57ff6b7498562a824047a163c458824b44d27c4065a96372e54484f6d9472"
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
            "codeHash": "fcc4c5649b7b47ec745157bb41b168e43bc914921bfd500de8c74abbb17798d4"
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
            "codeHash": "1406cdc7ad5ea08fb084bdb3376bb5b377f82b6546f371d3d9ed60fdd1e13362"
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
            "codeHash": "666d7321bae4a95679f99932530e9ced069cc38d38f6f9a83ad9e2049658f9a2"
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
            "codeHash": "608da01b4369bfbf0fb580718168db78dd77abd4c1afb173022166351c6fe3b5"
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
            "codeHash": "caa12196a0c6251656f1e8076c4985890b9ab630b12fa98475f6c3a3dabbd7a9"
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
            "codeHash": "5358ce7211f3c9ada368587cb85d0568158adb0029734c445c7ad4752b74f62b"
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
            "codeHash": "9f237196784dfc375b99259919cf4ac7afa90ed25e54f19dd41829e008cee2c5"
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
            "codeHash": "933b9a5593134c2980e19ee0a6558be820c276155cea4c38989eb144c572082e"
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
            "codeHash": "6afcdd12c4f098b9b2544af2a3893f37bf07eeac0d32122f023911aa6468bb73"
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
            "codeHash": "3dd469d4e34cfd2dba6f7e5bc1473965472fd5a20a91c149e98c2d6cd9d36cb6"
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
            "codeHash": "8e790367e50cfa1154588b076d66899093677ad07653be6067013b33b7c501a9"
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
            "codeHash": "60a66a09624872fd5a965822a55546d188406d4854e2daf7903ef5087f4badc7"
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
            "codeHash": "cbd8ab87f1f8f384ebe08848eeb55dea968df4affec706cdff680d1e147332c9"
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
            "codeHash": "221341c384728150771ac245202e237a38ad54b30cf75d66358c40b56e08ae5d"
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
            "codeHash": "e21e9b2331d8e42d54f83b17edd9c9944758588e4acea56852ec77a24c3d6498"
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
            "codeHash": "6756a0f3090dc0e45208130088c5742d17fca63ca817447ccacbb07b048c3726"
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
            "codeHash": "b69e587dc086d14560b0352e829fb2bf0ca1b2913058f50297fca784178b9d21"
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
            "codeHash": "8b9b1f9c851641f7f4dccdb41f4bfb44e3499dc5e4266f9fe236ee078333bfc9"
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
            "codeHash": "c539ecb65587389e74bd1d9bddc4203d2a5e99b5e9c8cbdada2d92dc74cc84a5"
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
            "codeHash": "fe234a8f2efd80bd3a809248ddf2586324d48d1caa03c8b832271ac5a47915a3"
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
            "codeHash": "45ea3c923b9d47ac6e085b5daaf887564e919046c14daf488afaf4f87bfd2cb4"
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
            "codeHash": "0733cd7b024984f42ea2c5c9b36e45f631cb7b752dae3f2f3af91512b5a4b7d7"
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
            "codeHash": "c65f8710893f7ab0a4c5d252d32f3c18f1da01fc57bba4ff2c1a8e8a8d8397c4"
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
            "codeHash": "9380f155b0f3b91f233b3879a5221d6fe1f0b0f3e5249c71cfec59f2ab2e5a82"
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
            "codeHash": "dea5af24912c7e6384c9875f0240717ece6600fa8106417b3cc8c583af09f841"
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
            "codeHash": "2de88d599f481f93c42e62eb33d93c969bd42e6420f128e7e1fce4bf6d9d4ca1"
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
            "codeHash": "f4aec251fac32d52581da79a1936828dc1f6e514be8e25adb7db12a82b3d97ba"
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
            "codeHash": "1d0ef4414dab6e978e54a7cbf6ac263e6a8eb7e12769f29d5b378b52c33b7e3e"
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
            "codeHash": "4e018f77dba78387b136cb72a77d3b98bd96ea648c958b046327c25e5c0ca6cf"
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
            "codeHash": "da56d753030f270741624b735336f2954ba2165c6a58d884a08375e211f093ed"
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
            "codeHash": "bb83ffcee32384712090107cc259a9cd38ff5adc5242941cdaee6b82d7c2e4f9"
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
            "codeHash": "7c57e7bd427e36107f3d7763acc38956ee9b1c78b5ca3d1b88e756574873284e"
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
            "codeHash": "3b7bd13abad6abd118385c7e45127d401c06361ea7111908e70244831e2543d8"
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
            "codeHash": "64b070e305d525eddf45c36e8073b12c135db6573579ca97a056dee5d8b0c09b"
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
            "codeHash": "19cc43d5996c342395463c007bffa6352d2ed95841f8f155a56b8e4b5bc4927e"
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
            "codeHash": "883fac0ab62d11704b7d2274ce4ce540272048009d4539630443e1421a4aabc8"
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
            "codeHash": "d054e7f749975850dfc20bf9818fdaf5326ed38e5f3eed0497a070f872a586cb"
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
            "codeHash": "69c6ad746b142494540dc8c88a78ef900c0a619530f593170f1a29d82392e99c"
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
            "codeHash": "4b4ddb424fd1414f5174188d414f406c0ab61f5d5a632df7ac374034f65623e6"
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
            "codeHash": "05ca9534a46e28c9959170de3974683b348c5df4396ab60da66e269021eacab8"
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
            "codeHash": "f4ece7d37baa0702eb65abf5e3adf5e63e758827543fb04c4c079a09e2b139b2"
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
            "codeHash": "38184c5564a7b26ceb20189d6bf3975fb81cdf933e8ccaebe9d6097ac29f1a62"
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
            "codeHash": "e0109d2d4f96ec351c46fcc885f3b1de5babd65b9b25ff7671c82b84f2740377"
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
            "codeHash": "802b866f777f26c7112d8caa2781d66c32b98c2eabc022fe5b9cd106473d79e1"
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
            "codeHash": "c71f7a9868bb38d818281d3065a60f73c1f96018e9a2578dac3f86de48852ba0"
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
            "codeHash": "c4f1ff08bb36a4a8054f68f0d07e021c7359a9edc17b54ccaef421cf7847f72e"
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
            "codeHash": "020caff11614df9e47295f3f9eb57e82f03aa5fbd7555e316785e2bdf95ed448"
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
            "codeHash": "334808e4b8801bd379b99a78d232cf07a76e34faf90c3eda3bcb34cb7439fb53"
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
            "codeHash": "7016dbf1e2c1dfec97e4c3ddfe7cb6755c40f8283bc9a6c4c38da1ea416e8e06"
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
            "codeHash": "16cd0aae88e224ccae240579cae3d5809d79ac710eae0764e1c4e2132071de86"
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
            "codeHash": "af0b2173db684cef31b964af151736b1e2d0c2346bef3ccabe7ca562e37ce4a8"
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
            "codeHash": "7a16dbb7becfd9f4c6b5adb89dc2e28dab9f2500cb169397edd1e6ee11ed6318"
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
            "codeHash": "e35bf3a18c95ae2bd8ebdca3d2fee50aa66f6d8ae7132f701da1d8e3cf731ad2"
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
            "codeHash": "4dcd2c8e03bba7174929c37b7d47a6b2bb7c348245159b510f198cb9d26bda4c"
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
            "codeHash": "28fd8b2a44a2a898fe7e74f32712e422ec697c92d6c17d28bc0ee9f201f76cee"
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
            "codeHash": "243d0a794184b422e81f0665eb0d8261ca7c9170b45b58c01c2cf5a1c92db873"
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
            "codeHash": "376d5aec8782c9665355776b740a9bd02ced9893bbe769910039cb5ce40ebf17"
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
            "codeHash": "1df6abc8c9d96343e971dc1e1d7fea4102382ed8b6d3c07e10c09ca23d7cfbcb"
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
            "codeHash": "33f9f8522b95d8a156c5f0fdef74aef48ae897976d3c93d2b13dea30a941822f"
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
            "codeHash": "29f1d71be72993818fde4ae7364b80494af8fad5692f96c376df12ba80451536"
        }
    },
    {
        "id": 160,
        "name": "Metropolitan Cathedral (Saint Philothei Shrine)",
        "lat": 37.97529,
        "lng": 23.73007,
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
        "id": 161,
        "name": "Tomb of George Seferis",
        "lat": 37.9628,
        "lng": 23.7381,
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
        "id": 162,
        "name": "Church of Saint John the Theologian",
        "lat": 37.9733,
        "lng": 23.7299,
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
        "id": 163,
        "name": "Sanctuary of Aphrodite Pandemos",
        "lat": 37.9712,
        "lng": 23.7253,
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
        "id": 164,
        "name": "Heliaia (Ancient Supreme Court)",
        "lat": 37.9744,
        "lng": 23.7226,
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
        "id": 165,
        "name": "Philopappos Hill Quarry Paths",
        "lat": 37.9692,
        "lng": 23.7203,
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
        "id": 166,
        "name": "Church of the Pantanassa (Monastiraki)",
        "lat": 37.97607,
        "lng": 23.72583,
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
        "id": 167,
        "name": "Tomb of Dexileos (Kerameikos)",
        "lat": 37.9781,
        "lng": 23.7161,
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
        "id": 168,
        "name": "National Garden Botanical Museum",
        "lat": 37.9729,
        "lng": 23.7370,
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
        "id": 169,
        "name": "Antikythera Mechanism Gallery",
        "lat": 37.9891,
        "lng": 23.7327,
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
        "id": 170,
        "name": "Gazi Purifier Building (Technopolis)",
        "lat": 37.9784,
        "lng": 23.7140,
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
        "id": 171,
        "name": "Plato's Academy Peristyle Building",
        "lat": 37.9924,
        "lng": 23.7084,
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
        "id": 172,
        "name": "Tomb of Odysseas Elytis",
        "lat": 37.9625,
        "lng": 23.7383,
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
        "id": 173,
        "name": "Stoa of the Herms (Agora)",
        "lat": 37.9755,
        "lng": 23.7224,
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
        "id": 174,
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
        "id": 175,
        "name": "Odeon of Agrippa Giants Pillars",
        "lat": 37.9750,
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
        "id": 176,
        "name": "Sacred Way Milestone (Kerameikos)",
        "lat": 37.9786,
        "lng": 23.7165,
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
        "id": 177,
        "name": "Stoa of Attalos Upper Floor View",
        "lat": 37.9752,
        "lng": 23.7239,
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
        "id": 178,
        "name": "Temple of Olympian Zeus Propylon",
        "lat": 37.9698,
        "lng": 23.7330,
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
        "id": 179,
        "name": "Tomb of Constantine Kanaris",
        "lat": 37.9622,
        "lng": 23.7380,
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
        codeHash: poi.reward.codeHash
    });
    
    userStats.points += 50; // Extra XP for correct quiz
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
            card.appendChild(img);
        } else {
            const numDiv = document.createElement("div");
            numDiv.className = "poi-card-num";
            numDiv.textContent = (index + 1).toString();
            card.appendChild(numDiv);
        }

        const infoDiv = document.createElement("div");
        infoDiv.className = "poi-card-info";

        const h4 = document.createElement("h4");
        h4.textContent = poi.name;
        infoDiv.appendChild(h4);

        const p = document.createElement("p");
        p.textContent = `${poi.description.substring(0, 100)}...`;
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
