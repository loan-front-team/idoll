import React from 'react'
import message from 'components/message';
import Button from 'components/button';
import Upload from 'components/upload'

const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功。`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败。`);
    }
  },
};

const props1 = {
  action: '/upload.do',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file);
      console.log(info.fileList);
    }
  },
  defaultFileList: [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }],
};

const Uploader = () => (
  <div id='main-container'>
    <h1 className='h1'>基础上传</h1>
    <Upload {...props}>
      <Button type='ghost' icon='plus'>
        点击上传
      </Button>
    </Upload>
    <br />
    <h1 className='h1'>传入已上传的文件</h1>
    <Upload {...props1}>
      <Button type='ghost' icon='plus'>
        点击上传
      </Button>
    </Upload>
    <br />
    <h1 className='h1'>上传</h1>
  </div>
)

export default Uploader;
