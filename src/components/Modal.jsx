/**
 * Modal扩展
 * @jimtang9527
 */
import Modal from 'modal-enhanced-react-native-web'
import * as React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
class ModalPlus extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { forceHide: false }
    }
    keydown(event) {
        if (event.keyCode === 27) {
            this.onBackdropPress()
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', (e) => { this.keydown(e) }, false)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', (e) => { this.keydown(e) }, false)
    }
    onBackdropPress() {
        this.setState({ forceHide: false })
        if (this.props.onBackdropPress) {
            this.props.onBackdropPress()
        }
    }
    render() {
        const { forceHide } = this.state
        const { visible } = this.props
        if (!visible || forceHide) {
            return (<View />)
        }
        let style = StyleSheet.flatten(this.props.style)
        style = {
            ...style,
            margin: 0
        }
        let props = {}
        if (this.props.backdropOpacity || this.props.backdropOpacity === 0) {
            props['backdropOpacity'] = this.props.backdropOpacity
        }
        if (this.props.backdropColor) {
            props['backdropColor'] = this.props.backdropColor
        }
        return (
            <Modal
                style={style}
                isVisible={true}
                {...props}
                onBackdropPress={this.onBackdropPress.bind(this)}
            >
                {this.props.children}
            </Modal>
        )
    }
}
export default ModalPlus