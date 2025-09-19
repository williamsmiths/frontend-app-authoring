import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.transcripts.title',
    defaultMessage: 'Phụ đề',
    description: 'Title for transcripts widget',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.transcripts.upload.label',
    defaultMessage: 'Thêm phụ đề',
    description: 'Label for upload button',
  },
  addFirstTranscript: {
    id: 'authoring.videoeditor.transcripts.upload.firstTranscriptMessage',
    defaultMessage: 'Thêm phụ đề video (chỉ chấp nhận tệp .srt) để cải thiện khả năng tiếp cận.',
    description: 'Message for adding first transcript',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.allowDownloadCheckboxLabel',
    defaultMessage: 'Cho phép tải phụ đề xuống',
    description: 'Label for allow transcript downloads checkbox',
  },
  showByDefaultCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.upload.showByDefaultCheckboxLabel',
    defaultMessage: 'Hiển thị phụ đề mặc định trong trình phát video',
    description: 'Label for show by default checkbox',
  },
  tooltipMessage: {
    id: 'authoring.videoeditor.transcripts.upload.allowDownloadTooltipMessage',
    defaultMessage: 'Người học sẽ thấy liên kết để tải phụ đề xuống bên dưới video.',
    description: 'Message for show by default checkbox',
  },
  transcriptTypeError: {
    id: 'authoring.videoeditor.transcript.error.transcriptTypeError',
    defaultMessage: 'Chỉ có thể tải tệp SRT',
    description: 'Message presented to user when image fails to upload',
  },
  uploadTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.uploadTranscriptError',
    defaultMessage: 'Không thể tải phụ đề lên. Vui lòng thử lại.',
    description: 'Message presented to user when transcript fails to upload',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.transcript.error.fileSizeError',
    defaultMessage: 'Kích thước tệp phụ đề vượt quá giới hạn cho phép. Vui lòng thử lại.',
    description: 'Message presented to user when transcript file size is too large',
  },
  deleteTranscript: {
    id: 'authoring.videoeditor.transcript.deleteTranscript',
    defaultMessage: 'Xóa',
    description: 'Message Presented To user for action to delete transcript',
  },
  deleteTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.deleteTranscriptError',
    defaultMessage: 'Không thể xóa phụ đề. Vui lòng thử lại.',
    description: 'Message presented to user when transcript fails to delete',
  },
  replaceTranscript: {
    id: 'authoring.videoeditor.transcript.replaceTranscript',
    defaultMessage: 'Thay thế',
    description: 'Message Presented To user for action to replace transcript',
  },
  downloadTranscript: {
    id: 'authoring.videoeditor.transcript.downloadTranscript',
    defaultMessage: 'Tải xuống',
    description: 'Message Presented To user for action to download transcript',
  },
  languageSelectLabel: {
    id: 'authoring.videoeditor.transcripts.languageSelectLabel',
    defaultMessage: 'Ngôn ngữ',
    description: 'Label For Dropdown, which allows users to set the language associtated with a transcript',
  },
  languageSelectPlaceholder: {
    id: 'authoring.videoeditor.transcripts.languageSelectPlaceholder',
    defaultMessage: 'Chọn ngôn ngữ',
    description: 'Placeholder For Dropdown, which allows users to set the language associtated with a transcript',
  },
  cancelDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.cancelDeleteLabel',
    defaultMessage: 'Hủy',
    description: 'Label For Button, which allows users to stop the process of deleting a transcript',
  },
  confirmDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.confirmDeleteLabel',
    defaultMessage: 'Xóa',
    description: 'Label For Button, which allows users to confirm the process of deleting a transcript',
  },
  deleteConfirmationMessage: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationMessage',
    defaultMessage: 'Bạn có chắc chắn muốn xóa phụ đề này không?',
    description: 'Warning which allows users to select next step in the process of deleting a transcript',
  },
  deleteConfirmationHeader: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationTitle',
    defaultMessage: 'Xóa phụ đề này?',
    description: 'Title for Warning which allows users to select next step in the process of deleting a transcript',
  },
  fileTypeWarning: {
    id: 'authoring.videoeditor.transcripts.fileTypeWarning',
    defaultMessage: 'Chỉ có thể tải tệp SRT. Vui lòng chọn tệp có phần mở rộng .srt để tải lên.',
    description: 'Message warning users to only upload .srt files',
  },
  importButtonLabel: {
    id: 'authoring.videoEditor.transcripts.importButton.label',
    defaultMessage: 'Nhập phụ đề',
    description: 'Label for youTube import transcript button',
  },
  importHeader: {
    id: 'authoring.videoEditor.transcripts.importCard.header',
    defaultMessage: 'Nhập phụ đề từ YouTube?',
    description: 'Header for import transcript card',
  },
  importMessage: {
    id: 'authoring.videoEditor.transcrtipts.importCard.message',
    defaultMessage: 'Chúng tôi tìm thấy phụ đề cho video này trên YouTube. Bạn có muốn nhập ngay không?',
    description: 'Message for import transcript card asking user if they want to import transcript',
  },
  videoCreationWarning: {
    id: 'authoring.videoEditor.transcrtipts.videoCreation.message',
    defaultMessage: 'Để thêm phụ đề, hãy lưu và mở lại video này.',
    description: 'Warning message when the user is creating a video',
  },
});

export default messages;