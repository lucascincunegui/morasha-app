import { ScrollView } from "react-native";
import Card from "../../../components/templates/card";

export default function Home() {
  return (
    <ScrollView className="flex">
      <Card
        link={"https://www.instagram.com/missao_morasha/"}
        userName={"Lodemar Souza"}
        content={"Aqui paso para deixar o link da pagina oficial da igreja!"}
      />
      <Card
        path={require("../../../assets/curriculumOn.jpg")}
        userName={"Lucas Cincunegui"}
        content={"pessoal olha ese som, gloria a Deus!"}
        link={
          "https://www.youtube.com/watch?v=Krw3YIZI-Ps&list=RDKrw3YIZI-Ps&start_radio=1"
        }
      />
      <Card
        userName={"Fabricio Borges"}
        content={"Peço oração por minha tia, obrigado a todos."}
      />
      <Card userName={"Nilce Bom"} content={"Paz a todos os irmãos"} />
      <Card
        userName={"Rodrigo Madeira"}
        content={"O culto no sabado foi uma benção!"}
      />
    </ScrollView>
  );
}
