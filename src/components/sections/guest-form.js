'use client';
import React from 'react';
import {formatDate} from "@/functions/formatDate";
import {Form, Input, message, Radio} from "antd";
import axios from "axios";

const options = [
  {
    label: 'Приду',
    value: 'Приду',
  },
  {
    label: <>Приду не один / с&nbsp;семьей</>,
    value: 'Приду не один / с семьей',
  },
  {
    label: <>Не&nbsp;смогу придти</>,
    value: 'Не смогу придти',
  },
];

const GuestForm = () => {

  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/guest-form', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('Ваш ответ успешно отправлен. Спасибо!');
        form.resetFields();
      } else {
        throw new Error('Ошибка при отправке. Попробуйте позже.');
      }
    } catch (error) {
      message.error(error.message || 'Ошибка отправки данных.');
    }
  };


  return (
    <div className="guest-form">
      <div className="container">
        <div className="guest-form__body">
          <h2 className="guest-form__title sec-title">Анкета гостя</h2>
          <div className="guest-form__text text">
            <p>Ваши ответы на вопросы очень помогут нам при организации свадьбы.</p>
            <p>Будем ждать ответ до {formatDate('2025.07.01', 'DD.MMMM.YYYY')} г.</p>
          </div>
          <Form form={form} onFinish={handleSubmit} variant="borderless" className="guest-form__form" layout="vertical">
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
                <Radio.Group optionType="button" options={options} />
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
                  className="guest-form__form-textarea"

                />
              </Form.Item>
            </div>
            <div className="guest-form__form-footer">
              <button className="guest-form__form-submit style-btn" type="submit">
                Отправить
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default GuestForm;
