import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.learning-assistant.heading',
    defaultMessage: 'Cấu hình Trợ lý học tập',
  },
  enableLearningAssistantLabel: {
    id: 'course-authoring.pages-resources.learning_assistant.enable-learning-assistant.label',
    defaultMessage: 'Trợ lý học tập',
  },
  enableLearningAssistantHelp: {
    id: 'course-authoring.pages-resources.learning_assistant.enable-learning-assistant.help',
    defaultMessage: `Củng cố các khái niệm học tập bằng cách chia sẻ nội dung khóa học dưới dạng văn bản với OpenAI (qua API)
      để kích hoạt Trợ lý học tập trong khóa học. Người học có thể để lại phản hồi về chất lượng trải nghiệm được hỗ trợ bởi AI,
      nhằm giúp edX cải thiện hiệu suất của công cụ.`,
  },
  learningAssistantOpenAILink: {
    id: 'course-authoring.pages-resources.learning_assistant.open-ai.link',
    defaultMessage: 'Tìm hiểu thêm về cách OpenAI xử lý dữ liệu',
  },
  learningAssistantOpenAIDataPrivacyLink: {
    id: 'course-authoring.pages-resources.learning_assistant.open-ai.data-privacy.link',
    defaultMessage: 'Tìm hiểu thêm về quyền riêng tư dữ liệu của OpenAI API',
  },
});

export default messages;
