import { MdAdd } from "react-icons/md";
import { YellowDashedCard, Button } from "./styled";

const DashedCard: React.FC = () => {
  return (
    <YellowDashedCard>
      <Button>
        <MdAdd size={27} />
        新增輔具
      </Button>
    </YellowDashedCard>
  );
};

export default DashedCard;
