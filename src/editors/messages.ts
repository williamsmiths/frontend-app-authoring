import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  dropVideoFileHere: {
    defaultMessage: 'Kéo và thả video vào đây hoặc nhấp để tải lên',
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
    defaultMessage: 'Chỉnh sửa nội dung từ Thư viện',
    description: 'Title text for Warning users editing library content in a course.',
  },
  libraryBlockEditWarningDescription: {
    id: 'authoring.editorpage.libraryBlockEditWarningDescription',
    defaultMessage: 'Các chỉnh sửa được thực hiện ở đây chỉ áp dụng trong khóa học này. Những chỉnh sửa này có thể bị ghi đè sau này nếu chấp nhận bản cập nhật.',
    description: 'Description text for Warning users editing library content in a course.',
  },
  libraryBlockEditWarningLink: {
    id: 'authoring.editorpage.libraryBlockEditWarningLink',
    defaultMessage: 'Xem trong Thư viện',
    description: 'Link text for opening library block in another tab.',
  },
  advancedEditorGenericError: {
    id: 'authoring.advancedEditor.error.generic',
    defaultMessage: 'Đã xảy ra lỗi không mong muốn trong trình chỉnh sửa',
    description: 'Generic error message shown when an error occurs in the Advanced Editor.',
  },
});

export default messages;