/**
 * Table组件
 * @jimtang9527
 */
import { React, View, Text, StyleSheet } from './Base'
import Pagination from './Pagination'
import Svg from './svg/'
import Empty from './Empty'
class TR extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { backgroundColor: 'rgb(255,255,255)', enter: false, showModal: false }
    }
    onMouseLeave() {
        this.setState({ backgroundColor: 'rgb(255,255,255)', enter: false, showModal: false })
    }
    onMouseEnter() {
        this.setState({ backgroundColor: 'rgb(245,245,245', enter: true })
    }
    onShowModal() {
        //选择更多
        this.setState({ showModal: !this.state.showModal })
    }
    render() {
        const { enter, showModal } = this.state
        //处理鼠标移动上去修改tr背景色
        let trStyle = {
            cursor: 'pointer',
            backgroundColor: this.state.backgroundColor
        }
        return (
            <tr
                style={trStyle}
                onMouseLeave={this.onMouseLeave.bind(this)}
                onMouseEnter={this.onMouseEnter.bind(this)} >
                {this.props.children}
                {this.props.renderRowActions &&
                    <td>
                        {enter && <Svg value='dot-vertical' size={10} onPress={this.onShowModal.bind(this)} />}
                        {enter && showModal &&
                            <View style={styles.more}>
                                {/*渲染弹出菜单*/}
                                {this.props.renderRowActions(this.props.item)}
                            </View>
                        }
                    </td>
                }
            </tr>
        )
    }
}
class Table extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { style: {}, fontSize: 14, dataSource: [], count: 0, columns: [], selectedRows: [], backgroundColor: 'rgb(255,255,255)' }
    }
    static getDerivedStateFromProps(props, state) {
        let { dataSource, count, columns, renderActions, renderRowActions, style } = props
        style = StyleSheet.flatten(style)
        style = {
            ...StyleSheet.flatten(styles.main),
            ...style
        }
        return {
            dataSource,
            count,
            columns,
            renderActions,
            renderRowActions,
            style,
            fontSize: style.fontSize || 14
        }
    }
    //全选
    onSelectAll(checked) {
        if (checked) {
            //复制一份
            this.setState({ selectedRows: JSON.parse(JSON.stringify(this.state.dataSource)) })
        } else {
            this.setState({ selectedRows: [] })
        }
    }
    //选中某行
    onSelectRow(row, checked) {
        let { selectedRows } = this.state
        let existed = false
        for (let i = 0; i < selectedRows.length; i++) {
            let item = selectedRows[i]
            if (item.id === row.id) {
                //未选中
                if (!checked) {
                    selectedRows.splice(i, 1)
                }
                existed = true
                break
            }
        }
        if (checked && !existed) {
            //选中且不存在，就添加到未端
            selectedRows.push(row)
        }
        this.setState({ selectedRows })
    }
    //查询某行是否选中
    isSelectRow(row) {
        let { selectedRows } = this.state
        for (let i = 0; i < selectedRows.length; i++) {
            let item = selectedRows[i]
            if (item.id === row.id) {
                return true
            }
        }
        return false
    }
    //顶部渲染可用操作
    renderTopActions() {
        const { renderActions, selectedRows, count, dataSource, fontSize } = this.state
        let paginationStyle = {
            fontSize
        }
        if (renderActions) {
            return (
                <View style={styles.header}>
                    {renderActions(selectedRows)}
                    {dataSource.length > 0 &&
                        <Pagination
                            style={paginationStyle}
                            total={count}
                            page={this.props.page || 1}
                            pageSize={this.props.pageSize || 10}
                            onPageChange={(page) => { this.props.onPageChange(page) }}
                        />
                    }
                </View>
            )
        }
        return (
            <View style={styles.pagination}>
                {dataSource.length > 0 &&
                    <Pagination
                        style={paginationStyle}
                        total={count}
                        page={this.props.page || 1}
                        pageSize={this.props.pageSize || 10}
                        onPageChange={(page) => { this.props.onPageChange(page) }}
                    />
                }
            </View>
        )
    }
    renderEmpty() {
        const { dataSource } = this.state
        if (dataSource.length === 0) {
            return (
                <Empty width={150}>
                    <Text style={{ margin: 20, color: 'rgb(156,156,156)' }}>暂无记录</Text>
                </Empty>
            )
        }
        return (<View />)
    }
    render() {
        let { dataSource, columns, renderRowActions, style, fontSize } = this.state
        return (
            <View>
                {/* 可用操作栏 */}
                {this.renderTopActions()}
                {/* table */}
                {this.renderEmpty()}
                {dataSource.length > 0 &&
                    <View style={style}>
                        <table style={StyleSheet.flatten(styles.table)}>
                            <thead>
                                <tr>
                                    {columns.map((column, index) => {
                                        return (
                                            <th style={{ ...StyleSheet.flatten(styles.th), fontSize }} key={index}>{column.title || ' '}</th>
                                        )
                                    })}
                                    {renderRowActions &&
                                        <th>
                                            <Svg value='no' size={10} />
                                        </th>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {dataSource.map((item, index) => {
                                    return (
                                        <TR renderRowActions={renderRowActions} item={item} key={index} onClick={() => {
                                            if (this.props.onPress) {
                                                this.props.onPress(item)
                                            }
                                        }} >

                                            {
                                                columns.map((column, cIndex) => {
                                                    let value = item[column.dataIndex]
                                                    let tdStyle = StyleSheet.flatten(styles.td)
                                                    if (column.width) {
                                                        tdStyle = {
                                                            ...tdStyle,
                                                            width: column.width
                                                        }
                                                    }
                                                    if (column.render) {
                                                        return (
                                                            <td
                                                                style={{ ...StyleSheet.flatten(tdStyle), fontSize }}
                                                                key={cIndex}
                                                            >
                                                                {column.render(value, item)}
                                                            </td>
                                                        )

                                                    } else {
                                                        return (
                                                            <td
                                                                style={{ ...StyleSheet.flatten(tdStyle), fontSize }}
                                                                key={cIndex}>{value}</td>
                                                        )
                                                    }
                                                })
                                            }
                                        </TR>
                                    )
                                })}
                            </tbody>
                        </table>
                    </View>
                }
            </View>
        )
    }
}
let styles = StyleSheet.create({
    main: {
        overflow: 'auto'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        textAlign: 'left',
        padding: 8,
        color: 'rgb(156,156,156)'
    },
    td: {
        textAlign: 'left',
        padding: 8
    },
    pagination: {
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    header: {
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    more: {
        position: 'fixed',
        padding: 5,
        borderRadius: 3,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'rgb(244,244,244)',
        borderStyle: 'solid'
    }
})
export default Table