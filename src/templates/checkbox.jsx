import React from 'react'
import Checkbox from 'components/checkbox'
const CheckboxGroup = Checkbox.CheckboxGroup;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
const defaultCheckedList = ['Apple', 'Orange'];

export default class CheckboxView extends React.Component {
  constructor() {
    super();
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false
    }
  }
  onChangeBasic = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length
    })
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked
    })
  }
  onChangeGroup = (checkedValues) => {
    console.log('checked =', checkedValues);
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>通用多选框</h1>
        <Checkbox onChange={this.onChangeBasic}>
          Checkbox
        </Checkbox>
        <h1 className='h1'>多选框全选</h1>
        <div>
          <Checkbox indeterminate={this.state.indeterminate} checked={this.state.checkAll} onChange={this.onCheckAllChange}>
            Check All
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
        <h1 className='h1'>多选框组</h1>
        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChangeGroup} />
        <br />
        <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChangeGroup} />
        <br />
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Pear']} onChange={this.onChangeGroup} />
        <h1 className='h1'>多选框不可用</h1>
        <Checkbox defaultChecked={false} disabled >hh</Checkbox>
        <Checkbox defaultChecked disabled >aa</Checkbox>
      </div>
    )
  }
}
