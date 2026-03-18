import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  gracePeriodOnDeadlineLabel: {
    id: 'course-authoring.grading-settings.deadline.label',
    defaultMessage: 'Thời gian gia hạn cho hạn chót:',
  },
  gracePeriodOnDeadlineDescription: {
    id: 'course-authoring.grading-settings.deadline.description',
    defaultMessage: 'Khoảng thời gian linh hoạt cho hạn nộp',
  },
  gracePeriodOnDeadlineErrorMsg: {
    id: 'course-authoring.grading-settings.deadline.error.message',
    defaultMessage: 'Thời gian gia hạn phải được nhập theo định dạng {timeFormat}.',
  },
});

export default messages;