import React, { useState, useMemo } from 'react';
import { Layout, Input, Typography, AutoComplete } from 'antd';

const { Sider } = Layout;
const { Title } = Typography;
const { Paragraph } = Typography;

interface NeighborhoodSidebarProps {
    autoCompleteOptions: { value: string }[];
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onSelectNeighborhood: (value: string) => void;
    onHighlight: (value: string | null) => void;
}

const NeighborhoodSidebar: React.FC<NeighborhoodSidebarProps> = ({
    autoCompleteOptions,
    searchTerm,
    onSearchChange,
    onSelectNeighborhood,
    onHighlight,
}) => {
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

    const filteredOptions = useMemo(() => {
        if (!searchTerm) {
            return autoCompleteOptions;
        }
        const upperSearchTerm = searchTerm.toUpperCase();
        return autoCompleteOptions.filter(option =>
            option.value.toUpperCase().includes(upperSearchTerm)
        );
    }, [searchTerm, autoCompleteOptions]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        let newIndex = highlightedIndex;

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            newIndex = (highlightedIndex + 1) % filteredOptions.length;
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            newIndex = (highlightedIndex - 1 + filteredOptions.length) % filteredOptions.length;
        } else if (event.key === 'Enter') {
            event.preventDefault();
            if (filteredOptions.length === 1) {
                onSelectNeighborhood(filteredOptions[0].value);
                newIndex = -1;
            } else if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
                onSelectNeighborhood(filteredOptions[highlightedIndex].value);
                newIndex = -1;
            }
        } else if (event.key === 'Escape') {
            newIndex = -1;
        }

        setHighlightedIndex(newIndex);

        if (newIndex >= 0 && newIndex < filteredOptions.length) {
            onHighlight(filteredOptions[newIndex].value);
        } else {
            onHighlight(null);
        }
    };

    const handleSearch = (value: string) => {
        setHighlightedIndex(-1);
        onHighlight(null);
        onSearchChange(value);
    }

    const handleSelect = (value: string) => {
        setHighlightedIndex(-1);
        onHighlight(null);
        onSelectNeighborhood(value);
    }

     return (
        <Sider
          width={300}
          theme="light"
          className="neighborhood-sidebar"
        >
            <Title level={4} style={{ marginBottom: '16px', textAlign: 'center' }}>Rio Artists</Title>
            <Paragraph style={{ marginBottom: '16px', textAlign: 'left' }}>
                Select a neighborhood to see related artists, click an artist to play their music.
            </Paragraph>
            <AutoComplete
                options={filteredOptions}
                style={{ width: '100%', marginBottom: '16px' }}
                onSearch={handleSearch}
                onSelect={handleSelect}
                value={searchTerm}
                placeholder="Search neighborhoods"
                filterOption={false}
            >
              <Input
                allowClear
                onKeyDown={handleKeyDown}
              />
            </AutoComplete>
        </Sider>
    );
};

export default NeighborhoodSidebar;