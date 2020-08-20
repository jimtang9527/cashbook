import {
    React,
    TouchableOpacity,
    View,
    StyleSheet
} from '../Base'
import SvgIndex from './data'
import S from 'string'
class SVG extends React.Component {
    onPress() {
        if (this.props.onPress) {
            this.props.onPress()
        } else {
            if (this.props.onClick) {
                this.props.onClick()
            }
        }
    }
    renderContent(svg) {
        let { color, size } = this.props
        if (this.props.style) {
            let style = StyleSheet.flatten(this.props.style)
            color = color || style.color
            size = size || style.width
        }
        size = size || 30
        color = color || '#555555'
        let viewBox = '0 0 1024 1024'
        //根据svg原始大小计算出比率，做出调整
        const { data, rate } = svg
        let height = size
        let width = size * rate
        return (
            <View style={this.props.style}>
                <svg
                    width={width}
                    height={height}
                    viewBox={viewBox}>
                    {data.map((item, i) => (
                        <path
                            key={i}
                            fill={item.fill || color}
                            d={item.d} />
                    ))}
                </svg>
            </View>
        )
    }
    render() {
        let { value } = this.props
        value = S(value).replaceAll('/', ':').s
        let svg = SvgIndex[value]
        if (!svg) {
            return (
                <View>

                </View>
            )
        }
        if (this.props.onPress || this.props.onClick) {
            return (
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    {this.renderContent(svg)}
                </TouchableOpacity>
            )
        }
        return this.renderContent(svg)
    }
}
export default SVG