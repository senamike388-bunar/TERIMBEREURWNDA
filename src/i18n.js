import { reactive, computed, inject } from 'vue'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About us',
      services: 'Services',
      gallery: 'Gallery',
      galleryPhotos: 'Photos',
      galleryVideos: 'Videos',
      destination: 'Destination',
      northern: 'Northern Province',
      eastern: 'Eastern Province',
      kigali: 'Kigali City',
      western: 'Western Province',
      southern: 'Southern Province',
      language: 'Language',
      contact: 'Contact'
    },
    home: {
      heroTitle: 'Welcome to Rwanda',
      heroText: 'Discover the beauty of the Land of a Thousand Hills, where culture, nature, cleanliness, peace, and innovation meet together.',
      exploreButton: 'Explore Rwanda',
      learnButton: 'Learn More',
      sectionTitle: 'The Heart of Africa',
      sectionText1: 'Rwanda is known for its breathtaking hills, mountain gorillas, beautiful culture, safety, and rapid development.',
      sectionText2: 'From tourism and technology to agriculture and sports, Rwanda continues to inspire the world with unity and innovation.',
      featuresTitle: 'Why Visit Rwanda?',
      featuresText: 'Experience nature, culture, wildlife, and modern Africa.',
      feature1Title: 'Mountain Gorillas',
      feature1Text: 'Visit Volcanoes National Park and experience Rwanda’s famous gorillas.',
      feature2Title: 'Beautiful Culture',
      feature2Text: 'Enjoy traditional dance, art, music, and Rwanda’s rich heritage.',
      feature3Title: 'Amazing Nature',
      feature3Text: 'Explore lakes, green hills, forests, and beautiful landscapes.',
      statsHills: 'Beautiful Hills',
      statsParks: 'National Parks',
      statsBirds: 'Bird Species',
      statsVisitors: 'Visitors Every Year',
      galleryTitle: 'Explore Rwanda',
      footerTitle: 'Visit Rwanda',
      footerText: 'Experience Peace, Beauty, and Culture'
    },
    about: {
      heroTitle: 'About Rwanda',
      heroText: 'Rwanda is a country of peace, beauty, culture, and innovation. Discover the story behind the Land of a Thousand Hills.',
      sectionTitle: 'The Land of a Thousand Hills',
      paragraph1: 'Rwanda is located in East Africa and is known for its green hills, wildlife, clean cities, and welcoming people. The country has become one of Africa’s fastest-growing nations in technology, tourism, and development.',
      paragraph2: 'Kigali, the capital city, is famous for its cleanliness and safety. Rwanda is also home to rare mountain gorillas found in Volcanoes National Park.',
      paragraph3: 'The people of Rwanda value unity, hard work, peace, and culture. Traditional dances, art, and music remain an important part of daily life.',
      valuesTitle: 'What Makes Rwanda Special',
      valuesText: 'Rwanda continues to inspire Africa and the world.',
      card1Title: 'Tourism',
      card1Text: 'Rwanda attracts visitors from around the world because of its wildlife, lakes, mountains, and natural beauty.',
      card2Title: 'Clean Cities',
      card2Text: 'Kigali is recognized as one of the cleanest and safest cities in Africa because of community responsibility and development.',
      card3Title: 'Innovation',
      card3Text: 'Rwanda is investing in technology, education, and innovation to create a better future for young people.',
      footerTitle: 'Proudly Rwandan',
      footerText: 'Unity • Peace • Progress'
    },
    contact: {
      heroTitle: 'Contact Us',
      heroText: "We'd love to hear from you. Reach out to us for tourism, culture, and travel information about Rwanda.",
      title: 'Get In Touch',
      lead: 'Feel free to contact us anytime. We are always ready to help visitors explore the beauty and culture of Rwanda.',
      addressTitle: 'Address',
      addressLine: 'Kigali, Rwanda',
      phoneTitle: 'Phone',
      phoneNumber: '+250 788 000 000',
      emailTitle: 'Email',
      emailAddress: 'visitrwanda@gmail.com',
      formTitle: 'Send Message',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      messageLabel: 'Message',
      button: 'Send Message',
      footerTitle: 'Visit Rwanda',
      footerText: 'Experience Peace, Beauty, and Culture'
    },
    services: {
      heroTitle: 'Our Services',
      heroText: 'Explore Rwanda with comfort, adventure and unforgettable experiences.',
      title: 'Services We Provide',
      subtitle: 'Everything you need to enjoy Rwanda.',
      card1Title: 'Gorilla Tourism',
      card1Text: 'Visit Volcanoes National Park and experience Rwanda’s famous mountain gorillas.',
      card2Title: 'Luxury Hotels',
      card2Text: 'Stay in world-class hotels including Kigali Marriott, Serena Hotel and Radisson Blu.',
      card3Title: 'Transport Services',
      card3Text: 'Car rentals, airport pickups, city tours and travel assistance.',
      hotelsTitle: 'Popular Hotels',
      hotel1: 'Kigali Marriott Hotel',
      hotel1Text: 'Luxury accommodation in Kigali.',
      hotel2: 'Serena Hotel',
      hotel2Text: 'Premium comfort and hospitality.',
      hotel3: 'Radisson Blu',
      hotel3Text: 'Modern rooms and conference facilities.',
      hotel4: 'Lake Kivu Resort',
      hotel4Text: 'Relaxing views near Lake Kivu.',
      attractionsTitle: 'Top Attractions',
      attraction1: 'Volcanoes Park',
      attraction2: 'Lake Kivu',
      attraction3: 'Nyungwe Forest',
      attraction4: 'Kigali City'
    }
    ,
    gallery: {
      heroTitle: 'Gallery',
      heroText: 'Browse photos and videos showcasing Rwanda’s beauty.',
      sectionTitle: 'Photo Gallery',
      sectionText: 'A selection of landscapes, wildlife, and culture.',
      footerTitle: 'Explore the Gallery',
      footerText: 'Enjoy photos and videos from across Rwanda',
      videosTitle: 'Videos',
      videosText: 'Watch short videos about Rwanda',
      video1Title: 'Rwanda Highlights',
      video2Title: 'Wildlife Encounters',
      video3Title: 'Cultural Moments',
      video4Title: 'Scenic Landscapes'
    },
    destinations: {
      common: {
        topAttractions: 'Top Attractions',
        thingsToDo: 'Things To Do'
      },
      eastern: {
        title: 'Eastern Province',
        heroText: 'Wildlife • Nature • Culture • Adventure',
        welcomeTitle: 'Welcome to Eastern Province',
        welcomeText: "Eastern Province is famous for Akagera National Park, lakes, wildlife, and stunning landscapes.",
        galleryTitle: 'Wildlife Gallery',
        findTitle: 'Find Eastern Province',
        findText: 'Located in the eastern region of Rwanda.',
        footerTitle: 'Visit Eastern Province',
        footerText: 'Explore Nature, Wildlife and Culture'
      },
      northern: {
        title: 'Northern Province',
        heroText: 'Home of Mountain Gorillas and Volcanoes',
        welcomeTitle: 'Welcome to Northern Province',
        welcomeText: 'Northern Province is home to Volcanoes National Park, mountain gorillas, and breathtaking scenery.',
        volcanoesTitle: 'Volcanoes National Park',
        volcanoesText: "Rwanda's most famous national park, home to endangered mountain gorillas and the Virunga Volcanoes.",
        galleryTitle: 'Northern Province Gallery',
        hotelsTitle: 'Popular Hotels',
        findTitle: 'Find Northern Province',
        info: {
          title: 'Province Information',
          province: 'Northern Province',
          city: 'Musanze',
          feature1: 'Volcanoes National Park',
          feature2: 'Gorilla Trekking',
          feature3: 'Twin Lakes Burera & Ruhondo'
        },
        footerTitle: 'Visit Northern Province',
        footerText: 'Discover Gorillas, Volcanoes and Adventure'
      },
      western: {
        title: 'Western Province',
        heroText: 'Home of Lake Kivu and Nyungwe Forest',
        galleryTitle: 'Western Province Gallery',
        hotelsTitle: 'Popular Hotels',
        findTitle: 'Find Western Province',
        footerTitle: 'Visit Western Province',
        footerText: "Discover Rwanda's Natural Paradise"
      },
      southern: {
        title: 'Southern Province',
        heroText: 'The Cultural Heart of Rwanda',
        footerTitle: 'Visit Southern Province',
        footerText: "Discover Rwanda's Rich Cultural Heritage"
      },
      kigali: {
        title: 'Kigali City',
        heroText: 'The Heart of Rwanda',
        welcomeTitle: 'Welcome to Kigali',
        welcomeText: "Kigali is the capital city of Rwanda and one of the cleanest, safest, and fastest-growing cities in Africa.",
        galleryTitle: 'Kigali Gallery',
        hotelsTitle: 'Best Hotels in Kigali',
        findTitle: 'Find Kigali',
        info: {
          title: 'City Information',
          capital: 'Capital City of Rwanda',
          infrastructure: 'Modern Infrastructure',
          airport: 'Kigali International Airport',
          hub: 'Business & Technology Hub',
          connected: 'Connected to all provinces'
        },
        footerTitle: 'Visit Kigali',
        footerText: "Discover Rwanda's Modern and Beautiful Capital"
      }
    },
    footer: {
      brand: 'TEMBERURWANDA',
      desc: 'Discover the beauty of the land of a thousand hills',
      quickLinks: 'Quick Links',
      destinations: 'Destinations',
      contact: 'Contact',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      copy: '@2026 Visit Rwanda'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      galleryPhotos: 'Photos',
      galleryVideos: 'Vidéos',
      destination: 'Destination',
      northern: 'Province Nord',
      eastern: 'Province Est',
      kigali: 'Ville de Kigali',
      western: 'Province Ouest',
      southern: 'Province Sud',
      language: 'Langue',
      contact: 'Contact'
    },
    home: {
      heroTitle: 'Bienvenue au Rwanda',
      heroText: 'Découvrez la beauté du pays des mille collines, où la culture, la nature, la propreté, la paix et l’innovation se rencontrent.',
      exploreButton: 'Explorer le Rwanda',
      learnButton: 'En savoir plus',
      sectionTitle: 'Le Cœur de l’Afrique',
      sectionText1: 'Le Rwanda est connu pour ses collines à couper le souffle, ses gorilles de montagne, sa belle culture, sa sécurité et son développement rapide.',
      sectionText2: 'Du tourisme à la technologie en passant par l’agriculture et le sport, le Rwanda continue d’inspirer le monde avec l’unité et l’innovation.',
      featuresTitle: 'Pourquoi visiter le Rwanda ?',
      featuresText: 'Découvrez la nature, la culture, la faune et l’Afrique moderne.',
      feature1Title: 'Gorilles de montagne',
      feature1Text: 'Visitez le parc national des Volcans et vivez l’expérience des célèbres gorilles du Rwanda.',
      feature2Title: 'Belle culture',
      feature2Text: 'Profitez de la danse traditionnelle, de l’art, de la musique et du riche patrimoine du Rwanda.',
      feature3Title: 'Nature incroyable',
      feature3Text: 'Explorez les lacs, les collines verdoyantes, les forêts et les paysages magnifiques.',
      statsHills: 'Collines magnifiques',
      statsParks: 'Parcs nationaux',
      statsBirds: 'Espèces d’oiseaux',
      statsVisitors: 'Visiteurs chaque année',
      galleryTitle: 'Explorez le Rwanda',
      footerTitle: 'Visitez le Rwanda',
      footerText: 'Découvrez la paix, la beauté et la culture'
    },
    about: {
      heroTitle: 'À propos du Rwanda',
      heroText: 'Le Rwanda est un pays de paix, de beauté, de culture et d’innovation. Découvrez l’histoire du pays des mille collines.',
      sectionTitle: 'Le pays des mille collines',
      paragraph1: 'Le Rwanda est situé en Afrique de l’Est et est connu pour ses collines verdoyantes, sa faune, ses villes propres et son peuple accueillant. Le pays est devenu l’un des pays d’Afrique à la croissance la plus rapide dans la technologie, le tourisme et le développement.',
      paragraph2: 'Kigali, la capitale, est célèbre pour sa propreté et sa sécurité. Le Rwanda est également le foyer des rares gorilles de montagne du parc national des Volcans.',
      paragraph3: 'Le peuple rwandais valorise l’unité, le travail acharné, la paix et la culture. Les danses traditionnelles, l’art et la musique restent une partie importante de la vie quotidienne.',
      valuesTitle: 'Ce qui rend le Rwanda spécial',
      valuesText: 'Le Rwanda continue d’inspirer l’Afrique et le monde.',
      card1Title: 'Tourisme',
      card1Text: 'Le Rwanda attire des visiteurs du monde entier grâce à sa faune, ses lacs, ses montagnes et sa beauté naturelle.',
      card2Title: 'Villes propres',
      card2Text: 'Kigali est reconnue comme l’une des villes les plus propres et les plus sûres d’Afrique grâce à la responsabilité communautaire et au développement.',
      card3Title: 'Innovation',
      card3Text: 'Le Rwanda investit dans la technologie, l’éducation et l’innovation pour créer un avenir meilleur pour les jeunes.',
      footerTitle: 'Fièrement rwandais',
      footerText: 'Unité • Paix • Progrès'
    },
    contact: {
      heroTitle: 'Contactez-nous',
      heroText: 'Nous aimerions avoir de vos nouvelles. Contactez-nous pour des informations sur le tourisme, la culture et les voyages au Rwanda.',
      title: 'Entrer en contact',
      lead: 'N’hésitez pas à nous contacter à tout moment. Nous sommes toujours prêts à aider les visiteurs à explorer la beauté et la culture du Rwanda.',
      addressTitle: 'Adresse',
      addressLine: 'Kigali, Rwanda',
      phoneTitle: 'Téléphone',
      phoneNumber: '+250 788 000 000',
      emailTitle: 'Email',
      emailAddress: 'visitrwanda@gmail.com',
      formTitle: 'Envoyer un message',
      nameLabel: 'Nom complet',
      emailLabel: 'Adresse e-mail',
      messageLabel: 'Message',
      button: 'Envoyer le message',
      footerTitle: 'Visitez le Rwanda',
      footerText: 'Découvrez la paix, la beauté et la culture'
    },
    services: {
      heroTitle: 'Nos services',
      heroText: 'Explorez le Rwanda avec confort, aventure et expériences inoubliables.',
      title: 'Services que nous fournissons',
      subtitle: 'Tout ce dont vous avez besoin pour profiter du Rwanda.',
      card1Title: 'Tourisme gorille',
      card1Text: 'Visitez le parc national des Volcans et vivez l’expérience des célèbres gorilles de montagne du Rwanda.',
      card2Title: 'Hôtels de luxe',
      card2Text: 'Séjournez dans des hôtels de classe mondiale tels que Kigali Marriott, Serena Hotel et Radisson Blu.',
      card3Title: 'Services de transport',
      card3Text: 'Location de voitures, transferts aéroport, visites de la ville et assistance voyage.',
      hotelsTitle: 'Hôtels populaires',
      hotel1: 'Kigali Marriott Hotel',
      hotel1Text: 'Hébergement de luxe à Kigali.',
      hotel2: 'Serena Hotel',
      hotel2Text: 'Confort et hospitalité premium.',
      hotel3: 'Radisson Blu',
      hotel3Text: 'Chambres modernes et installations de conférence.',
      hotel4: 'Lake Kivu Resort',
      hotel4Text: 'Vues relaxantes près du lac Kivu.',
      attractionsTitle: 'Attractions principales',
      attraction1: 'Parc des Volcans',
      attraction2: 'Lac Kivu',
      attraction3: 'Forêt de Nyungwe',
      attraction4: 'Ville de Kigali'
    }
    ,
    gallery: {
      heroTitle: 'Galerie',
      heroText: 'Parcourez des photos et des vidéos montrant la beauté du Rwanda.',
      sectionTitle: 'Galerie de photos',
      sectionText: 'Une sélection de paysages, faune et culture.',
      footerTitle: 'Explorez la Galerie',
      footerText: 'Profitez des photos et vidéos du Rwanda',
      videosTitle: 'Vidéos',
      videosText: 'Regardez de courtes vidéos sur le Rwanda',
      video1Title: 'Temps forts du Rwanda',
      video2Title: 'Rencontres avec la faune',
      video3Title: 'Moments culturels',
      video4Title: 'Paysages pittoresques'
    },
    destinations: {
      common: {
        topAttractions: 'Attractions principales',
        thingsToDo: 'Choses à faire'
      },
      eastern: {
        title: 'Province Est',
        heroText: 'Faune • Nature • Culture • Aventure',
        welcomeTitle: 'Bienvenue dans la Province Est',
        welcomeText: 'La Province Est est célèbre pour le parc national d’Akagera, les lacs, la faune et de magnifiques paysages.',
        galleryTitle: 'Galerie de la faune',
        findTitle: 'Trouver la Province Est',
        findText: 'Située dans la région est du Rwanda.',
        footerTitle: 'Visitez la Province Est',
        footerText: 'Explorez la nature, la faune et la culture'
      },
      northern: {
        title: 'Province Nord',
        heroText: 'Terre des gorilles de montagne et des volcans',
        welcomeTitle: 'Bienvenue dans la Province Nord',
        welcomeText: 'La Province Nord abrite le parc national des Volcans, des gorilles de montagne et des paysages à couper le souffle.',
        volcanoesTitle: 'Parc national des Volcans',
        volcanoesText: 'Le parc national le plus célèbre du Rwanda, foyer des gorilles de montagne et des volcans des Virunga.',
        galleryTitle: 'Galerie de la Province Nord',
        hotelsTitle: 'Hôtels populaires',
        findTitle: 'Trouver la Province Nord',
        info: {
          title: 'Informations sur la province',
          province: 'Province Nord',
          city: 'Musanze',
          feature1: 'Parc national des Volcans',
          feature2: 'Randonnée des gorilles',
          feature3: 'Lacs jumeaux Burera & Ruhondo'
        },
        footerTitle: 'Visitez la Province Nord',
        footerText: 'Découvrez les gorilles, les volcans et l’aventure'
      },
      western: {
        title: 'Province Ouest',
        heroText: 'Terre du lac Kivu et de la forêt de Nyungwe',
        galleryTitle: 'Galerie de la Province Ouest',
        hotelsTitle: 'Hôtels populaires',
        findTitle: 'Trouver la Province Ouest',
        footerTitle: 'Visitez la Province Ouest',
        footerText: 'Découvrez le paradis naturel du Rwanda'
      },
      southern: {
        title: 'Province Sud',
        heroText: 'Le cœur culturel du Rwanda',
        footerTitle: 'Visitez la Province Sud',
        footerText: 'Découvrez le riche patrimoine culturel du Rwanda'
      },
      kigali: {
        title: 'Ville de Kigali',
        heroText: 'Le cœur du Rwanda',
        welcomeTitle: 'Bienvenue à Kigali',
        welcomeText: 'Kigali est la capitale du Rwanda et l’une des villes les plus propres, sûres et à la croissance la plus rapide d’Afrique.',
        galleryTitle: 'Galerie de Kigali',
        hotelsTitle: 'Meilleurs hôtels à Kigali',
        findTitle: 'Trouver Kigali',
        info: {
          title: 'Informations sur la ville',
          capital: 'Capitale du Rwanda',
          infrastructure: 'Infrastructure moderne',
          airport: 'Aéroport international de Kigali',
          hub: 'Centre des affaires et de la technologie',
          connected: 'Connectée à toutes les provinces'
        },
        footerTitle: 'Visitez Kigali',
        footerText: 'Découvrez la capitale moderne et magnifique du Rwanda'
      }
    },
    footer: {
      brand: 'TEMBERURWANDA',
      desc: 'Découvrez la beauté du pays des mille collines',
      quickLinks: 'Liens rapides',
      destinations: 'Destinations',
      contact: 'Contact',
      phoneLabel: 'Téléphone',
      emailLabel: 'Email',
      copy: '@2026 Visitez le Rwanda'
    }
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      gallery: 'Galerie',
      galleryPhotos: 'Amafoto',
      galleryVideos: 'Videwo',
      destination: 'Ahantu',
      northern: 'Amajyaruguru',
      eastern: 'Iburasirazuba',
      kigali: 'Kigali',
      western: 'Iburengerazuba',
      southern: 'Amajyepfo',
      language: 'Ururimi',
      contact: 'Twandikire'
    },
    home: {
      heroTitle: 'Murakaza neza mu Rwanda',
      heroText: 'Menya ubwiza bw’igihugu cy’imisozi igihumbi, aho umuco, kamere, isuku, amahoro n’udushya bihuza.',
      exploreButton: 'Sura u Rwanda',
      learnButton: 'Menya byinshi',
      sectionTitle: 'Umutima w’Afurika',
      sectionText1: 'U Rwanda ruzwi ku misozi myiza, ingagi z’imisozi, umuco mwiza, umutekano no gukura vuba.',
      sectionText2: 'Ku bijyanye n’ubukerarugendo, ikoranabuhanga, ubuhinzi n’imikino, u Rwanda rukomeza guhesha ishema isi kubera ubumwe n’udushya.',
      featuresTitle: 'Impamvu zo gusura u Rwanda',
      featuresText: 'Menya kamere, umuco, inyamaswa n’Afurika igezweho.',
      feature1Title: 'Ingagi z’imisozi',
      feature1Text: 'Sura Pariki y’Igihugu y’Ingagi urebe ingagi zikomeye mu Rwanda.',
      feature2Title: 'Umuco mwiza',
      feature2Text: 'Ushyikirane n’imbyino gakondo, ubuhanzi, umuziki n’umuco w’u Rwanda.',
      feature3Title: 'Kamere nziza',
      feature3Text: 'Sura ibiyaga, imisozi y’icyatsi, amashyamba n’ahantu nyaburanga byiza.',
      statsHills: 'Imisozi myiza',
      statsParks: 'Pariki z’igihugu',
      statsBirds: 'Ubwoko bw’inyoni',
      statsVisitors: 'Abashyitsi buri mwaka',
      galleryTitle: 'Sura u Rwanda',
      footerTitle: 'Sura u Rwanda',
      footerText: 'Menya amahoro, ubwiza n’umuco'
    },
    about: {
      heroTitle: 'Ibyerekeye u Rwanda',
      heroText: 'U Rwanda ni igihugu cy’amahoro, ubwiza, umuco n’udushya. Menya inkuru y’igihugu cy’imisozi igihumbi.',
      sectionTitle: 'Igihugu cy’imisozi igihumbi',
      paragraph1: 'U Rwanda ruherereye muri Afurika y’Iburasirazuba kandi ruzwi ku misozi yacyo y’icyatsi, inyamaswa, imijyi isukuye n’abaturage bakirana neza. Igihugu cyahindutse kimwe mu byihuta muri Afurika mu ikoranabuhanga, ubukerarugendo n’iterambere.',
      paragraph2: 'Kigali, umurwa mukuru, uzwiho isuku n’umutekano. U Rwanda kandi n’urugo rw’ingagi z’imisozi ziboneka muri Pariki y’Igihugu y’Ingagi.',
      paragraph3: 'Abanyarwanda bubaha ubumwe, gukora cyane, amahoro n’umuco. Imbyino gakondo, ubuhanzi n’umuziki bikomeje kuba igice cy’umunsi ku munsi.',
      valuesTitle: 'Impamvu u Rwanda rutandukanye',
      valuesText: 'U Rwanda rukomeza guha abandi isura nziza muri Afurika no ku isi.',
      card1Title: 'Ubukerarugendo',
      card1Text: 'U Rwanda rukurura abashyitsi baturutse impande zose z’isi kubera inyamaswa, ibiyaga, imisozi n’ubwiza kamere.',
      card2Title: 'Imijyi isukuye',
      card2Text: 'Kigali izwi nka imwe mu mijyi isukuye kandi itekanye muri Afurika kubera inshingano z’abaturage n’iterambere.',
      card3Title: 'Udushya',
      card3Text: 'U Rwanda rushora imari mu ikoranabuhanga, uburezi n’udushya kugira ngo habeho ejo heza ku rubyiruko.',
      footerTitle: 'U Rwanda rwishimiwe',
      footerText: 'Ubumwe • Amahoro • Iterambere'
    },
    contact: {
      heroTitle: 'Twandikire',
      heroText: 'Turashaka kumva ubutumwa bwawe. Tugezeho kugira ngo ubone amakuru y’ubukerarugendo, umuco n’ingendo mu Rwanda.',
      title: 'Tubwire',
      lead: 'Wajya utwandikira igihe icyo ari cyo cyose. Turi hano kugufasha gusura ubwiza n’umuco by’u Rwanda.',
      addressTitle: 'Aderesi',
      addressLine: 'Kigali, Rwanda',
      phoneTitle: 'Telefoni',
      phoneNumber: '+250 788 000 000',
      emailTitle: 'Email',
      emailAddress: 'visitrwanda@gmail.com',
      formTitle: 'Ohereza ubutumwa',
      nameLabel: 'Amazina yose',
      emailLabel: 'Aderesi ya email',
      messageLabel: 'Ubutumwa',
      button: 'Ohereza ubutumwa',
      footerTitle: 'Sura u Rwanda',
      footerText: 'Menya amahoro, ubwiza n’umuco'
    },
    services: {
      heroTitle: 'Serivisi zacu',
      heroText: 'Sura u Rwanda mu buryo bworoshye, ibyishimo n’ibikorwa byibukwa.',
      title: 'Serivisi dutanga',
      subtitle: 'Icyo ukeneye cyose kugira ngo wishimire u Rwanda.',
      card1Title: 'Urugendo rw’ingagi',
      card1Text: 'Sura Pariki y’Igihugu y’Ingagi urebe ingagi zizwi cyane mu Rwanda.',
      card2Title: 'Amahoteli y’icyubahiro',
      card2Text: 'Sura amahoteli akomeye nka Kigali Marriott, Serena Hotel na Radisson Blu.',
      card3Title: 'Serivisi zo gutwara',
      card3Text: 'Gukodesha imodoka, kwakira ku kibuga cy’indege, ingendo muri Kigali n’ubufasha mu rugendo.',
      hotelsTitle: 'Amahoteli akunzwe',
      hotel1: 'Kigali Marriott Hotel',
      hotel1Text: 'Aho kurara mu cyubahiro i Kigali.',
      hotel2: 'Serena Hotel',
      hotel2Text: 'Confort yihariye n’ubwuzu.',
      hotel3: 'Radisson Blu',
      hotel3Text: 'Ibicumbi bigezweho n’imyiteguro y’inama.',
      hotel4: 'Lake Kivu Resort',
      hotel4Text: 'Ibyiza byo kuruhukira hafi y’ikiyaga cya Kivu.',
      attractionsTitle: 'Ahantu nyaburanga',
      attraction1: 'Pariki y’Ingagi',
      attraction2: 'Ikiyaga cya Kivu',
      attraction3: 'Parike ya Nyungwe',
      attraction4: 'Umujyi wa Kigali'
    }
    ,
    gallery: {
      heroTitle: 'Galerie',
      heroText: 'Reba amafoto na videwo byerekana ubwiza bw’u Rwanda.',
      sectionTitle: 'Gallery y’amafoto',
      sectionText: 'Amahitamo y’ibyiza by’imisozi, inyamaswa n’umuco.',
      footerTitle: 'Sura Galerie',
      footerText: 'Wishimire amafoto na videwo biturutse mu Rwanda',
      videosTitle: 'Videwo',
      videosText: 'Reba videwo ngufi zivuga ku Rwanda',
      video1Title: 'Ibyiza by’u Rwanda',
      video2Title: 'Inyamaswa zigaragara',
      video3Title: 'Ibihe by’umuco',
      video4Title: 'Ahandi heza'
    },
    destinations: {
      common: {
        topAttractions: 'Ahantu nyaburanga',
        thingsToDo: 'Ibyo gukora'
      },
      eastern: {
        title: 'Iburasirazuba',
        heroText: 'Inyamaswa • Kamere • Umuco • Ubukerarugendo',
        welcomeTitle: 'Murakaza neza mu Karere k’Iburasirazuba',
        welcomeText: 'Akarere k’iburasirazuba kazwiho pariki y’igihugu ya Akagera, ibiyaga, inyamaswa n’imisozi myiza.',
        galleryTitle: 'Gallery y’inyamaswa',
        findTitle: 'Aho Iburasirazuba biherereye',
        findText: 'Giherereye mu burasirazuba bw’u Rwanda.',
        footerTitle: 'Sura Iburasirazuba',
        footerText: 'Sura kamere, inyamaswa n’umuco'
      },
      northern: {
        title: 'Amajyaruguru',
        heroText: 'Ahantu h’ingagi n’imisozi itobora',
        welcomeTitle: 'Murakaza neza mu Amajyaruguru',
        welcomeText: 'Amajyaruguru ni urugo rwa Pariki y’Igihugu y’Ingagi, ingagi z’imisozi n’imisozi isa neza.',
        volcanoesTitle: 'Pariki y’Igihugu y’Ingagi',
        volcanoesText: 'Pariki izwi cyane mu Rwanda, izwiho ingagi z’imisozi na Virunga.',
        galleryTitle: 'Gallery y’Amajyaruguru',
        hotelsTitle: 'Amahoteli akunzwe',
        findTitle: 'Aho Amajyaruguru ari',
        info: {
          title: 'Amakuru y’Akarere',
          province: 'Amajyaruguru',
          city: 'Musanze',
          feature1: 'Pariki y’Igihugu y’Ingagi',
          feature2: 'Gusura ingagi',
          feature3: 'Ibiyaga by’udushya Burera & Ruhondo'
        },
        footerTitle: 'Sura Amajyaruguru',
        footerText: 'Menya ingagi, imisozi n’ubukerarugendo'
      },
      western: {
        title: 'Iburengerazuba',
        heroText: 'Aho Ikiguzi cya Kivu n’ishyamba rya Nyungwe biri',
        galleryTitle: 'Gallery y’Iburengerazuba',
        hotelsTitle: 'Amahoteli akunzwe',
        findTitle: 'Aho Iburengerazuba riherereye',
        footerTitle: 'Sura Iburengerazuba',
        footerText: 'Menya ibyiza karemano by’u Rwanda'
      },
      southern: {
        title: 'Amajyepfo',
        heroText: 'Umutima w’umuco w’u Rwanda',
        footerTitle: 'Sura Amajyepfo',
        footerText: 'Menya umurage ukungahaye w’u Rwanda'
      },
      kigali: {
        title: 'Umujyi wa Kigali',
        heroText: 'Umutima w’u Rwanda',
        welcomeTitle: 'Murakaza neza i Kigali',
        welcomeText: 'Kigali ni umurwa mukuru w’u Rwanda, uzwiho isuku, umutekano n’iterambere.',
        galleryTitle: 'Gallery ya Kigali',
        hotelsTitle: 'Amahoteli meza i Kigali',
        findTitle: 'Aho Kigali iherereye',
        info: {
          title: 'Amakuru y’Umujyi',
          capital: 'Umurwa mukuru w’u Rwanda',
          infrastructure: 'Ibikorwaremezo byigezweho',
          airport: 'Ikibuga cy’indege cya Kigali',
          hub: 'Ikicaro cy’ubucuruzi n’ikoranabuhanga',
          connected: 'Kihuza na za provinces zose'
        },
        footerTitle: 'Sura Kigali',
        footerText: 'Menya umujyi mwiza kandi wubashywe'
      }
    },
    footer: {
      brand: 'TEMBERURWANDA',
      desc: 'Menya ubwiza bw\'igihugu cy\'imisozi igihumbi',
      quickLinks: 'Amalink',
      destinations: 'Aho gusura',
      contact: 'Twandikire',
      phoneLabel: 'Telefoni',
      emailLabel: 'Email',
      copy: '@2026 Sura u Rwanda'
    }
  }
}

const state = reactive({ locale: 'en' })

function getTranslation(key) {
  const path = key.split('.')
  const localeMessages = messages[state.locale] || messages.en
  return path.reduce((current, part) => (current && current[part] != null ? current[part] : undefined), localeMessages)
}

export function t(key) {
  return getTranslation(key) || key
}

export function setLocale(locale) {
  if (messages[locale]) {
    state.locale = locale
  }
}

export function useI18n() {
  const i18n = inject('i18n')
  if (!i18n) {
    throw new Error('i18n plugin has not been installed')
  }
  return i18n
}

export default {
  install(app) {
    app.provide('i18n', {
      locale: computed(() => state.locale),
      t,
      setLocale
    })
    app.config.globalProperties.$t = t
    app.config.globalProperties.$locale = computed(() => state.locale)
  }
}
