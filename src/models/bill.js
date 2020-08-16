/**
 * 账单的modal
 * oriData:原始csv导出为json列表
 * bills:分页数据
 * data:当前页数据
 * count:bills长度
 * @jimtang9527
 */
import {
    Util
} from '~/lib/'
import dayjs from 'dayjs'
export default {
    namespace: 'bill',
    state: {
        oriData: [],
        bills: [],
        data: [],
        count: 0
    },
    effects: {
        //列表
        * list({
            payload
        }, {
            call,
            put,
            select
        }) {
            const stateBill = yield select(state => state.bill)
            let {
                oriData
            } = stateBill
            if (oriData.length === 0) {
                //第一次通过csv文件导入
                let csvContent = `type,time,category,amount
            0,1561910400000,8s0p77c323,5400
            0,1561910400000,0fnhbcle6hg,1500
            0,1563897600000,3tqndrjqgrg,3900
            0,1564502400000,bsn20th0k2o,1900
            0,1564588800000,8s0p77c323,5400
            0,1564588800000,0fnhbcle6hg,1500
            0,1564588800000,3tqndrjqgrg,5000
            0,1566316800000,bsn20th0k2o,2000
            0,1567267200000,8s0p77c323,5400
            0,1567267200000,0fnhbcle6hg,1500
            0,1569772800000,1bcddudhmh,3000
            0,1569772800000,bsn20th0k2o,1500
            0,1569772800000,3tqndrjqgrg,5000
            0,1569859200000,0fnhbcle6hg,1500
            0,1572364800000,odrjk823mj8,3000
            0,1572451200000,3tqndrjqgrg,4600
            0,1572451200000,3tqndrjqgrg,3800
            0,1572537600000,0fnhbcle6hg,1500
            0,1574179200000,odrjk823mj8,2000
            0,1574870400000,1bcddudhmh,3000
            0,1574956800000,8s0p77c323,5400
            0,1575043200000,3tqndrjqgrg,5000
            0,1575129600000,0fnhbcle6hg,1500
            0,1577289600000,3tqndrjqgrg,4000
            0,1577345333184,odrjk823mj8,2000
            0,1577345367638,1bcddudhmh,3000
            0,1577345378418,j1h1nohhmmo,800
            0,1577345504140,bsn20th0k2o,1000
            0,1577345517217,hc5g66kviq,2000
            0,1577345576917,8s0p77c323,5400
            0,1577345590283,1bcddudhmh,3000
            0,1577345789527,3tqndrjqgrg,3900
            0,1577548800000,8s0p77c323,5400
            1,1561910400000,s73ijpispio,30000
            1,1564502400000,5il79e11628,1000
            1,1567094400000,1vjj47vpd28,-3000
            1,1567180800000,s73ijpispio,28000
            1,1569772800000,s73ijpispio,28000
            1,1569772800000,1vjj47vpd28,2000
            1,1572451200000,s73ijpispio,20000
            1,1577345267529,s73ijpispio,30000
            1,1577345303191,1vjj47vpd28,-10000
            1,1577345317187,5il79e11628,1000
            1,1577345463930,s73ijpispio,3000
            1,1577345477581,5il79e11628,2000
            1,1577345638784,1vjj47vpd28,2000`
                oriData = Util.csv2Json(csvContent, ['int32', 'int64', 'string', 'float'])
                yield put({
                    type: 'saveOriData',
                    payload: oriData
                })
            }
            let bills = oriData
            let {
                page,
                pageSize,
                month,
                categoryId,
                type
            } = payload
            //通过时间过滤
            if (typeof (month) !== 'undefined' && month !== -1) {
                let startDate = new Date(`2019-${month}-1 00:00:00`)
                let nextMonth = dayjs(startDate).add(1, 'month').format('YYYY-MM-DD 23:59:59')
                let endDate = new Date(dayjs(nextMonth).subtract(24, 'hour'))
                let filters = []
                for (let i = 0; i < bills.length; i++) {
                    let item = bills[i]
                    let t = item['time']
                    if (t >= startDate.getTime() && t <= endDate.getTime()) {
                        filters.push(item)
                    }
                }
                bills = filters
            }
            //通过类型过滤
            if (typeof (type) !== 'undefined' && type !== -1) {
                let filters = []
                for (let i = 0; i < bills.length; i++) {
                    let item = bills[i]
                    if (item.type === type) {
                        filters.push(item)
                    }
                }
                bills = filters
            }
            //通过分类过滤
            if (categoryId && categoryId !== -1) {
                let filters = []
                for (let i = 0; i < bills.length; i++) {
                    let item = bills[i]
                    if (item.category === categoryId) {
                        filters.push(item)
                    }
                }
                bills = filters
            }
            //排序
            bills = bills.sort((a, b) => {
                return a.time > b.time ? -1 : 1
            })
            //分页
            let count = bills.length
            let endPos = page * pageSize
            endPos = count > endPos ? endPos : count
            let data = bills.slice((page - 1) * pageSize, endPos)
            yield put({
                type: 'saveList',
                payload: {
                    bills,
                    data,
                    count
                }
            })
        },
        //新建
        * create({
            payload
        }, {
            call,
            put,
            select
        }) {
            const stateBill = yield select(state => state.bill)
            let {
                oriData
            } = stateBill
            oriData.push(payload)
            yield put({
                type: 'saveOriData',
                payload: oriData
            })
        },
    },
    reducers: {
        //保存列表
        saveList(state, action) {
            const {
                bills,
                data,
                count
            } = action.payload
            return {
                ...state,
                bills: JSON.parse(JSON.stringify(bills)),
                data: JSON.parse(JSON.stringify(data)),
                count
            }
        },
        saveOriData(state, action) {
            return {
                ...state,
                oriData: action.payload
            }
        }
    }
}