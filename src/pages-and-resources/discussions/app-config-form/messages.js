import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationChangeConsequence: {
    id: 'authoring.discussions.configurationChangeConsequences',
    defaultMessage:
      'Người học sẽ mất quyền truy cập vào các bài thảo luận hiện tại hoặc trước đó'
      + ' của khóa học.',
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
    defaultMessage: 'Bạn có chắc muốn thay đổi cài đặt thảo luận?',
    description: 'Asks the user whether he/she really wants to change settings.',
  },
  confirmEnableDiscussionsLabel: {
    id: 'authoring.discussions.confirmEnableDiscussionsLabel',
    defaultMessage: 'Bật thảo luận cho các Unit trong các subsection có chấm điểm?',
    description: 'Asks the user whether he/she really wants to enable discussions on units in graded subsections.',
  },
  cancelEnableDiscussionsLabel: {
    id: 'authoring.discussions.cancelEnableDiscussionsLabel',
    defaultMessage: 'Tắt thảo luận cho các Unit trong các subsection có chấm điểm?',
    description: 'Asks the user whether he/she really wants to disable discussions on units in graded subsections.',
  },
  confirmEnableDiscussions: {
    id: 'authoring.discussions.confirmEnableDiscussions',
    defaultMessage: 'Bật tùy chọn này sẽ tự động bật thảo luận cho tất cả Unit trong các subsection có chấm điểm, ngoại trừ bài thi có thời gian.',
    description: 'Asks the user whether he/she really wants to enable discussions on units in graded subsections.',
  },
  cancelEnableDiscussions: {
    id: 'authoring.discussions.cancelEnableDiscussions',
    defaultMessage: 'Tắt tùy chọn này sẽ tự động tắt thảo luận cho tất cả Unit trong các subsection có chấm điểm. Các chủ đề có ít nhất 1 bài viết sẽ được lưu trong mục “Archived” ở tab Topics trên trang Discussions.',
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
    defaultMessage: 'edX (new)',
    description: 'The name of the new edX Discussions app.',
  },

  divisionByGroup: {
    id: 'authoring.discussions.builtIn.divisionByGroup',
    defaultMessage: 'Cohorts',
  },
  divideByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideByCohorts.label',
    defaultMessage: 'Chia thảo luận theo cohorts',
    description: 'Label for a switch that enables dividing discussions by cohorts.',
  },
  divideByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideByCohorts.help',
    defaultMessage: 'Người học chỉ có thể xem và phản hồi các thảo luận của cohort của họ.',
    description: 'Help text for a switch that enables dividing discussions by cohorts.',
  },
  divideCourseTopicsByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.label',
    defaultMessage: 'Chia các chủ đề thảo luận toàn khóa theo cohorts',
    description: 'Label for a switch that enables dividing course wide topics by cohorts.',
  },
  divideCourseTopicsByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.help',
    defaultMessage: 'Chọn các chủ đề bạn muốn chia theo cohort.',
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
    description: 'Label for a checkbox allowing a user to divide the Questions for the TAs course wide topic by cohorts.',
  },
  cohortsEnabled: {
    id: 'authoring.discussions.builtIn.cohortsEnabled.label',
    defaultMessage: 'Để điều chỉnh các cài đặt này, hãy bật cohorts trong ',
    description: 'Label text informing the user to enable cohort',
  },
  instructorDashboard: {
    id: 'authoring.discussions.builtIn.instructorDashboard.label',
    defaultMessage: 'bảng điều khiển giảng viên',
    description: 'Label text for instructor dashboard',
  },

  visibilityInContext: {
    id: 'authoring.discussions.builtIn.visibilityInContext',
    defaultMessage: 'Hiển thị thảo luận theo ngữ cảnh',
  },
  gradedUnitPagesLabel: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.label',
    defaultMessage: 'Bật thảo luận cho Unit trong subsection có chấm điểm',
  },
  gradedUnitPagesHelp: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.help',
    defaultMessage: 'Cho phép người học tham gia thảo luận trên các Unit có chấm điểm (trừ bài thi có thời gian).',
  },
  groupInContextSubsectionLabel: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.label',
    defaultMessage: 'Nhóm thảo luận theo subsection',
  },
  groupInContextSubsectionHelp: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.help',
    defaultMessage: 'Người học có thể xem tất cả bài viết trong subsection, bất kể đang ở Unit nào.',
  },

  anonymousPosting: {
    id: 'authoring.discussions.builtIn.anonymousPosting',
    defaultMessage: 'Đăng ẩn danh',
  },
  allowAnonymousPostsLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymous.label',
    defaultMessage: 'Cho phép bài viết ẩn danh',
  },
  allowAnonymousPostsHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymous.help',
    defaultMessage: 'Người học có thể đăng bài ẩn danh với tất cả người dùng.',
  },
  allowAnonymousPostsPeersLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.label',
    defaultMessage: 'Cho phép ẩn danh với người học khác',
  },
  allowAnonymousPostsPeersHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.help',
    defaultMessage: 'Người học có thể ẩn danh với bạn học, nhưng giảng viên vẫn thấy.',
  },

  reportedContentEmailNotifications: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications',
    defaultMessage: 'Thông báo',
  },
  reportedContentEmailNotificationsLabel: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.label',
    defaultMessage: 'Email khi nội dung bị báo cáo',
  },
  reportedContentEmailNotificationsHelp: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.help',
    defaultMessage: 'Quản trị viên và trợ giảng sẽ nhận email khi nội dung bị báo cáo.',
  },

  discussionTopics: {
    id: 'authoring.discussions.discussionTopics',
    defaultMessage: 'Chủ đề thảo luận',
  },
  discussionTopicsLabel: {
    id: 'authoring.discussions.discussionTopics.label',
    defaultMessage: 'Chủ đề chung',
    description: 'Label for a discussion topic section allowing a user to add new topic.',
  },
  discussionTopicsHelp: {
    id: 'authoring.discussions.discussionTopics.help',
    defaultMessage: 'Có thể tạo các chủ đề chung ngoài cấu trúc khóa học.',
    description: 'Help text for adding new discussion topics.',
  },
  discussionTopicRequired: {
    id: 'authoring.discussions.discussionTopic.required',
    defaultMessage: 'Tên chủ đề là bắt buộc',
    description: 'Tells the user that the discussion topic field is required.',
  },
  discussionTopicNameAlreadyExist: {
    id: 'authoring.discussions.discussionTopic.alreadyExistError',
    defaultMessage: 'Tên này đã tồn tại',
    description: 'Tells the user that the discussion topic name already in use.',
  },
  addTopicButton: {
    id: 'authoring.discussions.addTopicButton',
    defaultMessage: 'Thêm chủ đề',
    description: 'Button label when Add a new discussion topic.',
  },
  deleteButton: {
    id: 'authoring.discussions.deleteButton',
    defaultMessage: 'Xóa',
    description: 'Button label when delete discussion topic.',
  },
  cancelButton: {
    id: 'authoring.discussions.cancelButton',
    defaultMessage: 'Hủy',
    description: 'Button label when cancel discussion topic deletion.',
  },
  discussionTopicDeletionHelp: {
    id: 'authoring.discussions.discussionTopicDeletion.help',
    defaultMessage: 'Không nên xóa chủ đề khi khóa học đang chạy.',
    description: 'Help text for delete a discussion topic.',
  },
  discussionTopicDeletionLabel: {
    id: 'authoring.discussions.discussionTopicDeletion.label',
    defaultMessage: 'Xóa chủ đề này?',
    description: 'Label for discussion topic delete popup.',
  },
  renameGeneralTopic: {
    id: 'authoring.discussions.builtIn.renameGeneralTopic.label',
    defaultMessage: 'Đổi tên chủ đề chung',
    description: 'Label for default topic allowing user to rename.',
  },
  generalTopicHelp: {
    id: 'authoring.discussions.generalTopicHelp.help',
    defaultMessage: 'Đây là chủ đề mặc định của khóa học.',
    description: 'Help text for general discussion topic.',
  },
  configureAdditionalTopic: {
    id: 'authoring.discussions.builtIn.configureAdditionalTopic.label',
    defaultMessage: 'Cấu hình chủ đề',
    description: 'Label for Additional topic.',
  },
  addTopicHelpText: {
    id: 'authoring.discussions.addTopicHelpText',
    defaultMessage: 'Chọn tên chủ đề duy nhất',
    description: 'Help text for input field.',
  },

  restrictedStartDateHelp: {
    id: 'authoring.discussions.restrictedStartDate.help',
    defaultMessage: 'Nhập ngày bắt đầu, ví dụ 12/10/2023',
  },
  restrictedEndDateHelp: {
    id: 'authoring.discussions.restrictedEndDate.help',
    defaultMessage: 'Nhập ngày kết thúc, ví dụ 12/17/2023',
  },
  restrictedStartTimeHelp: {
    id: 'authoring.discussions.restrictedStartTime.help',
    defaultMessage: 'Nhập giờ bắt đầu, ví dụ 09:00 AM',
  },
  restrictedEndTimeHelp: {
    id: 'authoring.discussions.restrictedEndTime.help',
    defaultMessage: 'Nhập giờ kết thúc, ví dụ 05:00 PM',
  },
  restrictedDatesStatus: {
    id: 'authoring.restrictedDates.status',
    defaultMessage: '{status}',
  },
  restrictedStartDateRequired: {
    id: 'authoring.restrictedDates.startDate.required',
    defaultMessage: 'Bắt buộc nhập ngày bắt đầu',
    description: 'Tells the user that start date is required.',
  },
  restrictedEndDateRequired: {
    id: 'authoring.restrictedDates.endDate.required',
    defaultMessage: 'Bắt buộc nhập ngày kết thúc',
    description: 'Tells the user that end date is required.',
  },
  restrictedStartDateInPast: {
    id: 'authoring.restrictedDates.startDate.inPast',
    defaultMessage: 'Ngày bắt đầu không được sau ngày kết thúc',
    description: 'Tells the user invalid start date.',
  },
  restrictedEndDateInPast: {
    id: 'authoring.restrictedDates.endDate.inPast',
    defaultMessage: 'Ngày kết thúc không được trước ngày bắt đầu',
    description: 'Tells the user invalid end date.',
  },
  restrictedStartTimeInPast: {
    id: 'authoring.restrictedDates.startTime.inPast',
    defaultMessage: 'Giờ bắt đầu không được sau giờ kết thúc',
    description: 'Tells the user invalid start time.',
  },
  restrictedEndTimeInPast: {
    id: 'authoring.restrictedDates.endTime.inPast',
    defaultMessage: 'Giờ kết thúc không được trước giờ bắt đầu',
    description: 'Tells the user invalid end time.',
  },
  restrictedStartTimeInValidFormat: {
    id: 'authoring.restrictedDates.startTime.inValidFormat',
    defaultMessage: 'Nhập giờ bắt đầu hợp lệ',
    description: 'Invalid start time format.',
  },
  restrictedEndTimeInValidFormat: {
    id: 'authoring.restrictedDates.endTime.inValidFormat',
    defaultMessage: 'Nhập giờ kết thúc hợp lệ',
    description: 'Invalid end time format.',
  },
  restrictedStartDateInValidFormat: {
    id: 'authoring.restrictedDates.startDate.inValidFormat',
    defaultMessage: 'Nhập ngày bắt đầu hợp lệ',
    description: 'Invalid start date format.',
  },
  restrictedEndDateInValidFormat: {
    id: 'authoring.restrictedDates.endDate.inValidFormat',
    defaultMessage: 'Nhập ngày kết thúc hợp lệ',
    description: 'Invalid end date format.',
  },
  discussionRestrictionLabel: {
    id: 'authoring.discussions.builtIn.discussionRestriction.label',
    defaultMessage: 'Hạn chế thảo luận',
  },
  discussionRestrictionHelp: {
    id: 'authoring.discussions.discussionRestriction.help',
    defaultMessage: 'Nếu bật, người học không thể đăng bài.',
  },
  discussionRestrictionDatesHelp: {
    id: 'authoring.discussions.discussionRestrictionDates.help',
    defaultMessage: 'Người học sẽ không thể đăng trong khoảng thời gian này.',
  },
  addRestrictedDatesButton: {
    id: 'authoring.discussions.addRestrictedDatesButton',
    defaultMessage: 'Thêm khoảng thời gian hạn chế',
  },
  configureRestrictedDates: {
    id: 'authoring.discussions.builtIn.configureRestrictedDates.label',
    defaultMessage: 'Cấu hình khoảng thời gian hạn chế',
  },
  activeRestrictedDatesDeletionLabel: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.label',
    defaultMessage: 'Xóa khoảng thời gian đang hoạt động?',
    description: 'Label for active restricted dates delete popup.',
  },
  activeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.help',
    defaultMessage: 'Nếu xóa, người học sẽ có thể đăng bài trong thời gian này.',
    description: 'Help text for delete active restricted dates.',
  },
  completeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.completeRestrictedDatesDeletion.help',
    defaultMessage: 'Bạn có chắc muốn xóa khoảng thời gian này?',
    description: 'Help text for delete complete restricted dates.',
  },
  restrictedDatesDeletionLabel: {
    id: 'authoring.discussions.restrictedDatesDeletion.label',
    defaultMessage: 'Xóa khoảng thời gian hạn chế?',
    description: 'Label for restricted dates delete popup.',
  },
  restrictedDatesDeletionHelp: {
    id: 'authoring.discussions.restrictedDatesDeletion.help',
    defaultMessage: 'Nếu xóa, người học có thể đăng bài trong thời gian này.',
    description: 'Help text for delete upcoming restricted dates.',
  },
  discussionRestrictionOffLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOff.label',
    defaultMessage: 'Nếu bật, người học có thể đăng bài',
  },
  discussionRestrictionOnLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOn.label',
    defaultMessage: 'Nếu bật, người học không thể đăng bài',
  },
  discussionRestrictionScheduledLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionScheduled.label',
    defaultMessage: 'Người học không thể đăng bài trong khoảng thời gian này.',
  },
  enableRestrictedDatesConfirmationLabel: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.label',
    defaultMessage: 'Bật khoảng thời gian hạn chế?',
  },
  enableRestrictedDatesConfirmationHelp: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.help',
    defaultMessage: 'Người học sẽ không thể đăng bài.',
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
    description: 'Label for start date field',
  },
  startTimeLabel: {
    id: 'authoring.restrictedDates.start.time',
    defaultMessage: 'Giờ bắt đầu (tùy chọn)',
    description: 'label for start time field',
  },
  endDateLabel: {
    id: 'authoring.restrictedDates.end.date',
    defaultMessage: 'Ngày kết thúc',
    description: 'label for end date field',
  },
  endTimeLabel: {
    id: 'authoring.restrictedDates.end.time',
    defaultMessage: 'Giờ kết thúc (tùy chọn)',
    description: 'label for end time field',
  },
});

export default messages;