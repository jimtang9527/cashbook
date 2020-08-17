import {
    DeviceEventEmitter
} from 'react-native'
const tip = (level, msg) => {
    DeviceEventEmitter.emit('topMessageModal', {
        level,
        msg
    })
}
export default {
    success: (msg) => {
        tip('success', msg)
    },
    warning: (msg) => {
        tip('warning', msg)
    },
    info: (msg) => {
        tip('info', msg)
    },
    error: (msg) => {
        tip('error', msg)
    },
    remove: ({
        title,
        msg,
        attention,
        onSubmit
    }) => {
        //删除确认对话框
        DeviceEventEmitter.emit('removeMessageModal', {
            title,
            msg,
            attention,
            onSubmit
        })
    },
}