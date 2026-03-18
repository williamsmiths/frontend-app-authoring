import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  nextButtonLabel: {
    id: 'authoring.texteditor.selectimagemodal.next.label',
    defaultMessage: 'Tiếp theo',
    description: 'Label for Next button',
  },
  uploadButtonLabel: {
    id: 'authoring.texteditor.selectimagemodal.upload.label',
    defaultMessage: 'Tải lên hình ảnh mới (tối đa 10 MB)',
    description: 'Label for upload button',
  },
  titleLabel: {
    id: 'authoring.texteditor.selectimagemodal.title.label',
    defaultMessage: 'Thêm hình ảnh',
    description: 'Title for the select image modal',
  },

  // Sort Dropdown
  sortByDateNewest: {
    id: 'authoring.texteditor.selectimagemodal.sort.datenewest.label',
    defaultMessage: 'Theo ngày thêm (mới nhất)',
    description: 'Dropdown label for sorting by date (newest)',
  },
  sortByDateOldest: {
    id: 'authoring.texteditor.selectimagemodal.sort.dateoldest.label',
    defaultMessage: 'Theo ngày thêm (cũ nhất)',
    description: 'Dropdown label for sorting by date (oldest)',
  },
  sortByNameAscending: {
    id: 'authoring.texteditor.selectimagemodal.sort.nameascending.label',
    defaultMessage: 'Theo tên (tăng dần)',
    description: 'Dropdown label for sorting by name (ascending)',
  },
  sortByNameDescending: {
    id: 'authoring.texteditor.selectimagemodal.sort.namedescending.label',
    defaultMessage: 'Theo tên (giảm dần)',
    description: 'Dropdown label for sorting by name (descending)',
  },

  // Gallery
  emptyGalleryLabel: {
    id: 'authoring.texteditor.selectimagemodal.emptyGalleryLabel',
    defaultMessage:
      'Không tìm thấy hình ảnh nào trong thư viện của bạn. Vui lòng tải lên hình ảnh bằng nút bên dưới.',
    description: 'Label for when image gallery is empty.',
  },

  // Errors
  uploadImageError: {
    id: 'authoring.texteditor.selectimagemodal.error.uploadImageError',
    defaultMessage: 'Tải lên hình ảnh thất bại. Vui lòng thử lại.',
    description: 'Message presented to user when image fails to upload',
  },
  fetchImagesError: {
    id: 'authoring.texteditor.selectimagemodal.error.fetchImagesError',
    defaultMessage: 'Không thể lấy hình ảnh. Vui lòng thử lại.',
    description: 'Message presented to user when images are not found',
  },
  fileSizeError: {
    id: 'authoring.texteditor.selectimagemodal.error.fileSizeError',
    defaultMessage:
      'Hình ảnh phải có dung lượng tối đa 10 MB. Vui lòng thay đổi kích thước và thử lại.',
    description:
      ' Message presented to user when file size of image is larger than 10 MB',
  },
  selectImageError: {
    id: 'authoring.texteditor.selectimagemodal.error.selectImageError',
    defaultMessage: 'Chọn một hình ảnh để tiếp tục.',
    description:
      'Message presented to user when clicking Next without selecting an image',
  },
});

export default messages;