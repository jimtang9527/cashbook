import { React, View, StyleSheet, Text, Table, Svg, Button } from '~/components/'
import { connect, Util } from '~/lib/'
import Condition from './Condition'
import Statistics from './Statistics'
import Form from './Form'
@connect(({ bill, category }) => ({
    data: bill.data,
    count: bill.count,
    categories: category.data
}))
class Index extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { data: [], categories: [], count: 0, page: 1, pageSize: 10, loading: false, visible: false }
    }
    async initData() {
        await this.props.dispatch({
            type: 'category/list'
        })
        await this.loadPage()
    }
    //分页加载数据
    async loadPage(page) {
        page = page || this.state.page
        this.setState({ loading: true, page })
        this.onFilter({ ...this.state, page })
    }
    async onFilter(params) {
        this.setState({ ...params })
        this.props.dispatch({
            type: 'bill/list',
            payload: {
                ...this.state,
                ...params
            }
        })
    }
    componentDidMount() {
        this.initData()
    }
    static getDerivedStateFromProps(props, state) {
        const { data, categories, count } = props
        return {
            data,
            categories,
            count
        }
    }
    //根据ID获得类型
    getCategoryById(id) {
        const { categories } = this.props
        for (let i = 0; i < categories.length; i++) {
            let item = categories[i]
            if (item.id === id) {
                return item
            }
        }
    }
    getColumns() {
        return [
            {
                title: '时间',
                dataIndex: 'time',
                render: (value) => {
                    return (
                        <Text style={styles.font}>{Util.formatTime(value)}</Text>
                    )
                }
            },
            {
                title: '类型',
                dataIndex: 'type',
                render: (value) => {
                    value = value === 1 ? '收入' : '支出'
                    return (
                        <Text style={styles.font}>{value}</Text>
                    )
                }
            },
            {
                title: '分类',
                dataIndex: 'category',
                render: (value) => {
                    let category = this.getCategoryById(value)
                    return (
                        <Text style={styles.font}>{category.name}</Text>
                    )
                }
            },
            {
                title: '金额',
                dataIndex: 'amount',
                render: (value) => {
                    return (
                        <Text style={styles.font}>{Util.formatMoney(value)}</Text>
                    )
                }
            }
        ]
    }
    onCreate() {
        this.setState({ visible: true })
    }
    onCancel() {
        this.setState({ visible: false })
    }
    async onSubmit(record) {
        this.setState({ visible: false })
        //添加记录
        await this.props.dispatch({
            type: 'bill/create',
            payload: record
        })
        //刷新记录
        await this.onFilter({})
    }
    renderActions(rows) {
        return (
            <View style={styles.actions}>
                <View style={styles.action}>
                    <Button icon='plus' type='text' onPress={this.onCreate.bind(this)} value='新增' />
                </View>
            </View>
        )
    }
    render() {
        let { data, count, page, pageSize, visible } = this.state
        data = data || []
        count = count || 0
        const columns = this.getColumns()
        return (
            <View style={styles.main}>
                <Form visible={visible} onCancel={this.onCancel.bind(this)} onSubmit={this.onSubmit.bind(this)} />
                <View style={styles.header}>
                    <Svg value='cashbook' style={styles.logo}></Svg>
                    <Text>小账本演示</Text>
                </View>
                <Condition onFilter={this.onFilter.bind(this)} />
                <Statistics />
                <Table
                    page={page}
                    pageSize={pageSize}
                    onPageChange={(page) => { this.loadPage(page) }}
                    style={styles.table}
                    dataSource={data}
                    count={count}
                    columns={columns}
                    renderActions={this.renderActions.bind(this)}
                />
            </View>
        )
    }
}
let styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDiection: 'column',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    logo: {
        width: 30
    },
    table: {
        padding: 10,
        fontSize: 12,
        zIndex: -1
    },
    font: {
        fontSize: 12
    },
    condition: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    action: {
        marginLeft: 20
    },
})
export default Index