const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function generateHash(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
}

const newPois = [
    {
        "name": "Stavros Niarchos Foundation Cultural Center (SNFCC)",
        "lat": 37.9398,
        "lng": 23.6922,
        "description": "A stunning modern cultural complex housing the National Library of Greece and the Greek National Opera.",
        "audioText": "Welcome to the Stavros Niarchos Foundation Cultural Center, a masterpiece of modern architecture designed by Renzo Piano. This sustainable complex includes the Greek National Opera, the National Library of Greece, and a massive 210,000 square meter public park. Notice the Energy Canopy, a massive solar roof that provides shade and generates power. The SNFCC has redefined modern Athens as a beacon of education, sustainability, and the arts.",
        "quiz": {
            "question": "Which renowned architect designed the SNFCC?",
            "options": ["Renzo Piano", "Zaha Hadid", "Norman Foster", "Santiago Calatrava"],
            "answer": 0,
            "feedback": "Correct! Renzo Piano designed the SNFCC, ensuring it met high sustainability standards."
        },
        "reward": {
            "title": "15% off at Canal Cafe",
            "provider": "SNFCC Dining",
            "codeHash": generateHash("SNFCC_180")
        }
    },
    {
        "name": "Eugenides Foundation Planetarium",
        "lat": 37.9405,
        "lng": 23.6934,
        "description": "One of the largest and best-equipped digital planetariums in the world.",
        "audioText": "You are standing near the Eugenides Planetarium. Established in 1956, the new digital planetarium is one of the largest in the world, with a massive 278 square meter dome. It provides spectacular immersive journeys through space, utilizing ultra-high-definition digital projection systems. The foundation's goal is to enhance scientific and technical education in Greece.",
        "quiz": {
            "question": "What is the primary educational focus of the Eugenides Foundation?",
            "options": ["Scientific and technical education", "Classical Greek history", "Ancient mythology", "Marine biology"],
            "answer": 0,
            "feedback": "Correct! It focuses on scientific and technical education for the youth."
        },
        "reward": {
            "title": "10% off at the Science Shop",
            "provider": "Planetarium Gift Shop",
            "codeHash": generateHash("PLANET_181")
        }
    },
    {
        "name": "Megaron Athens Concert Hall",
        "lat": 37.9806,
        "lng": 23.7533,
        "description": "A world-class performing arts venue with exceptional acoustics.",
        "audioText": "Welcome to Megaron, the Athens Concert Hall. Inaugurated in 1991, this venue boasts some of the best acoustics in the world. It hosts classical music, opera, ballet, and major conferences. The Megaron has become a focal point for the performing arts in Greece, elevating Athens to the ranks of major global cultural capitals.",
        "quiz": {
            "question": "In what year was the Megaron Athens Concert Hall inaugurated?",
            "options": ["1991", "1985", "2004", "1975"],
            "answer": 0,
            "feedback": "Correct! It opened its doors to the public in 1991."
        },
        "reward": {
            "title": "Free guided tour of the Concert Hall",
            "provider": "Megaron Info Desk",
            "codeHash": generateHash("MEGA_182")
        }
    },
    {
        "name": "Hellenic Maritime Museum",
        "lat": 37.9317,
        "lng": 23.6447,
        "description": "The largest maritime museum in Greece, exploring the nation's rich naval history.",
        "audioText": "Explore the Hellenic Maritime Museum located at the Zea Marina in Piraeus. This museum traces the naval history of the Greeks from prehistoric times to the present day. You can see models of ancient triremes, navigational instruments, and artifacts from the Greek War of Independence, highlighting the unbreakable bond between the Greeks and the sea.",
        "quiz": {
            "question": "Where is the Hellenic Maritime Museum located?",
            "options": ["Zea Marina in Piraeus", "Syntagma Square", "Cape Sounion", "Flisvos Marina"],
            "answer": 0,
            "feedback": "Correct! It is located at Zea Marina, a historic harbor in Piraeus."
        },
        "reward": {
            "title": "20% off admission",
            "provider": "Hellenic Maritime Museum",
            "codeHash": generateHash("MARI_183")
        }
    },
    {
        "name": "Averof Battleship Museum",
        "lat": 37.9332,
        "lng": 23.6841,
        "description": "A legendary armored cruiser that served as the flagship of the Hellenic Navy.",
        "audioText": "You are looking at the Georgios Averof, a legendary armored cruiser that served as the flagship of the Hellenic Navy. It played a crucial role in the Balkan Wars of 1912 to 1913, helping Greece secure naval dominance in the Aegean Sea. Remarkably, it is one of the only active museum ships in the world that is still technically in commission.",
        "quiz": {
            "question": "During which major conflict did the Averof secure Greek naval dominance?",
            "options": ["The Balkan Wars", "World War II", "The Greek War of Independence", "The Cold War"],
            "answer": 0,
            "feedback": "Correct! The Averof was instrumental during the Balkan Wars (1912-1913)."
        },
        "reward": {
            "title": "Free commemorative postcard",
            "provider": "Averof Gift Shop",
            "codeHash": generateHash("AVER_184")
        }
    },
    {
        "name": "Benaki Museum of Islamic Art",
        "lat": 37.9774,
        "lng": 23.7198,
        "description": "A stunning collection of Islamic art spanning from India to Spain.",
        "audioText": "Welcome to the Benaki Museum of Islamic Art. Located in the historical center of Athens, this museum houses over 8,000 works of art from the Middle East, Iran, Turkey, North Africa, and India. The collection spans from the dawn of Islam up to the 19th century, featuring exquisite ceramics, textiles, and woodcarvings. Don't miss the 17th-century reception room from a Cairo mansion.",
        "quiz": {
            "question": "Which specific 17th-century room is a highlight of the museum?",
            "options": ["A reception room from a Cairo mansion", "A bathhouse from Istanbul", "A royal tent from Persia", "A courtyard from Cordoba"],
            "answer": 0,
            "feedback": "Correct! The museum features a spectacular reconstructed reception room from 17th-century Cairo."
        },
        "reward": {
            "title": "10% off museum publications",
            "provider": "Benaki Museum Shop",
            "codeHash": generateHash("BENA_185")
        }
    },
    {
        "name": "Kotsanas Museum of Ancient Greek Technology",
        "lat": 37.9789,
        "lng": 23.7380,
        "description": "An interactive exhibition of the incredible technological inventions of the ancient Greeks.",
        "audioText": "Discover the high-tech world of antiquity at the Kotsanas Museum of Ancient Greek Technology. This unique museum features fully functional models of ancient inventions, from the automatic doors of Heron to the alarm clock of Plato and the analog computer known as the Antikythera Mechanism. It proves that ancient Greek technology was far more advanced than most people realize.",
        "quiz": {
            "question": "Which ancient philosopher's alarm clock is featured in the museum?",
            "options": ["Plato", "Aristotle", "Socrates", "Pythagoras"],
            "answer": 0,
            "feedback": "Correct! The museum features a working model of Plato's hydraulic alarm clock."
        },
        "reward": {
            "title": "15% off a DIY ancient invention kit",
            "provider": "Kotsanas Museum Shop",
            "codeHash": generateHash("KOTS_186")
        }
    },
    {
        "name": "Ilias Lalaounis Jewelry Museum",
        "lat": 37.9692,
        "lng": 23.7275,
        "description": "A museum dedicated to the art of jewelry and the decorative arts.",
        "audioText": "You are at the Ilias Lalaounis Jewelry Museum, founded by the renowned Greek jeweler Ilias Lalaounis. The museum showcases over 4,000 pieces of jewelry and micro-sculptures inspired by ancient Greek, Byzantine, and various global cultures. Lalaounis was famous for reviving ancient gold-smithing techniques like granulation and filigree to create modern masterpieces.",
        "quiz": {
            "question": "Which ancient gold-smithing technique did Ilias Lalaounis famously revive?",
            "options": ["Granulation and filigree", "Electroplating", "Diamond cutting", "Lost-wax casting"],
            "answer": 0,
            "feedback": "Correct! Lalaounis revived intricate ancient techniques like granulation and filigree."
        },
        "reward": {
            "title": "Free exhibition guide",
            "provider": "Lalaounis Museum Desk",
            "codeHash": generateHash("LALA_187")
        }
    },
    {
        "name": "Museum of Greek Folk Musical Instruments",
        "lat": 37.9744,
        "lng": 23.7275,
        "description": "A delightful collection of traditional Greek musical instruments spanning three centuries.",
        "audioText": "Welcome to the Museum of Greek Folk Musical Instruments, located in an 1840s mansion in Plaka. The collection displays 1,200 popular musical instruments dating from the 18th century to the present. You can listen to the authentic sounds of bouzoukis, lyras, and gaidas (bagpipes) through headphones at the display cases, experiencing the soul of Greek folk traditions.",
        "quiz": {
            "question": "What is the 'gaida' displayed in this museum?",
            "options": ["A traditional Greek bagpipe", "A stringed lute", "A type of drum", "A wooden flute"],
            "answer": 0,
            "feedback": "Correct! The gaida is a traditional Greek bagpipe."
        },
        "reward": {
            "title": "10% off traditional music CDs",
            "provider": "Folk Museum Shop",
            "codeHash": generateHash("FOLK_188")
        }
    },
    {
        "name": "Basil & Elise Goulandris Foundation",
        "lat": 37.9693,
        "lng": 23.7432,
        "description": "A spectacular museum showcasing world-class modern and contemporary art.",
        "audioText": "You are at the Basil and Elise Goulandris Foundation in Pagrati. This extraordinary museum houses one of the most important private collections of modern and contemporary art in the world. Visitors can admire masterpieces by Picasso, Van Gogh, Monet, Degas, and Rodin, alongside prominent Greek artists like Tsarouchis and Moralis, all beautifully displayed in a state-of-the-art facility.",
        "quiz": {
            "question": "Which of these famous artists has works displayed at the Goulandris Foundation?",
            "options": ["Vincent Van Gogh", "Leonardo da Vinci", "Michelangelo", "Rembrandt"],
            "answer": 0,
            "feedback": "Correct! The museum features an incredible collection including works by Van Gogh, Picasso, and Monet."
        },
        "reward": {
            "title": "10% off at the Museum Cafe",
            "provider": "Goulandris Cafe",
            "codeHash": generateHash("GOUL_189")
        }
    },
    {
        "name": "Goulandris Natural History Museum",
        "lat": 38.0733,
        "lng": 23.8164,
        "description": "A leading institution dedicated to the study, conservation, and protection of the natural environment.",
        "audioText": "Welcome to the Goulandris Natural History Museum in Kifissia. Founded in 1964, the museum is dedicated to educating the public about the rich biodiversity of Greece and the Mediterranean. Its striking exhibits include massive botanical, zoological, geological, and paleontological collections, including impressive full-scale dinosaur replicas and prehistoric fossils found in Greek soil.",
        "quiz": {
            "question": "In what year was the Goulandris Natural History Museum founded?",
            "options": ["1964", "1980", "1950", "2001"],
            "answer": 0,
            "feedback": "Correct! The museum was established in 1964 to promote environmental awareness."
        },
        "reward": {
            "title": "Free botanical bookmark",
            "provider": "Goulandris Museum Shop",
            "codeHash": generateHash("NATU_190")
        }
    },
    {
        "name": "Epigraphic Museum",
        "lat": 37.9885,
        "lng": 23.7324,
        "description": "The largest museum in the world dedicated to ancient inscriptions.",
        "audioText": "You are standing at the Epigraphic Museum, the largest of its kind in the world. It houses over 14,000 ancient inscriptions, mostly in Greek, carved on stone. These inscribed slabs are the primary documents of ancient history, recording laws, decrees, treaties, and public accounts. It is a true archive of the ancient world, preserving the very words of the Athenians.",
        "quiz": {
            "question": "Approximately how many ancient inscriptions are housed in the Epigraphic Museum?",
            "options": ["Over 14,000", "About 5,000", "Under 1,000", "Exactly 50,000"],
            "answer": 0,
            "feedback": "Correct! The museum safeguards over 14,000 ancient stone inscriptions."
        },
        "reward": {
            "title": "10% off history books",
            "provider": "Museum Bookstore",
            "codeHash": generateHash("EPIG_191")
        }
    },
    {
        "name": "Herakleidon Museum",
        "lat": 37.9767,
        "lng": 23.7176,
        "description": "A museum blending art, mathematics, and science through interactive exhibits.",
        "audioText": "Welcome to the Herakleidon Museum in Thissio. Originally focused on fine arts and artists like M.C. Escher, the museum now specializes in the intersection of science, art, and mathematics. Its interactive exhibitions explore themes like 'Eureka: Science, Art and Technology of the Ancient Greeks', making complex scientific principles accessible and fun for visitors of all ages.",
        "quiz": {
            "question": "Which famous artist, known for his mathematically inspired woodcuts, was heavily featured in the museum's early years?",
            "options": ["M.C. Escher", "Pablo Picasso", "Salvador Dali", "Jackson Pollock"],
            "answer": 0,
            "feedback": "Correct! The museum was originally famous for its extensive M.C. Escher exhibitions."
        },
        "reward": {
            "title": "15% off an interactive puzzle",
            "provider": "Herakleidon Gift Shop",
            "codeHash": generateHash("HERA_192")
        }
    },
    {
        "name": "Vorres Museum",
        "lat": 37.9540,
        "lng": 23.8643,
        "description": "A beautiful cultural foundation showcasing Greek contemporary art and folk tradition.",
        "audioText": "You are visiting the Vorres Museum in Paiania. Divided into two main sections, the museum features a gallery of contemporary Greek art, and a complex of traditional village houses, showcasing folk art, antique furniture, and historical artifacts. The beautiful gardens seamlessly blend modern sculptures with traditional Greek architecture, creating a peaceful cultural oasis.",
        "quiz": {
            "question": "What are the two main sections of the Vorres Museum?",
            "options": ["Contemporary Art and Folk Tradition", "Ancient History and Space Exploration", "Maritime History and Botany", "Numismatics and Epigraphy"],
            "answer": 0,
            "feedback": "Correct! The museum contrasts a modern art gallery with traditional Greek folk houses."
        },
        "reward": {
            "title": "10% off local art prints",
            "provider": "Vorres Museum Shop",
            "codeHash": generateHash("VORR_193")
        }
    },
    {
        "name": "Mineralogical Museum of Lavrion",
        "lat": 37.7139,
        "lng": 24.0531,
        "description": "A showcase of the stunning and rare minerals from the Lavrion mining district.",
        "audioText": "Welcome to the Mineralogical Museum of Lavrion. The Lavrion region is world-famous among geologists for its incredibly diverse and colorful minerals, many of which are unique to this area. The museum displays hundreds of rare specimens, including beautiful crystals of smithsonite, azurite, and annabergite, reflecting the rich geological wealth that funded ancient Athens.",
        "quiz": {
            "question": "Why is the Lavrion region famous among geologists worldwide?",
            "options": ["Its highly diverse and rare mineral crystals", "Its large diamond deposits", "Its active volcanoes", "Its dinosaur fossils"],
            "answer": 0,
            "feedback": "Correct! Lavrion is renowned for having over 600 different types of minerals, some found nowhere else on Earth."
        },
        "reward": {
            "title": "Free mineral identification card",
            "provider": "Museum Desk",
            "codeHash": generateHash("MINE_194")
        }
    },
    {
        "name": "Lavrion Technological and Cultural Park",
        "lat": 37.7180,
        "lng": 24.0558,
        "description": "An industrial heritage site built on the ruins of the historic French Mining Company.",
        "audioText": "You are at the Lavrion Technological and Cultural Park. This site preserves the impressive industrial facilities of the French Mining Company, which operated here from 1873 to 1989. Today, the park is a hub for research, education, and culture. Walking among the restored industrial buildings and old machinery provides a fascinating look into the industrial revolution in Greece.",
        "quiz": {
            "question": "Which foreign mining company operated the facilities preserved at this park from 1873 to 1989?",
            "options": ["The French Mining Company", "The British Mining Guild", "The German Industrial Corp", "The Italian Excavation Society"],
            "answer": 0,
            "feedback": "Correct! It was operated by the French Mining Company of Lavrion."
        },
        "reward": {
            "title": "15% off guided industrial tour",
            "provider": "Park Information Center",
            "codeHash": generateHash("TECH_195")
        }
    },
    {
        "name": "Archaeological Museum of Marathon",
        "lat": 38.1213,
        "lng": 23.9482,
        "description": "A museum preserving the artifacts from the famed Battle of Marathon and nearby ancient sites.",
        "audioText": "Welcome to the Archaeological Museum of Marathon. This museum houses artifacts from the legendary Battle of Marathon in 490 BC, including weapons and pottery found in the Tomb of the Athenians. It also features beautiful statues and finds from the nearby Sanctuary of the Egyptian Gods and the Cave of Pan, offering a comprehensive look at the history of the Marathon plain.",
        "quiz": {
            "question": "In what year did the famous Battle of Marathon take place?",
            "options": ["490 BC", "480 BC", "323 BC", "146 BC"],
            "answer": 0,
            "feedback": "Correct! The Battle of Marathon, a decisive Greek victory against the Persians, occurred in 490 BC."
        },
        "reward": {
            "title": "Free bookmark of Miltiades",
            "provider": "Marathon Museum Shop",
            "codeHash": generateHash("MARA_196")
        }
    },
    {
        "name": "Archaeological Museum of Lavrion",
        "lat": 37.7144,
        "lng": 24.0560,
        "description": "Displays antiquities from the ancient silver mining region of Lavreotiki.",
        "audioText": "You are visiting the Archaeological Museum of Lavrion. The museum highlights the ancient silver mining industry that powered the Athenian Empire. Exhibits include ancient mining tools, lead ingots, and beautiful pottery found in the local settlements and cemeteries. It tells the story of the thousands of slaves who lived and worked in the mines to extract silver for the Athenian owls.",
        "quiz": {
            "question": "What precious metal was primarily mined in the Lavrion region during antiquity?",
            "options": ["Silver", "Gold", "Copper", "Iron"],
            "answer": 0,
            "feedback": "Correct! Lavrion was famous for its rich silver mines."
        },
        "reward": {
            "title": "10% off museum replicas",
            "provider": "Lavrion Museum Shop",
            "codeHash": generateHash("ARCH_197")
        }
    },
    {
        "name": "Archaeological Museum of Brauron",
        "lat": 37.9254,
        "lng": 23.9934,
        "description": "A delightful museum dedicated to the cult of Artemis and the young girls who served her.",
        "audioText": "Welcome to the Archaeological Museum of Brauron, located near the Sanctuary of Artemis. The museum displays beautiful statues of little boys and girls known as 'arktoi' or little bears. In ancient times, young Athenian girls were sent to Brauron to serve Artemis before they reached marriageable age. The museum's collection gives a touching glimpse into the lives of children in ancient Greece.",
        "quiz": {
            "question": "What animal were the young girls serving Artemis at Brauron referred to as?",
            "options": ["Little bears (Arktoi)", "Little owls", "Little deer", "Little doves"],
            "answer": 0,
            "feedback": "Correct! The young girls were called 'Arktoi', meaning little bears, in honor of Artemis."
        },
        "reward": {
            "title": "Free postcard of an Arktoi statue",
            "provider": "Brauron Museum Shop",
            "codeHash": generateHash("BRAU_198")
        }
    },
    {
        "name": "Sanctuary of the Egyptian Gods (Brexiza)",
        "lat": 38.1182,
        "lng": 23.9782,
        "description": "An impressive Roman-era sanctuary built by Herodes Atticus dedicated to Isis and Serapis.",
        "audioText": "You are standing at the Sanctuary of the Egyptian Gods in the marshy area of Brexiza, near Marathon. This unique sanctuary was built in the 2nd century AD by the wealthy Athenian benefactor Herodes Atticus. It was dedicated to the Egyptian deities Isis and Serapis. The site features a stepped pyramid-like structure and was originally adorned with large statues exhibiting a blend of Egyptian and Greek artistic styles.",
        "quiz": {
            "question": "Which wealthy Athenian benefactor built this sanctuary?",
            "options": ["Herodes Atticus", "Pericles", "Hadrian", "Themistocles"],
            "answer": 0,
            "feedback": "Correct! Herodes Atticus built the sanctuary on his vast estate in Marathon."
        },
        "reward": {
            "title": "15% off guidebooks on Roman Greece",
            "provider": "Local Tourism Office",
            "codeHash": generateHash("BREX_199")
        }
    },
    {
        "name": "Temple of Artemis at Loutsa",
        "lat": 37.9644,
        "lng": 24.0041,
        "description": "The coastal ruins of an ancient Doric temple dedicated to Artemis Tauropolos.",
        "audioText": "Welcome to the coastal ruins of the Temple of Artemis Tauropolos in modern-day Loutsa. According to myth, this is where Orestes and Iphigenia landed after escaping from Tauris, carrying the sacred wooden statue of Artemis. The Doric temple was built in the 5th century BC right on the shoreline. Today, its foundations lie peacefully next to the sea, offering a serene glimpse into ancient coastal worship.",
        "quiz": {
            "question": "According to myth, who brought the sacred wooden statue of Artemis to this location?",
            "options": ["Orestes and Iphigenia", "Theseus and Ariadne", "Jason and Medea", "Odysseus and Penelope"],
            "answer": 0,
            "feedback": "Correct! Myth says Orestes and his sister Iphigenia brought the statue here from Tauris."
        },
        "reward": {
            "title": "10% off seafood at nearby tavernas",
            "provider": "Loutsa Beach Restaurants",
            "codeHash": generateHash("LOUT_200")
        }
    },
    {
        "name": "Municipal Theatre of Piraeus",
        "lat": 37.9431,
        "lng": 23.6473,
        "description": "A magnificent neoclassical building that serves as the cultural heart of Piraeus.",
        "audioText": "You are looking at the Municipal Theatre of Piraeus, a stunning neoclassical masterpiece completed in 1895. Designed by architect Ioannis Lazarimos, the building features a monumental propylon with four Corinthian columns. It is considered one of the leading theatrical stages in Greece and remains the cultural epicenter of the port city of Piraeus, hosting plays, concerts, and major events.",
        "quiz": {
            "question": "What architectural style is the Municipal Theatre of Piraeus built in?",
            "options": ["Neoclassical", "Gothic", "Baroque", "Brutalist"],
            "answer": 0,
            "feedback": "Correct! The theatre is a prime example of Greek Neoclassical architecture."
        },
        "reward": {
            "title": "10% off theatre tickets",
            "provider": "Piraeus Box Office",
            "codeHash": generateHash("PIRA_201")
        }
    },
    {
        "name": "Kastella Hill / Profitis Ilias",
        "lat": 37.9388,
        "lng": 23.6558,
        "description": "A picturesque hill in Piraeus offering sweeping panoramic views of the Saronic Gulf.",
        "audioText": "Climb up Kastella Hill, historically known as Munichia. Topped by the church of Profitis Ilias, this elegant neighborhood features beautiful 19th-century neoclassical mansions and steep, narrow streets. From the summit, you are rewarded with a breathtaking panoramic view of the Saronic Gulf, the ports of Mikrolimano and Zea, and the entire Athenian coastline spreading out below you.",
        "quiz": {
            "question": "What was the ancient name of Kastella Hill?",
            "options": ["Munichia", "Phaleron", "Salamis", "Aegina"],
            "answer": 0,
            "feedback": "Correct! In antiquity, the hill and its adjacent harbor were known as Munichia."
        },
        "reward": {
            "title": "Free coffee with any dessert",
            "provider": "Kastella Hilltop Cafe",
            "codeHash": generateHash("KAST_202")
        }
    },
    {
        "name": "Diomedes Botanical Garden",
        "lat": 38.0108,
        "lng": 23.6494,
        "description": "The largest botanical garden in Greece and the Eastern Mediterranean.",
        "audioText": "Welcome to the Diomedes Botanical Garden in Haidari. Spanning nearly 1,900 stremmata, it is the largest botanical garden in Greece. It is home to thousands of plant species from around the world. A unique highlight is the 'Historic Plants' section, which features flora mentioned in ancient Greek mythology and the Bible, such as the hemlock that poisoned Socrates and the mythical mandrake.",
        "quiz": {
            "question": "Which notorious plant, used to execute Socrates, is featured in the Historic Plants section?",
            "options": ["Hemlock", "Nightshade", "Oleander", "Wolfsbane"],
            "answer": 0,
            "feedback": "Correct! Conium maculatum, or poison hemlock, is grown in the historic section."
        },
        "reward": {
            "title": "Free seed packet of Greek herbs",
            "provider": "Botanical Garden Kiosk",
            "codeHash": generateHash("DIOM_203")
        }
    },
    {
        "name": "Attica Zoological Park",
        "lat": 37.9818,
        "lng": 23.9103,
        "description": "Greece's premier zoological park, home to over 2,000 animals.",
        "audioText": "You are at the Attica Zoological Park in Spata. Founded in 2000, it is the only large-scale zoo in Greece. It houses over 2,000 animals representing 290 species from all five continents. The zoo places a strong emphasis on the conservation of endangered species and educating the public about global biodiversity, featuring expansive habitats for big cats, primates, and marine mammals.",
        "quiz": {
            "question": "In what year did the Attica Zoological Park open to the public?",
            "options": ["2000", "1990", "2010", "1985"],
            "answer": 0,
            "feedback": "Correct! The park opened its doors in the year 2000."
        },
        "reward": {
            "title": "15% off zoo entry",
            "provider": "Attica Zoo Ticketing",
            "codeHash": generateHash("ZOO_204")
        }
    },
    {
        "name": "Schinias Olympic Rowing Centre",
        "lat": 38.1517,
        "lng": 24.0136,
        "description": "The stunning rowing and canoeing venue constructed for the 2004 Athens Olympics.",
        "audioText": "Welcome to the Schinias Olympic Rowing and Canoeing Centre. Built for the 2004 Athens Olympic Games, this massive 2,250-meter-long artificial lake is integrated into the beautiful Schinias National Park. Despite initial environmental concerns, the facility was designed to help restore the surrounding wetlands. Today, it remains an active training facility for athletes and a quiet retreat for nature lovers.",
        "quiz": {
            "question": "For which major event was the Schinias Rowing Centre constructed?",
            "options": ["2004 Athens Olympics", "1896 First Modern Olympics", "1997 World Athletics Championships", "2010 European Games"],
            "answer": 0,
            "feedback": "Correct! It was custom-built for the 2004 Olympic Games."
        },
        "reward": {
            "title": "10% off kayak rentals",
            "provider": "Schinias Water Sports",
            "codeHash": generateHash("SCHI_205")
        }
    },
    {
        "name": "Mikrolimano Marina",
        "lat": 37.9385,
        "lng": 23.6592,
        "description": "A charming, lively marina famous for its seafood restaurants and elegant yachts.",
        "audioText": "Stroll along the docks of Mikrolimano, meaning 'Little Port' in Greek. Known in antiquity as the port of Munichia, today it is a bustling, picturesque marina in Piraeus. The waterfront is lined with premium seafood restaurants and cafes, where visitors sit to enjoy fresh fish and ouzo while watching the luxurious yachts and small fishing boats bob gently in the Aegean waters.",
        "quiz": {
            "question": "What does the name 'Mikrolimano' translate to in English?",
            "options": ["Little Port", "Blue Bay", "Fisherman's Cove", "Ancient Harbor"],
            "answer": 0,
            "feedback": "Correct! 'Mikro' means little, and 'limano' means port."
        },
        "reward": {
            "title": "Free meze platter with any seafood order",
            "provider": "Mikrolimano Tavernas",
            "codeHash": generateHash("MIKR_206")
        }
    },
    {
        "name": "Flisvos Marina",
        "lat": 37.9318,
        "lng": 23.6852,
        "description": "Athens' premier mega-yacht destination, featuring high-end shopping and dining.",
        "audioText": "Welcome to Flisvos Marina in Palaio Faliro. Upgraded significantly for the 2004 Olympics, Flisvos is now the ultimate mega-yacht destination in Greece. Featuring a wide promenade, upscale boutiques, and stylish seaside bars, it offers a cosmopolitan atmosphere. It is the perfect place to watch a magnificent Athenian sunset over the Saronic Gulf.",
        "quiz": {
            "question": "What type of vessels is Flisvos Marina primarily known for hosting today?",
            "options": ["Mega-yachts", "Commercial cargo ships", "Traditional wooden fishing boats", "Naval destroyers"],
            "answer": 0,
            "feedback": "Correct! Flisvos Marina is highly regarded as a top-tier mega-yacht destination."
        },
        "reward": {
            "title": "10% off at Flisvos Marina Cafes",
            "provider": "Marina Dining",
            "codeHash": generateHash("FLIS_207")
        }
    },
    {
        "name": "Monastery of Saint Ephraim",
        "lat": 38.0933,
        "lng": 23.9575,
        "description": "A highly revered Orthodox monastery in Nea Makri, attracting thousands of pilgrims.",
        "audioText": "You are visiting the Monastery of Saint Ephraim in Nea Makri. The monastery, originally built in the 10th century, is dedicated to Saint Ephraim, a martyr who lived and died here during the Ottoman occupation. Today, it is one of the most important pilgrimage sites in Attica. Inside, the saint's holy relics are preserved, and believers flock here to pray for healing and miracles.",
        "quiz": {
            "question": "What is the primary reason thousands of believers visit this monastery?",
            "options": ["To pray at the holy relics of Saint Ephraim for miracles", "To see ancient Greek statues", "To view the first printed Greek Bible", "To admire Byzantine mosaics"],
            "answer": 0,
            "feedback": "Correct! Pilgrims visit to venerate the relics of Saint Ephraim, seeking healing."
        },
        "reward": {
            "title": "Free religious icon card",
            "provider": "Monastery Gift Shop",
            "codeHash": generateHash("EPHR_208")
        }
    },
    {
        "name": "Penteli Monastery",
        "lat": 38.0568,
        "lng": 23.8824,
        "description": "A historic 16th-century monastery nestled in the pine forests of Mount Pentelicus.",
        "audioText": "Welcome to the Holy Monastery of the Dormition of the Virgin Mary, commonly known as Penteli Monastery. Founded in 1578 by Saint Timotheos, it is surrounded by the lush pine forests of Mount Pentelicus. During the Ottoman occupation, it served as a secret school, teaching Greek language and history. The monastery played a significant intellectual and spiritual role in preserving Greek identity.",
        "quiz": {
            "question": "What secret activity took place at the Penteli Monastery during the Ottoman occupation?",
            "options": ["It operated a secret school teaching Greek", "It forged weapons for the revolution", "It minted illegal currency", "It housed a printing press"],
            "answer": 0,
            "feedback": "Correct! The monastery famously hosted a 'Krifo Scholio' (secret school) to preserve the Greek language."
        },
        "reward": {
            "title": "15% off local mountain honey",
            "provider": "Monastery Produce Shop",
            "codeHash": generateHash("PENT_209")
        }
    }
];

