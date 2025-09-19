import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.thumbnail.title',
    defaultMessage: 'Ảnh thu nhỏ',
    description: 'Title for thumbnail widget',
  },
  unavailableSubtitle: {
    id: 'authoring.videoeditor.thumbnail.unavailable.subtitle',
    defaultMessage: 'Không khả dụng',
    description: 'Subtitle for unavailable thumbnail widget',
  },
  noneSubtitle: {
    id: 'authoring.videoeditor.thumbnail.none.subtitle',
    defaultMessage: 'Chưa có',
    description: 'Subtitle for when no thumbnail has been uploaded to the widget',
  },
  yesSubtitle: {
    id: 'authoring.videoeditor.thumbnail.yes.subtitle',
    defaultMessage: 'Đã có',
    description: 'Subtitle for when thumbnail has been uploaded to the widget',
  },
  unavailableMessage: {
    id: 'authoring.videoeditor.thumbnail.unavailable.message',
    defaultMessage:
      'Chọn một video từ thư viện của bạn để bật tính năng này (chỉ áp dụng cho các khóa học chạy trên trang edx.org).',
    description: 'Message for unavailable thumbnail widget',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.thumbnail.upload.label',
    defaultMessage: 'Tải ảnh thu nhỏ lên',
    description: 'Label for upload button',
  },
  addThumbnail: {
    id: 'authoring.videoeditor.thumbnail.upload.message',
    defaultMessage: 'Tải lên một hình ảnh để người học nhìn thấy trước khi phát video.',
    description: 'Message for adding thumbnail',
  },
  aspectRequirements: {
    id: 'authoring.videoeditor.thumbnail.upload.aspectRequirements',
    defaultMessage: 'Ảnh phải có tỷ lệ khung hình 16:9 (khuyến nghị 1280x720 px)',
    description: 'Message for thumbnail aspectRequirements',
  },
  thumbnailAltText: {
    id: 'authoring.videoeditor.thumbnail.altText',
    defaultMessage: 'Hình ảnh được dùng làm ảnh thu nhỏ cho video',
    description: 'Alternative text for thumbnail',
  },
  deleteThumbnail: {
    id: 'authoring.videoeditor.thumbnail.deleteThumbnail',
    defaultMessage: 'Xóa',
    description: 'Message presented to user for action to delete thumbnail',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.thumbnail.error.fileSizeError',
    defaultMessage:
      'Kích thước tệp ảnh thu nhỏ phải lớn hơn 2 KB và nhỏ hơn 2 MB. Vui lòng chỉnh lại ảnh rồi thử lại.',
    description:
      'Message presented to user when file size of image is less than 2 KB or larger than 2 MB',
  },
});

export default messages;