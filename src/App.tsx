import { theme } from '@/shared/styles/theme.ts';
import { Container, Flex, Grid, TabProps, Tabs } from '@/components/ui';
import { EyeIcon } from '@/components/icons/EyeIcon.tsx';
import { titleCase } from '@/shared/utils/title-case/title-case.ts';
import { AppMode } from '@/shared/constants';
import { SelectorIcon } from '@/components/icons/Selector.tsx';
import { TabLabel } from '@/components/TabLabel/TabLabel.tsx';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { selectActiveMode } from '@/store/slices/app/app.selectors.ts';
import { calculatorActions } from '@/store/slices/calculator/calculator.slice.ts';
import { appActions } from '@/store/slices/app/app.slice.ts';
import { useRef, useState } from 'react';
import { SideBar } from '@/components/SideBar/SideBar.tsx';
import { Calculator } from '@/components/Calculator/Calculator.tsx';

function App() {
  const appMode = useAppSelector(selectActiveMode);
  const dispatch = useAppDispatch();

  const tabs = useRef<TabProps<AppMode>[]>([
    {
      label: (
        <TabLabel
          icon={<EyeIcon stroke={theme.colors.accentColor} />}
          text={titleCase(AppMode.Runtime)}
        />
      ),
      value: AppMode.Runtime,
    },
    {
      label: (
        <TabLabel
          icon={<SelectorIcon stroke={theme.colors.accentColor} />}
          text={titleCase(AppMode.Constructor)}
        />
      ),
      value: AppMode.Constructor,
    },
  ]);

  const [activeTabIndex, setActiveTabIndex] = useState(1);

  const handleTabClick = (index: number) => {
    const tab = tabs.current[index];
    dispatch(appActions.setMode(tab.value));
    dispatch(calculatorActions.reset());
    setActiveTabIndex(index);
  };

  return (
    <Container maxWidth="540px" height="100%">
      <Flex
        justify="center"
        direction="column"
        width="100%"
        height="100%"
        gap="20px"
        as="section"
      >
        <Tabs
          onChange={handleTabClick}
          activeIndex={activeTabIndex}
          tabs={tabs.current}
        />
        <Grid columns={2} gap="40px">
          <main>{appMode === 'constructor' && <SideBar />}</main>
          <Calculator />
        </Grid>
      </Flex>
    </Container>
  );
}

export default App;
