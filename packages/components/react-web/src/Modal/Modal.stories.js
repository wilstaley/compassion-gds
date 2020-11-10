import React from 'react';
import '../global.css';

import { AlertModalButton } from './AlertModal/AlertModalButton/AlertModalButton.js';
import { ConfirmModalButton } from './ConfirmModal/ConfirmModalButton/ConfirmModalButton.js';

export default {
  title: 'Global Design System/Modal',
  component: 'Modal',
  argTypes: {},
};

const AlertTemplate = (args) => (
  <AlertModalButton {...args}> Click Me! </AlertModalButton>
);

const ConfirmTemplate = (args) => (
  <ConfirmModalButton {...args}> Click Me! </ConfirmModalButton>
);

export const Alert = AlertTemplate.bind({});
Alert.args = {
  content: 'Alert Message!',
};

export const Confirm = ConfirmTemplate.bind({});
Confirm.args = {
  content: 'Confirmation Message...',
};
