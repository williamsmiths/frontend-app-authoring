import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  documentationPage: {
    id: 'authoring.discussions.documentationPage',
    defaultMessage: 'Truy cập trang tài liệu {name}',
  },
  formInstructions: {
    id: 'authoring.discussions.formInstructions',
    defaultMessage: 'Hoàn thành các trường dưới đây để thiết lập công cụ thảo luận của bạn.',
  },
  consumerKey: {
    id: 'authoring.discussions.consumerKey',
    defaultMessage: 'Khóa Consumer',
    description: 'Label for the Consumer Key field.',
  },
  consumerKeyRequired: {
    id: 'authoring.discussions.consumerKey.required',
    defaultMessage: 'Khóa Consumer là trường bắt buộc',
    description: 'Tells the user that the Consumer Key field is required and must have a value.',
  },
  consumerSecret: {
    id: 'authoring.discussions.consumerSecret',
    defaultMessage: 'Bí mật Consumer',
    description: 'Label for the Consumer Secret field.',
  },
  consumerSecretRequired: {
    id: 'authoring.discussions.consumerSecret.required',
    defaultMessage: 'Bí mật Consumer là trường bắt buộc',
    description: 'Tells the user that the Consumer Secret field is required and must have a value.',
  },
  launchUrl: {
    id: 'authoring.discussions.launchUrl',
    defaultMessage: 'URL khởi chạy',
    description: 'Label for the Launch URL field.',
  },
  launchUrlRequired: {
    id: 'authoring.discussions.launchUrl.required',
    defaultMessage: 'URL khởi chạy là trường bắt buộc',
    description: 'Tells the user that the Launch URL field is required and must have a value.',
  },
  staffOnlyConfigInfo: {
    id: 'authoring.discussions.stuffOnlyConfigInfo',
    defaultMessage: 'Để kích hoạt {providerName} cho khóa học của bạn, vui lòng liên hệ nhóm hỗ trợ của họ tại {supportEmail} để tìm hiểu thêm về giá và cách sử dụng.',
  },
  staffOnlyConfigGuide: {
    id: 'authoring.discussions.stuffOnlyConfigGuide',
    defaultMessage: 'Để cấu hình đầy đủ {providerName} cũng sẽ yêu cầu chia sẻ tên người dùng và email của học viên và nhóm khóa học. Vui lòng liên hệ điều phối viên dự án edX của bạn để bật chia sẻ PII cho khóa học này.',
  },
  piiSharing: {
    id: 'authoring.discussions.piiSharing',
    defaultMessage: 'Tùy chọn chia sẻ tên người dùng và/hoặc email với nhà cung cấp LTI:',
  },
  piiShareUsername: {
    id: 'authoring.discussions.piiShareUsername',
    defaultMessage: 'Chia sẻ tên người dùng',
    description: 'Label for the Share Username field.',
  },
  piiShareEmail: {
    id: 'authoring.discussions.piiShareEmail',
    defaultMessage: 'Chia sẻ email',
    description: 'Label for the Share Email field.',
  },
  contact: {
    id: 'authoring.discussions.appDocInstructions.contact',
    defaultMessage: 'Liên hệ: {link}',
    description: 'Contact',
  },
  general: {
    id: 'authoring.discussions.appDocInstructions.documentationLink',
    defaultMessage: 'Tài liệu chung',
    description: 'Application Document Instructions message for documentation link',
  },
  accessibility: {
    id: 'authoring.discussions.appDocInstructions.accessibilityDocumentationLink',
    defaultMessage: 'Tài liệu về khả năng truy cập',
    description: 'Application Document Instructions message for accessibility link',
  },
  configuration: {
    id: 'authoring.discussions.appDocInstructions.configurationLink',
    defaultMessage: 'Tài liệu cấu hình',
    description: 'Application Document Instructions message for configurations link',
  },
  learnMore: {
    id: 'authoring.discussions.appDocInstructions.learnMoreLink',
    defaultMessage: 'Tìm hiểu thêm về {providerName}',
    description: 'Application Document Instructions message for learn more links',
  },
  linkTextHeading: {
    id: 'authoring.discussions.appDocInstructions.linkTextHeading',
    defaultMessage: 'Hướng dẫn và tài liệu bên ngoài',
    description: 'External help and documentation heading',
  },
  linkText: {
    id: 'authoring.discussions.appDocInstructions.linkText',
    defaultMessage: '{link}',
    description: 'link',
  },
});

export default messages;