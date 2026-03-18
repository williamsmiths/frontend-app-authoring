import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  importWizardButtonCancel: {
    id: 'course-authoring.import-tags.wizard.button.cancel',
    defaultMessage: 'Hủy',
  },
  importWizardButtonNext: {
    id: 'course-authoring.import-tags.wizard.button.next',
    defaultMessage: 'Tiếp theo',
  },
  importWizardButtonPrevious: {
    id: 'course-authoring.import-tags.wizard.button.previous',
    defaultMessage: 'Trước',
  },
  importWizardButtonImport: {
    id: 'course-authoring.import-tags.wizard.button.import',
    defaultMessage: 'Nhập',
  },
  importWizardButtonContinue: {
    id: 'course-authoring.import-tags.wizard.button.continue',
    defaultMessage: 'Tiếp tục',
  },
  importWizardButtonConfirm: {
    id: 'course-authoring.import-tags.wizard.button.confirm',
    defaultMessage: 'Có, nhập tệp',
  },
  importWizardStepExportTitle: {
    id: 'course-authoring.import-tags.wizard.step-export.title',
    defaultMessage: 'Cập nhật "{name}"',
  },
  importWizardStepExportBody: {
    id: 'course-authoring.import-tags.wizard.step-export.body',
    defaultMessage: 'Để cập nhật phân loại này, bạn cần nhập một tệp CSV hoặc JSON mới. Phân loại hiện tại sẽ được thay thế hoàn toàn bằng nội dung của tệp đã nhập (ví dụ: nếu một thẻ trong phân loại hiện tại không có trong tệp mới, nó sẽ bị xóa - cả trong phân loại và trong nội dung khóa học đã gắn thẻ).'
      + '{br}Bạn có thể muốn xuất phân loại hiện tại trước khi nhập tệp mới.',
  },
  importWizardStepExportCSVButton: {
    id: 'course-authoring.import-tags.wizard.step-export.button-csv',
    defaultMessage: 'Tệp CSV',
  },
  importWizardStepExportJSONButton: {
    id: 'course-authoring.import-tags.wizard.step-export.button-json',
    defaultMessage: 'Tệp JSON',
  },
  importWizardStepUploadTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.title',
    defaultMessage: 'Tải lên tệp',
  },
  importWizardStepUploadClearFile: {
    id: 'course-authoring.import-tags.wizard.step-upload.clear-file',
    defaultMessage: 'Xóa tệp',
  },
  importWizardStepUploadBody: {
    id: 'course-authoring.import-tags.wizard.step-upload.body',
    defaultMessage: 'Bạn có thể tải lên tệp CSV hoặc JSON để tạo phân loại mới. Bạn có thể sử dụng bất kỳ công cụ bảng tính nào (cho CSV) hoặc trình soạn thảo văn bản (cho JSON) để tạo tệp.'
      + ' Để xem định dạng mẫu, hãy tải xuống {csvTemplateUrl} hoặc {jsonTemplateUrl}.'
      + '{br}Khi tệp đã sẵn sàng, kéo và thả vào ô bên dưới hoặc nhấp để tải lên.',
  },
  importWizardStepReuploadBody: {
    id: 'course-authoring.import-tags.wizard.step-reupload.body',
    defaultMessage: 'Bạn có thể sử dụng bất kỳ công cụ bảng tính (CSV) hoặc trình soạn thảo văn bản (JSON) để tạo tệp.'
      + '{br}Sau đó kéo thả vào ô bên dưới hoặc nhấp để tải lên.',
  },
  csvTemplateTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.csv-template',
    defaultMessage: 'Mẫu CSV',
  },
  jsonTemplateTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.json-template',
    defaultMessage: 'Mẫu JSON',
  },
  importWizardStepPopulateTitle: {
    id: 'course-authoring.import-tags.wizard.step-populate.title',
    defaultMessage: 'Nhập thông tin phân loại',
  },
  importWizardStepPopulateTaxonomyName: {
    id: 'course-authoring.import-tags.wizard.step-populate.name',
    defaultMessage: 'Tên phân loại',
  },
  importWizardStepPopulateTaxonomyDesc: {
    id: 'course-authoring.import-tags.wizard.step-populate.desc',
    defaultMessage: 'Mô tả phân loại',
  },
  importWizardStepPlanTitle: {
    id: 'course-authoring.import-tags.wizard.step-plan.title',
    defaultMessage: 'Khác biệt giữa các tệp',
  },
  importWizardStepPlanBody: {
    id: 'course-authoring.import-tags.wizard.step-plan.body',
    defaultMessage: 'Việc nhập tệp này sẽ tạo {changeCount} thay đổi cho phân loại hiện tại.'
      + ' Nội dung mới sẽ thay thế các giá trị không khớp.'
      + '{br}Các thay đổi bao gồm:',
  },
  importWizardStepPlanNoChanges: {
    id: 'course-authoring.import-tags.wizard.step-plan.no-changes',
    defaultMessage: 'Không có thay đổi',
  },
  importWizardStepConfirmTitle: {
    id: 'course-authoring.import-tags.wizard.step-confirm.title',
    defaultMessage: 'Nhập và thay thế thẻ',
  },
  importWizardStepConfirmBody: {
    id: 'course-authoring.import-tags.wizard.step-confirm.body',
    defaultMessage: 'Cảnh báo! Bạn sắp thực hiện {changeCount} thay đổi. Các thẻ trong nội dung khóa học có thể bị cập nhật hoặc xóa và không thể hoàn tác.'
      + '{br}Bạn có chắc muốn tiếp tục?',
  },
  promptTaxonomyName: {
    id: 'course-authoring.import-tags.prompt.taxonomy-name',
    defaultMessage: 'Nhập tên phân loại mới',
  },
  promptTaxonomyNameRequired: {
    id: 'course-authoring.import-tags.prompt.taxonomy-name.required',
    defaultMessage: 'Bạn phải nhập tên phân loại',
  },
  promptTaxonomyExportId: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id',
    defaultMessage: 'Nhập Export ID (chỉ gồm chữ, số hoặc "_" "-" ".")',
  },
  promptTaxonomyExportIdRequired: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id.required',
    defaultMessage: 'Bạn phải nhập Export ID',
  },
  promptTaxonomyExportIdInvalid: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id.invalid',
    defaultMessage: 'Export ID không hợp lệ (chỉ gồm chữ, số hoặc "_" "-" ".")',
  },
  promptTaxonomyDescription: {
    id: 'course-authoring.import-tags.prompt.taxonomy-description',
    defaultMessage: 'Nhập mô tả phân loại',
  },
  importTaxonomySuccess: {
    id: 'course-authoring.import-tags.success',
    defaultMessage: 'Nhập phân loại thành công',
  },
  importTaxonomyError: {
    id: 'course-authoring.import-tags.error',
    defaultMessage: 'Nhập thất bại - xem chi tiết trong console trình duyệt',
  },
  importNewTaxonomyToast: {
    id: 'course-authoring.import-tags.new.toast.success',
    defaultMessage: '"{name}" đã được nhập',
  },
  importTaxonomyToast: {
    id: 'course-authoring.import-tags.toast.success',
    defaultMessage: '"{name}" đã được cập nhật',
  },
  importTaxonomyErrorAlert: {
    id: 'course-authoring.import-tags.error-alert.title',
    defaultMessage: 'Lỗi nhập dữ liệu',
  },
});

export default messages;