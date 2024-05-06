import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: "𝘿𝙚𝙪𝙨 𝙩𝙚𝙢 𝙪𝙢𝙖 𝙝𝙚𝙧𝙖𝙣𝙘̧𝙖 𝙚𝙨𝙥𝙞𝙧𝙞𝙩𝙪𝙖𝙡 𝙥𝙖𝙧𝙖 𝙫𝙤𝙘𝙚̂!🕊🔥",
        headerStyle: {
          backgroundColor: "#111",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 15,
        },
        headerTitleAlign: "center",
      }}
    />
  );
}
