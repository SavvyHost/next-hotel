import { createStyles, Card, Image, Avatar, Text, Group } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}))

interface CardSearchProps {
  image: string
  category?: string
  title?: string
  date?: string
  location?:string
  author?: {
    name?: string
    avatar?: string
  }
}

export function CardSearch({
  image,
  category,
  title,
  location,
  date,
  author,
}: CardSearchProps) {
  const { classes } = useStyles()
  return (
    <Card withBorder radius="lg" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} alt="img" height={250} width={250} />
        <div className={classes.body}>
          <Text transform="uppercase" color="#3f54f1" weight={700} size="xl">
            {category}
          </Text>
          <Text transform="uppercase" color="dimmed" weight={200} size="xl">
            {location}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={author?.avatar} />
              <Text size="xs">{author?.name}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-check"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </Text>
            <Text size="xs" color="dimmed">
              {date}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  )
}
