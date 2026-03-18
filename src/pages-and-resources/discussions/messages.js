import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  settings: {
    id: 'authoring.discussions.settings',
    defaultMessage: 'Cài Đặt',
    description: 'A label for the second step of the app configuration stepper.',
  },
  configure: {
    id: 'authoring.discussions.configure',
    defaultMessage: 'Cấu hình thảo luận',
  },
  configureApp: {
    id: 'authoring.discussions.configure.app',
    defaultMessage: 'Cấu hình {name}',
  },
  backButton: {
    id: 'authoring.discussions.backButton',
    defaultMessage: 'Quay lại',
    description: 'Button allowing the user to return to discussion app selection.',
  },
  applyButton: {
    id: 'authoring.discussions.applyButton',
    defaultMessage: 'Áp dụng',
    description: 'Button allowing the user to submit their discussion configuration.',
  },
  applyingButton: {
    id: 'authoring.discussions.applyingButton',
    defaultMessage: 'Đang áp dụng',
    description: 'Button label when the discussion configuration is being submitted.',
  },
  appliedButton: {
    id: 'authoring.discussions.appliedButton',
    defaultMessage: 'Đã áp dụng',
    description: 'Button label when the discussion configuration has been successfully submitted.',
  },
  noProviderSwitchAfterCourseStarted: {
    id: 'authoring.discussions.noProviderSwitchAfterCourseStarted',
    defaultMessage: 'Không thể thay đổi nhà cung cấp thảo luận sau khi khóa học đã bắt đầu, vui lòng liên hệ hỗ trợ đối tác.',
    description: "Informs the user that the provider can't be changed after the course has started.",
  },
  providerSelection: {
    id: 'authoring.discussions.providerSelection',
    defaultMessage: 'Chọn nhà cung cấp',
    description: 'A label for the first step of a wizard where the user chooses a discussion tool to configure.',
  },
  Incomplete: {
    id: 'authoring.discussions.Incomplete',
    defaultMessage: 'Chưa hoàn tất',
    description: 'A description for the second step of the app configuration stepper.',
  },
});

export default messages;