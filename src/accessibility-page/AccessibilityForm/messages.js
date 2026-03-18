import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  accessibilityPolicyFormEmailLabel: {
    id: 'accessibilityPolicyFormEmailLabel',
    defaultMessage: 'Địa Chỉ Email',
    description: 'Label for the email form field',
  },
  accessibilityPolicyFormErrorHighVolume: {
    id: 'accessibilityPolicyFormErrorHighVolume',
    defaultMessage: 'Chúng tôi đang nhận được lượng yêu cầu lớn. Vui lòng thử lại sau hoặc gửi email đến {emailLink}.',
    description: 'Error message when site is experiencing high volume that will include an email link',
  },
  accessibilityPolicyFormErrorMissingFields: {
    id: 'accessibilityPolicyFormErrorMissingFields',
    defaultMessage: 'Vui lòng điền đầy đủ tất cả các trường.',
    description: 'Error message to instruct user to fill in all fields',
  },
  accessibilityPolicyFormHeader: {
    id: 'accessibilityPolicyFormHeader',
    defaultMessage: 'Phản Hồi Về Khả Năng Tiếp Cận Studio',
    description: 'The heading for the form',
  },
  accessibilityPolicyFormMessageLabel: {
    id: 'accessibilityPolicyFormMessageLabel',
    defaultMessage: 'Tin Nhắn',
    description: 'Label for the message form field',
  },
  accessibilityPolicyFormNameLabel: {
    id: 'accessibilityPolicyFormNameLabel',
    defaultMessage: 'Họ Và Tên',
    description: 'Label for the name form field',
  },
  accessibilityPolicyFormSubmitAria: {
    id: 'accessibilityPolicyFormSubmitAria',
    defaultMessage: 'Gửi Biểu Mẫu Phản Hồi Về Khả Năng Tiếp Cận',
    description: 'Detailed aria-label for the submit button',
  },
  accessibilityPolicyFormSubmitLabel: {
    id: 'accessibilityPolicyFormSubmitLabel',
    defaultMessage: 'Gửi',
    description: 'General label for the submit button',
  },
  accessibilityPolicyFormSubmittingFeedbackLabel: {
    id: 'accessibilityPolicyFormSubmittingFeedbackLabel',
    defaultMessage: 'Đang Gửi',
    description: 'Loading message while form feedback is being submitted',
  },
  accessibilityPolicyFormSuccess: {
    id: 'accessibilityPolicyFormSuccess',
    defaultMessage: 'Cảm ơn bạn đã liên hệ với edX!',
    description: 'Simple thank you message when form submission is successful',
  },
  accessibilityPolicyFormSuccessDetails: {
    id: 'accessibilityPolicyFormSuccessDetails',
    defaultMessage: 'Cảm ơn phản hồi của bạn về khả năng tiếp cận của Studio. Chúng tôi thường phản hồi trong vòng một ngày làm việc ({day_start} đến {day_end}, {time_start} đến {time_end}).',
    description: 'Detailed thank you message when form submission is successful',
  },
  accessibilityPolicyFormValidEmail: {
    id: 'accessibilityPolicyFormValidEmail',
    defaultMessage: 'Vui lòng nhập địa chỉ email hợp lệ.',
    description: 'Error message for when an invalid email is entered into the form',
  },
  accessibilityPolicyFormValidMessage: {
    id: 'accessibilityPolicyFormValidMessage',
    defaultMessage: 'Vui lòng nhập tin nhắn.',
    description: 'Error message an invalid message is entered into the form',
  },
  accessibilityPolicyFormValidName: {
    id: 'accessibilityPolicyFormValidName',
    defaultMessage: 'Vui lòng nhập tên.',
    description: 'Error message an invalid name is entered into the form',
  },
});

export default messages;