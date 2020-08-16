import dayjs from 'dayjs'
import numeral from 'numeral'

class Util {
    //解析csv内容为JSON对象
    csv2Json(csvContent, types) {
        let data = []
        let lines = csvContent.split('\n')
        let columns = lines[0].split(',')
        for (let i = 1; i < lines.length; i++) {
            let line = lines[i]
            let items = line.split(',')
            let json = {}
            for (let j = 0; j < columns.length; j++) {
                let type = types[j]
                let key = columns[j]
                let value = items[j].trim()
                if (type === 'int32') {
                    value = parseInt(value)
                } else if (type === 'int64') {
                    value = parseFloat(value)
                } else if (type === 'float') {
                    value = parseFloat(value)
                }
                json[key] = value
            }
            data.push(json)
        }
        return data
    }
    //格式化时间
    formatTime(t) {
        return dayjs(t).format('YYYY-MM-DD HH:mm')
    }
    //格式化money
    formatMoney(value) {
        let number = numeral(value)
        let str = number.format('0,0.00')
        return `￥${str}`
    }
    range(start, end, step) {
        let data = []
        for (let i = start; i < end; i += step) {
            data.push(i)
        }
        return data
    }
}
export default new Util()