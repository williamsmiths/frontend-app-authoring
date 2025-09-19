import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  randomizationSettingTitle: {
    id: 'authoring.problemeditor.settings.randomization.SettingTitle',
    defaultMessage: 'Ngẫu nhiên hóa',
    description: 'Settings Title for Randomization widget',
  },
  randomizationSettingText: {
    id: 'authoring.problemeditor.settings.randomization.SettingText',
    defaultMessage: `{randomization, select,
      null {Bài tập này không có ngẫu nhiên hóa dựa trên Python.}
      other {Xác định thời điểm ngẫu nhiên hóa các biến được chỉ định trong đoạn mã Python đi kèm. Với các bài tập không cần ngẫu nhiên hóa, hãy chọn "Không bao giờ".}
    }`,
    description: 'Description of Possibilities for value in Randomization widget',
  },
});

export default messages;