import React from "react";
import { TouchableOpacity, View, Text, StyleSheet} from "react-native";

const TodoItem = ({ title, isComplete, complete, remove }) => (
    <View style={styles.viewStyle}>
        <View>
            <Text style={isComplete && styles.textComplete}>
                {title}
            </Text>
        </View>

        <View>
            <TouchableOpacity
                onPress={complete}
            >   
            <Text>
                {isComplete ? 'Отменить' : 'Выполнить'}
            </Text>                                     
            </TouchableOpacity>
            <TouchableOpacity
                onPress={remove}
            >
            <Text>
                Удалить
            </Text>
            </TouchableOpacity>               
        </View>
    </View>   
)  

// TodoItem.defaultProps = {
//     title: 'Без Названия',
//     isComplete: false,
//     complete: () => {},
//     remove: () => {}
// }
const styles = StyleSheet.create({
    textComplete: {
        textDecorationLine: 'line-through'
    }   
})

export default TodoItem;