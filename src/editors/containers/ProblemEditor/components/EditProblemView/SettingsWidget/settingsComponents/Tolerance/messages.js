import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  toleranceSettingTitle: {
    id: 'problemEditor.settings.tolerance.title',
    defaultMessage: 'Sai số cho phép',
    description: 'Title for tolerance setting menu',
  },
  noneToleranceSummary: {
    id: 'problemEditor.settings.tolerance.summary.none',
    defaultMessage: 'Không có',
    description: 'message provided when no tolerance is set for a problem',
  },
  toleranceSettingText: {
    id: 'problemEditor.settings.tolerance.description.text',
    defaultMessage: 'Khoảng sai số cho phép ở hai phía của đáp án.',
    description: 'Description of the features of setting a tolerance for a problem',
  },
  toleranceValueInputLabel: {
    id: 'problemEditor.settings.tolerance.valueinput',
    defaultMessage: 'Sai số cho phép',
    description: 'floating label for input to set the value of the tolerance',
  },
  toleranceAnswerRangeWarning: {
    id: 'problemEditor.settings.tolerance.answerrangewarning',
    defaultMessage: 'Không thể áp dụng sai số cho dải đáp án',
    description: 'a warning to users that tolerance cannot be aplied to an answer range.',
  },
  typesPercentage: {
    id: 'problemEditor.settings.tolerance.type.percent',
    defaultMessage: 'Phần trăm',
    description: 'A possible value type for a tolerance',
  },
  typesNumber: {
    id: 'problemEditor.settings.tolerance.type.number',
    defaultMessage: 'Giá trị số',
    description: 'A possible value type for a tolerance',
  },
  typesNone: {
    id: 'problemEditor.settings.tolerance.type.none',
    defaultMessage: 'Không có',
    description: 'A possible value type for a tolerance',
  },
});

export default messages;