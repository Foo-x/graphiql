import _ArgumentIcon from './argument.svg';
import _ChevronDownIcon from './chevron-down.svg';
import _ChevronLeftIcon from './chevron-left.svg';
import _ChevronUpIcon from './chevron-up.svg';
import _CloseIcon from './close.svg';
import _DeprecatedArgumentIcon from './deprecated-argument.svg';
import _DeprecatedFieldIcon from './deprecated-field.svg';
import _DocsIcon from './docs.svg';
import _FieldIcon from './field.svg';
import _HistoryIcon from './history.svg';
import _KeyboardShortcutIcon from './keyboard-shortcut.svg';
import _PenIcon from './pen.svg';
import _PlayIcon from './play.svg';
import _PlusIcon from './plus.svg';
import _PrettifyIcon from './prettify.svg';
import _RootTypeIcon from './root-type.svg';
import _SettingsIcon from './settings.svg';
import _StarFilledIcon from './star-filled.svg';
import _StarIcon from './star.svg';
import _StopIcon from './stop.svg';
import _TypeIcon from './type.svg';

export const ArgumentIcon = generateIcon(_ArgumentIcon, 'argument icon');
export const ChevronDownIcon = generateIcon(
  _ChevronDownIcon,
  'chevron down icon',
);
export const ChevronLeftIcon = generateIcon(
  _ChevronLeftIcon,
  'chevron left icon',
);
export const ChevronUpIcon = generateIcon(_ChevronUpIcon, 'chevron up icon');
export const CloseIcon = generateIcon(_CloseIcon, 'close icon');
export const DeprecatedArgumentIcon = generateIcon(
  _DeprecatedArgumentIcon,
  'depreaceted argument icon',
);
export const DeprecatedFieldIcon = generateIcon(
  _DeprecatedFieldIcon,
  'depreaceted field icon',
);
export const DocsIcon = generateIcon(_DocsIcon, 'docs icon');
export const FieldIcon = generateIcon(_FieldIcon, 'field icon');
export const HistoryIcon = generateIcon(_HistoryIcon, 'history icon');
export const KeyboardShortcutIcon = generateIcon(
  _KeyboardShortcutIcon,
  'keyboard shortcut icon',
);
export const PenIcon = generateIcon(_PenIcon, 'pen icon');
export const PlayIcon = generateIcon(_PlayIcon, 'play icon');
export const PlusIcon = generateIcon(_PlusIcon, 'plus icon');
export const PrettifyIcon = generateIcon(_PrettifyIcon, 'prettify icon');
export const RootTypeIcon = generateIcon(_RootTypeIcon, 'root type icon');
export const SettingsIcon = generateIcon(_SettingsIcon, 'settings icon');
export const StarFilledIcon = generateIcon(_StarFilledIcon, 'filled star icon');
export const StarIcon = generateIcon(_StarIcon, 'star icon');
export const StopIcon = generateIcon(_StopIcon, 'stop icon');
export const TypeIcon = generateIcon(_TypeIcon, 'type icon');

function generateIcon(RawComponent: any, title: string) {
  const WithTitle = function IconComponent(
    props: JSX.IntrinsicElements['svg'],
  ) {
    return <RawComponent {...props} title={title} />;
  };
  Object.defineProperty(WithTitle, 'name', { value: RawComponent.name });
  return WithTitle;
}
