import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'authoring.videoeditor.socialShare.title',
    defaultMessage: 'Chia sẻ mạng xã hội',
    description: 'Title for socialShare widget',
  },
  disabledSubtitle: {
    id: 'authoring.videoeditor.socialShare.disabled.subtitle',
    defaultMessage: 'Đã tắt',
    description: 'Subtitle for unavailable socialShare widget',
  },
  enabledSubtitle: {
    id: 'authoring.videoeditor.socialShare.enabled.subtitle',
    defaultMessage: 'Đã bật',
    description: 'Subtitle for when thumbnail has been uploaded to the widget',
  },
  learnMoreLinkLabel: {
    id: 'authoring.videoeditor.socialShare.learnMore.link',
    defaultMessage: 'Tìm hiểu thêm về chia sẻ mạng xã hội',
    description: 'Text for link to learn more about social sharing',
  },
  socialSharingDescription: {
    id: 'authoring.videoeditor.socialShare.description',
    defaultMessage: 'Cho phép video này được chia sẻ lên mạng xã hội',
    description: 'Description for sociail sharing setting',
  },
  socialSharingCheckboxLabel: {
    id: 'authoring.videoeditor.socialShare.checkbox.label',
    defaultMessage: 'Video này có thể được chia sẻ lên mạng xã hội',
    description: 'Label for checkbox for allowing video to be share',
  },
  overrideSocialSharingNote: {
    id: 'authoring.videoeditor.socialShare.overrideNote',
    defaultMessage: 'Lưu ý: Cài đặt này có thể bị ghi đè bởi trang đề cương khóa học.',
    description: 'Message that the setting can be overriden in the course outline',
  },
  disclaimerSettingLocation: {
    id: 'authoring.videoeditor.socialShare.settingsDisclaimer',
    defaultMessage: 'Thay đổi cài đặt này trên trang đề cương khóa học.',
    description: 'Message for disabled checkbox that notifies user that setting can be modified in course outline',
  },
});

export default messages;