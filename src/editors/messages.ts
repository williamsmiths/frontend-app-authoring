import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  dropVideoFileHere: {
    defaultMessage: 'Kéo và thả video vào đây hoặc nhấn để tải lên',
    id: 'VideoUploadEditor.dropVideoFileHere',
    description: 'Display message for Drag and Drop zone',
  },
  browse: {
    defaultMessage: 'Duyệt tệp',
    id: 'VideoUploadEditor.browse',
    description: 'Display message for browse files button',
  },
  info: {
    id: 'VideoUploadEditor.uploadInfo',
    defaultMessage: 'Tải lên tệp MP4 hoặc MOV (tối đa 5 GB)',
    description: 'Info message for supported formats',
  },
  libraryBlockEditWarningTitle: {
    id: 'authoring.editorpage.libraryBlockEditWarningTitle',
    defaultMessage: 'Chỉnh sửa nội dung từ thư viện',
    description: 'Title text for Warning users editing library content in a course.',
  },
  libraryBlockEditWarningDescription: {
    id: 'authoring.editorpage.libraryBlockEditWarningDescription',
    defaultMessage: 'Các chỉnh sửa tại đây chỉ áp dụng cho khóa học này. Những chỉnh sửa này có thể bị ghi đè nếu các bản cập nhật được chấp nhận sau này.',
    description: 'Description text for Warning users editing library content in a course.',
  },
  libraryBlockEditWarningLink: {
    id: 'authoring.editorpage.libraryBlockEditWarningLink',
    defaultMessage: 'Xem trong thư viện',
    description: 'Link text for opening library block in another tab.',
  },
  advancedEditorGenericError: {
    id: 'authoring.advancedEditor.error.generic',
    defaultMessage: 'Đã xảy ra lỗi không mong muốn trong trình chỉnh sửa',
    description: 'Generic error message shown when an error occurs in the Advanced Editor.',
  },
});

export default messages;