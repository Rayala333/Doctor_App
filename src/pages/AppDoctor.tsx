
import React from 'react'

import Layout from '../components/Layout';
import { Button, Col, Form, Input, Row,TimePicker  } from 'antd';

import CounterState from '../type/types';



const AppDoctor = () => {
    const onSubmit = (values:CounterState)=>{
            console.log(values)
    }
  return (
    <Layout >
            <h1 className='page-title'>Apply Doctor Account</h1><hr></hr>
            <Form layout='vertical' onFinish={onSubmit}>
                <h1 className="card-title mb-2">Personal Information </h1>
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Fist Name" name='fistName' rules={[{required:true}]}>
                            <Input placeholder='Fist Name' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Last Name" name='lastName' rules={[{required:true}]}>
                            <Input placeholder='Last Name' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Phone Number" name='phoneNumber' rules={[{required:true}]}>
                            <Input placeholder='Phone Number' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="WebSite" name='webSite' rules={[{required:true}]}>
                            <Input placeholder='WebSite' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Address" name='address' rules={[{required:true}]}>
                            <Input placeholder='Address' />
                        </Form.Item>
                    </Col>
                </Row>
                <hr/>
                <h1 className="card-title mb-2">Professional Information </h1>
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Specialization" name='specialization' rules={[{required:true}]}>
                            <Input placeholder='Specialization' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Experience" name='experience' rules={[{required:true}]}>
                            <Input placeholder='Experience' type='number' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Free Per Cunsultation" name='freePerCunsultation' rules={[{required:true}]}>
                            <Input placeholder='Free Per Cunsultation' type='number' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required label="Timings" name='timings' rules={[{required:true}]}>
                            <TimePicker.RangePicker  />
                        </Form.Item>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button className='primary-button'htmlType='submit' >Submit</Button>
                </div>
            </Form>
    </Layout>
  )
}

export default AppDoctor