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
    'landing.hero.subtitle': 'Type, find, and buy—instantly. See the cheapest store, nearest shop, or the perfect balance—all in one app.',
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
    'about.values.transparency': 'Instant Price Comparison: See which store offers the best price at a glance. No more guessing, no more overpaying.',
    'about.values.community': 'Smart Location Search: Find products on a map. See what\'s available near you or choose to save money with a slightly longer drive. You decide what matters most.',
    'about.values.innovation': 'Everything in One Place: From finding what you need to completing your purchase, tracking your order, and payment—it all happens in one app. Simple, fast, and designed for real life in Brunei.',
    'about.commitment.title': 'This is Just the Beginning',
    'about.commitment.desc': 'Some people say Brunei\'s market is too small. We say: to change the world, start by changing your own community. With almost everyone owning a smartphone and a car, imagine the convenience—search for one minute, drive to the store, and get what you need the same day. That\'s not just shopping. That\'s living smarter. Join us on this journey to create a whole new shopping experience in Brunei.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How does CariGo work?',
    'faq.a1': 'Simply type the product name, and instantly see which stores have it, where it\'s cheapest, and where it\'s nearest. Compare stores at a glance and complete your purchase right in the app.',
    'faq.q2': 'Is the inventory information accurate and up-to-date?',
    'faq.a2': 'Yes! Our platform syncs directly with retailer inventory systems to provide real-time stock information, so you always know what\'s available.',
    'faq.q3': 'Can I buy directly through the app?',
    'faq.a3': 'Absolutely! From product discovery to purchase, order management, tracking, and payment—every step through to receiving your item is completed within the app.',
    'faq.q4': 'Do you offer delivery?',
    'faq.a4': 'Delivery is on our roadmap. We\'re starting by solving the more urgent problem: knowing what\'s available, where it\'s available, and when it\'s available. In Brunei where almost everyone owns a car, you can search for one minute, drive to the store, and buy it the same day—that\'s real, practical change.',
    'faq.q5': 'How is CariGo different from Shopee or other platforms?',
    'faq.a5': 'CariGo is built specifically for Brunei\'s unique market, social structure, and local payment infrastructure. We prioritize local retailers and focus on making shopping convenient for Bruneians, by Bruneians. Plus, retailers can start with our Free Plan—no risk, no barriers to entry.',
    'faq.q6': 'How do retailers join CariGo?',
    'faq.a6': 'We offer flexible monthly plans from $0 (Free) to $90, so even the smallest businesses can join easily. The Free Plan lets anyone start risk-free and grow with our platform.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? We\'d love to hear from you',
    'contact.name': 'Name',
    'contact.email': 'Email',
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
    'landing.hero.subtitle': 'Taip, cari, dan beli—serta-merta. Lihat kedai paling murah, kedai terdekat, atau keseimbangan yang sempurna—semua dalam satu aplikasi.',
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
    'about.values.transparency': 'Perbandingan Harga Segera: Lihat kedai mana tawarkan harga terbaik dengan sekilas pandang. Tiada lagi tekaan, tiada lagi bayar lebih.',
    'about.values.community': 'Carian Lokasi Pintar: Cari produk di peta. Lihat apa yang ada dekat anda atau pilih jimat wang dengan pemanduan lebih jauh sikit. Anda yang tentukan apa yang penting.',
    'about.values.innovation': 'Semua di Satu Tempat: Dari cari apa yang anda perlukan hingga selesaikan pembelian, jejak pesanan, dan bayaran—semuanya berlaku dalam satu aplikasi. Mudah, pantas, dan direka untuk kehidupan sebenar di Brunei.',
    'about.commitment.title': 'Ini Baru Permulaan',
    'about.commitment.desc': 'Ada orang kata pasaran Brunei terlalu kecil. Kami kata: untuk ubah dunia, mulakan dengan ubah komuniti sendiri. Dengan hampir semua orang miliki telefon pintar dan kereta, bayangkan kemudahan—cari satu minit, pandu ke kedai, dan dapat apa yang anda perlukan hari yang sama. Itu bukan sekadar membeli-belah. Itu hidup lebih bijak. Sertai kami dalam perjalanan mencipta pengalaman membeli-belah baharu di Brunei.',
    
    // FAQ
    'faq.title': 'Soalan Lazim',
    'faq.q1': 'Bagaimana CariGo berfungsi?',
    'faq.a1': 'Taip nama produk sahaja, dan serta-merta lihat kedai mana yang ada, di mana paling murah, dan di mana paling dekat. Bandingkan kedai dengan sekilas pandang dan selesaikan pembelian anda terus dalam aplikasi.',
    'faq.q2': 'Adakah maklumat inventori tepat dan terkini?',
    'faq.a2': 'Ya! Platform kami disegerakkan terus dengan sistem inventori peruncit untuk memberikan maklumat stok masa nyata, jadi anda sentiasa tahu apa yang ada.',
    'faq.q3': 'Bolehkah saya beli terus melalui aplikasi?',
    'faq.a3': 'Sudah tentu! Dari penemuan produk hingga pembelian, pengurusan pesanan, penjejakan, dan pembayaran—setiap langkah hingga menerima barangan selesai dalam aplikasi.',
    'faq.q4': 'Adakah anda tawarkan penghantaran?',
    'faq.a4': 'Penghantaran ada dalam pelan kami. Kami bermula dengan menyelesaikan masalah lebih mendesak: tahu apa yang ada, di mana ia ada, dan bila ia ada. Di Brunei di mana hampir semua orang miliki kereta, anda boleh cari satu minit, pandu ke kedai, dan beli hari yang sama—itu perubahan praktikal sebenar.',
    'faq.q5': 'Apa beza CariGo dengan Shopee atau platform lain?',
    'faq.a5': 'CariGo dibina khusus untuk pasaran unik Brunei, struktur sosial, dan infrastruktur pembayaran tempatan. Kami utamakan peruncit tempatan dan fokus menjadikan membeli-belah mudah untuk orang Brunei, oleh orang Brunei. Tambahan, peruncit boleh mulakan dengan Pelan Percuma—tiada risiko, tiada halangan untuk menyertai.',
    'faq.q6': 'Bagaimana peruncit sertai CariGo?',
    'faq.a6': 'Kami tawarkan pelan bulanan fleksibel dari $0 (Percuma) hingga $90, jadi perniagaan terkecil pun boleh sertai dengan mudah. Pelan Percuma biarkan sesiapa sahaja mulakan tanpa risiko dan berkembang dengan platform kami.',
    
    // Contact
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Ada pertanyaan? Kami ingin mendengar dari anda',
    'contact.name': 'Nama',
    'contact.email': 'E-mel',
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
