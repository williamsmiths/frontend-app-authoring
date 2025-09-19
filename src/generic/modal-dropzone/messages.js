import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  uploadImageDropzoneText: {
    id: 'course-authoring.certificates.modal-dropzone.text',
    defaultMessage: 'Kéo và thả hình ảnh của bạn vào đây hoặc nhấp để tải lên',
    description: 'Description to drag and drop block',
  },
  uploadImageDropzoneAlt: {
    id: 'course-authoring.certificates.modal-dropzone.dropzone-alt',
    defaultMessage: 'Hình ảnh đã tải lên cho chứng chỉ khóa học',
    description: 'Description for the uploaded image',
  },
  uploadImageValidationText: {
    id: 'course-authoring.certificates.modal-dropzone.validation.text',
    defaultMessage: 'Chỉ các tệp {types} mới có thể tải lên. Vui lòng chọn tệp kết thúc bằng {extensions} để tải lên.',
    description: 'Error message for when an invalid file type is selected',
  },
  cancelModal: {
    id: 'course-authoring.certificates.modal-dropzone.cancel.modal',
    defaultMessage: 'Hủy',
    description: 'Text for the cancel button in the modal',
  },
  uploadModal: {
    id: 'course-authoring.certificates.modal-dropzone.upload.modal',
    defaultMessage: 'Tải lên',
    description: 'Text for the upload button in the modal',
  },
  uploadImageDropzoneInvalidSizeMore: {
    id: 'course-authoring.certificates.modal-dropzone.validation.invalid-size-more',
    defaultMessage: 'Kích thước hình ảnh phải nhỏ hơn {maxSize}MB.',
    description: 'Error message for when the uploaded image size exceeds the limit',
  },
});

export default messages;