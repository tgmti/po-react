import React, { CSSProperties, useCallback, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PoButtonGroup, { PoButtonGroupItem, PoButtonGroupProps, PoButtonGroupToggle } from '..';

export default {
    title: 'Button Group/PoButtonGroupComponent',
    component: PoButtonGroup,
  } as Meta;

  const PButtonsBasic: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: () => alert('Bt1') },
    { label: 'Button 2', action: () => alert('Bt2') },
  ];

  const PoButtonGroupBasicTemplate: Story<PoButtonGroupProps> = (args) => <PoButtonGroup pButtons={ PButtonsBasic } {...args} />;

  export const PoButtonGroupBasic = PoButtonGroupBasicTemplate.bind({});


  /**
   * POButtonGroupAttendance
   */
  const POButtonGroupAttendanceTemplate: Story<PoButtonGroupProps> = (args) => {

    const getPassword = (attendance: any) => console.log({attendance});

    const attendances: Array<PoButtonGroupItem> = [
      { label: 'Appointment', icon: 'po-icon-calendar', action: () => alert('Appointment') },
      { label: 'Emergency', icon: 'po-icon-injector', action: () => alert('Emergency') },
      { label: 'Exams', icon: 'po-icon-exam', action: () => alert('Exams') },
    ];

    return (
      <div className="docs-sample-container">
        <div className="po-row">
          <div className="po-md-12 po-font-title">
            Choose the type of attendance
          </div>
          <div className="po-md-12 po-font-text">
            Get your password
          </div>
        </div>

        <hr/>

        <div className="po-row">
          <PoButtonGroup pButtons={ attendances } {...args} className="po-md-12" />
        </div>

      </div>
    );

  }

  export const POButtonGroupAttendance = POButtonGroupAttendanceTemplate.bind({});

  /**
   * POButtonGroupPost
   */
  const POButtonGroupPostTemplate: Story<PoButtonGroupProps> = (args) => {

    const textDefault = '"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';
    const [textAreaValue, setTextAreaValue] = useState<string>(textDefault);
    const [textAreaStyle, setTextAreaStyle] = useState<CSSProperties>({});

    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => setTextAreaValue(event?.target?.value);

    const setBold = () => setTextAreaStyle({...textAreaStyle, fontWeight: textAreaStyle?.fontWeight === 'bold' ? 'normal' : 'bold' })
    const setItalic = () => setTextAreaStyle({...textAreaStyle, fontStyle: textAreaStyle?.fontStyle === 'italic' ? 'normal' : 'italic' })
    const setUnderline = () => setTextAreaStyle({...textAreaStyle, textDecoration: textAreaStyle?.textDecoration === 'underline' ? 'none' : 'underline' })

    const PButtonsPostFontStyle: Array<PoButtonGroupItem> = [
      { icon: 'po-icon-text-bold', action: setBold, tooltip: 'Bold' },
      { icon: 'po-icon-text-italic', action: setItalic, tooltip: 'Italic' },
      { icon: 'po-icon-text-underline', action: setUnderline, tooltip: 'Underline' }
    ];

    const setTextAlignment = (textAlignment: any) => setTextAreaStyle({...textAreaStyle, textAlign: textAlignment})

    const PButtonsPostTextAlign: Array<PoButtonGroupItem> = [
      {
        icon: 'po-icon-align-left',
        selected: true,
        action: () => setTextAlignment('left'),
        tooltip: 'Left align'
      },
      { icon: 'po-icon-align-center', action: () => setTextAlignment('center'), tooltip: 'Center align' },
      { icon: 'po-icon-align-right', action: () => setTextAlignment('right'), tooltip: 'Right align' },
      { icon: 'po-icon-align-justify', action: () => setTextAlignment('justify'), tooltip: 'Justify' }
    ];

    return (
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
            <hr/>
            <div className="po-md-12">
              <div className="po-field-container">
                <div className="po-field-container-content">
                  <textarea className="po-textarea" value={textAreaValue} rows={3} onChange={handleChange}></textarea>
                </div>
              </div>
            </div>
            <hr/>
            <div
            className="po-md-12 po-mt-3 po-font-text-large"
            style={textAreaStyle}>
                { textAreaValue }
            </div>
        </div>
    </div>
    );
  }

  export const POButtonGroupPost = POButtonGroupPostTemplate.bind({});

