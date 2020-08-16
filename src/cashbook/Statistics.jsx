/**
 * 统计
 * @jimtang9527
 */
import { React, View, StyleSheet, Text } from '~/components/'
import { connect, Util } from '~/lib/'
@connect(({ bill, category }) => ({
    data: bill.bills,
    categories: category.data
}))
class Statistics extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { income: 0, pay: 0, categories: [] }
    }
    static getDerivedStateFromProps(props, state) {
        let { data, categories } = props
        categories = JSON.parse(JSON.stringify(categories))
        let income = 0
        let pay = 0
        //按收入，支出统计总额
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            if (item.type === 0) {
                pay += item.amount
            } else {
                income += item.amount
            }
        }
        //按分类统计总额
        for (let j = 0; j < categories.length; j++) {
            let category = categories[j]
            category.total = 0
            for (let i = 0; i < data.length; i++) {
                let item = data[i]
                if (item.category === category.id) {
                    category.total += item.amount
                }
            }
        }
        //分类排序
        categories = categories.sort((a, b) => {
            return a.total > b.total ? -1 : 1
        })
        return {
            income,
            pay,
            categories
        }
    }
    render() {
        const { income, pay, categories } = this.state
        return (
            <View style={styles.root}>
                <View style={styles.main}>
                    <View style={styles.block}>
                        <Text style={styles.label}>总收入</Text>
                        <Text style={styles.money}>{Util.formatMoney(income)}</Text>
                    </View>
                    <View style={styles.split}></View>
                    <View style={styles.block}>
                        <Text style={styles.label}>总支出</Text>
                        <Text style={styles.money}>{Util.formatMoney(pay)}</Text>
                    </View>
                </View>
                <View style={styles.category}>
                    {categories.map((item, index) => {
                        if (item.id === -1) {
                            return (<View key={index} />)
                        }
                        return (
                            <View key={index} style={styles.row}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.font}>{Util.formatMoney(item.total)}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}
let styles = StyleSheet.create({
    main: {
        padding: 10,
        marginLeft: 38,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        width: 210,
        height: 80,
        backgroundColor: 'rgb(240,242,245)',
        borderRadius: 5
    },
    split: {
        width: 20
    },
    label: {
        padding: 10,
        fontSize: 16,
    },
    money: {
        paddingLeft: 10,
        fontSize: 20,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    name: {
        width: 80,
        fontSize: 12
    },
    font: {
        fontSize: 12
    },
    category: {
        marginLeft: 50,
        width: 200,
        padding: 20,
        borderWidth: 2,
        borderColor: 'rgb(240,242,245)',
        borderRadius: 5
    }
})
export default Statistics