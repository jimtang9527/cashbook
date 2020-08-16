import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Modal from './Modal'
const gStyle = {
    main: 'rgb(27,161,227)', //主色
    grey: 'rgb(144,146,156)', //灰色
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}
const gConst = {
    name: '小账本',
    version: '0.1.0'
}
export {
    React,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    gStyle,
    gConst,
    Modal
}