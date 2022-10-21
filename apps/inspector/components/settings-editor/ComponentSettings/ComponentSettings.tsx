import * as t from '@composite/types';
import { Stringifier, Parser } from '@composite/parser';

import { Box } from '@app/components/box';
import { PairInput } from '@app/components/pair-input';
import { TextField } from '@app/components/text-field';
import { useEditor } from '@app/editor';
import { styled } from '@app/styles';
import * as React from 'react';
import { SettingSection } from '../SettingSection';
import { TemplateLayers } from './TemplateLayers';
import { SettingsScreen } from '../SettingsScreen';
import { TemplateSettings } from '../TemplateSettings';

const stringifier = new Stringifier();
const parser = new Parser();

const ComponentHeader = styled('div', {
  px: '$4',
  py: '$2',
  display: 'flex',
  alignItems: 'center',
  input: {
    padding: '2px 4px',
    marginLeft: '-4px',
    marginRight: '-4px',
    fontSize: '$4',

    '&:hover': {
      background: '$grayA5',
    },
  },
});

export const ComponentSettings = () => {
  const editor = useEditor();
  const [isAddingNewState, setIsAddingNewState] = React.useState(false);

  if (editor.settings.current.type !== 'component') {
    return null;
  }

  const component = editor.settings.current.component;

  if (!(component instanceof t.CompositeComponent)) {
    return null;
  }

  return (
    <Box css={{ display: 'flex', flexDirection: 'column' }}>
      <ComponentHeader>
        <TextField
          css={{ flex: 1 }}
          transparent
          value={component.name}
          onChange={() => {}}
        />
      </ComponentHeader>
      <SettingSection title="State" onAdd={() => setIsAddingNewState(true)}>
        <PairInput
          values={component.state.map((state) => ({
            id: state.name,
            value: stringifier.toString(state.init),
          }))}
          addingNewField={isAddingNewState}
          onCancelAdding={() => setIsAddingNewState(false)}
          onChange={(id, value) => {
            const existingStateWithSameName = component.state.find(
              (state) => state.name === id
            );

            if (!existingStateWithSameName) {
              return;
            }

            const parsedValue = parser.parseExpressionFromSource(`{${value}}`);

            if (!parsedValue) {
              return;
            }

            editor.state.change(() => {
              existingStateWithSameName.init = parsedValue;
            });
          }}
          onAdd={(id, value, clear) => {
            const existingStateWithSameName = component.state.find(
              (state) => state.name === id
            );

            if (existingStateWithSameName) {
              return;
            }

            const parsedValue = parser.parseExpressionFromSource(`${value}`);

            if (!parsedValue) {
              return;
            }

            editor.state.change(() => {
              component.state.push(
                t.val({
                  name: id,
                  init: parsedValue,
                })
              );

              clear();
            });
          }}
        />
      </SettingSection>
      <Box css={{ position: 'relative', flex: 1 }}>
        <SettingsScreen route="component" hideBackButton>
          <SettingSection title="Template" collapsedOnInitial={false}>
            <TemplateLayers componentId={component.id} />
          </SettingSection>
        </SettingsScreen>
        <SettingsScreen route="template" goBackText="Templates">
          <TemplateSettings />
        </SettingsScreen>
      </Box>
    </Box>
  );
};