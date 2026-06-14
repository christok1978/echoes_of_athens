const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function generateHash(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
}

const newPois = [
    {
        "name": "Temple of Aphaia",
        "lat": 37.7547,
        "lng": 23.5325,
        "description": "A magnificent ancient Doric temple forming part of the 'Sacred Triangle' of antiquity.",
        "audioText": "Welcome to the Temple of Aphaia on the island of Aegina. Built around 500 BC, this remarkably well-preserved Doric temple was dedicated to the mother-goddess Aphaia. Interestingly, this temple, along with the Parthenon in Athens and the Temple of Poseidon at Sounion, are said to form a perfect equilateral triangle across the Saronic Gulf, known as the 'Sacred Triangle' of antiquity.",
        "quiz": {
            "question": "Which two other temples form the 'Sacred Triangle' with the Temple of Aphaia?",
            "options": ["Parthenon and Temple of Poseidon (Sounion)", "Temple of Zeus and Erechtheion", "Temple of Apollo and Temple of Artemis", "Hephaesteion and Temple of Hera"],
            "answer": 0,
            "feedback": "Correct! The Parthenon, Temple of Poseidon, and Temple of Aphaia form the legendary Sacred Triangle."
        },
        "reward": {
            "title": "15% off pistachio ice cream",
            "provider": "Aegina Port Gelateria",
            "codeHash": generateHash("APHA_210")
        }
    },
    {
        "name": "Kolona Archaeological Site",
        "lat": 37.7478,
        "lng": 23.4246,
        "description": "The ruins of Aegina's ancient acropolis, characterized by a single standing column of Apollo's temple.",
        "audioText": "You are exploring Kolona, the ancient acropolis of Aegina. The site gets its name—meaning 'column' in Greek—from the single Doric pillar that still stands from the 6th-century BC Temple of Apollo. This hill has been inhabited since the Bronze Age and offers fantastic views of the harbor where Aegina's powerful fleet once anchored, rivaling even Athens.",
        "quiz": {
            "question": "Which Greek god was the temple with the single remaining column dedicated to?",
            "options": ["Apollo", "Zeus", "Ares", "Hermes"],
            "answer": 0,
            "feedback": "Correct! The solitary column belongs to the ancient Temple of Apollo."
        },
        "reward": {
            "title": "Free map of Ancient Aegina",
            "provider": "Kolona Ticket Office",
            "codeHash": generateHash("KOLO_211")
        }
    },
    {
        "name": "Monastery of Saint Nectarios",
        "lat": 37.7475,
        "lng": 23.4830,
        "description": "A massive, beautiful monastery dedicated to one of the most widely known modern Orthodox saints.",
        "audioText": "Welcome to the Monastery of Agios Nektarios. Saint Nektarios, who lived from 1846 to 1920, is one of the most recently canonized saints in the Greek Orthodox Church, known as a great miracle worker and healer. This vast, modern church and monastery complex is one of the largest in the Balkans and attracts thousands of pilgrims daily seeking spiritual comfort and physical healing.",
        "quiz": {
            "question": "For what specific spiritual grace is Saint Nectarios primarily known by the faithful?",
            "options": ["As a miracle worker and healer", "As the patron saint of sailors", "As the protector of lost objects", "As a warrior saint"],
            "answer": 0,
            "feedback": "Correct! He is highly venerated as a miraculous healer."
        },
        "reward": {
            "title": "Free holy oil vial",
            "provider": "Monastery Kiosk",
            "codeHash": generateHash("NECT_212")
        }
    },
    {
        "name": "Tower of Markellos",
        "lat": 37.7455,
        "lng": 23.4283,
        "description": "A striking pink Venetian tower that served as a government building during the Greek Revolution.",
        "audioText": "You are looking at the striking pink Tower of Markellos. Built by the Venetians in the 17th century, it was later renovated in 1802 by Spyros Markellos. During the Greek War of Independence, Aegina briefly served as the first capital of the modern Greek State. This very tower housed the first Greek government officials, including Ioannis Kapodistrias, the first Governor of Greece.",
        "quiz": {
            "question": "Which notable figure and first Governor of Greece lived and worked in this tower?",
            "options": ["Ioannis Kapodistrias", "Theodoros Kolokotronis", "Lord Byron", "Eleftherios Venizelos"],
            "answer": 0,
            "feedback": "Correct! Ioannis Kapodistrias used the tower when Aegina was the provisional capital."
        },
        "reward": {
            "title": "10% off local pistachio butter",
            "provider": "Markellos Square Shop",
            "codeHash": generateHash("MARK_213")
        }
    },
    {
        "name": "Cave of Euripides",
        "lat": 37.8864,
        "lng": 23.4619,
        "description": "A secluded cave on the island of Salamis where the great tragedian wrote his masterpieces.",
        "audioText": "Welcome to the Cave of Euripides, located high on a hillside in southern Salamis overlooking the Saronic Gulf. The famous Athenian playwright Euripides retreated to this peaceful, secluded cave to write his great tragedies, far from the bustling noise of the city. Archaeological excavations here in 1997 actually uncovered a skyphos—a wine cup—with letters spelling out his name, confirming the legend.",
        "quiz": {
            "question": "What remarkable artifact was found here in 1997 proving Euripides used this cave?",
            "options": ["A wine cup bearing his name", "A golden mask of tragedy", "A marble statue of Apollo", "The original manuscript of Medea"],
            "answer": 0,
            "feedback": "Correct! Archaeologists found a black-glazed skyphos with part of his name inscribed."
        },
        "reward": {
            "title": "Free dramatic arts bookmark",
            "provider": "Salamis Tourist Info",
            "codeHash": generateHash("EURI_214")
        }
    },
    {
        "name": "Monastery of Faneromeni",
        "lat": 37.9866,
        "lng": 23.4281,
        "description": "A historic 17th-century monastery featuring exquisite frescoes of the Last Judgment.",
        "audioText": "You are visiting the Monastery of Panagia Faneromeni on the northwest coast of Salamis. Founded in the 17th century by Saint Laurentios, the monastery played a vital role during the 1821 Greek Revolution, serving as a hospital and a secret meeting place for freedom fighters. Its katholikon (main church) is renowned for its incredible, sprawling frescoes covering almost every inch of the interior, including a vivid depiction of the Last Judgment.",
        "quiz": {
            "question": "What role did the Monastery of Faneromeni play during the 1821 Greek Revolution?",
            "options": ["It served as a hospital and secret meeting place", "It was a naval base", "It operated a gunpowder mill", "It minted revolutionary coins"],
            "answer": 0,
            "feedback": "Correct! It was a safe haven and hospital for Greek revolutionaries."
        },
        "reward": {
            "title": "10% off beeswax candles",
            "provider": "Monastery Shop",
            "codeHash": generateHash("FANE_215")
        }
    },
    {
        "name": "Sanctuary of Poseidon at Kalaureia",
        "lat": 37.5255,
        "lng": 23.4735,
        "description": "The ruins of the ancient religious center of the Kalaurian amphictyony on the island of Poros.",
        "audioText": "Welcome to the Sanctuary of Poseidon, located in the hills of Kalaureia on the island of Poros. In antiquity, this was the center of a powerful maritime league known as an amphictyony. It is perhaps most famous as the place where the great Athenian orator Demosthenes sought asylum from the Macedonians in 322 BC. Rather than surrender to Antipater's men, Demosthenes committed suicide here by drinking poison.",
        "quiz": {
            "question": "Which famous Athenian orator committed suicide at this sanctuary to avoid capture by the Macedonians?",
            "options": ["Demosthenes", "Pericles", "Socrates", "Cicero"],
            "answer": 0,
            "feedback": "Correct! Demosthenes drank poison from his pen here rather than be captured."
        },
        "reward": {
            "title": "Free panoramic postcard",
            "provider": "Poros Port Kiosk",
            "codeHash": generateHash("KALA_216")
        }
    },
    {
        "name": "Poros Clock Tower",
        "lat": 37.4988,
        "lng": 23.4542,
        "description": "The iconic landmark of Poros, built on the highest peak of the town.",
        "audioText": "You are standing at the base of the iconic Clock Tower of Poros. Built in 1927, this landmark sits atop the volcanic rock of Sphaeria, the rocky outcrop where the town of Poros is built. The short climb through the charming, narrow streets filled with neoclassical mansions is rewarded with a spectacular view of the narrow strait separating the island from the mountains of the Peloponnese.",
        "quiz": {
            "question": "In what year was the iconic Poros Clock Tower built?",
            "options": ["1927", "1821", "1950", "1896"],
            "answer": 0,
            "feedback": "Correct! The tower was constructed relatively recently, in 1927."
        },
        "reward": {
            "title": "15% off lemonade at the port",
            "provider": "Poros Cafe",
            "codeHash": generateHash("PORO_217")
        }
    },
    {
        "name": "Historical Archives Museum of Hydra",
        "lat": 37.3503,
        "lng": 23.4665,
        "description": "A museum showcasing the immense wealth and naval power of Hydra during the Greek Revolution.",
        "audioText": "Welcome to the Historical Archives Museum of Hydra. Located right by the picturesque port, this museum documents the island's incredible maritime history. Before and during the 1821 Revolution, Hydra was incredibly wealthy and boasted a massive, privately owned commercial fleet. When the war broke out, the Hydriot merchants converted their merchant ships into powerful warships, playing a decisive role in liberating Greece.",
        "quiz": {
            "question": "How did the wealthy Hydriot merchants contribute to the Greek Revolution?",
            "options": ["By converting their merchant ships into warships", "By fighting as cavalry on the mainland", "By building a massive land fortress", "By purchasing foreign mercenaries"],
            "answer": 0,
            "feedback": "Correct! They turned their massive commercial fleet into an unstoppable navy."
        },
        "reward": {
            "title": "10% off naval history books",
            "provider": "Museum Shop",
            "codeHash": generateHash("HYDR_218")
        }
    },
    {
        "name": "Lazaros Koundouriotis Historical Mansion",
        "lat": 37.3481,
        "lng": 23.4650,
        "description": "The striking yellow mansion of a wealthy shipowner who financed the Greek War of Independence.",
        "audioText": "You are looking at the Lazaros Koundouriotis Historical Mansion, easily recognizable by its vibrant yellow color standing high above the port of Hydra. Lazaros Koundouriotis was one of the wealthiest shipowners of his time, and he famously spent his entire fortune financing the Greek Revolution. Today, the mansion operates as a branch of the National Historical Museum, preserving the elegant lifestyle of the 19th-century Greek maritime aristocracy.",
        "quiz": {
            "question": "What is visually distinctive about the Koundouriotis Mansion on the hillside of Hydra?",
            "options": ["Its vibrant yellow color", "It is painted entirely black", "It has a large glass dome", "It is built underground"],
            "answer": 0,
            "feedback": "Correct! The bright yellow ochre color makes it stand out against the rocky landscape."
        },
        "reward": {
            "title": "Free entrance to the upper gallery",
            "provider": "Koundouriotis Mansion",
            "codeHash": generateHash("KOUN_219")
        }
    },
    {
        "name": "Bouboulina's Museum",
        "lat": 37.2655,
        "lng": 23.1610,
        "description": "The ancestral home of Laskarina Bouboulina, the legendary female naval commander of the Greek Revolution.",
        "audioText": "Welcome to the Bouboulina Museum on the island of Spetses. This was the home of Laskarina Bouboulina, a heroine of the Greek War of Independence and the first woman in world naval history to achieve the rank of Admiral. She used her massive fortune to build ships, including her flagship the Agamemnon, and personally led naval blockades against the Ottoman Empire.",
        "quiz": {
            "question": "What was the name of Laskarina Bouboulina's famous flagship?",
            "options": ["Agamemnon", "Argo", "Averof", "Olympia"],
            "answer": 0,
            "feedback": "Correct! Her flagship, the Agamemnon, was one of the largest Greek warships of the time."
        },
        "reward": {
            "title": "15% off local Spetses sweets (amygdalota)",
            "provider": "Spetses Bakery",
            "codeHash": generateHash("BOUB_220")
        }
    },
    {
        "name": "Fountain of Theagenes",
        "lat": 37.9942,
        "lng": 23.3422,
        "description": "A remarkably well-preserved ancient water reservoir and fountain house in the city of Megara.",
        "audioText": "You are exploring the Fountain of Theagenes in Megara. Constructed in the 5th century BC, it is one of the largest and most impressive ancient fountain houses in Greece. Its massive roof was supported by 35 octagonal Doric pillars, and it featured a sophisticated plumbing system to draw water from the nearby mountains. It highlights the advanced civic engineering of ancient Greek city-states.",
        "quiz": {
            "question": "How many octagonal Doric pillars were used to support the roof of the reservoir?",
            "options": ["35", "10", "100", "4"],
            "answer": 0,
            "feedback": "Correct! The roof was supported by 35 impressive octagonal pillars."
        },
        "reward": {
            "title": "Free map of Ancient Megara",
            "provider": "Megara Tourism Kiosk",
            "codeHash": generateHash("THEA_221")
        }
    },
    {
        "name": "Plato's Academy Archaeological Site",
        "lat": 37.9855,
        "lng": 23.7088,
        "description": "The serene suburban park that houses the ruins of the world's first university, founded by Plato.",
        "audioText": "Welcome to the Archaeological Site of Plato's Academy. Founded by the philosopher Plato in 387 BC in a sacred grove of olive trees, this is widely considered the first university in the Western world. Aristotle studied here for twenty years. Today, it is a quiet, unassuming park where you can walk among the ruins of the gymnasium and imagine the profound philosophical debates that shaped Western thought.",
        "quiz": {
            "question": "Which famous philosopher studied at Plato's Academy for twenty years before founding his own school?",
            "options": ["Aristotle", "Socrates", "Pythagoras", "Epicurus"],
            "answer": 0,
            "feedback": "Correct! Aristotle was Plato's most famous student at the Academy."
        },
        "reward": {
            "title": "10% off philosophy books",
            "provider": "Akadimia Bookstore",
            "codeHash": generateHash("PLAT_222")
        }
    },
    {
        "name": "First Cemetery of Athens",
        "lat": 37.9622,
        "lng": 23.7388,
        "description": "A historic, peaceful cemetery acting as a magnificent open-air museum of 19th-century sculpture.",
        "audioText": "You are walking through the First Cemetery of Athens, a peaceful oasis of pine and cypress trees. Opened in 1837, it is the resting place for Greece's most prominent politicians, artists, and heroes. It is also an incredible open-air museum of Romantic and Neoclassical sculpture. The most famous masterpiece here is the 'Sleeping Maiden' (Koimomeni) carved by legendary sculptor Yannoulis Chalepas.",
        "quiz": {
            "question": "What is the name of the famous sculpture by Yannoulis Chalepas located in this cemetery?",
            "options": ["The Sleeping Maiden (Koimomeni)", "The Thinker", "Winged Victory", "The Discus Thrower"],
            "answer": 0,
            "feedback": "Correct! The 'Sleeping Maiden' is considered a masterpiece of modern Greek sculpture."
        },
        "reward": {
            "title": "Free guided tour map",
            "provider": "Cemetery Main Gate",
            "codeHash": generateHash("CEME_223")
        }
    },
    {
        "name": "National Gallery – Alexandros Soutzos Museum",
        "lat": 37.9760,
        "lng": 23.7485,
        "description": "The premier art museum in Greece, housing an unparalleled collection of post-Byzantine and modern Greek art.",
        "audioText": "Welcome to the newly renovated National Gallery. After a massive expansion completed in 2021, the gallery features a stunning modern glass facade. Inside, it houses over 20,000 works of art, providing an exhaustively complete overview of Greek art from the post-Byzantine era to the contemporary period, featuring legends like El Greco, Lytras, and Tsarouchis.",
        "quiz": {
            "question": "Which famous Greek-born Renaissance artist's works are featured prominently in the gallery?",
            "options": ["El Greco (Domenikos Theotokopoulos)", "Michelangelo", "Leonardo da Vinci", "Raphael"],
            "answer": 0,
            "feedback": "Correct! Works by Domenikos Theotokopoulos, widely known as El Greco, are a major highlight."
        },
        "reward": {
            "title": "10% off at the Gallery Cafe",
            "provider": "National Gallery Dining",
            "codeHash": generateHash("GALL_224")
        }
    },
    {
        "name": "National Museum of Contemporary Art (EMST)",
        "lat": 37.9625,
        "lng": 23.7258,
        "description": "Athens' flagship institution for contemporary Greek and international art, housed in a former brewery.",
        "audioText": "You are at the National Museum of Contemporary Art, known as EMST. The museum is housed in the iconic Fix Brewery building, a massive industrial structure from the 1960s that was brilliantly repurposed. EMST collects and exhibits cutting-edge contemporary art in various media including painting, video, and installations, reflecting complex social and political themes from a global perspective.",
        "quiz": {
            "question": "What was the building housing EMST originally used as?",
            "options": ["The Fix Brewery", "A military barracks", "A textile factory", "An indoor market"],
            "answer": 0,
            "feedback": "Correct! It is housed in the historic Fix Brewery building."
        },
        "reward": {
            "title": "15% off modern art prints",
            "provider": "EMST Shop",
            "codeHash": generateHash("EMST_225")
        }
    },
    {
        "name": "Hellenic Motor Museum",
        "lat": 37.9911,
        "lng": 23.7303,
        "description": "A spectacular private collection of over 100 classic and antique cars spanning the history of motoring.",
        "audioText": "Welcome to the Hellenic Motor Museum, located near Victoria Station. Housed in a spiraling, multi-story modern building, the museum displays an incredible private collection of over 110 classic, antique, and modern cars. You can admire rare models from Bugatti, Ferrari, Maserati, and Aston Martin, alongside interactive exhibits that explore the evolution of automotive engineering.",
        "quiz": {
            "question": "What kind of architectural layout characterizes the main exhibition space of the museum?",
            "options": ["A multi-story spiraling ramp", "A long underground tunnel", "An open-air courtyard", "A series of glass domes"],
            "answer": 0,
            "feedback": "Correct! Visitors walk down a spiraling ramp across three floors to view the cars."
        },
        "reward": {
            "title": "10% off at the F1 Simulator",
            "provider": "Motor Museum Lobby",
            "codeHash": generateHash("MOTO_226")
        }
    },
    {
        "name": "Museum of the City of Athens",
        "lat": 37.9796,
        "lng": 23.7317,
        "description": "Housed in the former royal palace of King Otto, this museum chronicles the modern history of Athens.",
        "audioText": "You are visiting the Museum of the City of Athens, housed in two interconnected mansions on Klafthmonos Square. The older mansion was actually the first residence of King Otto and Queen Amalia when Athens became the capital in 1834. The museum features beautiful period furniture, royal memorabilia, and a spectacular model of Athens from 1842, showing just how small the city once was.",
        "quiz": {
            "question": "Who were the first royal residents of the older mansion that houses the museum?",
            "options": ["King Otto and Queen Amalia", "King George I and Queen Olga", "Emperor Hadrian", "Lord Byron"],
            "answer": 0,
            "feedback": "Correct! It was the temporary palace for Greece's first modern King, Otto."
        },
        "reward": {
            "title": "Free historic city map",
            "provider": "Museum Desk",
            "codeHash": generateHash("CITY_227")
        }
    },
    {
        "name": "B. & M. Theocharakis Foundation",
        "lat": 37.9765,
        "lng": 23.7369,
        "description": "A cultural center dedicated to music and the visual arts, located opposite the Greek Parliament.",
        "audioText": "Welcome to the B. & M. Theocharakis Foundation for the Fine Arts and Music. Located in a beautifully restored 1920s eclectic building right across from the National Gardens, the foundation hosts temporary exhibitions of modern art, classical music concerts, and educational workshops. The café on the upper floors offers a splendid view of the Greek Parliament and Syntagma Square.",
        "quiz": {
            "question": "What two artistic disciplines is the Theocharakis Foundation primarily dedicated to?",
            "options": ["Fine Arts and Music", "Cinema and Theater", "Photography and Dance", "Sculpture and Architecture"],
            "answer": 0,
            "feedback": "Correct! The foundation focuses on the visual arts and music."
        },
        "reward": {
            "title": "10% off at Café Merlin",
            "provider": "Theocharakis Foundation",
            "codeHash": generateHash("THEO_228")
        }
    },
    {
        "name": "Athens Olympic Museum",
        "lat": 38.0402,
        "lng": 23.7891,
        "description": "A modern museum celebrating the global history of the Olympic Games, focusing on Greece's foundational role.",
        "audioText": "You are at the Athens Olympic Museum, a striking modern facility connected to the Golden Hall. The museum takes visitors on a chronological journey from the ancient Olympic Games in Olympia, to the revival of the modern Games in Athens in 1896, right up to the triumphant return of the Olympics to Athens in 2004. It features authentic torches, medals, and interactive athletic exhibits.",
        "quiz": {
            "question": "In what year were the first modern Olympic Games held in Athens?",
            "options": ["1896", "1904", "1888", "1924"],
            "answer": 0,
            "feedback": "Correct! The modern Olympics were successfully revived in Athens in 1896."
        },
        "reward": {
            "title": "15% off official Olympic merchandise",
            "provider": "Olympic Museum Shop",
            "codeHash": generateHash("OLYM_229")
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
    let startId = 210;
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
    console.log('Successfully added 20 new POIs to app.js');
} else {
    console.error('Could not find the end of the POIs array in app.js');
}
