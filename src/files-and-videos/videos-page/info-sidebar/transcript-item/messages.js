import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  fileSizeError: {
    id: 'course-authoriong.video-uploads.file-info.transcript.error.fileSizeError',
    defaultMessage: 'Kích thước tệp phụ đề vượt quá giới hạn tối đa. Vui lòng thử lại.',
    description: 'Message presented to user when transcript file size is too large',
  },
  deleteTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.deleteTranscript',
    defaultMessage: 'Xóa',
    description: 'Message Presented To user for action to delete transcript',
  },
  replaceTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.replaceTranscript',
    defaultMessage: 'Thay thế',
    description: 'Message Presented To user for action to replace transcript',
  },
  downloadTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.downloadTranscript',
    defaultMessage: 'Tải xuống',
    description: 'Message Presented To user for action to download transcript',
  },
  languageSelectPlaceholder: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.languageSelectPlaceholder',
    defaultMessage: 'Chọn ngôn ngữ',
    description: 'Placeholder For Dropdown, which allows users to set the language associtated with a transcript',
  },
  cancelDeleteLabel: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.cancelDeleteLabel',
    defaultMessage: 'Hủy',
    description: 'Label For Button, which allows users to stop the process of deleting a transcript',
  },
  confirmDeleteLabel: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.confirmDeleteLabel',
    defaultMessage: 'Xác nhận xóa',
    description: 'Label For Button, which allows users to confirm the process of deleting a transcript',
  },
  deleteConfirmationMessage: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.deleteConfirmationMessage',
    defaultMessage: 'Bạn có chắc chắn muốn xóa phụ đề này không?',
    description: 'Warning which allows users to select next step in the process of deleting a transcript',
  },
  deleteConfirmationHeader: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.deleteConfirmationTitle',
    defaultMessage: 'Xóa phụ đề này?',
    description: 'Title for Warning which allows users to select next step in the process of deleting a transcript',
  },
});

export default messages;