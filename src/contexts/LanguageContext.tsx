import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ms';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.download': 'Download App',
    'header.comingSoon': 'Coming Soon',
    'header.about': 'About Us',
    'header.features': 'Features',
    'header.faq': 'FAQ',
    'header.contact': 'Contact',
    'header.careers': 'Careers',
    'header.support': 'Support Us',
    
    // Landing Hero
    'landing.hero.title': 'Cari Murah, Hidup Bijak',
    'landing.hero.subtitle': 'One app. Every store. A smarter Brunei with CariGo.',
    'landing.hero.downloadNow': 'Download Now',
    'landing.hero.learnMore': 'Learn More',
    
    // Features
    'landing.features.compare.title': 'Price Comparison',
    'landing.features.compare.desc': 'Compare prices across multiple stores instantly and find the best deals',
    'landing.features.inventory.title': 'Real-Time Inventory',
    'landing.features.inventory.desc': 'Check product availability at nearby stores before you visit',
    'landing.features.map.title': 'Interactive Map',
    'landing.features.map.desc': 'Locate stores on the map and get directions with one tap',
    'landing.features.allinone.title': 'All-in-One Platform',
    'landing.features.allinone.desc': 'Browse, compare, and purchase everything in a single app',
    'landing.features.learnMore': 'Learn More',
    
    // Features Page
    'features.pageTitle': 'Powerful Features for Smarter Shopping',
    'features.pageSubtitle': 'Everything you need to shop smarter, save time, and get the best deals in Brunei',
    'features.keyBenefits': 'Key Benefits',
    'features.compare.title': 'Instant Price Comparison',
    'features.compare.desc': 'Stop overpaying. See all available prices at a glance and choose the store that offers you the best deal. Our smart comparison engine scans multiple retailers in real-time to bring you accurate pricing information.',
    'features.compare.benefit1': 'Compare prices from multiple stores instantly',
    'features.compare.benefit2': 'See price history and trends to time your purchase',
    'features.compare.benefit3': 'Get alerts when prices drop on items you want',
    'features.inventory.title': 'Real-Time Stock Availability',
    'features.inventory.desc': 'Never waste a trip to a store that\'s out of stock. Our platform syncs directly with retailer inventory systems to show you what\'s actually available right now, so you can shop with confidence.',
    'features.inventory.benefit1': 'Know exactly what\'s in stock before you go',
    'features.inventory.benefit2': 'Get notifications when out-of-stock items are back',
    'features.inventory.benefit3': 'See stock levels at multiple locations simultaneously',
    'features.map.title': 'Smart Location Search',
    'features.map.desc': 'Find what you need on a map. See which stores near you have the product in stock, compare distances, and decide whether you want the nearest option or are willing to drive a bit further for a better price.',
    'features.map.benefit1': 'Visual map showing all stores with your desired product',
    'features.map.benefit2': 'One-tap directions to your chosen store',
    'features.map.benefit3': 'Filter by distance, price, or both',
    'features.allinone.title': 'Complete Shopping Experience',
    'features.allinone.desc': 'From the moment you search to the moment you receive your item, everything happens in one seamless flow. Browse, compare, purchase, track, and pay—all without leaving the app.',
    'features.allinone.benefit1': 'Unified shopping cart across multiple stores',
    'features.allinone.benefit2': 'Real-time order tracking and updates',
    'features.allinone.benefit3': 'Secure payment with local payment methods',
    'features.ctaTitle': 'Ready to Shop Smarter?',
    'features.ctaSubtitle': 'Download CariGo today and experience the future of shopping in Brunei',
    
    // Download Section
    'landing.download.title': 'Get Started Today',
    'landing.download.subtitle': 'Download CariGo now and experience smarter shopping',
    'landing.download.appstore': 'Download on App Store',
    'landing.download.playstore': 'Get it on Google Play',
    
    // Merchant Section
    'landing.merchant.title': 'Are You a Merchant?',
    'landing.merchant.subtitle': 'Join CariGo and reach thousands of customers across Brunei',
    'landing.merchant.button': 'Open Your Store',
    
    // About
    'about.title': 'About CariGo',
    'about.story.title': 'It Started with a Simple Question',
    'about.story.p1': 'Picture this: You\'re looking for a handheld fan on a hot Brunei afternoon. You open Instagram, scroll through endless posts, type "handy fan" in the search... and most results aren\'t even from Brunei. You have no idea which local store has it in stock, where it\'s cheapest, or which shop is closest to you.',
    'about.story.p2': 'We\'ve all been there. Spending time jumping between social media apps, messaging multiple stores, waiting for replies that may never come. There had to be a better way—a compass for smart shopping in Brunei.',
    'about.mission.title': 'What We Believe',
    'about.mission.desc': 'Shopping should be simple. Type what you want, see exactly where to get it—cheapest, nearest, or the perfect balance—and buy it right there. No endless scrolling. No guessing. No wasted time. That\'s the experience every Bruneian deserves.',
    'about.vision.title': 'Built for Brunei, By Bruneians',
    'about.vision.desc': 'Global platforms like Shopee haven\'t entered Brunei, and there\'s a reason—our unique payment systems, our tight-knit communities, our way of life. But that\'s exactly why CariGo exists. We understand how Bruneians shop, how we trust recommendations from friends and family, how word-of-mouth spreads like wildfire. We\'re not trying to be Shopee. We\'re building something better—something that actually works for us.',
    'about.values.title': 'Your Shopping, Simplified',
    'about.values.transparency': 'Instant Price Comparison: Best prices at a glance. No guesswork, no overpaying.',
    'about.values.community': 'Smart Location Search: See nearby stock on a map—or drive a bit to save more.',
    'about.values.innovation': 'Everything in One Place: Search, buy, track, and pay—fast, simple, in one app.',
    'about.commitment.title': 'This is Just the Beginning',
    'about.commitment.desc': 'Some people say Brunei\'s market is too small. We say: to change the world, start by changing your own community. With almost everyone owning a smartphone and a car, imagine the convenience—search for one minute, drive to the store, and get what you need the same day. That\'s not just shopping. That\'s living smarter. Join us on this journey to create a whole new shopping experience in Brunei.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.category.about': 'About CariGo',
    'faq.category.shoppers': 'For Shoppers (Users)',
    'faq.category.vendors': 'For Vendors',
    'faq.category.vision': 'Vision & Future',
    'faq.q1': 'What is CariGo?',
    'faq.a1': 'CariGo is a Brunei-born digital marketplace that connects local shoppers with nearby stores — all in one app.\n\nYou can search for any product, instantly find which store sells it cheapest, closest, or best balanced, and make your purchase conveniently online or for pickup.\n\nOur vision is simple: to build a connected, digital Brunei where shopping becomes easier, faster, and entirely local.',
    'faq.q2': 'How is CariGo different from Shopee or Amazon?',
    'faq.a2': 'Unlike international platforms, CariGo is made for Brunei\'s local market.\nWe focus on local retailers, local inventory, and local payment options.\nOur goal isn\'t to compete globally, but to help Brunei\'s small businesses step confidently into the digital era — while keeping every ringgit spent circulating within our community.',
    'faq.q3': 'Who can use CariGo?',
    'faq.a3': 'Everyone in Brunei!\nWhether you\'re a shopper looking for everyday goods or a small shop owner who wants to go digital, CariGo is built to serve both sides of the market.',
    'faq.q4': 'What makes CariGo innovative?',
    'faq.a4': 'CariGo combines product search, real-time inventory management, and local business integration — something no other Bruneian app currently offers.\n\nIt allows users to:\n• Instantly compare prices and distances\n• Discover verified local stores\n• Complete their purchase within seconds\n\nFor retailers, CariGo provides:\n• Smart sales analytics\n• Easy stock synchronization (CSV/API)\n• Automated reports and faster payouts',
    'faq.q5': 'Do I need an account to use CariGo?',
    'faq.a5': 'You can browse freely, but you\'ll need an account to place orders or save favorites.\nRegistration is simple — just your email or phone number.',
    'faq.q6': 'How do I pay for my purchases?',
    'faq.a6': 'CariGo supports local digital payment methods, including debit cards, online banking, and wallet integrations.\nWe are also working to include Pay in Store and Cashless QR payment options in the near future.',
    'faq.q7': 'Is delivery available?',
    'faq.a7': 'At launch, CariGo focuses on store pickup — allowing users to find items nearby and get them the same day.\nDelivery partnerships are part of our future roadmap, and we\'ll expand this feature progressively.',
    'faq.q8': 'Are prices on CariGo accurate and updated?',
    'faq.a8': 'Yes.\nAll prices and availability are managed directly by the stores themselves through our seller dashboard, ensuring real-time accuracy.',
    'faq.q9': 'What should I do if something goes wrong with my order?',
    'faq.a9': 'You can contact the seller directly through the in-app chat or use the Help > Report Issue button.\nOur support team will review the case and assist both parties fairly.',
    'faq.q10': 'How can I join CariGo as a vendor?',
    'faq.a10': 'Go to our Sell on CariGo page and fill out the vendor application form.\n\nYou\'ll need:\n• Basic business information\n• Contact and address details\n• Proof of business registration or identity\n• Bank account for payouts\n\nWe review all applications within 1–3 working days.',
    'faq.q17': 'What is CariGo\'s long-term vision?',
    'faq.a17': 'To empower Brunei\'s digital economy — one store at a time.\nWe believe local innovation is the key to sustainable growth. CariGo aims to create a connected ecosystem where:\n• Small retailers thrive online\n• Consumers enjoy easier access to local goods\n• Brunei strengthens its self-sufficient, digital-ready economy',
    'faq.q18': 'Will CariGo expand beyond Brunei?',
    'faq.a18': 'Our first mission is to serve Brunei perfectly.\nHowever, we plan to connect with regional partners in ASEAN for cross-border retail opportunities once the local model is strong and sustainable.',
    'faq.q19': 'How does CariGo ensure trust and safety?',
    'faq.a19': 'Every vendor is verified (KYC/KYB) before activation.\nTransactions use secure payment gateways (PCI DSS compliant), and all communications are encrypted.\nOur moderation team monitors listings to maintain safety and reliability.',
    'faq.q20': 'How can I contact CariGo for help or partnership inquiries?',
    'faq.a20': 'Support: support@carigo.bn',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? We\'d love to hear from you',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.category': 'Category',
    'contact.categoryPlaceholder': 'Select a category',
    'contact.category.general': 'General Inquiry',
    'contact.category.support': 'Technical Support',
    'contact.category.business': 'Business Inquiry',
    'contact.category.partnership': 'Partnership',
    'contact.category.feedback': 'Feedback',
    'contact.category.other': 'Other',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.vendor.title': 'Are you a business owner?',
    'contact.vendor.description': 'Join CariGo and reach more customers today!',
    'contact.vendor.button': 'Open Your Store',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.addressValue': 'Bandar Seri Begawan, Brunei Darussalam',
    
    // Footer
    'footer.tagline': 'Your trusted shopping companion in Brunei',
    'footer.links': 'Quick Links',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.app': 'Mobile App',
    'footer.comingSoon': 'App launching soon!',
    'footer.rights': 'All rights reserved.',
  },
  ms: {
    // Header
    'header.download': 'Muat Turun Aplikasi',
    'header.comingSoon': 'Akan Datang',
    'header.about': 'Tentang Kami',
    'header.features': 'Ciri-ciri',
    'header.faq': 'Soalan Lazim',
    'header.contact': 'Hubungi',
    'header.careers': 'Kerjaya',
    'header.support': 'Sokong Kami',
    
    // Landing Hero
    'landing.hero.title': 'Cari Murah, Hidup Bijak',
    'landing.hero.subtitle': 'Satu aplikasi. Setiap kedai. Brunei yang lebih bijak dengan CariGo.',
    'landing.hero.downloadNow': 'Muat Turun Sekarang',
    'landing.hero.learnMore': 'Ketahui Lebih Lanjut',
    
    // Features
    'landing.features.compare.title': 'Perbandingan Harga',
    'landing.features.compare.desc': 'Bandingkan harga merentasi pelbagai kedai dengan serta-merta dan dapatkan tawaran terbaik',
    'landing.features.inventory.title': 'Inventori Masa Nyata',
    'landing.features.inventory.desc': 'Semak ketersediaan produk di kedai berdekatan sebelum anda melawat',
    'landing.features.map.title': 'Peta Interaktif',
    'landing.features.map.desc': 'Cari kedai pada peta dan dapatkan arah dengan satu ketukan',
    'landing.features.allinone.title': 'Platform Satu Perhentian',
    'landing.features.allinone.desc': 'Layari, bandingkan, dan beli semua dalam satu aplikasi',
    'landing.features.learnMore': 'Ketahui Lebih Lanjut',
    
    // Features Page
    'features.pageTitle': 'Ciri-ciri Berkuasa untuk Membeli-belah Lebih Bijak',
    'features.pageSubtitle': 'Semua yang anda perlukan untuk membeli-belah lebih bijak, jimat masa, dan dapat tawaran terbaik di Brunei',
    'features.keyBenefits': 'Manfaat Utama',
    'features.compare.title': 'Perbandingan Harga Segera',
    'features.compare.desc': 'Berhenti bayar lebih. Lihat semua harga yang ada dengan sekilas pandang dan pilih kedai yang tawarkan tawaran terbaik. Enjin perbandingan pintar kami imbas pelbagai peruncit dalam masa nyata untuk bawa anda maklumat harga yang tepat.',
    'features.compare.benefit1': 'Bandingkan harga dari pelbagai kedai serta-merta',
    'features.compare.benefit2': 'Lihat sejarah dan trend harga untuk masa pembelian yang tepat',
    'features.compare.benefit3': 'Dapat amaran bila harga turun untuk barangan yang anda mahu',
    'features.inventory.title': 'Ketersediaan Stok Masa Nyata',
    'features.inventory.desc': 'Jangan bazir perjalanan ke kedai yang kehabisan stok. Platform kami segerak terus dengan sistem inventori peruncit untuk tunjuk apa yang betul-betul ada sekarang, jadi anda boleh berbelanja dengan yakin.',
    'features.inventory.benefit1': 'Tahu tepat apa yang ada stok sebelum anda pergi',
    'features.inventory.benefit2': 'Dapat pemberitahuan bila barangan habis stok kembali',
    'features.inventory.benefit3': 'Lihat tahap stok di pelbagai lokasi serentak',
    'features.map.title': 'Carian Lokasi Pintar',
    'features.map.desc': 'Cari apa yang anda perlukan di peta. Lihat kedai mana dekat anda yang ada produk dalam stok, bandingkan jarak, dan tentukan sama ada anda mahu pilihan terdekat atau sanggup pandu lebih jauh untuk harga lebih baik.',
    'features.map.benefit1': 'Peta visual tunjuk semua kedai dengan produk yang anda mahu',
    'features.map.benefit2': 'Arah satu ketuk ke kedai pilihan anda',
    'features.map.benefit3': 'Tapis mengikut jarak, harga, atau kedua-duanya',
    'features.allinone.title': 'Pengalaman Membeli-belah Lengkap',
    'features.allinone.desc': 'Dari masa anda cari hingga masa anda terima barangan, semuanya berlaku dalam satu aliran lancar. Layari, bandingkan, beli, jejak, dan bayar—semua tanpa tinggalkan aplikasi.',
    'features.allinone.benefit1': 'Troli membeli-belah bersatu merentasi pelbagai kedai',
    'features.allinone.benefit2': 'Penjejakan pesanan masa nyata dan kemas kini',
    'features.allinone.benefit3': 'Pembayaran selamat dengan kaedah bayaran tempatan',
    'features.ctaTitle': 'Sedia untuk Berbelanja Lebih Bijak?',
    'features.ctaSubtitle': 'Muat turun CariGo hari ini dan alami masa depan membeli-belah di Brunei',
    
    // Download Section
    'landing.download.title': 'Mulakan Hari Ini',
    'landing.download.subtitle': 'Muat turun CariGo sekarang dan alami pengalaman membeli-belah yang lebih pintar',
    'landing.download.appstore': 'Muat Turun di App Store',
    'landing.download.playstore': 'Dapatkan di Google Play',
    
    // Merchant Section
    'landing.merchant.title': 'Adakah Anda Pedagang?',
    'landing.merchant.subtitle': 'Sertai CariGo dan jangkau beribu-ribu pelanggan di seluruh Brunei',
    'landing.merchant.button': 'Buka Kedai Anda',
    
    // About
    'about.title': 'Tentang CariGo',
    'about.story.title': 'Ia Bermula dengan Soalan Mudah',
    'about.story.p1': 'Bayangkan ini: Anda mencari kipas genggam pada petang panas di Brunei. Anda buka Instagram, skrol melalui banyak pos, taip "kipas tangan" dalam carian... dan kebanyakan hasil bukan dari Brunei. Anda tidak tahu kedai tempatan mana yang ada stok, di mana paling murah, atau kedai mana paling dekat dengan anda.',
    'about.story.p2': 'Kita semua pernah alami ini. Menghabiskan masa melompat antara aplikasi media sosial, menghantar mesej ke pelbagai kedai, menunggu balasan yang mungkin tidak datang. Mesti ada cara yang lebih baik—kompas untuk membeli-belah bijak di Brunei.',
    'about.mission.title': 'Apa Yang Kami Percaya',
    'about.mission.desc': 'Membeli-belah sepatutnya mudah. Taip apa yang anda mahu, lihat tepat di mana hendak dapatkannya—termurah, terdekat, atau keseimbangan sempurna—dan beli terus di situ. Tiada skrol tak henti. Tiada tekaan. Tiada masa terbuang. Itulah pengalaman yang setiap orang Brunei layak dapat.',
    'about.vision.title': 'Dibina untuk Brunei, oleh Orang Brunei',
    'about.vision.desc': 'Platform global seperti Shopee belum masuk Brunei, dan ada sebabnya—sistem pembayaran unik kita, komuniti rapat kita, cara hidup kita. Tetapi itulah sebabnya CariGo wujud. Kami faham bagaimana orang Brunei berbelanja, bagaimana kita percaya cadangan dari kawan dan keluarga, bagaimana berita dari mulut ke mulut tersebar pantas. Kami tidak cuba jadi Shopee. Kami bina sesuatu yang lebih baik—sesuatu yang betul-betul sesuai untuk kita.',
    'about.values.title': 'Membeli-belah Anda, Dipermudahkan',
    'about.values.transparency': 'Perbandingan Harga Segera: Harga terbaik dengan sekilas pandang. Tiada tekaan, tiada bayar lebih.',
    'about.values.community': 'Carian Lokasi Pintar: Lihat stok berdekatan di peta—atau pandu sikit untuk jimat lebih.',
    'about.values.innovation': 'Semua di Satu Tempat: Cari, beli, jejak, dan bayar—pantas, mudah, dalam satu aplikasi.',
    'about.commitment.title': 'Ini Baru Permulaan',
    'about.commitment.desc': 'Ada orang kata pasaran Brunei terlalu kecil. Kami kata: untuk ubah dunia, mulakan dengan ubah komuniti sendiri. Dengan hampir semua orang miliki telefon pintar dan kereta, bayangkan kemudahan—cari satu minit, pandu ke kedai, dan dapat apa yang anda perlukan hari yang sama. Itu bukan sekadar membeli-belah. Itu hidup lebih bijak. Sertai kami dalam perjalanan mencipta pengalaman membeli-belah baharu di Brunei.',
    
    // FAQ
    'faq.title': 'Soalan Lazim',
    'faq.category.about': 'Tentang CariGo',
    'faq.category.shoppers': 'Untuk Pembeli (Pengguna)',
    'faq.category.vendors': 'Untuk Pedagang',
    'faq.category.vision': 'Wawasan & Masa Depan',
    'faq.q1': 'Apakah CariGo?',
    'faq.a1': 'CariGo ialah pasaran digital yang dilahirkan di Brunei yang menghubungkan pembeli tempatan dengan kedai berdekatan — semua dalam satu aplikasi.\n\nAnda boleh mencari sebarang produk, serta-merta mencari kedai yang menjualnya dengan harga termurah, terdekat, atau keseimbangan terbaik, dan membuat pembelian dengan mudah dalam talian atau untuk ambil.',
    'faq.q2': 'Bagaimana CariGo berbeza dari Shopee atau Amazon?',
    'faq.a2': 'Tidak seperti platform antarabangsa, CariGo dibuat untuk pasaran tempatan Brunei.\nKami menumpukan pada peruncit tempatan, inventori tempatan, dan pilihan pembayaran tempatan.\nMatlamat kami bukan untuk bersaing secara global, tetapi untuk membantu perniagaan kecil Brunei melangkah dengan yakin ke era digital — sambil memastikan setiap ringgit yang dibelanjakan beredar dalam komuniti kami.',
    'faq.q3': 'Siapa boleh menggunakan CariGo?',
    'faq.a3': 'Semua orang di Brunei!\nSama ada anda pembeli yang mencari barangan harian atau pemilik kedai kecil yang mahu menjadi digital, CariGo dibina untuk berkhidmat kepada kedua-dua belah pasaran.',
    'faq.q4': 'Apa yang menjadikan CariGo inovatif?',
    'faq.a4': 'CariGo menggabungkan carian produk, pengurusan inventori masa nyata, dan integrasi perniagaan tempatan — sesuatu yang tidak ditawarkan oleh aplikasi Brunei lain pada masa ini.\n\nIa membolehkan pengguna:\n• Membandingkan harga dan jarak dengan serta-merta\n• Mencari kedai tempatan yang disahkan\n• Menyelesaikan pembelian mereka dalam beberapa saat\n\nUntuk peruncit, CariGo menyediakan:\n• Analitik jualan pintar\n• Penyegerakan stok mudah (CSV/API)\n• Laporan automatik dan pembayaran lebih cepat',
    'faq.q5': 'Adakah saya perlu akaun untuk menggunakan CariGo?',
    'faq.a5': 'Anda boleh melayari dengan bebas, tetapi anda memerlukan akaun untuk membuat pesanan atau menyimpan kegemaran.\nPendaftaran mudah — hanya e-mel atau nombor telefon anda.',
    'faq.q6': 'Bagaimana saya membayar pembelian saya?',
    'faq.a6': 'CariGo menyokong kaedah pembayaran digital tempatan, termasuk kad debit, perbankan dalam talian, dan integrasi dompet.\nKami juga sedang berusaha untuk memasukkan pilihan Bayar di Kedai dan pembayaran QR Tanpa Tunai dalam masa terdekat.',
    'faq.q7': 'Adakah penghantaran tersedia?',
    'faq.a7': 'Pada pelancaran, CariGo menumpukan pada pengambilan kedai — membolehkan pengguna mencari item berdekatan dan mendapatkannya pada hari yang sama.\nPerkongsian penghantaran adalah sebahagian daripada peta jalan masa depan kami, dan kami akan mengembangkan ciri ini secara progresif.',
    'faq.q8': 'Adakah harga di CariGo tepat dan dikemas kini?',
    'faq.a8': 'Ya.\nSemua harga dan ketersediaan dikendalikan secara langsung oleh kedai sendiri melalui papan pemuka penjual kami, memastikan ketepatan masa nyata.',
    'faq.q9': 'Apa yang perlu saya lakukan jika sesuatu tidak kena dengan pesanan saya?',
    'faq.a9': 'Anda boleh menghubungi penjual secara langsung melalui sembang dalam aplikasi atau menggunakan butang Bantuan > Laporkan Isu.\nPasukan sokongan kami akan mengkaji kes tersebut dan membantu kedua-dua pihak dengan adil.',
    'faq.q10': 'Bagaimana saya boleh menyertai CariGo sebagai pedagang?',
    'faq.a10': 'Pergi ke halaman Jual di CariGo dan isi borang permohonan pedagang.\n\nAnda memerlukan:\n• Maklumat perniagaan asas\n• Butiran hubungan dan alamat\n• Bukti pendaftaran perniagaan atau identiti\n• Akaun bank untuk pembayaran\n\nKami mengkaji semua permohonan dalam 1–3 hari bekerja.',
    'faq.q17': 'Apakah visi jangka panjang CariGo?',
    'faq.a17': 'Untuk memperkasakan ekonomi digital Brunei — satu kedai pada satu masa.\nKami percaya inovasi tempatan adalah kunci kepada pertumbuhan mampan. CariGo bertujuan untuk mencipta ekosistem bersambung di mana:\n• Peruncit kecil berkembang maju dalam talian\n• Pengguna menikmati akses lebih mudah kepada barangan tempatan\n• Brunei memperkukuhkan ekonomi yang berdikari dan bersedia digital',
    'faq.q18': 'Adakah CariGo akan berkembang melepasi Brunei?',
    'faq.a18': 'Misi pertama kami adalah untuk berkhidmat kepada Brunei dengan sempurna.\nWalau bagaimanapun, kami merancang untuk berhubung dengan rakan kongsi serantau di ASEAN untuk peluang runcit rentas sempadan sebaik sahaja model tempatan kuat dan mampan.',
    'faq.q19': 'Bagaimana CariGo memastikan kepercayaan dan keselamatan?',
    'faq.a19': 'Setiap pedagang disahkan (KYC/KYB) sebelum pengaktifan.\nTransaksi menggunakan gerbang pembayaran yang selamat (mematuhi PCI DSS), dan semua komunikasi disulitkan.\nPasukan penyederhanaan kami memantau penyenaraian untuk mengekalkan keselamatan dan kebolehpercayaan.',
    'faq.q20': 'Bagaimana saya boleh menghubungi CariGo untuk pertanyaan bantuan atau perkongsian?',
    'faq.a20': 'Sokongan: support@carigo.bn',
    
    // Contact
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Ada pertanyaan? Kami ingin mendengar dari anda',
    'contact.name': 'Nama',
    'contact.email': 'E-mel',
    'contact.phone': 'Telefon',
    'contact.category': 'Kategori',
    'contact.categoryPlaceholder': 'Pilih kategori',
    'contact.category.general': 'Pertanyaan Umum',
    'contact.category.support': 'Sokongan Teknikal',
    'contact.category.business': 'Pertanyaan Perniagaan',
    'contact.category.partnership': 'Perkongsian',
    'contact.category.feedback': 'Maklum Balas',
    'contact.category.other': 'Lain-lain',
    'contact.subject': 'Subjek',
    'contact.message': 'Mesej',
    'contact.send': 'Hantar Mesej',
    'contact.vendor.title': 'Adakah anda pemilik perniagaan?',
    'contact.vendor.description': 'Sertai CariGo dan capai lebih ramai pelanggan hari ini!',
    'contact.vendor.button': 'Buka Kedai Anda',
    'contact.info.title': 'Maklumat Perhubungan',
    'contact.info.email': 'E-mel',
    'contact.info.phone': 'Telefon',
    'contact.info.address': 'Alamat',
    'contact.info.addressValue': 'Bandar Seri Begawan, Brunei Darussalam',
    
    // Footer
    'footer.tagline': 'Rakan membeli-belah anda yang dipercayai di Brunei',
    'footer.links': 'Pautan Pantas',
    'footer.company': 'Syarikat',
    'footer.support': 'Sokongan',
    'footer.legal': 'Undang-undang',
    'footer.privacy': 'Dasar Privasi',
    'footer.terms': 'Terma Perkhidmatan',
    'footer.app': 'Aplikasi Mudah Alih',
    'footer.comingSoon': 'Aplikasi akan dilancarkan tidak lama lagi!',
    'footer.rights': 'Hak cipta terpelihara.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
