import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.discussions.heading',
    defaultMessage: 'Chọn công cụ thảo luận cho khóa học này',
  },
  supportedFeatures: {
    id: 'authoring.discussions.supportedFeatures',
    defaultMessage: 'Các tính năng được hỗ trợ',
  },
  'supportedFeatureList-mobile-show': {
    id: 'authoring.discussions.supportedFeatureList-mobile-show',
    defaultMessage: 'Hiển thị các tính năng được hỗ trợ',
    description: 'This is used in mobile view as supported feature list heading when close',
  },
  'supportedFeatureList-mobile-hide': {
    id: 'authoring.discussions.supportedFeatureList-mobile-hide',
    defaultMessage: 'Ẩn các tính năng được hỗ trợ',
    description: 'This is used in mobile view as supported feature list heading when opened',
  },
  noApps: {
    id: 'authoring.discussions.noApps',
    defaultMessage: 'Không có nhà cung cấp thảo luận nào khả dụng cho khóa học của bạn.',
    description: 'A message shown when there are no discussions providers available to be displayed.',
  },
  nextButton: {
    id: 'authoring.discussions.nextButton',
    defaultMessage: 'Tiếp theo',
    description: 'Button allowing the user to advance to the second step of discussion configuration.',
  },
  appFullSupport: {
    id: 'authoring.discussions.appFullSupport',
    defaultMessage: 'Hỗ trợ đầy đủ',
    description: 'A label indicating that an app supports the full set of possible features for a discussions app.',
  },
  appBasicSupport: {
    id: 'authoring.discussions.appBasicSupport',
    defaultMessage: 'Hỗ trợ cơ bản',
    description: 'A label indicating that an app only supports a subset of the possible features of a discussions app.',
  },
  selectApp: {
    id: 'authoring.discussions.selectApp',
    defaultMessage: 'Chọn {appName}',
    description: 'A label for the checkbox that allows a user to select the discussions app they want to configure.',
  },
});

export default messages;