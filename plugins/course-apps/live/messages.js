import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.pagesAndResources.live.enableLive.heading',
    defaultMessage: 'Cấu hình Live',
    description: 'Heading for live configuration',
  },
  enableLiveLabel: {
    id: 'authoring.pagesAndResources.live.enableLive.label',
    defaultMessage: 'Live',
    description: 'Title for configuration',
  },
  enableLiveHelp: {
    id: 'authoring.pagesAndResources.live.enableLive.help',
    defaultMessage: 'Lên lịch họp và tổ chức các buổi học trực tiếp với người học.',
    description: 'Tells the purpose of live configuration',
  },
  enableLiveLink: {
    id: 'authoring.pagesAndResources.live.enableLive.link',
    defaultMessage: 'Tìm hiểu thêm về Live',
    description: 'Link text that tells the user to learn about the live',
  },
  saveButton: {
    id: 'authoring.discussions.saveButton',
    defaultMessage: 'Lưu',
    description: 'Button allowing the user to submit their discussion configuration.',
  },
  savingButton: {
    id: 'authoring.discussions.savingButton',
    defaultMessage: 'Đang lưu',
    description: 'Button label when the discussion configuration is being submitted.',
  },
  savedButton: {
    id: 'authoring.discussions.savedButton',
    defaultMessage: 'Đã lưu',
    description: 'Button label when the discussion configuration has been successfully submitted.',
  },
  selectProvider: {
    id: 'authoring.live.selectProvider',
    defaultMessage: 'Chọn công cụ hội nghị trực tuyến',
    description: '',
  },
  formInstructions: {
    id: 'authoring.live.formInstructions',
    defaultMessage: 'Hoàn thành các trường dưới đây để thiết lập công cụ hội nghị trực tuyến của bạn.',
    description: 'Instruction for configure the video conferencing tool.',
  },
  consumerKey: {
    id: 'authoring.live.consumerKey',
    defaultMessage: 'Khóa người dùng (Consumer Key)',
    description: 'Label for the Consumer Key field.',
  },
  consumerKeyRequired: {
    id: 'authoring.live.consumerKey.required',
    defaultMessage: 'Khóa người dùng là trường bắt buộc',
    description: 'Tells the user that the Consumer Key field is required and must have a value.',
  },
  consumerSecret: {
    id: 'authoring.live.consumerSecret',
    defaultMessage: 'Mã bí mật (Consumer Secret)',
    description: 'Label for the Consumer Secret field.',
  },
  consumerSecretRequired: {
    id: 'authoring.live.consumerSecret.required',
    defaultMessage: 'Mã bí mật là trường bắt buộc',
    description: 'Tells the user that the Consumer Secret field is required and must have a value.',
  },
  launchUrl: {
    id: 'authoring.live.launchUrl',
    defaultMessage: 'URL khởi chạy',
    description: 'Label for the Launch URL field.',
  },
  launchUrlRequired: {
    id: 'authoring.live.launchUrl.required',
    defaultMessage: 'URL khởi chạy là trường bắt buộc',
    description: 'Tells the user that the Launch URL field is required and must have a value.',
  },
  launchEmail: {
    id: 'authoring.live.launchEmail',
    defaultMessage: 'Email khởi chạy',
    description: 'Label for the Launch Email field.',
  },
  launchEmailRequired: {
    id: 'authoring.live.launchEmail.required',
    defaultMessage: 'Email khởi chạy là trường bắt buộc',
    description: 'Tells the user that the Launch Email field is required and must have a value.',
  },
  providerHelperText: {
    id: 'authoring.live.provider.helpText',
    defaultMessage: 'Cấu hình này sẽ yêu cầu chia sẻ tên người dùng và email của người học và nhóm giảng dạy với {providerName}.',
    description: 'Tells the user that sharing username and email is required for configuration',
  },
  requestPiiSharingEnable: {
    id: 'authoring.live.requestPiiSharingEnable',
    defaultMessage: 'Cấu hình này sẽ yêu cầu chia sẻ tên người dùng và email của người học và nhóm giảng dạy với {provider}. Để truy cập cấu hình LTI cho {provider}, vui lòng yêu cầu điều phối viên dự án edX của bạn bật chia sẻ PII cho khóa học này.',
    description: 'Tells the user that request edx project coordinator to enable the PII sharing to access the LTI configuration for a provider.',
  },
  general: {
    id: 'authoring.live.appDocInstructions.documentationLink',
    defaultMessage: 'Tài liệu chung',
    description: 'Application Document Instructions message for documentation link',
  },
  accessibility: {
    id: 'authoring.live.appDocInstructions.accessibilityDocumentationLink',
    defaultMessage: 'Tài liệu về khả năng truy cập',
    description: 'Application Document Instructions message for accessibility link',
  },
  configuration: {
    id: 'authoring.live.appDocInstructions.configurationLink',
    defaultMessage: 'Tài liệu cấu hình',
    description: 'Application Document Instructions message for configurations link',
  },
  learnMore: {
    id: 'authoring.live.appDocInstructions.learnMoreLink',
    defaultMessage: 'Tìm hiểu thêm về {providerName}',
    description: 'Application Document Instructions message for learn more links',
  },
  linkTextHeading: {
    id: 'authoring.live.appDocInstructions.linkTextHeading',
    defaultMessage: 'Hỗ trợ và tài liệu bên ngoài',
    description: 'External help and documentation heading',
  },
  linkText: {
    id: 'authoring.live.appDocInstructions.linkText',
    defaultMessage: '{link}',
    description: 'link',
  },
  'appName-zoom': {
    id: 'authoring.live.appName-yellowdig',
    defaultMessage: 'Zoom',
    description: 'The name of the Zoom app.',
  },
  'appName-googleMeet': {
    id: 'authoring.live.appName-googleMeet',
    defaultMessage: 'Google Meet',
    description: 'The name of the Google Meet app.',
  },
  'appName-microsoftTeams': {
    id: 'authoring.live.appName-microsoftTeams',
    defaultMessage: 'Microsoft Teams',
    description: 'The name of the Microsoft Teams app.',
  },
  'appName-bigBlueButton': {
    id: 'authoring.live.appName-bigBlueButton',
    defaultMessage: 'BigBlueButton',
    description: 'The name of the Big Blue Button Teams app.',
  },
  requestPiiSharingEnableForBbb: {
    id: 'authoring.live.requestPiiSharingEnableForBbb',
    defaultMessage: 'Cấu hình này sẽ yêu cầu chia sẻ tên người dùng của người học và nhóm giảng dạy với {provider}.',
    description: 'Tells the user that they require sharing usernames with the provider to use this feature',
  },

  piiSharingEnableHelpTextBbb: {
    id: 'authoring.live.piiSharingEnableHelpText',
    defaultMessage: 'Để bật tính năng này, hãy liên hệ với nhóm hỗ trợ edX của bạn để bật chia sẻ PII cho khóa học này.',
    description: 'Tells the user that request edx project coordinator to enable the PII sharing to access the LTI configuration for a provider.',
  },

  freePlanMessage: {
    id: 'authoring.live.freePlanMessage',
    defaultMessage: 'Gói miễn phí đã được cấu hình sẵn, không cần cấu hình bổ sung. Khi chọn gói miễn phí, bạn đồng ý với Blindside Networks',
    description: 'Tells user that free plans requires no additional configurations',
  },
  privacyPolicy: {
    id: 'authoring.live.privacyPolicy',
    defaultMessage: 'Chính sách quyền riêng tư.',
    description: 'The text of privacy policy hyperlink for free plan',
  },
});

export default messages;