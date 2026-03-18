import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  exportModalTitle: {
    id: 'course-authoring.taxonomy-list.modal.export.title',
    defaultMessage: 'Chọn định dạng xuất',
  },
  exportModalBodyDescription: {
    id: 'course-authoring.taxonomy-list.modal.export.body',
    defaultMessage: 'Chọn định dạng tệp mà bạn muốn xuất phân loại:',
  },
  exportModalSubmitButtonLabel: {
    id: 'course-authoring.taxonomy-list.modal.export.submit.label',
    defaultMessage: 'Xuất',
  },
  taxonomyCSVFormat: {
    id: 'course-authoring.taxonomy-list.csv-format',
    defaultMessage: 'Tệp CSV',
  },
  taxonomyJSONFormat: {
    id: 'course-authoring.taxonomy-list.json-format',
    defaultMessage: 'Tệp JSON',
  },
  taxonomyModalsCancelLabel: {
    id: 'course-authoring.taxonomy-list.modal.cancel',
    defaultMessage: 'Hủy',
  },
});

export default messages;