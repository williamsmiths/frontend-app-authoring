import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  itemInProgressFooterText: {
    id: 'course-authoring.studio-home.processing.course-item.footer.in-progress',
    defaultMessage: 'Khóa học mới sẽ được thêm vào danh sách của bạn trong 5-10 phút. Hãy quay lại trang này hoặc {refresh} để cập nhật danh sách khóa học. Khóa học mới sẽ cần một số cấu hình thủ công.',
  },
  itemInProgressFooterHyperlink: {
    id: 'course-authoring.studio-home.processing.course-item.footer.in-progress.hyperlink',
    defaultMessage: 'làm mới',
  },
  itemInProgressActionText: {
    id: 'course-authoring.studio-home.processing.course-item.action.in-progress',
    defaultMessage: 'Đang cấu hình như bản chạy lại',
  },
  itemIsFailedActionText: {
    id: 'course-authoring.studio-home.processing.course-item.action.failed',
    defaultMessage: 'Lỗi cấu hình',
  },
  itemFailedFooterText: {
    id: 'course-authoring.studio-home.processing.course-item.footer.failed',
    defaultMessage: 'Đã xảy ra lỗi hệ thống khi xử lý khóa học của bạn. Vui lòng quay lại khóa học gốc để thử chạy lại, hoặc liên hệ quản lý chương trình để được hỗ trợ.',
  },
  itemFailedFooterButton: {
    id: 'course-authoring.studio-home.processing.course-item.footer.failed.button',
    defaultMessage: 'Đóng',
  },
});

export default messages;