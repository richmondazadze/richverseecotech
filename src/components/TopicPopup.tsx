import { Select } from '@base-ui/react/select';
import Icon from './Icon';
import type { TopicFieldProps } from './ContactTopic';

export default function TopicPopup({ value, onChange, options }: TopicFieldProps & {
  options: { value: string; label: string }[];
}) {
  return <Select.Root id="topic" name="subject" items={options} value={value}
    onValueChange={next => onChange(next ?? '')} modal={false}>
    <Select.Trigger type="button" value={value} className="topic-trigger" aria-labelledby="topic-label">
      <Select.Value/><Icon name="chevron-down" size={18}/>
    </Select.Trigger>
    <Select.Portal>
      <Select.Positioner className="topic-positioner" sideOffset={6} align="start" alignItemWithTrigger={false}>
        <Select.Popup className="topic-popup">
          <Select.List className="topic-options" aria-labelledby="topic-label">
            {options.map(option => <Select.Item key={option.value} value={option.value} className="topic-option">
              <Select.ItemText>{option.label}</Select.ItemText>
              <Select.ItemIndicator><Icon name="check" size={16}/></Select.ItemIndicator>
            </Select.Item>)}
          </Select.List>
        </Select.Popup>
      </Select.Positioner>
    </Select.Portal>
  </Select.Root>;
}
