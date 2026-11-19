import { useEffect, useState } from 'react';
import { services } from '../data/site';
import Select from './Select';
import type TopicPopup from './TopicPopup';

const options = [
  { value: '', label: 'I’d like your advice' },
  ...services.map(({ name }) => ({ value: name, label: name })),
  { value: 'Something else', label: 'Something else' },
];

export interface TopicFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ContactTopic({ value, onChange }: TopicFieldProps) {
  const [Picker, setPicker] = useState<typeof TopicPopup | null>(null);
  const [usingNative, setUsingNative] = useState(false);
  useEffect(() => {
    let active = true;
    // Keep the prerendered control usable on a slow connection or chunk failure.
    import('./TopicPopup').then(({ default: popup }) => {
      if (active) {
        setUsingNative(document.activeElement?.id === 'topic');
        setPicker(() => popup);
      }
    }).catch(() => {});
    return () => { active = false; };
  }, []);

  if (Picker && !usingNative) return <Picker value={value} onChange={onChange} options={options} />;
  return <Select id="topic" name="subject" value={value} onBlur={() => setUsingNative(false)}
    onChange={e => onChange(e.target.value)}>
    {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
  </Select>;
}
