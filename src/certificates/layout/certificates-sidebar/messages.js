import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  workingWithCertificatesTitle: {
    id: 'course-authoring.certificates.sidebar.working-with-certificates.title',
    defaultMessage: 'Làm việc với chứng chỉ',
    description: 'Title for the section on how to work with certificates',
  },
  workingWithCertificatesFirstParagraph: {
    id: 'course-authoring.certificates.sidebar.working-with-certificates.first-paragraph',
    defaultMessage: 'Chỉ định tiêu đề khóa học để hiển thị trên chứng chỉ nếu tiêu đề chính thức của khóa học quá dài và hiển thị không tốt.',
    description: 'Instructions for specifying a course title for the certificate',
  },
  workingWithCertificatesSecondParagraph: {
    id: 'course-authoring.certificates.sidebar.working-with-certificates.second-paragraph',
    defaultMessage: 'Đối với chứng chỉ xác minh, hãy chỉ định từ một đến bốn người ký và tải lên các hình ảnh chữ ký tương ứng. Để chỉnh sửa hoặc xóa chứng chỉ trước khi được kích hoạt, di chuột tới góc trên bên phải của biểu mẫu và chọn {strongText} hoặc biểu tượng xóa.',
    description: 'Details on how to specify signatories for verified certificates and edit or delete certificates',
  },
  workingWithCertificatesSecondParagraph_strong: {
    id: 'course-authoring.certificates.sidebar.working-with-certificates.second-paragraph.strong',
    defaultMessage: 'Chỉnh sửa',
    description: 'The strong emphasis text for the edit option',
  },
  workingWithCertificatesThirdParagraph: {
    id: 'course-authoring.certificates.sidebar.working-with-certificates.third-paragraph',
    defaultMessage: 'Để xem mẫu chứng chỉ, hãy chọn chế độ khóa học và nhấn {strongText}.',
    description: 'Instructions on how to view a sample certificate',
  },
  workingWithCertificatesThirdParagraph_strong: {
    id: 'course-authoring.certificates.sidebar.working-with-certificates.third-paragraph.strong',
    defaultMessage: 'Xem trước chứng chỉ',
    description: 'The strong emphasis text for the button to preview a sample certificate',
  },
  issuingCertificatesTitle: {
    id: 'course-authoring.certificates.sidebar.issuing-certificates.title',
    defaultMessage: 'Cấp chứng chỉ cho người học',
    description: 'Title for the section on issuing certificates to learners',
  },
  issuingCertificatesFirstParagraph: {
    id: 'course-authoring.certificates.sidebar.issuing-certificates.first-paragraph',
    defaultMessage: 'Để bắt đầu cấp chứng chỉ khóa học, thành viên nhóm khóa học có vai trò Staff hoặc Admin chọn {strongText}. Chỉ những thành viên có các vai trò này mới có thể chỉnh sửa hoặc xóa chứng chỉ đã được kích hoạt.',
    description: 'Instructions for issuing course certificates and the roles required to edit or delete certificates',
  },
  issuingCertificatesFirstParagraph_strong: {
    id: 'course-authoring.certificates.sidebar.issuing-certificates.first-paragraph.strong',
    defaultMessage: 'Kích hoạt',
    description: 'The strong emphasis text for the activation option',
  },
  issuingCertificatesSecondParagraph: {
    id: 'course-authoring.certificates.sidebar.issuing-certificates.second-paragraph',
    defaultMessage: '{strongText} xóa chứng chỉ sau khi khóa học đã bắt đầu; người học đã nhận chứng chỉ sẽ không còn truy cập được chúng.',
    description: 'A warning against deleting certificates once a course has started, noting the impact on learners',
  },
  issuingCertificatesSecondParagraph_strong: {
    id: 'course-authoring.certificates.sidebar.issuing-certificates.second-paragraph.strong',
    defaultMessage: 'Không nên',
    description: 'The strong emphasis text part of the warning against deleting certificates',
  },
  learnMoreBtn: {
    id: 'course-authoring.certificates.sidebar.learnmore.button',
    defaultMessage: 'Tìm hiểu thêm về chứng chỉ',
    description: 'Text for a button that links to additional information about setting up certificates in studio',
  },
});

export default messages;