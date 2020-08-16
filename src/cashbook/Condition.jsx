/**
 * 条件过滤区
 * @jimtang9527
 */
import { React, View, StyleSheet, Text, Select } from '~/components/'
import { connect } from '~/lib/'
const { Option } = Select
@connect(({ category }) => ({
    categories: category.data
}))
class Condition extends React.Component {
    constructor() {
        super(...arguments)
        this.types = [{ value: -1, title: '全部' }, { value: 0, title: '支出' }, { value: 1, title: '收入' }]
        this.months = [{ value: -1, title: '全部' }]
        for (let i = 1; i <= 12; i++) {
            this.months.push({
                title: `2019年${i}月`,
                value: i
            })
        }
        this.state = { month: -1, categoryId: -1, type: -1 }
    }
    //条件变化
    onConditonChange(key, value) {
        this.setState({ [key]: value })
        this.props.onFilter({
            page: 1,
            [key]: value
        })
    }
    render() {
        const { categories } = this.props
        return (
            <View style={styles.condition}>
                <Text style={styles.split}>月份</Text>
                <View>
                    <Select defaultValue={this.state.month} style={{ width: 120 }} onChange={(month) => { this.onConditonChange('month', month) }}>
                        {this.months.map((item, index) => {
                            return (
                                <Option key={index} value={item.value}>{item.title}</Option>
                            )
                        })}
                    </Select>
                </View>
                <Text style={styles.split}>类型</Text>
                <View>
                    <Select defaultValue={this.state.type} style={{ width: 120 }} onChange={(type) => { this.onConditonChange('type', type) }}>
                        {this.types.map((item, index) => {
                            return (
                                <Option key={index} value={item.value}>{item.title}</Option>
                            )
                        })}
                    </Select>
                </View>
                <Text style={styles.split}>分类</Text>
                <View>
                    <Select defaultValue={this.state.category} style={{ width: 120 }} onChange={(categoryId) => { this.onConditonChange('categoryId', categoryId) }}>
                        {categories.map((item, index) => {
                            return (
                                <Option key={index} value={item.id}>{item.name}</Option>
                            )
                        })}
                    </Select>
                </View>
            </View>
        )
    }
}
let styles = StyleSheet.create({
    condition: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1
    },
    split: {
        marginLeft: 5,
        marginRight: 5,
        color: 'rgb(200,200,200)'
    }
})
export default Condition