// Read app.js
const appJsPath = path.join(__dirname, '../app.js');
let appCode = fs.readFileSync(appJsPath, 'utf8');

// We need to inject `newPois` into the POIs array in app.js
// Find `    }\n];`
const endOfArrayMatch = appCode.match(/(\s*\}\s*)\n\];/);

if (endOfArrayMatch) {
    let newPoisString = JSON.stringify(newPois, null, 4);
    // Remove the opening [ and closing ] from the new JSON string
    newPoisString = newPoisString.substring(newPoisString.indexOf('{'));
    newPoisString = newPoisString.substring(0, newPoisString.lastIndexOf('}') + 1);

    // Re-assign IDs dynamically based on existing
    let startId = 180;
    // Replace all occurrences of "name" with "id": startId++, "name"
    // Actually, it's easier to map the objects before stringifying
    newPois.forEach((p, idx) => {
        p.id = startId + idx;
    });
    
    // Now stringify again
    newPoisString = JSON.stringify(newPois, null, 4);
    // Remove brackets
    newPoisString = newPoisString.substring(newPoisString.indexOf('{'));
    newPoisString = newPoisString.substring(0, newPoisString.lastIndexOf('}') + 1);
    
    // Indent everything correctly
    newPoisString = newPoisString.split('\n').map(line => '    ' + line).join('\n');
    // Remove leading spaces for the first line since it follows a comma
    newPoisString = newPoisString.trimStart();

    const replacement = endOfArrayMatch[1] + ',\n    ' + newPoisString + '\n];';
    
    appCode = appCode.replace(endOfArrayMatch[0], replacement);
    fs.writeFileSync(appJsPath, appCode, 'utf8');
    console.log('Successfully added 30 new POIs to app.js');
} else {
    console.error('Could not find the end of the POIs array in app.js');
}
