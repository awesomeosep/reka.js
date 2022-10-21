import * as React from 'react';
import { Box } from '@app/components/box';
import Image from 'next/image';
import { Button } from '../button';
import { Collaborators } from '../editor-panel/Collaborators';
import { useEditor } from '@app/editor';
import { EditorMode } from '@app/editor/Editor';
import { observer } from 'mobx-react-lite';
import { Text } from '../text';
import { AddFrameModal } from './AddFrameModal';

export const Header = observer(() => {
  const editor = useEditor();
  const [isFrameModalShowing, setIsFrameModalShowing] = React.useState(false);

  return (
    <React.Fragment>
      <Box
        css={{
          backgroundColor: '#fff',
          backdropFilter: 'blur(5px)',
          color: '$grayA12',
          px: '$4',
          py: '$3',
          borderBottom: '1px solid $grayA5',
        }}
      >
        <Box css={{ display: 'flex', ai: 'center' }}>
          <Box css={{ display: 'flex', flex: 1, ai: 'center' }}>
            <Box css={{ ml: '$2' }}>
              <Image src="/logo.svg" width={30} height={30} />
            </Box>
            <Box css={{ ml: '$4' }}>
              <Text size={'2'}>Projects</Text>
            </Box>
          </Box>
          <Box css={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Collaborators />
            <Button
              variant="secondary"
              css={{ py: '$3', px: '$4' }}
              onClick={() => {
                if (editor.mode === EditorMode.Code) {
                  editor.setMode(EditorMode.UI);
                  return;
                }
                editor.setMode(EditorMode.Code);
              }}
            >
              {editor.mode === EditorMode.Code ? 'Use Editor' : 'View Code'}
            </Button>
            <Button
              variant="bw"
              css={{ py: '$3', px: '$4' }}
              onClick={() => {
                setIsFrameModalShowing(true);
              }}
            >
              Add frame
            </Button>
          </Box>
        </Box>
      </Box>
      <AddFrameModal
        isOpen={isFrameModalShowing}
        onClose={() => {
          setIsFrameModalShowing(false);
        }}
      />
    </React.Fragment>
  );
});