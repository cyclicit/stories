import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeStory, setActiveStory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('english');

  const translations = {
    english: {
      appTitle: "Stories from the Quran",
      appSubtitle: "Lessons from the past for guidance today",
      searchPlaceholder: "Search stories...",
      searchButton: "Search",
      filterByCategory: "Filter by Category:",
      allCategories: "All",
      detailsHeading: "Details:",
      quranReferences: "Quran References:",
      lessonsHeading: "Lessons:",
      footerRights: `© ${new Date().getFullYear()} Quran Stories - All rights reserved`,
      footerBlessings: "May the peace and blessings of Allah be upon you",
      categories: {
        power: "Allah's Power",
        punishment: "Allah's Punishment",
        protection: "Allah's Protection",
        wisdom: "Allah's Wisdom",
        justice: "Allah's Justice",
        blessings: "Allah's Blessings",
        mercy: "Allah's Mercy",
        patience: "Patience and Perseverance"
      }
    },
    bengali: {
      appTitle: "কুরআনের গল্পসমূহ",
      appSubtitle: "বর্তমানের জন্য অতীতের শিক্ষা",
      searchPlaceholder: "গল্প খুঁজুন...",
      searchButton: "খুঁজুন",
      filterByCategory: "বিভাগ অনুযায়ী ফিল্টার:",
      allCategories: "সব",
      detailsHeading: "বিস্তারিত:",
      quranReferences: "কুরআনের আয়াত:",
      lessonsHeading: "শিক্ষা:",
      footerRights: `© ${new Date().getFullYear()} কুরআনের গল্প - সর্বস্বত্ব সংরক্ষিত`,
      footerBlessings: "আল্লাহর শান্তি ও রহমত আপনার উপর বর্ষিত হোক",
      categories: {
        power: "আল্লাহর ক্ষমতা",
        punishment: "আল্লাহর শাস্তি",
        protection: "আল্লাহর সুরক্ষা",
        wisdom: "আল্লাহর জ্ঞান",
        justice: "আল্লাহর ন্যায়বিচার",
        blessings: "আল্লাহর নেয়ামত",
        mercy: "আল্লাহর রহমত",
        patience: "ধৈর্য্য ও অধ্যবসায়"
      }
    },
    arabic: {
      appTitle: "قصص القرآن",
      appSubtitle: "دروس من الماضي للإرشاد اليوم",
      searchPlaceholder: "ابحث عن القصص...",
      searchButton: "بحث",
      filterByCategory: "تصفية حسب الفئة:",
      allCategories: "الكل",
      detailsHeading: "التفاصيل:",
      quranReferences: "آيات القرآن:",
      lessonsHeading: "الدروس:",
      footerRights: `© ${new Date().getFullYear()} قصص القرآن - جميع الحقوق محفوظة`,
      footerBlessings: "صلى الله عليه وسلم",
      categories: {
        power: "قوة الله",
        punishment: "عقاب الله",
        protection: "حماية الله",
        wisdom: "حكمة الله",
        justice: "عدل الله",
        blessings: "نعم الله",
        mercy: "رحمة الله",
        patience: "الصبر والمثابرة"
      }
    }
  };

  const quranStories = [
    {
      id: 1,
      title: {
        english: "Creation of Adam",
        bengali: "আদম (আ.) এর সৃষ্টি",
        arabic: "خلق آدم"
      },
      category: "power",
      summary: {
        english: "The story of how Allah created the first human, Adam, from clay and taught him the names of all things.",
        bengali: "আল্লাহ কীভাবে মাটি থেকে প্রথম মানুষ আদম (আ.) কে সৃষ্টি করেছিলেন এবং তাকে সব কিছুর নাম শিখিয়েছিলেন তার গল্প।",
        arabic: "قصة كيف خلق الله أول إنسان، آدم، من الطين وعلمه أسماء كل الأشياء."
      },
      details: {
        english: "Allah created Adam from clay and breathed into him His spirit. He taught Adam the names of all things and commanded the angels to prostrate before him. Iblis (Satan) refused out of pride, becoming the first to disobey Allah.",
        bengali: "আল্লাহ মাটি থেকে আদম (আ.) কে সৃষ্টি করেন এবং তাঁর রূহ ফুঁকে দেন। তিনি আদম (আ.) কে সব কিছুর নাম শিখিয়েছিলেন এবং ফেরেশতাদেরকে আদম (আ.) কে সিজদা করার নির্দেশ দেন। ইবলিস (শয়তান) অহংকারবশত তা প্রত্যাখ্যান করে এবং আল্লাহর প্রথম অবাধ্য সৃষ্টিতে পরিণত হয়।",
        arabic: "خلق الله آدم من الطين ونفخ فيه من روحه. وعلم آدم أسماء كل شيء وأمر الملائكة بالسجود له. رفض إبليس تكبرًا، فأصبح أول من عصى الله."
      },
      verses: ["Quran 2:30-34", "Quran 7:11-25", "Quran 15:26-44", "Quran 17:61-65", "Quran 20:115-123"],
      lessons: {
        english: ["Allah's creative power", "The danger of pride", "The honor given to humans"],
        bengali: ["আল্লাহর সৃষ্টিশীল ক্ষমতা", "অহংকারের বিপদ", "মানুষকে প্রদত্ত সম্মান"],
        arabic: ["قوة الله الخالقة", "خطر الكبر", "الشرف الممنوح للإنسان"]
      }
    },
    {
      id: 2,
      title: {
        english: "Noah's Ark",
        bengali: "নূহ (আ.) এর নৌকা",
        arabic: "سفينة نوح"
      },
      category: "punishment",
      summary: {
        english: "The story of Prophet Noah and the great flood that destroyed the disbelievers.",
        bengali: "নবী নূহ (আ.) এবং মহাপ্লাবনের গল্প যা কাফেরদের ধ্বংস করেছিল।",
        arabic: "قصة النبي نوح والطوفان العظيم الذي دمر الكافرين."
      },
      details: {
        english: "Noah preached to his people for 950 years, but only a few believed. Allah commanded Noah to build an ark and take pairs of animals. The flood came and destroyed the disbelievers, while Noah and the believers were saved.",
        bengali: "নূহ (আ.) ৯৫০ বছর ধরে তাঁর সম্প্রদায়কে দাওয়াত দিয়েছিলেন, কিন্তু অল্প সংখ্যকই ঈমান এনেছিল। আল্লাহ নূহ (আ.) কে একটি নৌকা তৈরি করতে এবং প্রত্যেক প্রাণীর জোড়া নিতে নির্দেশ দেন। প্লাবন আসে এবং কাফেরদের ধ্বংস করে, অন্যদিকে নূহ (আ.) এবং মুমিনরা রক্ষা পান।",
        arabic: "دعا نوح قومه 950 سنة، ولكن آمن القليل فقط. أمر الله نوح ببناء السفينة وأخذ أزواج من الحيوانات. جاء الطوفان ودمر الكافرين، بينما نجا نوح والمؤمنون."
      },
      verses: ["Quran 7:59-64", "Quran 10:71-73", "Quran 11:25-49", "Quran 23:23-30", "Quran 71:1-28"],
      lessons: {
        english: ["Allah's punishment for persistent disbelief", "Patience in calling to Allah", "Divine protection for believers"],
        bengali: ["জেদী অবিশ্বাসের জন্য আল্লাহর শাস্তি", "আল্লাহর দিকে আহ্বানে ধৈর্য্য", "মুমিনদের জন্য ঐশ্বরিক সুরক্ষা"],
        arabic: ["عقاب الله للكفر المستمر", "الصبر في الدعوة إلى الله", "الحماية الإلهية للمؤمنين"]
      }
    },
    {
      id: 3,
      title: {
        english: "Ibrahim and the Fire",
        bengali: "ইব্রাহিম (আ.) ও অগ্নিকাণ্ড",
        arabic: "إبراهيم والنار"
      },
      category: "protection",
      summary: {
        english: "The story of how Allah saved Prophet Ibrahim from being burned by his people.",
        bengali: "আল্লাহ কীভাবে নবী ইব্রাহিম (আ.) কে তাঁর সম্প্রদায়ের দ্বারা পোড়ানো থেকে রক্ষা করেছিলেন তার গল্প।",
        arabic: "قصة كيف أنقذ الله النبي إبراهيم من أن يحرقه قومه."
      },
      details: {
        english: "Ibrahim broke the idols of his people to show their falsehood. In anger, they built a huge fire and threw him in it. But Allah commanded the fire to be cool and safe for Ibrahim, leaving him unharmed.",
        bengali: "ইব্রাহিম (আ.) তাঁর সম্প্রদায়ের মূর্তিগুলো ভেঙে দিয়েছিলেন তাদের মিথ্যা প্রমাণ করতে। ক্রোধে তারা একটি বিশাল অগ্নিকুণ্ড তৈরি করে তাকে সেখানে নিক্ষেপ করে। কিন্তু আল্লাহ আগুনকে শীতল ও নিরাপদ করে দেন, ফলে ইব্রাহিম (আ.) অক্ষত থাকেন।",
        arabic: "حطم إبراهيم أصنام قومه ليبين بطلانها. فغضبوا وأشعلوا نارًا عظيمة وألقوه فيها. ولكن الله أمر النار أن تكون بردًا وسلامًا على إبراهيم، فخرج منها سليمًا."
      },
      verses: ["Quran 21:51-70", "Quran 37:83-98"],
      lessons: {
        english: ["Allah's power over natural laws", "Protection for those who stand for truth", "The futility of opposing Allah"],
        bengali: ["প্রাকৃতিক নিয়মের উপর আল্লাহর ক্ষমতা", "সত্যের পক্ষে দাঁড়ানোদের জন্য সুরক্ষা", "আল্লাহর বিরোধিতার অসারতা"],
        arabic: ["قوة الله على القوانين الطبيعية", "حماية المدافعين عن الحق", "عدم جدوى معارضة الله"]
      }
    },
    {
      id: 4,
      title: {
        english: "Yusuf's Journey",
        bengali: "ইউসুফ (আ.) এর জীবনকাহিনী",
        arabic: "قصة يوسف"
      },
      category: "wisdom",
      summary: {
        english: "The story of Prophet Yusuf, from being thrown in a well to becoming a ruler in Egypt.",
        bengali: "নবী ইউসুফ (আ.) এর গল্প, কূপে নিক্ষিপ্ত হওয়া থেকে মিশরের শাসক হওয়া পর্যন্ত।",
        arabic: "قصة النبي يوسف، من إلقائه في البئر إلى أن أصبح حاكمًا في مصر."
      },
      details: {
        english: "Yusuf was betrayed by his brothers, sold into slavery, falsely accused, and imprisoned. Through all trials, he remained patient and Allah eventually elevated him to a position of power in Egypt, where he reunited with his family.",
        bengali: "ইউসুফ (আ.) তাঁর ভাইদের দ্বারা প্রতারিত হন, দাস হিসেবে বিক্রি হন, মিথ্যা অভিযোগে কারাবরণ করেন। সমস্ত পরীক্ষায় তিনি ধৈর্য্য ধারণ করেন এবং শেষ পর্যন্ত আল্লাহ তাকে মিশরে ক্ষমতার অবস্থানে উন্নীত করেন, যেখানে তিনি তাঁর পরিবারের সাথে পুনর্মিলিত হন।",
        arabic: "خان يوسف إخوته وباعوه عبدًا، ثم اتهم زورًا وسجن. في كل هذه المحن صبر، فأعلى الله مكانته في مصر حيث التقى بأهله مرة أخرى."
      },
      verses: ["Quran 12:1-101 (entire chapter)"],
      lessons: {
        english: ["Allah's plan is perfect", "Patience in adversity", "Forgiveness of wrongdoers"],
        bengali: ["আল্লাহর পরিকল্পনা নিখুঁত", "বিপদে ধৈর্য্য", "অন্যায়কারীদের ক্ষমা"],
        arabic: ["خطة الله كاملة", "الصبر في الشدائد", "مسامحة المخطئين"]
      }
    },
    {
      id: 5,
      title: {
        english: "Moses and Pharaoh",
        bengali: "মূসা (আ.) ও ফেরাউন",
        arabic: "موسى وفرعون"
      },
      category: "justice",
      summary: {
        english: "The story of how Allah supported Moses against the tyranny of Pharaoh.",
        bengali: "আল্লাহ কীভাবে মূসা (আ.) কে ফেরাউনের অত্যাচারের বিরুদ্ধে সমর্থন করেছিলেন তার গল্প।",
        arabic: "قصة كيف أيد الله موسى ضد طغيان فرعون."
      },
      details: {
        english: "Moses was sent to Pharaoh with clear signs, but Pharaoh rejected them arrogantly. After several plagues, Pharaoh pursued the escaping Israelites. Allah parted the sea for the believers and drowned Pharaoh and his army when they followed.",
        bengali: "মূসা (আ.) কে স্পষ্ট নিদর্শনসহ ফেরাউনের কাছে পাঠানো হয়েছিল, কিন্তু ফেরাউন অহংকারবশত তা প্রত্যাখ্যান করে। কয়েকটি বিপর্যয়ের পর, ফেরাউন পালিয়ে যাওয়া বনি ইসরাঈলদের তাড়া করে। আল্লাহ মুমিনদের জন্য সমুদ্রকে বিভক্ত করেন এবং ফেরাউন ও তার সৈন্যবাহিনীকে ডুবিয়ে দেন যখন তারা অনুসরণ করে।",
        arabic: "أرسل موسى إلى فرعون بآيات بينة، لكن فرعون رفضها تكبرًا. بعد عدة ضربات، طارد فرعون بني إسرائيل، فشق الله البحر للمؤمنين وأغرق فرعون وجنوده عندما تبعوهم."
      },
      verses: ["Quran 7:103-137", "Quran 10:75-92", "Quran 20:9-79", "Quran 26:10-68", "Quran 28:3-42"],
      lessons: {
        english: ["Allah's support for the oppressed", "The end of tyrants", "The reality of divine miracles"],
        bengali: ["নিপীড়িতদের জন্য আল্লাহর সমর্থন", "অত্যাচারীদের পরিণতি", "ঐশ্বরিক মুজিজার বাস্তবতা"],
        arabic: ["نصرة الله للمظلومين", "نهاية الطغاة", "حقيقة المعجزات الإلهية"]
      }
    },
    {
      id: 6,
      title: {
        english: "People of the Garden",
        bengali: "বাগানের মালিকরা",
        arabic: "أصحاب الجنة"
      },
      category: "blessings",
      summary: {
        english: "A story about people who forgot to be grateful for Allah's blessings.",
        bengali: "একটি গল্প যারা আল্লাহর নেয়ামতের জন্য কৃতজ্ঞতা প্রকাশ করতে ভুলে গিয়েছিল।",
        arabic: "قصة عن قوم نسوا أن يشكروا الله على نعمه."
      },
      details: {
        english: "A group of pious people had a lush garden. They planned to harvest it without giving the poor their share, forgetting to say 'Insha'Allah'. That night, Allah sent a calamity that destroyed the garden, teaching them a lesson about gratitude and dependence on Allah.",
        bengali: "কয়েকজন ধার্মিক লোকের একটি সমৃদ্ধ বাগান ছিল। তারা গরীবদের অংশ না দিয়ে বাগান থেকে ফল সংগ্রহ করার পরিকল্পনা করেছিল, 'ইনশাআল্লাহ' বলতে ভুলে গিয়েছিল। সেই রাতে আল্লাহ একটি বিপর্যয় পাঠান যা বাগানটি ধ্বংস করে দেয়, তাদের কৃতজ্ঞতা এবং আল্লাহর উপর নির্ভরতার শিক্ষা দেয়।",
        arabic: "كانت لمجموعة من الصالحين حديقة غناء. خططوا لحصادها دون إعطاء الفقراء حقهم، ناسين أن يقولوا 'إن شاء الله'. فأرسل الله عليهم مصيبة أهلكت الحديقة، معلمًا إياهم درسًا عن الشكر والاعتماد على الله."
      },
      verses: ["Quran 68:17-33"],
      lessons: {
        english: ["The importance of gratitude", "Remembering Allah in our plans", "The danger of arrogance"],
        bengali: ["কৃতজ্ঞতার গুরুত্ব", "আমাদের পরিকল্পনায় আল্লাহকে স্মরণ করা", "অহংকারের বিপদ"],
        arabic: ["أهمية الشكر", "ذكر الله في خططنا", "خطر الكبر"]
      }
    },
    {
      id: 7,
      title: {
        english: "The People of the Cave",
        bengali: "আসহাবে কাহফ",
        arabic: "أصحاب الكهف"
      },
      category: "protection",
      summary: {
        english: "The story of young believers who took refuge in a cave to protect their faith.",
        bengali: "তরুণ মুমিনদের গল্প যারা তাদের ঈমান রক্ষার জন্য একটি গুহায় আশ্রয় নিয়েছিল।",
        arabic: "قصة فتية آمنوا بربهم ولجأوا إلى الكهف لحماية إيمانهم."
      },
      details: {
        english: "A group of young men fled persecution for their faith and took shelter in a cave. Allah caused them to sleep for 309 years, protecting them from their persecutors. When they awoke, they found their society had become believers.",
        bengali: "কয়েকজন যুবক তাদের ঈমানের কারণে নিপীড়ন থেকে পালিয়ে একটি গুহায় আশ্রয় নেয়। আল্লাহ তাদের ৩০৯ বছর ঘুম পাড়িয়ে দেন, তাদেরকে নিপীড়কদের থেকে রক্ষা করেন। যখন তারা জাগ্রত হয়, তারা দেখে যে তাদের সমাজ মুমিন হয়ে গেছে।",
        arabic: "هرب فتية من الاضطهاد على دينهم ولجأوا إلى كهف. فأنامهم الله 309 سنين، محميًا إياهم من مضطهديهم. وعندما استيقظوا وجدوا مجتمعهم قد آمن."
      },
      verses: ["Quran 18:9-26"],
      lessons: {
        english: ["Allah's protection of the believers", "The power of faith in youth", "Divine intervention in human affairs"],
        bengali: ["মুমিনদের জন্য আল্লাহর সুরক্ষা", "যুবকদের মধ্যে ঈমানের শক্তি", "মানুষের বিষয়ে ঐশ্বরিক হস্তক্ষেপ"],
        arabic: ["حماية الله للمؤمنين", "قوة الإيمان في الشباب", "التدخل الإلهي في شؤون البشر"]
      }
    },
    {
      id: 8,
      title: {
        english: "The Story of Maryam",
        bengali: "মরিয়ম (আ.) এর কাহিনী",
        arabic: "قصة مريم"
      },
      category: "mercy",
      summary: {
        english: "The story of Maryam, the mother of Isa (Jesus), and her miraculous pregnancy.",
        bengali: "মরিয়ম (আ.), ঈসা (আ.) এর মাতা এবং তাঁর অলৌকিক গর্ভধারণের গল্প।",
        arabic: "قصة مريم أم عيسى وحملها المعجزي."
      },
      details: {
        english: "Maryam was a pious woman dedicated to worship. The angel Jibril appeared to her and announced she would bear a child without a father. Despite people's accusations, Allah protected her honor, and baby Isa spoke from the cradle to defend her.",
        bengali: "মরিয়ম (আ.) ছিলেন একজন ধার্মিক নারী যিনি ইবাদতে নিবেদিত ছিলেন। ফেরেশতা জিবরীল (আ.) তাঁর কাছে এসে ঘোষণা দেন যে তিনি পিতৃহীন সন্তান জন্ম দেবেন। মানুষের অপবাদ সত্ত্বেও আল্লাহ তাঁর সম্মান রক্ষা করেন, এবং শিশু ঈসা (আ.) তাঁর পক্ষে দোলনা থেকে কথা বলেন।",
        arabic: "كانت مريم امرأة صالحة متعبدة. ظهر لها جبريل وبشرها بغلام من دون أب. رغم اتهامات الناس، حمى الله شرفها، وتكلم عيسى من المهد دفاعًا عنها."
      },
      verses: ["Quran 3:42-47", "Quran 19:16-34", "Quran 21:91", "Quran 66:12"],
      lessons: {
        english: ["Allah's power to do the impossible", "The virtue of chastity", "Divine protection for the righteous"],
        bengali: ["অসম্ভবকে সম্ভব করার আল্লাহর ক্ষমতা", "পবিত্রতার গুণ", "ধার্মিকদের জন্য ঐশ্বরিক সুরক্ষা"],
        arabic: ["قدرة الله على فعل المستحيل", "فضيلة العفة", "حماية الله للصالحين"]
      }
    },
    {
      id: 9,
      title: {
        english: "The Story of Luqman",
        bengali: "লোকমান (আ.) এর কাহিনী",
        arabic: "قصة لقمان"
      },
      category: "wisdom",
      summary: {
        english: "The wise advice of Luqman to his son, preserved in the Quran.",
        bengali: "কুরআনে সংরক্ষিত লোকমান (আ.) এর পুত্রকে দেওয়া জ্ঞানগর্ভ উপদেশ।",
        arabic: "وصايا لقمان الحكيمة لابنه المحفوظة في القرآن."
      },
      details: {
        english: "Luqman was a wise man whose advice to his son includes: not associating partners with Allah, being good to parents, establishing prayer, enjoining good and forbidding evil, being patient, avoiding arrogance, and speaking gently.",
        bengali: "লোকমান (আ.) ছিলেন একজন জ্ঞানী ব্যক্তি যার পুত্রকে দেওয়া উপদেশের মধ্যে রয়েছে: আল্লাহর সাথে কাউকে শরিক না করা, পিতামাতার সাথে সদাচরণ করা, নামায প্রতিষ্ঠা করা, ভাল কাজের আদেশ ও মন্দ কাজে নিষেধ করা, ধৈর্য্য ধারণ করা, অহংকার এড়ানো এবং নম্রভাবে কথা বলা।",
        arabic: "كان لقمان حكيمًا، ومن وصاياه لابنه: عدم الشرك بالله، والإحسان للوالدين، وإقامة الصلاة، والأمر بالمعروف والنهي عن المنكر، والصبر، وتجنب الكبر، والتحدث بلطف."
      },
      verses: ["Quran 31:12-19"],
      lessons: {
        english: ["The value of wisdom", "Parental guidance", "Moral and spiritual teachings"],
        bengali: ["জ্ঞানের মূল্য", "পিতামাতার নির্দেশনা", "নৈতিক ও আধ্যাত্মিক শিক্ষা"],
        arabic: ["قيمة الحكمة", "توجيه الوالدين", "تعاليم أخلاقية وروحية"]
      }
    },
    {
      id: 10,
      title: {
        english: "The Story of Qarun",
        bengali: "কারুনের কাহিনী",
        arabic: "قصة قارون"
      },
      category: "punishment",
      summary: {
        english: "The story of a wealthy man who became arrogant and was punished by Allah.",
        bengali: "একজন ধনী ব্যক্তির গল্প যে অহংকারী হয়ে উঠেছিল এবং আল্লাহর শাস্তি পেয়েছিল।",
        arabic: "قصة رجل ثري تكبر فعاقبه الله."
      },
      details: {
        english: "Qarun was given immense wealth but became arrogant, refusing to share with the poor. He even mocked Musa (Moses) and his teachings. As punishment, Allah caused the earth to swallow Qarun and his treasures.",
        bengali: "কারুনকে বিপুল সম্পদ দেওয়া হয়েছিল কিন্তু সে অহংকারী হয়ে উঠেছিল, গরীবদের সাথে ভাগ করতে অস্বীকার করেছিল। সে মূসা (আ.) ও তাঁর শিক্ষাকে উপহাসও করেছিল। শাস্তিস্বরূপ আল্লাহ কারুন ও তার ধনসম্পদকে মাটির নিচে ধসিয়ে দেন।",
        arabic: "أعطي قارون ثروة طائلة لكنه تكبر ورفض مشاركة الفقراء. حتى سخر من موسى وتعاليمه. فعاقبه الله بأن خسف به وبداره الأرض."
      },
      verses: ["Quran 28:76-82", "Quran 29:39", "Quran 40:24"],
      lessons: {
        english: ["The danger of wealth without gratitude", "Allah's punishment for arrogance", "The temporary nature of worldly wealth"],
        bengali: ["কৃতজ্ঞতাহীন সম্পদের বিপদ", "অহংকারের জন্য আল্লাহর শাস্তি", "দুনিয়ার সম্পদের অস্থায়ী প্রকৃতি"],
        arabic: ["خطر الغنى دون شكر", "عقاب الله للمتكبرين", "طبيعة الدنيا الفانية"]
      }
    },
        {
      id: 11,
      title: {
        english: "Hud and the People of 'Aad",
        bengali: "হুদ (আ.) ও আদ জাতি",
        arabic: "هود وقوم عاد"
      },
      category: "punishment",
      summary: {
        english: "The story of Prophet Hud sent to the powerful but arrogant people of 'Aad.",
        bengali: "নবী হুদ (আ.) কে প্রেরণ করা হয়েছিল শক্তিশালী কিন্তু অহংকারী আদ জাতির কাছে।",
        arabic: "قصة النبي هود المرسل إلى قوم عاد الأقوياء المتكبرين."
      },
      details: {
        english: "The people of 'Aad were physically strong and built great monuments, but they worshipped idols and oppressed others. Hud warned them to worship Allah alone, but they mocked him. Allah destroyed them with a furious wind that lasted seven nights and eight days.",
        bengali: "আদ জাতি শারীরিকভাবে শক্তিশালী ছিল এবং বিশাল সৌধ নির্মাণ করেছিল, কিন্তু তারা মূর্তি পূজা করত এবং অন্যদের উপর অত্যাচার করত। হুদ (আ.) তাদেরকে এক আল্লাহর ইবাদত করতে সতর্ক করেছিলেন, কিন্তু তারা তাঁকে উপহাস করেছিল। আল্লাহ তাদেরকে একটি প্রচণ্ড ঝড় দ্বারা ধ্বংস করেছিলেন যা সাত রাত ও আট দিন ধরে চলেছিল।",
        arabic: "كان قوم عاد أقوياء البنية وشيدوا صروحًا عظيمة، لكنهم عبدوا الأصنام وظلموا الآخرين. حذرهم هود أن يعبدوا الله وحده فسخروا منه. فأهلكهم الله بريح صرصر عاتية استمرت سبع ليال وثمانية أيام."
      },
      verses: ["Quran 7:65-72", "Quran 11:50-60", "Quran 26:123-140", "Quran 41:15-16", "Quran 46:21-26"],
      lessons: {
        english: ["Civilization without faith is doomed", "Allah's punishment for arrogance", "The futility of material strength without righteousness"],
        bengali: ["ঈমানবিহীন সভ্যতা ধ্বংসপ্রাপ্ত", "অহংকারের জন্য আল্লাহর শাস্তি", "ন্যায়বিচার ছাড়া বস্তুগত শক্তির অসারতা"],
        arabic: ["الحضارة بدون إيمان مصيرها الزوال", "عقاب الله للمتكبرين", "عدم جدوى القوة المادية بدون تقوى"]
      }
    },
    {
    id: 12,
    title: {
      english: "The Story of Salih and the She-Camel",
      bengali: "সালেহ (আ.) ও উটনী",
      arabic: "قصة صالح والناقة"
    },
    category: "punishment",
    summary: {
      english: "The story of Prophet Salih and the miraculous she-camel sent to the people of Thamud.",
      bengali: "নবী সালেহ (আ.) এবং সামুদ জাতির কাছে প্রেরিত অলৌকিক উটনীর গল্প।",
      arabic: "قصة النبي صالح والناقة المعجزة التي أرسلها الله إلى قوم ثمود."
    },
    details: {
      english: "Allah sent Salih to the people of Thamud who were skilled builders carving homes in mountains. As a sign, Allah brought forth a she-camel from a rock, commanding them to let her drink on alternate days. When they hamstrung the camel, a terrible earthquake destroyed them.",
      bengali: "আল্লাহ সালেহ (আ.) কে সামুদ জাতির কাছে প্রেরণ করেছিলেন যারা পাহাড় কেটে ঘর বানাতে দক্ষ ছিল। একটি নিদর্শন হিসেবে আল্লাহ একটি পাথর থেকে একটি উটনী বের করলেন, তাদেরকে নির্দেশ দিলেন একদিন উটনী পান করবে আর একদিন তারা। যখন তারা উটনীর পা কেটে দিল, একটি ভয়াবহ ভূমিকম্প তাদের ধ্বংস করে দিল।",
      arabic: "أرسل الله صالحًا إلى قوم ثمود الذين كانوا ينحتون الجبال بيوتًا. آية لهم، أخرج الله ناقة من الصخرة وأمرهم أن يتركوها تشرب يومًا ويشربوا يومًا. فلما عقروها، أهلكهم الله بصيحة ورجفة شديدة."
    },
    verses: ["Quran 7:73-79", "Quran 11:61-68", "Quran 26:141-159", "Quran 27:45-53", "Quran 91:11-15"],
    lessons: {
      english: ["Disobeying Allah's commands brings destruction", "Miracles are tests for people", "Arrogance leads to downfall"],
      bengali: ["আল্লাহর আদেশ অমান্য করলে ধ্বংস আসে", "মুজিজা মানুষের জন্য পরীক্ষা", "অহংকার পতনের কারণ"],
      arabic: ["معصية أوامر الله تجلب الدمار", "المعجزات اختبار للناس", "الكبر يؤدي إلى السقوط"]
    }
  },
  {
    id: 13,
    title: {
      english: "The Story of Yunus in the Whale",
      bengali: "ইউনুস (আ.) ও তিমি",
      arabic: "قصة يونس في بطن الحوت"
    },
    category: "mercy",
    summary: {
      english: "The story of Prophet Yunus who was swallowed by a whale after leaving his people.",
      bengali: "নবী ইউনুস (আ.) এর গল্প যিনি তাঁর সম্প্রদায় ত্যাগ করার পর একটি তিমি দ্বারা গিলে ফেলা হয়েছিলেন।",
      arabic: "قصة النبي يونس الذي ابتلعه الحوت بعد ترك قومه."
    },
    details: {
      english: "Yunus became frustrated with his people's disbelief and left without Allah's permission. A storm arose, he was thrown overboard and swallowed by a whale. In its belly, he repented and praised Allah, who caused the whale to release him onto shore.",
      bengali: "ইউনুস (আ.) তাঁর সম্প্রদায়ের অবিশ্বাসে হতাশ হয়ে আল্লাহর অনুমতি ছাড়াই চলে গেলেন। একটি ঝড় উঠল, তিনি জাহাজ থেকে সমুদ্রে নিক্ষিপ্ত হলেন এবং একটি তিমি দ্বারা গিলে ফেলা হলেন। তিমির পেটে তিনি তাওবা করলেন এবং আল্লাহর প্রশংসা করলেন, যিনি তিমিকে তাকে তীরে ছেড়ে দিতে বাধ্য করলেন।",
      arabic: "غضب يونس من كفر قومه وتركهم دون إذن الله. فهاج البحر وألقي في الماء فابتلعه الحوت. في بطنه تاب وسبح الله فأمر الحوت أن يلقيه على الشاطئ."
    },
    verses: ["Quran 10:98", "Quran 21:87-88", "Quran 37:139-148", "Quran 68:48-50"],
    lessons: {
      english: ["Allah's mercy accepts repentance", "Patience in calling to Allah", "No one can escape Allah's plan"],
      bengali: ["আল্লাহর রহমত তাওবা কবুল করে", "আল্লাহর দিকে আহ্বানে ধৈর্য্য", "কেউ আল্লাহর পরিকল্পনা থেকে পালাতে পারে না"],
      arabic: ["رحمة الله تقبل التوبة", "الصبر في الدعوة إلى الله", "لا يمكن الفرار من قدر الله"]
    }
  },
  {
    id: 14,
    title: {
      english: "The Story of Dhul-Qarnayn",
      bengali: "জুলকারনাইন (আ.) এর কাহিনী",
      arabic: "قصة ذو القرنين"
    },
    category: "power",
    summary: {
      english: "The story of a righteous ruler who traveled the world establishing justice.",
      bengali: "একজন ন্যায়পরায়ণ শাসকের গল্প যিনি বিশ্ব ভ্রমণ করে ন্যায় প্রতিষ্ঠা করেছিলেন।",
      arabic: "قصة حاكم صالح طاف العالم ينشر العدل."
    },
    details: {
      english: "Dhul-Qarnayn was given power by Allah and traveled to the east and west. He helped people against Gog and Magog by building a massive barrier. His story demonstrates how power should be used for justice and protection of the weak.",
      bengali: "জুলকারনাইন (আ.) কে আল্লাহ কর্তৃক ক্ষমতা দেওয়া হয়েছিল এবং তিনি পূর্ব ও পশ্চিমে ভ্রমণ করেছিলেন। তিনি ইয়াজুজ-মাজুজের বিরুদ্ধে মানুষদের সাহায্য করার জন্য একটি বিশাল প্রাচীর নির্মাণ করেছিলেন। তাঁর গল্প দেখায় কিভাবে ক্ষমতা ন্যায়বিচার ও দুর্বলদের সুরক্ষার জন্য ব্যবহার করা উচিত।",
      arabic: "أعطى الله ذا القرنين سلطانًا فطاف المشرق والمغرب. وساعد الناس ضد يأجوج ومأجوج ببناء سد عظيم. قصته توضح كيف تستخدم القوة للعدل وحماية الضعفاء."
    },
    verses: ["Quran 18:83-101"],
    lessons: {
      english: ["Righteous use of power", "Global perspective in establishing justice", "Protection from evil forces"],
      bengali: ["ক্ষমতার সঠিক ব্যবহার", "ন্যায় প্রতিষ্ঠায় বৈশ্বিক দৃষ্টিভঙ্গি", "দুষ্ট শক্তি থেকে সুরক্ষা"],
      arabic: ["الاستخدام الصالح للسلطة", "النظرة العالمية في إقامة العدل", "الحماية من قوى الشر"]
    }
  },
  {
    id: 15,
    title: {
      english: "The Story of the Two Sons of Adam",
      bengali: "আদম (আ.) এর দুই পুত্রের কাহিনী",
      arabic: "قصة ابني آدم"
    },
    category: "justice",
    summary: {
      english: "The story of Habil and Qabil (Abel and Cain), the first murder in human history.",
      bengali: "হাবিল ও কাবিলের গল্প, মানব ইতিহাসের প্রথম হত্যাকাণ্ড।",
      arabic: "قصة هابيل وقابيل، أول جريمة قتل في التاريخ البشري."
    },
    details: {
      english: "The two sons of Adam offered sacrifices; Allah accepted Habil's but rejected Qabil's. Out of jealousy, Qabil killed his brother, then learned from a crow how to bury the body. This became a lesson about controlling anger and jealousy.",
      bengali: "আদম (আ.) এর দুই পুত্র কোরবানি দিল; আল্লাহ হাবিলের কোরবানি কবুল করলেন কিন্তু কাবিলেরটি নিলেন না। ঈর্ষান্বিত হয়ে কাবিল তার ভাইকে হত্যা করল, তারপর একটি কাক থেকে দেহ কবর দেওয়া শিখল। এটি রাগ ও ঈর্ষা নিয়ন্ত্রণের শিক্ষা হয়ে রইল।",
      arabic: "قدّم ابنا آدم قربانًا فتقبل الله هابيل ولم يتقبل قابيل. فقتل قابيل أخاه حسدًا، ثم تعلم من الغراب كيف يدفن الجثة. فصارت عبرة في كظم الغيظ والحسد."
    },
    verses: ["Quran 5:27-32"],
    lessons: {
      english: ["Consequences of jealousy", "Value of sincere worship", "Sanctity of human life"],
      bengali: ["ঈর্ষার পরিণতি", "আন্তরিক ইবাদতের মূল্য", "মানুষের জীবনের পবিত্রতা"],
      arabic: ["عواقب الحسد", "قيمة العبادة الخالصة", "حرمة النفس البشرية"]
    }
  },
  {
    id: 16,
    title: {
      english: "The Story of the Companions of the Elephant",
      bengali: "আশাবে ফিলের কাহিনী",
      arabic: "قصة أصحاب الفيل"
    },
    category: "protection",
    summary: {
      english: "The story of how Allah protected the Kaaba from destruction by an army with elephants.",
      bengali: "আল্লাহ কীভাবে হাতিসহ একটি সেনাবাহিনী থেকে কাবাকে রক্ষা করেছিলেন তার গল্প।",
      arabic: "قصة كيف حمى الله الكعبة من جيش جاء بالفيلة لهدمها."
    },
    details: {
      english: "Abraha, the ruler of Yemen, marched to destroy the Kaaba with his army including elephants. Allah sent flocks of birds that dropped stones of baked clay, destroying the army and protecting His sacred house.",
      bengali: "ইয়ামনের শাসক আবরাহা কাবা ধ্বংস করতে হাতিসহ তার সেনাবাহিনী নিয়ে অগ্রসর হয়েছিল। আল্লাহ পাখিদের ঝাঁক পাঠালেন যারা পোড়া মাটির পাথর ফেলেছিল, সেনাবাহিনী ধ্বংস করে তাঁর পবিত্র ঘর রক্ষা করেছিল।",
      arabic: "زحف أبرهة ملك اليمن بجيش فيه فيلة لهدم الكعبة. فأرسل الله طيورًا ترميهم بحجارة من سجيل، فدمر الجيش وحمى بيته الحرام."
    },
    verses: ["Quran 105:1-5"],
    lessons: {
      english: ["Allah's protection of His sacred places", "Divine punishment for attackers", "The powerless can defeat the powerful with Allah's help"],
      bengali: ["আল্লাহ তাঁর পবিত্র স্থানগুলোর সুরক্ষা দেন", "আক্রমণকারীদের জন্য ঐশ্বরিক শাস্তি", "আল্লাহর সাহায্যে দুর্বলরা শক্তিশালীদের পরাজিত করতে পারে"],
      arabic: ["حماية الله لأماكنه المقدسة", "عقاب الله للمعتدين", "الضعفاء يهزمون الأقوياء بنصر الله"]
    }
  },
  {
    id: 17,
    title: {
      english: "The Story of the Companions of the Trench",
      bengali: "আশাবে উখদুদের কাহিনী",
      arabic: "قصة أصحاب الأخدود"
    },
    category: "patience",
    summary: {
      english: "The story of believers who were thrown into fiery trenches for their faith.",
      bengali: "মুমিনদের গল্প যাদেরকে তাদের ঈমানের কারণে অগ্নিকুণ্ডে নিক্ষেপ করা হয়েছিল।",
      arabic: "قصة مؤمنين ألقوا في أخاديد النار بسبب إيمانهم."
    },
    details: {
      english: "A tyrannical king persecuted believers, throwing them into trenches of fire. A young boy with miraculous abilities stood firm in faith until he was martyred, inspiring his mother and others to remain steadfast.",
      bengali: "একজন অত্যাচারী রাজা মুমিনদের নিপীড়ন করেছিল, তাদেরকে আগুনের গর্তে নিক্ষেপ করেছিল। অলৌকিক ক্ষমতাসম্পন্ন একটি বালক ঈমানে অটল থাকল যতক্ষণ না সে শাহাদাত বরণ করল, তার মা ও অন্যদকে অবিচল থাকতে উদ্বুদ্ধ করল।",
      arabic: "اضطهد ملك ظالم المؤمنين وأحرقهم في أخاديد النار. فثبت غلام له معجزات في إيمانه حتى استشهد، فصبرت أمه وغيرها على الإيمان."
    },
    verses: ["Quran 85:4-10"],
    lessons: {
      english: ["Steadfastness in faith despite persecution", "Allah tests the believers", "Ultimate victory belongs to the patient"],
      bengali: ["নিপীড়ন সত্ত্বেও ঈমানে অবিচল থাকা", "আল্লাহ মুমিনদের পরীক্ষা নেন", "চূড়ান্ত বিজয় ধৈর্যশীলদের"],
      arabic: ["الثبات في الإيمان رغم الاضطهاد", "الله يختبر المؤمنين", "النصر النهائي للصابرين"]
    }
  },
  {
    id: 18,
    title: {
      english: "The Story of the People of Saba",
      bengali: "সাবা জাতির কাহিনী",
      arabic: "قصة سبأ"
    },
    category: "blessings",
    summary: {
      english: "The story of a prosperous nation that fell due to ingratitude.",
      bengali: "একটি সমৃদ্ধ জাতির গল্প যে কৃতঘ্নতার কারণে পতিত হয়েছিল।",
      arabic: "قصة أمة مزدهرة سقطت بسبب الكفران."
    },
    details: {
      english: "The people of Saba enjoyed abundant blessings including fertile lands and a great dam. When they became ungrateful and turned from Allah's path, the dam collapsed and their prosperity was replaced by scattered tribes and bitter fruits.",
      bengali: "সাবা জাতি উর্বর ভূমি ও একটি বিশাল বাঁধসহ প্রচুর নেয়ামত ভোগ করত। যখন তারা অকৃতজ্ঞ হয়ে আল্লাহর পথ থেকে সরে গেল, বাঁধ ধসে গেল এবং তাদের সমৃদ্ধি ছড়িয়ে ছিটিয়ে গোত্র ও তিক্ত ফল দ্বারা প্রতিস্থাপিত হল।",
      arabic: "نعم أهل سبأ بجنات وعرين وسد عظيم. فلما كفروا بأنعم الله، انهدم السد وتحولت نعمهم إلى قبائل مشتتة وثمرات مرة."
    },
    verses: ["Quran 34:15-21"],
    lessons: {
      english: ["Gratitude preserves blessings", "Civilizations fall when they abandon Allah", "Worldly comforts are temporary"],
      bengali: ["কৃতজ্ঞতা নেয়ামত সংরক্ষণ করে", "সভ্যতা পতিত হয় যখন তারা আল্লাহকে ছেড়ে দেয়", "দুনিয়ার সুখ সাময়িক"],
      arabic: ["الشكر يحفظ النعم", "الحضارات تسقط عند ترك دين الله", "ملذات الدنيا زائلة"]
    }
  },
  {
    id: 19,
    title: {
      english: "The Story of the Cow of Banu Israel",
      bengali: "বনি ইসরাঈলের গাভীর কাহিনী",
      arabic: "قصة بقرة بني إسرائيل"
    },
    category: "wisdom",
    summary: {
      english: "The story of how Allah tested Banu Israel with the command to slaughter a cow.",
      bengali: "আল্লাহ কীভাবে বনি ইসরাঈলকে একটি গাভী জবাই করার আদেশ দিয়ে পরীক্ষা করেছিলেন তার গল্প।",
      arabic: "قصة كيف اختبر الله بني إسرائيل بأمر ذبح بقرة."
    },
    details: {
      english: "After a murder, Allah commanded Banu Israel to slaughter a specific cow to reveal the killer. They kept asking unnecessary questions, making the command more difficult. This shows how excessive questioning can complicate matters.",
      bengali: "একটি হত্যার পর আল্লাহ বনি ইসরাঈলকে হত্যাকারী প্রকাশ করার জন্য একটি নির্দিষ্ট গাভী জবাই করতে আদেশ দিলেন। তারা অপ্রয়োজনীয় প্রশ্ন করতে থাকল, আদেশটিকে আরও কঠিন করে তুলল। এটি দেখায় কিভাবে অতিরিক্ত প্রশ্ন বিষয়গুলোকে জটিল করতে পারে।",
      arabic: "بعد جريمة قتل، أمر الله بني إسرائيل بذبح بقرة معينة للكشف عن القاتل. فاستمروا في الأسئلة غير الضرورية مما زاد الأمر صعوبة. عبرة في أن الإكثار من الأسئلة قد يعقد الأمور."
    },
    verses: ["Quran 2:67-73"],
    lessons: {
      english: ["Obedience should be prompt", "Excessive questioning complicates matters", "Allah's commands have wisdom even if not immediately apparent"],
      bengali: ["আজ্ঞাপালন তৎক্ষণাৎ হওয়া উচিত", "অতিরিক্ত প্রশ্ন বিষয়গুলোকে জটিল করে", "আল্লাহর আদেশে হিকমত আছে এমনকি যদি তা সাথে সাথে স্পষ্ট না হয়"],
      arabic: ["الطاعة يجب أن تكون فورية", "الإكثار من الأسئلة يعقد الأمور", "أوامر الله فيها حكمة وإن لم تظهر مباشرة"]
    }
  },
  
  {
    id: 21,
    title: {
      english: "The Story of the People of the Well",
      bengali: "কূপের অধিবাসীদের কাহিনী",
      arabic: "قصة أصحاب البئر"
    },
    category: "mercy",
    summary: {
      english: "A story about people who were punished for harming a righteous man.",
      bengali: "একজন ধার্মিক ব্যক্তিকে কষ্ট দেওয়ার জন্য শাস্তিপ্রাপ্ত লোকদের গল্প।",
      arabic: "قصة قوم عوقبوا بسبب أذيتهم لرجل صالح."
    },
    details: {
      english: "A pious man who used to advise people was thrown into a well by those who disliked his reminders. The entire town was then punished with drought and suffering until they repented and released him.",
      bengali: "একজন ধার্মিক ব্যক্তি যিনি মানুষদের উপদেশ দিতেন, তাকে তাঁর নসিহত পছন্দ না করা লোকেরা একটি কূপে নিক্ষেপ করেছিল। সম্পূর্ণ শহরটিকে তখন অনাবৃষ্টি ও কষ্ট দ্বারা শাস্তি দেওয়া হয়েছিল যতক্ষণ না তারা তাওবা করল এবং তাকে মুক্ত করল।",
      arabic: "رجل صالح كان ينصح الناس فألقاه من كرهوا نصحه في بئر. فعوقبت القرية كلها بالجدب والبلاء حتى تابوا وأخرجوه."
    },
    verses: ["Quran 36:13-29"],
    lessons: {
      english: ["Harm to righteous people brings divine punishment", "Allah protects His sincere servants", "Repentance brings relief"],
      bengali: ["ধার্মিক লোকদের কষ্ট দেওয়া ঐশ্বরিক শাস্তি আনে", "আল্লাহ তাঁর খাঁটি বান্দাদের রক্ষা করেন", "তাওবা স্বস্তি আনে"],
      arabic: ["إيذاء الصالحين يجلب العقاب الإلهي", "الله يحمي عباده المخلصين", "التوبة تجلب الراحة"]
    }
  },
  

    {
      id: 22,
      title: {
        english: "The Story of Ashab al-Hijr",
        bengali: "আসহাবে হিজরের কাহিনী",
        arabic: "قصة أصحاب الحجر"
      },
      category: "punishment",
      summary: {
        english: "The story of the people of Hijr who rejected Prophet Salih and were destroyed.",
        bengali: "হিজরবাসীদের গল্প যারা নবী সালেহ (আ.) কে প্রত্যাখ্যান করেছিল এবং ধ্বংস হয়েছিল।",
        arabic: "قصة قوم الحجر الذين كذبوا النبي صالح فأهلكهم الله."
      },
      details: {
        english: "The people of Hijr were given the same signs as Thamud but persisted in disbelief. They carved homes in mountains but were destroyed by a mighty blast for rejecting Allah's messenger.",
        bengali: "হিজরবাসীদেরকে সামুদ জাতির মতো নিদর্শন দেওয়া হয়েছিল কিন্তু তারা অবিশ্বাসে অটল থাকল। তারা পাহাড় কেটে ঘর বানিয়েছিল কিন্তু আল্লাহর রাসূলকে প্রত্যাখ্যান করার জন্য একটি ভয়াবহ ধ্বংস দ্বারা ধ্বংস হয়েছিল।",
        arabic: "أعطي قوم الحجر نفس آيات ثمود ولكنهم أصروا على الكفر. فنحتوا الجبال بيوتًا فأهلكهم الله بصيحة عظيمة."
      },
      verses: ["Quran 15:80-84", "Quran 7:73-79"],
      lessons: {
        english: ["Rejecting prophets leads to destruction", "Allah's signs are clear", "No one can escape divine punishment"],
        bengali: ["নবীগণকে প্রত্যাখ্যান করলে ধ্বংস আসে", "আল্লাহর নিদর্শনসমূহ স্পষ্ট", "কেউ আল্লাহর শাস্তি থেকে রক্ষা পাবে না"],
        arabic: ["تكذيب الرسل يؤدي إلى الهلاك", "آيات الله واضحة", "لا مفر من عقاب الله"]
      }
    },
    {
      id: 23,
      title: {
        english: "The Story of Uzair",
        bengali: "উযাইর (আ.) এর কাহিনী",
        arabic: "قصة عزير"
      },
      category: "power",
      summary: {
        english: "The story of how Allah revived a dead town to show His power.",
        bengali: "আল্লাহ কীভাবে একটি মৃত শহরকে পুনরুজ্জীবিত করেছিলেন তাঁর ক্ষমতা দেখানোর জন্য।",
        arabic: "قصة كيف أحيا الله قرية ميتة ليري قدرته."
      },
      details: {
        english: "Uzair passed by a destroyed village and wondered how Allah would revive it. Allah caused him to die for 100 years then resurrected him, showing him the revival of his donkey and the village as signs of resurrection.",
        bengali: "উযাইর (আ.) একটি ধ্বংসপ্রাপ্ত গ্রামের পাশ দিয়ে যাচ্ছিলেন এবং ভাবছিলেন আল্লাহ কিভাবে এটি পুনরুজ্জীবিত করবেন। আল্লাহ তাকে ১০০ বছর মৃত রাখলেন তারপর পুনরুজ্জীবিত করলেন, তাকে তাঁর গাধা ও গ্রামের পুনরুজ্জীবন দেখালেন কিয়ামতের নিদর্শন হিসেবে।",
        arabic: "مر عزير على قرية خاوية فتساءل كيف يحييها الله. فأماته الله مائة عام ثم بعثه، وأراه إحياء حماره والقرية آية على البعث."
      },
      verses: ["Quran 2:259"],
      lessons: {
        english: ["Allah's power over life and death", "Resurrection is certain", "Divine wisdom surpasses human understanding"],
        bengali: ["জীবন ও মৃত্যুর উপর আল্লাহর ক্ষমতা", "পুনরুত্থান নিশ্চিত", "ঐশ্বরিক জ্ঞান মানুষের বোধগম্যতার ঊর্ধ্বে"],
        arabic: ["قدرة الله على الحياة والموت", "البعث حق", "حكمة الله تفهم الإنسان"]
      }
    },
    {
      id: 24,
      title: {
        english: "The Story of Talut and Jalut",
        bengali: "তালুত ও জালুতের কাহিনী",
        arabic: "قصة طالوت وجالوت"
      },
      category: "justice",
      summary: {
        english: "The story of how Allah gave victory to the small army of Talut over Jalut's forces.",
        bengali: "আল্লাহ কীভাবে তালুতের ছোট সেনাবাহিনীকে জালুতের বাহিনীর উপর বিজয় দিয়েছিলেন তার গল্প।",
        arabic: "قصة كيف نصر الله جيش طالوت القليل على جيش جالوت."
      },
      details: {
        english: "The Israelites demanded a king to lead them in battle. Allah appointed Talut (Saul) who tested his army at a river. Only a few passed the test. With Dawud (David) among them, they defeated Jalut (Goliath) by Allah's will.",
        bengali: "বনি ইসরাঈল যুদ্ধে নেতৃত্ব দেওয়ার জন্য একজন রাজা চেয়েছিল। আল্লাহ তালুত (সাউল) কে নিযুক্ত করলেন যিনি একটি নদীতে তাঁর সেনাবাহিনীকে পরীক্ষা করলেন। অল্প কয়েকজনই পরীক্ষায় উত্তীর্ণ হয়েছিল। দাউদ (আ.) তাদের মধ্যে থাকায় তারা আল্লাহর ইচ্ছায় জালুত (গোলিয়াত) কে পরাজিত করেছিল।",
        arabic: "طلب بنو إسرائيل ملكًا يقودهم في الحرب. فعين الله طالوت الذي اختبر جنوده عند النهر. فنجح القليل فقط. ومعهم داود، هزموا جالوت بإذن الله."
      },
      verses: ["Quran 2:246-251"],
      lessons: {
        english: ["Victory comes from Allah not numbers", "Patience in trials leads to success", "Allah chooses whom He wills for leadership"],
        bengali: ["বিজয় সংখ্যা নয় আল্লাহর পক্ষ থেকে আসে", "পরীক্ষায় ধৈর্য্য সাফল্য আনে", "আল্লাহ যাকে ইচ্ছা নেতৃত্ব দেন"],
        arabic: ["النصر من الله لا بالعدد", "الصبر في الاختبار يؤدي للنجاح", "الله يختار من يشاء للقيادة"]
      }
    },
    {
      id: 25,
      title: {
        english: "The Story of the Sabbath Breakers",
        bengali: "শনিবার লঙ্ঘনকারীদের কাহিনী",
        arabic: "قصة أصحاب السبت"
      },
      category: "punishment",
      summary: {
        english: "The story of people who violated the Sabbath and were transformed into monkeys.",
        bengali: "যারা শনিবারের বিধান লঙ্ঘন করেছিল এবং বানরে পরিণত হয়েছিল তাদের গল্প।",
        arabic: "قصة قوم انتهكوا حرمة السبت فمسخهم الله قردة."
      },
      details: {
        english: "Allah commanded the Jews to abstain from work on Sabbath. Some devised tricks to fish on Sabbath by placing nets the day before. Allah punished them by transforming them into despicable monkeys.",
        bengali: "আল্লাহ ইহুদীদেরকে শনিবারে কাজ থেকে বিরত থাকতে আদেশ করেছিলেন। কেউ কেউ আগের দিন জাল পেতে শনিবারে মাছ ধরার কৌশল করেছিল। আল্লাহ তাদেরকে নিকৃষ্ট বানরে রূপান্তরিত করে শাস্তি দিলেন।",
        arabic: "أمر الله اليهود بعدم العمل يوم السبت. فاحتال بعضهم بصيد السمك بوضع الشباك قبل السبت. فعاقبهم الله بالمسخ إلى قردة."
      },
      verses: ["Quran 2:65", "Quran 7:163-166"],
      lessons: {
        english: ["Allah's commands must be obeyed completely", "Trickery in religion is unacceptable", "Disobedience brings disgrace"],
        bengali: ["আল্লাহর আদেশ পুরোপুরি মানতে হবে", "ধর্মে কৌশল অগ্রহণযোগ্য", "অবাধ্যতা অপমান আনে"],
        arabic: ["أوامر الله يجب أن تطاع كاملة", "الحيل في الدين مرفوضة", "المعصية تجلب الذل"]
      }
    },
    
    
  
    {
      id: 29,
      title: {
        english: "The Story of the Three Towns",
        bengali: "তিনটি শহরের কাহিনী",
        arabic: "قصة القرى الثلاث"
      },
      category: "punishment",
      summary: {
        english: "The story of three towns that rejected their messengers and were destroyed.",
        bengali: "তিনটি শহরের গল্প যারা তাদের রাসূলগণকে প্রত্যাখ্যান করেছিল এবং ধ্বংস হয়েছিল।",
        arabic: "قصة ثلاث قرى كذبت رسلها فأهلكها الله."
      },
      details: {
        english: "Allah mentions three towns that rejected their messengers: the people of Noah, Aad, and Thamud. Each was given clear signs but persisted in disbelief, so Allah destroyed them completely as a lesson for later generations.",
        bengali: "আল্লাহ তিনটি শহরের কথা উল্লেখ করেছেন যারা তাদের রাসূলগণকে প্রত্যাখ্যান করেছিল: নূহ (আ.) এর সম্প্রদায়, আদ ও সামুদ। প্রত্যেককে স্পষ্ট নিদর্শন দেওয়া হয়েছিল কিন্তু তারা অবিশ্বাসে অটল থাকল, তাই আল্লাহ তাদের সম্পূর্ণরূপে ধ্বংস করলেন পরবর্তী প্রজন্মের জন্য শিক্ষা হিসেবে।",
        arabic: "ذكر الله ثلاث قرى كذبت رسلها: قوم نوح وعاد وثمود. أعطوا آيات بينة فأصروا على الكفر فأهلكهم الله تمامًا عبرة للأجيال."
      },
      verses: ["Quran 9:70"],
      lessons: {
        english: ["Rejecting prophets brings destruction", "Allah's warnings are real", "History contains lessons for believers"],
        bengali: ["নবীগণকে প্রত্যাখ্যান করলে ধ্বংস আসে", "আল্লাহর সতর্কবাণী বাস্তব", "ইতিহাসে মুমিনদের জন্য শিক্ষা রয়েছে"],
        arabic: ["تكذيب الرسل يجلب الهلاك", "إنذارات الله حقيقية", "التاريخ يحوي عبرًا للمؤمنين"]
      }
    },

    {
      id: 31,
      title: {
        english: "The Story of the People of Madyan",
        bengali: "মাদিয়ানবাসীদের কাহিনী",
        arabic: "قصة أهل مدين"
      },
      category: "punishment",
      summary: {
        english: "The story of Prophet Shu'aib and the people who cheated in measurements.",
        bengali: "নবী শুয়াইব (আ.) এবং যারা পরিমাপে কারচুপি করত তাদের গল্প।",
        arabic: "قصة النبي شعيب والقوم الذين كانوا يبخسون المكيال."
      },
      details: {
        english: "The people of Madyan were dishonest in business, giving less measure and cheating others. Shu'aib warned them to be fair and worship Allah alone, but they mocked him. Allah destroyed them with an earthquake and fiery blast.",
        bengali: "মাদিয়ানবাসীরা ব্যবসায় অসাধু ছিল, কম পরিমাপ দিত এবং অন্যদের ঠকাত। শুয়াইব (আ.) তাদেরকে সতর্ক করেছিলেন ন্যায়বিচার করতে এবং এক আল্লাহর ইবাদত করতে, কিন্তু তারা তাঁকে উপহাস করেছিল। আল্লাহ তাদেরকে ভূমিকম্প ও অগ্নিকাণ্ড দ্বারা ধ্বংস করেছিলেন।",
        arabic: "كان أهل مدين يبخسون المكيال والميزان ويخدعون الناس. حذرهم شعيب أن يعدلوا ويعبدوا الله وحده فسخروا منه. فأهلكهم الله برجفة وصيحة من السماء."
      },
      verses: ["Quran 7:85-93", "Quran 11:84-95", "Quran 29:36-37"],
      lessons: {
        english: ["Honesty in business is obligatory", "Cheating brings divine punishment", "Prophets warn before destruction"],
        bengali: ["ব্যবসায় সততা বাধ্যতামূলক", "ঠকানো ঐশ্বরিক শাস্তি আনে", "ধ্বংসের আগে নবীগণ সতর্ক করেন"],
        arabic: ["الصدق في التجارة واجب", "الغش يجلب العقاب الإلهي", "الأنذراء ينذرون قبل الهلاك"]
      }
    }
];
     


  const filteredStories = quranStories.filter(story => 
    story.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
    translations[language].categories[story.category].toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.summary[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(quranStories.map(story => story.category))];

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>{translations[language].appTitle}</h1>
          <p>{translations[language].appSubtitle}</p>
        </div>
        <div className="mosque-icon">🕌</div>
        <div   className="category-buttons">
          <button  onClick={() => setLanguage('english')}>English</button>
          <button onClick={() => setLanguage('bengali')}>বাংলা</button>
          <button onClick={() => setLanguage('arabic')}>العربية</button>
        </div>
      </header>

      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder={translations[language].searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">{translations[language].searchButton}</button>
        </div>

        <div className="category-filter">
          <h3>{translations[language].filterByCategory}</h3>
          <div className="category-buttons">
            <button onClick={() => setSearchTerm('')}>{translations[language].allCategories}</button>
            {categories.map(category => (
              <button key={category} onClick={() => setSearchTerm(translations[language].categories[category])}>
                {translations[language].categories[category]}
              </button>
            ))}
          </div>
        </div>

        <div className="stories-grid">
          {filteredStories.map(story => (
            <div 
              key={story.id} 
              className={`story-card ${activeStory === story.id ? 'active' : ''}`}
              onClick={() => setActiveStory(activeStory === story.id ? null : story.id)}
            >
              <h3>{story.title[language]}</h3>
              <p className="category-tag">{translations[language].categories[story.category]}</p>
              <p>{story.summary[language]}</p>
              
              {activeStory === story.id && (
                <div className="story-details">
                  <h4>{translations[language].detailsHeading}</h4>
                  <p>{story.details[language]}</p>
                  
                  <h4>{translations[language].quranReferences}</h4>
                  <ul>
                    {story.verses.map((verse, index) => (
                      <li key={index}>{verse}</li>
                    ))}
                  </ul>
                  
                  <h4>{translations[language].lessonsHeading}</h4>
                  <ul>
                    {story.lessons[language].map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>{translations[language].footerRights}</p>
        <p>{translations[language].footerBlessings}</p>
      </footer>
    </div>
  );
}

export default App;