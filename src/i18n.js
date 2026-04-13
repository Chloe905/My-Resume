import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    hero: {
      title: "Hi, I'm Chloe 👋",
      subtitle: 'Frontend Engineer | Vue Specialist',
      desc: 'I build user-centered, visually refined web experiences.',
      projects: 'View Projects',
      contact: 'Contact Me'
    },
    nav: {
      projects: 'Projects',
      contact: 'Contact'
    },
    footer: {
      text: '© 2026 Chloe',
      contact: 'Contact Me'
    }
  },
  zh: {
    hero: {
      title: '嗨，我是 Chloe 👋',
      subtitle: '前端工程師 | Vue 專精',
      desc: '專注打造以使用者為核心的高品質網頁體驗',
      projects: '查看作品',
      contact: '聯絡我'
    },
    nav: {
      projects: '作品',
      contact: '聯絡'
    },
    footer: {
      text: '© 2026 Chloe',
      contact: '聯絡我'
    }
  },
  ja: {
    nav: {
      projects: 'プロジェクト',
      contact: 'お問い合わせ'
    },
    hero: {
      title: 'はじめまして、Chloeと申します 👋',
      subtitle: 'フロントエンドエンジニア | Vue専門',
      desc: 'ユーザー中心の高品質なWeb体験を構築します。',
      projects: 'プロジェクトを見る',
      contact: 'お問い合わせ'
    },
    footer: {
      text: '© 2026 Chloe',
      contact: 'お問い合わせ'
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
