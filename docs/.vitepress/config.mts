import { defineConfig } from 'vitepress';

// Published on GitHub Pages at https://amasmoudi90.github.io/ruwa-react-docs/
export default defineConfig({
  base: '/ruwa-react-docs/',
  title: 'Ruwa',
  description: 'توثيق ثيم رُوى لمتاجر سلة',
  cleanUrls: true,
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#0c1a6c' }]],
  locales: {
    root: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      title: 'ثيم رُوى',
      description: 'توثيق ثيم رُوى (Ruwa React) لمتاجر سلة',
      themeConfig: {
        nav: [
          { text: 'البداية', link: '/guide/getting-started' },
          { text: 'الإعدادات', link: '/guide/settings' },
          { text: 'عناصر الرئيسية', link: '/guide/home-blocks' },
          { text: 'الدعم', link: '/support' },
        ],
        sidebar: [
          {
            text: 'الدليل',
            items: [
              { text: 'البداية السريعة', link: '/guide/getting-started' },
              { text: 'إعدادات الثيم', link: '/guide/settings' },
              { text: 'عناصر الصفحة الرئيسية', link: '/guide/home-blocks' },
              { text: 'اللغتان والوضع الداكن', link: '/guide/languages' },
              { text: 'الأسئلة الشائعة', link: '/guide/faq' },
            ],
          },
          {
            text: 'المزيد',
            items: [
              { text: 'سجل التحديثات', link: '/changelog' },
              { text: 'الدعم والتواصل', link: '/support' },
            ],
          },
        ],
        outline: { label: 'في هذه الصفحة', level: [2, 3] },
        docFooter: { prev: 'السابق', next: 'التالي' },
        lastUpdated: { text: 'آخر تحديث' },
        returnToTopLabel: 'العودة للأعلى',
        sidebarMenuLabel: 'القائمة',
        darkModeSwitchLabel: 'المظهر',
        lightModeSwitchTitle: 'الوضع الفاتح',
        darkModeSwitchTitle: 'الوضع الداكن',
        langMenuLabel: 'اللغة',
        footer: { message: 'ثيم رُوى لمتاجر سلة', copyright: '© Ruwa' },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: 'ltr',
      link: '/en/',
      title: 'Ruwa Theme',
      description: 'Documentation of the Ruwa React theme for Salla stores',
      themeConfig: {
        nav: [
          { text: 'Getting started', link: '/en/guide/getting-started' },
          { text: 'Settings', link: '/en/guide/settings' },
          { text: 'Home blocks', link: '/en/guide/home-blocks' },
          { text: 'Support', link: '/en/support' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Getting started', link: '/en/guide/getting-started' },
              { text: 'Theme settings', link: '/en/guide/settings' },
              { text: 'Home page blocks', link: '/en/guide/home-blocks' },
              { text: 'Languages and dark mode', link: '/en/guide/languages' },
              { text: 'FAQ', link: '/en/guide/faq' },
            ],
          },
          {
            text: 'More',
            items: [
              { text: 'Changelog', link: '/en/changelog' },
              { text: 'Support', link: '/en/support' },
            ],
          },
        ],
        outline: { label: 'On this page', level: [2, 3] },
        footer: { message: 'Ruwa theme for Salla stores', copyright: '© Ruwa' },
      },
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'بحث', buttonAriaLabel: 'بحث' },
              modal: {
                noResultsText: 'لا توجد نتائج',
                resetButtonTitle: 'مسح',
                footer: { selectText: 'اختيار', navigateText: 'تنقل', closeText: 'إغلاق' },
              },
            },
          },
        },
      },
    },
  },
});
