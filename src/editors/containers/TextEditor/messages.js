import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  couldNotLoadTextContext: {
    id: 'authoring.texteditor.load.error',
    defaultMessage: 'Lỗi: Không thể tải nội dung văn bản',
    description: 'Error Message Dispayed When HTML content fails to Load',
  },
  spinnerScreenReaderText: {
    id: 'authoring.texteditor.spinnerScreenReaderText',
    defaultMessage: 'đang tải',
    description: 'Loading message for spinner screenreader text.',
  },
});

export default messages;