import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
  <Tabs>
    <Tabs.Screen  
    name="index" 
    options={{ 
      title: "Dashboard",
      headerShown: false,
    }} 
    />

    <Tabs.Screen 
    name="AI" 
    />
  </Tabs>
  );
}
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: "#3f6d44ff",
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //   },
    //   contentStyle: {
    //     paddingTop: 5,
    //   },
    // }}>
    //   <Stack.Screen name='index' options={{ title: 'Dashboard', }} />
    //   </Stack>

