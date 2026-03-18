import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  licenseCreativeOptionsLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.options.label',
    defaultMessage: 'Các tùy chọn cho Creative Commons',
  },
  licenseCreativeOptionsHelpText: {
    id: 'course-authoring.schedule-section.license.creative-commons.options.help-text',
    defaultMessage: 'Các tùy chọn sau đây khả dụng cho giấy phép Creative Commons.',
  },
  licenseCreativeOptionBYLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.BY.label',
    defaultMessage: 'Attribution',
  },
  licenseCreativeOptionBYDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.BY.description',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình bày tác phẩm của bạn nhưng phải ghi công theo yêu cầu của bạn. Hiện tại, tùy chọn này là bắt buộc.',
  },
  licenseCreativeOptionNCLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.NC.label',
    defaultMessage: 'Phi thương mại',
  },
  licenseCreativeOptionNCDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.NC.description',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình bày tác phẩm của bạn - cũng như các tác phẩm phái sinh - nhưng chỉ cho mục đích phi thương mại.',
  },
  licenseCreativeOptionNDLabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.ND.label',
    defaultMessage: 'Không cho phép chỉnh sửa',
  },
  licenseCreativeOptionNDDescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.ND.description',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình bày nguyên bản tác phẩm của bạn, không cho phép tạo tác phẩm phái sinh. Tùy chọn này không tương thích với "Chia sẻ tương tự".',
  },
  licenseCreativeOptionSALabel: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.SA.label',
    defaultMessage: 'Chia sẻ tương tự',
  },
  licenseCreativeOptionSADescription: {
    id: 'course-authoring.schedule-section.license.creative-commons.option.SA.description',
    defaultMessage: 'Cho phép người khác phân phối các tác phẩm phái sinh nhưng phải sử dụng cùng giấy phép với tác phẩm của bạn. Tùy chọn này không tương thích với "Không cho phép chỉnh sửa".',
  },
});

export default messages;