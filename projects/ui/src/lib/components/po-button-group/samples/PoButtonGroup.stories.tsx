import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PoButtonGroup, { PoButtonGroupItem, PoButtonGroupProps, PoButtonGroupToggle } from '..';

export default {
    title: 'Button Group/PoButtonGroupComponent',
    component: PoButtonGroup,
  } as Meta;

  const pButtons: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: () => alert('Bt1') },
    { label: 'Button 2', action: () => alert('Bt2') },
    { label: 'Button 3', disabled: true, action: () => alert('Bt3') },
    { label: 'Button 4', icon: 'po-icon-user', action: () => alert('Bt4') },
  ];

  const Template: Story<PoButtonGroupProps> = (args) => <PoButtonGroup pButtons={pButtons} {...args} />;

  export const Componente = Template.bind({});

  const Basic: Story<PoButtonGroupProps> = (args) => <PoButtonGroup pButtons={ [ { label: 'Button Basic', action: () => alert('Bt1') } ] } {...args} />;

  export const PoButtonGroupBasic = Basic.bind({});


  /**
   * POButtonGroupPost
   */
  const PButtonsPostFontStyle: Array<PoButtonGroupItem> = [
    { icon: 'po-icon-text-bold', action: () => alert('setBold'), tooltip: 'Bold' },
    { icon: 'po-icon-text-italic', action: () => alert('setItalic'), tooltip: 'Italic' },
    { icon: 'po-icon-text-underline', action: () => alert('setUnderline'), tooltip: 'Underline' }
  ];

  const PButtonsPostTextAlign: Array<PoButtonGroupItem> = [
    {
      icon: 'po-icon-align-left',
      selected: true,
      action: () => alert("setTextAlignment = 'left'"),
      tooltip: 'Left align'
    },
    { icon: 'po-icon-align-center', action: () => alert("setTextAlignment = 'center'"), tooltip: 'Center align' },
    { icon: 'po-icon-align-right', action: () => alert("setTextAlignment = 'right'"), tooltip: 'Right align' },
    { icon: 'po-icon-align-justify', action: () => alert("setTextAlignment = 'justify'"), tooltip: 'Justify' }
  ];

  const POButtonGroupPostTemplate: Story<PoButtonGroupProps> = (args) => (
    <div className="docs-sample-container">
        <div className="po-font-title po-mb-2">Create New Post</div>
        <div className="po-widget po-widget-body">
            <div className="po-row">
                <div className="po-sm-3 po-lg-2">
                    <PoButtonGroup pButtons={PButtonsPostFontStyle} pToggle={PoButtonGroupToggle.Multiple} />
                </div>
                <div className="po-sm-3 po-lg-2">
                    <PoButtonGroup pButtons={PButtonsPostTextAlign} pToggle={PoButtonGroupToggle.Single} />
                </div>
            </div>
            <div className="po-row">
                <textarea name="textArea" cols={30} rows={10}></textarea>
                <hr/>
            </div>
        </div>
    </div>
    )

  export const POButtonGroupPost = POButtonGroupPostTemplate.bind({});

