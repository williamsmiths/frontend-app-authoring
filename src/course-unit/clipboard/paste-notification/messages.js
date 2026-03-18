import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  hasConflictingErrorsTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.title',
    defaultMessage: 'Các tệp cần được cập nhật thủ công.',
    description: 'Title for a notification indicating that files need manual updates due to a conflict in the clipboard.',
  },
  hasConflictingErrorsDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.description',
    defaultMessage: 'Các tệp sau cần được cập nhật thủ công để các thành phần hoạt động đúng như mong muốn:',
    description: 'Description for the notification indicating which files need manual updates due to a clipboard conflict.',
  },
  hasConflictingErrorsButtonText: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.button.text',
    defaultMessage: 'Tải lên tệp',
    description: 'Button text prompting users to upload files to resolve a clipboard conflict.',
  },
  hasErrorsTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-errors.title',
    defaultMessage: 'Đã xảy ra một số lỗi',
    description: 'Title for a notification indicating that some errors occurred, likely related to file conflicts.',
  },
  hasErrorsDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-errors.description',
    defaultMessage: 'Các tệp bắt buộc sau không thể được thêm vào khóa học:',
    description: 'Description for the notification indicating which required files couldn\'t be added to the course due to errors.',
  },
  hasNewFilesTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.title',
    defaultMessage: 'Tệp mới đã được thêm vào mục Tệp & Tải lên.',
    description: 'Title for a notification indicating that new files have been added to the Files & Uploads section.',
  },
  hasNewFilesDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.description',
    defaultMessage: 'Các tệp bắt buộc sau đã được nhập vào khóa học này:',
    description: 'Description for the notification indicating which required files were imported to the course.',
  },
  hasNewFilesButtonText: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.button.text',
    defaultMessage: 'Xem tệp',
    description: 'Button text prompting users to view new files imported to the course.',
  },
});

export default messages;