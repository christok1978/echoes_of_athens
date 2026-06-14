const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function generateHash(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
}

const newPois = [
    {
        "name": "Tatoi Royal Palace",
        "lat": 38.1633,
        "lng": 23.7938,
        "description": "The abandoned, forested summer estate of the former Greek Royal Family.",
        "audioText": "Welcome to Tatoi, the sprawling former summer estate of the Greek Royal Family, located on the densely forested slopes of Mount Parnitha. Acquired by King George I in 1871, this 10,000-acre estate features the royal palace, beautiful gardens, and the royal cemetery where many Greek kings are buried. Today, the estate is being slowly restored as a major cultural and environmental park.",
        "quiz": {
            "question": "Which Greek King initially acquired the Tatoi estate in 1871?",
            "options": ["King George I", "King Otto", "King Constantine II", "King Alexander"],
            "answer": 0,
            "feedback": "Correct! King George I purchased the estate to serve as a summer retreat."
        },
        "reward": {
            "title": "Free map of the Tatoi hiking trails",
            "provider": "Tatoi Friends Association",
            "codeHash": generateHash("TATO_230")
        }
    },
    {
        "name": "Lake Beletsi",
        "lat": 38.2217,
        "lng": 23.7744,
        "description": "A picturesque, small artificial lake hidden in the pine forests of Mount Parnitha.",
        "audioText": "You are at Lake Beletsi, a hidden gem nestled at an altitude of 600 meters on the eastern slopes of Mount Parnitha. This small artificial lake was created accidentally in the 1970s during infrastructure work. Today, it has become a vital wetland surrounded by dense pine forest, serving as a sanctuary for migratory birds, swans, and a massive population of turtles.",
        "quiz": {
            "question": "How was Lake Beletsi formed?",
            "options": ["Accidentally during infrastructure work in the 1970s", "By a massive earthquake", "It is an ancient volcanic crater", "It was dug by the ancient Athenians"],
            "answer": 0,
            "feedback": "Correct! It was inadvertently created when debris blocked a mountain stream."
        },
        "reward": {
            "title": "Free bag of duck feed",
            "provider": "Lake Beletsi Kiosk",
            "codeHash": generateHash("BELE_231")
        }
    },
    {
        "name": "Mpafi Refuge",
        "lat": 38.1682,
        "lng": 23.7228,
        "description": "A popular mountain refuge offering stunning views and traditional food high up in Parnitha National Park.",
        "audioText": "Welcome to the Mpafi Refuge, located at an altitude of 1,161 meters in the heart of the Parnitha National Park. Operated by the Hellenic Alpine Club of Athens, it serves as the ultimate starting point for hikers exploring the mountain's dense fir forests. Here, you can enjoy traditional bean soup and warm tea while observing the majestic red deer that frequently roam right up to the refuge.",
        "quiz": {
            "question": "What large wild animal is frequently spotted roaming near the Mpafi Refuge?",
            "options": ["Red deer", "Brown bears", "Wild horses", "Wolves"],
            "answer": 0,
            "feedback": "Correct! Parnitha is famous for its thriving population of wild red deer."
        },
        "reward": {
            "title": "10% off traditional bean soup (fasolada)",
            "provider": "Mpafi Refuge Kitchen",
            "codeHash": generateHash("MPAF_232")
        }
    },
    {
        "name": "Davelis Cave",
        "lat": 38.0722,
        "lng": 23.8761,
        "description": "A massive, mysterious cave on Mount Pentelicus famous for paranormal legends and ancient worship.",
        "audioText": "You are standing at the entrance of Davelis Cave on the southwestern slopes of Mount Pentelicus. In antiquity, this cave was a sanctuary dedicated to the god Pan and the Nymphs. In the 19th century, it was famously used as a hideout by the notorious bandit Davelis. Today, the cave is shrouded in modern urban legends involving paranormal activity and electromagnetic anomalies.",
        "quiz": {
            "question": "Which ancient deities were worshipped in this cave long before it became a bandit's hideout?",
            "options": ["Pan and the Nymphs", "Zeus and Hera", "Ares and Athena", "Hades and Persephone"],
            "answer": 0,
            "feedback": "Correct! The cave served as a sanctuary to Pan and the Nymphs in antiquity."
        },
        "reward": {
            "title": "Free headlamp rental",
            "provider": "Penteli Spelunking Club",
            "codeHash": generateHash("DAVE_233")
        }
    },
    {
        "name": "Syngrou Estate",
        "lat": 38.0664,
        "lng": 23.8114,
        "description": "A vast, beautiful forest estate spanning 950 acres in the northern suburbs of Athens.",
        "audioText": "Welcome to the Syngrou Estate in Kifissia. Bequeathed to the Greek Agricultural Society by Iphigenia Syngrou in 1921, this massive 950-acre park is the only surviving natural forest within the Athens basin. It features a spectacular neo-Gothic Orthodox church, the only one of its kind in Greece, and miles of peaceful walking and cycling trails through dense pine and almond trees.",
        "quiz": {
            "question": "What unique architectural style is the Orthodox church within the estate built in?",
            "options": ["Neo-Gothic", "Byzantine", "Neoclassical", "Brutalist"],
            "answer": 0,
            "feedback": "Correct! The Church of St. Andrew is the only neo-Gothic Orthodox church in Greece."
        },
        "reward": {
            "title": "15% off bicycle rental",
            "provider": "Syngrou Park Bikes",
            "codeHash": generateHash("SYNG_234")
        }
    },
    {
        "name": "Temple of Apollo Zoster",
        "lat": 37.8131,
        "lng": 23.7742,
        "description": "An ancient temple uniquely preserved right on the sandy shores of the luxurious Asteras Beach.",
        "audioText": "You are looking at the ruins of the Temple of Apollo Zoster. Remarkably, this 6th-century BC temple is located right on the sand of the luxurious Asteras Beach in Vouliagmeni. According to myth, Leto stopped here while fleeing Hera and loosened her 'zoster' or belt, believing she was about to give birth to Apollo and Artemis. It was accidentally unearthed by children playing in the sand in 1924.",
        "quiz": {
            "question": "How was this ancient temple accidentally discovered in 1924?",
            "options": ["By children playing in the sand", "By a submarine scanning the coast", "By a falling meteor", "By a dog digging for a bone"],
            "answer": 0,
            "feedback": "Correct! Children from the Vouliagmeni Orphanage uncovered it while digging in the sand."
        },
        "reward": {
            "title": "Free access to the temple site",
            "provider": "Asteras Beach Info",
            "codeHash": generateHash("ZOST_235")
        }
    },
    {
        "name": "Aigosthena Fortress",
        "lat": 38.1481,
        "lng": 23.2289,
        "description": "The most impressively preserved ancient fortress in Greece, towering over the Corinthian Gulf.",
        "audioText": "Welcome to the ancient fortress of Aigosthena in Porto Germeno. Built in the 4th century BC, this is widely considered the best-preserved ancient fortress in all of Greece. Its massive stone walls and looming square towers remain largely intact, offering a perfect example of advanced ancient Greek military architecture. The fortress was designed to protect the strategic route between Attica and the Peloponnese.",
        "quiz": {
            "question": "What makes the fortress of Aigosthena so remarkable among Greek ruins?",
            "options": ["It is considered the best-preserved ancient fortress in Greece", "It was built entirely of gold", "It is located underwater", "It was never actually finished"],
            "answer": 0,
            "feedback": "Correct! Its towering walls and structures are incredibly well-preserved."
        },
        "reward": {
            "title": "10% off fish at Porto Germeno tavernas",
            "provider": "Local Seaside Tavernas",
            "codeHash": generateHash("AIGO_236")
        }
    },
    {
        "name": "Eleutherae (Goura Castle)",
        "lat": 38.1814,
        "lng": 23.3769,
        "description": "A massive ancient border fortress overlooking the strategic pass of Mount Cithaeron.",
        "audioText": "You are standing at the ruins of Eleutherae, also known as Goura Castle. This imposing 4th-century BC fortress guarded the strategic mountain pass linking Attica with Boeotia. The walls, heavily fortified with multiple square towers, still stand several meters high. According to myth, Eleutherae is the birthplace of Dionysus, the god of wine and theater.",
        "quiz": {
            "question": "Which Greek god was mythologically born at Eleutherae?",
            "options": ["Dionysus", "Ares", "Apollo", "Hermes"],
            "answer": 0,
            "feedback": "Correct! Legend states that Dionysus, god of wine, was born here."
        },
        "reward": {
            "title": "Free panoramic photo print",
            "provider": "Kithairon Mountain Club",
            "codeHash": generateHash("ELEU_237")
        }
    },
    {
        "name": "OAKA Olympic Athletic Center of Athens",
        "lat": 38.0378,
        "lng": 23.7844,
        "description": "The massive, futuristic stadium complex redesigned by Santiago Calatrava for the 2004 Olympics.",
        "audioText": "Welcome to OAKA, the Olympic Athletic Center of Athens. Originally built in 1982, the complex was radically redesigned by world-renowned architect Santiago Calatrava for the 2004 Athens Olympics. Its defining feature is the breathtaking glass and steel roof structure over the main stadium, weighing 18,000 tons. Today, it remains the largest sporting venue in Greece.",
        "quiz": {
            "question": "Which famous architect designed the spectacular steel and glass roof over the main stadium?",
            "options": ["Santiago Calatrava", "Renzo Piano", "Zaha Hadid", "Frank Gehry"],
            "answer": 0,
            "feedback": "Correct! The visionary Spanish architect Santiago Calatrava designed the roof."
        },
        "reward": {
            "title": "15% off guided architectural tour",
            "provider": "OAKA Info Center",
            "codeHash": generateHash("OAKA_238")
        }
    },
    {
        "name": "AEK OPAP Arena (Agia Sophia Stadium)",
        "lat": 38.0411,
        "lng": 23.7411,
        "description": "The spectacular, newly built home stadium of AEK Athens F.C., featuring Byzantine-inspired architecture.",
        "audioText": "You are looking at the OPAP Arena, the stunning new home of AEK Athens F.C. in Nea Filadelfeia. Opened in 2022, the stadium's unique architecture is heavily inspired by the Byzantine Empire, featuring fortress-like walls, arches, and a monumental double-headed eagle statue at the entrance. It serves as both a world-class football venue and a monument to the Greek refugees of Asia Minor.",
        "quiz": {
            "question": "What historical empire heavily inspired the architecture of the OPAP Arena?",
            "options": ["The Byzantine Empire", "The Roman Empire", "The Ottoman Empire", "The Persian Empire"],
            "answer": 0,
            "feedback": "Correct! The arches, towers, and double-headed eagle all symbolize the Byzantine Empire."
        },
        "reward": {
            "title": "10% off at the AEK FC Store",
            "provider": "AEK Official Store",
            "codeHash": generateHash("OPAP_239")
        }
    },
    {
        "name": "Pedion tou Areos",
        "lat": 37.9933,
        "lng": 23.7344,
        "description": "One of the largest public parks in Athens, designed in honor of the heroes of the 1821 Revolution.",
        "audioText": "Welcome to Pedion tou Areos, or the 'Field of Ares'. Designed in 1934 to honor the heroes of the Greek War of Independence, it is one of the largest public parks in Athens. The park's main avenue features 21 marble busts of revolutionary heroes, and the impressive equestrian statue of King Constantine I stands at the main entrance, welcoming Athenians seeking a green escape.",
        "quiz": {
            "question": "What is the English translation of 'Pedion tou Areos'?",
            "options": ["Field of Ares", "Garden of Athena", "Valley of the Gods", "Park of Peace"],
            "answer": 0,
            "feedback": "Correct! It translates to the 'Field of Ares', the Greek god of war."
        },
        "reward": {
            "title": "Free coffee at the park kiosk",
            "provider": "Alsos Cafe",
            "codeHash": generateHash("PEDI_240")
        }
    },
    {
        "name": "Zappeion Megaron",
        "lat": 37.9714,
        "lng": 23.7364,
        "description": "A magnificent neoclassical building built specifically for the revival of the modern Olympic Games.",
        "audioText": "You are standing before the Zappeion Megaron, located south of the National Gardens. Funded by the wealthy Zappas cousins, it was completed in 1888. It holds the distinction of being the first building in the world explicitly constructed for the revival of the modern Olympic Games. Today, its spectacular circular atrium is used for major diplomatic, cultural, and corporate events.",
        "quiz": {
            "question": "For what specific international event was the Zappeion originally constructed?",
            "options": ["The revival of the modern Olympic Games", "The signing of the Greek Constitution", "The crowning of King Otto", "The first World's Fair"],
            "answer": 0,
            "feedback": "Correct! It was built specifically to host the reborn Olympic Games."
        },
        "reward": {
            "title": "10% off at Aegli Zappeiou Cafe",
            "provider": "Aegli Cafe",
            "codeHash": generateHash("ZAPP_241")
        }
    },
    {
        "name": "Metropolitan Cathedral of Athens (Mitropoli)",
        "lat": 37.9753,
        "lng": 23.7300,
        "description": "The primary cathedral of the Greek Orthodox Church in Athens, hosting state funerals and royal weddings.",
        "audioText": "Welcome to the Metropolitan Cathedral of the Annunciation, simply known as the Mitropoli. Construction began in 1842 and took exactly 20 years to complete, famously using marble salvaged from 72 demolished older churches. It remains the most important church in Athens, used for major state ceremonies, including presidential inaugurations, royal weddings, and the funerals of prominent Greeks.",
        "quiz": {
            "question": "Where did the marble used to construct the Mitropoli come from?",
            "options": ["It was salvaged from 72 demolished older churches", "It was imported from Italy", "It was mined from Mount Olympus", "It was gifted by the Russian Tsar"],
            "answer": 0,
            "feedback": "Correct! The marble was repurposed from dozens of ruined medieval churches."
        },
        "reward": {
            "title": "Free Orthodox icon card",
            "provider": "Mitropoli Gift Shop",
            "codeHash": generateHash("MITR_242")
        }
    },
    {
        "name": "Little Metropolis (Agios Eleftherios)",
        "lat": 37.9751,
        "lng": 23.7303,
        "description": "A tiny, beautiful 12th-century Byzantine church built entirely out of ancient Greek and Roman marble spoils.",
        "audioText": "You are looking at the Little Metropolis, officially the Church of Agios Eleftherios. Sitting right next to the massive modern Cathedral, this tiny 12th-century church is an architectural marvel. Its walls are built entirely out of 'spolia'—unaltered marble reliefs and blocks salvaged from ancient Greek temples, Roman monuments, and early Christian buildings, creating a fascinating patchwork of Athenian history.",
        "quiz": {
            "question": "What unique building material was used to construct the exterior walls of the Little Metropolis?",
            "options": ["Salvaged marble reliefs from ancient Greek and Roman monuments", "Mudbricks from the nearby river", "Wooden beams from ancient ships", "Gold-plated bronze shields"],
            "answer": 0,
            "feedback": "Correct! The church is famous for being constructed entirely from ancient 'spolia'."
        },
        "reward": {
            "title": "Free historic architectural guide",
            "provider": "Athens Culture Kiosk",
            "codeHash": generateHash("LITT_243")
        }
    },
    {
        "name": "Museum of Illusions Athens",
        "lat": 37.9768,
        "lng": 23.7214,
        "description": "A wildly popular, interactive museum filled with mind-bending optical illusions.",
        "audioText": "Welcome to the Museum of Illusions in the Monastiraki neighborhood. This interactive space is designed to trick your senses and challenge your perception. Featuring mind-bending optical illusions, holograms, the dizzying Vortex Tunnel, and the famous Infinity Room, the museum provides a fun, educational experience about vision, perception, and the human brain's fascinating flaws.",
        "quiz": {
            "question": "Which of the following is a famous interactive exhibit at the Museum of Illusions?",
            "options": ["The Vortex Tunnel", "The Tunnel of Love", "The Echo Chamber", "The Hall of Mirrors"],
            "answer": 0,
            "feedback": "Correct! The Vortex Tunnel challenges your balance and visual perception."
        },
        "reward": {
            "title": "15% off mind-bending puzzles",
            "provider": "Museum of Illusions Shop",
            "codeHash": generateHash("ILLU_244")
        }
    },
    {
        "name": "Hellenic IT Museum",
        "lat": 37.9542,
        "lng": 23.6811,
        "description": "The first and only museum in Greece dedicated to the history of Information Technology.",
        "audioText": "You are visiting the Hellenic IT Museum in Moschato. Established in 2008, it is the only museum in Greece dedicated exclusively to the history of computing. Its vast collection features over 4,000 artifacts from the 1970s to the 1990s, including rare mainframe components, vintage Apple and IBM personal computers, floppy disks, and the clunky mobile phones that started the digital revolution.",
        "quiz": {
            "question": "What specific era of computing does the Hellenic IT Museum primarily focus on?",
            "options": ["The 1970s to the 1990s", "The 1800s to the 1920s", "The 2000s to the present", "Ancient Greek computing mechanisms"],
            "answer": 0,
            "feedback": "Correct! The museum preserves the pivotal early decades of modern personal computing."
        },
        "reward": {
            "title": "Free retro computer sticker pack",
            "provider": "IT Museum Desk",
            "codeHash": generateHash("HELL_245")
        }
    },
    {
        "name": "Maria Callas Museum",
        "lat": 37.9765,
        "lng": 23.7305,
        "description": "A beautiful new museum honoring the life and career of the legendary Greek soprano.",
        "audioText": "Welcome to the Maria Callas Museum, situated in a beautifully restored neoclassical building on Mitropoleos Street. Opened in 2023, the museum is dedicated to 'La Divina', the greatest opera singer of the 20th century. Through interactive audio exhibits, rare recordings, personal letters, and spectacular stage costumes, visitors can intimately experience the dramatic life and unparalleled voice of Maria Callas.",
        "quiz": {
            "question": "By what famous Italian nickname was Maria Callas widely known?",
            "options": ["La Divina", "La Prima Donna", "La Soprano", "La Voce"],
            "answer": 0,
            "feedback": "Correct! She was famously referred to as 'La Divina' (The Divine One)."
        },
        "reward": {
            "title": "10% off opera recordings",
            "provider": "Callas Museum Shop",
            "codeHash": generateHash("CALL_246")
        }
    },
    {
        "name": "OTE Telecommunications Museum",
        "lat": 38.0931,
        "lng": 23.8055,
        "description": "A fascinating journey through the history of telecommunications in Greece.",
        "audioText": "You are at the OTE Telecommunications Museum in Nea Erythraia. Operated by the Hellenic Telecommunications Organization, the museum traces the history of human communication. Exhibits range from ancient Greek fire-beacons and the hydraulic telegraph of Aeneas, to 19th-century Morse code transmitters, early rotary dial telephones, and the massive switchboards operated by the first female telephone operators.",
        "quiz": {
            "question": "Which ancient method of communication is featured in the museum's exhibits?",
            "options": ["The hydraulic telegraph of Aeneas", "The homing pigeon network", "The bronze megaphone", "The solar mirror relay"],
            "answer": 0,
            "feedback": "Correct! The museum explores early methods like the ingenious hydraulic telegraph."
        },
        "reward": {
            "title": "Free vintage telephone postcard",
            "provider": "OTE Museum Desk",
            "codeHash": generateHash("OTEM_247")
        }
    },
    {
        "name": "Jewish Museum of Greece",
        "lat": 37.9733,
        "lng": 23.7328,
        "description": "A poignant museum documenting the 2,300-year history of the Jewish communities in Greece.",
        "audioText": "Welcome to the Jewish Museum of Greece, located near Syntagma Square. This highly impactful museum documents the rich 2,300-year history of the Romaniote and Sephardic Jewish communities in Greece. The exhibits feature religious artifacts, traditional costumes, and reconstructed synagogue interiors, alongside a deeply moving section dedicated to the Greek Jews who perished during the Holocaust.",
        "quiz": {
            "question": "What are the two primary Jewish communities historically present in Greece?",
            "options": ["Romaniote and Sephardic", "Ashkenazi and Hasidic", "Beta Israel and Yemenite", "Karaite and Bukharan"],
            "answer": 0,
            "feedback": "Correct! The Romaniote (Greek-speaking) and Sephardic (Ladino-speaking) are the historic communities of Greece."
        },
        "reward": {
            "title": "10% off history publications",
            "provider": "Jewish Museum Shop",
            "codeHash": generateHash("JEWI_248")
        }
    },
    {
        "name": "Piraeus Archaeological Museum",
        "lat": 37.9367,
        "lng": 23.6444,
        "description": "An outstanding museum highlighting the ancient history of Athens' mighty naval port.",
        "audioText": "You are visiting the Piraeus Archaeological Museum. This museum holds treasures that tell the story of Piraeus when it was the bustling, heavily fortified naval and commercial port of the Athenian Empire. The absolute highlights of the collection are the stunning 'Piraeus Statues'—four spectacular, life-sized hollow-cast bronze statues, including the Apollo of Piraeus and the magnificent Athena, which were hidden from Roman looters and discovered centuries later in a sewer.",
        "quiz": {
            "question": "What is the most famous highlight of the Piraeus Archaeological Museum?",
            "options": ["The Piraeus Statues, a collection of life-sized hollow-cast bronzes", "The golden mask of Agamemnon", "The Parthenon Marbles", "The Antikythera Mechanism"],
            "answer": 0,
            "feedback": "Correct! The pristine bronze statues of Apollo, Athena, and Artemis are world-famous masterpieces."
        },
        "reward": {
            "title": "Free bookmark of the Bronze Athena",
            "provider": "Piraeus Museum Shop",
            "codeHash": generateHash("PIRA_249")
        }
    }
];

