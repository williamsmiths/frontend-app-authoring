import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  answerWidgetTitle: {
    id: 'authoring.answerwidget.answer.answerWidgetTitle',
    defaultMessage: 'Câu trả lời',
    description: 'Main title for Answers widget',
  },
  answerHelperText: {
    id: 'authoring.problemEditor.answerWidget.answer.answerHelperText',
    defaultMessage: '{helperText}',
    description: 'Helper text describing how the user should input answers',
  },
  addAnswerButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerButton',
    defaultMessage: 'Thêm câu trả lời',
    description: 'Button text to add answer',
  },
  answerTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.placeholder',
    defaultMessage: 'Nhập câu trả lời',
    description: 'Placeholder text for answer option text',
  },
  feedbackPlaceholder: {
    id: 'authoring.answerwidget.feedback.placeholder',
    defaultMessage: 'Thông báo phản hồi',
    description: 'Placeholder text for feedback text',
  },
  feedbackToggleIconAltText: {
    id: 'authoring.answerwidget.feedback.icon.alt',
    defaultMessage: 'Bật/tắt phản hồi',
    description: 'Alt text for feedback toggle icon',
  },
  answerDeleteIconAltText: {
    id: 'authoring.answerwidget.answer.delete.icon.alt',
    defaultMessage: 'Xóa câu trả lời',
    description: 'Alt text for delete icon',
  },
  selectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.selected.label',
    defaultMessage: 'Hiển thị phản hồi sau khi {answerId} {boldunderline}:',
    description: 'Label text for feedback if option is selected',
  },
  selectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.selected.label.boldunderline',
    defaultMessage: 'được chọn',
    description: 'Bold & underlined text for feedback if option is selected',
  },
  unSelectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.unselected.label',
    defaultMessage: 'Hiển thị phản hồi sau khi {answerId} {boldunderline}:',
    description: 'Label text for feedback if option is not selected',
  },
  unSelectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.unselected.label.boldunderline',
    defaultMessage: 'không được chọn',
    description: 'Bold & underlined text for feedback if option is not selected',
  },

  addAnswerRangeButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerRangeButton',
    defaultMessage: 'Thêm phạm vi câu trả lời',
    description: 'Button text to add a range of answers',
  },
  answerRangeTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.answerRangeTextboxPlaceholder',
    defaultMessage: 'Nhập phạm vi câu trả lời',
    description: 'Text to prompt the user to add an answer range to the textbox.',
  },
  answerRangeHelperText: {
    id: 'authoring.answerwidget.answer.answerRangeHelperText',
    defaultMessage: 'Nhập giá trị nhỏ nhất và lớn nhất, cách nhau bằng dấu phẩy. Dùng dấu ngoặc vuông để bao gồm số, hoặc ngoặc tròn để loại trừ số đó. Ví dụ, để xác định đáp án đúng là 5, 6 hoặc 7 nhưng không phải 8, nhập [5,8).',
    description: 'Helper text describing usage of answer ranges',
  },
});

export default messages;