import { YStack, H2, Separator, Theme } from 'tamagui';

export default function TabOneScreen() {
  return (
    <Theme name="light">
      <YStack f={1} ai="center" jc="center">
        <H2>Tab One</H2>
        <Separator />
      </YStack>
    </Theme>
  );
}
