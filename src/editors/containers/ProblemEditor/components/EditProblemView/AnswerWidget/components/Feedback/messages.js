import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  feedbackPlaceholder: {
    id: 'authoring.answerwidget.feedback.placeholder',
    defaultMessage: 'Nhập phản hồi',
    description: 'Placeholder text for feedback text',
  },
  feedbackToggleIconAltText: {
    id: 'authoring.answerwidget.feedback.icon.alt',
    defaultMessage: 'Bật/tắt phản hồi',
    description: 'Alt text for feedback toggle icon',
  },
  selectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.selected.label',
    defaultMessage: 'Hiển thị phản hồi khi {answerId} {boldunderline}:',
    description: 'Label text for feedback if option is selected',
  },
  selectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.selected.label.boldunderline',
    defaultMessage: 'được chọn',
    description: 'Bold & underlined text for feedback if option is selected',
  },
  unSelectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.unselected.label',
    defaultMessage: 'Hiển thị phản hồi khi {answerId} {boldunderline}:',
    description: 'Label text for feedback if option is not selected',
  },
  unSelectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.unselected.label.boldunderline',
    defaultMessage: 'không được chọn',
    description: 'Bold & underlined text for feedback if option is not selected',
  },
});

export default messages;