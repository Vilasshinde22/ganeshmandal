/* ==========================================================================
   May Ganesh Mandal Management System - Premium JavaScript
   Designed and Developed by: Senior UI/UX Agent
   Contains: Translation dictionary, animations, counters, particles, and modals
   ========================================================================== */

// --- 1. Language Translation Dictionary ---
const translations = {
    en: {
        // Navbar
        "brand-mandal": "May Ganesh Mandal",
        "brand-subtitle": "Management System",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-events": "Events",
        "nav-committee": "Committee",
        "nav-gallery": "Gallery",
        "nav-contact": "Contact",
        "btn-donate-nav": "Donate Now",
        "btn-admin-nav": "Admin Login",

        // Announcements
        "ann-badge": "Important",
        "ann-marquee-text": "🚩 Ganeshotsav 2026 starts from September 15. Sthapana Muhurat: 8:15 AM to 11:30 AM. Aarti everyday at 8:00 AM & 8:00 PM. All devotees are cordially invited! 🚩",
        "pinned-label": "Notice: ",
        "pinned-content": "Online vargani (donation) portal is now open. Scan the QR code below to contribute directly to Ganeshotsav 2026. Only website donations will be tracked in real-time.",

        // Hero
        "hero-badge": "✨ 10 Days of Divine Bliss ✨",
        "hero-title": "Welcome to May Ganesh Mandal",
        "hero-subtitle": "Serving Devotion, Culture, and Community with deep spiritual heritage and values.",
        "btn-donate-hero": "Donate Now",
        "btn-events-hero": "View Events",
        "scroll-down": "Scroll Down",

        // Donation Stats
        "stats-tag": "Impact Statistics",
        "stats-title": "Website Donation Summary",
        "stats-desc": "Real-time statistics of contributions received directly through our website portals.",
        "stat-total-donations": "Total Website Donations",
        "stat-total-donors": "Total Website Donors",
        "stat-target-amount": "Target Amount",
        "stat-progress-completed": "Donation Progress",
        "progress-title": "Campaign Status",
        "stat-completed": "Completed",
        "stat-raised": "Raised: ₹1,25,000",
        "stat-target-txt": "Goal: ₹5,00,000",

        // About
        "about-tag": "Who We Are",
        "about-title": "About May Ganesh Mandal",
        "about-intro": "Serving Lord Ganesha and our community with a pure heart, preserving Maharashtra's vibrant cultural heritage for decades.",
        "about-years": "Years of Devotion & Cultural Legacy",
        "tab-history": "History",
        "tab-vision": "Vision",
        "tab-mission": "Mission",
        "tab-objectives": "Objectives",
        "history-content": "May Ganesh Mandal was established in 2001 with a simple vision of bringing together families and residents of the community. What started as a small, humble celebration under a simple canopy has grown into one of the most prominent cultural hotspots in the region. We strive to highlight the teachings of Lord Ganesha, emphasizing wisdom, community bonding, and spiritual progression.",
        "history-content-2": "Over the last two decades, our mandal has introduced multiple educational initiatives, health checkup camps, and blood donation drives, making Ganeshotsav not just a ritual festival but a social upliftment force.",
        "vision-content": "Our vision is to build a highly bonded, harmonious, and culturally active community that thrives on the spiritual ideals of Lord Ganesha—righteousness, intellect, and empathy. We aspire to become a benchmark of social service and sustainable environment-friendly festivals.",
        "vision-point1": "Promoting 100% Eco-friendly Shadu Clay Idols.",
        "vision-point2": "Developing digital platforms for community engagement.",
        "vision-point3": "Expanding cultural literacy among the younger generation.",
        "mission-content": "To nurture a community culture grounded in devotion and public welfare. We implement initiatives that aid underprivileged sections of society, organize cultural events that strengthen unity, and ensure safe, eco-responsible Ganesh celebrations every year.",
        "mission-box1-title": "Social Upliftment",
        "mission-box1-desc": "Helping schools and distributing educational resources.",
        "mission-box2-title": "Cultural Heritage",
        "mission-box2-desc": "Hosting classical music, art events, and youth forums.",
        "obj-content": "Our core goals drive each action we take throughout the Ganeshotsav campaign:",
        "obj-h1": "Integrity & Devotion",
        "obj-d1": "Ensuring traditional Vedic rituals are observed with pure devotion.",
        "obj-h2": "Environmental Responsibility",
        "obj-d2": "Promoting eco-friendly clay idols and non-toxic decorations.",
        "obj-h3": "Community Transparency",
        "obj-d3": "Maintaining clear public statistics on digital platform donations.",
        "btn-read-more": "Read More",
        "ext-p1": "Every year, we accommodate over 50,000 visitors who seek blessings from Ganesha. We also run high-impact relief programs. During difficult social and environmental challenges, our mandal members actively work on the ground to provide food, medical aid, and relief packages.",
        "ext-p2": "We look forward to your support through physical presence, participation in events, or virtual donations to help us expand our social reach.",

        // Events
        "events-tag": "Festival Calendar",
        "events-title": "Upcoming Ganeshotsav Events",
        "events-desc": "Join us in celebrating the ten days of spiritual glory. Here is the schedule of key rituals and events.",
        "ev-t1": "Ganesh Sthapana & Pranpratishtha",
        "ev-d1": "The sacred arrival of Lord Ganesha idol. Ritual installation of the deity with Vedic chants, installation of Kalash, and first Maha-Aarti of the season.",
        "ev-t2": "Maha Aarti & Prasad Distribution",
        "ev-d2": "Daily ritual prayer offering twice a day, accompanied by spiritual chants and distribution of Modak prasad to all present devotees.",
        "ev-t3": "Bhajan Sandhya & Devotional Songs",
        "ev-d3": "An evening dedicated to serene devotional bhajans and classical music by renowned artists to soothe the spiritual senses of our community.",
        "ev-t4": "Grand Mahaprasad Feast",
        "ev-d4": "Bhandara and community feast (Mahaprasad) open to all citizens. Over 5,000 devotees are served sacred meals with supreme hygiene.",
        "ev-t5": "Cultural Programs & Youth Competitions",
        "ev-d5": "Traditional dance, drama, and spiritual elocution contests for children and teenagers. Preserving culture through active youth involvement.",
        "ev-t6": "Anant Chaturdashi Visarjan Procession",
        "ev-d6": "A heavy-hearted yet joyous send-off procession for Lord Ganesha with Dhol-Tasha drums, colorful gulal, leading to an eco-friendly immersion tank.",

        // Committee
        "comm-tag": "Our Leadership",
        "comm-title": "Committee Members",
        "comm-desc": "The dedicated pillars of May Ganesh Mandal who volunteer selflessly to organize Ganeshotsav and social outreach initiatives.",
        "m1-name": "Shri. Vilas Rao Patil",
        "m1-pos": "President",
        "m1-bio": "Guiding the mandal's operations and social welfare initiatives with 15+ years of community leadership.",
        "m2-name": "Shri. Mahesh Deshmukh",
        "m2-pos": "Secretary",
        "m2-bio": "Managing events coordination, government coordination, permissions, and administrative schedules.",
        "m3-name": "Shri. Rajesh Kulkarni",
        "m3-pos": "Treasurer",
        "m3-bio": "Maintaining meticulous financial accounting, digital donation systems, and publishing audited transparency records.",
        "btn-contact": "Contact Details",

        // Gallery
        "gallery-tag": "Divine Glances",
        "gallery-title": "Utsav Photo Gallery",
        "gallery-desc": "Take a visual stroll through the previous years' celebrations, rituals, and ecstatic moments of devotion.",
        "gal-t1": "Decorated Lord Ganesha",
        "gal-c1": "Ganeshotsav Idol",
        "gal-t2": "Mandal Pandal Setup",
        "gal-c2": "Decorative Illumination",
        "gal-t3": "Maha Aarti Ritual",
        "gal-c3": "Devotees Gathering",
        "gal-t4": "Immersion Procession",
        "gal-c4": "Saffron Flags & Devotion",
        "btn-view-all-gallery": "View All Gallery",

        // Donate
        "donate-tag": "Support Ganeshotsav",
        "donate-title": "Online Devotional Contributions",
        "donate-desc": "Make a safe digital offering directly to the website fund. Your donations go strictly towards public social welfare and festival management.",
        "donate-qr-badge": "Scan to Pay via UPI",
        "btn-copy": "Copy ID",
        "donate-box-title": "Why Donate Digitally?",
        "donate-box-p1": "Every rupee contributed through this portal is instantly tracked in our statistics. This system ensures total transparent transaction reporting for our donors.",
        "donate-bullet1": "100% Transparency (No offline cash mixing here)",
        "donate-bullet2": "Immediate addition to the website stat dashboard",
        "donate-bullet3": "Funds primarily support health drives & clay idols",
        "btn-gateway-donate": "Pay Securely Online",
        "donate-thankyou": "⭐ Thank you for your support! May Ganesha bless you and your family! ⭐",

        // Contact
        "contact-tag": "Get in Touch",
        "contact-title": "Contact Our Mandal",
        "contact-desc": "Have questions about upcoming schedules, volunteering, or donations? Contact our support desk.",
        "c-addr-lbl": "Mandal Address",
        "c-addr-val": "Plot No. 108, Shree Ganesh Nagar, Near Hanuman Temple, Pune, Maharashtra - 411001",
        "c-phone-lbl": "Contact Numbers",
        "c-email-lbl": "Email Address",
        "social-lbl": "Connect With Us",

        // Footer
        "footer-brand-p": "May Ganesh Mandal is a registered non-profit cultural trust focused on sustaining traditions, generating social equality, and initiating environment-friendly welfare drives.",
        "footer-quick-links": "Quick Links",
        "footer-legal": "Legal & Help",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms & Conditions",
        "footer-donate": "Donations Help",
        "footer-copy": "All Rights Reserved.",
        "footer-designer": "Designed with Devotion by"
    },
    mr: {
        // Navbar
        "brand-mandal": "माय गणेश मंडळ",
        "brand-subtitle": "व्यवस्थापन प्रणाली",
        "nav-home": "मुख्यपृष्ठ",
        "nav-about": "माहिती",
        "nav-events": "कार्यक्रम",
        "nav-committee": "समिती",
        "nav-gallery": "गॅलरी",
        "nav-contact": "संपर्क",
        "btn-donate-nav": "वर्गणी द्या",
        "btn-admin-nav": "अ‍ॅडमीन लॉगिन",

        // Announcements
        "ann-badge": "महत्वाची सूचना",
        "ann-marquee-text": "🚩 गणेशोत्सव २०२६ ची सुरुवात १५ सप्टेंबरपासून होत आहे. स्थापना मुहूर्त: सकाळी ८:१५ ते ११:३०. दररोज सकाळी ८:०० वाजता आणि रात्री ८:०० वाजता महाआरती होईल. सर्व भाविक आमंत्रित आहेत! 🚩",
        "pinned-label": "सूचना: ",
        "pinned-content": "ऑनलाईन देणगी (वर्गणी) पोर्टल आता सुरु झाले आहे. गणेशोत्सव २०२६ मध्ये थेट योगदान देण्यासाठी खालील QR कोड स्कॅन करा. केवळ ऑनलाईन देणग्या रिअल-टाइममध्ये दाखवल्या जातील.",

        // Hero
        "hero-badge": "✨ १० दिवसांचा दिव्य सोहळा ✨",
        "hero-title": "माय गणेश मंडळात आपले स्वागत आहे",
        "hero-subtitle": "भक्ती, संस्कृती आणि लोककल्याणाच्या भावनेने समाजाची सेवा करत आहोत.",
        "btn-donate-hero": "वर्गणी द्या",
        "btn-events-hero": "कार्यक्रम पहा",
        "scroll-down": "खाली पहा",

        // Donation Stats
        "stats-tag": "आमचा प्रभाव",
        "stats-title": "ऑनलाईन वर्गणीचा तपशील",
        "stats-desc": "आमच्या वेबसाईटद्वारे मिळालेल्या थेट ऑनलाईन देणग्यांची रिअल-टाइम आकडेवारी.",
        "stat-total-donations": "एकूण ऑनलाईन वर्गणी",
        "stat-total-donors": "एकूण ऑनलाईन देणगीदार",
        "stat-target-amount": "लक्ष्य रक्कम",
        "stat-progress-completed": "वर्गणीची प्रगती",
        "progress-title": "मोहीम स्थिती",
        "stat-completed": "पूर्ण झाले",
        "stat-raised": "जमा: ₹१,२५,०००",
        "stat-target-txt": "ध्येय: ₹५,००,०००",

        // About
        "about-tag": "आम्ही कोण आहोत",
        "about-title": "माय गणेश मंडळाविषयी",
        "about-intro": "दशकांपासून महाराष्ट्राचा गौरवशाली सांस्कृतिक वारसा जपत, निष्काम भावनेने बाप्पाची आणि समाजाची सेवा करत आहोत.",
        "about-years": "वर्षे भक्ती आणि सांस्कृतिक वारसा",
        "tab-history": "इतिहास",
        "tab-vision": "दृष्टिकोन",
        "tab-mission": "ध्येय",
        "tab-objectives": "उद्दिष्टे",
        "history-content": "माय गणेश मंडळाची स्थापना २००१ मध्ये परिसरातील नागरिकांना आणि कुटुंबांना एकत्र आणण्याच्या साध्या हेतूने झाली. एका छोट्या मंडपात सुरु झालेल्या या उत्सवाचे आज या भागातील एका प्रमुख सांस्कृतिक केंद्रात रुपांतर झाले आहे. आम्ही श्री गणेशाच्या शिकवणुकीचा प्रसार करत बुद्धी, समाज प्रबोधन आणि आध्यात्मिक प्रगतीला चालना देतो.",
        "history-content-2": "गेल्या दोन दशकांत आमच्या मंडळाने अनेक शैक्षणिक उपक्रम, आरोग्य तपासणी शिबिरे आणि रक्तदान मोहिमा राबवल्या आहेत, ज्यामुळे गणेशोत्सव केवळ धार्मिक विधी न राहता सामाजिक प्रगतीचे माध्यम बनला आहे.",
        "vision-content": "श्री गणेशाच्या आदर्श मूल्यांवर (सदाचार, बुद्धी आणि सहानुभूती) आधारलेला एक सुसंवादी आणि सांस्कृतिकदृष्ट्या सक्रिय समाज निर्माण करणे हा आमचा दृष्टिकोन आहे. पर्यावरणपूरक उत्सवांमध्ये आम्हाला एक आदर्श निर्माण करायचा आहे.",
        "vision-point1": "१००% पर्यावरणपूरक शाडू मातीच्या मूर्तींना प्रोत्साहन देणे.",
        "vision-point2": "सामाजिक कार्यासाठी डिजिटल व्यासपीठ विकसित करणे.",
        "vision-point3": "तरुण पिढीमध्ये सांस्कृतिक साक्षरता वाढवणे.",
        "mission-content": "भक्ती आणि लोककल्याणावर आधारित समाज संस्कृती जोपासणे. आम्ही समाजातील वंचित घटकांना मदत करणारे उपक्रम राबवतो, एकता वाढवणारे सांस्कृतिक कार्यक्रम आयोजित करतो आणि दरवर्षी सुरक्षित आणि पर्यावरणपूरक गणेशोत्सव सुनिश्चित करतो.",
        "mission-box1-title": "सामाजिक प्रगती",
        "mission-box1-desc": "शाळांना मदत करणे आणि शैक्षणिक साहित्याचे वाटप करणे.",
        "mission-box2-title": "सांस्कृतिक वारसा",
        "mission-box2-desc": "शास्त्रीय संगीत, कला स्पर्धा आणि युवा मंचाचे आयोजन.",
        "obj-content": "आमची मुख्य उद्दिष्टे गणेशोत्सवातील प्रत्येक कृतीला मार्गदर्शन करतात:",
        "obj-h1": "निष्ठा आणि भक्ती",
        "obj-d1": "पारंपारिक वैदिक विधी पूर्ण भक्तीभावाने पार पाडले जातील याची खात्री करणे.",
        "obj-h2": "पर्यावरणीय जबाबदारी",
        "obj-d2": "पर्यावरणपूरक मातीच्या मूर्ती आणि विषमुक्त सजावटीचा वापर करणे.",
        "obj-h3": "पारदर्शकता",
        "obj-d3": "डिजिटल वर्गणीची अचूक व पारदर्शक आकडेवारी सार्वजनिक ठेवणे.",
        "btn-read-more": "अधिक वाचा",
        "ext-p1": "दरवर्षी आम्ही दर्शनासाठी येणाऱ्या ५०,००० हून अधिक भाविकांचे स्वागत करतो. आम्ही आपत्ती व्यवस्थापनातही कार्य करतो. दुष्काळ किंवा पूर परिस्थितीसारख्या नैसर्गिक आपत्तींमध्ये मंडळाचे कार्यकर्ते अन्नधान्य आणि औषधोपचार पुरवण्यासाठी प्रत्यक्ष जमिनीवर कार्यरत असतात.",
        "ext-p2": "मंडळाच्या कार्यात प्रत्यक्ष उपस्थित राहून, स्पर्धांमध्ये भाग घेऊन किंवा ऑनलाईन वर्गणी देऊन सहकार्य करावे ही नम्र विनंती.",

        // Events
        "events-tag": "उत्सव दिनदर्शिका",
        "events-title": "आगामी गणेशोत्सव कार्यक्रम",
        "events-desc": "१० दिवसांच्या या भक्ती सोहळ्यात सहभागी व्हा. आरती आणि सांस्कृतिक कार्यक्रमांचे वेळापत्रक खालीलप्रमाणे आहे.",
        "ev-t1": "श्री गणेश स्थापना आणि प्राणप्रतिष्ठा",
        "ev-d1": "श्री गणेश मूर्तीचे आगमन. वेदमंत्रांच्या गजरात मूर्तीची स्थापना, कलश पूजन आणि वर्षातील पहिली महाआरती.",
        "ev-t2": "दररोजची महाआरती आणि प्रसाद वाटप",
        "ev-d2": "उत्सवा दरम्यान दररोज सकाळी आणि संध्याकाळी आरती, तसेच उपस्थित भाविकांना मोदक प्रसादाचे वाटप.",
        "ev-t3": "भजन संध्या आणि भक्ती संगीत",
        "ev-d3": "प्रसिद्ध गायकांच्या सुश्राव्य भजनांचा आणि भक्ती संगीताचा कार्यक्रम, जो मनाला शांतता आणि आध्यात्मिक आनंद देईल.",
        "ev-t4": "भव्य महाप्रसाद भोजन",
        "ev-d4": "सर्व नागरिकांसाठी भंडाऱ्याचे (महाप्रसाद) आयोजन. अत्यंत स्वच्छ वातावरणात ५००० हून अधिक भाविक महाप्रसादाचा लाभ घेतात.",
        "ev-t5": "सांस्कृतिक कार्यक्रम आणि क्रीडा स्पर्धा",
        "ev-d5": "लहान मुलांसाठी आणि तरुणांसाठी पारंपारिक नृत्य, नाटक आणि वक्तृत्व स्पर्धा. तरुण पिढीला वारशाची ओळख करून देणे.",
        "ev-t6": "अनंत चतुर्दशी विसर्जन मिरवणूक",
        "ev-d6": "ढोल-ताशांच्या गजरात, गुलालाची उधळण करत वाजत-गाजत बाप्पाला निरोप आणि कृत्रिम हौदात पर्यावरणपूरक विसर्जन.",

        // Committee
        "comm-tag": "मंडळाचे नेतृत्व",
        "comm-title": "समिती सदस्य",
        "comm-desc": "गणेशोत्सव आणि सामाजिक उपक्रम यशस्वी करण्यासाठी अहोरात्र कष्ट घेणारे मंडळाचे समर्पित कार्यकर्ते.",
        "m1-name": "श्री. विलासराव पाटील",
        "m1-pos": "अध्यक्ष",
        "m1-bio": "गेल्या १५ वर्षांहून अधिक काळापासून मंडळाच्या सर्व सामाजिक व व्यवस्थापकीय कार्याचे यशस्वी नेतृत्व करत आहेत.",
        "m2-name": "श्री. महेश देशमुख",
        "m2-pos": "कार्यवाह (सचिव)",
        "m2-bio": "शासकीय परवानग्या, पोलिसांशी समन्वय आणि कार्यक्रमांचे अचूक नियोजन व व्यवस्थापन हाताळतात.",
        "m3-name": "श्री. राजेश कुलकर्णी",
        "m3-pos": "खजिनदार",
        "m3-bio": "मंडळाचा हिशोब अत्यंत पारदर्शक ठेवणे आणि ऑनलाईन देणगी प्रणालीचे आर्थिक नियमन अचूकपणे सांभाळतात.",
        "btn-contact": "संपर्क तपशील",

        // Gallery
        "gallery-tag": "दिव्य दर्शने",
        "gallery-title": "उत्सव छायाचित्र दालन",
        "gallery-desc": "मागील वर्षांतील गणेशोत्सव सोहळे, महाआरती आणि भक्तीच्या मंगलमयी क्षणांची काही छायाचित्रे.",
        "gal-t1": "सजलेले श्री गणेश",
        "gal-c1": "उत्सव मूर्ती दर्शन",
        "gal-t2": "भव्य सजावट आणि रोषणाई",
        "gal-c2": "मंडप विद्युत रोषणाई",
        "gal-t3": "महाआरती विधी सोहळा",
        "gal-c3": "भाविक गर्दी आणि भक्ती",
        "gal-t4": "भव्य विसर्जन मिरवणूक",
        "gal-c4": "भगवे ध्वज आणि जल्लोष",
        "btn-view-all-gallery": "सर्व छायाचित्रे पहा",

        // Donate
        "donate-tag": "उत्सवाला सहकार्य करा",
        "donate-title": "ऑनलाईन भक्ती देणगी",
        "donate-desc": "वेबसाईटच्या माध्यमातून सुरक्षित ऑनलाईन देणगी द्या. आपल्या वर्गणीचा वापर केवळ समाजकल्याण आणि गणेशोत्सव व्यवस्थापनासाठी केला जाईल.",
        "donate-qr-badge": "UPI द्वारे देणगी देण्यासाठी स्कॅन करा",
        "btn-copy": "कॉपी करा",
        "donate-box-title": "डिजिटल देणगीचे महत्त्व काय?",
        "donate-box-p1": "या पोर्टलद्वारे मिळणारी प्रत्येक वर्गणी त्वरित आमच्या आकडेवारीमध्ये नोंदवली जाते. यामुळे देणगीदारांमध्ये विश्वास आणि पूर्ण पारदर्शकता राहते.",
        "donate-bullet1": "१००% आर्थिक पारदर्शकता (रोकड गैरव्यवहाराला जागा नाही)",
        "donate-bullet2": "वेबसाईट डॅशबोर्डवर त्वरित रकमेची नोंदणी",
        "donate-bullet3": "देणगीचा वापर आरोग्य शिबिरे व पर्यावरणपूरक कामांसाठी",
        "btn-gateway-donate": "सुरक्षित ऑनलाईन पेमेंट करा",
        "donate-thankyou": "⭐ आपल्या अमूल्य सहकार्याबद्दल धन्यवाद! विघ्नहर्ता आपल्या सर्व इच्छा पूर्ण करो! ⭐",

        // Contact
        "contact-tag": "संपर्क साधा",
        "contact-title": "मंडळाशी संपर्क साधा",
        "contact-desc": "आरती वेळापत्रक, स्वयंसेवक होणे किंवा वर्गणीबद्दल काही प्रश्न आहेत? आमच्या मदत कक्षाशी संपर्क साधा.",
        "c-addr-lbl": "मंडळाचा पत्ता",
        "c-addr-val": "प्लॉट नं. १०८, श्री गणेश नगर, हनुमान मंदिराजवळ, पुणे, महाराष्ट्र - ४११००१",
        "c-phone-lbl": "संपर्क क्रमांक",
        "c-email-lbl": "ईमेल पत्ता",
        "social-lbl": "आमच्याशी जोडून राहा",

        // Footer
        "footer-brand-p": "माय गणेश मंडळ ही एक नोंदणीकृत सामाजिक संस्था असून ती संस्कृती जतन, सामाजिक समता आणि पर्यावरणपूरक उपक्रम राबवण्यावर लक्ष केंद्रित करते.",
        "footer-quick-links": "द्रुत लिंक्स",
        "footer-legal": "कायदा आणि मदत",
        "footer-privacy": "गोपनीयता धोरण",
        "footer-terms": "अटी आणि शर्ती",
        "footer-donate": "वर्गणी मदत केंद्र",
        "footer-copy": "सर्व हक्क राखीव.",
        "footer-designer": "भक्तीभावाने डिझाइन केले"
    }
};

