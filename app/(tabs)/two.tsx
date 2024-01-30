import { YStack, H2, Separator, Theme } from 'tamagui';

export default function TabTwoScreen() {
  return (
    <Theme name="light">
      <YStack f={1} ai="center" jc="center">
        <H2>Tab Two</H2>
        <Separator />
      </YStack>
    </Theme>
  );
}
