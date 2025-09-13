import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  connectionError: {
    id: 'authoring.alert.error.connection',
    defaultMessage: 'Chúng tôi đã gặp lỗi kỹ thuật khi tải trang này. Đây có thể là sự cố tạm thời, vui lòng thử lại sau vài phút. Nếu sự cố vẫn tiếp diễn, vui lòng truy cập {supportLink} để được hỗ trợ.',
    description: 'Thông báo lỗi hiển thị cho người dùng khi có sự cố kết nối với máy chủ.',
  },
  supportText: {
    id: 'authoring.alert.support.text',
    defaultMessage: 'Trang hỗ trợ',
  },
});

export default messages;