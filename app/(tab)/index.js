import { ScrollView } from "react-native";
import Card from "../components/card";

export default function Home() {
  return (
    <ScrollView className="flex">
      <Card
        userName={"Lodemar"}
        content={
          "tcu34htvuvjnyirnfcghvtrsukctgneuyfcrn,yhe4wku vthbwechtewjmgerluiyhjçsdlmhdrgjkirjgiuwrhjlgiwrhtgoiuhwgijwoigwjfperw"
        }
      />
      <Card
        path={require("../../assets/curriculumOn.jpg")}
        userName={"Lucas Cincunegui"}
        content={",yhe4wku "}
      />
      <Card
        userName={"Fabricioo2"}
        content={
          ",yhe4wku vthbwechtewjmgerluiyhjçsdlmhdrgjkirjgiuwrhjlgiwrhtgoiuhwgijwoigwjfperw"
        }
      />
      <Card
        path={require("../../assets/curriculumOn.jpg")}
        userName={"Lucas Cincunegui"}
        content={
          "tcu34htvuvjnyirnfcghvtrsukctgneuyfcrn,yhe4wku vthbwechtewjmgerluiyhjçsdlmhdrgjkirjgiuwrhjlgiwrhtgoiuhwgijwoigwjfperw"
        }
      />
      <Card
        userName={"Lodemar"}
        content={
          "tcu34htvuvjnyirnfcghvtrsukctgn22222222222222222jlgiwrhtgoiuhwgijwoigwjfperw"
        }
      />
      <Card
        userName={"Nilce"}
        content={"tcu34htvuvjnyirnfcghv@!@#!@#!@#!@#hwgijwoigwjfperw"}
      />
      <Card
        userName={"Barak"}
        content={
          " vthbwechtewjmgerluiyhjçsdlmhdrgjkirjgiuwrhjlgiwrhtgoiuhwgijwoigwjfperw"
        }
      />
    </ScrollView>
  );
}
