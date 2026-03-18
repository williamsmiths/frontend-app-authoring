import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  signatoryTitle: {
    id: 'course-authoring.certificates.signatories.title',
    defaultMessage: 'Người ký',
    description: 'Title for a signatory',
  },
  signatoriesRecommendation: {
    id: 'course-authoring.certificates.signatories.recommendation',
    defaultMessage: 'Khuyến nghị bạn chỉ nên thêm tối đa bốn người ký. Nếu thêm nhiều hơn, hãy xem trước chứng chỉ ở chế độ In (Print View) để đảm bảo chứng chỉ có thể in đúng trên một trang.',
    description: 'A recommendation for the number of signatories to include on a certificate',
  },
  signatoriesSectionTitle: {
    id: 'course-authoring.certificates.signatories.section.title',
    defaultMessage: 'Người ký chứng chỉ',
    description: 'Title for the section',
  },
  addSignatoryButton: {
    id: 'course-authoring.certificates.signatories.add.signatory.button',
    defaultMessage: 'Thêm người ký',
    description: 'Button text for adding a new signatory to the certificate',
  },
  addSignatoryButtonDescription: {
    id: 'course-authoring.certificates.signatories.add.signatory.button.description',
    defaultMessage: '(Thêm người ký cho chứng chỉ)',
    description: 'Helper text for the button used to add signatories',
  },
  nameLabel: {
    id: 'course-authoring.certificates.signatories.name.label',
    defaultMessage: 'Họ và tên',
    description: 'Label for the input field where the signatory name is entered',
  },
  namePlaceholder: {
    id: 'course-authoring.certificates.signatories.name.placeholder',
    defaultMessage: 'Tên người ký',
    description: 'Placeholder text for the signatory name input field',
  },
  nameDescription: {
    id: 'course-authoring.certificates.signatories.name.description',
    defaultMessage: 'Tên của người ký sẽ hiển thị trên chứng chỉ.',
    description: 'Helper text under the name input field',
  },
  titleLabel: {
    id: 'course-authoring.certificates.signatories.title.label',
    defaultMessage: 'Chức danh',
    description: 'Label for the input field where the signatory title is entered',
  },
  titlePlaceholder: {
    id: 'course-authoring.certificates.signatories.title.placeholder',
    defaultMessage: 'Chức danh của người ký',
    description: 'Placeholder text for the signatory title input field',
  },
  titleDescription: {
    id: 'course-authoring.certificates.signatories.title.description',
    defaultMessage: 'Chức danh dài hơn 100 ký tự có thể khiến chứng chỉ không in vừa trên một trang.',
    description: 'Helper text under the title input field',
  },
  organizationLabel: {
    id: 'course-authoring.certificates.signatories.organization.label',
    defaultMessage: 'Tổ chức',
    description: 'Label for the input field where the signatory organization is entered',
  },
  organizationPlaceholder: {
    id: 'course-authoring.certificates.signatories.organization.placeholder',
    defaultMessage: 'Tổ chức của người ký',
    description: 'Placeholder text for the signatory organization input field',
  },
  organizationDescription: {
    id: 'course-authoring.certificates.signatories.organization.description',
    defaultMessage: 'Tên tổ chức của người ký sẽ hiển thị trên chứng chỉ.',
    description: 'Helper text under the organization input field',
  },
  imageLabel: {
    id: 'course-authoring.certificates.signatories.image.label',
    defaultMessage: 'Hình ảnh chữ ký',
    description: 'Label for the input field where the signatory image is selected',
  },
  imagePlaceholder: {
    id: 'course-authoring.certificates.signatories.image.placeholder',
    defaultMessage: 'Đường dẫn đến hình ảnh chữ ký',
    description: 'Placeholder text for the signatory image input field',
  },
  imageDescription: {
    id: 'course-authoring.certificates.signatories.image.description',
    defaultMessage: 'Hình ảnh phải ở định dạng PNG',
    description: 'Helper text under the image input field',
  },
  uploadImageButton: {
    id: 'course-authoring.certificates.signatories.upload.image.button',
    defaultMessage: '{uploadText} hình ảnh chữ ký',
    description: 'Button text for adding or replacing a signature image',
  },
  uploadModal: {
    id: 'course-authoring.certificates.signatories.upload.modal',
    defaultMessage: 'Tải lên',
    description: 'Option for button text for adding a new signature image',
  },
  uploadModalReplace: {
    id: 'course-authoring.certificates.signatories.upload.modal.replace',
    defaultMessage: 'Thay thế',
    description: 'Option for button text for replacing an existing signature image',
  },
  deleteSignatoryConfirmation: {
    id: 'course-authoring.certificates.signatories.confirm-modal',
    defaultMessage: 'Xóa "{name}" khỏi danh sách người ký?',
    description: 'Title for the confirmation modal when deleting a signatory',
  },
  deleteSignatoryConfirmationMessage: {
    id: 'course-authoring.certificates.signatories.confirm-modal.message',
    defaultMessage: 'Hành động này không thể hoàn tác.',
    description: 'A warning message that emphasizes the permanence of the delete action',
  },
});

export default messages;