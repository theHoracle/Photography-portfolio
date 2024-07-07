import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  onClickLeftButton?: () => void;
  onClickRightButton?: () => void;
};
const LeftRightButton = (props: Props) => {
  const { onClickLeftButton, onClickRightButton } = props;
  return (
    <div className="border-2 bg-background-color border-border-primary rounded-full mx-auto flex  max-w-32 items-center justify-between p-1.5 gap-1.5">
      <div
        onClick={onClickLeftButton}
        role="button"
        aria-label="left-button"
        className="border border-border-secondary rounded-full bg-border-primary p-2 hover:bg-border-secondary"
      >
        <ChevronLeft height={30} width={30} />
      </div>
      <div
        onClick={onClickRightButton}
        role="button"
        aria-label="right-button"
        className="border border-border-secondary rounded-full bg-border-primary p-2 hover:bg-border-secondary"
      >
        <ChevronRight height={30} width={30} />
      </div>
    </div>
  );
};

export default LeftRightButton;
