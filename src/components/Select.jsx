/**
 * 选择组件
 * @jimtang9527
 */
import { React, View, Text, TouchableOpacity, StyleSheet, gStyle } from './Base'
import Svg from './svg'
class Option extends React.Component {
    render() {
        return (
            <View />
        )
    }
}
class CustomInput extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { backgroundColor: '#fff' }
    }
    render() {
        let { text, onClick, style } = this.props
        style = StyleSheet.compose(styles.input, style)
        style = StyleSheet.compose(style, { backgroundColor: this.state.backgroundColor })
        return (
            <TouchableOpacity
                style={style}
                onPress={onClick}
                onMouseEnter={() => { this.setState({ backgroundColor: 'rgb(240,240,240)' }) }}
                onMouseLeave={() => { this.setState({ backgroundColor: 'rgb(255,255,255)' }) }}
            >
                <Text style={{ marginLeft: 10, fontSize: 12 }}>{text}</Text>
                <Svg style={{ marginLeft: 5 }} color='rgb(204,204,204)' value='arraw-down' size={10} />
            </ TouchableOpacity>
        )
    }
}
class Select extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { data: {}, value: '', style: {}, visible: false }
    }
    static getDerivedStateFromProps(props, state) {
        if (!state.value) {
            let { children, defaultValue, style, onChange } = props
            if (!(children instanceof Array)) {
                children = [children]
            }
            if (children.length === 0) {
                return {}
            }
            //默认第一个
            if (typeof (defaultValue) === 'undefined') {
                defaultValue = children[0]['value']
            }
            let data = []
            for (let i = 0; i < children.length; i++) {
                let item = children[i]
                const { props: { value, children: text } } = item
                //生产环境由于代码混淆，会影响name的值，这里去掉判断
                data.push({
                    value,
                    text
                })
            }
            return {
                value: defaultValue,
                data,
                style,
                onChange
            }
        }
        return {

        }
    }
    renderList() {
        let { data, onChange, visible, value: defaultValue, style } = this.state
        style = StyleSheet.compose(style, styles.list)
        if (visible) {
            return (
                <View
                    style={style}
                    onMouseLeave={() => { this.setState({ visible: false }) }}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    style={styles.item}
                                    key={index}
                                    onPress={() => { this.setState({ value: item.value, visible: false }); onChange(item.value) }}
                                >
                                    <View style={styles.itemContent}>
                                        {defaultValue === item.value &&
                                            <Svg value='ok' color={gStyle.main} size={12} />
                                        }
                                        {defaultValue !== item.value &&
                                            <View style={{ width: 12 }} />
                                        }
                                        <Text style={{ marginLeft: 5, fontSize: 12 }}>{item.text}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            )
        }
        return (<View />)
    }
    render() {
        const { data, value, style } = this.state
        if (Object.keys(data).length === 0) {
            return (<View />)
        }

        let selectItem = null
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            if (item.value === value) {
                selectItem = item
                break
            }
        }
        if (!selectItem) {
            selectItem = data[0]
        }
        return (
            <View>
                <CustomInput
                    style={style}
                    text={selectItem.text}
                    onClick={() => { this.setState({ visible: !this.state.visible }) }}
                />
                {this.renderList()}
            </View>
        )
    }
}
Select.Option = Option
let styles = StyleSheet.create({
    main: {
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgb(204,204,204)',
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    list: {
        marginTop: 30,
        position: 'fixed',
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgb(204,204,204)',
        borderStyle: 'solid',
        backgroundColor: '#fff'
    },
    item: {
        padding: 5
    },
    itemContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default Select