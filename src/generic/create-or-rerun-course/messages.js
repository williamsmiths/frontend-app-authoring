import { defineMessages } from '@edx/frontend-platform/i18n';
import { MAX_TOTAL_LENGTH } from '../../data/constants';

const messages = defineMessages({
  courseDisplayNameLabel: {
    id: 'course-authoring.create-or-rerun-course.display-name.label',
    defaultMessage: 'Tên khóa học',
  },
  courseDisplayNamePlaceholder: {
    id: 'course-authoring.create-or-rerun-course.display-name.placeholder',
    defaultMessage: 'ví dụ: Nhập môn Khoa học Máy tính',
  },
  courseDisplayNameCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.display-name.help-text',
    defaultMessage: 'Tên hiển thị công khai cho khóa học của bạn. Không thể thay đổi, nhưng bạn có thể đặt tên hiển thị khác trong cài đặt nâng cao sau.',
  },
  courseDisplayNameRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.display-name.help-text',
    defaultMessage: 'Tên hiển thị công khai cho khóa học mới. (Thường giống với tên khóa học gốc.)',
  },
  courseOrgLabel: {
    id: 'course-authoring.create-or-rerun-course.org.label',
    defaultMessage: 'Tổ chức',
  },
  courseOrgPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.org.placeholder',
    defaultMessage: 'ví dụ: UniversityX hoặc OrganizationX',
  },
  courseOrgNoOptions: {
    id: 'course-authoring.create-or-rerun-course.org.no-options',
    defaultMessage: 'Không có tùy chọn',
  },
  courseOrgCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.org.help-text',
    defaultMessage: 'Tên tổ chức tài trợ khóa học. {strong} Không thể thay đổi, nhưng bạn có thể đặt tên hiển thị khác trong cài đặt nâng cao sau.',
  },
  courseOrgRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.org.help-text',
    defaultMessage: 'Tên tổ chức tài trợ khóa học mới. (Thường giống với tên tổ chức ban đầu.) {strong}',
  },
  courseNoteNoSpaceAllowedStrong: {
    id: 'course-authoring.create-or-rerun-course.no-space-allowed.strong',
    defaultMessage: 'Lưu ý: Không được phép có khoảng trắng hoặc ký tự đặc biệt.',
  },
  courseNoteOrgNameIsPartStrong: {
    id: 'course-authoring.create-or-rerun-course.org.help-text.strong',
    defaultMessage: 'Lưu ý: Tên tổ chức là một phần của URL khóa học.',
  },
  courseNumberLabel: {
    id: 'course-authoring.create-or-rerun-course.number.label',
    defaultMessage: 'Mã khóa học',
  },
  courseNumberPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.number.placeholder',
    defaultMessage: 'ví dụ: CS101',
  },
  courseNumberCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.number.help-text',
    defaultMessage: 'Mã duy nhất xác định khóa học trong tổ chức. {strong}',
  },
  courseNumberRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.number.help-text',
    defaultMessage: 'Mã duy nhất xác định khóa học mới trong tổ chức. (Giống với mã cũ và không thể thay đổi.)',
  },
  courseNotePartCourseURLRequireStrong: {
    id: 'course-authoring.create-or-rerun-course.number.help-text.strong',
    defaultMessage: 'Lưu ý: Đây là một phần của URL khóa học, không được có khoảng trắng hoặc ký tự đặc biệt và không thể thay đổi.',
  },
  courseRunLabel: {
    id: 'course-authoring.create-or-rerun-course.run.label',
    defaultMessage: 'Đợt học',
  },
  courseRunPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.run.placeholder',
    defaultMessage: 'ví dụ: 2014_T1',
  },
  courseRunCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.run.help-text',
    defaultMessage: 'Kỳ học mà khóa học sẽ diễn ra. {strong}',
  },
  courseRunRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.rerun.help-text',
    defaultMessage: 'Kỳ học của khóa học mới. (Thường khác với kỳ học ban đầu.) {strong}',
  },
  defaultPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.default-placeholder',
    defaultMessage: 'Nhãn',
  },
  createButton: {
    id: 'course-authoring.create-or-rerun-course.create.button.create',
    defaultMessage: 'Tạo',
  },
  rerunCreateButton: {
    id: 'course-authoring.create-or-rerun-course.rerun.button.create',
    defaultMessage: 'Tạo lại',
  },
  creatingButton: {
    id: 'course-authoring.create-or-rerun-course.button.creating',
    defaultMessage: 'Đang tạo',
  },
  rerunningCreateButton: {
    id: 'course-authoring.create-or-rerun-course.rerun.button.rerunning',
    defaultMessage: 'Đang xử lý yêu cầu tạo lại',
  },
  cancelButton: {
    id: 'course-authoring.create-or-rerun-course.button.cancel',
    defaultMessage: 'Hủy',
  },
  requiredFieldError: {
    id: 'course-authoring.create-or-rerun-course.required.error',
    defaultMessage: 'Trường bắt buộc.',
  },
  disallowedCharsError: {
    id: 'course-authoring.create-or-rerun-course.disallowed-chars.error',
    defaultMessage: 'Vui lòng không sử dụng khoảng trắng hoặc ký tự đặc biệt.',
  },
  noSpaceError: {
    id: 'course-authoring.create-or-rerun-course.no-space.error',
    defaultMessage: 'Vui lòng không sử dụng khoảng trắng.',
  },
  totalLengthError: {
    id: 'course-authoring.create-or-rerun-course.total-length-error.error',
    defaultMessage: `Tổng độ dài của tổ chức, mã khóa học và đợt học không được vượt quá ${MAX_TOTAL_LENGTH} ký tự.`,
  },
  alertErrorExistsAriaLabelledBy: {
    id: 'course-authoring.create-or-rerun-course.error.already-exists.labelledBy',
    defaultMessage: 'alert-already-exists-title',
  },
  alertErrorExistsAriaDescribedBy: {
    id: 'course-authoring.create-or-rerun-course.error.already-exists.aria.describedBy',
    defaultMessage: 'mô-tả-xác-nhận',
  },
});

export default messages;