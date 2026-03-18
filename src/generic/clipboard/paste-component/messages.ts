import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  popoverContentText: {
    id: 'course-authoring.generic.paste-component.popover.content.text',
    defaultMessage: 'Từ:',
    description: 'The popover content label before the source course name of the copied content.',
  },
  pasteButtonWhatsInClipboardText: {
    id: 'course-authoring.generic.paste-component.paste-button.whats-in-clipboard.text',
    defaultMessage: 'Có gì trong clipboard của tôi?',
    description: 'The popover trigger button text of the info about copied content.',
  },
});

export default messages;