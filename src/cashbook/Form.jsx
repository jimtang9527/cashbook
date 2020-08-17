/**
 * 新建记录
 * @jimtang9527
 */
import { React, View, Text, TextInput, DatePicker, Modal, Button, Select, TouchableOpacity, message } from '~/components/'
import { connect } from '~/lib/'
const { Option } = Select
@connect(({ category }) => ({
    categories: category.data
}))
class Form extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { date: new Date(), category: -1 }
    }
    onDateChange(v) {
        this.setState({ date: v })
    }
    onCategoryChange(id) {
        this.setState({ category: id })
    }
    onCancel() {
        if (this.props.onCancel) {
            this.props.onCancel()
        }
    }
    onSubmit() {
        let { date, category, amount } = this.state
        const { categories } = this.props
        if (this.props.onSubmit) {
            if (!amount) {
                message.warning('金额不能为空')
                return
            }
            let time = date.getTime()
            let type = -1
            //默认值
            if (category === -1) {
                category = categories[0].id
            }
            for (let i = 0; i < categories.length; i++) {
                let item = categories[i]
                if (item.id === category) {
                    type = item.type
                }
            }
            let record = {
                time,
                type,
                category,
                amount: parseFloat(amount)
            }
            this.props.onSubmit(record)
            message.success('新增成功')
        }
    }
    onChangeText(v) {
        this.setState({ amount: v })
    }
    render() {
        const { date } = this.state
        let { categories } = this.props
        let items = categories.slice(1, categories.length)
        return (
            <View style={styles.form}>
                <View style={styles.field}>
                    <Text style={styles.label}>日期</Text>
                    <DatePicker value={date} onDateChange={this.onDateChange.bind(this)} />
                </View>
                <View style={{ ...styles.field, zIndex: -1 }}>
                    <Text style={styles.label}>分类</Text>
                    <Select defaultValue={this.state.category} style={{ width: 130 }} onChange={this.onCategoryChange.bind(this)}>
                        {items.map((item, index) => {
                            return (
                                <Option key={index} value={item.id}>{item.name}</Option>
                            )
                        })}
                    </Select>
                </View>
                <View style={{ ...styles.field, zIndex: -2 }}>
                    <Text style={styles.label}>金额</Text>
                    <TextInput placeholder='请输入金额' style={{ width: 130 }} onChangeText={this.onChangeText.bind(this)} keyboardType='numeric' />
                </View>
                <View style={{ ...styles.action, height: 40, marginTop: 20, marginRight: -20, zIndex: -3 }}>
                    <TouchableOpacity style={styles.cancel} onPress={this.onCancel.bind(this)}>
                        <Text>取消</Text>
                    </TouchableOpacity>
                    <Button style={styles.submit} onPress={this.onSubmit.bind(this)}><Text style={{ color: '#fff' }}>保存</Text></Button>
                </View>
            </View>
        )
    }
}
class FormModal extends React.Component {
    onCancel() {
        if (this.props.onCancel) {
            this.props.onCancel()
        }
    }
    onSubmit(record) {
        if (this.props.onSubmit) {
            this.props.onSubmit(record)
        }
    }
    render() {
        const { visible } = this.props
        if (visible) {
            return (
                <Modal
                    style={styles.root}
                    visible={true}
                    onBackdropPress={this.onCancel.bind(this)}
                >
                    <View style={styles.main}>
                        <Form onCancel={this.onCancel.bind(this)} onSubmit={this.onSubmit.bind(this)} />
                    </View>
                </Modal>
            )
        } else {
            return (<View />)
        }
    }
}
let styles = {
    root: {
        dispaly: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 260,
        height: 220
    },
    item: {
        dispaly: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 5
    },
    title: {
        width: 50
    },
    action: {
        dispaly: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    submit: {
        marginLeft: 30,
        marginRight: 10,
        fontSize: 12
    },
    field: {
        dispaly: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    label: {
        marginRight: 19
    },
    form: {
        padding: 30,
        zIndex: 1
    }
}
export default FormModal