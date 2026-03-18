import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  detailsSectionTitle: {
    id: 'course-authoring.certificates.details.section.title',
    defaultMessage: 'Chi tiết chứng chỉ',
    description: 'Title for the section',
  },
  detailsCourseTitle: {
    id: 'course-authoring.certificates.details.course.title',
    defaultMessage: 'Tiêu đề khóa học',
    description: 'Label for displaying the official course title in the certificate details section',
  },
  detailsCourseTitleOverride: {
    id: 'course-authoring.certificates.details.course.title.override',
    defaultMessage: 'Ghi đè tiêu đề khóa học',
    description: 'Label for the course title override input field',
  },
  detailsCourseTitleOverrideDescription: {
    id: 'course-authoring.certificates.details.course.title.override.description',
    defaultMessage: 'Chỉ định tiêu đề khác thay cho tiêu đề khóa học chính thức để hiển thị trên chứng chỉ. Để trống nếu muốn sử dụng tiêu đề khóa học chính thức.',
    description: 'Helper text under the course title override input field',
  },
  detailsCourseNumber: {
    id: 'course-authoring.certificates.details.course.number',
    defaultMessage: 'Mã khóa học',
    description: 'Label for displaying the official course number in the certificate details section',
  },
  detailsCourseNumberOverride: {
    id: 'course-authoring.certificates.details.course.number.override',
    defaultMessage: 'Ghi đè mã khóa học',
    description: 'Label for the course number override input field',
  },
  deleteCertificateConfirmationTitle: {
    id: 'course-authoring.certificates.details.confirm-modal',
    defaultMessage: 'Xóa chứng chỉ này?',
    description: 'Title for the confirmation modal when a user attempts to delete a certificate',
  },
  deleteCertificateMessage: {
    id: 'course-authoring.certificates.details.confirm-modal.message',
    defaultMessage: 'Việc xóa chứng chỉ này là vĩnh viễn và không thể hoàn tác.',
    description: 'Warning message within the delete confirmation modal, emphasizing the permanent nature of the action',
  },
  editCertificateConfirmationTitle: {
    id: 'course-authoring.certificates.details.confirm.edit',
    defaultMessage: 'Chỉnh sửa chứng chỉ này?',
    description: 'Title for the confirmation modal when a user attempts to edit an already activated (live) certificate',
  },
  editCertificateMessage: {
    id: 'course-authoring.certificates.details.confirm.edit.message',
    defaultMessage: 'Chứng chỉ này đã được kích hoạt và đang được sử dụng. Bạn có chắc chắn muốn tiếp tục chỉnh sửa không?',
    description: 'Message warning users about the implications of editing a certificate that is already live, prompting for confirmation',
  },
});

export default messages;