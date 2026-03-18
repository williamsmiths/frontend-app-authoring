import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.learning-assistant.heading',
    defaultMessage: 'Cấu Hình Trợ Lý Học Tập',
  },
  enableLearningAssistantLabel: {
    id: 'course-authoring.pages-resources.learning_assistant.enable-learning-assistant.label',
    defaultMessage: 'Trợ Lý Học Tập',
  },
  enableLearningAssistantHelp: {
    id: 'course-authoring.pages-resources.learning_assistant.enable-learning-assistant.help',
    defaultMessage: `Củng cố các khái niệm học tập bằng cách chia sẻ nội dung khóa học dựa trên văn bản với OpenAI (qua API) để hỗ trợ
      Trợ lý Học tập trong khóa học. Học viên có thể để lại phản hồi về chất lượng trải nghiệm được hỗ trợ bởi AI để
      edX sử dụng nhằm cải thiện hiệu suất của công cụ.`,
  },
  learningAssistantOpenAILink: {
    id: 'course-authoring.pages-resources.learning_assistant.open-ai.link',
    defaultMessage: 'Tìm Hiểu Thêm Về Cách OpenAI Xử Lý Dữ Liệu',
  },
  learningAssistantOpenAIDataPrivacyLink: {
    id: 'course-authoring.pages-resources.learning_assistant.open-ai.data-privacy.link',
    defaultMessage: 'Tìm Hiểu Thêm Về Quyền Riêng Tư Dữ Liệu API OpenAI',
  },
});

export default messages;