"use client";

import {
  Col,
  Grid,
  SimpleGrid,
  Tabs,
  Text,
  ThemeIcon,
  createStyles,
  rem
} from "@mantine/core";
import {
  IconFileCode,
  IconPackage,
  IconReceiptOff
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import img from "../../../public/assets/cloud-icon.png";
import hotel_icon from "../../../public/assets/hotels-icon.png"
import  cloud_ico from "../../../public/assets/cloud-icon.png"
import  loyalty_program_icon from "../../../public/assets/loyalty-program-icon.png"
import  pricecomparison_icon from "../../../public/assets/pricecomparison-icon.png"
import  support_icon from "../../../public/assets/support-icon.png"
import  user_level_icon from "../../../public/assets/user-level-icon.png"
import  richcontent_icon from "../../../public/assets/richcontent-icon.png"
import  rich_feature_icon from "../../../public/assets/rich-features-icon.png"



const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

type Feature = {
  img: StaticImageData;
  title: string;
  description: string;
};
const features:Feature[] = [
  
  {
    img: hotel_icon,
    title: "Huge choice of inventory",
    description:
      "Get access to the best hotel, flight and travel deals.",
  },
  {
    img: cloud_ico,
    title: "Exclusive Hotels Offers",
    description:
      "Take advantage of exclusive discounts and offers from top brands.",
  },
  {
    img: loyalty_program_icon,
    title: "Great value Loyalty Program",
    description:
      " Earn points and use them to pay for bookings..",
  },
  
  {
    img: pricecomparison_icon,
    title: " Exclusive precheck",
    description:
      "You will get manual prechecks of all your bookings. We will manually pre-check all bookings and booking details with the hotel directly.",
  },
  

  
 
];

const featuresTow:Feature[] = [
  {
    img: support_icon,
    title: "Reliable Customer Support",
    description:
      "All your issues will be resolved by our 24/7 multi-lingual support service",
  },
  
  {
    img: user_level_icon,
    title: "For different user levels",
    description:
      "You can assign user roles and limit access for safety and transparency.",
  },
  {
    img: richcontent_icon,
    title: "High-quality Back-office",
    description:
      "All information about orders, invoices, vouchers, and reports is available to you in real-time",
  },

  {
    img: rich_feature_icon,
    title: "Rich functionality",
    description:
      "In a single system with a user-friendly interface, you can quickly book hotels and other travel-related services at great prices.",
  },

];

export default function FeaturesSection() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title} className="p-3 m-2 shadow-sm">
      <div className="flex justify-between gap-2">
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <ThemeIcon
          size={44}
          radius="md"
          // variant="gradient"
          // gradient={{ deg: 133, from: "blue", to: "cyan" }}
          className="bg-transparent"
        >
          {/* <feature.icon size={rem(26)} stroke={1.5} /> */}
          <Image src={feature?.img} alt="clud" />
        </ThemeIcon>
      </div>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  const items2 = featuresTow.map((feature) => (
    <div key={feature?.title} className="p-3 m-2 shadow-sm">
      <div className="flex justify-between gap-2">
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <ThemeIcon
          size={44}
          radius="md"
          // variant="gradient"
          // gradient={{ deg: 133, from: "blue", to: "cyan" }}
          className="bg-transparent"
        >
          {/* <feature.icon size={rem(26)} stroke={1.5} /> */}
          <Image src={feature.img} alt="clud" />
         
        </ThemeIcon>
      </div>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={`${classes.wrapper} mt-20 container p-20 m-auto`}>
      <Grid gutter={80}>
        <div className="m-auto text-center">
        <h1 className="m-auto mt-5 text-3xl font-bold text-center">
          Save time and money
        </h1>
        <p className="text-gray-500">comfort and the best prices for your business and Events</p>
        </div>
        
        <Col span={12} md={12} className="p-4">
          <Tabs defaultValue="gallery" orientation="vertical" className="flex-col md:flex-row">
            <Tabs.List className="w-full text-xl font-bold border-r-0 md:w-1/4 text-neutral-950">
              <Tabs.Tab value="gallery" className="border-r-0 border-black ">
                <h5 className="flex items-center gap-2">
                  <IconPackage className="text-blue-600" />
                  Futures
                </h5>
                <p className="py-1 text-sm font-normal text-gray-500">
                  20+ input components
                </p>
              </Tabs.Tab>
              <Tabs.Tab value="messages" className="border-r-0 border-black">
                <h5 className="flex items-center gap-2">
                  <IconPackage className="text-blue-600" />
                  Futures
                </h5>
                <p className="py-1 text-sm font-normal text-gray-500">
                  20+ input components
                </p>
              </Tabs.Tab>
              <Tabs.Tab value="settings" className="border-r-0 border-black">
                <h5 className="flex items-center gap-2">
                  <IconPackage className="text-blue-600" />
                  Futures
                </h5>
                <p className="py-1 text-sm font-normal text-gray-500">
                  20+ input components
                </p>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery">
              <SimpleGrid
                cols={2}
                spacing={20}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                className="p-0 md:px-20"
              >
                {items}
              </SimpleGrid>
            </Tabs.Panel>
            <Tabs.Panel value="messages">
              {" "}
              <SimpleGrid
                cols={2}
                spacing={20}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                className="p-0 md:px-20"
              >
                {items2}
              </SimpleGrid>
            </Tabs.Panel>
            <Tabs.Panel value="settings">
              {" "}
              <SimpleGrid
                cols={2}
                spacing={20}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                className="p-0 md:px-20"
              >
                {items}
              </SimpleGrid>
            </Tabs.Panel>
          </Tabs>
        </Col>
      </Grid>
    </div>
  );
}
