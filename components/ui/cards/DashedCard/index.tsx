import { MdAdd } from "react-icons/md";
import { YellowDashedCard, ActionButton } from "./styled";

const DashedCard: React.FC = () => {
  return (
    <YellowDashedCard>
      <ActionButton href="/product">
        <MdAdd size={27} />
        新增輔具
      </ActionButton>
    </YellowDashedCard>
  );
};

export default DashedCard;
