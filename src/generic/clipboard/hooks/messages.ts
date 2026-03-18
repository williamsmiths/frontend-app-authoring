import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  copying: {
    id: 'copypaste.copying',
    defaultMessage: 'Đang sao chép',
    description: 'Message shown when copying content to clipboard',
  },
  done: {
    id: 'copypaste.done',
    defaultMessage: 'Đã sao chép vào clipboard',
    description: 'Message shown when content is copied to clipboard',
  },
  error: {
    id: 'copypaste.error',
    defaultMessage: 'Lỗi khi sao chép vào clipboard',
    description: 'Message shown when an error occurs while copying content to clipboard',
  },
});

export default messages;