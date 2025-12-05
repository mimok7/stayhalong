import { Container, SimpleGrid, Card, Image, Text, Group, Badge, ThemeIcon, Title } from '@mantine/core';
import { Ship, Car, User, Building } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Ship,
        title: '하롱베이 크루즈',
        description: '세계자연유산 하롱베이에서 즐기는 프리미엄 크루즈 여행. 럭셔리부터 가성비까지.',
        href: '/cruises',
        color: 'blue',
    },
    {
        icon: Car,
        title: '공항 픽업/샌딩',
        description: '하노이 공항에서 하롱베이까지 안전하고 편안하게. 전용 차량으로 이동하세요.',
        href: '/services/airport-transfer',
        color: 'green',
    },
    {
        icon: User,
        title: '한국어 가이드 투어',
        description: '베트남 현지 전문가와 함께하는 맞춤형 여행. 언어 걱정 없이 즐기세요.',
        href: '/services/korean-guide',
        color: 'grape',
    },
    {
        icon: Building,
        title: '베트남 호텔 예약',
        description: '엄선된 베트남 호텔 최적가 예약 및 추천. 5성급 럭셔리 호텔 특가.',
        href: '/services/hotels',
        color: 'orange',
    },
];

export function MantineServices() {
    return (
        <Container size="lg" py={80} id="services">
            <Title order={2} ta="center" mt="sm" mb={50}>
                Our Premium Services
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
                {services.map((feature) => (
                    <Card key={feature.title} shadow="sm" radius="md" padding="xl" component={Link} href={feature.href} withBorder style={{ transition: 'transform 200ms ease, box-shadow 200ms ease' }} className="hover:scale-[1.02] hover:shadow-lg">
                        <ThemeIcon
                            size={50}
                            radius={50}
                            variant="light"
                            color={feature.color}
                            mb="md"
                        >
                            <feature.icon size={26} />
                        </ThemeIcon>
                        <Text fz="lg" fw={700} mt="md" mb="xs">
                            {feature.title}
                        </Text>
                        <Text c="dimmed" fz="sm">
                            {feature.description}
                        </Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
}
