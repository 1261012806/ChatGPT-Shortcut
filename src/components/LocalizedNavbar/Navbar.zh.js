const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT 指令大全",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://chat.myxinwen.top/",
      label: "ChatGPT 国人极速版",
      position: "left",
    },
    {
      to: "https://chat1.myxinwen.top/",
      label: "ChatGPT 国人语音版",
      position: "left",
    },
    {
      to: "https://ai.myxinwen.top/",
      label: "ChatGPT 学生辅导版",
      position: "left",
    },
    {
      type: 'dropdown',
      label: 'ChatGPT工具',
      position: 'left',
      items: [
        {
          label: "ChatGPT独享账号",
          href: "https://fk.myxinwen.top/",
        },
        {
          label: 'OpenAI Key 余额查询',
          href: 'https://www.myxinwen.top/openai/',
        }
      ],
    },
    {
      to: "https://fk.myxinwen.top/",
      label: "ChatGPT独享账号",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
  ],
};

module.exports = zhNavbar;
