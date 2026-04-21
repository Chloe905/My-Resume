import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    hero: {
      title: 'Hi, I am Chloe ',
      subtitle: 'Full-Stack Engineer  · Vue Specialist  · node.js',
      desc: 'I build user-centered, visually refined web experiences.',
      projects: 'View Projects',
      contact: 'Contact Me'
    },
    nav: {
      projects: 'Projects',
      contact: 'Contact'
    },
    footer: {
      text: '© 2026 Chloe'
    },
    projects: {
      travel: {
        title: 'Travel Translation Assistant',
        desc: 'A multilingual web app for travel spot search, weather info, and real-time translation, built with a decoupled frontend-backend architecture and deployed on Vercel.',
        feature1: 'Google Map integration for spot search and categorized favorites',
        feature2: 'Real-time weather info with multi-location support',
        feature3: 'DeepL AI-powered real-time translation + voice input'
      }
    }
  },
  zh: {
    hero: {
      title: '嗨，我是 Chloe ',
      subtitle: '全端工程師  · Vue  · node.js',
      desc: '專注打造以使用者為核心的高品質網頁體驗',
      projects: '查看作品',
      contact: '聯絡我'
    },
    nav: {
      projects: '作品',
      contact: '聯絡'
    },
    footer: {
      text: '© 2026 Chloe'
    },
    projects: {
      travel: {
        title: '旅遊翻譯多功能小幫手',
        desc: '集旅遊景點查詢、天氣與即時翻譯的 Web 多語系應用，前後端分離架構並部署於 Vercel。',
        feature1: 'Google Map 地圖景點查詢與收藏分類',
        feature2: '即時天氣與多地點查詢',
        feature3: 'DeepL AI 即時翻譯＋語音輸入'
      }
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
      contact: 'お問い合わせ'
    },
    footer: {
      text: '© 2026 Chloe'
    },
    projects: {
      travel: {
        title: '旅行翻訳アシスタント',
        desc: '旅行スポット検索、天気情報、リアルタイム翻訳の多言語Webアプリで、フロントエンドとバックエンドが分離されたアーキテクチャで構築され、Vercelにデプロイされています。',
        feature1: 'Google Map統合によるスポット検索とカテゴリ別のお気に入り',
        feature2: '複数の場所をサポートするリアルタイムの天気情報',
        feature3: 'DeepL AIによるリアルタイム翻訳＋音声入力'
      }
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
