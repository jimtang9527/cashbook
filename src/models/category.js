/**
 * 分类的modal
 * data:原始csv导出为json列表
 * @jimtang9527
 */
import {
    Util
} from '~/lib/'
export default {
    namespace: 'category',
    state: {
        data: []
    },
    effects: {
        //列表
        * list({
            payload
        }, {
            call,
            put
        }) {
            let csvContent = `id,type,name
            1bcddudhmh,0,车贷
            hc5g66kviq,0,车辆保养
            8s0p77c323,0,房贷
            0fnhbcle6hg,0,房屋租赁
            odrjk823mj8,0,家庭用品
            bsn20th0k2o,0,交通
            j1h1nohhmmo,0,旅游
            3tqndrjqgrg,0,日常饮食
            s73ijpispio,1,工资
            1vjj47vpd28,1,股票投资
            5il79e11628,1,基金投资`
            let data = Util.csv2Json(csvContent, ['string', 'int32', 'string'])
            data.unshift({
                id: -1,
                type: 0,
                name: '全部'
            })
            yield put({
                type: 'saveList',
                payload: data
            })
        }
    },
    reducers: {
        //保存列表
        saveList(state, action) {
            return {
                ...state,
                data: action.payload || []
            }
        }
    }
}