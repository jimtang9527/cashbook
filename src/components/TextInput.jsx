/**
 * TextInput扩展
 * @jimtang9527
 */
import { React, gStyle } from './Base'
import { TextInput, View } from 'react-native'
class TextInputPlus extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { borderColor: gStyle.grey }
    }
    onFocus() {
        if (this.props.onFocus) {
            this.props.onFocus()
        }
        this.setState({ borderColor: gStyle.main })
    }
    onBlur() {
        if (this.props.onBlur) {
            this.props.onBlur()
        }
        this.setState({ borderColor: gStyle.grey })
    }
    render() {
        let style = { outline: 'none', paddingLeft: 10, paddingTop: 5, paddingRight: 10, paddingBottom: 5 }
        if (this.props.style && this.props.style.width) {
            style = {
                ...style,
                width: this.props.style.width,
                height: this.props.style.height,
            }
        }
        let parentStyle = { ...styles.main, borderColor: this.state.borderColor }
        parentStyle = {
            ...parentStyle,
            ...this.props.style
        }
        return (
            <View style={parentStyle}>
                <TextInput {...this.props} style={style} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} />
            </View>
        )
    }
}
let styles = {
    main: {
        borderWidth: 1,
        borderRadius: 3,
        borderStyle: 'solid'
    }
}
export default TextInputPlus