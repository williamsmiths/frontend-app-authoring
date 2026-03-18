import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  alertFailedGeneric: {
    id: 'course-authoring.course-unit.general.alert.error.description',
    defaultMessage: 'Không thể {actionName} {type}. Vui lòng thử lại.',
  },
  alertUnpublishedVersion: {
    id: 'course-authoring.course-unit.general.alert.unpublished-version.description',
    defaultMessage: 'Lưu ý: Phiên bản đã được xuất bản gần nhất của đơn vị học này hiện đang hiển thị cho học viên. Khi bạn xuất bản thay đổi, trải nghiệm của học viên sẽ bị thay đổi.',
  },
  pasteButtonText: {
    id: 'course-authoring.course-unit.paste-component.btn.text',
    defaultMessage: 'Dán thành phần',
  },
  alertMoveSuccessTitle: {
    id: 'course-authoring.course-unit.alert.xblock.move.success.title',
    defaultMessage: 'Thành công!',
    description: 'Title for the success alert when an XBlock is moved successfully',
  },
  alertMoveSuccessDescription: {
    id: 'course-authoring.course-unit.alert.xblock.move.success.description',
    defaultMessage: '{title} đã được di chuyển',
    description: 'Description for the success alert when an XBlock is moved successfully',
  },
  alertMoveCancelTitle: {
    id: 'course-authoring.course-unit.alert.xblock.move.cancel.title',
    defaultMessage: 'Đã hủy di chuyển',
    description: 'Title for the alert when moving an XBlock is cancelled',
  },
  alertMoveCancelDescription: {
    id: 'course-authoring.course-unit.alert.xblock.move.cancel.description',
    defaultMessage: '{title} đã được đưa về vị trí ban đầu',
    description: 'Description for the alert when moving an XBlock is cancelled and the XBlock is moved back to its original location',
  },
  undoMoveButton: {
    id: 'course-authoring.course-unit.alert.xblock.move.undo.btn.text',
    defaultMessage: 'Hoàn tác di chuyển',
    description: 'Text for the button allowing users to undo a move action of an XBlock',
  },
  newLocationButton: {
    id: 'course-authoring.course-unit.alert.xblock.new.location.btn.text',
    defaultMessage: 'Đưa tôi đến vị trí mới',
    description: 'Text for the button allowing users to navigate to the new location after an XBlock has been moved',
  },
  alertLibraryUnitReadOnlyText: {
    id: 'course-authoring.course-unit.alert.read-only.text',
    defaultMessage: 'Đơn vị học này chỉ có thể chỉnh sửa từ {link}.',
    description: 'Text of the alert when the unit is read only because is a library unit',
  },
  alertLibraryUnitReadOnlyLinkText: {
    id: 'course-authoring.course-unit.alert.read-only.link.text',
    defaultMessage: 'thư viện',
    description: 'Text of the link in the alert when the unit is read only because is a library unit',
  },
});

export default messages;