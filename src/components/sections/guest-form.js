'use client';
import React, {useRef, useState} from 'react';
import {formatDate} from "@/functions/formatDate";
import {Form, Input, message, Radio, Spin} from "antd";
import axios from "axios";
import {motion} from 'framer-motion';
import useIsVisible from '@/functions/useIsVisible';
import dayjs from "dayjs";
import Link from "next/link";
import {ymEvent} from "@/functions/ym-event";

const options = [
  {
    label: 'Приду',
    value: 'Приду',
  },
  {
    label: <>Не&nbsp;смогу придти</>,
    value: 'Не смогу придти',
  },
];

const GuestForm = () => {

  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);

  const [messageApi, contextHolder] = message.useMessage();
  const success = (text) => {
    messageApi.open({
      type: 'success',
      content: text,
    });
  };
  const error = (text) => {
    messageApi.open({
      type: 'error',
      content: text,
    });
  };

  const [form] = Form.useForm();
  const [formDisabled, setFormDisabled] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setFormDisabled(true)
      const response = await axios.post('/api/guest-form', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: values,
      });

      // console.log(response);

      if (response.status === 200) {
        success('Ваш ответ успешно отправлен. Спасибо!');
        ymEvent('send_form');
        form.resetFields();
        setFormDisabled(false);
      } else {
        error('Ошибка при отправке. Попробуйте позже')
        setFormDisabled(false)
        throw new Error('Ошибка при отправке. Попробуйте позже');
      }
    } catch (error) {
      error('Ошибка отправки данных');
      setFormDisabled(false);
      message.error(error.message || 'Ошибка отправки данных.');
    }
  };


  return (
    <>
      {contextHolder}
      <motion.section
        ref={sectionRef}
        initial={{opacity: 0}}
        animate={isVisible ? {opacity: 1} : {opacity: 0}}
        transition={{duration: 0.6, ease: 'easeOut'}}
        className="guest-form"
      >
        <div className="container">
          <div className="guest-form__body">
            <h2 className="guest-form__title sec-title">Анкета гостя</h2>
            {dayjs().isBefore('2025-07-27') ? (
              <>
                <div className="guest-form__text text">
                  <p>Ваши ответы на&nbsp;вопросы очень помогут нам при&nbsp;организации свадьбы.</p>
                  <p>Пожалуйста, отнеситесь серьезно к&nbsp;заполнению формы.</p>
                  <p>Будем ждать ответов до&nbsp;{formatDate('2025-07-27T00:00:00', 'DD.MMMM.YYYY')}&nbsp;г.</p>
                </div>
                <Form form={form}
                      requiredMark={false}
                      onFinish={handleSubmit}
                      variant="borderless"
                      className="guest-form__form"
                      disabled={formDisabled}
                      layout="vertical"
                >
                  <div className="guest-form__form-fields">
                    <Form.Item
                      label="Сможете ли вы присутствовать на торжестве?"
                      name="presence"
                      rules={[
                        {
                          required: true,
                          message: 'Выберите один из вариантов!',
                        },
                      ]}
                    >
                      <Radio.Group optionType="button" options={options}/>
                    </Form.Item>
                    <Form.Item
                      label="Укажите Ваше ФИО"
                      name="persons"
                      rules={[
                        {
                          required: true,
                          message: 'Заполните поле!',
                        },
                      ]}
                    >
                      <Input.TextArea
                        autoSize={{minRows: 2}}
                        placeholder={'Укажите Ваше ФИО, а также ФИО тех, кто будет с Вами'}
                        className="guest-form__form-textarea"

                      />
                    </Form.Item>
                  </div>
                  <div className="guest-form__form-footer">
                    <button className="guest-form__form-submit style-btn" type="submit">
                      Отправить ответ
                    </button>
                  </div>
                  {formDisabled && (
                    <div className="guest-form__spin">
                      <Spin size="large"/>
                    </div>)}
                </Form>
              </>
            ) : (
              <div className="guest-form__after">
                <p className="text">Ответы получены!</p>
                <p className="text">Будем ждать Вас на мероприятии</p>
              </div>
            )}
            <div className="guest-form__contacts">
              <p className="text">По всем вопросам обращаться к&nbsp;организатору:</p>
              <Link
                onClick={() => ymEvent('organizer')}
                className="guest-form__contacts_feedback style-btn"
                target={"_blank"}
                href={"https://t.me/yulyasha_event"}
              >Написать</Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default GuestForm;
