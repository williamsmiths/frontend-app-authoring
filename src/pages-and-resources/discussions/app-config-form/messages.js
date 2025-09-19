import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationChangeConsequence: {
    id: 'authoring.discussions.configurationChangeConsequences',
    defaultMessage:
      'Học viên sẽ mất quyền truy cập vào bất kỳ bài thảo luận nào đang hoạt động hoặc trước đây trong khóa học của bạn.',
    description:
      'Describes that, as a consequence of changing configuration,'
      + ' students will lose access posts on the course.',
  },
  configureApp: {
    id: 'authoring.discussions.configure.app',
    defaultMessage: 'Cấu hình {name}',
  },
  configure: {
    id: 'authoring.discussions.configure',
    defaultMessage: 'Cấu hình thảo luận',
  },
  ok: {
    id: 'authoring.discussions.ok',
    defaultMessage: 'OK',
    description: 'Button allowing the user to acknowledge the provider change.',
  },
  cancel: {
    id: 'authoring.discussions.cancel',
    defaultMessage: 'Hủy',
    description: 'Button allowing the user to return to discussion provider configurations.',
  },
  confirm: {
    id: 'authoring.discussions.confirm',
    defaultMessage: 'Xác nhận',
    description: 'Button allowing the user to confirm Confirmation.',
  },
  confirmConfigurationChange: {
    id: 'authoring.discussions.confirmConfigurationChange',
    defaultMessage: 'Bạn có chắc muốn thay đổi cài đặt thảo luận không?',
    description: 'Asks the user whether he/she really wants to change settings.',
  },
  confirmEnableDiscussionsLabel: {
    id: 'authoring.discussions.confirmEnableDiscussionsLabel',
    defaultMessage: 'Bật thảo luận trên các unit trong phần được chấm điểm?',
    description: 'Asks the user whether he/she really wants to enable discussions on units in graded subsections.',
  },
  cancelEnableDiscussionsLabel: {
    id: 'authoring.discussions.cancelEnableDiscussionsLabel',
    defaultMessage: 'Tắt thảo luận trên các unit trong phần được chấm điểm?',
    description: 'Asks the user whether he/she really wants to disable discussions on units in graded subsections.',
  },
  confirmEnableDiscussions: {
    id: 'authoring.discussions.confirmEnableDiscussions',
    defaultMessage: 'Bật tùy chọn này sẽ tự động bật thảo luận trên tất cả các unit trong phần được chấm điểm, ngoại trừ các bài thi có thời gian giới hạn.',
    description: 'Asks the user whether he/she really wants to enable discussions on units in graded subsections.',
  },
  cancelEnableDiscussions: {
    id: 'authoring.discussions.cancelEnableDiscussions',
    defaultMessage: 'Tắt tùy chọn này sẽ tự động tắt thảo luận trên tất cả các unit trong phần được chấm điểm. Các chủ đề thảo luận có ít nhất 1 chuỗi sẽ được liệt kê và có thể truy cập dưới “Lưu trữ” trong tab Chủ đề trên trang Thảo luận.',
    description: 'Asks the user whether he/she really wants to disable discussions on units in graded subsections.',
  },
  backButton: {
    id: 'authoring.discussions.backButton',
    defaultMessage: 'Quay lại',
    description: 'Button allowing the user to return to discussion app selection.',
  },
  saveButton: {
    id: 'authoring.discussions.saveButton',
    defaultMessage: 'Lưu',
    description: 'Button allowing the user to submit their discussion configuration.',
  },
  savingButton: {
    id: 'authoring.discussions.savingButton',
    defaultMessage: 'Đang lưu',
    description: 'Button label when the discussion configuration is being submitted.',
  },
  savedButton: {
    id: 'authoring.discussions.savedButton',
    defaultMessage: 'Đã lưu',
    description: 'Button label when the discussion configuration has been successfully submitted.',
  },

  // App names
  'appName-piazza': {
    id: 'authoring.discussions.appConfigForm.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'The name of the Piazza app.',
  },
  'appName-yellowdig': {
    id: 'authoring.discussions.appConfigForm.appName-yellowdig',
    defaultMessage: 'Yellowdig',
    description: 'The name of the yellowdig app.',
  },
  'appName-inscribe': {
    id: 'authoring.discussions.appConfigForm.appName-inscribe',
    defaultMessage: 'InScribe',
    description: 'The name of the inscribe app.',
  },
  'appName-discourse': {
    id: 'authoring.discussions.appConfigForm.appName-discourse',
    defaultMessage: 'Discourse',
    description: 'The name of the discourse app.',
  },
  'appName-ed-discuss': {
    id: 'authoring.discussions.appConfigForm.appName-ed-discuss',
    defaultMessage: 'Ed Discussion',
    description: 'The name of the Ed Discussion app.',
  },
  'appName-legacy': {
    id: 'authoring.discussions.appConfigForm.appName-legacy',
    defaultMessage: 'edX',
    description: 'The name of the Legacy edX Discussions app.',
  },
  'appName-openedx': {
    id: 'authoring.discussions.appConfigForm.appName-openedx',
    defaultMessage: 'edX (mới)',
    description: 'The name of the new edX Discussions app.',
  },
  divisionByGroup: {
    id: 'authoring.discussions.builtIn.divisionByGroup',
    defaultMessage: 'Nhóm học viên',
  },
  divideByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideByCohorts.label',
    defaultMessage: 'Chia thảo luận theo nhóm học viên',
    description: 'Label for a switch that enables dividing discussions by cohorts.  allowDivisionByUnit, divideCourseWideTopics, divideGeneralTopic, and divideQuestionsForTAs are only used if this setting is true.',
  },
  divideByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideByCohorts.help',
    defaultMessage: 'Học viên chỉ có thể xem và trả lời các thảo luận do thành viên trong nhóm của họ đăng.',
    description: 'Help text for a switch that enables dividing discussions by cohorts.',
  },
  divideCourseTopicsByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.label',
    defaultMessage: 'Chia các chủ đề thảo luận toàn khóa học',
    description: 'Label for a switch that enables dividing course wide topics by cohorts.',
  },
  divideCourseTopicsByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.help',
    defaultMessage: 'Chọn các chủ đề thảo luận chung của khóa học mà bạn muốn chia theo nhóm học viên.',
    description: 'Help text asking the user to pick course-wide topics that should be divided by cohort.',
  },
  divideGeneralTopic: {
    id: 'authoring.discussions.builtIn.divideGeneralTopic.label',
    defaultMessage: 'Chung',
    description: 'Label for a checkbox allowing a user to divide the General course wide topic by cohorts.',
  },
  divideQuestionsForTAsTopic: {
    id: 'authoring.discussions.builtIn.divideQuestionsForTAsTopic.label',
    defaultMessage: 'Câu hỏi cho trợ giảng',
    description: 'Label for a checkbox allowing a user to divide the Questions for the TAs (TA stands for "teaching assistant") course wide topic by cohorts.',
  },
  cohortsEnabled: {
    id: 'authoring.discussions.builtIn.cohortsEnabled.label',
    defaultMessage: 'Để điều chỉnh cài đặt này, bật nhóm học viên trên ',
    description: 'Label text informing the user to enable cohort',
  },
  instructorDashboard: {
    id: 'authoring.discussions.builtIn.instructorDashboard.label',
    defaultMessage: 'bảng điều khiển giảng viên',
    description: 'Label text for instructor dashboard',
  },
  // In-context discussion fields
  visibilityInContext: {
    id: 'authoring.discussions.builtIn.visibilityInContext',
    defaultMessage: 'Hiển thị các thảo luận theo ngữ cảnh',
  },
  gradedUnitPagesLabel: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.label',
    defaultMessage: 'Bật thảo luận trên các unit trong phần được chấm điểm',
  },
  gradedUnitPagesHelp: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.help',
    defaultMessage: 'Cho phép học viên tham gia thảo luận trên tất cả các trang unit được chấm điểm, ngoại trừ bài thi có giới hạn thời gian.',
  },
  groupInContextSubsectionLabel: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.label',
    defaultMessage: 'Nhóm thảo luận theo ngữ cảnh ở cấp tiểu phần',
  },
  groupInContextSubsectionHelp: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.help',
    defaultMessage: 'Học viên có thể xem bất kỳ bài đăng nào trong tiểu phần mà họ đang xem, bất kể trang unit nào. Mặc dù không được khuyến nghị, nhưng nếu khóa học có chuỗi học ngắn hoặc số lượng học viên ít, việc nhóm có thể tăng tương tác.',
  },

  // Anonymous posting fields
  anonymousPosting: {
    id: 'authoring.discussions.builtIn.anonymousPosting',
    defaultMessage: 'Đăng bài ẩn danh',
  },
  allowAnonymousPostsLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymous.label',
    defaultMessage: 'Cho phép đăng bài ẩn danh',
  },
  allowAnonymousPostsHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymous.help',
    defaultMessage: 'Nếu bật, học viên có thể tạo bài đăng ẩn danh với tất cả người dùng.',
  },
  allowAnonymousPostsPeersLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.label',
    defaultMessage: 'Cho phép đăng bài ẩn danh với bạn học',
  },
  allowAnonymousPostsPeersHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.help',
    defaultMessage: 'Học viên có thể đăng bài ẩn danh với các bạn học khác, nhưng tất cả bài đăng sẽ hiển thị cho nhân viên khóa học.',
  },

  // Reported Email Notifications
  reportedContentEmailNotifications: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications',
    defaultMessage: 'Thông báo',
  },
  reportedContentEmailNotificationsLabel: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.label',
    defaultMessage: 'Thông báo email cho nội dung bị báo cáo',
  },
  reportedContentEmailNotificationsHelp: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.help',
    defaultMessage: 'Quản trị viên thảo luận, điều hành viên, trợ giảng cộng đồng và trợ giảng nhóm (chỉ cho nhóm của họ) sẽ nhận email thông báo khi có nội dung bị báo cáo.',
  },

  // Discussion Topics
  discussionTopics: {
    id: 'authoring.discussions.discussionTopics',
    defaultMessage: 'Các chủ đề thảo luận',
  },
  discussionTopicsLabel: {
    id: 'authoring.discussions.discussionTopics.label',
    defaultMessage: 'Các chủ đề thảo luận chung',
  },
  discussionTopicsHelp: {
    id: 'authoring.discussions.discussionTopics.help',
    defaultMessage: 'Thảo luận có thể bao gồm các chủ đề chung không thuộc cấu trúc khóa học. Tất cả khóa học đều có một chủ đề chung mặc định.',
  },
  discussionTopicRequired: {
    id: 'authoring.discussions.discussionTopic.required',
    defaultMessage: 'Tên chủ đề là trường bắt buộc',
  },
  discussionTopicNameAlreadyExist: {
    id: 'authoring.discussions.discussionTopic.alreadyExistError',
    defaultMessage: 'Có vẻ tên này đã được sử dụng',
  },
  addTopicButton: {
    id: 'authoring.discussions.addTopicButton',
    defaultMessage: 'Thêm chủ đề',
  },
  deleteButton: {
    id: 'authoring.discussions.deleteButton',
    defaultMessage: 'Xóa',
  },
  cancelButton: {
    id: 'authoring.discussions.cancelButton',
    defaultMessage: 'Hủy',
  },
  discussionTopicDeletionHelp: {
    id: 'authoring.discussions.discussionTopicDeletion.help',
    defaultMessage: 'edX khuyến nghị không xóa các chủ đề thảo luận khi khóa học đang hoạt động.',
  },
  discussionTopicDeletionLabel: {
    id: 'authoring.discussions.discussionTopicDeletion.label',
    defaultMessage: 'Xóa chủ đề này?',
  },
  renameGeneralTopic: {
    id: 'authoring.discussions.builtIn.renameGeneralTopic.label',
    defaultMessage: 'Đổi tên chủ đề chung',
  },
  generalTopicHelp: {
    id: 'authoring.discussions.generalTopicHelp.help',
    defaultMessage: 'Đây là chủ đề thảo luận mặc định cho khóa học của bạn.',
  },
  configureAdditionalTopic: {
    id: 'authoring.discussions.builtIn.configureAdditionalTopic.label',
    defaultMessage: 'Cấu hình chủ đề',
  },
  addTopicHelpText: {
    id: 'authoring.discussions.addTopicHelpText',
    defaultMessage: 'Chọn một tên duy nhất cho chủ đề của bạn',
  },
  // Restricted dates
  restrictedStartDateHelp: {
    id: 'authoring.discussions.restrictedStartDate.help',
    defaultMessage: 'Nhập ngày bắt đầu, ví dụ: 12/10/2023',
  },
  restrictedEndDateHelp: {
    id: 'authoring.discussions.restrictedEndDate.help',
    defaultMessage: 'Nhập ngày kết thúc, ví dụ: 12/17/2023',
  },
  restrictedStartTimeHelp: {
    id: 'authoring.discussions.restrictedStartTime.help',
    defaultMessage: 'Nhập giờ bắt đầu, ví dụ: 09:00 AM',
  },
  restrictedEndTimeHelp: {
    id: 'authoring.discussions.restrictedEndTime.help',
    defaultMessage: 'Nhập giờ kết thúc, ví dụ: 05:00 PM',
  },
  restrictedDatesStatus: {
    id: 'authoring.restrictedDates.status',
    defaultMessage: '{status}',
  },
  restrictedStartDateRequired: {
    id: 'authoring.restrictedDates.startDate.required',
    defaultMessage: 'Ngày bắt đầu là trường bắt buộc',
    description: 'Tells the user that the restricted dates must have start date and it is required.',
  },
  restrictedEndDateRequired: {
    id: 'authoring.restrictedDates.endDate.required',
    defaultMessage: 'Ngày kết thúc là trường bắt buộc',
    description: 'Tells the user that the restricted dates must have end date and it is required.',
  },
  restrictedStartDateInPast: {
    id: 'authoring.restrictedDates.startDate.inPast',
    defaultMessage: 'Ngày bắt đầu không thể sau ngày kết thúc',
    description: 'Tells the user that the restricted start date cannot be in past and cannot be after end date',
  },
  restrictedEndDateInPast: {
    id: 'authoring.restrictedDates.endDate.inPast',
    defaultMessage: 'Ngày kết thúc không thể trước ngày bắt đầu',
    description: 'Tells the user that the restricted end date cannot be in past and cannot be before start date',
  },
  restrictedStartTimeInPast: {
    id: 'authoring.restrictedDates.startTime.inPast',
    defaultMessage: 'Giờ bắt đầu không thể sau giờ kết thúc',
    description: 'Tells the user that the restricted start time cannot be in past and cannot be after end time',
  },
  restrictedEndTimeInPast: {
    id: 'authoring.restrictedDates.endTime.inPast',
    defaultMessage: 'Giờ kết thúc không thể trước giờ bắt đầu',
    description: 'Tells the user that the restricted end time cannot be in past and cannot be before start time',
  },
  restrictedStartTimeInValidFormat: {
    id: 'authoring.restrictedDates.startTime.inValidFormat',
    defaultMessage: 'Nhập giờ bắt đầu hợp lệ',
    description: 'Tells the user that the restricted start time format is in valid',
  },
  restrictedEndTimeInValidFormat: {
    id: 'authoring.restrictedDates.endTime.inValidFormat',
    defaultMessage: 'Nhập giờ kết thúc hợp lệ',
    description: 'Tells the user that the restricted end time format is in valid',
  },
  restrictedStartDateInValidFormat: {
    id: 'authoring.restrictedDates.startDate.inValidFormat',
    defaultMessage: 'Nhập ngày bắt đầu hợp lệ',
    description: 'Tells the user that the restricted start date format is in valid',
  },
  restrictedEndDateInValidFormat: {
    id: 'authoring.restrictedDates.endDate.inValidFormat',
    defaultMessage: 'Nhập ngày kết thúc hợp lệ',
    description: 'Tells the user that the restricted end date format is in valid',
  },
  discussionRestrictionLabel: {
    id: 'authoring.discussions.builtIn.discussionRestriction.label',
    defaultMessage: 'Hạn chế thảo luận',
  },
  discussionRestrictionHelp: {
    id: 'authoring.discussions.discussionRestriction.help',
    defaultMessage: 'Nếu bật, học viên sẽ không thể đăng bài trong các thảo luận.',
  },
  discussionRestrictionDatesHelp: {
    id: 'authoring.discussions.discussionRestrictionDates.help',
    defaultMessage: 'Nếu được thêm, học viên sẽ không thể đăng bài trong các thảo luận trong khoảng thời gian này.',
  },
  addRestrictedDatesButton: {
    id: 'authoring.discussions.addRestrictedDatesButton',
    defaultMessage: 'Thêm ngày hạn chế',
  },
  configureRestrictedDates: {
    id: 'authoring.discussions.builtIn.configureRestrictedDates.label',
    defaultMessage: 'Cấu hình khoảng thời gian hạn chế',
  },
  activeRestrictedDatesDeletionLabel: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.label',
    defaultMessage: 'Xóa các ngày hạn chế đang hoạt động?',
    description: 'Nhãn cho popup xóa ngày hạn chế đang hoạt động, cho phép người dùng xóa khoảng thời gian hạn chế.',
  },
  activeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.help',
    defaultMessage: 'Các ngày hạn chế này hiện đang hoạt động. Nếu xóa, học viên sẽ có thể đăng bài trong các thảo luận trong khoảng thời gian này. Bạn có chắc muốn tiếp tục?',
    description: 'Văn bản hướng dẫn cho việc xóa ngày hạn chế đang hoạt động.',
  },
  completeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.completeRestrictedDatesDeletion.help',
    defaultMessage: 'Bạn có chắc muốn xóa các ngày hạn chế này?',
    description: 'Văn bản hướng dẫn cho việc xóa toàn bộ các ngày hạn chế.',
  },
  restrictedDatesDeletionLabel: {
    id: 'authoring.discussions.restrictedDatesDeletion.label',
    defaultMessage: 'Xóa ngày hạn chế?',
    description: 'Nhãn cho popup xóa ngày hạn chế, cho phép người dùng xóa khoảng thời gian hạn chế.',
  },
  restrictedDatesDeletionHelp: {
    id: 'authoring.discussions.restrictedDatesDeletion.help',
    defaultMessage: 'Nếu xóa, học viên sẽ có thể đăng bài trong các thảo luận trong khoảng thời gian này.',
    description: 'Văn bản hướng dẫn cho việc xóa các ngày hạn chế sắp tới.',
  },
  discussionRestrictionOffLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOff.label',
    defaultMessage: 'Nếu bật, học viên sẽ có thể đăng bài trong các thảo luận',
  },
  discussionRestrictionOnLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOn.label',
    defaultMessage: 'Nếu bật, học viên sẽ không thể đăng bài trong các thảo luận',
  },
  discussionRestrictionScheduledLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionScheduled.label',
    defaultMessage: 'Nếu được thêm, học viên sẽ không thể đăng bài trong các thảo luận trong khoảng thời gian này.',
  },
  enableRestrictedDatesConfirmationLabel: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.label',
    defaultMessage: 'Bật ngày hạn chế?',
  },
  enableRestrictedDatesConfirmationHelp: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.help',
    defaultMessage: 'Học viên sẽ không thể đăng bài trong các thảo luận.',
  },
  deleteAltText: {
    id: 'authoring.topics.delete',
    defaultMessage: 'Xóa chủ đề',
  },
  expandAltText: {
    id: 'authoring.topics.expand',
    defaultMessage: 'Mở rộng',
  },
  collapseAltText: {
    id: 'authoring.topics.collapse',
    defaultMessage: 'Thu gọn',
  },
  startDateLabel: {
    id: 'authoring.restrictedDates.start.date',
    defaultMessage: 'Ngày bắt đầu',
    description: 'Nhãn cho trường ngày bắt đầu',
  },
  startTimeLabel: {
    id: 'authoring.restrictedDates.start.time',
    defaultMessage: 'Thời gian bắt đầu (tùy chọn)',
    description: 'Nhãn cho trường thời gian bắt đầu',
  },
  endDateLabel: {
    id: 'authoring.restrictedDates.end.date',
    defaultMessage: 'Ngày kết thúc',
    description: 'Nhãn cho trường ngày kết thúc',
  },
  endTimeLabel: {
    id: 'authoring.restrictedDates.end.time',
    defaultMessage: 'Thời gian kết thúc (tùy chọn)',
    description: 'Nhãn cho trường thời gian kết thúc',
  },
});

export default messages;
