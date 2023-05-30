const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT 指令大全",
  logo: {
    alt: "ChatGPT 指令大全",
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
    {
      to: "https://www.myxinwen.top/2023/05/30/chatgpt-%e6%8c%87%e4%bb%a4%e5%a4%a7%e5%85%a8%e4%bd%bf%e7%94%a8%e8%af%b4%e6%98%8e/",
      label: "ChatGPT指令大全使用教程",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
  ],
};

module.exports = zhNavbar;
