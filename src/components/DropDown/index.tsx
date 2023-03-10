import React, { useEffect } from 'react';
import { useLanguageContext } from 'src/hooks/language';
import { Dropdown } from '@nextui-org/react';
export default function App() {
  const [selected, setSelected] = React.useState(new Set(['English']));

  const { changeLanguage } = useLanguageContext();

  const selectedValue = React.useMemo(() => Array.from(selected).join(', ').replaceAll('_', ' '), [selected]);

  useEffect(() => {
    changeLanguage(selectedValue);
  }, [selected, selectedValue, changeLanguage]);

  return (
    <Dropdown>
      <Dropdown.Button flat color="default" css={{ tt: 'capitalize' }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={(value: any) => setSelected(value)}
      >
        <Dropdown.Item key="English">πΊπΈ English</Dropdown.Item>
        <Dropdown.Item key="Portuguese">π§π· Portuguese</Dropdown.Item>
        <Dropdown.Item key="Spanish">πͺπΈ Spanish</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
