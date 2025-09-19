import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  answerWidgetTitle: {
    id: 'authoring.answerwidget.answer.answerWidgetTitle',
    defaultMessage: 'Đáp án',
    description: 'Main title for Answers widget',
  },
  answerHelperText: {
    id: 'authoring.problemEditor.answerWidget.answer.answerHelperText',
    defaultMessage: '{helperText}',
    description: 'Helper text describing how the user should input answers',
  },
  addAnswerButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerButton',
    defaultMessage: 'Thêm đáp án',
    description: 'Button text to add answer',
  },
  answerTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.placeholder',
    defaultMessage: 'Nhập đáp án',
    description: 'Placeholder text for answer option text',
  },
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
  answerDeleteIconAltText: {
    id: 'authoring.answerwidget.answer.delete.icon.alt',
    defaultMessage: 'Xóa đáp án',
    description: 'Alt text for delete icon',
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

  addAnswerRangeButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerRangeButton',
    defaultMessage: 'Thêm khoảng đáp án',
    description: 'Button text to add a range of answers',
  },
  answerRangeTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.answerRangeTextboxPlaceholder',
    defaultMessage: 'Nhập khoảng đáp án',
    description: 'Text to prompt the user to add an answer range to the textbox.',
  },
  answerRangeHelperText: {
    id: 'authoring.answerwidget.answer.answerRangeHelperText',
    defaultMessage: 'Nhập giá trị nhỏ nhất và lớn nhất, ngăn cách bằng dấu phẩy. Dùng ngoặc vuông để bao gồm giá trị, hoặc ngoặc tròn để loại trừ. Ví dụ: để chấp nhận các đáp án 5, 6, 7 nhưng loại 8, hãy nhập [5,8).',
    description: 'Helper text describing usage of answer ranges',
  },
});

export default messages;