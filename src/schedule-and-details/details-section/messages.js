import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  detailsTitle: {
    id: 'course-authoring.schedule-section.details.title',
    defaultMessage: 'Chi tiết khóa học',
  },
  detailsDescription: {
    id: 'course-authoring.schedule-section.details.description',
    defaultMessage: 'Cung cấp thông tin hữu ích về khóa học của bạn',
  },
  dropdownLabel: {
    id: 'course-authoring.schedule-section.details.dropdown.label',
    defaultMessage: 'Ngôn ngữ khóa học',
  },
  dropdownHelpText: {
    id: 'course-authoring.schedule-section.details.dropdown.help-text',
    defaultMessage: 'Xác định ngôn ngữ của khóa học tại đây. Thông tin này giúp người dùng tìm các khóa học được giảng dạy bằng ngôn ngữ cụ thể. Nó cũng được sử dụng để bản địa hóa trường "From:" trong các email gửi hàng loạt.',
  },
  dropdownEmpty: {
    id: 'course-authoring.schedule-section.details.dropdown.empty',
    defaultMessage: 'Chọn ngôn ngữ',
  },
});

export default messages;
