import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '..';

export default {
  title: 'Button',
  component: Button,
};

// Creates a template for the component, so that dynamic arguments can be defined below
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Inherit from the Template
export const Primary: Story<ButtonProps> = Template.bind({});

// Define props for the component like so - this also adds a configurable props to the Story
Primary.args = {
  title: 'My Button'
}






