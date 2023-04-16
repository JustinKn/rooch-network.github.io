import { DocsThemeConfig } from "nextra-theme-docs";
import { Footer } from "./components/layout/footer";
import Image from "next/image";

const theme: DocsThemeConfig = {
  logo: (
    <Image
      src="/logo/rooch_black_combine.svg"
      alt="Rooch Architecture"
      width={100}
      height={70}
    />
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Rooch",
    };
  },
  project: {
    link: "https://github.com/rooch-network/rooch-network.github.io",
  },
  chat: {
    link: "https://discord.gg/rooch",
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "简体中文" },
  ],
  footer: {
    component: Footer,
  },
};

export default theme;
