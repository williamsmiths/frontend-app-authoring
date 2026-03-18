import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-outline.headingTitle',
    defaultMessage: 'Đề Cương Khóa Học',
  },
  headingSubtitle: {
    id: 'course-authoring.course-outline.subTitle',
    defaultMessage: 'Nội Dung',
  },
  alertSuccessTitle: {
    id: 'course-authoring.course-outline.reindex.alert.success.title',
    defaultMessage: 'Chỉ Mục Khóa Học',
  },
  alertSuccessDescription: {
    id: 'course-authoring.course-outline.reindex.alert.success.description',
    defaultMessage: 'Khóa học đã được lập chỉ mục lại thành công.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.labelledby',
    defaultMessage: 'tiêu-đề-xác-nhận',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.describedby',
    defaultMessage: 'mô-tả-xác-nhận',
  },
  newSectionButton: {
    id: 'course-authoring.course-outline.section-list.button.new-section',
    defaultMessage: 'Phần Mới',
  },
  exportTagsCreatingToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.creating.message',
    defaultMessage: 'Vui lòng chờ. Đang tạo file xuất cho thẻ khóa học...',
    description: 'In progress message in toast when exporting tags of a course',
  },
  exportTagsSuccessToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.success.message',
    defaultMessage: 'Xuất thẻ khóa học thành công',
    description: 'Success message in toast when exporting tags of a course',
  },
  exportTagsErrorToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.error.message',
    defaultMessage: 'Đã xảy ra lỗi khi tạo tệp',
    description: 'Error message in toast when exporting tags of a course',
  },
});

export default messages;