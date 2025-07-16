import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 80px;

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #00ff88;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  background-color: #1a1a1a;
  border: 1px solid #333;
  color: white;
  border-radius: 6px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  background-color: #1a1a1a;
  border: 1px solid #333;
  color: white;
  border-radius: 6px;
  resize: vertical;
  min-height: 120px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #00ff88;
  color: #0d0d0d;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: #00cc6a;
  }
`;

const SuccessMessage = styled.p`
  color: #00ff88;
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
`;

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9cetovu',
      'template_2yyyd8j',
      form.current,
      'FusaaPv-bxL1Nyee0'
    ).then(() => {
      setSent(true);
      form.current.reset();
    }).catch((err) => {
      alert('Failed to send: ' + err.text);
    });
  };

  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="email" name="from_email" placeholder="Your Email" required />
        <Input type="text" name="subject" placeholder="Subject" required />
        <Textarea name="message" placeholder="Your Message" required />
        <Button type="submit">Send</Button>
        {sent && <SuccessMessage>✅ Message sent successfully!</SuccessMessage>}
      </Form>
    </Section>
  );
}
