import { useState } from "react";

import { Container, ContainerCheckBox, ContentCheckbox, Title, ContentText, TextInformation } from "./styles";

import { Button } from "../../components/Button";
import Checkbox from 'expo-checkbox';
import { ScrollView } from "react-native";
import { SafeAreaView, Text } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export function Terms() {
    const { user, login } = useAuth();

    const [ isSelected, setSelection ] = useState(false);
    const [ toggle, setToggle ] = useState(false);

    function handleRegister() {
        if(isSelected == false) {
            setToggle(true);
        } else {
            setToggle(false);

            login(user.email, user.password);
        }
        console.log(isSelected)
    }
    return (
        <Container>

            <Title>Política de Privacidade</Title>

            <ContentText>
                <SafeAreaView>
                    <ScrollView>
                        <Text>
                            A sua privacidade é importante para nós. É política do Orienta UnB respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no aplicativo Orienta UnB.{"\n"}
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.{"\n"}
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.{"\n"}
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.{"\n"}
                            O nosso aplicativo pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.{"\n"}
                            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.{"\n"}
                            O uso continuado de nosso aplicativo será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.{"\n"}
                            Compromisso do Usuário{"\n"}
                            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Orienta UnB oferece no site e com caráter enunciativo, mas não limitativo:{"\n"}
                            {"\n"}{"\n"}
                            1. Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                            {"\n"}{"\n"}
                            2. Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                            {"\n"}{"\n"}
                            3. Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Orienta UnB, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                            {"\n"}{"\n"}
                            Mais informações
                            {"\n"}{"\n"}
                            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </ContentText>

            <ContainerCheckBox>
                <ContentCheckbox>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                </ContentCheckbox>

                <Text>Aceito os termos de política de uso.</Text>

            </ContainerCheckBox>

                { toggle ? <TextInformation>É necessário aceitar os termos de uso.</TextInformation> : '' }
            
            <Button
                title="Continuar"
                onPress={handleRegister}
            />

        </Container>
    )
}