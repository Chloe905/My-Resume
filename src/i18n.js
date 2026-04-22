import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    hero: {
      title: 'Hi, I am Chloe ',
      subtitle: 'Full-Stack Engineer  · Vue Specialist  · node.js',
      desc: 'full-stack development experience. Build user-centered, visually refined web experiences.',
      projects: 'View Projects',
      contact: 'Contact Me',
      experience: '3 Years of Development Experience'
    },
    nav: {
      projects: 'Projects',
      contact: 'Contact'
    },
    footer: {
      text: '© 2026 Chloe'
    },
    projects: {
      title: 'Projects',
      travel: {
        title: 'Travel Translation Assistant',
        desc: 'A multilingual web app for travel spot search, weather info, and real-time translation, built with a decoupled frontend-backend architecture and deployed on Vercel.',
        feature1: 'Google Map integration for spot search and categorized favorites',
        feature2: 'Real-time weather info with multi-location support',
        feature3: 'DeepL AI-powered real-time translation + voice input'
      },
      projects: {
        deepl: {
          title: 'DeepL Translation Server',
          desc: 'A Node.js + Express translation proxy server that securely forwards DeepL API requests, solving browser CORS restrictions.',
          feature1: 'Backend proxy to resolve CORS issues',
          feature2: 'Real-time translation via DeepL API',
          feature3: 'Secure API key management with .env'
        }
      }
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          role: 'Full-Stack Engineer',
          company: 'Bigordr Co., Ltd.',
          period: '2023/8 – 2024/4',
          duration: '9 months',
          location: 'Beitun District, Taichung',
          points: [
            'Maintained and developed e-commerce websites, official front/back-end systems, and ERP systems to ensure stable operation.',
            'Designed and implemented new features such as shopping cart animations and marquee messages to enhance user interaction.',
            'Added back-end layout features and front-end product image scaling effects to improve UI consistency.',
            'Integrated shopping page sections to reduce page transitions and improve operational efficiency.',
            'Communicated with team members in English to ensure smooth cross-cultural collaboration.'
          ],
          tags: ['JavaScript', 'Ember.js', 'Ramda.js', 'Node.js', 'Git', 'CSS']
        },
        {
          role: 'Frontend Engineer',
          company: 'S JOY APPLIED TECHNOLOGY CO., LTD.',
          period: '2024/7 – 2025/8',
          duration: '1 year 2 months',
          location: 'Beitun District, Taichung',
          points: [
            'Developed frontend features using Vue.js, Pinia, Tailwind CSS, and Vite to build efficient and stable project architecture.',
            'Designed and implemented responsive, intuitive user interfaces that significantly improved UX and interactivity.',
            'Refactored legacy systems into Vue.js architecture with component-based design to reduce code duplication.',
            'Built backend testing tools (e.g. WebSocket) independently, improving debugging efficiency by over 40%.',
            'Automated repetitive workflows using n8n to replace daily manual checks and reduce human error.'
          ],
          tags: ['Vue.js', 'Pinia', 'Tailwind CSS', 'Vite', 'JavaScript', 'CSS']
        }
      ]
    },
    skill: {
      title: 'Skills',
      core: 'Core',
      familiar: 'Familiar',
      others: 'Others',
      language: 'Language',
      en: 'English',
      zh: 'Chinese',
      ja: 'Japanese'
    },
    certifications: {
      title: 'Certifications',
      list: [
        {
          name: 'AWSome DAY Online Conference (Attendance Certification)',
          issuer: 'AWS',
          date: '2023.02.23',
          image: '/AWS.avif'
        },
        {
          name: 'Full Stack Web Development Program (Specialize in Back-end)',
          issuer: 'Alpha Camp',
          date: '2022.11 – 2023.04',
          image: '/FullStack.avif'
        },
        {
          name: 'Foundation course of Online Web Development Track',
          issuer: 'Alpha Camp',
          date: '2022.06 – 2022.11',
          image: '/WebDevelopmentTrack.avif'
        },
        {
          name: 'Gemini Certified Educator',
          issuer: 'Gemini',
          date: '2025.09.15',
          image: '/Gemini.png'
        }
      ]
    },
    education: {
      title: 'Education',
      tmu: {
        school: 'Taipei Medical University',
        degree: 'Respiratory Therapy'
      },
      alphacamp: {
        school: 'Alpha Camp',
        degree: 'Full Stack Web Development Program (Specialize in Back-end)'
      }
    },
    about: {
      title: 'About Me',
      abilities: [
        {
          icon: 'fa-solid fa-code',
          title: 'Development & Maintenance',
          desc: 'Frontend development and backend API integration using JavaScript / TypeScript, Vue.js, and React.js, ensuring stability and maintainability.'
        },
        {
          icon: 'fa-solid fa-palette',
          title: 'Web Design & UI',
          desc: 'Designing responsive, intuitive interfaces with Tailwind CSS, Bootstrap, and other styling frameworks to enhance visual appeal and usability.'
        },
        {
          icon: 'fa-solid fa-users',
          title: 'UX Optimization',
          desc: 'User-centered approach — iterating features and flows based on feedback to improve interactivity and efficiency.'
        },
        {
          icon: 'fa-solid fa-rotate',
          title: 'Refactoring & Legacy Modernization',
          desc: 'Refactoring vanilla JavaScript into Vue.js / React component-based architecture to reduce redundancy and improve maintainability.'
        },
        {
          icon: 'fa-solid fa-plug',
          title: 'Full-Stack Integration & Testing',
          desc: 'Built custom WebSocket testing tools to simulate frontend connections and improve debugging efficiency; integrated third-party APIs.'
        },
        {
          icon: 'fa-brands fa-git-alt',
          title: 'Code Quality & Collaboration',
          desc: 'Standardized code style with Prettier / ESLint / CommonJS; ensured code quality through Git PR review workflows.'
        }
      ]
    }
  },
  zh: {
    hero: {
      title: '嗨，我是 Chloe ',
      subtitle: '全端工程師  · Vue  · node.js',
      desc: '全端開發經驗，專注打造以使用者為核心的高品質網頁體驗',
      projects: '查看作品',
      contact: '聯絡我',
      experience: '3 年開發經驗'
    },
    nav: {
      projects: '作品',
      contact: '聯絡'
    },
    footer: {
      text: '© 2026 Chloe'
    },
    projects: {
      title: '作品',
      travel: {
        title: '旅遊翻譯多功能小幫手',
        desc: '集旅遊景點查詢、天氣與即時翻譯的 Web 多語系應用，前後端分離架構並部署於 Vercel。',
        feature1: 'Google Map 地圖景點查詢與收藏分類',
        feature2: '即時天氣與多地點查詢',
        feature3: 'DeepL AI 即時翻譯＋語音輸入'
      },
      deepl: {
        title: 'DeepL Translation Server',
        desc: '使用 Node.js + Express 建立的翻譯代理伺服器，安全轉發 DeepL API 請求，解決前端 CORS 限制問題。',
        feature1: '後端代理解決 CORS 問題',
        feature2: 'DeepL API 即時翻譯',
        feature3: '.env 保護私密 API 金鑰'
      }
    },
    experience: {
      title: '工作經驗',
      jobs: [
        {
          role: '全端工程師',
          company: '大筆資訊股份有限公司',
          period: '2023/8 – 2024/4',
          duration: '9 個月',
          location: '台中市北屯區',
          points: [
            '維護與開發電商網站、官方網站前後台及 ERP 系統，確保系統穩定運作。',
            '設計並實作新功能，如購物車特效、前台滾動訊息，提升使用者互動與體驗。',
            '新增後台排版功能及前台商品圖片比例與縮放效果，改善介面一致性與視覺呈現。',
            '整合購物頁面區塊，減少頁面跳轉，提升操作效率。',
            '與團隊成員使用英文溝通，確保跨文化協作順暢。'
          ],
          tags: ['JavaScript', 'Ember.js', 'Ramda.js', 'Node.js', 'Git', 'CSS']
        },
        {
          role: '前端工程師',
          company: '微樂應用科技有限公司',
          period: '2024/7 – 2025/8',
          duration: '1 年 2 個月',
          location: '台中市北屯區',
          points: [
            '使用 Vue.js、Pinia、Tailwind CSS、Vite 開發前端功能，建立高效穩定的專案架構。',
            '設計並實作響應式且直覺易用的使用者介面，顯著提升使用體驗與互動性。',
            '網站舊系統翻新：將舊專案改寫為 Vue.js 架構，透過元件化設計有效減少重複代碼。',
            '自行開發後端測試工具（如 WebSocket），提升除錯效率 40% 以上並縮短開發時程。',
            '使用 n8n 等自動化工具取代每日人工檢查，有效提升效率並降低人為錯誤。'
          ],
          tags: ['Vue.js', 'Pinia', 'Tailwind CSS', 'Vite', 'JavaScript', 'CSS']
        }
      ]
    },
    skill: {
      title: '技能',
      core: '核心',
      familiar: '熟悉',
      others: '其他',
      language: '語言',
      en: '英文',
      zh: '中文',
      ja: '日文'
    },
    certifications: {
      title: '證書',
      list: [
        {
          name: 'AWSome DAY Online Conference (Attendance Certification)',
          issuer: 'AWS',
          date: '2023.02.23',
          image: '/AWS.avif'
        },
        {
          name: 'Full Stack Web Development Program (Specialize in Back-end)',
          issuer: 'Alpha Camp',
          date: '2022.11 – 2023.04',
          image: '/FullStack.avif'
        },
        {
          name: 'Foundation course of Online Web Development Track',
          issuer: 'Alpha Camp',
          date: '2022.06 – 2022.11',
          image: '/WebDevelopmentTrack.avif'
        },
        {
          name: 'Gemini Certified Educator',
          issuer: 'Gemini',
          date: '2025.09.15',
          image: '/Gemini.png'
        }
      ]
    },
    education: {
      title: '學歷',
      tmu: {
        school: '台北醫學大學',
        degree: '呼吸治療學系'
      },
      alphacamp: {
        school: 'Alpha Camp',
        degree: '全端網頁開發課程（主修後端）'
      }
    },
    about: {
      title: '關於我',
      abilities: [
        {
          icon: 'fa-solid fa-code',
          title: '程式語言開發與維護',
          desc: '使用 JavaScript / TypeScript、Vue.js、React.js 進行前端開發與後端 API 串接，確保功能穩定與可維護性。'
        },
        {
          icon: 'fa-solid fa-palette',
          title: '網頁設計與 UI',
          desc: '設計響應式、美觀且直覺易用的介面，整合 Tailwind CSS、Bootstrap 等前端樣式框架，提升視覺美感與操作便利性。'
        },
        {
          icon: 'fa-solid fa-users',
          title: '優化使用者體驗',
          desc: '以使用者為核心，透過迭代與回饋調整功能與流程，改善互動性並提升使用效率。'
        },
        {
          icon: 'fa-solid fa-rotate',
          title: '舊系統翻新與代碼重構',
          desc: '將原生 JavaScript 重構為 Vue.js / React 組件化設計，減少冗餘程式碼，提升維護性與開發效率。'
        },
        {
          icon: 'fa-solid fa-plug',
          title: '前後端整合與測試',
          desc: '自行開發 WebSocket 測試工具，模擬前端連線，提升除錯效率；串接 API 等外部服務。'
        },
        {
          icon: 'fa-brands fa-git-alt',
          title: '程式碼品質與團隊協作',
          desc: '使用 Prettier / ESLint / CommonJS 統一程式碼風格，透過 Git PR 流程確保代碼審核與協作順暢。'
        }
      ]
    }
  },
  ja: {
    nav: {
      projects: 'プロジェクト',
      contact: 'お問い合わせ'
    },
    hero: {
      title: 'はじめまして、Chloeと申します ',
      subtitle: 'Full-Stack Engineer  · Vue専門  · node.js',
      desc: 'ユーザー中心の高品質なWeb体験を構築します。',
      projects: 'プロジェクトを見る',
      contact: 'お問い合わせ',
      experience: '3 年の開発経験'
    },
    footer: {
      text: '© 2026 Chloe'
    },
    projects: {
      title: 'プロジェクト',
      travel: {
        title: '旅行翻訳アシスタント',
        desc: '旅行スポット検索、天気情報、リアルタイム翻訳の多言語Webアプリで、フロントエンドとバックエンドが分離されたアーキテクチャで構築され、Vercelにデプロイされています。',
        feature1: 'Google Map統合によるスポット検索とカテゴリ別のお気に入り',
        feature2: '複数の場所をサポートするリアルタイムの天気情報',
        feature3: 'DeepL AIによるリアルタイム翻訳＋音声入力'
      },
      projects: {
        deepl: {
          title: 'DeepL Translation Server',
          desc: 'Node.js + Express で構築した翻訳プロキシサーバー。DeepL API リクエストを安全に転送し、フロントエンドの CORS 問題を解決。',
          feature1: 'バックエンドプロキシで CORS を解決',
          feature2: 'DeepL API によるリアルタイム翻訳',
          feature3: '.env による API キーの安全な管理'
        }
      }
    },
    experience: {
      title: '職務経歴',
      jobs: [
        {
          role: 'フルスタックエンジニア',
          company: 'Bigordr Co., Ltd.',
          period: '2023/8 – 2024/4',
          duration: '9ヶ月',
          location: '台中市北屯区',
          points: [
            'ECサイト・公式サイトの前後台およびERPシステムの保守・開発を行い、安定稼働を確保。',
            'ショッピングカートアニメーションやマーキーメッセージなどの新機能を設計・実装し、ユーザー体験を向上。',
            'バックエンドのレイアウト機能および商品画像のスケーリング効果を追加し、UI の一貫性を改善。',
            'ショッピングページのセクションを統合し、ページ遷移を削減して操作効率を向上。',
            'チームメンバーと英語でコミュニケーションを取り、円滑なクロスカルチャー協業を実現。'
          ],
          tags: ['JavaScript', 'Ember.js', 'Ramda.js', 'Node.js', 'Git', 'CSS']
        },
        {
          role: 'フロントエンドエンジニア',
          company: 'S JOY APPLIED TECHNOLOGY CO., LTD.',
          period: '2024/7 – 2025/8',
          duration: '1年2ヶ月',
          location: '台中市北屯区',
          points: [
            'Vue.js・Pinia・Tailwind CSS・Vite を使用してフロントエンド機能を開発し、効率的で安定したプロジェクト基盤を構築。',
            'レスポンシブで直感的なUIを設計・実装し、ユーザー体験とインタラクティブ性を大幅に向上。',
            'レガシーシステムを Vue.js アーキテクチャにリファクタリングし、コンポーネント設計で重複コードを削減。',
            'WebSocket などのバックエンドテストツールを独自開発し、デバッグ効率を40%以上向上。',
            'n8n などの自動化ツールを活用して毎日の手動作業を自動化し、人的ミスを低減。'
          ],
          tags: ['Vue.js', 'Pinia', 'Tailwind CSS', 'Vite', 'JavaScript', 'CSS']
        }
      ]
    },
    skill: {
      title: 'スキル',
      core: 'コア',
      familiar: '慣れ親しんでいる',
      others: 'その他',
      language: '言語',
      en: '英語',
      zh: '中国語',
      ja: '日本語'
    },
    certifications: {
      title: '資格',
      list: [
        {
          name: 'AWSome DAY Online Conference (Attendance Certification)',
          issuer: 'AWS',
          date: '2023.02.23',
          image: '/AWS.avif'
        },
        {
          name: 'Full Stack Web Development Program (Specialize in Back-end)',
          issuer: 'Alpha Camp',
          date: '2022.11 – 2023.04',
          image: '/FullStack.avif'
        },
        {
          name: 'Foundation course of Online Web Development Track',
          issuer: 'Alpha Camp',
          date: '2022.06 – 2022.11',
          image: '/WebDevelopmentTrack.avif'
        },
        {
          name: 'Gemini Certified Educator',
          issuer: 'Gemini',
          date: '2025.09.15',
          image: '/Gemini.png'
        }
      ]
    },
    education: {
      title: '学歴',
      tmu: {
        school: '台北医学大学',
        degree: '呼吸療法学科'
      },
      alphacamp: {
        school: 'Alpha Camp',
        degree: 'フルスタックWeb開発プログラム（バックエンド専攻）'
      }
    },
    about: {
      title: '自己紹介',
      abilities: [
        {
          icon: 'fa-solid fa-code',
          title: '開発・保守',
          desc: 'JavaScript / TypeScript・Vue.js・React.js を使用したフロントエンド開発とバックエンド API 連携を担当し、安定性と保守性を確保。'
        },
        {
          icon: 'fa-solid fa-palette',
          title: 'Web デザイン・UI',
          desc: 'Tailwind CSS・Bootstrap などのスタイルフレームワークを活用し、レスポンシブで直感的なインターフェースを設計。'
        },
        {
          icon: 'fa-solid fa-users',
          title: 'UX 最適化',
          desc: 'ユーザー中心の設計思想のもと、フィードバックをもとに機能・フローを継続的に改善し、使いやすさを向上。'
        },
        {
          icon: 'fa-solid fa-rotate',
          title: 'リファクタリング・レガシー刷新',
          desc: 'バニラ JavaScript を Vue.js / React のコンポーネント設計へリファクタリングし、冗長なコードを削減して保守性を向上。'
        },
        {
          icon: 'fa-solid fa-plug',
          title: 'フルスタック統合・テスト',
          desc: 'WebSocket テストツールを独自開発してフロントエンド接続をシミュレーション、デバッグ効率を改善。外部 API も連携。'
        },
        {
          icon: 'fa-brands fa-git-alt',
          title: 'コード品質・チーム協業',
          desc: 'Prettier / ESLint / CommonJS でコードスタイルを統一し、Git PR レビューフローでコード品質と協業を確保。'
        }
      ]
    }
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages
});

export default i18n;
