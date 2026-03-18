import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.schedule.heading.title',
    defaultMessage: 'Lịch trình & chi tiết',
  },
  headingSubtitle: {
    id: 'course-authoring.schedule.heading.subtitle',
    defaultMessage: 'Cài đặt',
  },
  buttonSaveText: {
    id: 'course-authoring.schedule.alert.button.save',
    defaultMessage: 'Lưu thay đổi',
  },
  buttonSavingText: {
    id: 'course-authoring.schedule.alert.button.saving',
    defaultMessage: 'Đang lưu',
  },
  buttonCancelText: {
    id: 'course-authoring.schedule.alert.button.cancel',
    defaultMessage: 'Hủy',
  },
  alertWarningAriaLabelledby: {
    id: 'course-authoring.schedule.alert.warning.aria.labelledby',
    defaultMessage: 'notification-warning-title',
  },
  alertWarningAriaDescribedby: {
    id: 'course-authoring.schedule.alert.warning.aria.describedby',
    defaultMessage: 'notification-warning-description',
  },
  alertWarning: {
    id: 'course-authoring.schedule.alert.warning',
    defaultMessage: 'Bạn đã thực hiện một số thay đổi',
  },
  alertWarningOnSaveWithError: {
    id: 'course-authoring.schedule.alert.warning.save.error',
    defaultMessage: 'Bạn đã thực hiện một số thay đổi, nhưng có một số lỗi',
  },
  alertWarningDescriptions: {
    id: 'course-authoring.schedule.alert.warning.descriptions',
    defaultMessage: 'Các thay đổi của bạn sẽ không có hiệu lực cho đến khi bạn lưu.',
  },
  alertWarningDescriptionsOnSaveWithError: {
    id: 'course-authoring.schedule.alert.warning.save.descriptions.error',
    defaultMessage: 'Vui lòng xử lý các lỗi trên trang này trước, sau đó lưu lại.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.schedule.alert.success.aria.labelledby',
    defaultMessage: 'tiêu-đề-xác-nhận',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.schedule.alert.success.aria.describedby',
    defaultMessage: 'mô-tả-xác-nhận',
  },
  alertSuccess: {
    id: 'course-authoring.schedule.alert.success',
    defaultMessage: 'Các thay đổi của bạn đã được lưu.',
  },
  alertLoadFailAriaLabelledby: {
    id: 'course-authoring.schedule.alert.load.fail.aria.labelledby',
    defaultMessage: 'tiêu-đề-xác-nhận',
  },
  alertLoadFailAriaDescribedby: {
    id: 'course-authoring.schedule.alert.load.fail.aria.describedby',
    defaultMessage: 'mô-tả-xác-nhận',
  },
  alertLoadFail: {
    id: 'course-authoring.schedule.alert.load.fail',
    defaultMessage: 'Đã xảy ra lỗi khi tải cài đặt của bạn.',
  },
  alertFailAriaLabelledby: {
    id: 'course-authoring.schedule.alert.fail.aria.labelledby',
    defaultMessage: 'tiêu-đề-xác-nhận',
  },
  alertFailAriaDescribedby: {
    id: 'course-authoring.schedule.alert.fail.aria.describedby',
    defaultMessage: 'mô-tả-xác-nhận',
  },
  alertFail: {
    id: 'course-authoring.schedule.alert.fail',
    defaultMessage: 'Đã xảy ra lỗi khi lưu các thay đổi của bạn.',
  },
  errorMessage1: {
    id: 'course-authoring.schedule.schedule-section.error-message-1',
    defaultMessage: 'Hành vi hiển thị chứng chỉ phải là "Một ngày sau khi khóa học kết thúc" nếu ngày có hiệu lực của chứng chỉ được thiết lập.',
  },
  errorMessage2: {
    id: 'course-authoring.schedule.schedule-section.error-message-2',
    defaultMessage: 'Ngày kết thúc đăng ký không được sau ngày kết thúc khóa học.',
  },
  errorMessage3: {
    id: 'course-authoring.schedule.schedule-section.error-message-3',
    defaultMessage: 'Ngày bắt đầu đăng ký không được sau ngày kết thúc đăng ký.',
  },
  errorMessage4: {
    id: 'course-authoring.schedule.schedule-section.error-message-4',
    defaultMessage: 'Ngày bắt đầu khóa học phải sau ngày bắt đầu đăng ký.',
  },
  errorMessage5: {
    id: 'course-authoring.schedule.schedule-section.error-message-5',
    defaultMessage: 'Ngày kết thúc khóa học phải sau ngày bắt đầu khóa học.',
  },
  errorMessage6: {
    id: 'course-authoring.schedule.schedule-section.error-message-6',
    defaultMessage: 'Ngày chứng chỉ có hiệu lực phải sau ngày kết thúc khóa học.',
  },
  errorMessage7: {
    id: 'course-authoring.schedule.schedule-section.error-message-7',
    defaultMessage: 'Khóa học phải có ngày bắt đầu.',
  },
  errorMessage8: {
    id: 'course-authoring.schedule.schedule-section.error-message-8',
    defaultMessage: 'Vui lòng nhập một số nguyên trong khoảng từ %(min)s đến %(max)s.',
  },
});

export default messages;