import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  advanceProblemButtonLabel: {
    id: 'authoring.problemEditor.problemSelect.advanceButton.label',
    defaultMessage: 'Các dạng bài nâng cao',
    description: 'Button label for advance problem types option',
  },
  advanceMenuTitle: {
    id: 'authoring.problemEditor.advanceProblem.menu.title',
    defaultMessage: 'Bài tập nâng cao',
    description: 'Title for advanced problem menu',
  },
  advanceMenuGoBack: {
    id: 'authoring.problemEditor.advanceProblem.menu.goBack',
    defaultMessage: 'Quay lại',
    description: 'Return to the previous menu that shows basic problem types',
  },
  advanceProblemTypeLabel: {
    id: 'authoring.problemEditor.advanceProblem.problemType.label',
    defaultMessage: '{problemType}',
    description: 'Label for advance problem type radio select',
  },
  problemSupportStatus: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus',
    defaultMessage: '{supportStatus}',
    description: 'Text for advance problem type\'s support status',
  },
  supportStatusTooltipMessage: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus.tooltipMessage',
    defaultMessage: `{supportStatus,  select,
      Provisional {Các công cụ được hỗ trợ tạm thời có thể thiếu sự ổn định hoặc tính năng cần thiết cho khóa học của bạn. edX không kiểm soát chất lượng phần mềm hoặc nội dung được cung cấp bởi các công cụ này.
        \n \n
        Hãy kiểm thử kỹ lưỡng trước khi sử dụng trong khóa học, đặc biệt ở các phần có chấm điểm. Tài liệu đầy đủ có thể không sẵn có cho các công cụ này, hoặc chỉ có từ nguồn bên ngoài edX.}
      Not_supported {Các công cụ không được hỗ trợ không do edX duy trì và có thể sẽ bị loại bỏ trong tương lai. Không khuyến nghị sử dụng vì chúng không đáp ứng một hoặc nhiều yêu cầu cơ bản như kiểm thử, khả năng truy cập, quốc tế hóa và tài liệu.}
      other { } 
    }`,
    description: 'Message for support status tooltip',
  },
  previewTitle: {
    id: 'authoring.problemEditor.preview.title',
    defaultMessage: 'Xem trước bài {previewTitle}',
    description: 'Title for the problem preview column',
  },
  previewAltText: {
    id: 'authoring.problemEditor.preview.altText',
    defaultMessage: `Minh họa xem trước cho dạng bài {problemType, select,
      multiplechoiceresponse {chọn một}
      stringreponse {nhập văn bản}
      numericalresponse {nhập số}
      optionresponse {chọn từ danh sách}
      choiceresponse {chọn nhiều}
      other {khác}
    }`,
    description: 'Alt text for the illustration of the problem preview',
  },
  previewDescription: {
    id: 'authoring.problemEditor.preview.description',
    defaultMessage: '{previewDescription}',
    description: 'Description of the selected problem type',
  },
  learnMoreButtonLabel: {
    id: 'authoring.problemEditor.learnMoreButtonLabel.label',
    defaultMessage: 'Tìm hiểu thêm',
    description: 'Label for Learn more button',
  },
  learnMoreAdvancedButtonLabel: {
    id: 'authoring.problemEditor.advanceProblem.learnMoreButtonLabel.label',
    defaultMessage: 'Tìm hiểu thêm về các dạng bài nâng cao',
    description: 'Label for Learn more about advanced problem types button',
  },
});

export default messages;