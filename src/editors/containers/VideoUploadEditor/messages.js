import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  spinnerScreenReaderText: {
    id: 'authoring.videoUpload.spinnerScreenReaderText',
    defaultMessage: 'đang tải',
    description: 'Loading message for spinner screenreader text.',
  },
  dropVideoFileHere: {
    defaultMessage: 'Kéo và thả video vào đây hoặc nhấp để tải lên',
    id: 'VideoUploadEditor.dropVideoFileHere',
    description: 'Display message for Drag and Drop zone',
  },
  info: {
    id: 'VideoUploadEditor.uploadInfo',
    defaultMessage: 'Tải lên tệp MP4 hoặc MOV (tối đa 5 GB)',
    description: 'Info message for supported formats',
  },
  pasteURL: {
    id: 'VideoUploadEditor.pasteURL',
    defaultMessage: 'Dán ID hoặc URL video của bạn',
    description: 'Paste URL message for video upload',
  },
  closeButtonAltText: {
    id: 'VideoUploadEditor.closeButtonAltText',
    defaultMessage: 'Đóng',
    description: 'Close button alt text',
  },
  submitButtonAltText: {
    id: 'VideoUploadEditor.submitButtonAltText',
    defaultMessage: 'Gửi',
    description: 'Submit button alt text',
  },
});

export default messages;