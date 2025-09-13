import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.heading',
    defaultMessage: 'Cấu hình Tóm tắt đơn vị Xpert',
  },
  enableXpertUnitSummaryLabel: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.enable-xpert-unit-summary.label',
    defaultMessage: 'Tóm tắt đơn vị Xpert',
  },
  enableXpertUnitSummaryHelp: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.enable-xpert-unit-summary.help',
    defaultMessage: 'Củng cố các khái niệm học tập bằng cách chia sẻ nội dung khóa học dạng văn bản với OpenAI (qua API) để hiển thị tóm tắt đơn vị theo yêu cầu cho người học. Người học có thể để lại phản hồi về chất lượng các bản tóm tắt do AI tạo ra để edX cải thiện hiệu quả của công cụ.',
  },
  enableXpertUnitSummaryHelpPrivacyLink: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.enable-xpert-unit-summary.help.privacylink',
    defaultMessage: 'Tìm hiểu thêm về quyền riêng tư dữ liệu của OpenAI API.',
  },
  enableXpertUnitSummaryLink: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.enable-xpert-unit-summary.link',
    defaultMessage: 'Tìm hiểu thêm về cách OpenAI xử lý dữ liệu',
  },
  allUnitsEnabledByDefault: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.all-units-enabled-by-default',
    defaultMessage: 'Tất cả các đơn vị được bật theo mặc định',
  },
  noUnitsEnabledByDefault: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.no-units-enabled-by-default',
    defaultMessage: 'Không có đơn vị nào được bật theo mặc định',
  },
});

export default messages;