// Read app.js
const appJsPath = path.join(__dirname, '../app.js');
let appCode = fs.readFileSync(appJsPath, 'utf8');

// We need to inject `newPois` into the POIs array in app.js
const endOfArrayMatch = appCode.match(/(\s*\}\s*)\n\];/);

if (endOfArrayMatch) {
    let newPoisString = JSON.stringify(newPois, null, 4);
    
    // Assign IDs dynamically
    let startId = 230;
    newPois.forEach((p, idx) => {
        p.id = startId + idx;
    });
    
    newPoisString = JSON.stringify(newPois, null, 4);
    newPoisString = newPoisString.substring(newPoisString.indexOf('{'));
    newPoisString = newPoisString.substring(0, newPoisString.lastIndexOf('}') + 1);
    
    newPoisString = newPoisString.split('\n').map(line => '    ' + line).join('\n');
    newPoisString = newPoisString.trimStart();

    const replacement = endOfArrayMatch[1] + ',\n    ' + newPoisString + '\n];';
    
    appCode = appCode.replace(endOfArrayMatch[0], replacement);
    fs.writeFileSync(appJsPath, appCode, 'utf8');
    console.log('Successfully added the final 20 new POIs to app.js');
} else {
    console.error('Could not find the end of the POIs array in app.js');
}
