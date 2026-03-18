import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.heading',
    defaultMessage: 'Cấu Hình Tóm Tắt Đơn Vị Xpert',
  },
  enableXpertUnitSummaryLabel: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.enable-xpert-unit-summary.label',
    defaultMessage: 'Tóm Tắt Đơn Vị Xpert',
  },
  enableXpertUnitSummaryHelp: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.enable-xpert-unit-summary.help',
    defaultMessage: 'Củng cố các khái niệm học tập bằng cách chia sẻ nội dung khóa học dựa trên văn bản với OpenAI (qua API) để hiển thị tóm tắt đơn vị theo yêu cầu cho học viên. Học viên có thể để lại phản hồi về chất lượng tóm tắt do AI tạo ra để edX sử dụng nhằm cải thiện hiệu suất của công cụ.',
  },
  enableXpertUnitSummaryHelpPrivacyLink: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.enable-xpert-unit-summary.help.privacylink',
    defaultMessage: 'Tìm Hiểu Thêm Về Quyền Riêng Tư Dữ Liệu API OpenAI.',
  },
  enableXpertUnitSummaryLink: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.enable-xpert-unit-summary.link',
    defaultMessage: 'Tìm Hiểu Thêm Về Cách OpenAI Xử Lý Dữ Liệu',
  },
  allUnitsEnabledByDefault: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.all-units-enabled-by-default',
    defaultMessage: 'Tất Cả Đơn Vị Được Bật Theo Mặc Định',
  },
  noUnitsEnabledByDefault: {
    id: 'course-authoring.pages-resources.xpert-unit-summary.no-units-enabled-by-default',
    defaultMessage: 'Không Có Đơn Vị Nào Được Bật Theo Mặc Định',
  },
});

export default messages;