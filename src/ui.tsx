import '!prismjs/themes/prism.css';

import { render, Tabs, TabsOption } from '@create-figma-plugin/ui';
import { h, JSX } from 'preact';
import { useState } from 'preact/hooks';
import { GenerateTab } from './tabs/generate/generateTab';

function Plugin() {
  const [value, setValue] = useState<null | string>(null);
  const options: Array<TabsOption> = [
    { children: <GenerateTab />, value: 'Generate' },
    { children: <div>Datasets</div>, value: 'Datasets' },
    { children: <div>Settings</div>, value: 'Settings' },
  ];
  const handleChange = (event: JSX.TargetedEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Tabs onChange={handleChange} options={options} value={value} />
    </div>
  );
}

export default render(Plugin);
