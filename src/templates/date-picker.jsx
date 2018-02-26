import React from 'react';
import DatePicker from 'components/date-picker/index';
const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;

export default class DatePickerView extends React.Component {
  onChange = (value, dateString) => {
    console.log(value, dateString);
  }

  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>
         基本日历
        </h1>
        <MonthPicker onChange={this.onChange} />
        <h1 className='h1'>
         基本日历
        </h1>
        <RangePicker style={{ width: 230 }} />
        <h1 className='h1'>
         基本日历
        </h1>
        <DatePicker defaultValue='2015-06-06' disabled />
      </div>
    )
  }
}

