import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  gracePeriodOnDeadlineLabel: {
    id: 'course-authoring.grading-settings.deadline.label',
    defaultMessage: 'Thời gian gia hạn cho hạn nộp:',
  },
  gracePeriodOnDeadlineDescription: {
    id: 'course-authoring.grading-settings.deadline.description',
    defaultMessage: 'Khoảng thời gian linh động cho ngày hết hạn',
  },
  gracePeriodOnDeadlineErrorMsg: {
    id: 'course-authoring.grading-settings.deadline.error.message',
    defaultMessage: 'Thời gian gia hạn phải được chỉ định theo định dạng {timeFormat}.',
  },
});

export default messages;