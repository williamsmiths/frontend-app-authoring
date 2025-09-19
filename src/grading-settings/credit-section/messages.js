import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  creditEligibilityLabel: {
    id: 'course-authoring.grading-settings.credit.eligibility.label',
    defaultMessage: 'Điểm tối thiểu đạt để được tính tín chỉ:',
  },
  creditEligibilityDescription: {
    id: 'course-authoring.grading-settings.credit.eligibility.description',
    defaultMessage: '% Phải lớn hơn hoặc bằng điểm đạt khóa học',
  },
  creditEligibilityErrorMsg: {
    id: 'course-authoring.grading-settings.credit.eligibility.error.msg',
    defaultMessage: 'Không thể đặt điểm đạt nhỏ hơn:',
  },
});

export default messages;