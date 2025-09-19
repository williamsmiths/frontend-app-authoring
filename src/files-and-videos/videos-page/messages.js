import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.video-uploads.heading',
    defaultMessage: 'Video',
    description: 'Title of the page',
  },
  transcriptSettingsButtonLabel: {
    id: 'course-authoring.video-uploads.transcript-settings.button.toggle',
    defaultMessage: 'Cài đặt bản phụ đề',
    description: 'Button text for transcript settings button',
  },
  thumbnailAltMessage: {
    id: 'course-authoring.video-uploads.thumbnail.alt',
    defaultMessage: 'Ảnh thu nhỏ video {displayName}',
    description: 'Alternative text for video thumbnail image',
  },
  activeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.activeCheckbox.label',
    defaultMessage: 'Hoạt động',
    description: 'Checkbox label for Active checkbox in sort and filter modal',
  },
  inactiveCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.inactiveCheckbox.label',
    defaultMessage: 'Không hoạt động',
    description: 'Checkbox label for Inactive checkbox in sort and filter modal',
  },
  transcribedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.transcribedCheckbox.label',
    defaultMessage: 'Đã có phụ đề',
    description: 'Checkbox label for Transcribed checkbox in sort and filter modal',
  },
  notTranscribedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.notTranscribedCheckbox.label',
    defaultMessage: 'Chưa có phụ đề',
    description: 'Checkbox label for Not transcribed checkbox in sort and filter modal',
  },
  processingCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.processingCheckbox.label',
    defaultMessage: 'Đang xử lý',
    description: 'Checkbox label for Processing checkbox in sort and filter modal',
  },
  failedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.failedCheckbox.label',
    defaultMessage: 'Thất bại',
    description: 'Checkbox label for Failed checkbox in sort and filter modal',
  },
  videoUploadAlertLabel: {
    id: 'course-authoring.files-and-videos.video-upload-alert',
    defaultMessage: 'Đang tải video lên. Vui lòng đợi quá trình tải lên hoàn tất trước khi rời khỏi trang này.',
    description: 'Message for video upload alert',
  },
  videoUploadTrackerModalTitle: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-modal.title',
    defaultMessage: 'Đang tải lên',
    description: 'Title for the Upload Tracker Modal',
  },
  videoUploadTrackerAlertTitle: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.title',
    defaultMessage: 'Không đóng hoặc làm mới trang này cho đến khi tải lên hoàn tất',
    description: 'Title for the Upload Tracker Alert',
  },
  videoUploadTrackerAlertBodyMessage: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.body.message',
    defaultMessage: 'Thoát bây giờ sẽ xóa tất cả tiến trình tải lên. Cửa sổ này sẽ đóng khi tải lên thành công.',
    description: 'Body text for the Upload Tracker Alert',
  },
  videoUploadTrackerAlertEditMessage: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.edit.message',
    defaultMessage: 'Muốn tiếp tục chỉnh sửa trong Studio trong khi tải lên?',
    description: 'Continue editing message for the Upload Tracker Alert',
  },
  videoUploadTrackerAlertEditHyperlinkLabel: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.edit-hyperlink.message',
    defaultMessage: 'Mở tab Studio mới',
    description: 'Label for hyperlink to open a new tab',
  },
  videoUploadTrackerModalBody: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-modal.body.message',
    defaultMessage: 'Đang tải lên {uploadCount} {uploadCount, plural, one {video} other {video}}:',
    description: 'Message for upload tracker modal body',
  },
  videoUploadTrackerAlertCancelLabel: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.cancel-button.label',
    defaultMessage: 'Hủy tải lên',
    description: 'Label for cancel button',
  },
});

export default messages;