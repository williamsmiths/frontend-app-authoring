import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorTitle',
    defaultMessage: 'Khóa học này được tạo từ một lần mở lại. Cần một số cấu hình thủ công.',
  },
  configurationErrorText: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorText',
    defaultMessage: 'Hiện chưa có nội dung nào hiển thị và chưa có học viên nào ghi danh. Hãy chắc chắn rằng bạn đã xem lại và đặt lại tất cả ngày tháng (bao gồm Ngày bắt đầu khóa học), thiết lập đội ngũ khóa học, rà soát các cập nhật và tài liệu có ngày tháng, cũng như tạo nội dung cho diễn đàn và wiki.',
  },
  discussionNotificationText: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationText',
    defaultMessage: 'Lần chạy khóa học này đang sử dụng phiên bản nâng cấp của diễn đàn thảo luận {platformName}. Để hiển thị thanh bên thảo luận, các xBlock thảo luận sẽ không còn hiển thị cho học viên.',
  },
  discussionNotificationLearnMore: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationLearnMore',
    defaultMessage: 'Tìm hiểu thêm',
  },
  discussionNotificationFeedback: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationFeedback',
    defaultMessage: 'Chia sẻ phản hồi',
  },
  deprecationWarningTitle: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningTitle',
    defaultMessage: 'Khóa học này đang sử dụng các tính năng không còn được hỗ trợ.',
  },
  deprecationWarningBlocksText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningBlocksText',
    defaultMessage: 'Bạn cần xóa hoặc thay thế các thành phần sau.',
  },
  deprecationWarningDeprecatedBlockText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningDeprecatedBlockText',
    defaultMessage: 'Để tránh lỗi, {platformName} khuyến nghị mạnh mẽ rằng bạn nên xóa các tính năng không được hỗ trợ khỏi phần cài đặt nâng cao của khóa học. Để làm điều này, hãy vào {hyperlink}, tìm mục "Danh sách mô-đun nâng cao", rồi xóa các mô-đun sau khỏi danh sách.',
  },
  advancedSettingLinkText: {
    id: 'course-authoring.course-outline.page-alerts.advancedSettingLinkText',
    defaultMessage: 'Trang Cài đặt Nâng cao',
  },
  deprecatedComponentName: {
    id: 'course-authoring.course-outline.page-alerts.deprecatedComponentName',
    defaultMessage: 'Thành phần không còn được hỗ trợ',
  },
  proctoringErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorTitle',
    defaultMessage: 'Khóa học này có cài đặt kỳ thi giám sát chưa hoàn chỉnh hoặc không hợp lệ.',
  },
  proctoringErrorText: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorText',
    defaultMessage: 'Để cập nhật các cài đặt này, hãy truy cập {hyperlink}.',
  },
  proctoredSettingsLinkText: {
    id: 'course-authoring.course-outline.page-alerts.proctoredSettingsLinkText',
    defaultMessage: 'Trang Cài đặt Kỳ thi Giám sát',
  },
  alertFailedGeneric: {
    id: 'course-authoring.course-outline.page-alert.generic-error.description',
    defaultMessage: 'Không thể {actionName} {type}. Vui lòng thử lại.',
  },
  newFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.title',
    defaultMessage: 'Đã thêm {newFilesLen, plural, one {tệp} other {các tệp}} mới vào Tệp.',
  },
  newFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.description',
    defaultMessage: 'Các {newFilesLen, plural, one {tệp bắt buộc sau đã} other {tệp bắt buộc sau đã}} được nhập vào khóa học: {newFilesStr}',
  },
  newFileAlertAction: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.action',
    defaultMessage: 'Xem tệp',
  },
  errorFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.title',
    defaultMessage: 'Đã xảy ra một số lỗi',
  },
  errorFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.description',
    defaultMessage: 'Các {errorFilesLen, plural, one {tệp} other {tệp}} sau không thể thêm vào khóa học: {errorFilesStr}',
  },
  conflictingFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.conflicting-files.title',
    defaultMessage: 'Bạn có thể cần cập nhật thủ công {conflictingFilesLen, plural, one {một tệp} other {các tệp}}',
  },
  conflictingFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-conflicting.description',
    defaultMessage: 'Các {conflictingFilesLen, plural, one {tệp} other {tệp}} sau đã tồn tại trong khóa học này nhưng không khớp với phiên bản được sử dụng bởi thành phần bạn vừa dán: {conflictingFilesStr}',
  },
  serverErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.server-error.title',
    defaultMessage: 'Máy chủ Studio đã gặp lỗi',
  },
  serverErrorAlertBody: {
    id: 'course-authoring.course-outline.page-alert.server-error.body',
    defaultMessage: 'Đã xảy ra lỗi trong Studio và không thể tải trang. Vui lòng thử lại sau ít phút. Chúng tôi đã ghi nhận lỗi và đội ngũ kỹ thuật đang xử lý để khắc phục sớm nhất có thể.',
  },
  networkErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.network-error.title',
    defaultMessage: 'Lỗi mạng',
  },
  forbiddenAlert: {
    id: 'course-authoring.course-outline.page-alert.forbidden.title',
    defaultMessage: 'Truy cập bị hạn chế',
  },
  forbiddenAlertBody: {
    id: 'course-authoring.course-outline.page-alert.forbidden.body',
    defaultMessage: 'Có vẻ như bạn đang cố truy cập vào một trang mà bạn không có quyền xem. Hãy liên hệ quản trị viên nếu bạn nghĩ đây là sự nhầm lẫn, hoặc quay lại {LMS}.',
  },
  forbiddenAlertLmsUrl: {
    id: 'course-authoring.course-outline.page-alert.lms',
    defaultMessage: 'LMS',
  },
});

export default messages;