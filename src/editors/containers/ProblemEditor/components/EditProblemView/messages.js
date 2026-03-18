import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  saveWarningModalCancelButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.cancelButton.label',
    defaultMessage: 'Hủy',
    description: 'Label for cancel button in the save warning modal',
  },
  saveWarningModalSaveButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.saveButton.label',
    defaultMessage: 'Ok',
    description: 'Label for save button in the save warning modal',
  },
  saveWarningModalBodyQuestion: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.body.question',
    defaultMessage: 'Bạn có chắc muốn thoát khỏi trình chỉnh sửa không?',
    description: 'Question in body of save warning modal',
  },
  noAnswerTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.title',
    defaultMessage: 'Chưa chỉ định đáp án',
    description: 'Title for no answer modal',
  },
  noAnswerBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.body.explanation',
    defaultMessage: 'Chưa có đáp án đúng nào được chỉ định.',
    description: 'Explanation in body of no answer modal',
  },
  olxSettingDiscrepancyTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.title',
    defaultMessage: 'Không khớp cài đặt OLX',
    description: 'Title for mismatched settings modal',
  },
  olxSettingDiscrepancyBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.body.explanation',
    defaultMessage: `Phát hiện sự không khớp giữa các cài đặt được định nghĩa trong thẻ problem của OLX và
      các cài đặt được chọn ở thanh bên. Các cài đặt trong thẻ problem của OLX sẽ được lưu và
      các giá trị tương ứng ở thanh bên sẽ bị loại bỏ.`,
    description: 'Explanation in body of mismatched settings modal',
  },
});

export default messages;