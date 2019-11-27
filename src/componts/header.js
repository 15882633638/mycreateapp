import React from 'react';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';
import { ConfigProvider, DatePicker, message } from 'antd';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            name: '这是header组件',
            date: null
        }
    }
    href() {
        // console.log(this.props)
        // const {history} = this.props;
        // history.push('/home')
    }
    handleChange = date => {
        message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
        this.setState({ date });
    };
    render() {
        const { date } = this.state
        return (
            <div onClick={this.href.bind(this)}>
                {/* <h1>{this.state.name}</h1>
                {this.props.content} */}
                <ConfigProvider locale={zhCN}>
                    <div style={{ width: 400 }}>
                        <DatePicker onChange={this.handleChange} />
                        <div style={{ marginTop: 20 }}>
                            当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
                        </div>
                    </div>
                </ConfigProvider>
            </div>
        )
    }
}
export default Header