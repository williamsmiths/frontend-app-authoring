import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  createLibrary: {
    id: 'course-authoring.library-authoring.create-library',
    defaultMessage: 'Tạo thư viện mới',
    description: 'Header for the create library form',
  },
  titleLabel: {
    id: 'course-authoring.library-authoring.create-library.form.title.label',
    defaultMessage: 'Tên thư viện',
    description: 'Label for the title field.',
  },
  titlePlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.title.placeholder',
    defaultMessage: 'ví dụ: Bài tập Khoa học Máy tính',
    description: 'Placeholder text for the title field.',
  },
  titleHelp: {
    id: 'course-authoring.library-authoring.create-library.form.title.help',
    defaultMessage: 'Tên cho thư viện của bạn',
    description: 'Help text for the title field.',
  },
  orgLabel: {
    id: 'course-authoring.library-authoring.create-library.form.org.label',
    defaultMessage: 'Tổ chức',
    description: 'Label for the organization field.',
  },
  orgPlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.org.placeholder',
    defaultMessage: 'ví dụ: UniversityX hoặc OrganizationX',
    description: 'Placeholder text for the organization field.',
  },
  orgHelp: {
    id: 'course-authoring.library-authoring.create-library.form.org.help',
    defaultMessage: 'Tên tổ chức công khai cho thư viện của bạn. Không thể thay đổi.',
    description: 'Help text for the organization field.',
  },
  slugLabel: {
    id: 'course-authoring.library-authoring.create-library.form.slug.label',
    defaultMessage: 'ID thư viện',
    description: 'Label for the slug field.',
  },
  slugPlaceholder: {
    id: 'course-authoring.library-authoring.create-library.form.slug.placeholder',
    defaultMessage: 'ví dụ: CSPROB',
    description: 'Placeholder text for the slug field.',
  },
  slugHelp: {
    id: 'course-authoring.library-authoring.create-library.form.slug.help',
    defaultMessage: `Mã định danh duy nhất của thư viện. Lưu ý: Đây là một phần của URL thư viện, vì vậy không được chứa khoảng trắng hoặc ký tự đặc biệt. Không thể thay đổi.`,
    description: 'Help text for the slug field.',
  },
  invalidSlugError: {
    id: 'course-authoring.library-authoring.create-library.form.invalid-slug.error',
    defaultMessage: 'Nhập “slug” hợp lệ gồm chữ cái Unicode, số, dấu gạch dưới hoặc dấu gạch ngang.',
    description: 'Text to display when slug id has invalid symbols.',
  },
  requiredFieldError: {
    id: 'course-authoring.library-authoring.create-library.form.required.error',
    defaultMessage: 'Trường bắt buộc.',
    description: 'Error message to display when a required field is missing.',
  },
  disallowedCharsError: {
    id: 'course-authoring.library-authoring.create-library.form.disallowed-chars.error',
    defaultMessage: 'Vui lòng không sử dụng khoảng trắng hoặc ký tự đặc biệt trong trường này.',
    description: 'Error message to display when a field contains disallowed characters.',
  },
  noSpaceError: {
    id: 'course-authoring.library-authoring.create-library.form.no-space.error',
    defaultMessage: 'Vui lòng không sử dụng khoảng trắng trong trường này.',
    description: 'Error message to display when a field contains spaces.',
  },
  createLibraryButton: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.button',
    defaultMessage: 'Tạo',
    description: 'Button text for creating a new library.',
  },
  createLibraryButtonPending: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.button.pending',
    defaultMessage: 'Đang tạo..',
    description: 'Button text while the library is being created.',
  },
  cancelCreateLibraryButton: {
    id: 'course-authoring.library-authoring.create-library.form.create-library.cancel.button',
    defaultMessage: 'Hủy',
    description: 'Button text to cancel creating a new library.',
  },
});

export default messages;