import { DndTypes } from '@/shared/constants';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface Props extends PropsWithChildren {
  canDrag: boolean;
  type: DndTypes;
  index?: number;
  setOverlayItemType?: (type: DndTypes | null) => void;
}

export const DragItem: FC<Props> = props => {
  const { children, canDrag, type, index, setOverlayItemType } = props;

  const [, drag] = useDrag(
    () => ({
      type,
      canDrag: () => canDrag,
      item: { type, index },
    }),
    [canDrag],
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: Object.values(DndTypes),
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (isOver) {
      setOverlayItemType?.(type);
    }
    return () => setOverlayItemType?.(null);
  }, [isOver, setOverlayItemType, type]);

  return <div ref={el => drop(drag(el))}>{children}</div>;
};
