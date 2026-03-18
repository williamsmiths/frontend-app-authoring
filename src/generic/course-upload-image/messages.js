import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  uploadImageHelpText: {
    id: 'course-authoring.schedule-section.introducing.upload-image.help-text',
    defaultMessage: 'Vui lòng cung cấp đường dẫn và tên hợp lệ cho {identifierFieldText} của bạn (Lưu ý: chỉ hỗ trợ định dạng JPEG hoặc PNG)',
  },
  uploadImageFilesAndUploads: {
    id: 'course-authoring.schedule-section.introducing.upload-image.file-and-uploads',
    defaultMessage: 'tệp và tải lên',
  },
  uploadImageDropzoneText: {
    id: 'course-authoring.schedule-section.introducing.upload-image.dropzone-text',
    defaultMessage: 'Kéo và thả {identifierFieldText} của bạn vào đây hoặc nhấp để tải lên.',
  },
  uploadImageDropzoneAlt: {
    id: 'course-authoring.schedule-section.introducing.upload-image.dropzone-alt',
    defaultMessage: 'Hình ảnh đã tải lên cho khóa học',
  },
  uploadImageEmpty: {
    id: 'course-authoring.schedule-section.introducing.upload-image.empty',
    defaultMessage: 'Khóa học của bạn hiện chưa có hình ảnh. Vui lòng tải lên (định dạng JPEG hoặc PNG, kích thước đề xuất tối thiểu là 375px rộng và 200px cao)',
  },
  uploadImageIconAlt: {
    id: 'course-authoring.schedule-section.introducing.upload-image.icon-alt',
    defaultMessage: 'Biểu tượng tải tệp',
  },
  uploadImageBodyFilled: {
    id: 'course-authoring.schedule-section.introducing.upload-image.manage',
    defaultMessage: 'Bạn có thể quản lý hình ảnh này cùng với tất cả {hyperlink} khác của bạn',
  },
  uploadImageInputPlaceholder: {
    id: 'course-authoring.schedule-section.introducing.upload-image.input.placeholder',
    defaultMessage: 'URL {identifierFieldText} của bạn',
  },
});

export default messages;