let currentLanguage = 'en';

// Set language translation helper
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    
    // Toggle active classes on language switcher buttons
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-mr').classList.toggle('active', lang === 'mr');
    
    // Select all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element has children but no text or is just plain text
            if (element.children.length === 0 || element.tagName === 'SPAN' || element.tagName === 'SMALL' || element.tagName === 'A' || element.tagName === 'BUTTON' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'P') {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Save language setting to local storage
    localStorage.setItem('mandal-lang', lang);
}

// --- 2. Floating Particles Generator (Canvas-based) ---
function initParticles() {
    const container = document.getElementById('particle-container');
    if (!container) return;

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = container.offsetWidth;
    let height = canvas.height = container.offsetHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = container.offsetWidth;
        height = canvas.height = container.offsetHeight;
    });

    // Particles array
    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height + height, // Start from bottom
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 0.8 + 0.3,
            opacity: Math.random() * 0.6 + 0.2,
            wobble: Math.random() * 2,
            wobbleSpeed: Math.random() * 0.02 + 0.005
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw spiritual light particles (warm gold/amber color)
        ctx.fillStyle = 'rgba(255, 160, 0, ';
        
        particles.forEach(p => {
            p.y -= p.speed;
            p.wobble += p.wobbleSpeed;
            p.x += Math.sin(p.wobble) * 0.4;

            // Reset particle when it floats past screen top
            if (p.y < -10) {
                p.y = height + 10;
                p.x = Math.random() * width;
                p.speed = Math.random() * 0.8 + 0.3;
                p.opacity = Math.random() * 0.6 + 0.2;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 193, 7, ${p.opacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#FFA000';
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    
    animate();
}

// --- 3. Scroll Progress Indicator & Sticky Navbar Background ---
function handleScroll() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    const scrolled = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Scroll progress bar width
    if (scrollIndicator && docHeight > 0) {
        const pct = (scrolled / docHeight) * 100;
        scrollIndicator.style.width = `${pct}%`;
    }
    
    // Sticky navbar backdrop change
    if (header) {
        if (scrolled > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Back to top button visibility
    if (backToTopBtn) {
        if (scrolled > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    }
}

// --- 4. Counter and Progress Circle Animation ---
const progressTargetPercent = 25; // 1,25,000 / 5,00,000 * 100
let countersAnimated = false;

function animateStats() {
    if (countersAnimated) return;
    
    const counters = [
        { id: 'stat-donations', target: 125000, isCurrency: true },
        { id: 'stat-donors', target: 82, isCurrency: false },
        { id: 'stat-target', target: 500000, isCurrency: true },
        { id: 'stat-percent', target: 25, isCurrency: false }
    ];

    counters.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const stepTime = 30; // Milliseconds per tick
        const steps = duration / stepTime;
        const increment = c.target / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= c.target) {
                clearInterval(timer);
                start = c.target;
            }
            
            if (c.isCurrency) {
                el.innerText = '₹' + Math.floor(start).toLocaleString('en-IN');
            } else {
                el.innerText = Math.floor(start).toString();
            }
        }, stepTime);
    });

    // Animate Linear Progress Bar
    const progressBar = document.getElementById('stat-progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progressTargetPercent}%`;
        progressBar.setAttribute('aria-valuenow', progressTargetPercent);
    }

    // Animate Circular Progress Ring
    animateCircularProgress(progressTargetPercent);

    countersAnimated = true;
}

