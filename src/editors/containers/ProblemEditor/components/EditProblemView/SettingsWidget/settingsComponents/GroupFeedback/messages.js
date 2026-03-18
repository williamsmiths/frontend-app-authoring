import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  noGroupFeedbackSummary: {
    id: 'authoring.problemeditor.settings.GroupFeedbackSummary.nonMessage',
    defaultMessage: 'Không có',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  groupFeedbackSummary: {
    id: 'authoring.problemeditor.settings.GroupFeedbackSummary.message',
    defaultMessage: '{groupFeedback}',
    description: 'summary of current feedbacks provided for multiple problems',
  },
  addGroupFeedbackButtonText: {
    id: 'authoring.problemeditor.settings.addGroupFeedbackButtonText',
    defaultMessage: 'Thêm phản hồi nhóm',
    description: 'addGroupFeedbackButtonText',
  },
  groupFeedbackInputLabel: {
    id: 'authoring.problemeditor.settings.GroupFeedbackInputLabel',
    defaultMessage: 'Phản hồi nhóm sẽ hiển thị khi học viên chọn một tập hợp câu trả lời cụ thể.',
    description: 'label for group feedback input',
  },
  groupFeedbackSettingTitle: {
    id: 'authoring.problemeditor.settings.GroupFeedbackSettingTitle',
    defaultMessage: 'Phản hồi nhóm',
    description: 'label for group feedback setting',
  },
});

export default messages;