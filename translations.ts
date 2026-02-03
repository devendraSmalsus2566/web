
export type Language = 'en' | 'hi' | 'mr' | 'gu' | 'ur';

export const translations = {
  en: {
    dir: 'ltr',
    nav: { home: 'Home', printers: 'Hardware', services: 'Services', blog: 'Blog', contact: 'Contact' },
    hero: {
      title: 'Industrial 3D Printing Excellence',
      desc: 'Trilochana Infotech provides high-precision hardware and end-to-end manufacturing solutions trusted by global engineering leaders.',
      cta: 'Shop Now',
      stats: ['0.05mm Precision', 'Global Delivery', '24/7 Support']
    },
    trust: {
      title: 'Trusted by Industry Leaders',
      whyTitle: 'Why Choose Trilochana?',
      points: [
        { title: 'Quality Certified', desc: 'Every machine and part undergoes a rigorous stress test before shipping.' },
        { title: 'Local Expertise', desc: 'Pan-India technical support and on-site maintenance teams.' },
        { title: 'Custom Solutions', desc: 'We don’t just sell printers; we build your production workflow.' }
      ]
    },
    products: {
      title: 'Hardware & Components',
      subtitle: 'Premium 3D printers, high-grade wires, and genuine replacement parts for high-performance manufacturing.',
      categories: { all: 'All', industrial: 'Industrial', desktop: 'Desktop', resin: 'Resin', parts: 'Parts', wires: 'Wires' },
      action: 'Buy Now',
      stock: 'In Stock'
    },
    services: {
      title: 'Expert Services',
      subtitle: 'From design to final production.',
      items: [
        { title: 'Custom Printing', desc: 'High-quality parts delivered fast.' },
        { title: 'CAD Design', desc: 'Transforming ideas into 3D models.' },
        { title: 'Prototyping', desc: 'Rapid iteration for engineering.' },
        { title: 'Maintenance', desc: 'Keeping your fleet at peak performance.' }
      ]
    },
    blog: {
      title: 'Industry Insights',
      subtitle: 'Stay updated with the latest in 3D printing technology and material science.',
      readMore: 'Read Article',
      posts: [
        { title: 'The Future of Metal Printing', excerpt: 'How binder jetting is changing aerospace manufacturing.' },
        { title: 'Sustainable Filaments', excerpt: 'Eco-friendly materials for professional desktop printing.' },
        { title: 'AI in Generative Design', excerpt: 'Using algorithms to optimize part strength and weight.' }
      ]
    },
    contact: {
      title: 'Start a Project',
      subtitle: 'Ready to build the future? Reach out today.',
      email: 'Email Us',
      call: 'Call Us',
      hq: 'Headquarters',
      form: { 
        name: 'Name', 
        email: 'Email', 
        subject: 'Subject',
        message: 'Message', 
        send: 'Send Now',
        success: 'Message Sent!',
        successDesc: 'We have received your enquiry and will get back to you within 24 hours.'
      }
    },
    footer: {
      desc: 'Trilochana Infotech is a pioneer in industrial 3D printing, providing end-to-end additive manufacturing solutions for the modern world.',
      linksTitle: 'Company',
      solutionsTitle: 'Industries',
      hqTitle: 'Headquarters',
      rights: '© 2024 Trilochana Infotech Pvt Ltd. All rights reserved.'
    }
  },
  hi: {
    dir: 'ltr',
    nav: { home: 'होम', printers: 'हार्डवेयर', services: 'सेवाएं', blog: 'ब्लॉग', contact: 'संपर्क' },
    hero: {
      title: 'औद्योगिक 3D प्रिंटिंग उत्कृष्टता',
      desc: 'त्रिलोचना इन्फोटेक वैश्विक इंजीनियरिंग लीडर्स द्वारा भरोसेमंद उच्च-सटीक हार्डवेयर और विनिर्माण समाधान प्रदान करता है।',
      cta: 'अभी खरीदें',
      stats: ['0.05mm सटीकता', 'वैश्विक डिलीवरी', '24/7 सहायता']
    },
    trust: {
      title: 'इंडस्ट्री लीडर्स का भरोसा',
      whyTitle: 'त्रिलोचना को क्यों चुनें?',
      points: [
        { title: 'गुणवत्ता प्रमाणित', desc: 'शिपिंग से पहले हर मशीन और पुर्जे का कड़ा परीक्षण किया जाता है।' },
        { title: 'स्थानीय विशेषज्ञता', desc: 'पूरे भारत में तकनीकी सहायता और ऑन-साइट रखरखाव टीमें।' },
        { title: 'कस्टम समाधान', desc: 'हम सिर्फ प्रिंटर नहीं बेचते; हम आपका प्रोडक्शन वर्कफ़्लो बनाते हैं।' }
      ]
    },
    products: {
      title: 'हार्डवेयर और पुर्जे',
      subtitle: 'उच्च प्रदर्शन विनिर्माण के लिए प्रीमियम 3D प्रिंटर, उच्च-गुणवत्ता वाले तार और असली पुर्जे।',
      categories: { all: 'सभी', industrial: 'औद्योगिक', desktop: 'डेस्कटॉप', resin: 'रेजिन', parts: 'पुर्जे', wires: 'तार' },
      action: 'अभी खरीदें',
      stock: 'स्टॉक में'
    },
    services: {
      title: 'विशेषज्ञ सेवाएं',
      subtitle: 'डिजाइन से लेकर अंतिम उत्पादन तक।',
      items: [
        { title: 'कस्टम प्रिंटिंग', desc: 'उच्च गुणवत्ता वाले पुर्जे तेजी से वितरित।' },
        { title: 'CAD डिजाइन', desc: 'विचारों को 3D मॉडल में बदलना।' },
        { title: 'प्रोटोटाइपिंग', desc: 'इंजीनियरिंग के लिए तेजी से पुनरावृत्ति।' },
        { title: 'रखरखाव', desc: 'आपके प्रिंटर को शीर्ष प्रदर्शन पर रखना।' }
      ]
    },
    blog: {
      title: 'उद्योग अंतर्दृष्टि',
      subtitle: '3D प्रिंटिंग तकनीक और सामग्री विज्ञान में नवीनतम अपडेट प्राप्त करें।',
      readMore: 'लेख पढ़ें',
      posts: [
        { title: 'मेटल प्रिंटिंग का भविष्य', excerpt: 'बाइंडर जेटिंग एयरोस्पेस निर्माण को कैसे बदल रहा है।' },
        { title: 'टिकाऊ फिलामेंट्स', excerpt: 'प्रोफेशनल डेस्कटॉप प्रिंटिंग के लिए पर्यावरण के अनुकूल सामग्री।' },
        { title: 'जेनरेटिव डिज़ाइन में AI', excerpt: 'पार्ट्स की ताकत और वजन को अनुकूलित करने के लिए एल्गोरिदम का उपयोग।' }
      ]
    },
    contact: {
      title: 'प्रोजेक्ट शुरू करें',
      subtitle: 'भविष्य बनाने के लिए तैयार हैं? आज ही संपर्क करें।',
      email: 'ईमेल करें',
      call: 'कॉल करें',
      hq: 'मुख्यालय',
      form: { 
        name: 'नाम', 
        email: 'ईमेल', 
        subject: 'विषय',
        message: 'संदेश', 
        send: 'अभी भेजें',
        success: 'संदेश भेजा गया!',
        successDesc: 'आपका संदेश हमें मिल गया है, हम जल्द ही संपर्क करेंगे।'
      }
    },
    footer: {
      desc: 'त्रिलोचना इन्फोटेक औद्योगिक 3D प्रिंटिंग में अग्रणी है, जो आधुनिक दुनिया के लिए समाधान प्रदान करता है।',
      linksTitle: 'कंपनी',
      solutionsTitle: 'उद्योग',
      hqTitle: 'मुख्यालय',
      rights: '© 2024 त्रिलोचना इन्फोटेक प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।'
    }
  },
  mr: {
    dir: 'ltr',
    nav: { home: 'होम', printers: 'हार्डवेअर', services: 'सेवा', blog: 'ब्लॉग', contact: 'संपर्क' },
    hero: {
      title: 'औद्योगिक 3D प्रिंटिंग उत्कृष्टता',
      desc: 'त्रिलोचना इन्फोटेक जागतिक अभियांत्रिकी नेत्यांनी विश्वास ठेवलेले उच्च-अचूक हार्डवेअर आणि विनिर्माण उपाय प्रदान करते.',
      cta: 'आत्ताच खरेदी करा',
      stats: ['0.05mm अचूकता', 'जागतिक वितरण', '24/7 सपोर्ट']
    },
    trust: {
      title: 'इंडस्ट्री नेत्यांचा विश्वास',
      whyTitle: 'त्रिलोचना का निवडावी?',
      points: [
        { title: 'गुणवत्ता प्रमाणित', desc: 'शिपिंगपूर्वी प्रत्येक मशीन आणि घटकाची चाचणी केली जाते.' },
        { title: 'स्थानिक तज्ञ', desc: 'अखिल भारतीय तांत्रिक सहाय्य आणि ऑन-साइट देखभाल कार्यसंघ.' },
        { title: 'सानुकूल उपाय', desc: 'आम्ही फक्त प्रिंटर विकत नाही; आम्ही तुमचा उत्पादन प्रवाह तयार करतो.' }
      ]
    },
    products: {
      title: 'हार्डवेअर आणि घटक',
      subtitle: 'उच्च कामगिरी उत्पादनासाठी प्रीमियम 3D प्रिंटर, उच्च दर्जाचे वायर आणि अस्सल सुटे भाग.',
      categories: { all: 'सर्व', industrial: 'औद्योगिक', desktop: 'डेस्कटॉप', resin: 'रेजिन', parts: 'सुटे भाग', wires: 'वायर' },
      action: 'आता खरेदी करा',
      stock: 'स्टॉकमध्ये'
    },
    services: {
      title: 'तज्ञ सेवा',
      subtitle: 'डिझाइनपासून अंतिम उत्पादनापर्यंत.',
      items: [
        { title: 'कस्टम प्रिंटिंग', desc: 'उच्च दर्जाचे भाग जलद पोहोचवले जातात.' },
        { title: 'CAD डिझाइन', desc: 'कल्पनांचे 3D मॉडेल्समध्ये रूपांतर.' },
        { title: 'प्रोटोटाइपिंग', desc: 'अभियांत्रिकीसाठी वेगवान प्रगती.' },
        { title: 'देखभाल', desc: 'तुमचे प्रिंटर नेहमी कार्यरत ठेवणे.' }
      ]
    },
    blog: {
      title: 'उद्योग अंतर्दृष्टी',
      subtitle: '3D प्रिंटिंग तंत्रज्ञान आणि साहित्य शास्त्रातील नवीनतम माहिती मिळवा.',
      readMore: 'लेख वाचा',
      posts: [
        { title: 'मेटल प्रिंटिंगचे भविष्य', excerpt: 'बाइंडर जेटिंग एरोस्पेस मॅन्युफॅक्चरिंग कसे बदलत आहे.' },
        { title: 'शाश्वत फिलामेंट्स', excerpt: 'व्यावसायिक डेस्कटॉप प्रिंटिंगसाठी इको-फ्रेंडली साहित्य.' },
        { title: 'डिझाइनमध्ये AI', excerpt: 'भागांची ताकद आणि वजन सुधारण्यासाठी अल्गोरिदमचा वापर.' }
      ]
    },
    contact: {
      title: 'प्रोजेक्ट सुरू करा',
      subtitle: 'भविष्य घडवण्यासाठी तयार आहात? आजच संपर्क साधा.',
      email: 'ईमेल करा',
      call: 'कॉल करा',
      hq: 'मुख्यालय',
      form: { 
        name: 'नाव', 
        email: 'ईमेल', 
        subject: 'विषय',
        message: 'संदेश', 
        send: 'आता पाठवा',
        success: 'संदेश पाठवला!',
        successDesc: 'आम्हाला तुमची चौकशी प्राप्त झाली आहे आणि आम्ही लवकरच संपर्क करू.'
      }
    },
    footer: {
      desc: 'त्रिलोचना इन्फोटेक औद्योगिक 3D प्रिंटिंगमध्ये अग्रेसर आहे, जो आधुनिक जगासाठी सोल्यूशन्स प्रदान करते.',
      linksTitle: 'कंपनी',
      solutionsTitle: 'उद्योग',
      hqTitle: 'मुख्यालय',
      rights: '© 2024 त्रिलोचना इन्फोटेक प्रायव्हेट लिमिटेड. सर्व हक्क राखीव.'
    }
  },
  gu: {
    dir: 'ltr',
    nav: { home: 'હોમ', printers: 'હાર્ડવેર', services: 'સેવાઓ', blog: 'બ્લોગ', contact: 'સંપર્ક' },
    hero: {
      title: 'ઔદ્યોગિક 3D પ્રિન્ટિંગ શ્રેષ્ઠતા',
      desc: 'ત્રિલોચના ઇન્ફોટેક વૈશ્વિક એન્જિનિયરિંગ નેતાઓ દ્વારા વિશ્વસનીય ઉચ્ચ-ચોકસાઇવાળા હાર્ડવેર અને ઉત્પાદન ઉકેલો પૂરા પાડે છે.',
      cta: 'ખરીદો',
      stats: ['0.05mm ચોકસાઇ', 'વૈશ્વિક ડિલિવરી', '24/7 સપોર્ટ']
    },
    trust: {
      title: 'ઉદ્યોગ નેતાઓનો વિશ્વાસ',
      whyTitle: 'ત્રિલોચના કેમ પસંદ કરવી?',
      points: [
        { title: 'ગુણવત્તા પ્રમાણિત', desc: 'શિપિંગ પહેલાં દરેક મશીન અને ભાગનું કડક પરીક્ષણ કરવામાં આવે છે.' },
        { title: 'સ્થાનિક કુશળતા', desc: 'પાન-ઇન્ડિયા ટેકનિકલ સપોર્ટ અને ઓન-સાઇટ મેન્ટેનન્સ ટીમો.' },
        { title: 'કસ્ટમ ઉકેલો', desc: 'અમે માત્ર પ્રિન્ટર્સ વેચતા નથી; અમે તમારો પ્રોડક્શન વર્કફ્લો બનાવીએ છીએ.' }
      ]
    },
    products: {
      title: 'હાર્ડવેર અને ઘટકો',
      subtitle: 'ઉચ્ચ પ્રદર્શન ઉત્પાદન માટે પ્રીમિયમ 3D પ્રિન્ટર્સ, ઉચ્ચ ગુણવત્તાવાળા વાયર અને અસલી સ્પેરપાર્ટ્સ.',
      categories: { all: 'બધા', industrial: 'ઔદ્યોગિક', desktop: 'ડેસ્કટોપ', resin: 'રેઝિન', parts: 'સ્પેરપાર્ટ્સ', wires: 'વાયર' },
      action: 'ખરીદો',
      stock: 'સ્ટોકમાં'
    },
    services: {
      title: 'નિષ્ણાત સેવાઓ',
      subtitle: 'ડિઝાઇનથી અંતિમ ઉત્પાદન સુધી.',
      items: [
        { title: 'કસ્ટમ પ્રિન્ટિંગ', desc: 'ઉચ્ચ ગુણવત્તાવાળા ભાગો ઝડપથી વિતરિત.' },
        { title: 'CAD ડિઝાઇન', desc: 'વિચારોને 3D મોડલ્સમાં ફેરવવા.' },
        { title: 'પ્રોટોટાઇપિંગ', desc: 'એન્જિનિયરિંગ માટે ઝડપી પ્રક્રિયા.' },
        { title: 'જાળવણી', desc: 'તમારા પ્રિન્ટર્સને શ્રેષ્ઠ રીતે કાર્યરત રાખવા.' }
      ]
    },
    blog: {
      title: 'ઉદ્યોગ આંતરદૃષ્ટિ',
      subtitle: '3D પ્રિન્ટિંગ ટેકનોલોજી અને સામગ્રી વિજ્ઞાનના નવીનતમ અપડેટ્સ મેળવો.',
      readMore: 'લેખ વાંચો',
      posts: [
        { title: 'મેટલ પ્રિન્ટિંગનું ભવિષ્ય', excerpt: 'બાઈન્ડર જેટિંગ એરોસ્પેસ ઉત્પાદનને કેવી રીતે બદલી રહ્યું છે.' },
        { title: 'ટકાઉ ફિલામેન્ટ્સ', excerpt: 'પ્રોફેશનલ ડેસ્કટોપ પ્રિન્ટિંગ માટે ઇકો-ફ્રેન્ડલી સામગ્રી.' },
        { title: 'ડિઝાઇનમાં AI', excerpt: 'ભાગોની મજબૂતાઈ અને વજનને શ્રેષ્ઠ બનાવવા માટે અલ્ગોરિધમનો ઉપયોગ.' }
      ]
    },
    contact: {
      title: 'પ્રોજેક્ટ શરૂ કરો',
      subtitle: 'ભવિષ્ય બનાવવા માટે તૈયાર છો? આજે જ સંપર્ક કરો.',
      email: 'ઈમેલ કરો',
      call: 'કોલ કરો',
      hq: 'મુખ્ય મથક',
      form: { 
        name: 'નામ', 
        email: 'ઈમેલ', 
        subject: 'વિષય',
        message: 'સંદેશ', 
        send: 'હમણાં મોકલો',
        success: 'સંદેશ મોકલ્યો!',
        successDesc: 'અમને તમારી પૂછપરછ મળી છે અને અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.'
      }
    },
    footer: {
      desc: 'ત્રિલોચના ઇન્ફોટેક ઔદ્યોગિક 3D પ્રિન્ટિંગમાં અગ્રણી છે, જે આધુનિક વિશ્વ માટે ઉકેલો પ્રદાન કરે છે.',
      linksTitle: 'કંપની',
      solutionsTitle: 'ઉદ્યોગો',
      hqTitle: 'મુખ્ય મથક',
      rights: '© 2024 ત્રિલોચના ઇન્ફોટેક પ્રાઇવેટ લિમિટેડ. સર્વાધિકાર સુરક્ષિત.'
    }
  },
  ur: {
    dir: 'rtl',
    nav: { home: 'ہوم', printers: 'ہارڈ ویئر', services: 'خدمات', blog: 'بلاگ', contact: 'رابطہ' },
    hero: {
      title: 'صنعتی تھری ڈی پرنٹنگ کی فضیلت',
      desc: 'ترلوچنا انفوٹیک عالمی انجینئرنگ لیڈروں کے بھروسہ مند اعلیٰ درستگی والا ہارڈ ویئر اور مینوفیکچرنگ حل فراہم کرتا ہے۔',
      cta: 'ابھی خریدیں',
      stats: ['0.05mm درستگی', 'عالمی ترسیل', '24/7 مدد']
    },
    trust: {
      title: 'صنعت کے لیڈروں کا بھروسہ',
      whyTitle: 'ترلوچنا کو کیوں منتخب کریں؟',
      points: [
        { title: 'کوالٹی سرٹیفائیڈ', desc: 'شپنگ سے پہلے ہر مشین اور حصے کا کڑا معائنہ کیا جاتا ہے۔' },
        { title: 'مقامی مہارت', desc: 'پوری انڈیا میں تکنیکی مدد اور آن سائٹ مینٹیننس ٹیمیں۔' },
        { title: 'حسب ضرورت حل', desc: 'ہم صرف پرنٹرز نہیں بیچتے؛ ہم آپ کا پروڈکشن ورک فلو بناتے ہیں۔' }
      ]
    },
    products: {
      title: 'ہارڈ ویئر اور پرزے',
      subtitle: 'اعلیٰ کارکردگی والی مینوفیکچرنگ کے لیے پریمیم 3D پرنٹرز، اعلیٰ معیار کے تار اور اصلی اسپیئر پارٹس۔',
      categories: { all: 'تمام', industrial: 'صنعتی', desktop: 'ڈیسک ٹاپ', resin: 'رال', parts: 'پرزے', wires: 'تار' },
      action: 'ابھی خریدیں',
      stock: 'اسٹاک میں'
    },
    services: {
      title: 'ماہرانہ خدمات',
      subtitle: 'ڈیزائن سے لے کر حتمی پیداوار تک۔',
      items: [
        { title: 'کسٹم پرنٹنگ', desc: 'اعلیٰ معیار کے پرزے تیزی سے فراہم کیے جاتے ہیں۔' },
        { title: 'CAD ڈیزائن', desc: 'خیالات کو 3D ماڈلز میں تبدیل کرنا۔' },
        { title: 'پروٹو ٹائپنگ', desc: 'انجینئرنگ کے لیے تیز رفتار تکرار۔' },
        { title: 'دیکھ بھال', desc: 'آپ کے پرنٹرز کو بہترین کارکردگی پر رکھنا۔' }
      ]
    },
    blog: {
      title: 'صنعتی بصیرت',
      subtitle: '3D پرنٹنگ ٹیکنالوجی اور میٹریل سائنس میں تازہ ترین اپڈیٹس حاصل کریں۔',
      readMore: 'مضمون پڑھیں',
      posts: [
        { title: 'میٹل پرنٹنگ کا مستقبل', excerpt: 'بائنڈر جیٹنگ کس طرح ایرو اسپیس مینوفیکچرنگ کو بدل رہا ہے۔' },
        { title: 'پائیدار فلیمینٹس', excerpt: 'پروفیشنل ڈیسک ٹاپ پرنٹنگ کے لیے ماحول دوست مواد۔' },
        { title: 'ڈیزائن میں AI', excerpt: 'پرزوں کی مضبوطی اور وزن کو بہتر بنانے کے لیے الگورتھم کا استعمال۔' }
      ]
    },
    contact: {
      title: 'پروجیکٹ شروع کریں',
      subtitle: 'مستقبل بنانے کے لیے تیار ہیں؟ آج ہی رابطہ کریں۔',
      email: 'ای میل کریں',
      call: 'کال کریں',
      hq: 'ہیڈ کوارٹر',
      form: { 
        name: 'نام', 
        email: 'ای میل', 
        subject: 'موضوع',
        message: 'پیغام', 
        send: 'ابھی بھیجیں',
        success: 'پیغام بھیج دیا گیا!',
        successDesc: 'ہمیں آپ کی انکوائری موصول ہوگئی ہے اور ہم جلد ہی آپ سے رابطہ کریں گے۔'
      }
    },
    footer: {
      desc: 'ترلوچنا انفوٹیک صنعتی تھری ڈی پرنٹنگ میں ایک علمبردار ہے، جو جدید دنیا کے لیے حل فراہم کرتا ہے۔',
      linksTitle: 'کمپنی',
      solutionsTitle: 'صنعتیں',
      hqTitle: 'ہیڈ کوارٹر',
      rights: '© 2024 ترلوچنا انفوٹیک پرائیویٹ لمیٹڈ۔ جملہ حقوق محفوظ ہیں۔'
    }
  }
};
