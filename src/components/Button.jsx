/**
 * Button扩展
 * @jimtang9527
 */
import { React, gStyle, StyleSheet } from './Base'
import { Text, TouchableOpacity, View } from 'react-native'
import Svg from './svg/'
class Button extends React.Component {
    onPress() {
        if (this.props.onPress) {
            this.props.onPress()
        }
    }
    renderIcon(style) {
        const { icon } = this.props
        if (icon) {
            return (
                <Svg style={{ marginRight: 5, color: style.color }} value={icon} size={15} />
            )
        }
        return <View />
    }
    render() {
        let { type, style } = this.props
        style = StyleSheet.flatten(style)
        type = type || 'primary'
        style = {
            ...StyleSheet.flatten(styles[type]),
            ...style,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }
        //文本继承字体与颜色，css默认不会继承
        let txtStyle = {
            fontSize: style.fontSize,
            color: style.color,
        }
        return (
            <TouchableOpacity style={style} onPress={this.onPress.bind(this)}>
                {this.renderIcon(style)}
                <Text style={txtStyle}>{this.props.value}</Text>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}
let styles = StyleSheet.create({
    primary: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 3,
        backgroundColor: gStyle.main,
        color: '#fff'
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    }
})
export default Button