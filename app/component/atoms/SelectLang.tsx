"use "
import { useState } from "react";
import { createStyles, UnstyledButton, Menu, Image, Group, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import i18n from "@/app/i18n";
import englishImage from "../../../public/assets/english.png";

const data = [ { label: "English", image: englishImage }, { label: "Arabic" } ];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(200),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },
  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },
  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}))

export function SelectLang() {
  const [lang, setLang] = useState(i18n.language);
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);

  const handleLanguageChange = (item:any) => {
    if (lang === "ar") {
      i18n.changeLanguage("en");
      setLang("en");
      document.body.setAttribute("dir", "ltr");
      window.localStorage.setItem("dir", "ltr");
    } else {
      i18n.changeLanguage("ar");
      setLang("ar");
      document.body.setAttribute("dir", "rtl");
      window.localStorage.setItem("dir", "rtl");
    }
    setSelected(item);
  };

  const menuItems = data.map((item) => (
    <Menu.Item
      key={item.label}
      icon={<Image alt="img" src={item?.image?.src} width={18} height={18} />}
      onClick={() => handleLanguageChange(item)}
    >
      {item.label}
    </Menu.Item>
  ))

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image alt="img" src={selected.image.src} width={22} height={22} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    </Menu>
  );
}
