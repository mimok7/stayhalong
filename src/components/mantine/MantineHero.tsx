import { BackgroundImage, Container, Title, Text, Button, Group, Overlay, Box } from '@mantine/core';
import { Calendar, Coffee, MessageCircle, Youtube } from 'lucide-react';

export function MantineHero() {
    return (
        <Box h="85vh" pos="relative">
            <BackgroundImage
                src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop"
                h="100%"
            >
                <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.65) 40%, #000 100%)" opacity={0.6} zIndex={1} />
                <Container size="lg" h="100%" px="md" style={{ position: 'relative', zIndex: 2 }}>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',
                            color: 'white',
                        }}
                    >
                        <Text c="blue.2" fw={700} tt="uppercase" style={{ letterSpacing: '2px' }} mb="md">
                            하롱베이 현지 전문 유일 한국인 여행사
                        </Text>
                        <Title
                            order={1}
                            size="4rem"
                            fw={900}
                            lh={1.1}
                            mb="xl"
                        >
                            Discover the Beauty of <br />
                            <Text span c="blue.4" inherit>
                                Halong Bay
                            </Text>
                        </Title>
                        <Text size="xl" c="gray.1" maw={600} mb={50}>
                            스테이하롱은 베트남 현지 법인 여행사로, <br />
                            가장 안전하고 특별한 하롱베이 여행을 약속드립니다.
                        </Text>

                        <Group gap="md">
                            <Button
                                size="xl"
                                radius="xl"
                                color="yellow"
                                c="dark"
                                leftSection={<MessageCircle size={20} />}
                                component="a"
                                href="http://pf.kakao.com/_zvsxaG/chat"
                                target="_blank"
                            >
                                카카오톡 상담
                            </Button>
                            <Button
                                size="xl"
                                radius="xl"
                                color="green"
                                leftSection={<Coffee size={20} />}
                                component="a"
                                href="https://cafe.naver.com/stayhalong"
                                target="_blank"
                            >
                                네이버 카페
                            </Button>
                            <Button
                                size="xl"
                                radius="xl"
                                color="red"
                                leftSection={<Youtube size={20} />}
                                component="a"
                                href="https://www.youtube.com/@Realhalong"
                                target="_blank"
                            >
                                SHT YOUTUBE
                            </Button>
                            <Button
                                size="xl"
                                radius="xl"
                                variant="white"
                                color="dark"
                                leftSection={<Calendar size={20} />}
                                component="a"
                                href="#services"
                            >
                                예약 서비스 보기
                            </Button>
                        </Group>
                    </Box>
                </Container>
            </BackgroundImage>
        </Box>
    );
}