// Circular SVG Progress Ring Logic
function animateCircularProgress(percent) {
    const circle = document.getElementById('progressCircleRing');
    const percentText = document.getElementById('progressPercentText');
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius; // 2 * 3.14159 * 85 ≈ 534
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference; // Start empty

    const offset = circumference - (percent / 100) * circumference;
    
    // Small timeout to allow transition to trigger
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);

    // Text counter inside progress ring
    let start = 0;
    const step = percent / 50;
    const timer = setInterval(() => {
        start += step;
        if (start >= percent) {
            clearInterval(timer);
            start = percent;
        }
        if (percentText) {
            percentText.innerText = `${Math.floor(start)}%`;
        }
    }, 30);
}

// Intersect Observer to trigger stats animation when scrolling into viewport
function initScrollAnimations() {
    const targetSection = document.querySelector('.donation-summary-section');
    if (!targetSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(targetSection);
}

// --- 5. Lightbox Modal Functionality ---
function openLightbox(src, caption) {
    const lightbox = document.getElementById('customLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (!lightbox || !lightboxImg) return;
    
    lightboxImg.src = src;
    if (lightboxCaption) {
        lightboxCaption.innerText = caption;
    }
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('customLightbox');
    if (!lightbox) return;
    
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
}

// Close Lightbox via Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// --- 6. Utility Functions (Copy UPI, Alerts) ---
function copyUpiId() {
    const upiText = document.getElementById('upiId').innerText;
    const copyBtnText = document.querySelector('#btnCopyUpi span');
    const copyIcon = document.getElementById('copyIcon');
    
    navigator.clipboard.writeText(upiText).then(() => {
        if (copyBtnText) {
            copyBtnText.innerText = currentLanguage === 'en' ? 'Copied!' : 'कॉपी झाले!';
        }
        if (copyIcon) {
            copyIcon.className = 'bi bi-check2';
        }
        
        setTimeout(() => {
            if (copyBtnText) {
                copyBtnText.innerText = currentLanguage === 'en' ? 'Copy' : 'कॉपी करा';
            }
            if (copyIcon) {
                copyIcon.className = 'bi bi-clipboard';
            }
        }, 2000);
    }).catch(err => {
        console.error('Error copying UPI ID: ', err);
    });
}

function triggerGatewayPayment() {
    const title = currentLanguage === 'en' ? 'Secure Gateway' : 'सुरक्षित पेमेंट';
    const msg = currentLanguage === 'en' 
        ? 'Simulated Payment Gateway:\n\nIn production, this button connects securely to a payment aggregator (Razorpay/PayU) linked with Google Apps Script backend and Google Sheets ledger database.'
        : 'सिम्युलेटेड पेमेंट गेटवे:\n\nप्रत्यक्ष उत्पादनामध्ये (Production), हे बटन पेमेंट अ‍ॅग्रीगेटरशी (Razorpay/PayU) जोडले जाईल, जे गुगल अ‍ॅप्स स्क्रिप्ट आणि गुगल शीट्स लेजर डेटाबेसशी जोडलेले असेल.';
    
    alert(`💳 ${title}\n\n${msg}`);
}

function handleAdminLogin(event) {
    event.preventDefault();
    const user = document.getElementById('adminUsername').value;
    const pass = document.getElementById('adminPassword').value;

    // Simple test login alert
    if (user === 'admin@mayganeshmandal.org' && pass === 'admin123') {
        alert('🔑 Success!\n\nSimulated authentication successful. Redirecting to Google Apps Script administrative dashboard control panel (English-only)...');
        bootstrap.Modal.getInstance(document.getElementById('admin-modal')).hide();
    } else {
        alert('❌ Error!\n\nInvalid credentials. Please use:\nEmail: admin@mayganeshmandal.org\nPassword: admin123');
    }
}

// --- 7. Page Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });

    // 2. Start Hero Particles
    initParticles();
    
    // 3. Register scroll listener for navbar sticky and scroll progress
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately to check page initial position

    // 4. Initialize scroll triggers for stats counter
    initScrollAnimations();

    // 5. Restore user preferred language from storage if present
    const savedLang = localStorage.getItem('mandal-lang');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        setLanguage('en'); // Default to English
    }
});
