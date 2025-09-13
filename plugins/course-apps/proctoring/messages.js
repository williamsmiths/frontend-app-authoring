import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'authoring.proctoring.alert.error': {
    id: 'authoring.proctoring.alert.error',
    defaultMessage: 'Chúng tôi đã gặp lỗi kỹ thuật khi lưu cài đặt kỳ thi có giám sát. Đây có thể chỉ là sự cố tạm thời, vui lòng thử lại sau vài phút. Nếu sự cố vẫn tiếp diễn, vui lòng truy cập {support_link} để được hỗ trợ.',
    description: 'Alert message for proctoring settings save error.',
  },
  'authoring.proctoring.alert.forbidden': {
    id: 'authoring.proctoring.alert.forbidden',
    defaultMessage: 'Bạn không có quyền chỉnh sửa cài đặt kỳ thi có giám sát cho khóa học này. Nếu bạn là thành viên nhóm khóa học và sự cố vẫn tiếp diễn, vui lòng truy cập {support_link} để được hỗ trợ.',
    description: 'Alert message for proctoring settings permission error.',
  },
  'authoring.proctoring.no': {
    id: 'authoring.proctoring.no',
    defaultMessage: 'Không',
    description: '"No" option for yes/no radio button set',
  },
  'authoring.proctoring.yes': {
    id: 'authoring.proctoring.yes',
    defaultMessage: 'Có',
    description: '"Yes" option for proctored exam settings',
  },
  'authoring.proctoring.support.text': {
    id: 'authoring.proctoring.support.text',
    defaultMessage: 'Trang hỗ trợ',
    description: 'Text linking to the support page.',
  },
  'authoring.proctoring.enableproctoredexams.label': {
    id: 'authoring.proctoring.enableproctoredexams.label',
    defaultMessage: 'Kỳ thi có giám sát',
    description: 'Label for checkbox to enable proctored exams.',
  },
  'authoring.proctoring.enableproctoredexams.help': {
    id: 'authoring.proctoring.enableproctoredexams.help',
    defaultMessage: 'Bật và cấu hình kỳ thi có giám sát trong khóa học của bạn.',
    description: 'Help text for checkbox to enable proctored exams.',
  },
  'authoring.proctoring.enabled': {
    id: 'authoring.proctoring.enabled',
    defaultMessage: 'Đã bật',
    description: 'Text describing that the feature is enabled.',
  },
  'authoring.proctoring.learn.more': {
    id: 'authoring.proctoring.learn.more',
    defaultMessage: 'Tìm hiểu thêm về giám sát thi',
    description: 'Link to learn more about the proctoring feature.',
  },
  'authoring.proctoring.provider.label': {
    id: 'authoring.proctoring.provider.label',
    defaultMessage: 'Nhà cung cấp giám sát',
    description: 'Label for proctoring provider dropdown selection.',
  },
  'authoring.proctoring.provider.help': {
    id: 'authoring.proctoring.provider.help',
    defaultMessage: 'Chọn nhà cung cấp giám sát mà bạn muốn sử dụng cho khóa học này.',
    description: 'Help text for selecting a proctoring provider.',
  },
  'authoring.proctoring.provider.help.aftercoursestart': {
    id: 'authoring.proctoring.provider.help.aftercoursestart',
    defaultMessage: 'Không thể thay đổi nhà cung cấp giám sát sau ngày bắt đầu khóa học.',
    description: 'Help text notifying the user that the provider cannot be changed for a course that has already begun.',
  },
  'authoring.proctoring.escalationemail.label': {
    id: 'authoring.proctoring.escalationemail.label',
    defaultMessage: 'Email xử lý sự cố',
    description: 'Label for escalation email text field',
  },
  'authoring.proctoring.escalationemail.help': {
    id: 'authoring.proctoring.escalationemail.help',
    defaultMessage: 'Cung cấp địa chỉ email để nhóm hỗ trợ liên hệ khi cần xử lý sự cố (ví dụ: khiếu nại, đánh giá chậm).',
    description: 'Help text explaining escalation email field.',
  },
  'authoring.proctoring.escalationemail.error.blank': {
    id: 'authoring.proctoring.escalationemail.error.blank',
    defaultMessage: 'Trường Email xử lý sự cố không được để trống nếu {proctoringProviderName} là nhà cung cấp đã chọn.',
    description: 'Error message for missing required email field.',
  },
  'authoring.proctoring.escalationemail.error.invalid': {
    id: 'authoring.proctoring.escalationemail.error.invalid',
    defaultMessage: 'Trường Email xử lý sự cố có định dạng sai và không hợp lệ.',
    description: 'Error message for a invalid email format.',
  },
  'authoring.proctoring.allowoptout.label': {
    id: 'authoring.proctoring.allowoptout.label',
    defaultMessage: 'Cho phép người học chọn không tham gia kỳ thi có giám sát',
    description: 'Label for radio selection allowing proctored exam opt out',
  },
  'authoring.proctoring.createzendesk.label': {
    id: 'authoring.proctoring.createzendesk.label',
    defaultMessage: 'Tạo ticket Zendesk cho các lần làm bài đáng ngờ',
    description: 'Label for Zendesk ticket creation radio select.',
  },
  'authoring.proctoring.error.single': {
    id: 'authoring.proctoring.error.single',
    defaultMessage: 'Có 1 lỗi trong biểu mẫu này.',
    description: 'Error alert for one and only one error in the form.',
  },
  'authoring.proctoring.error.multiple': {
    id: 'authoring.proctoring.escalationemail.error.multiple',
    defaultMessage: 'Có {numOfErrors} lỗi trong biểu mẫu này.',
    description: 'Error alert for multiple errors in the form.',
  },
  'authoring.proctoring.save': {
    id: 'authoring.proctoring.save',
    defaultMessage: 'Lưu',
    description: 'Button to save proctoring settings.',
  },
  'authoring.proctoring.saving': {
    id: 'authoring.proctoring.saving',
    defaultMessage: 'Đang lưu...',
    description: 'Proctoring settings are in the process of saving.',
  },
  'authoring.proctoring.cancel': {
    id: 'authoring.proctoring.cancel',
    defaultMessage: 'Hủy',
    description: 'Button to cancel edits to proctoring settings.',
  },
  'authoring.proctoring.studio.link.text': {
    id: 'authoring.proctoring.studio.link.text',
    defaultMessage: 'Quay lại khóa học của bạn trong Studio',
    description: 'Link to go back to the course Studio page.',
  },
});

export default messages;