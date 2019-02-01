import { library } from '@fortawesome/fontawesome-svg-core'
import { faObjectGroup, faObjectUngroup, faEllipsisV, faPaintBrush, faTable } from '@fortawesome/free-solid-svg-icons'
import { appConfig } from 'src/logic'
/* eslint no-console: "off" */

library.add(faObjectGroup)
library.add(faObjectUngroup)
library.add(faEllipsisV)
library.add(faPaintBrush)
library.add(faTable)

if (appConfig.disabledReactIntlMissingTranslateMessage) {
  // Disable missing translation message as translations will be added later.
  // We can add a toggle for this later when we have most translations.

  // eslint-disable-next-line
  const consoleError = console.error.bind(console);
  // eslint-disable-next-line
  console.error = (message, ...args) => {
    if (typeof message === 'string' && message.startsWith('[React Intl]')) {
      return;
    }
    consoleError(message, ...args);
  };
}
