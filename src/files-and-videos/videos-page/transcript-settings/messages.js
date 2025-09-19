import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  transcriptSettingsTitle: {
    id: 'course-authoring.video-uploads.transcriptSettings.title',
    defaultMessage: 'Cài đặt phụ đề',
    description: 'Title for transcript settings sheet',
  },
  invalidCielo24TranscriptionPlanMessage: {
    id: 'course-authoring.video-uploads.transcriptSettings.cielo24.errorAlert.message',
    defaultMessage: 'Không tìm thấy gói phụ đề cho Cielo24.',
  },
  invalid3PlayMediaTranscriptionPlanMessage: {
    id: 'course-authoring.video-uploads.transcriptSettings.3PlayMedia.errorAlert.message',
    defaultMessage: 'Không tìm thấy gói phụ đề cho 3PlayMedia.',
  },
  errorAlertMessage: {
    id: 'course-authoring.video-uploads.transcriptSettings.errorAlert.message',
    defaultMessage: '{message}',
  },
  orderTranscriptsTitle: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.title',
    defaultMessage: 'Sắp xếp phụ đề',
    description: 'Title for order transcript collapsible',
  },
  noneLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.none.label',
    defaultMessage: 'Không có',
    description: 'Label for order transcript None option',
  },
  cieloLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.label',
    defaultMessage: 'Cielo24',
    description: 'Label for order transcript Cieol24 option',
  },
  threePlayMediaLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.label',
    defaultMessage: '3Play Media',
    description: 'Label for order transcript 3Play Media option',
  },
  updateSettingsLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.updateSettings.label',
    defaultMessage: 'Cập nhật cài đặt',
    description: 'Label for  order transcript update settings button',
  },
  discardSettingsLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.discardSettings.label',
    defaultMessage: 'Hủy thay đổi',
    description: 'Label for order transcript discard settings button',
  },
  lastUpdatedMessage: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.lastUpdated.message',
    defaultMessage: 'Cập nhật lần cuối',
    description: 'Message that lets user know when the update was made to transcript settings',
  },
  threePlayMediaTurnaroundLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.turnaround.label',
    defaultMessage: 'Thời gian hoàn thành phụ đề',
    description: 'Label for 3Play Media transcript turnaround dropdown',
  },
  threePlayMediaTurnaroundPlaceholder: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.turnaround.dropdown.placeholder',
    defaultMessage: 'Chọn thời gian hoàn thành',
    description: 'Label for 3Play Media transcript turnaround dropdown placeholder',
  },
  threePlayMediaSourceLanguageLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.sourceLanguage.label',
    defaultMessage: 'Ngôn ngữ gốc video',
    description: 'Label for 3Play Media video source language dropdown',
  },
  threePlayMediaSourceLanguagePlaceholder: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.sourceLanguage.dropdown.placeholder',
    defaultMessage: 'Chọn ngôn ngữ',
    description: 'Label for 3Play Media video source language dropdown placeholder',
  },
  threePlayMediaTranscriptLanguageLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.transcriptLanguage.label',
    defaultMessage: 'Ngôn ngữ phụ đề',
    description: 'Label for 3Play Media video source language dropdown',
  },
  threePlayMediaTranscriptLanguagePlaceholder: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.transcriptLanguage.dropdown.placeholder',
    defaultMessage: 'Chọn ngôn ngữ',
    description: 'Label for 3Play Media transcript language dropdown placeholder',
  },
  threePlayMediaCredentialMessage: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.credential.message',
    defaultMessage: 'Nhập thông tin tài khoản cho tổ chức của bạn.',
    description: 'Message for 3Play Media credential view',
  },
  threePlayMediaApiKeyLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.apiKey.label',
    defaultMessage: 'API key',
    description: 'Label for 3Play Media API key input',
  },
  threePlayMediaApiSecretLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.3PlayMedia.apiSecret.label',
    defaultMessage: 'API secret',
    description: 'Label for 3Play Media API secret input',
  },
  cieloTurnaroundLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.turnaround.label',
    defaultMessage: 'Thời gian hoàn thành phụ đề',
    description: 'Label for Cielo24 transcript turnaround dropdown',
  },
  cieloTurnaroundPlaceholder: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.turnaround.dropdown.placeholder',
    defaultMessage: 'Chọn thời gian hoàn thành',
    description: 'Label for Cielo24 transcript turnaround dropdown placeholder',
  },
  cieloFidelityLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.fidelity.label',
    defaultMessage: 'Độ chính xác phụ đề',
    description: 'Label for Cielo24 transcript fidelity dropdown',
  },
  cieloFidelityPlaceholder: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.fidelity.dropdown.placeholder',
    defaultMessage: 'Chọn độ chính xác',
    description: 'Label for Cielo24 transcript fidelity dropdown placeholder',
  },
  cieloSourceLanguageLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.sourceLanguage.label',
    defaultMessage: 'Ngôn ngữ gốc video',
    description: 'Label for Cielo24 video source language dropdown',
  },
  cieloSourceLanguagePlaceholder: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.sourceLanguage.dropdown.placeholder',
    defaultMessage: 'Chọn ngôn ngữ',
    description: 'Label for Cielo24 video source language dropdown placeholder',
  },
  cieloTranscriptLanguageLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.transcriptLanguage.label',
    defaultMessage: 'Ngôn ngữ phụ đề',
    description: 'Label for Cielo24 video source language dropdown',
  },
  cieloTranscriptLanguagePlaceholder: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.transcriptLanguage.dropdown.placeholder',
    defaultMessage: 'Chọn ngôn ngữ',
    description: 'Label for Cielo24 transcript language dropdown placeholder',
  },
  cieloCredentialMessage: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.credential.message',
    defaultMessage: 'Nhập thông tin tài khoản cho tổ chức của bạn.',
    description: 'Message for Cielo24 credential view',
  },
  cieloApiKeyLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.apiKey.label',
    defaultMessage: 'API key',
    description: 'Label for Cielo24 API key input',
  },
  cieloUsernameLabel: {
    id: 'course-authoring.video-uploads.transcriptSettings.orderTranscripts.cielo24.username.label',
    defaultMessage: 'Tên đăng nhập',
    description: 'Label for Cielo24 username input',
  },
});

export default messages;