import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.configure-modal.title',
    defaultMessage: 'Cài đặt {title}',
  },
  componentTitle: {
    id: 'course-authoring.course-outline.configure-modal.component.title',
    defaultMessage: 'Chỉnh sửa quyền truy cập cho: {title}',
    description: 'The visibility modal title for unit',
  },
  basicTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.title',
    defaultMessage: 'Cơ bản',
  },
  notGradedTypeOption: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.notGradedTypeOption',
    defaultMessage: 'Không tính điểm',
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
    defaultMessage: 'Hiển thị đơn vị',
  },
  unitAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-access',
    defaultMessage: 'Quyền truy cập đơn vị',
  },
  libraryContentAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.library-content-access',
    defaultMessage: 'Quyền truy cập nội dung thư viện',
  },
  splitTestAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.split-test-access',
    defaultMessage: 'Quyền truy cập kiểm thử chia nhóm',
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
    defaultMessage: 'Các chủ đề cho đơn vị chưa xuất bản sẽ không được tạo',
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
    defaultMessage: 'Nếu bạn hiển thị phần này cho học viên, họ sẽ thấy nội dung sau khi ngày phát hành đã qua và bạn đã xuất bản phần. Chỉ những đơn vị được ẩn thủ công mới tiếp tục bị ẩn sau khi bạn bỏ chọn tùy chọn này.',
  },
  unitVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-visibility-warning',
    defaultMessage: 'Nếu đơn vị này đã được xuất bản và phát hành cho học viên trước đó, mọi thay đổi khi bị ẩn sẽ bây giờ hiển thị cho học viên.',
  },
  subsectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.subsection-visibility-warning',
    defaultMessage: 'Nếu bạn chọn tùy chọn khác ngoài "Ẩn toàn bộ tiểu mục", các đơn vị đã xuất bản trong tiểu mục này sẽ hiển thị cho học viên trừ khi được ẩn thủ công.',
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
    defaultMessage: 'Nhóm này không còn tồn tại. Chọn nhóm khác hoặc xóa giới hạn truy cập.',
    description: 'The alert text of no longer available group',
  },
  unitAllLearnersAndStaff: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-all-learners-staff',
    defaultMessage: 'Tất cả học viên và giảng viên',
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
    defaultMessage: 'Chấm điểm như:',
  },
  dueDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-date',
    defaultMessage: 'Ngày hết hạn:',
  },
  dueTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-time-UTC',
    defaultMessage: 'Giờ hết hạn (UTC):',
  },
  subsectionVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.subsection-visibility',
    defaultMessage: 'Hiển thị tiểu mục',
  },
  showEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection',
    defaultMessage: 'Hiển thị toàn bộ tiểu mục',
  },
  showEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection-description',
    defaultMessage: 'Học viên sẽ thấy tiểu mục đã xuất bản và có thể truy cập nội dung.',
  },
  hideContentAfterDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due',
    defaultMessage: 'Ẩn nội dung sau ngày hết hạn',
  },
  hideContentAfterDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due-description',
    defaultMessage: 'Sau khi ngày hết hạn của tiểu mục qua đi, học viên sẽ không thể truy cập nội dung. Tiểu mục này sẽ không được tính điểm.',
  },
  hideContentAfterEnd: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-end',
    defaultMessage: 'Ẩn nội dung sau ngày kết thúc',
  },
  hideContentAfterEndDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-end-description',
    defaultMessage: 'Sau khi khóa học kết thúc, học viên sẽ không thể truy cập nội dung. Tiểu mục này sẽ không được tính điểm.',
  },
  hideEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection',
    defaultMessage: 'Ẩn toàn bộ tiểu mục',
  },
  hideEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection-description',
    defaultMessage: 'Học viên sẽ không thấy tiểu mục này trong đề cương khóa học. Tiểu mục này sẽ không được tính điểm.',
  },
  assessmentResultsVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.assessment-results-visibility',
    defaultMessage: 'Hiển thị kết quả đánh giá',
  },
  alwaysShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results',
    defaultMessage: 'Luôn hiển thị kết quả đánh giá',
  },
  alwaysShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results-description',
    defaultMessage: 'Ngay khi học viên nộp câu trả lời, họ sẽ thấy đúng/sai và điểm số nhận được.',
  },
  neverShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results',
    defaultMessage: 'Không bao giờ hiển thị kết quả đánh giá',
  },
  neverShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results-description',
    defaultMessage: 'Học viên sẽ không bao giờ thấy đúng/sai hay điểm số của mình.',
  },
  showAssessmentResultsPastDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due',
    defaultMessage: 'Hiển thị kết quả đánh giá sau khi quá hạn',
  },
  showAssessmentResultsPastDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due-description',
    defaultMessage: 'Học viên chỉ thấy kết quả sau khi ngày hết hạn của tiểu mục qua đi. Nếu không có ngày hết hạn, học viên luôn thấy kết quả ngay khi nộp.',
  },
  setSpecialExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.set-special-exam',
    defaultMessage: 'Đặt làm bài kiểm tra đặc biệt',
  },
  none: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.none',
    defaultMessage: 'Không có',
  },
  timed: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed',
    defaultMessage: 'Giới hạn thời gian',
  },
  timedDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed-description',
    defaultMessage: 'Bài kiểm tra giới hạn thời gian buộc học viên phải nộp trước khi hết giờ. Có thể cấp thêm thời gian cho từng học viên trong Bảng điều khiển Giảng viên.',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExam',
    defaultMessage: 'Giám sát',
  },
  proctoredExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctored-exam-description',
    defaultMessage: 'Bài thi có giám sát sẽ giới hạn thời gian và ghi hình học viên. Video được kiểm duyệt để đảm bảo tuân thủ quy định. Lưu ý: cài đặt này sẽ tự động chuyển sang "Ẩn nội dung sau ngày hết hạn".',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboardingExam',
    defaultMessage: 'Khởi tạo',
  },
  onboardingExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboarding-exam-description',
    defaultMessage: 'Dùng để giới thiệu học viên với thi giám sát, xác minh danh tính và tạo hồ sơ khởi tạo. Hồ sơ cần được duyệt (2 ngày làm việc trở lên) trước khi thi có giám sát.',
  },
  practiceExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practiceExam',
    defaultMessage: 'Thi thử có giám sát',
  },
  practiceExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practice-exam-description',
    defaultMessage: 'Dùng để làm quen công cụ giám sát. Kết quả bài thi thử không ảnh hưởng đến điểm số.',
  },
  advancedTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.title',
    defaultMessage: 'Nâng cao',
  },
  timeAllotted: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-allotted',
    defaultMessage: 'Thời gian cho phép (HH:MM):',
  },
  timeLimitDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-limit-description',
    defaultMessage: 'Chọn thời gian giới hạn cho bài thi. Nếu >24 giờ, nhập thủ công. Có thể cấp thêm thời gian cho từng học viên trong Bảng điều khiển Giảng viên.',
  },
  prereqTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqTitle',
    defaultMessage: 'Dùng làm điều kiện tiên quyết',
  },
  prereqCheckboxLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqCheckboxLabel',
    defaultMessage: 'Đặt tiểu mục này làm điều kiện tiên quyết cho nội dung khác',
  },
  limitAccessTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessTitle',
    defaultMessage: 'Giới hạn truy cập',
  },
  limitAccessDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessDescription',
    defaultMessage: 'Chọn một tiểu mục tiên quyết và nhập % điểm tối thiểu cùng % hoàn thành tối thiểu (0–100) để giới hạn truy cập.',
  },
  noPrerequisiteOption: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.noPrerequisiteOption',
    defaultMessage: 'Không có điều kiện tiên quyết',
  },
  prerequisiteSelectLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prerequisiteSelectLabel',
    defaultMessage: 'Điều kiện tiên quyết:',
  },
  minScoreLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreLabel',
    defaultMessage: 'Điểm tối thiểu:',
  },
  minCompletionLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionLabel',
    defaultMessage: 'Mức hoàn thành tối thiểu:',
  },
  minScoreError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreError',
    defaultMessage: 'Điểm tối thiểu phải là số nguyên từ 0 đến 100.',
  },
  minCompletionError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionError',
    defaultMessage: 'Mức hoàn thành tối thiểu phải là số nguyên từ 0 đến 100.',
  },
  proctoredExamLockedAndisNotProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisNotProctoredExamAlert',
    defaultMessage: 'Tiểu mục này đã được phát hành như một bài thi giám sát, nhưng đã chuyển về dạng cơ bản hoặc giới hạn thời gian. Không thể cấu hình lại thành thi giám sát. Liên hệ hỗ trợ edX để được giúp đỡ.',
  },
  proctoredExamLockedAndisProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisProctoredExamAlert',
    defaultMessage: 'Bài thi giám sát này đã phát hành cho học viên. Không thể đổi sang loại khác. Bạn có thể chuyển về dạng cơ bản hoặc giới hạn thời gian, nhưng KHÔNG thể đặt lại thành giám sát trong tương lai.',
  },
  reviewRulesLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesLabel',
    defaultMessage: 'Xem lại quy định',
  },
  reviewRulesDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescription',
    defaultMessage: 'Chỉ định quy định/ngoại lệ để đội ngũ giám sát áp dụng khi xem video. Ví dụ: cho phép dùng máy tính. Quy định sẽ hiển thị cho học viên trước khi bắt đầu bài thi.',
  },
  reviewRulesDescriptionWithLink: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionWithLink',
    defaultMessage: 'Chỉ định quy định/ngoại lệ để đội ngũ giám sát áp dụng khi xem video. Ví dụ: cho phép dùng máy tính. Quy định sẽ hiển thị cho học viên cùng với {hyperlink}.',
  },
  reviewRulesDescriptionLinkText: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionLinkText',
    defaultMessage: 'các quy định chung của bài thi giám sát',
  },
});

export default messages;