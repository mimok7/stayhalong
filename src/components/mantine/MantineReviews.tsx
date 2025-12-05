import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, Container, useMantineTheme, Rating, Group, Avatar } from '@mantine/core';
import '@mantine/carousel/styles.css';

interface CardProps {
    name: string;
    rating: number;
    content: string;
    tag: string;
}

function Card({ name, rating, content, tag }: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            withBorder
            h="100%"
        >
            <Group justify="space-between" mb="xs">
                <Rating value={rating} readOnly />
                <Text c="dimmed" size="xs">{tag}</Text>
            </Group>
            <Text size="md" mt="sm" mb="xl" style={{ minHeight: '80px' }}>
                "{content}"
            </Text>
            <Group>
                <Avatar color="blue" radius="xl">{name.charAt(0)}</Avatar>
                <Text fw={500} size="sm">{name}</Text>
            </Group>
        </Paper>
    );
}

const data = [
    {
        name: "김** 님",
        rating: 5,
        content: "한국어로 모든 소통이 가능해서 너무 편했어요. 현지 가이드분도 정말 친절하시고 크루즈도 최고였습니다!",
        tag: "Paradise Elegance"
    },
    {
        name: "박** 님",
        rating: 5,
        content: "공항 픽업부터 크루즈 예약까지 모든 걸 도와주셔서 편안한 여행이었어요. 다음에도 꼭 이용할게요!",
        tag: "Calista + 픽업"
    },
    {
        name: "이** 님",
        rating: 5,
        content: "가격도 합리적이고 서비스도 훌륭했어요. 특히 한국어 가이드 투어는 정말 유익했습니다!",
        tag: "원데이 크루즈"
    },
    {
        name: "최** 님",
        rating: 5,
        content: "가족 여행으로 다녀왔는데 부모님이 너무 좋아하셨어요. 세심한 배려 감사합니다.",
        tag: "Ambassador Cruise"
    },
];

export function MantineReviews() {
    return (
        <Container size="lg" py={80}>
            <Title order={2} ta="center" mb="xl">
                Traveler Reviews
            </Title>
            <Carousel
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                slideGap="md"
                loop
                align="start"
                slidesToScroll={1}
            >
                {data.map((item, index) => (
                    <Carousel.Slide key={index}>
                        <Card {...item} />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </Container>
    );
}
