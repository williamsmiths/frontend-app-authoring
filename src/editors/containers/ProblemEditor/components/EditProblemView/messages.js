import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  saveWarningModalCancelButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.cancelButton.label',
    defaultMessage: 'Hủy',
    description: 'Label for cancel button in the save warning modal',
  },
  saveWarningModalSaveButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.saveButton.label',
    defaultMessage: 'Đồng ý',
    description: 'Label for save button in the save warning modal',
  },
  saveWarningModalBodyQuestion: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.body.question',
    defaultMessage: 'Bạn có chắc chắn muốn thoát khỏi trình chỉnh sửa không?',
    description: 'Question in body of save warning modal',
  },
  noAnswerTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.title',
    defaultMessage: 'Chưa có đáp án được chỉ định',
    description: 'Title for no answer modal',
  },
  noAnswerBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.body.explanation',
    defaultMessage: 'Chưa có đáp án đúng nào được chỉ định.',
    description: 'Explanation in body of no answer modal',
  },
  olxSettingDiscrepancyTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.title',
    defaultMessage: 'Không khớp thiết lập OLX',
    description: 'Title for mismatched settings modal',
  },
  olxSettingDiscrepancyBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.body.explanation',
    defaultMessage: `Phát hiện có sự khác biệt giữa các thiết lập được định nghĩa trong thẻ problem của OLX 
      và các thiết lập được chọn trong sidebar. Các thiết lập trong thẻ problem của OLX sẽ được lưu, 
      còn các giá trị tương ứng trong sidebar sẽ bị loại bỏ.`,
    description: 'Explanation in body of mismatched settings modal',
  },
});

export default messages;