/**
 * 分页组件
 * @jimtang9527
 */
import { React, gStyle } from './Base'
import { TouchableOpacity, Text, View } from 'react-native'
import Svg from './svg/'
const build = (current, totalPage) => {
    if (totalPage <= 7) {
        let data = []
        for (let i = 1; i <= totalPage; i++) {
            data.push(i)
        }
        return data
    }
    if (current <= 3) {
        return [1, 2, 3, 4, -1, totalPage]
    }
    if (current === 4) {
        return [1, 2, 3, 4, 5, -1, totalPage]
    }
    if ((totalPage - current) <= 2) {
        return [1, -1, totalPage - 3, totalPage - 2, totalPage - 1, totalPage]
    }
    if ((totalPage - current) === 3) {
        return [1, -1, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage]
    }
    return [1, -1, current - 1, current, current + 1, -1, totalPage]
}
class Pagenation extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { current: 1, totalPage: 0, total: 0, first: true, last: false, style: {} }
    }
    static getDerivedStateFromProps(props, state) {
        if (state.total !== props.total) {
            let { total, pageSize, page, style } = props
            pageSize = pageSize || 10
            let totalPage = Math.ceil(total / pageSize)
            return {
                total,
                pages: build(page, totalPage),
                current: page,
                first: page === 1,
                last: page === totalPage,
                totalPage,
                style
            }
        }
        return {}
    }

    onPrePage() {
        const { first, current, totalPage } = this.state
        if (!first) {
            let newCurrent = current - 1
            if (newCurrent <= 0) {
                newCurrent = 1
            }
            this.setState({ current: newCurrent, last: false, first: current === 1, pages: build(newCurrent, totalPage) })
            this.callback(newCurrent)
        }
    }
    onNextPage() {
        const { last, current, totalPage } = this.state
        if (!last) {
            let newCurrent = current + 1
            if (newCurrent >= totalPage) {
                newCurrent = totalPage
            }
            this.setState({ current: newCurrent, last: current === totalPage, first: false, pages: build(newCurrent, totalPage) })
            this.callback(newCurrent)
        }
    }
    onPress(current) {
        let { totalPage } = this.state
        let first = false
        let last = false
        if (current === 1) {
            first = true
        }
        if (current === totalPage) {
            last = true
        }
        this.setState({ current, last, first, pages: build(current, totalPage) })
        this.callback(current)
    }
    callback(current) {
        if (this.props.onPageChange) {
            this.props.onPageChange(current)
        }
    }
    render() {
        const { pages, total, current, first, last, style } = this.state
        let mainStyle = {
            ...styles.main,
            ...style
        }
        let txtStyle = {

        }
        if (style.fontSize) {
            txtStyle['fontSize'] = style.fontSize
        }
        return (
            <View style={mainStyle}>
                <View style={styles.total}>
                    <Text style={txtStyle}>总计：{total}条</Text>
                </View>
                {!first &&
                    <TouchableOpacity onPress={this.onPrePage.bind(this)}>
                        <Svg value='prepage' size={15} />
                    </TouchableOpacity>
                }
                {first &&
                    <View style={styles.disable}>
                        <Svg value='prepage' size={15} />
                    </View>
                }
                {pages.map((page, index) => {
                    if (page === current) {
                        return (
                            < View key={index} style={styles.selected}>
                                <Text style={{ color: gStyle.main, ...txtStyle }}>{page}</Text>
                            </View>
                        )
                    } else {
                        if (page === -1) {
                            return (
                                <View key={index} style={styles.unselect}>
                                    <Text style={txtStyle}>...</Text>
                                </View>
                            )
                        }
                    }
                    return (
                        < TouchableOpacity key={index} style={styles.unselect} onPress={() => { this.onPress(page) }}>
                            <Text style={txtStyle}>{page}</Text>
                        </TouchableOpacity>
                    )
                })
                }
                {!last &&
                    <TouchableOpacity onPress={this.onNextPage.bind(this)}>
                        <Svg value='nextpage' size={15} />
                    </TouchableOpacity>
                }
                {last &&
                    <View style={styles.disable}>
                        <Svg value='nextpage' size={15} />
                    </View>
                }
            </View >
        )
    }
}
let styles = {
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    unselect: {
        width: 20,
        height: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected: {
        borderWidth: 1,
        borderRadius: 3,
        borderStyle: 'solid',
        borderColor: gStyle.main,
        width: 19,
        height: 19,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    total: {
        marginRight: 15
    },
    disable: {
        cursor: 'not-allowed'
    }
}
export default Pagenation