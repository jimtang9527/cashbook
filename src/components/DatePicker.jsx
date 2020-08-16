/**
 * DataPicker扩展
 * @jimtang9527
 */
import { React, View, Text, TouchableOpacity, StyleSheet } from './Base'
import Svg from './svg/'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import { Util } from '~/lib/'
import 'react-datepicker/dist/react-datepicker.css'
import cn from 'date-fns/locale/zh-CN'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'
import dayjs from 'dayjs'
registerLocale('zh-CN', cn)
class CustomInput extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { backgroundColor: '#fff' }
    }
    render() {
        const { value, onClick } = this.props
        let txt = dayjs(value).format('YYYY年MM月DD日')
        let style = StyleSheet.compose(styles.input, { backgroundColor: this.state.backgroundColor })
        return (
            <TouchableOpacity
                style={style}
                onPress={onClick}
                onMouseEnter={() => { this.setState({ backgroundColor: 'rgb(240,240,240)' }) }}
                onMouseLeave={() => { this.setState({ backgroundColor: 'rgb(255,255,255)' }) }}
            >
                <Text style={{ fontSize: 12 }}>{txt}</Text>
                <Svg style={{ marginLeft: 5 }} color='rgb(204,204,204)' value='arraw-down' size={10} />
            </ TouchableOpacity>
        )
    }
}
class DatePickerPlus extends React.Component {
    constructor() {
        super(...arguments)
        this.state = { value: new Date() }
    }
    static getDerivedStateFromProps(props, state) {
        const { value } = props
        return {
            value
        }
    }
    onChange(date) {
        this.props.onDateChange(date)
    }
    render() {
        const { value } = this.state
        const years = Util.range(1980, 2050, 1)
        const months = [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
        ]
        return (
            <View style={styles.main}>
                <DatePicker
                    showDisabledMonthNavigation
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                    }) => (
                            <div
                                style={{
                                    margin: 10,
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                    {"<"}
                                </button>
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) => changeYear(value)}
                                >
                                    {years.map(option => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                        changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map(option => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                    {">"}
                                </button>
                            </div>
                        )}
                    locale='zh-CN'
                    selected={value}
                    customInput={<CustomInput />}
                    onChange={this.onChange.bind(this)}
                />
            </View>
        )
    }
}
let styles = StyleSheet.create({
    main: {
    },
    input: {
        width: 130,
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgb(204,204,204)',
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default DatePickerPlus