import { Container, Group, ActionIcon, Text, Stack } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MessageCircle } from 'lucide-react';

export function MantineFooter() {
    return (
        <div style={{ borderTop: '1px solid var(--mantine-color-gray-2)', backgroundColor: 'var(--mantine-color-gray-0)' }}>
            <Container size="lg" py="xl">
                <Group justify="space-between" align="start">
                    <Stack gap="xs">
                        <Text fw={700} size="lg">Stay Halong</Text>
                        <Text size="sm" c="dimmed" maw={400}>
                            베트남 현지 법인 여행사<br />
                            CONG TY TENPER COMMUNICATIONS<br />
                            License: 2500707601
                        </Text>
                    </Stack>
                    <Group gap={0} justify="flex-end" wrap="nowrap">
                        <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="http://pf.kakao.com/_zvsxaG/chat" target="_blank">
                            <MessageCircle size={18} />
                        </ActionIcon>
                        <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="#" >
                            <IconBrandTwitter size={18} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://www.youtube.com/@Realhalong" target="_blank">
                            <IconBrandYoutube size={18} stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Container>
        </div>
    );
}
