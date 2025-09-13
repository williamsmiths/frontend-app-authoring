import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.license.title',
    defaultMessage: 'Giấy phép',
    description: 'Title for license widget',
  },
  licenseTypeLabel: {
    id: 'authoring.videoeditor.license.licenseType.label',
    defaultMessage: 'Loại giấy phép',
    description: 'Label for license type selection field',
  },
  detailsSubsectionTitle: {
    id: 'authoring.videoeditor.license.detailsSubsection.title',
    defaultMessage: 'Chi tiết giấy phép',
    description: 'Title for license details subsection',
  },
  displaySubsectionTitle: {
    id: 'authoring.videoeditor.license.displaySubsection.title',
    defaultMessage: 'Hiển thị giấy phép',
    description: 'Title for license display subsection',
  },
  addLicenseButtonLabel: {
    id: 'authoring.videoeditor.license.add.label',
    defaultMessage: 'Thêm giấy phép cho video này',
    description: 'Label for add license button',
  },
  deleteLicenseSelection: {
    id: 'authoring.videoeditor.license.deleteLicenseSelection',
    defaultMessage: 'Xóa và áp dụng giấy phép cấp khóa học',
    description: 'Message presented to user for action to delete license selection',
  },
  allRightsReservedIconsLabel: {
    id: 'authoring.videoeditor.license.allRightsReservedIcons.label',
    defaultMessage: 'Giữ toàn quyền',
    description: 'Label for row of all rights reserved icons',
  },
  creativeCommonsIconsLabel: {
    id: 'authoring.videoeditor.license.creativeCommonsIcons.label',
    defaultMessage: 'Một số quyền được giữ',
    description: 'Label for row of creative common icons',
  },
  viewLicenseDetailsLabel: {
    id: 'authoring.videoeditor.license.viewLicenseDetailsLabel.label',
    defaultMessage: 'Xem chi tiết giấy phép',
    description: 'Label for view license details button',
  },
  courseLevelDescription: {
    id: 'authoring.videoeditor.license.courseLevelDescription.helperText',
    defaultMessage: 'Giấy phép này hiện được đặt ở cấp khóa học',
    description: 'Helper text for license type when using course license',
  },
  courseLicenseDescription: {
    id: 'authoring.videoeditor.license.courseLicenseDescription.message',
    defaultMessage: 'Các giấy phép được đặt ở cấp khóa học sẽ xuất hiện ở cuối các trang học liệu trong khóa học của bạn.',
    description: 'Message explaining where course level licenses are set',
  },
  libraryLevelDescription: {
    id: 'authoring.videoeditor.license.libraryLevelDescription.helperText',
    defaultMessage: 'Giấy phép này hiện được đặt ở cấp thư viện',
    description: 'Helper text for license type when using library license',
  },
  libraryLicenseDescription: {
    id: 'authoring.videoeditor.license.libraryLicenseDescription.message',
    defaultMessage: 'Các giấy phép được đặt ở cấp thư viện sẽ xuất hiện trong video cụ thể của thư viện.',
    description: 'Message explaining where library level licenses are set',
  },
  defaultLevelDescription: {
    id: 'authoring.videoeditor.license.defaultLevelDescription.helperText',
    defaultMessage: 'Giấy phép này được đặt riêng cho video này',
    description: 'Helper text for license type when choosing for a specific video',
  },
  defaultLicenseDescription: {
    id: 'authoring.videoeditor.license.defaultLicenseDescription.message',
    defaultMessage: 'Khi một video có giấy phép khác với toàn bộ khóa học, người học sẽ thấy giấy phép ở góc dưới bên phải của trình phát video.',
    description: 'Message explaining where video specific licenses are seen by users',
  },
  attributionCheckboxLabel: {
    id: 'authoring.videoeditor.license.attributionCheckboxLabel',
    defaultMessage: 'Ghi công',
    description: 'Label for attribution checkbox',
  },
  attributionSectionDescription: {
    id: 'authoring.videoeditor.license.attributionSectionDescription',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình bày tác phẩm có bản quyền của bạn nhưng chỉ khi họ ghi công theo cách bạn yêu cầu. Hiện tại, tùy chọn này là bắt buộc.',
    description: 'Attribution card section defining attribution license',
  },
  noncommercialCheckboxLabel: {
    id: 'authoring.videoeditor.license.noncommercialCheckboxLabel',
    defaultMessage: 'Phi thương mại',
    description: 'Label for noncommercial checkbox',
  },
  noncommercialSectionDescription: {
    id: 'authoring.videoeditor.license.noncommercialSectionDescription',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình bày tác phẩm của bạn - và các tác phẩm phái sinh dựa trên nó - nhưng chỉ cho mục đích phi thương mại.',
    description: 'Noncommercial card section defining noncommercial license',
  },
  noDerivativesCheckboxLabel: {
    id: 'authoring.videoeditor.license.noDerivativesCheckboxLabel',
    defaultMessage: 'Không phái sinh',
    description: 'Label for No Derivatives checkbox',
  },
  noDerivativesSectionDescription: {
    id: 'authoring.videoeditor.license.noDerivativesSectionDescription',
    defaultMessage: 'Cho phép người khác sao chép, phân phối, hiển thị và trình bày chỉ các bản sao nguyên gốc của tác phẩm của bạn, không cho phép các tác phẩm phái sinh. Tùy chọn này không tương thích với "Chia sẻ tương tự".',
    description: 'No Derivatives card section defining no derivatives license',
  },
  shareAlikeCheckboxLabel: {
    id: 'authoring.videoeditor.license.shareAlikeCheckboxLabel',
    defaultMessage: 'Chia sẻ tương tự',
    description: 'Label for Share Alike checkbox',
  },
  shareAlikeSectionDescription: {
    id: 'authoring.videoeditor.license.shareAlikeSectionDescription',
    defaultMessage: 'Cho phép người khác phân phối các tác phẩm phái sinh chỉ theo một giấy phép giống hệt với giấy phép điều chỉnh tác phẩm của bạn. Tùy chọn này không tương thích với "Không phái sinh".',
    description: 'Share Alike card section defining share alike license',
  },
  allRightsReservedSectionMessage: {
    id: 'authoring.videoeditor.license.allRightsReservedSectionMessage',
    defaultMessage: 'Bạn giữ toàn bộ quyền đối với tác phẩm của mình.',
    description: 'All Rights Reserved section message',
  },
});

export default messages;