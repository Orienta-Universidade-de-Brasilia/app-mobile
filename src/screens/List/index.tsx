import { Toolbar, Container } from "./styles"
import { HeaderToolBar } from "@components/HeaderToolBar";
import { FlatList } from "react-native";
import { Card } from "@components/Card";

export function List() {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72x',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d7as',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f6-145571e29das7as',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-b45571ase29d7as',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1as-471f-b45571e29d7as',
          title: 'Third Item',
        },
        {
          id: 'asda0f-3da1as-471f-b45571e29d7as',
          title: 'Third Item',
        }
    ]

    return (
        <Container>
            <HeaderToolBar />

            <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <Card />
                )}
                keyExtractor={item => item.id}
            />

        </Container>

    )
}