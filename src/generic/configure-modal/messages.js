import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.configure-modal.title',
    defaultMessage: 'Cài đặt {title}',
  },
  componentTitle: {
    id: 'course-authoring.course-outline.configure-modal.component.title',
    defaultMessage: 'Quyền chỉnh sửa cho: {title}',
    description: 'The visibility modal title for unit',
  },
  basicTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.title',
    defaultMessage: 'Cơ bản',
  },
  notGradedTypeOption: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.notGradedTypeOption',
    defaultMessage: 'Không chấm điểm',
  },
  releaseDateAndTime: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date-and-time',
    defaultMessage: 'Ngày và giờ phát hành',
  },
  releaseDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date',
    defaultMessage: 'Ngày phát hành:',
  },
  releaseTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-time-UTC',
    defaultMessage: 'Giờ phát hành (UTC):',
  },
  visibilityTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.title',
    defaultMessage: 'Hiển thị',
  },
  visibilitySectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility',
    defaultMessage: 'Hiển thị {visibilityTitle}',
  },
  unitVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-visibility',
    defaultMessage: 'Hiển thị bài học',
  },
  unitAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-access',
    defaultMessage: 'Quyền truy cập bài học',
  },
  libraryContentAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.library-content-access',
    defaultMessage: 'Quyền truy cập nội dung thư viện',
  },
  splitTestAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.split-test-access',
    defaultMessage: 'Quyền truy cập kiểm thử A/B',
  },
  discussionEnabledSectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.section-title',
    defaultMessage: 'Thảo luận',
  },
  discussionEnabledCheckbox: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.checkbox',
    defaultMessage: 'Bật thảo luận',
  },
  discussionEnabledDescription: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.description',
    defaultMessage: 'Chủ đề cho các bài học chưa xuất bản sẽ không được tạo',
  },
  hideFromLearners: {
    id: 'course-authoring.course-outline.configure-modal.visibility.hide-from-learners',
    defaultMessage: 'Ẩn với học viên',
  },
  restrictAccessTo: {
    id: 'course-authoring.course-outline.configure-modal.visibility.restrict-access-to',
    defaultMessage: 'Giới hạn truy cập cho',
  },
  sectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility-warning',
    defaultMessage: 'Nếu bạn làm cho phần này hiển thị với học viên, họ sẽ thấy nội dung sau khi qua ngày phát hành và bạn đã xuất bản phần đó. Chỉ các bài học được ẩn rõ ràng mới tiếp tục bị ẩn.',
  },
  unitVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-visibility-warning',
    defaultMessage: 'Nếu bài học đã được xuất bản trước đó, mọi thay đổi khi bị ẩn giờ sẽ hiển thị với học viên.',
  },
  subsectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.subsection-visibility-warning',
    defaultMessage: 'Nếu chọn tùy chọn khác "Ẩn toàn bộ mục con", các bài đã xuất bản sẽ hiển thị với học viên trừ khi bị ẩn rõ ràng.',
  },
  unitSelectGroup: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group',
    defaultMessage: 'Chọn một hoặc nhiều nhóm:',
  },
  unitSelectGroupType: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-type',
    defaultMessage: 'Chọn loại nhóm',
  },
  unitSelectDeletedGroupErrorMessage: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-deleted-error-message',
    defaultMessage: 'Nhóm này không còn tồn tại. Hãy chọn nhóm khác hoặc bỏ giới hạn truy cập.',
    description: 'The alert text of no longer available group',
  },
  unitAllLearnersAndStaff: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-all-learners-staff',
    defaultMessage: 'Tất cả học viên và nhân viên',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.configure-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  saveButton: {
    id: 'course-authoring.course-outline.configure-modal.button.label',
    defaultMessage: 'Lưu',
  },
  grading: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grading',
    defaultMessage: 'Chấm điểm',
  },
  gradeAs: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grade-as',
    defaultMessage: 'Chấm điểm dưới dạng:',
  },
  dueDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-date',
    defaultMessage: 'Hạn nộp:',
  },
  dueTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-time-UTC',
    defaultMessage: 'Giờ hạn (UTC):',
  },
  subsectionVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.subsection-visibility',
    defaultMessage: 'Hiển thị mục con',
  },
  showEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection',
    defaultMessage: 'Hiển thị toàn bộ mục con',
  },
  showEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection-description',
    defaultMessage: 'Học viên thấy mục đã xuất bản và có thể truy cập nội dung',
  },
  hideContentAfterDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due',
    defaultMessage: 'Ẩn nội dung sau hạn',
  },
  hideContentAfterDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due-description',
    defaultMessage: 'Sau hạn nộp, học viên không thể truy cập nội dung. Không tính vào điểm.',
  },
  hideContentAfterEnd: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-end',
    defaultMessage: 'Ẩn nội dung sau ngày kết thúc',
  },
  hideContentAfterEndDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-end-description',
    defaultMessage: 'Sau khi khóa học kết thúc, học viên không thể truy cập nội dung. Không tính điểm.',
  },
  hideEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection',
    defaultMessage: 'Ẩn toàn bộ mục con',
  },
  hideEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection-description',
    defaultMessage: 'Học viên không thấy mục này. Không tính điểm.',
  },
  assessmentResultsVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.assessment-results-visibility',
    defaultMessage: 'Hiển thị kết quả đánh giá',
  },
  alwaysShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results',
    defaultMessage: 'Luôn hiển thị kết quả',
  },
  alwaysShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results-description',
    defaultMessage: 'Học viên thấy kết quả ngay sau khi nộp.',
  },
  neverShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results',
    defaultMessage: 'Không bao giờ hiển thị kết quả',
  },
  neverShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results-description',
    defaultMessage: 'Học viên không thấy kết quả và điểm.',
  },
  showAssessmentResultsPastDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due',
    defaultMessage: 'Hiển thị kết quả sau hạn',
  },
  showAssessmentResultsPastDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due-description',
    defaultMessage: 'Chỉ hiển thị sau hạn nộp. Nếu không có hạn, luôn hiển thị.',
  },
  setSpecialExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.set-special-exam',
    defaultMessage: 'Đặt là bài thi đặc biệt',
  },
  none: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.none',
    defaultMessage: 'Không',
  },
  timed: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed',
    defaultMessage: 'Có thời gian',
  },
  timedDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed-description',
    defaultMessage: 'Giới hạn thời gian làm bài. Học viên phải nộp trước khi hết giờ.',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExam',
    defaultMessage: 'Có giám sát',
  },
  proctoredExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctored-exam-description',
    defaultMessage: 'Bài thi có giám sát sẽ ghi video để kiểm tra tuân thủ quy định.',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboardingExam',
    defaultMessage: 'Làm quen',
  },
  onboardingExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboarding-exam-description',
    defaultMessage: 'Giúp học viên làm quen với hệ thống giám sát.',
  },
  practiceExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practiceExam',
    defaultMessage: 'Luyện tập có giám sát',
  },
  practiceExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practice-exam-description',
    defaultMessage: 'Bài luyện tập không ảnh hưởng điểm.',
  },
  advancedTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.title',
    defaultMessage: 'Nâng cao',
  },
  timeAllotted: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-allotted',
    defaultMessage: 'Thời gian (HH:MM):',
  },
  timeLimitDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-limit-description',
    defaultMessage: 'Chọn thời gian làm bài. Có thể cấp thêm thời gian cho từng học viên.',
  },
  prereqTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqTitle',
    defaultMessage: 'Dùng làm điều kiện tiên quyết',
  },
  prereqCheckboxLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqCheckboxLabel',
    defaultMessage: 'Đặt mục này làm điều kiện cho nội dung khác',
  },
  limitAccessTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessTitle',
    defaultMessage: 'Giới hạn truy cập',
  },
  limitAccessDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessDescription',
    defaultMessage: 'Chọn điều kiện và nhập % điểm hoặc hoàn thành (0-100).',
  },
  noPrerequisiteOption: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.noPrerequisiteOption',
    defaultMessage: 'Không có điều kiện',
  },
  prerequisiteSelectLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prerequisiteSelectLabel',
    defaultMessage: 'Điều kiện:',
  },
  minScoreLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreLabel',
    defaultMessage: 'Điểm tối thiểu:',
  },
  minCompletionLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionLabel',
    defaultMessage: 'Hoàn thành tối thiểu:',
  },
  minScoreError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreError',
    defaultMessage: 'Điểm phải là số nguyên từ 0 đến 100.',
  },
  minCompletionError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionError',
    defaultMessage: 'Tỷ lệ hoàn thành phải là số nguyên từ 0 đến 100.',
  },
  proctoredExamLockedAndisNotProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisNotProctoredExamAlert',
    defaultMessage: 'Không thể cấu hình lại thành bài thi có giám sát. Liên hệ hỗ trợ.',
  },
  proctoredExamLockedAndisProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisProctoredExamAlert',
    defaultMessage: 'Không thể đổi loại bài thi sau khi đã phát hành.',
  },
  reviewRulesLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesLabel',
    defaultMessage: 'Quy tắc đánh giá',
  },
  reviewRulesDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescription',
    defaultMessage: 'Xác định các quy tắc áp dụng khi xem video giám sát.',
  },
  reviewRulesDescriptionWithLink: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionWithLink',
    defaultMessage: 'Xác định các quy tắc áp dụng khi xem video giám sát cùng với {hyperlink}.',
  },
  reviewRulesDescriptionLinkText: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionLinkText',
    defaultMessage: 'quy tắc thi có giám sát',
  },
});

export default messages;