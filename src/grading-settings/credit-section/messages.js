import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  creditEligibilityLabel: {
    id: 'course-authoring.grading-settings.credit.eligibility.label',
    defaultMessage: 'Điểm tối thiểu đủ điều kiện nhận tín chỉ:',
  },
  creditEligibilityDescription: {
    id: 'course-authoring.grading-settings.credit.eligibility.description',
    defaultMessage: '% Phải lớn hơn hoặc bằng điểm đạt của khóa học',
  },
  creditEligibilityErrorMsg: {
    id: 'course-authoring.grading-settings.credit.eligibility.error.msg',
    defaultMessage: 'Không thể đặt điểm đạt thấp hơn:',
  },
});

export default messages;