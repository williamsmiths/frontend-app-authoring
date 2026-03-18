import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.discussions.heading',
    defaultMessage: 'Chọn một công cụ thảo luận cho khóa học này',
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

  // Legacy
  'appName-legacy': {
    id: 'authoring.discussions.appList.appName-legacy',
    defaultMessage: 'edX',
    description: 'The name of the Legacy edX Discussions app.',
  },
  'appDescription-legacy': {
    id: 'authoring.discussions.appList.appDescription-legacy',
    defaultMessage: 'Bắt đầu cuộc trò chuyện với những người học khác, đặt câu hỏi và tương tác trong khóa học.',
    description: 'A description of the Legacy edX Discussions app.',
  },
  // New provider
  'appName-openedx': {
    id: 'authoring.discussions.appList.appName-openedx',
    defaultMessage: 'edX',
    description: 'The name of the new edX Discussions app.',
  },
  'appDescription-openedx': {
    id: 'authoring.discussions.appList.appDescription-openedx',
    defaultMessage: 'Cho phép tham gia thảo luận theo chủ đề song song với nội dung khóa học.',
    description: 'A description of the new edX Discussions app.',
  },
  // Piazza
  'appName-piazza': {
    id: 'authoring.discussions.appList.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'The name of the Piazza app.',
  },
  'appDescription-piazza': {
    id: 'authoring.discussions.appList.appDescription-piazza',
    defaultMessage: 'Piazza được thiết kế để kết nối sinh viên, trợ giảng và giảng viên, giúp mọi người nhận được sự hỗ trợ khi cần.',
    description: 'A description of the Piazza app.',
  },
  'appDescription-yellowdig': {
    id: 'authoring.discussions.appList.appDescription-yellowdig',
    defaultMessage: 'Yellowdig cung cấp giải pháp học tập số mang tính trò chơi nhằm tăng mức độ tương tác và xây dựng cộng đồng học tập.',
    description: 'A description of the Yellowdig app.',
  },
  'appDescription-inscribe': {
    id: 'authoring.discussions.appList.appDescription-inscribe',
    defaultMessage: 'InScribe tận dụng sức mạnh của cộng đồng và trí tuệ nhân tạo để kết nối người dùng với câu trả lời và tài nguyên cần thiết.',
    description: 'A description of the inscibe app.',
  },
  'appDescription-discourse': {
    id: 'authoring.discussions.appList.appDescription-discourse',
    defaultMessage: 'Discourse là phần mềm diễn đàn hiện đại cho cộng đồng. Có thể dùng như mailing list, diễn đàn, chat dài hạn và hơn thế nữa.',
    description: 'A description of the discourse app.',
  },
  'appDescription-ed-discuss': {
    id: 'authoring.discussions.appList.appDescription-ed-discus',
    defaultMessage: 'Ed Discussion giúp mở rộng giao tiếp trong lớp học với giao diện trực quan, tiết kiệm thời gian và giảm email.',
    description: 'A description of the Ed discus app.',
  },
  // Features
  'featureName-discussion-page': {
    id: 'authoring.discussions.featureName-discussion-page',
    defaultMessage: 'Trang thảo luận',
    description: 'The name of a discussions feature.',
  },
  'featureName-embedded-course-sections': {
    id: 'authoring.discussions.featureName-embedded-course-sections',
    defaultMessage: 'Các phần khóa học nhúng',
    description: 'The name of a discussions feature.',
  },
  'featureName-advanced-in-context-discussion': {
    id: 'authoring.discussions.featureName-advanced-in-context-discussion',
    defaultMessage: 'Thảo luận nâng cao theo ngữ cảnh',
    description: 'The name of a discussions feature.',
  },
  'featureName-anonymous-posting': {
    id: 'authoring.discussions.featureName-anonymous-posting',
    defaultMessage: 'Đăng bài ẩn danh',
    description: 'The name of a discussions feature.',
  },
  'featureName-automatic-learner-enrollment': {
    id: 'authoring.discussions.featureName-automatic-learner-enrollment',
    defaultMessage: 'Tự động ghi danh người học',
    description: 'The name of a discussions feature.',
  },
  'featureName-blackout-discussion-dates': {
    id: 'authoring.discussions.featureName-blackout-discussion-dates',
    defaultMessage: 'Thời gian tạm ngưng thảo luận',
    description: 'The name of a discussions feature.',
  },
  'featureName-community-ta-support': {
    id: 'authoring.discussions.featureName-community-ta-support',
    defaultMessage: 'Hỗ trợ trợ giảng cộng đồng',
    description: 'The name of a discussions feature.',
  },
  'featureName-course-cohort-support': {
    id: 'authoring.discussions.featureName-course-cohort-support',
    defaultMessage: 'Hỗ trợ nhóm học (cohort)',
    description: 'The name of a discussions feature.',
  },
  'featureName-direct-messages-from-instructors': {
    id: 'authoring.discussions.featureName-direct-messages-from-instructors',
    defaultMessage: 'Tin nhắn trực tiếp từ giảng viên',
    description: 'The name of a discussions feature.',
  },
  'featureName-discussion-content-prompts': {
    id: 'authoring.discussions.featureName-discussion-content-prompts',
    defaultMessage: 'Gợi ý nội dung thảo luận',
    description: 'The name of a discussions feature.',
  },
  'featureName-email-notifications': {
    id: 'authoring.discussions.featureName-email-notifications',
    defaultMessage: 'Thông báo qua email',
    description: 'The name of a discussions feature.',
  },
  'featureName-graded-discussions': {
    id: 'authoring.discussions.featureName-graded-discussions',
    defaultMessage: 'Thảo luận có chấm điểm',
    description: 'The name of a discussions feature.',
  },
  'featureName-in-platform-notifications': {
    id: 'authoring.discussions.featureName-in-platform-notifications',
    defaultMessage: 'Thông báo trong nền tảng',
    description: 'The name of a discussions feature.',
  },
  'featureName-internationalization-support': {
    id: 'authoring.discussions.featureName-internationalization-support',
    defaultMessage: 'Hỗ trợ đa ngôn ngữ',
    description: 'The name of a discussions feature.',
  },
  'featureName-lti-advanced-sharing-mode': {
    id: 'authoring.discussions.featureName-lti-advanced-sharing-mode',
    defaultMessage: 'Chia sẻ nâng cao LTI',
    description: 'The name of a discussions feature.',
  },
  'featureName-basic-configuration': {
    id: 'authoring.discussions.featureName-basic-configuration',
    defaultMessage: 'Cấu hình cơ bản',
    description: 'The name of a discussions feature.',
  },
  'featureName-primary-discussion-app-experience': {
    id: 'authoring.discussions.featureName-primary-discussion-app-experience',
    defaultMessage: 'Trải nghiệm ứng dụng thảo luận chính',
    description: 'The name of a discussions feature.',
  },
  'featureName-question-discussion-support': {
    id: 'authoring.discussions.featureName-question-&-discussion-support',
    defaultMessage: 'Hỗ trợ câu hỏi & thảo luận',
    description: 'The name of a discussions feature.',
  },
  'featureName-report/flag-content-to-moderators': {
    id: 'authoring.discussions.featureName-report/flag-content-to-moderators',
    defaultMessage: 'Báo cáo nội dung cho người kiểm duyệt',
    description: 'The name of a discussions feature.',
  },
  'featureName-research-data-events': {
    id: 'authoring.discussions.featureName-research-data-events',
    defaultMessage: 'Sự kiện dữ liệu nghiên cứu',
    description: 'The name of a discussions feature.',
  },
  'featureName-simplified-in-context-discussion': {
    id: 'authoring.discussions.featureName-simplified-in-context-discussion',
    defaultMessage: 'Thảo luận theo ngữ cảnh đơn giản',
    description: 'The name of a discussions feature.',
  },
  'featureName-user-mentions': {
    id: 'authoring.discussions.featureName-user-mentions',
    defaultMessage: 'Nhắc đến người dùng',
    description: 'The name of a discussions feature.',
  },
  'featureName-wcag-2.1': {
    id: 'authoring.discussions.featureName-wcag-2.1',
    defaultMessage: 'Hỗ trợ WCAG 2.1',
    description: 'The name of a discussions feature.',
  },
  'featureName-wcag-2.0-support': {
    id: 'authoring.discussions.wcag-2.0-support',
    defaultMessage: 'Hỗ trợ WCAG 2.0',
    description: 'The name of a discussions feature.',
  },
  'featureType-basic': {
    id: 'authoring.discussions.basic-support',
    defaultMessage: 'Hỗ trợ cơ bản',
    description: 'The type of a discussions feature.',
  },
  'featureType-partial': {
    id: 'authoring.discussions.partial-support',
    defaultMessage: 'Hỗ trợ một phần',
    description: 'The type of a discussions feature.',
  },
  'featureType-full': {
    id: 'authoring.discussions.full-support',
    defaultMessage: 'Hỗ trợ đầy đủ',
    description: 'The type of a discussions feature.',
  },
  'featureType-common': {
    id: 'authoring.discussions.common-support',
    defaultMessage: 'Thường được yêu cầu',
    description: 'The type of a discussions feature.',
  },
  hideDiscussionTab: {
    id: 'authoring.discussions.hide-discussion-tab',
    defaultMessage: 'Ẩn tab thảo luận',
    description: 'Title message to hide discussion tab',
  },
  hideDiscussionTabTitle: {
    id: 'authoring.discussions.hide-tab-title',
    defaultMessage: 'Ẩn tab thảo luận?',
    description: 'Title message to hide discussion tab',
  },
  hideDiscussionTabMessage: {
    id: 'authoring.discussions.hide-tab-message',
    defaultMessage: 'Tab thảo luận sẽ không còn hiển thị với người học. Ngoài ra, việc đăng bài sẽ bị vô hiệu hóa. Bạn có chắc muốn tiếp tục?',
    description: 'Help message to hide discussion tab',
  },
  hideDiscussionOkButton: {
    id: 'authoring.discussions.hide-ok-button',
    defaultMessage: 'Đồng ý',
    description: 'Ok button title',
  },
  hideDiscussionCancelButton: {
    id: 'authoring.discussions.hide-cancel-button',
    defaultMessage: 'Hủy',
    description: 'Cancel button title',
  },
});

export default messages;