"use client";

import { MantineHero } from '@/components/mantine/MantineHero';
import { MantineServices } from '@/components/mantine/MantineServices';
import { MantineFooter } from '@/components/mantine/MantineFooter';
import { MantineReviews } from '@/components/mantine/MantineReviews';
import { Box } from '@mantine/core';

export default function NewHomePage() {
  return (
    <Box>
      <MantineHero />
      <MantineServices />
      <MantineReviews />
      <MantineFooter />
    </Box>
  );
}