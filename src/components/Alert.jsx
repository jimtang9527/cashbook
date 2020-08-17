import { React, View, Text, gStyle, Modal } from './Base'
import { DeviceEventEmitter, Dimensions } from 'react-native'
import Svg from './svg/'
let {
    width: screenWidth
} = Dimensions.get('window')
class Alert extends React.Component {
    state = { type: 'modal', tip: {}, visible: false }
    componentDidMount() {
        //消息提示，置顶居中显示
        this.topMessageSubscription = DeviceEventEmitter.addListener('topMessageModal', (tip) => {
            let timeout = tip.timeout || 5
            this.setState({ type: 'message', level: tip.level, msg: tip.msg, timeout, visible: true })
            setTimeout(() => {
                this.setState({ visible: false })
            }, timeout * 1000)
        })
    }
    componentWillUnmount() {
        this.topMessageSubscription.remove()
    }
    onClose() {
        this.setState({ visible: false })
    }
    onSubmit() {
        this.setState({ visible: false })
        const { tip: { callback } } = this.state
        if (callback) {
            callback()
        }
    }
    onLayout(e) {
        let range = document.createRange()
        range.selectNodeContents(e.nativeEvent.target)
        let rects = range.getClientRects()
        if (rects.length > 0) {
            let rect = rects[0]
            if (this.state.txtWidth !== rect.width) {
                this.setState({ txtWidth: rect.width, width: rect.width + 25 + 20 })
            }
        }
    }
    render() {
        //置顶消息
        let { level, msg, width, visible } = this.state
        width = width || 0
        let colors = { success: 'rgb(87,194,45)', info: 'rgb(37,147,252)', warning: 'rgb(248,172,50)', error: 'red' }
        if (visible) {
            return (
                <Modal
                    style={{ margin: 0 }}
                    backdropColor='#fff'
                    backdropOpacity={0}
                    visible={true}
                    onBackdropPress={() => { this.setState({ visible: false }) }}
                >
                    <View style={{ ...styles.topMessageMain, width, left: (screenWidth - width) / 2, top: 20 }}>
                        <View>
                            <Svg value={level} color={colors[level]} size={20} />
                        </View>
                        <View style={styles.topMessage} onLayout={this.onLayout.bind(this)}>
                            <Text style={{ fontSize: 12 }}>{msg}</Text>
                        </View>
                    </View>
                </Modal >
            )
        }
        return (<View />)
    }
    hide() {
        this.setState({ visible: false })
    }
}
const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: 260,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: '#fff',
    },
    title: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 12
    },
    msg: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16
    },
    submit: {
        marginTop: 10,
        marginBottom: 20,
        marginRight: 20,
        fontSize: 14
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    topMessageMain: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: gStyle.grey,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'fixed',
        backgroundColor: '#fff'
    },
    topMessage: {
        marginLeft: 5
    },
    icon: {
        marginRight: 20,
        color: 'rgb(155,155,155)',
        width: 15
    }
}
export default Alert