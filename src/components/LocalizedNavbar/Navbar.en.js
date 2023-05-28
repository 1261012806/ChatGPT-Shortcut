const enNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      href: 'hhttps://chat.myxinwen.top/',
      label: 'ChatGPT Extreme version',
      target: '_blank',
      position: 'left',
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://chat1.myxinwen.top",
      position: "right",
      className: "ChatGPT Audio version",
    },
    {
      href: "https://ai.myxinwen.top",
      position: "right",
      className: "ChatGPT Student version",
    },
  ],
};

module.exports = enNavbar;
