import { DM_Serif_Display } from "@next/font/google";
import LocalFont from "@next/font/local";

const dm_serif_display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const helvetica_neue = LocalFont({
  src: [
    {
      path: "./HelveticaNeueMedium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./HelveticaNeueLight.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

const styles = {
  title: `${dm_serif_display.className} text-[96px] text-white`,
  navLink: `${dm_serif_display.className} text-[64px] text-white uppercase max-w-fit`,
  paragraph: `${helvetica_neue.className} text-[20px] font-medium text-white`,
  subTitle: `${helvetica_neue.className} text-[24px] text-white`,
};

export default styles;
