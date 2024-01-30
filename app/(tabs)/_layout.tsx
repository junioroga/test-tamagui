import { Home, Settings } from '@tamagui/lucide-icons';
import { Tabs } from 'expo-router';
import { useTheme } from 'tamagui';

import { Text } from '../../components/Text';

export default function TabLayout() {
  const theme = useTheme();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => <Text col="red">oi One</Text>,
          tabBarIcon: ({ color, focused }) => (
            <Home
              size="$icon.sm"
              col={color}
              fill={focused ? theme.blue6.val : theme.background.val}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarLabel: () => <Text col="red">Tab Two</Text>,
          tabBarIcon: ({ color, focused }) => (
            <Settings
              size="$icon.sm"
              col={color}
              fill={focused ? theme.blue6.val : theme.background.val}
            />
          ),
        }}
      />
    </Tabs>
  );
}
