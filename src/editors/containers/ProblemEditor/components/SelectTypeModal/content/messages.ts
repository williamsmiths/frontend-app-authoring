import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  advanceProblemButtonLabel: {
    id: 'authoring.problemEditor.problemSelect.advanceButton.label',
    defaultMessage: 'Các loại bài nâng cao',
    description: 'Button label for advance problem types option',
  },
  advanceMenuTitle: {
    id: 'authoring.problemEditor.advanceProblem.menu.title',
    defaultMessage: 'Bài nâng cao',
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
      Provisional {Các công cụ được hỗ trợ tạm thời có thể thiếu độ ổn định hoặc đầy đủ chức năng mà khóa học của bạn yêu cầu. edX không kiểm soát chất lượng phần mềm hoặc nội dung được cung cấp từ các công cụ này.
        \n \n
        Hãy kiểm tra kỹ các công cụ này trước khi sử dụng trong khóa học, đặc biệt là ở các phần có chấm điểm. Tài liệu hướng dẫn có thể không đầy đủ hoặc đến từ các nguồn ngoài edX.}
      Not_supported {Các công cụ không được hỗ trợ không được edX duy trì và có thể bị ngừng trong tương lai. Không khuyến nghị sử dụng trong khóa học do không đáp ứng một hoặc nhiều yêu cầu cơ bản như kiểm thử, khả năng truy cập, quốc tế hóa và tài liệu.}
      other { } 
    }`,
    description: 'Message for support status tooltip',
  },
  previewTitle: {
    id: 'authoring.problemEditor.preview.title',
    defaultMessage: '{previewTitle} bài',
    description: 'Title for the problem preview column',
  },
  previewAltText: {
    id: 'authoring.problemEditor.preview.altText',
    defaultMessage: `Minh họa xem trước cho một bài {problemType, select,
      multiplechoiceresponse {chọn một}
      stringreponse {nhập văn bản}
      numericalresponse {nhập số}
      optionresponse {dropdown}
      choiceresponse {chọn nhiều}
      other {null}
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
    defaultMessage: 'Tìm hiểu thêm về các loại bài nâng cao',
    description: 'Label for Learn more about advanced problem types button',
  },
});

export default messages;