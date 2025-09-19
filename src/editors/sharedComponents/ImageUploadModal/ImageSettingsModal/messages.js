import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  // index
  titleLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.titleLabel',
    defaultMessage: 'Cài đặt hình ảnh',
    description: 'Label title for image settings modal.',
  },
  saveButtonLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.saveButtonLabel',
    defaultMessage: 'Lưu',
    description: 'Label for save button.',
  },
  replaceImageButtonLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.replaceImageButtonLabel',
    defaultMessage: 'Thay thế hình ảnh',
    description: 'Label for replace image button.',
  },

  // DimensionControls
  imageDimensionsLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.imageDimensionsLabel',
    defaultMessage: 'Kích thước hình ảnh',
    description: 'Label title for the image dimensions section.',
  },
  widthFloatingLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.widthFloatingLabel',
    defaultMessage: 'Chiều rộng',
    description: 'Floating label for width input.',
  },
  heightFloatingLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.heightFloatingLabel',
    defaultMessage: 'Chiều cao',
    description: 'Floating label for height input.',
  },
  unlockDimensionsLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.unlockDimensionsLabel',
    defaultMessage: 'Mở khóa tỉ lệ',
    description: 'Label for button when unlocking dimensions.',
  },
  lockDimensionsLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.lockDimensionsLabel',
    defaultMessage: 'Khóa tỉ lệ',
    description: 'Label for button when locking dimensions.',
  },
  decorativeDimensionCheckboxLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.decorativeDimensionCheckboxLabel',
    defaultMessage: 'Sử dụng phần trăm cho chiều rộng và chiều cao của hình ảnh',
    description: 'Checkbox label for whether or not an image uses percentages for width and height.',
  },

  // AltTextControls
  accessibilityLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.accessibilityLabel',
    defaultMessage: 'Khả năng truy cập',
    description: 'Label title for accessibility section.',
  },
  altTextFloatingLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.altTextFloatingLabel',
    defaultMessage: 'Văn bản thay thế (Alt Text)',
    description: 'Floating label title for alt text input.',
  },
  decorativeAltTextCheckboxLabel: {
    id: 'authoring.texteditor.imagesettingsmodal.decorativeAltTextCheckboxLabel',
    defaultMessage: 'Hình ảnh này chỉ để trang trí (không cần văn bản thay thế).',
    description: 'Checkbox label for whether or not an image is decorative.',
  },

  // User Feedback Errors
  altTextError: {
    id: 'authoring.texteditor.imagesettingsmodal.error.altTextError',
    defaultMessage: 'Hãy nhập văn bản thay thế hoặc chọn tùy chọn hình ảnh chỉ để trang trí.',
    description: 'Message presented to user when user attempts to save unaccepted altText configuration.',
  },
  altTextLocalFeedback: {
    id: 'authoring.texteditor.imagesettingsmodal.error.altTextLocalFeedback',
    defaultMessage: 'Nhập văn bản thay thế',
    description: 'Message feedback for user below the alt text field.',
  },
  dimensionError: {
    id: 'authoring.texteditor.imagesettingsmodal.error.dimensionError',
    defaultMessage: 'Giá trị kích thước phải nhỏ hơn hoặc bằng 100.',
    description: 'Message presented to user when user attempts to save unaccepted dimension configuration.',
  },
  dimensionLocalFeedback: {
    id: 'authoring.texteditor.imagesettingsmodal.error.dimensionFeedback',
    defaultMessage: 'Nhập giá trị nhỏ hơn hoặc bằng 100.',
    description: 'Message feedback for user below the dimension fields.',
  },
});

export default messages;