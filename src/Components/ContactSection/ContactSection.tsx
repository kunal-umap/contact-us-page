import { useEffect, useState } from 'react';
import StyleContact from './ContactSection.module.css'
import { Button, Form, Input, message } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function ContactSection() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState<boolean>(false);

    // To disable submit button at the beginning.
    useEffect(() => {
        setClientReady(true);
    }, []);

    const onFinish = (values: any) => {
        messageApi.open({
            type: 'success',
            content: 'Sucessfully Submited, Wait we will get back to you soon!.',
          });
          form.resetFields();
        console.log('Finish:', values);
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    return (
        <section className={StyleContact.ContactForm}>
            {contextHolder}
            <div className={StyleContact.FormText} >
                <h2 className={StyleContact.FormHead} >Got any questions?</h2>
                <p className={StyleContact.FormDiscription} >Let’s discuss it over a cup of coffee.</p>
            </div>
            <Form
                className={StyleContact.ContForm}
                form={form}
                name="horizontal_login"
                layout="inline"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <div className={StyleContact.FlexBox}>
                    <Form.Item
                        className={StyleContact.InputContainer}
                        name="Name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                    >
                        <Input className={StyleContact.InputeBox} placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        className={StyleContact.InputContainer}
                        name="Orginization Name"
                        rules={[{ required: true, message: 'Please input your Orginization Name!' }]}
                    >
                        <Input className={StyleContact.InputeBox} placeholder="Orginization Name" />
                    </Form.Item>
                </div>
                <div className={StyleContact.FlexBox}>
                    <Form.Item
                        className={StyleContact.InputContainer}
                        // name="Email" 
                        name="Email ID"
                        rules={[{ type: 'email' }]}>
                        <Input className={StyleContact.InputeBox} placeholder="Email ID" />
                    </Form.Item>
                    <Form.Item
                        className={StyleContact.InputContainer}
                        name="Number"
                        rules={[{ required: true, message: 'Please input your Phone Number!' },
                        {
                            pattern: /^[0-9]{10}$/,
                            message: 'Please enter a valid 10-digit phone number!',
                        },
                        ]}
                    >
                        <Input
                            className={StyleContact.InputeBox}
                            type="number"
                            placeholder="Contact Number"
                        />
                    </Form.Item>
                </div>
                <div className={StyleContact.FlexBox}>
                    <Form.Item
                        className={StyleContact.InputContainer}
                        name="Message"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.TextArea
                            className={StyleContact.InputeBox}
                            placeholder="Message"
                            rows={4}
                        />
                    </Form.Item>
                    <Form.Item shouldUpdate className={StyleContact.SubmitBtn} >
                        {() => (
                            <Button
                                type="primary"
                                className={StyleContact.Btn}
                                htmlType="submit"
                                disabled={
                                    !clientReady ||
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                Submit <ArrowRightOutlined />
                            </Button>
                        )}
                    </Form.Item>
                </div>
            </Form>
        </section>
    )
}
