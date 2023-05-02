import { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { HStack } from '@/components/ui';

interface TabsProps<T> {
  tabs: TabProps<T>[];
  activeIndex?: number;
  onChange?: (index: number) => void;
}

export interface TabProps<T> {
  label: ReactNode;
  content?: JSX.Element;
  value: T;
}

export const Tabs = <T,>({ tabs, activeIndex, onChange }: TabsProps<T>) => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeIndex ?? 0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);
  const tabsRef = useRef<HTMLButtonElement[]>([]);
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    onChange?.(index);
  };

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setIndicatorLeft(currentTab?.offsetLeft ?? 0);
      setIndicatorWidth(currentTab?.clientWidth ?? 0);
      setIndicatorHeight(currentTab?.clientHeight ?? 0);
    };

    setTabPosition();
    window.addEventListener('resize', setTabPosition);
    return () => {
      window.removeEventListener('resize', setTabPosition);
    };
  }, [activeIndex, activeTabIndex]);

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            isActive={activeTabIndex === index}
            onClick={() => handleTabClick(index)}
            ref={el => {
              if (!el) return;
              tabsRef.current[index] = el;
            }}
          >
            {tab.label}
          </TabButton>
        ))}
        {/*Deducted -2 because the tab has a border of 1px*/}
        <TabIndicator
          style={{
            left: indicatorLeft,
            width: indicatorWidth - 2,
            height: indicatorHeight - 2,
          }}
        />
      </TabList>
      {tabs[activeTabIndex].content && tabs[activeTabIndex].content}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  width: 100%;
`;

const TabList = styled(HStack)`
  position: relative;
  padding: 2px;
  margin: 0;
  list-style: none;
  background-color: #f3f4f6;
  border-radius: clamp(2px, 70%, 6px);
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 12px;
  z-index: 2;
  color: ${props => (props.isActive ? '#4D5562' : '#4D5562')};
  font-size: 14px;
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: transparent;
`;

const TabIndicator = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${props => props.theme.colors.white};
  transition: 0.25s ease-in-out;
  border-radius: clamp(1px, 70%, 5px);
  border: 1px solid ${props => props.theme.colors.gray300};
`;
