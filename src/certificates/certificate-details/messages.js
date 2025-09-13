import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  detailsSectionTitle: {
    id: 'course-authoring.certificates.details.section.title',
    defaultMessage: 'Chi tiết chứng chỉ',
  },
  detailsCourseTitle: {
    id: 'course-authoring.certificates.details.course.title',
    defaultMessage: 'Tên khóa học',
  },
  detailsCourseTitleOverride: {
    id: 'course-authoring.certificates.details.course.title.override',
    defaultMessage: 'Ghi đè tên khóa học',
  },
  detailsCourseTitleOverrideDescription: {
    id: 'course-authoring.certificates.details.course.title.override.description',
    defaultMessage: 'Chỉ định một tên thay thế cho tên khóa học chính thức để hiển thị trên chứng chỉ. Để trống nếu muốn dùng tên chính thức.',
  },
  detailsCourseNumber: {
    id: 'course-authoring.certificates.details.course.number',
    defaultMessage: 'Mã khóa học',
  },
  detailsCourseNumberOverride: {
    id: 'course-authoring.certificates.details.course.number.override',
    defaultMessage: 'Ghi đè mã khóa học',
  },
  deleteCertificateConfirmationTitle: {
    id: 'course-authoring.certificates.details.confirm-modal',
    defaultMessage: 'Xóa chứng chỉ này?',
  },
  deleteCertificateMessage: {
    id: 'course-authoring.certificates.details.confirm-modal.message',
    defaultMessage: 'Xóa chứng chỉ này là vĩnh viễn và không thể hoàn tác.',
  },
  editCertificateConfirmationTitle: {
    id: 'course-authoring.certificates.details.confirm.edit',
    defaultMessage: 'Chỉnh sửa chứng chỉ này?',
  },
  editCertificateMessage: {
    id: 'course-authoring.certificates.details.confirm.edit.message',
    defaultMessage: 'Chứng chỉ này đã được kích hoạt và đang hiển thị. Bạn có chắc chắn muốn tiếp tục chỉnh sửa không?',
  },
});

export default messages;