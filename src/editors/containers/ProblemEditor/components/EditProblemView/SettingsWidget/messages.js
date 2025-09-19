import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  settingsWidgetTitle: {
    id: 'authoring.problemeditor.settings.settingsWidgetTitle',
    defaultMessage: 'Cài đặt',
    description: 'Settings Title',
  },
  showAdvanceSettingsButtonText: {
    id: 'authoring.problemeditor.settings.showAdvancedButton',
    defaultMessage: 'Hiển thị cài đặt nâng cao',
    description: 'Button text to show advanced settings',
  },
  settingsDeleteIconAltText: {
    id: 'authoring.problemeditor.settings.delete.icon.alt',
    defaultMessage: 'Xóa đáp án',
    description: 'Alt text for delete icon',
  },
  advancedSettingsLinkText: {
    id: 'authoring.problemeditor.settings.advancedSettingLink.text',
    defaultMessage: 'Đặt giá trị mặc định trong cài đặt nâng cao',
    description: 'Advanced settings link text',
  },
  hintSettingTitle: {
    id: 'authoring.problemeditor.settings.hint.title',
    defaultMessage: 'Gợi ý',
    description: 'Hint settings card title',
  },
  hintInputLabel: {
    id: 'authoring.problemeditor.settings.hint.inputLabel',
    defaultMessage: 'Gợi ý',
    description: 'Hint text input label',
  },
  addHintButtonText: {
    id: 'authoring.problemeditor.settings.hint.addHintButton',
    defaultMessage: 'Thêm gợi ý',
    description: 'Add hint button text',
  },
  noHintSummary: {
    id: 'authoring.problemeditor.settings.hint.noHintSummary',
    defaultMessage: 'Không có',
    description: 'Summary text for no hints',
  },
  hintSummary: {
    id: 'authoring.problemeditor.settings.hint.summary',
    defaultMessage: '{hint} {count, plural, =0 {} other {(+# gợi ý nữa)}}',
    description: 'Summary text for hint settings',
  },
  resetSettingsTitle: {
    id: 'authoring.problemeditor.settings.reset.title',
    defaultMessage: 'Hiển thị tùy chọn đặt lại',
    description: 'Reset settings card title',
  },
  resetSettingsTrue: {
    id: 'authoring.problemeditor.settings.reset.true',
    defaultMessage: 'Có',
    description: 'True option for reset',
  },
  resetSettingsFalse: {
    id: 'authoring.problemeditor.settings.reset.false',
    defaultMessage: 'Không',
    description: 'False option for reset',
  },
  resetSettingText: {
    id: 'authoring.problemeditor.settings.reset.text',
    defaultMessage: "Xác định có hiển thị nút 'Đặt lại' để người học có thể làm lại đáp án hay không, thường dùng cho bài luyện tập hoặc đánh giá định hình.",
    description: 'Reset settings card text',
  },
  scoringSettingsTitle: {
    id: 'authoring.problemeditor.settings.scoring.title',
    defaultMessage: 'Chấm điểm',
    description: 'Scoring settings card title',
  },
  scoringAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.inputLabel',
    defaultMessage: 'Số lần làm',
    description: 'Scoring attempts text input label',
  },
  scoringWeightInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.weight.inputLabel',
    defaultMessage: 'Điểm',
    description: 'Scoring weight input label',
  },
  unlimitedAttemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.unlimited',
    defaultMessage: 'Không giới hạn số lần',
    description: 'Summary text for unlimited attempts',
  },
  attemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.attempts',
    defaultMessage: '{attempts, plural, =1 {# lần} other {# lần}}',
    description: 'Summary text for number of attempts',
  },
  unlimitedAttemptsCheckboxLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.unlimitedCheckbox',
    defaultMessage: 'Không giới hạn số lần làm',
    description: 'Label for unlimited attempts checkbox',
  },
  weightSummary: {
    id: 'authoring.problemeditor.settings.scoring.weight',
    defaultMessage: '{weight, plural, =0 {Không tính điểm} other {# điểm}}',
    description: 'Summary text for scoring weight',
  },
  scoringSettingsLabel: {
    id: 'authoring.problemeditor.settings.scoring.label',
    defaultMessage: 'Xác định số điểm và số lần làm bài',
    description: 'Descriptive text for scoring settings',
  },
  attemptsHint: {
    id: 'authoring.problemeditor.settings.scoring.attempts.hint',
    defaultMessage: 'Nếu không đặt giá trị mặc định trong cài đặt nâng cao, người học sẽ được làm không giới hạn số lần.',
    description: 'Summary text for scoring weight',
  },
  weightHint: {
    id: 'authoring.problemeditor.settings.scoring.weight.hint',
    defaultMessage: 'Nếu không đặt giá trị, mặc định bài này được tính 1 điểm.',
    description: 'Summary text for scoring weight',
  },
  showAnswerSettingsTitle: {
    id: 'authoring.problemeditor.settings.showAnswer.title',
    defaultMessage: 'Hiển thị đáp án',
    description: 'Show Answer settings card title',
  },
  showAnswerAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.attempts.inputLabel',
    defaultMessage: 'Số lần làm',
    description: 'Show Answer attempts text input label',
  },
  showAnswerSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.text',
    defaultMessage: 'Xác định khi nào người học có thể xem đáp án đúng.',
    description: 'Show Answer settings card text',
  },
  timerSettingsTitle: {
    id: 'authoring.problemeditor.settings.timer.title',
    defaultMessage: 'Thời gian giữa các lần làm',
    description: 'Timer settings card title',
  },
  timerSummary: {
    id: 'authoring.problemeditor.settings.timer.summary',
    defaultMessage: '{time} giây',
    description: 'Summary text for timer settings',
  },
  timerSettingText: {
    id: 'authoring.problemeditor.settings.timer.text',
    defaultMessage: 'Số giây học viên phải chờ giữa các lần nộp bài khi bài cho phép nhiều lần làm.',
    description: 'Timer settings card text',
  },
  timerInputLabel: {
    id: 'authoring.problemeditor.settings.timer.inputLabel',
    defaultMessage: 'Giây',
    description: 'Timer text input label',
  },
  typeSettingTitle: {
    id: 'authoring.problemeditor.settings.type.title',
    defaultMessage: 'Loại',
    description: 'Type settings card title',
  },
  'SwitchButtonLabel-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.label.advanced',
    defaultMessage: 'Chuyển sang trình soạn nâng cao',
    description: 'button to switch to the advanced mode of the editor',
  },
  'SwitchButtonLabel-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.label.markdown',
    defaultMessage: 'Chuyển sang trình soạn Markdown',
    description: 'button to switch to the markdown editor',
  },
  'ConfirmSwitchMessage-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessage.advanced',
    defaultMessage: 'Nếu dùng trình soạn nâng cao, bài này sẽ được chuyển thành OLX và bạn sẽ không thể quay lại trình soạn đơn giản.',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchMessage-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessage.markdown',
    defaultMessage: 'Nếu dùng trình soạn Markdown, bài này sẽ được chuyển thành Markdown và bạn sẽ không thể quay lại trình soạn đơn giản.',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchMessageTitle-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessageTitle.advanced',
    defaultMessage: 'Chuyển sang OLX?',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchMessageTitle-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessageTitle.markdown',
    defaultMessage: 'Chuyển sang Markdown?',
    description: 'message to confirm that a user wants to use the markdown editor',
  },
  'ConfirmSwitchButtonLabel-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchButtonLabel.advanced',
    defaultMessage: 'Chuyển sang trình soạn nâng cao',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchButtonLabel-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchButtonLabel.markdown',
    defaultMessage: 'Chuyển sang trình soạn Markdown',
    description: 'message to confirm that a user wants to use the markdown editor',
  },
  explanationInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.inputLabel',
    defaultMessage: 'Giải thích',
    description: 'answer explanation input label',
  },
  explanationSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.text',
    defaultMessage: 'Thêm phần giải thích cho đáp án đúng.',
    description: 'Solution Explanation text',
  },
});

export default messages;