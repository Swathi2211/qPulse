import { Text, View } from "react-native";
import UserAvatar from 'react-native-user-avatar';
import MesCss from "./mesCss";


function Msg(props) {

    return (

        <View style={MesCss.parent}>
            <View style={MesCss.profParent}>
                <UserAvatar style={MesCss.prof} size={30} name={props.id1} />

            </View>
            <View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{props.id1}</Text>
                        <Text>{props.time}</Text>
                    </View>
                    <View>
                        <Text style={MesCss.cont}>{props.qs}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Msg;