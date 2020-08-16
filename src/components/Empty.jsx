/**
 * 空记录
 * @jimtang9527
 */
import { React, View } from './Base'
import Svg, {
    G,
    Path,
    Polygon,
    Use,
    Defs,
    LinearGradient,
    Stop
} from 'react-native-svg'
class Empty extends React.Component {
    render() {
        return (
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {this.props.children}
                {this.renderSvg()}
            </View>
        )
    }
    renderSvg() {
        let { width } = this.props
        width = width || 100
        return (
            <Svg width={width} height={width} viewBox="0 0 598 510" version="1.1">
                <Defs>
                    <Polygon id="path-1" points="0 520 597.692 520 597.692 0.701 0 0.701"></Polygon>
                    <LinearGradient x1="50%" y1="31.0962091%" x2="50%" y2="100%" id="LinearGradient-3">
                        <Stop stopColor="#FFFFFF" offset="0%"></Stop>
                        <Stop stopColor="#DFDFDF" offset="100%"></Stop>
                    </LinearGradient>
                    <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LinearGradient-4">
                        <Stop stopColor="#FFFFFF" offset="0%"></Stop>
                        <Stop stopColor="#DCDCDC" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M6.605,0.685 C3.02,0.685 0.11,3.596 0.11,7.182 L0.11,7.182 L0.11,158.841 C0.11,162.425 3.02,165.337 6.605,165.337 L6.605,165.337 L225.747,165.337 C229.331,165.337 232.242,162.425 232.242,158.841 L232.242,158.841 L232.242,7.182 C232.242,3.596 229.331,0.685 225.747,0.685 L225.747,0.685 L6.605,0.685 Z" id="path-5"></Path>
                    <LinearGradient x1="50%" y1="76.93332%" x2="50%" y2="100%" id="LinearGradient-7">
                        <Stop stopColor="#EEEEEE" offset="0%"></Stop>
                        <Stop stopColor="#D8D8D8" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M6.605,0.685 C3.02,0.685 0.11,3.596 0.11,7.182 L0.11,7.182 L0.11,158.841 C0.11,162.425 3.02,165.337 6.605,165.337 L6.605,165.337 L225.747,165.337 C229.331,165.337 232.242,162.425 232.242,158.841 L232.242,158.841 L232.242,7.182 C232.242,3.596 229.331,0.685 225.747,0.685 L225.747,0.685 L6.605,0.685 Z" id="path-8"></Path>
                    <Path d="M0.867,7.39 C0.867,11.438 4.142,14.725 8.176,14.725 L8.176,14.725 C12.208,14.725 15.482,11.438 15.482,7.39 L15.482,7.39 C15.482,3.342 12.208,0.055 8.176,0.055 L8.176,0.055 C4.142,0.055 0.867,3.342 0.867,7.39" id="path-10"></Path>
                    <Polygon id="path-12" points="21.914 0.848 0.602 21.56 178.957 21.56 157.757 0.728"></Polygon>
                    <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LinearGradient-14">
                        <Stop stopColor="#FFFFFF" offset="0%"></Stop>
                        <Stop stopColor="#F8FCFF" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M8.658,1.03 L0.593,1.03 L0.593,5.147 L0.727,5.147 C1.926,7.463 11.129,9.266 22.287,9.266 L22.287,9.266 C33.448,9.266 42.65,7.463 43.849,5.147 L43.849,5.147 L43.982,5.147 L43.982,1.03 L35.919,1.03 C32.193,0.385 27.449,0 22.287,0 L22.287,0 C17.126,0 12.383,0.385 8.658,1.03" id="path-15"></Path>
                    <LinearGradient x1="0.00199151859%" y1="49.9988431%" x2="100.002664%" y2="49.9988431%" id="LinearGradient-17">
                        <Stop stopColor="#9AD0E6" offset="0%"></Stop>
                        <Stop stopColor="#D3EAEF" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M0.593,5.544 C0.593,8.1 10.314,10.178 22.287,10.178 L22.287,10.178 C34.262,10.178 43.982,8.1 43.982,5.544 L43.982,5.544 C43.982,2.987 34.262,0.911 22.287,0.911 L22.287,0.911 C10.314,0.911 0.593,2.987 0.593,5.544" id="path-18"></Path>
                    <LinearGradient x1="0.00199151859%" y1="49.9893461%" x2="100.002664%" y2="49.9893461%" id="LinearGradient-20">
                        <Stop stopColor="#FFFFFF" offset="0%"></Stop>
                        <Stop stopColor="#C2D9DD" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M1.031,56.436 C0.328,57.525 0.645,58.977 1.737,59.676 L1.737,59.676 L5.294,61.953 C6.385,62.651 7.842,62.334 8.544,61.245 L8.544,61.245 L44.301,5.764 L36.937,0.723 L1.031,56.436 Z" id="path-21"></Path>
                    <LinearGradient x1="71.7169032%" y1="4.91560182%" x2="17.9264587%" y2="115.823237%" id="LinearGradient-23">
                        <Stop stopColor="#E4EDEF" offset="0%"></Stop>
                        <Stop stopColor="#C1E2EF" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M3.175,0.441 C1.877,0.441 0.824,1.491 0.824,2.783 L0.824,2.783 L0.824,74.771 C0.824,76.065 9.754,76.065 9.754,74.771 L9.754,74.771 L9.754,2.783 C9.754,1.491 8.701,0.441 7.403,0.441 L7.403,0.441 L3.175,0.441 Z" id="path-24"></Path>
                    <LinearGradient x1="-0.00229675252%" y1="50.9116116%" x2="99.996458%" y2="50.9116116%" id="LinearGradient-26">
                        <Stop stopColor="#FFFFFF" offset="0%"></Stop>
                        <Stop stopColor="#C2D9DD" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M0.889,10.597 L1.863,15.335 C-3.894,25.887 13.936,49.027 13.936,49.027 L13.936,49.027 C14.714,49.22 15.532,49.347 16.382,49.413 L16.382,49.413 L39.864,39.279 L49.573,25.309 C49.723,24.617 49.832,23.919 49.899,23.217 L49.899,23.217 L48.12,19.604 C43.512,14.577 31.995,5.029 28.8,3.241 L28.8,3.241 C27.693,2.621 21.253,1.117 21.253,1.117 L21.253,1.117 C21.253,1.117 21.221,1.073 21.158,0.993 L21.158,0.993 C13.921,2.233 6.401,5.642 0.889,10.597" id="path-27"></Path>
                    <LinearGradient x1="-16.6099862%" y1="54.6051225%" x2="100.951694%" y2="54.6051225%" id="LinearGradient-29">
                        <Stop stopColor="#C1E2EF" offset="0%"></Stop>
                        <Stop stopColor="#E4EDEF" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M7.861,1.504 C2.317,4.102 0.887,11.722 0.887,11.722 L0.887,11.722 L2.863,21.335 C-2.894,31.887 14.936,55.027 14.936,55.027 L14.936,55.027 C27.409,58.117 49.99,44.366 50.945,28.621 L50.945,28.621 C52.563,27.336 33.998,11.591 29.8,9.241 L29.8,9.241 C28.693,8.621 22.253,7.117 22.253,7.117 L22.253,7.117 C22.253,7.117 17.467,0.688 11.461,0.688 L11.461,0.688 C10.298,0.688 9.089,0.929 7.861,1.504" id="path-30"></Path>
                    <Path d="M0.299,7.362 C1.697,10.291 5.304,11.749 8.738,10.642 L8.738,10.642 C12.452,9.446 14.565,5.703 13.458,2.289 L13.458,2.289 C13.184,1.446 12.74,0.701 12.17,0.077 L12.17,0.077 C7.477,1.851 3.555,4.437 0.299,7.362" id="path-32"></Path>
                    <LinearGradient x1="-6.04729433%" y1="39.1512365%" x2="137.073585%" y2="39.1512365%" id="LinearGradient-34">
                        <Stop stopColor="#F6DD70" offset="0%"></Stop>
                        <Stop stopColor="#FFF7ED" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M7.861,1.504 C2.317,4.102 0.887,11.722 0.887,11.722 L0.887,11.722 L2.863,21.335 C2.863,21.335 6.071,7.34 25.8,8.169 L25.8,8.169 L25.712,7.972 C23.926,7.507 22.253,7.117 22.253,7.117 L22.253,7.117 C22.253,7.117 17.466,0.688 11.461,0.688 L11.461,0.688 C10.298,0.688 9.089,0.929 7.861,1.504" id="path-35"></Path>
                    <LinearGradient x1="-48.7746819%" y1="74.66388%" x2="109.881491%" y2="74.66388%" id="LinearGradient-37">
                        <Stop stopColor="#C1E2EF" offset="0%"></Stop>
                        <Stop stopColor="#E4EDEF" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M39.78,0.536 C26.32,4.883 13.188,4.632 0.293,1.079 L0.293,1.079 L7.406,32.837 C16.266,35.856 25.134,35.961 34.009,32.805 L34.009,32.805 L39.783,0.536 L39.78,0.536 Z" id="path-38"></Path>
                    <LinearGradient x1="7.31830843e-05%" y1="49.9998331%" x2="100.001993%" y2="49.9998331%" id="LinearGradient-40">
                        <Stop stopColor="#FAD5C6" offset="0%"></Stop>
                        <Stop stopColor="#FCE8DF" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M11.204,11.121 C18.149,28.371 32.904,51.905 39.984,42.31 L39.984,42.31 C36.988,22.269 15.107,4.62 0.217,0.9 L0.217,0.9 C-0.219,1.325 7.829,2.74 11.204,11.121" id="path-41"></Path>
                    <LinearGradient x1="18.0861802%" y1="55.8822305%" x2="82.5489268%" y2="42.4652321%" id="LinearGradient-43">
                        <Stop stopColor="#FFFFFF" offset="0%"></Stop>
                        <Stop stopColor="#2FA8B3" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M0.572,0.627 C0.842,0.747 1.145,0.884 1.472,1.043 L1.472,1.043 C18.189,7.348 29.254,21.137 38.308,41.702 L38.308,41.702 C38.323,41.737 38.365,41.755 38.401,41.738 L38.401,41.738 C38.437,41.722 38.453,41.681 38.437,41.645 L38.437,41.645 C29.21,20.686 17.893,6.758 0.659,0.592 L0.659,0.592 C0.652,0.589 0.644,0.589 0.635,0.589 L0.635,0.589 C0.609,0.589 0.583,0.603 0.572,0.627" id="path-44"></Path>
                    <LinearGradient x1="14.3474712%" y1="57.8261141%" x2="80.1547462%" y2="44.2543669%" id="LinearGradient-46">
                        <Stop stopColor="#E0F1F6" offset="0%"></Stop>
                        <Stop stopColor="#2796A0" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M16.107,84.429 C17.574,95.94 22.859,100.264 27.608,87.399 L27.608,87.399 C29.821,59.227 28.541,26.939 0.902,0.439 L0.902,0.439 C18.717,26.246 17.674,58.192 16.107,84.429" id="path-47"></Path>
                    <LinearGradient x1="46.8859251%" y1="52.3834125%" x2="53.3971649%" y2="45.1239747%" id="LinearGradient-49">
                        <Stop stopColor="#FFFFFF" offset="0%"></Stop>
                        <Stop stopColor="#5FBBC5" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M11.995,13.69 C3.994,28.98 -4.877,52.751 3.81,50.285 L3.81,50.285 C15.07,35.321 17.534,11.524 14.075,0.838 L14.075,0.838 C13.643,0.879 15.882,6.26 11.995,13.69" id="path-50"></Path>
                    <LinearGradient x1="45.571268%" y1="37.7542091%" x2="55.2403232%" y2="64.2171753%" id="LinearGradient-52">
                        <Stop stopColor="#FFFFFF" offset="0%"></Stop>
                        <Stop stopColor="#2FA8B3" offset="100%"></Stop>
                    </LinearGradient>
                    <Path d="M11.149,0.069 C11.18,0.3 11.213,0.561 11.242,0.852 L11.242,0.852 C13.803,14.261 9.54,29.521 0.305,48.173 L0.305,48.173 C0.288,48.204 0.295,48.239 0.318,48.249 L0.318,48.249 C0.342,48.258 0.374,48.239 0.39,48.206 L0.39,48.206 C9.805,29.194 14.056,13.698 11.204,0.093 L11.204,0.093 C11.199,0.074 11.187,0.063 11.169,0.063 L11.169,0.063 C11.163,0.063 11.156,0.065 11.149,0.069" id="path-53"></Path>
                    <LinearGradient x1="45.6334049%" y1="36.1865074%" x2="53.1719999%" y2="62.1875052%" id="LinearGradient-55">
                        <Stop stopColor="#E0F1F6" offset="0%"></Stop>
                        <Stop stopColor="#2796A0" offset="100%"></Stop>
                    </LinearGradient>
                </Defs>
                <G id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <G id="办公圆桌" transform="translate(0.000000, -11.000000)">
                        <Polygon id="Fill-1" fill="#D5ECF6" points="109.708 499.406 124.463 499.406 124.463 241.018 109.708 241.018"></Polygon>
                        <Polygon id="Fill-2" fill="#D5ECF6" points="503.889 496.255 518.644 496.255 518.644 237.866 503.889 237.866"></Polygon>
                        <Polygon id="Fill-3" fill="#D5ECF6" points="293.336 455.816 308.092 455.816 308.092 197.428 293.336 197.428"></Polygon>
                        <G id="编组" transform="translate(0.000000, 0.299000)">
                            <Path d="M73.225,221.8127 C115.928,210.0577 212.046,201.8557 323.662,201.8557 C435.278,201.8557 531.397,210.0577 574.099,221.8127 L597.692,221.8127 L597.692,234.4167 L597.56,234.4167 C597.647,234.7677 597.692,235.1167 597.692,235.4667 C597.692,254.0177 474.904,269.0787 323.662,269.0787 C172.421,269.0787 49.633,254.0177 49.633,235.4667 C49.633,235.1167 49.677,234.7677 49.765,234.4167 L49.633,234.4167 L49.633,221.8127 L73.225,221.8127 Z" id="Fill-4" fill="#D0E2F4"></Path>
                            <Path d="M323.6625,189.2517 C474.9035,189.2517 597.6915,204.3127 597.6915,222.8627 C597.6915,241.4137 474.9035,256.4747 323.6625,256.4747 C172.4205,256.4747 49.6325,241.4137 49.6325,222.8627 C49.6325,204.3127 172.4205,189.2517 323.6625,189.2517" id="Fill-6" fill="#EAF5FC"></Path>
                            <mask id="mask-2" fill="white">
                                <Use href="#path-1"></Use>
                            </mask>
                            <G id="Clip-9"></G>
                            <Polygon id="Fill-8" fill="#D1D5E7" mask="url(#mask-2)" points="114.991 445.667 123.107 445.667 123.107 369.378 114.991 369.378"></Polygon>
                            <Path d="M119.0497,494.5705 L85.9107,516.4295 C84.9857,517.0395 84.7487,518.2575 85.3827,519.1485 C85.7597,519.6805 86.3867,520.0005 87.0567,520.0005 L151.0417,520.0005 C152.1627,520.0005 153.0707,519.1245 153.0707,518.0445 C153.0707,517.3975 152.7397,516.7945 152.1877,516.4295 L119.0497,494.5705 Z" id="Fill-10" fill="#DBDEED" mask="url(#mask-2)"></Path>
                            <Path d="M119.0497,420.2375 C114.5677,420.2375 110.9327,423.7415 110.9327,428.0615 L110.9327,500.4385 L127.1657,500.4385 L127.1657,428.0615 C127.1657,423.7415 123.5317,420.2375 119.0497,420.2375" id="Fill-11" fill="#DBDEED" mask="url(#mask-2)"></Path>
                            <Path d="M22.3192,203.1082 L114.0822,201.227309 C128.9342,200.9652 144.9882,228.4062 143.7672,240.6752 L156.1682,298.4162 L235.9652,305.6462 C258.0232,315.4692 249.9332,353.3302 244.0402,374.1572 C241.0292,383.4582 230.0522,391.8712 206.6612,398.9012 L63.3722,340.0362 L22.3192,203.1082 Z" id="Fill-12" fill="#DBDEED" mask="url(#mask-2)"></Path>
                            <Path d="M67.0599,321.9856 C71.9649,332.6436 185.8329,322.0126 211.6379,334.0546 C226.1599,341.9936 226.1599,392.8526 211.6379,396.6656 C199.9399,402.6066 79.3589,404.4576 58.4759,394.7086 C46.1229,376.1066 13.6409,301.5376 0.1009,216.0486 C-1.8021,204.0346 23.8299,198.3156 30.1149,208.0256 C49.1129,259.7806 49.4479,277.3986 67.0599,321.9856" id="Fill-13" fill="#F0F2F9" mask="url(#mask-2)"></Path>
                        </G>
                        <Polygon id="Fill-14" fill="url(#LinearGradient-3)" points="317.038 202.631 351.313 202.631 351.313 159.106 317.038 159.106"></Polygon>
                        <Polygon id="Fill-16" fill="url(#LinearGradient-4)" points="288.13 208.056 380.223 208.056 380.223 201.769 288.13 201.769"></Polygon>
                        <G id="编组" transform="translate(218.000000, 11.299000)">
                            <G>
                                <mask id="mask-6" fill="white">
                                    <Use href="#path-5"></Use>
                                </mask>
                                <G id="Clip-19"></G>
                                <Path d="M6.605,0.685 C3.02,0.685 0.11,3.596 0.11,7.182 L0.11,7.182 L0.11,158.841 C0.11,162.425 3.02,165.337 6.605,165.337 L6.605,165.337 L225.747,165.337 C229.331,165.337 232.242,162.425 232.242,158.841 L232.242,158.841 L232.242,7.182 C232.242,3.596 229.331,0.685 225.747,0.685 L225.747,0.685 L6.605,0.685 Z" id="Fill-18" mask="url(#mask-6)"></Path>
                            </G>
                            <mask id="mask-9" fill="white">
                                <Use href="#path-8"></Use>
                            </mask>
                            <Use id="Clip-21" fill="url(#LinearGradient-7)" href="#path-8"></Use>
                            <Polygon id="Fill-20" fill="#8A9CAC" mask="url(#mask-9)" points="-14.211 129.486 257.003 129.486 257.003 -10.299 -14.211 -10.299"></Polygon>
                            <Polygon id="Fill-22" fill="#FFFFFF" mask="url(#mask-9)" points="11.155 120.685 219.73 120.685 219.73 12.807 11.155 12.807"></Polygon>
                        </G>
                        <G id="编组" transform="translate(326.000000, 149.299000)">
                            <mask id="mask-11" fill="white">
                                <Use href="#path-10"></Use>
                            </mask>
                            <G id="Clip-24"></G>
                            <Path d="M0.867,7.39 C0.867,11.438 4.142,14.725 8.176,14.725 L8.176,14.725 C12.208,14.725 15.482,11.438 15.482,7.39 L15.482,7.39 C15.482,3.342 12.208,0.055 8.176,0.055 L8.176,0.055 C4.142,0.055 0.867,3.342 0.867,7.39" id="Fill-23" mask="url(#mask-11)"></Path>
                        </G>
                        <G id="编组" transform="translate(246.000000, 211.299000)">
                            <mask id="mask-13" fill="white">
                                <Use href="#path-12"></Use>
                            </mask>
                            <Use id="Clip-26" fill="#D8D8D8" href="#path-12"></Use>
                            <Polygon id="Fill-25" fill="url(#LinearGradient-14)" mask="url(#mask-13)" points="21.914 0.848 0.602 21.56 178.957 21.56 157.757 0.728"></Polygon>
                        </G>
                        <G id="编组" transform="translate(185.000000, 222.299000)">
                            <mask id="mask-16" fill="white">
                                <Use href="#path-15"></Use>
                            </mask>
                            <G id="Clip-28"></G>
                            <Path d="M8.658,1.03 L0.593,1.03 L0.593,5.147 L0.727,5.147 C1.926,7.463 11.129,9.266 22.287,9.266 L22.287,9.266 C33.448,9.266 42.65,7.463 43.849,5.147 L43.849,5.147 L43.982,5.147 L43.982,1.03 L35.919,1.03 C32.193,0.385 27.449,0 22.287,0 L22.287,0 C17.126,0 12.383,0.385 8.658,1.03" id="Fill-27" fill="url(#LinearGradient-17)" mask="url(#mask-16)"></Path>
                        </G>
                        <G id="编组" transform="translate(185.000000, 218.299000)">
                            <mask id="mask-19" fill="white">
                                <Use href="#path-18"></Use>
                            </mask>
                            <G id="Clip-30"></G>
                            <Path d="M0.593,5.544 C0.593,8.1 10.314,10.178 22.287,10.178 L22.287,10.178 C34.262,10.178 43.982,8.1 43.982,5.544 L43.982,5.544 C43.982,2.987 34.262,0.911 22.287,0.911 L22.287,0.911 C10.314,0.911 0.593,2.987 0.593,5.544" id="Fill-29" fill="url(#LinearGradient-20)" mask="url(#mask-19)"></Path>
                        </G>
                        <G id="编组" transform="translate(200.000000, 93.299000)">
                            <mask id="mask-22" fill="white">
                                <Use href="#path-21"></Use>
                            </mask>
                            <G id="Clip-32"></G>
                            <Path d="M1.031,56.436 C0.328,57.525 0.645,58.977 1.737,59.676 L1.737,59.676 L5.294,61.953 C6.385,62.651 7.842,62.334 8.544,61.245 L8.544,61.245 L44.301,5.764 L36.937,0.723 L1.031,56.436 Z" id="Fill-31" fill="url(#LinearGradient-23)" mask="url(#mask-22)"></Path>
                        </G>
                        <G id="编组" transform="translate(200.000000, 148.299000)">
                            <mask id="mask-25" fill="white">
                                <Use href="#path-24"></Use>
                            </mask>
                            <G id="Clip-34"></G>
                            <Path d="M3.175,0.441 C1.877,0.441 0.824,1.491 0.824,2.783 L0.824,2.783 L0.824,74.771 C0.824,76.065 9.754,76.065 9.754,74.771 L9.754,74.771 L9.754,2.783 C9.754,1.491 8.701,0.441 7.403,0.441 L7.403,0.441 L3.175,0.441 Z" id="Fill-33" fill="url(#LinearGradient-26)" mask="url(#mask-25)"></Path>
                        </G>
                        <G id="编组" transform="translate(235.000000, 90.299000)">
                            <mask id="mask-28" fill="white">
                                <Use href="#path-27"></Use>
                            </mask>
                            <G id="Clip-36"></G>
                            <Path d="M0.889,10.597 L1.863,15.335 C-3.894,25.887 13.936,49.027 13.936,49.027 L13.936,49.027 C14.714,49.22 15.532,49.347 16.382,49.413 L16.382,49.413 L39.864,39.279 L49.573,25.309 C49.723,24.617 49.832,23.919 49.899,23.217 L49.899,23.217 L48.12,19.604 C43.512,14.577 31.995,5.029 28.8,3.241 L28.8,3.241 C27.693,2.621 21.253,1.117 21.253,1.117 L21.253,1.117 C21.253,1.117 21.221,1.073 21.158,0.993 L21.158,0.993 C13.921,2.233 6.401,5.642 0.889,10.597" id="Fill-35" fill="url(#LinearGradient-29)" mask="url(#mask-28)"></Path>
                        </G>
                        <G id="编组" transform="translate(234.000000, 84.299000)">
                            <mask id="mask-31" fill="white">
                                <Use href="#path-30"></Use>
                            </mask>
                            <G id="Clip-38"></G>
                            <Path d="M9.0297,61.4856 C9.0297,61.4856 17.8347,27.4636 50.9457,28.6216 C88.1667,29.9226 16.3847,75.9586 9.0297,61.4856" id="Fill-37" fill="#FFFFFF" mask="url(#mask-31)"></Path>
                        </G>
                        <G id="编组" transform="translate(257.000000, 115.299000)">
                            <mask id="mask-33" fill="white">
                                <Use href="#path-32"></Use>
                            </mask>
                            <G id="Clip-40"></G>
                            <Path d="M0.299,7.362 C1.697,10.291 5.304,11.749 8.738,10.642 L8.738,10.642 C12.452,9.446 14.565,5.703 13.458,2.289 L13.458,2.289 C13.184,1.446 12.74,0.701 12.17,0.077 L12.17,0.077 C7.477,1.851 3.555,4.437 0.299,7.362" id="Fill-39" fill="url(#LinearGradient-34)" mask="url(#mask-33)"></Path>
                        </G>
                        <G id="编组" transform="translate(234.000000, 84.299000)">
                            <mask id="mask-36" fill="white">
                                <Use href="#path-35"></Use>
                            </mask>
                            <G id="Clip-42"></G>
                            <Path d="M7.861,1.504 C2.317,4.102 0.887,11.722 0.887,11.722 L0.887,11.722 L2.863,21.335 C2.863,21.335 6.071,7.34 25.8,8.169 L25.8,8.169 L25.712,7.972 C23.926,7.507 22.253,7.117 22.253,7.117 L22.253,7.117 C22.253,7.117 17.466,0.688 11.461,0.688 L11.461,0.688 C10.298,0.688 9.089,0.929 7.861,1.504" id="Fill-41" fill="url(#LinearGradient-37)" mask="url(#mask-36)"></Path>
                        </G>
                        <G id="编组" transform="translate(133.000000, 183.299000)">
                            <mask id="mask-39" fill="white">
                                <Use href="#path-38"></Use>
                            </mask>
                            <G id="Clip-44"></G>
                            <Path d="M39.78,0.536 C26.32,4.883 13.188,4.632 0.293,1.079 L0.293,1.079 L7.406,32.837 C16.266,35.856 25.134,35.961 34.009,32.805 L34.009,32.805 L39.783,0.536 L39.78,0.536 Z" id="Fill-43" fill="url(#LinearGradient-40)" mask="url(#mask-39)"></Path>
                        </G>
                        <Path d="M153.3124,181.6601 C164.0824,181.6601 172.8274,182.9001 172.8274,184.4281 C172.8274,185.9561 164.0824,187.1961 153.3124,187.1961 C142.5414,187.1961 133.7964,185.9561 133.7964,184.4281 C133.7964,182.9001 142.5414,181.6601 153.3124,181.6601" id="Fill-45" fill="#F3A789"></Path>
                        <G id="编组" transform="translate(116.000000, 142.299000)">
                            <mask id="mask-42" fill="white">
                                <Use href="#path-41"></Use>
                            </mask>
                            <G id="Clip-48"></G>
                            <Path d="M11.204,11.121 C18.149,28.371 32.904,51.905 39.984,42.31 L39.984,42.31 C36.988,22.269 15.107,4.62 0.217,0.9 L0.217,0.9 C-0.219,1.325 7.829,2.74 11.204,11.121" id="Fill-47" fill="url(#LinearGradient-43)" mask="url(#mask-42)"></Path>
                        </G>
                        <G id="编组" transform="translate(117.000000, 143.299000)">
                            <mask id="mask-45" fill="white">
                                <Use href="#path-44"></Use>
                            </mask>
                            <G id="Clip-50"></G>
                            <Path d="M0.572,0.627 C0.842,0.747 1.145,0.884 1.472,1.043 L1.472,1.043 C18.189,7.348 29.254,21.137 38.308,41.702 L38.308,41.702 C38.323,41.737 38.365,41.755 38.401,41.738 L38.401,41.738 C38.437,41.722 38.453,41.681 38.437,41.645 L38.437,41.645 C29.21,20.686 17.893,6.758 0.659,0.592 L0.659,0.592 C0.652,0.589 0.644,0.589 0.635,0.589 L0.635,0.589 C0.609,0.589 0.583,0.603 0.572,0.627" id="Fill-49" fill="url(#LinearGradient-46)" mask="url(#mask-45)"></Path>
                        </G>
                        <G id="编组" transform="translate(133.000000, 91.299000)">
                            <mask id="mask-48" fill="white">
                                <Use href="#path-47"></Use>
                            </mask>
                            <G id="Clip-52"></G>
                            <Path d="M16.107,84.429 C17.574,95.94 22.859,100.264 27.608,87.399 L27.608,87.399 C29.821,59.227 28.541,26.939 0.902,0.439 L0.902,0.439 C18.717,26.246 17.674,58.192 16.107,84.429" id="Fill-51" fill="url(#LinearGradient-49)" mask="url(#mask-48)"></Path>
                        </G>
                        <G id="编组" transform="translate(154.000000, 136.299000)">
                            <mask id="mask-51" fill="white">
                                <Use href="#path-50"></Use>
                            </mask>
                            <G id="Clip-54"></G>
                            <Path d="M11.995,13.69 C3.994,28.98 -4.877,52.751 3.81,50.285 L3.81,50.285 C15.07,35.321 17.534,11.524 14.075,0.838 L14.075,0.838 C13.643,0.879 15.882,6.26 11.995,13.69" id="Fill-53" fill="url(#LinearGradient-52)" mask="url(#mask-51)"></Path>
                        </G>
                        <G id="编组" transform="translate(157.000000, 138.299000)">
                            <mask id="mask-54" fill="white">
                                <Use href="#path-53"></Use>
                            </mask>
                            <G id="Clip-56"></G>
                            <Path d="M11.149,0.069 C11.18,0.3 11.213,0.561 11.242,0.852 L11.242,0.852 C13.803,14.261 9.54,29.521 0.305,48.173 L0.305,48.173 C0.288,48.204 0.295,48.239 0.318,48.249 L0.318,48.249 C0.342,48.258 0.374,48.239 0.39,48.206 L0.39,48.206 C9.805,29.194 14.056,13.698 11.204,0.093 L11.204,0.093 C11.199,0.074 11.187,0.063 11.169,0.063 L11.169,0.063 C11.163,0.063 11.156,0.065 11.149,0.069" id="Fill-55" fill="url(#LinearGradient-55)" mask="url(#mask-54)"></Path>
                        </G>
                    </G>
                </G>
            </Svg >
        )
    }
}
export default Empty