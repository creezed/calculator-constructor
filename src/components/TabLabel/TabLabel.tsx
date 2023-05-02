import { FC } from 'react';
import { Flex, Text } from '@/components/ui';
import { theme } from '@/shared/styles/theme.ts';

export const TabLabel: FC<{ icon: JSX.Element; text: string }> = ({
  icon,
  text,
  ...props
}) => {
  return (
    <Flex {...props} align="center" gap="10px" justify="center">
      {icon}
      <Text
        fontSize="14px"
        fontWeight={500}
        color={theme.colors.gray600}
        fontFamily={theme.font.inter}
      >
        {text}
      </Text>
    </Flex>
  );
};
