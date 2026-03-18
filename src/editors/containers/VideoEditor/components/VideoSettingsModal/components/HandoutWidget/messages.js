import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.handout.title.label',
    defaultMessage: 'Tài liệu',
    description: 'Title for the handout widget',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.handout.upload.label',
    defaultMessage: 'Tải lên tài liệu',
    description: 'Label for upload button',
  },
  addHandoutMessage: {
    id: 'authoring.videoeditor.handout.upload.addHandoutMessage',
    defaultMessage: `Thêm tài liệu đi kèm cho video này. Người học có thể tải xuống
    tệp này bằng cách nhấp vào "Tải tài liệu" bên dưới video.`,
    description: 'Message displayed when uploading a handout',
  },
  uploadHandoutError: {
    id: 'authoring.videoeditor.handout.error.uploadHandoutError',
    defaultMessage: 'Tải tài liệu thất bại. Vui lòng thử lại.',
    description: 'Message presented to user when handout fails to upload',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.handout.error.fileSizeError',
    defaultMessage: 'Tệp tài liệu phải nhỏ hơn hoặc bằng 20 MB. Vui lòng giảm kích thước tệp và thử lại.',
    description: 'Message presented to user when handout file size is larger than 20 MB',
  },
  handoutHelpMessage: {
    id: 'authoring.videoeditor.handout.handoutHelpMessage',
    defaultMessage: 'Người học có thể tải tệp này bằng cách nhấp vào "Tải tài liệu" bên dưới video.',
    description: 'Message presented to user when a handout is present',
  },
  deleteHandout: {
    id: 'authoring.videoeditor.handout.deleteHandout',
    defaultMessage: 'Xóa',
    description: 'Message Presented To user for action to delete handout',
  },
  replaceHandout: {
    id: 'authoring.videoeditor.handout.replaceHandout',
    defaultMessage: 'Thay thế',
    description: 'Message Presented To user for action to replace handout',
  },
  downloadHandout: {
    id: 'authoring.videoeditor.handout.downloadHandout',
    defaultMessage: 'Tải xuống',
    description: 'Message Presented To user for action to download handout',
  },
});

export default messages;