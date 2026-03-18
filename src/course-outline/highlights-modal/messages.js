import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.highlights-modal.title',
    defaultMessage: 'Nội dung nổi bật cho {title}',
  },
  description: {
    id: 'course-authoring.course-outline.highlights-modal.description',
    defaultMessage: 'Nhập từ 3–5 nội dung nổi bật để đưa vào email gửi đến người học cho phần này (tối đa 250 ký tự). Để biết thêm thông tin và xem ví dụ về mẫu email, hãy xem {documentation}.',
  },
  documentationLink: {
    id: 'course-authoring.course-outline.highlights-modal.documentation-link',
    defaultMessage: 'tài liệu hướng dẫn',
  },
  highlight: {
    id: 'course-authoring.course-outline.highlights-modal.highlight',
    defaultMessage: 'Nội dung nổi bật {index}',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  saveButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.save',
    defaultMessage: 'Lưu',
  },
});

export default messages;